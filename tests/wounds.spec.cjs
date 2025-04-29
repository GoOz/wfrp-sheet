// @ts-check
import { test, expect } from '@playwright/test';

test('should update wounds values according to charac values', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Fill Charac values
  await page.locator('#s-i').fill('35');
  await page.locator('#t-i').fill('35');
  await page.locator('#wp-i').fill('35');

  await expect(page.locator('#strength-bonus')).toHaveText('3');
  await expect(page.locator('#toughness-bonus')).toHaveText('6');
  await expect(page.locator('#will-power-bonus')).toHaveText('3');
  await expect(page.locator('#wounds')).toHaveText('12');
});

test('should update wounds values according to charac values with Hardy talent bought', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Fill Charac values
  await page.locator('#s-i').fill('35');
  await page.locator('#t-i').fill('35');
  await page.locator('#wp-i').fill('35');

  // Check Hardy talent's bonus
  await page.locator('#hardy-bonus').fill('2');

  // Toughness bonus should be added
  await expect(page.locator('#wounds')).toHaveText('18');
});

test('should update wounds values if species chosen is halfling', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Fill Charac value
  await page.locator('#s-i').fill('35');
  await page.locator('#t-i').fill('35');
  await page.locator('#wp-i').fill('35');

  const select = await page.getByRole('combobox', { name: 'Species' });

  // Choose human species by default
  await select.selectOption('human');

  // Wounds should be calculated as usual
  await expect(page.locator('#wounds')).toHaveText('12');

  // Choose halfling species by default
  await select.selectOption('halfling');

  // Strength bonus should not be counted
  await expect(page.locator('#wounds')).toHaveText('9');
});
