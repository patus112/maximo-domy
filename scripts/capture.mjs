import { mkdir } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { chromium } from 'playwright';

const port = 4331;
const root = `http://127.0.0.1:${port}/maximo-domy/`;
const outDir = process.env.SHOT_DIR || '/opt/cursor/artifacts';

const pages = [
  { slug: 'domov', path: '' },
  { slug: 'typy-domov', path: 'typy-domov/' },
  { slug: 'kontakt', path: 'kontakt/' },
];

function waitForServer(url) {
  const started = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          resolve();
          return;
        }
      } catch {
        /* preview still booting */
      }
      if (Date.now() - started > 120000) {
        reject(new Error(`preview did not start: ${url}`));
        return;
      }
      setTimeout(tick, 400);
    };
    tick();
  });
}

function settle(page) {
  const paint = page.evaluate(`(() => {
    HTMLVideoElement.prototype.play = function () { this.pause(); return Promise.resolve(); };
    document.querySelectorAll('video').forEach((video) => video.pause());
    document.querySelectorAll('.video-frame').forEach((frame) => frame.classList.remove('is-playing'));
    const img = document.querySelector('.hero-media .video-still img, .video-still');
    const sample = document.querySelector('.video-still img, img.video-still');
    return {
      hero: sample ? { w: sample.naturalWidth, src: sample.currentSrc, visibility: getComputedStyle(sample).visibility } : null,
      frames: document.querySelectorAll('.video-frame.is-playing').length,
    };
  })()`);
  return Promise.race([paint, new Promise((resolve) => setTimeout(resolve, 4000))]);
}

const preview = spawn('npx', ['astro', 'preview', '--force', '--host', '127.0.0.1', '--port', String(port)], {
  stdio: 'inherit',
  env: {
    ...process.env,
    ASTRO_TELEMETRY_DISABLED: '1',
    SITE_BASE: '/maximo-domy/',
    SITE_URL: 'https://patus112.github.io',
  },
});

try {
  await waitForServer(root);
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.addInitScript(`(() => {
    const style = document.createElement('style');
    style.textContent = '*,*::before,*::after{animation:none!important;transition:none!important}';
    document.addEventListener('DOMContentLoaded', () => document.head.append(style));
  })();`);

  for (const entry of pages) {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(root + entry.path, { waitUntil: 'domcontentloaded' });
    console.log(entry.slug, 'mobile', await settle(page));
    await page.screenshot({
      path: `${outDir}/${entry.slug}-390x844.png`,
      fullPage: true,
    });

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(root + entry.path, { waitUntil: 'domcontentloaded' });
    console.log(entry.slug, 'desktop', await settle(page));
    await page.screenshot({
      path: `${outDir}/${entry.slug}-1440x900.png`,
      fullPage: false,
    });
  }

  await browser.close();
} finally {
  preview.kill('SIGTERM');
}
