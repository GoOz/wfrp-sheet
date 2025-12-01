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

  // Click on the russian tab
  const tab = await page.getByRole("link", { name: "Русская версия" });
  await tab.click();

  await page.evaluate(() => document.fonts.ready);

  // Expects the tab to be active now
  await expect(tab).toHaveClass(/active/);
  // Home in russian
  await expect(page.locator('.wrapper')).toHaveScreenshot('home-ru.png', {fullPage: true});

  // Click the russian sheet link.
  await page.getByRole("link", { name: "Перейти к листу персонажа" }).click();

  // Expects the URL to contain /ru/.
  await expect(page).toHaveURL('./wfrp-sheet/ru/');
});

test('link to character sheet in polish', async ({ page }) => {
  await page.goto('./wfrp-sheet/');

  // Click on the polish tab
  const tab = await page.getByRole("link", { name: "Wersja polska" });
  await tab.click();

  await page.evaluate(() => document.fonts.ready);

  // Expects the tab to be active now
  await expect(tab).toHaveClass(/active/);
  // Home in polish
  await expect(page.locator('.wrapper')).toHaveScreenshot('home-pl.png', {fullPage: true});

  // Click the polish sheet link.
  await page.getByRole("link", { name: "Otwórz kartę postaci" }).click();

  // Expects the URL to contain /pl/.
  await expect(page).toHaveURL('./wfrp-sheet/pl/');
});

test("link to character sheet in spanish", async ({ page }) => {
  await page.goto("./wfrp-sheet/");

  // Click on the polish tab
  const tab = await page.getByRole("link", { name: "Versión española" });
  await tab.click();

  await page.evaluate(() => document.fonts.ready);

  // Expects the tab to be active now
  await expect(tab).toHaveClass(/active/);
  // Home in polish
  await expect(page.locator(".wrapper")).toHaveScreenshot("home-es.png", {
    fullPage: true,
  });

  // Click the polish sheet link.
  await page.getByRole("link", { name: "Ver Hoja de personaje" }).click();

  // Expects the URL to contain /es/.
  await expect(page).toHaveURL("./wfrp-sheet/es/");
});

test("link to character sheet in italian", async ({ page }) => {
  await page.goto("./wfrp-sheet/");

  // Click on the polish tab
  const tab = await page.getByRole("link", { name: "Versione italiana" });
  await tab.click();

  await page.evaluate(() => document.fonts.ready);

  // Expects the tab to be active now
  await expect(tab).toHaveClass(/active/);
  // Home in polish
  await expect(page.locator(".wrapper")).toHaveScreenshot("home-it.png", {
    fullPage: true,
  });

  // Click the polish sheet link.
  await page
    .getByRole("link", { name: "Vedi la scheda del personaggio" })
    .click();

  // Expects the URL to contain /it/.
  await expect(page).toHaveURL("./wfrp-sheet/it/");
});
