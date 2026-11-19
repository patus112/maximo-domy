import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

const root = '/maximo-domy/';
const pages = [
  { path: root, name: 'domov' },
  { path: `${root}typy-domov/`, name: 'typy-domov' },
  { path: `${root}kontakt/`, name: 'kontakt' },
];

async function expectClean(page: Page, name: string): Promise<void> {
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();
  const message = results.violations
    .map((violation) => {
      const targets = violation.nodes.map((node) => node.target.join(' ')).join(' | ');
      return `${violation.id}: ${violation.help} :: ${targets}`;
    })
    .join('\n');
  expect(results.violations, `${name}\n${message}`).toEqual([]);
}

for (const viewport of [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'desktop', width: 1440, height: 900 },
]) {
  test.describe(viewport.name, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    for (const entry of pages) {
      test(`${entry.name} renders and passes axe`, async ({ page }) => {
        await page.goto(entry.path);
        await page.evaluate(() =>
          Promise.all(document.getAnimations().map((animation) => animation.finished.catch(() => undefined))),
        );
        await expect(page.locator('html')).toHaveAttribute('lang', 'sk');
        await expect(page.locator('h1')).toHaveCount(1);
        await expect(page.locator('iframe')).toHaveCount(0);
        await expect(page.locator('a[href="tel:+421902144643"]').first()).toBeVisible();
        await expectClean(page, `${viewport.name} ${entry.name}`);
      });
    }

    test('home video contract', async ({ page }) => {
      await page.goto(root);
      await expect(page.locator('h1')).toContainText('rozloží');
      await expect(page.getByText('Cenovú ponuku vám pripravíme na mieru').first()).toBeVisible();
      const hero = page.locator('#hero-video');
      await expect(hero).toHaveAttribute('autoplay', '');
      await expect(hero).toHaveAttribute('muted', '');
      await expect(hero).toHaveAttribute('loop', '');
      await expect(hero).toHaveAttribute('playsinline', '');
      await expect(hero).toHaveAttribute('preload', 'metadata');
      await expect(hero.locator('source')).toHaveCount(4);
      await expect(hero.locator('source').first()).toHaveAttribute('media', /(orientation:\s*landscape)/);
      const heroSrc = await hero.locator('source').first().getAttribute('src');
      expect(heroSrc).toContain('/maximo-domy/media/video/hero-expand-wide');
      await expect(page.locator('video[autoplay]')).toHaveCount(1);
      const inline = page.locator('video[data-role="inline"]');
      const inlineCount = await inline.count();
      expect(inlineCount).toBeGreaterThan(0);
      for (let index = 0; index < inlineCount; index += 1) {
        await expect(inline.nth(index)).toHaveAttribute('preload', 'none');
        await expect(inline.nth(index)).not.toHaveAttribute('autoplay', '');
      }
      await expect(page.locator('#film-video')).toHaveAttribute('preload', 'none');
      await expect(page.locator('#film-video source')).toHaveCount(0);
      await expect(page.locator('video[data-ready="1"]').first()).toBeAttached();
      const html = await page.content();
      expect(html).not.toMatch(/youtube\.com|googletagmanager|google-analytics|facebook\.net/i);
      expect(html).not.toMatch(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
    });
  });
}

test('types list catalog models and contact imprint', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${root}typy-domov/`);
  await expect(page.locator('article.model-card')).toHaveCount(8);
  await expect(page.locator('#model-20ft')).toContainText('2 spálne');
  await expect(page.locator('#model-20ft')).toContainText('37');
  await expect(page.getByText('Vizualizácia z katalógu').first()).toBeVisible();
  await page.goto(`${root}kontakt/`);
  await expect(page.getByText('MAXIMO TRADE s. r. o.').first()).toBeVisible();
  await expect(page.getByText('48 320 315').first()).toBeVisible();
  await expect(page.getByText('SK2120132916').first()).toBeVisible();
  await expect(page.getByText('130096/B').first()).toBeVisible();
  await expect(page.getByRole('link', { name: /Google Maps/ })).toHaveAttribute('href', /google\.com\/maps/);
  await expect(page.getByRole('link', { name: /Mapy\.cz/ })).toHaveAttribute('href', /mapy\.cz/);
});

test('json-ld names the show house and phone', async ({ page }) => {
  await page.goto(root);
  const raw = await page.locator('script[type="application/ld+json"]').textContent();
  const data = JSON.parse(raw ?? '{}') as { telephone?: string; address?: { streetAddress?: string } };
  expect(data.telephone).toBe('+421902144643');
  expect(data.address?.streetAddress).toBe('Hlavná 89');
});

test('full unfold film starts only after a click', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(root);
  await page.getByRole('button', { name: 'Pozrieť celé rozloženie' }).click();
  const dialog = page.locator('#film-dialog');
  await expect(dialog).toBeVisible();
  await expect(page.locator('#film-video source')).toHaveCount(2);
  await expect(page.locator('#film-video')).toHaveAttribute('controls', '');
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
});

test('gallery lightbox opens and closes', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(root);
  await page.locator('[data-group="tour"]').first().click();
  const dialog = page.locator('#lightbox');
  await expect(dialog).toBeVisible();
  await expect(page.locator('#lightbox-img')).toHaveAttribute('src', /tour20-01-1920\.webp/);
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
});

test('reduced motion does not autoplay the hero', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    reducedMotion: 'reduce',
  });
  const page = await context.newPage();
  await page.goto(`http://127.0.0.1:4321${root}`);
  await expect(page.locator('#hero-video')).toHaveJSProperty('paused', true);
  await expect(page.locator('.hero .video-play')).toBeVisible();
  const playing = await page.evaluate(
    () => [...document.querySelectorAll('video')].filter((video) => !video.paused && !video.ended).length,
  );
  expect(playing).toBe(0);
  await context.close();
});

test('at most one video is playing', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(root);
  await page.locator('#preprava video').scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  const playing = await page.evaluate(
    () => [...document.querySelectorAll('video')].filter((video) => !video.paused && !video.ended).length,
  );
  expect(playing).toBeLessThanOrEqual(1);
});
