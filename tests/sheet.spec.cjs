// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('narrow viewport', () => {
  test.use({ viewport: { width: 400, height: 900 }});

  test('displays sheet in english', async ({ page }) => {
    await page.goto('./wfrp-sheet/en/');

    await expect(page).toHaveScreenshot('narrow-sheet-en.png');
  });

  test('displays sheet in french', async ({ page }) => {
    await page.goto('./wfrp-sheet/fr/');

    await expect(page).toHaveScreenshot('narrow-sheet-fr.png');
  });
});

test.describe('medium viewport', () => {
  test.use({ viewport: { width: 768, height: 1180 }});

  test('displays sheet in english', async ({ page }) => {
    await page.goto('./wfrp-sheet/en/');

    await expect(page).toHaveScreenshot('medium-sheet-en.png');
  });

  test('displays sheet in french', async ({ page }) => {
    await page.goto('./wfrp-sheet/fr/');

    await expect(page).toHaveScreenshot('medium-sheet-fr.png');
  });
});

test.describe('large viewport', () => {
  test.use({ viewport: { width: 1180, height: 740 }});

  test('displays sheet in english', async ({ page }) => {
    await page.goto('./wfrp-sheet/en/');

    await expect(page.locator('.first')).toHaveScreenshot('large-sheet-1-en.png');
    await expect(page.locator('.second')).toHaveScreenshot('large-sheet-2-en.png');
  });

  test('displays sheet in french', async ({ page }) => {
    await page.goto('./wfrp-sheet/fr/');

    await expect(page.locator('.first')).toHaveScreenshot('large-sheet-1-fr.png');
    await expect(page.locator('.second')).toHaveScreenshot('large-sheet-2-fr.png');
  });
});
