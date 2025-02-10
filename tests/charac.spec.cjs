// @ts-check
import { test, expect } from '@playwright/test';

test('updates Weapon Skill charac outputs', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Fill charac initial value
  await page.locator('#ws-i').fill('35');
  await expect(page.locator('#current-ws')).toHaveText('35');
  await expect(page.locator('#bonus-ws')).toHaveText('3');

  // Fill charac advances values
  await page.locator('#ws-a').fill('5');
  await expect(page.locator('#current-ws')).toHaveText('40');
  await expect(page.locator('#bonus-ws')).toHaveText('4');

  // Check basic releated skills
  await expect(page.locator('#melee-basic-current')).toHaveText('40');
  await expect(page.locator('#melee-current')).toHaveText('40');
});

test('updates Ballistic Skill charac outputs', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Fill charac initial value
  await page.locator('#bs-i').fill('35');
  await expect(page.locator('#current-bs')).toHaveText('35');
  await expect(page.locator('#bonus-bs')).toHaveText('3');

  // Fill charac advances values
  await page.locator('#bs-a').fill('5');
  await expect(page.locator('#current-bs')).toHaveText('40');
  await expect(page.locator('#bonus-bs')).toHaveText('4');
});

test('updates Strength charac outputs', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Fill charac initial value
  await page.locator('#s-i').fill('35');
  await expect(page.locator('#current-s')).toHaveText('35');
  await expect(page.locator('#bonus-s')).toHaveText('3');

  // Fill charac advances values
  await page.locator('#s-a').fill('5');
  await expect(page.locator('#current-s')).toHaveText('40');
  await expect(page.locator('#bonus-s')).toHaveText('4');

  // Check basic releated skills
  await expect(page.locator('#climb-current')).toHaveText('40');
  await expect(page.locator('#intimidate-current')).toHaveText('40');
  await expect(page.locator('#row-current')).toHaveText('40');
});

test('updates Toughness charac outputs', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Fill charac initial value
  await page.locator('#t-i').fill('35');
  await expect(page.locator('#current-t')).toHaveText('35');
  await expect(page.locator('#bonus-t')).toHaveText('3');

  // Fill charac advances values
  await page.locator('#t-a').fill('5');
  await expect(page.locator('#current-t')).toHaveText('40');
  await expect(page.locator('#bonus-t')).toHaveText('4');

  // Check basic releated skills
  await expect(page.locator('#consume-alcohol-current')).toHaveText('40');
  await expect(page.locator('#endurance-current')).toHaveText('40');
});

test('updates Initiative charac outputs', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Fill charac initial value
  await page.locator('#i-i').fill('35');
  await expect(page.locator('#current-i')).toHaveText('35');
  await expect(page.locator('#bonus-i')).toHaveText('3');

  // Fill charac advances values
  await page.locator('#i-a').fill('5');
  await expect(page.locator('#current-i')).toHaveText('40');
  await expect(page.locator('#bonus-i')).toHaveText('4');

  // Check basic releated skills
  await expect(page.locator('#intuition-current')).toHaveText('40');
  await expect(page.locator('#navigation-current')).toHaveText('40');
  await expect(page.locator('#perception-current')).toHaveText('40');
});

test('updates Agility charac outputs', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Fill charac initial value
  await page.locator('#ag-i').fill('35');
  await expect(page.locator('#current-ag')).toHaveText('35');
  await expect(page.locator('#bonus-ag')).toHaveText('3');

  // Fill charac advances values
  await page.locator('#ag-a').fill('5');
  await expect(page.locator('#current-ag')).toHaveText('40');
  await expect(page.locator('#bonus-ag')).toHaveText('4');

  // Check basic releated skills
  await expect(page.locator('#athletics-current')).toHaveText('40');
  await expect(page.locator('#dodge-current')).toHaveText('40');
  await expect(page.locator('#drive-current')).toHaveText('40');
  await expect(page.locator('#ride-current')).toHaveText('40');
  await expect(page.locator('#stealth-current')).toHaveText('40');
});

test('updates Dexterity charac outputs', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Fill charac initial value
  await page.locator('#dex-i').fill('35');
  await expect(page.locator('#current-dex')).toHaveText('35');
  await expect(page.locator('#bonus-dex')).toHaveText('3');

  // Fill charac advances values
  await page.locator('#dex-a').fill('5');
  await expect(page.locator('#current-dex')).toHaveText('40');
  await expect(page.locator('#bonus-dex')).toHaveText('4');

  // Check basic releated skills
  await expect(page.locator('#art-current')).toHaveText('40');
});

test('updates Intelligence charac outputs', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Fill charac initial value
  await page.locator('#int-i').fill('35');
  await expect(page.locator('#current-int')).toHaveText('35');
  await expect(page.locator('#bonus-int')).toHaveText('3');

  // Fill charac advances values
  await page.locator('#int-a').fill('5');
  await expect(page.locator('#current-int')).toHaveText('40');
  await expect(page.locator('#bonus-int')).toHaveText('4');

  // Check basic releated skills
  await expect(page.locator('#gamble-current')).toHaveText('40');
  await expect(page.locator('#outdoor-survival-current')).toHaveText('40');
});

test('updates Will Power charac outputs', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Fill charac initial value
  await page.locator('#wp-i').fill('35');
  await expect(page.locator('#current-wp')).toHaveText('35');
  await expect(page.locator('#bonus-wp')).toHaveText('3');

  // Fill charac advances values
  await page.locator('#wp-a').fill('5');
  await expect(page.locator('#current-wp')).toHaveText('40');
  await expect(page.locator('#bonus-wp')).toHaveText('4');

  // Check basic releated skills
  await expect(page.locator('#charm-animal-current')).toHaveText('40');
  await expect(page.locator('#cool-current')).toHaveText('40');
});

test('updates Fellowship charac outputs', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Fill charac initial value
  await page.locator('#fel-i').fill('35');
  await expect(page.locator('#current-fel')).toHaveText('35');
  await expect(page.locator('#bonus-fel')).toHaveText('3');

  // Fill charac advances values
  await page.locator('#fel-a').fill('5');
  await expect(page.locator('#current-fel')).toHaveText('40');
  await expect(page.locator('#bonus-fel')).toHaveText('4');

  // Check basic releated skills
  await expect(page.locator('#bribery-current')).toHaveText('40');
  await expect(page.locator('#charm-current')).toHaveText('40');
  await expect(page.locator('#entertain-current')).toHaveText('40');
  await expect(page.locator('#gossip-current')).toHaveText('40');
  await expect(page.locator('#haggle-current')).toHaveText('40');
  await expect(page.locator('#leadership-current')).toHaveText('40');
});
