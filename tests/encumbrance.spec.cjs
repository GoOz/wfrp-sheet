// @ts-check
import { test, expect } from '@playwright/test';

test('should update total encumbrance with armour, weapons & trappings values', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Fill stuff with weight in armour
  await page.locator('#armour-encumbrance-0').fill('2');
  await page.locator('#armour-encumbrance-1').fill('1');

  // Fill stuff with weight in trappings
  await page.locator('#trappings-encumbrance-0').fill('2');
  await page.locator('#trappings-encumbrance-1').fill('1');

  // Fill stuff with weight in weapons
  await page.locator('#weapons-encumbrance-0').fill('2');
  await page.locator('#weapons-encumbrance-1').fill('1');

  await expect(page.locator('#encumbrance-armour')).toHaveText('3');
  await expect(page.locator('#encumbrance-trappings')).toHaveText('3');
  await expect(page.locator('#encumbrance-weapons')).toHaveText('3');
  await expect(page.locator('#encumbrance-total')).toHaveText('9');
});

test('should lighten total encumbrance when stuff are worn', async ({ page, context }) => {
  await page.goto('./wfrp-sheet/en/');

  // Fill stuff with weight in armour
  // Workaround to avoid persistent storage permissions popup on Firefox
  await page.locator('#armour-name-0').click();
  await page.locator('#armour-name-0').press('Tab');
  await page.locator('#armour-location-0').press('Tab');
  await page.locator('#armour-encumbrance-0').fill('2');
  await page.locator('#armour-encumbrance-0').press('Tab');
  await page.locator('#armour-ap-0').press('Tab');
  await page.locator('#armour-qualities-0').press('Tab');
  await page.locator('#armour-worn-0').press('Space');
  await page.locator('#armour-worn-0').press('Tab');
  await page.locator('#armour-name-1').press('Tab');
  await page.locator('#armour-location-1').press('Tab');
  await page.locator('#armour-encumbrance-1').fill('1');
  await page.locator('#armour-encumbrance-1').press('Tab');
  await page.locator('#armour-ap-1').press('Tab');
  await page.locator('#armour-qualities-1').press('Tab');
  await page.locator('#armour-worn-1').press('Space');

  // Fill stuff with weight in trappings
  await page.locator('#trappings-encumbrance-0').fill('2');
  await page.locator('#trappings-worn-0').check();
  await page.locator('#trappings-encumbrance-1').fill('1');
  await page.locator('#trappings-worn-1').check();

  // Fill stuff with weight in weapons
  await page.locator('#weapons-encumbrance-0').fill('2');
  await page.locator('#weapons-worn-0').check();
  await page.locator('#weapons-encumbrance-1').fill('1');
  await page.locator('#weapons-worn-1').check();

  await expect(page.locator('#encumbrance-armour')).toHaveText('1');
  await expect(page.locator('#encumbrance-trappings')).toHaveText('1');
  await expect(page.locator('#encumbrance-weapons')).toHaveText('1');
  await expect(page.locator('#encumbrance-total')).toHaveText('3');
});

test('should display overburned message if total encumbrance is greater than max encumbrance', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Fill stuff with weight in armour
  await page.locator('#encumbrance-max').fill('2');
  await page.locator('#armour-encumbrance-0').fill('2');

  // There should not no penalty
  await expect(page.locator('.encumbrance-state-penalty-0')).toBeVisible();

  // Increase weight
  await page.locator('#armour-encumbrance-0').fill('4');

  // There should a penalty level 1
  await expect(page.locator('.encumbrance-state-penalty-1')).toBeVisible();

  // Increase weight
  await page.locator('#armour-encumbrance-0').fill('6');

  // There should a penalty level 1
  await expect(page.locator('.encumbrance-state-penalty-2')).toBeVisible();

  // Increase weight
  await page.locator('#armour-encumbrance-0').fill('8');

  // There should a penalty level 1
  await expect(page.locator('.encumbrance-state-penalty-3')).toBeVisible();

});
