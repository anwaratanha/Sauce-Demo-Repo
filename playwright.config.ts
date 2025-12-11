import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    browserName: 'chromium',
    headless: false,     
    viewport: null,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    launchOptions: {
      args: ['--start-maximized'],
      slowMo: 1000
    }
  },
  reporter: [
    ['html', { outputFolder: 'html-report' }],
    ['list']
  ],
});