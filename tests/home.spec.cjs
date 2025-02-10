// @ts-check
const { test, expect } = require('@playwright/test');

test.use({ viewport: { width: 1180, height: 740 } });

test('has title', async ({ page }) => {
  await page.goto('./wfrp-sheet/');

  await expect(page).toHaveTitle("Warhammer Fantasy Role Play's character sheet");
});

test('displays english content by default', async ({ page }) => {
  await page.goto('./wfrp-sheet/');

  // Get english tab
  const tab = await page.getByRole('link', { name: 'English version' });

  await page.evaluate(() => document.fonts.ready);

  // Expects the tab to be active
  await expect(tab).toHaveClass(/active/);
  await expect(page.locator('.wrapper')).toHaveScreenshot('home-en.png', {fullPage: true});
});

test('link to character sheet in english', async ({ page }) => {
  await page.goto('./wfrp-sheet/');

  // Click the english sheet link.
  await page.getByRole('link', { name: 'See the character sheet' }).click();

  // Expects the URL to contain /en/.
  await expect(page).toHaveURL('./wfrp-sheet/en/');
});

test('link to character sheet in french', async ({ page }) => {
  await page.goto('./wfrp-sheet/');

  // Click on the french tab
  const tab = await page.getByRole('link', { name: 'Version française' });
  await tab.click();

  await page.evaluate(() => document.fonts.ready);

  // Expects the tab to be active now
  await expect(tab).toHaveClass(/active/);
  // Home in french
  await expect(page.locator('.wrapper')).toHaveScreenshot('home-fr.png', {fullPage: true});

  // Click the french sheet link.
  await page.getByRole('link', { name: 'Voir la fiche de personnage' }).click();

  // Expects the URL to contain /fr/.
  await expect(page).toHaveURL('./wfrp-sheet/fr/');
});

test('link to character sheet in russian', async ({ page }) => {
  await page.goto('./wfrp-sheet/');

  // Click on the french tab
  const tab = await page.getByRole("link", { name: "Русская версия" });
  await tab.click();

  await page.evaluate(() => document.fonts.ready);

  // Expects the tab to be active now
  await expect(tab).toHaveClass(/active/);
  // Home in french
  await expect(page.locator('.wrapper')).toHaveScreenshot('home-ru.png', {fullPage: true});

  // Click the french sheet link.
  await page.getByRole("link", { name: "Перейти к листу персонажа" }).click();

  // Expects the URL to contain /fr/.
  await expect(page).toHaveURL('./wfrp-sheet/ru/');
});
