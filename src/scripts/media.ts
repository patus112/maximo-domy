/**
 * One video plays at a time.
 * Hero autoplays unless the reader asked for less motion or Save-Data.
 * Other clips stay at preload=none and play only while mostly on screen.
 * The long unfold film and the lightbox never start until a click.
 */

const HOLD = (): boolean => window.__maximoHoldMedia === true;

function videos(): HTMLVideoElement[] {
  return [...document.querySelectorAll<HTMLVideoElement>('video[data-managed]')];
}

let modalLock = false;

function release(video: HTMLVideoElement): void {
  const sibling = video.nextElementSibling;
  if (!(sibling instanceof HTMLTemplateElement) || !sibling.classList.contains('held-sources')) return;
  video.append(sibling.content);
  sibling.remove();
  video.removeAttribute('data-held');
  video.load();
}

function ratio(video: HTMLVideoElement): number {
  const rect = video.getBoundingClientRect();
  if (rect.height <= 0) return 0;
  const viewH = window.innerHeight || 1;
  const visible = Math.min(rect.bottom, viewH) - Math.max(rect.top, 0);
  return visible <= 0 ? 0 : visible / rect.height;
}

function play(video: HTMLVideoElement): void {
  release(video);
  video.muted = true;
  video.playsInline = true;
  for (const other of videos()) {
    if (other !== video && !other.paused) other.pause();
  }
  const pending = video.play();
  if (pending) pending.catch(() => {});
}

function choose(): void {
  if (modalLock || HOLD()) return;
  const inline = videos()
    .filter((video) => video.dataset.role === 'inline')
    .map((video) => ({ video, amount: ratio(video) }))
    .filter((item) => item.amount >= 0.6)
    .sort((a, b) => b.amount - a.amount)[0];

  let desired: HTMLVideoElement | null = inline?.video ?? null;
  if (!desired) {
    const hero = videos().find((video) => video.dataset.role === 'hero') ?? null;
    if (hero && ratio(hero) >= 0.3) desired = hero;
  }

  for (const video of videos()) {
    if (video.dataset.role === 'modal') continue;
    if (video !== desired && !video.paused) video.pause();
  }

  if (!desired || !desired.paused) return;
  if (desired.dataset.role === 'inline') desired.controls = false;
  play(desired);
}

function bindPlayButtons(): void {
  if (!HOLD()) return;
  for (const video of videos()) {
    if (video.dataset.role === 'modal') continue;
    const button = video.parentElement?.querySelector<HTMLButtonElement>('.video-play');
    if (!button) continue;
    button.hidden = false;
    button.addEventListener('click', () => {
      video.preload = 'metadata';
      video.controls = true;
      play(video);
      button.hidden = true;
    });
  }
}

function bindObserver(): void {
  if (HOLD()) return;
  const observed = videos().filter((video) => video.dataset.role !== 'modal');
  if (!observed.length) return;
  const observer = new IntersectionObserver(() => choose(), {
    threshold: [0, 0.25, 0.3, 0.6, 0.75, 1],
  });
  for (const video of observed) {
    video.dataset.bound = '1';
    if (video.dataset.role === 'inline') video.controls = false;
    observer.observe(video);
  }
  choose();
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      for (const video of videos()) {
        if (!video.paused) video.pause();
      }
      return;
    }
    choose();
  });
}

function bindFilm(): void {
  const dialog = document.querySelector<HTMLDialogElement>('#film-dialog');
  const video = document.querySelector<HTMLVideoElement>('#film-video');
  const template = document.querySelector<HTMLTemplateElement>('#film-sources');
  if (!dialog || !video || !template) return;

  const open = (): void => {
    modalLock = true;
    for (const other of videos()) {
      if (!other.paused) other.pause();
    }
    if (!video.querySelector('source')) {
      video.append(template.content.cloneNode(true));
      video.load();
    }
    video.controls = true;
    dialog.showModal();
    play(video);
  };

  for (const button of document.querySelectorAll<HTMLButtonElement>('[data-open-film]')) {
    button.addEventListener('click', open);
  }
  dialog.querySelector<HTMLButtonElement>('[data-film-close]')?.addEventListener('click', () => {
    dialog.close();
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    video.pause();
    modalLock = false;
    choose();
  });
}

function bindLightbox(): void {
  const dialog = document.querySelector<HTMLDialogElement>('#lightbox');
  if (!dialog) return;
  const image = dialog.querySelector<HTMLImageElement>('#lightbox-img');
  const avif = dialog.querySelector<HTMLSourceElement>('#lightbox-avif');
  const caption = dialog.querySelector<HTMLElement>('#lightbox-caption');
  if (!image || !avif || !caption) return;

  const buttons = [...document.querySelectorAll<HTMLButtonElement>('[data-lightbox]')];
  if (!buttons.length) return;

  let group: HTMLButtonElement[] = [];
  let index = 0;

  const show = (next: number): void => {
    if (!group.length) return;
    index = (next + group.length) % group.length;
    const button = group[index];
    if (!button) return;
    avif.srcset = button.dataset.avif ?? '';
    image.src = button.dataset.src ?? '';
    image.alt = button.dataset.alt ?? '';
    image.width = Number(button.dataset.w ?? 640);
    image.height = Number(button.dataset.h ?? 480);
    caption.textContent = button.dataset.alt ?? '';
  };

  const open = (button: HTMLButtonElement): void => {
    const name = button.dataset.group ?? 'gallery';
    group = buttons.filter((item) => (item.dataset.group ?? 'gallery') === name);
    show(Math.max(0, group.indexOf(button)));
    modalLock = true;
    for (const video of videos()) {
      if (!video.paused) video.pause();
    }
    dialog.showModal();
  };

  for (const button of buttons) {
    button.addEventListener('click', () => open(button));
  }
  dialog.querySelector<HTMLButtonElement>('[data-lightbox-close]')?.addEventListener('click', () => {
    dialog.close();
  });
  dialog.querySelector<HTMLButtonElement>('[data-lightbox-prev]')?.addEventListener('click', () => show(index - 1));
  dialog.querySelector<HTMLButtonElement>('[data-lightbox-next]')?.addEventListener('click', () => show(index + 1));
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    modalLock = false;
    image.removeAttribute('src');
    avif.removeAttribute('srcset');
    choose();
  });
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      show(index + 1);
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      show(index - 1);
    }
  });
}

function bindStills(): void {
  for (const video of videos()) {
    const frame = video.closest('.video-frame');
    if (!frame) continue;
    video.addEventListener('playing', () => frame.classList.add('is-playing'));
    video.addEventListener('pause', () => frame.classList.remove('is-playing'));
  }
}

bindStills();
bindPlayButtons();
bindObserver();
bindFilm();
bindLightbox();
for (const video of videos()) video.dataset.ready = '1';
