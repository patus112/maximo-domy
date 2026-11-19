import { defineConfig, devices } from '@playwright/test';

const port = 4321;
const basePath = process.env.SITE_BASE || '/maximo-domy/';
const normalized = basePath === '/' ? '/' : `/${basePath.replace(/^\/+|\/+$/g, '')}/`;

export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: 'list',
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    trace: 'retain-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: `npm run build && npx astro preview --force --host 127.0.0.1 --port ${port}`,
    url: `http://127.0.0.1:${port}${normalized}`,
    reuseExistingServer: !process.env.CI,
    timeout: 180000,
    env: {
      ASTRO_TELEMETRY_DISABLED: '1',
      SITE_BASE: normalized,
      SITE_URL: process.env.SITE_URL || 'https://patus112.github.io',
    },
  },
});
