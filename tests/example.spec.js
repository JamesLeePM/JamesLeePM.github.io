const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});

test('displays heading', async ({ page }) => {
    const heading = page.locator('h1');
    await expect(heading).toHaveText('Example Domain');
});

test.afterEach(async ({ page }) => {
    await page.close();
});