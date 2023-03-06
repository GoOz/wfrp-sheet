// @ts-check
import { test, expect } from '@playwright/test';

test('should create advanced skills with values calculated on related charac', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Fill Charac values
  await page.locator('#ws-i').fill('35');
  await page.locator('#bs-i').fill('35');
  await page.locator('#s-i').fill('35');
  await page.locator('#t-i').fill('35');
  await page.locator('#i-i').fill('35');
  await page.locator('#ag-i').fill('35');
  await page.locator('#dex-i').fill('35');
  await page.locator('#int-i').fill('35');
  await page.locator('#wp-i').fill('35');
  await page.locator('#fel-i').fill('35');

  // Populate rows
  // New rows should be added as soon as the last row of the table is populated
  const rows = await page.locator('#custom-skill tbody').getByRole('row');

  // Add WS based skill
  await rows.nth(0).getByRole('combobox', { name: 'Based on characteristic' }).selectOption('ws');
  await expect(page.locator('#custom-skill-initial-0')).toHaveText('35');
  await page.locator('#custom-skill-aug-0').fill('5');
  await expect(page.locator('#custom-skill-current-0')).toHaveText('40');

  // Add BS based skill
  await rows.nth(1).getByRole('combobox', { name: 'Based on characteristic' }).selectOption('bs');
  await expect(page.locator('#custom-skill-initial-1')).toHaveText('35');
  await page.locator('#custom-skill-aug-1').fill('5');
  await expect(page.locator('#custom-skill-current-1')).toHaveText('40');

  // Add S based skill
  await rows.nth(2).getByRole('combobox', { name: 'Based on characteristic' }).selectOption('s');
  await expect(page.locator('#custom-skill-initial-2')).toHaveText('35');
  await page.locator('#custom-skill-aug-2').fill('5');
  await expect(page.locator('#custom-skill-current-2')).toHaveText('40');

  // Add T based skill
  await rows.nth(3).getByRole('combobox', { name: 'Based on characteristic' }).selectOption('t');
  await expect(page.locator('#custom-skill-initial-3')).toHaveText('35');
  await page.locator('#custom-skill-aug-3').fill('5');
  await expect(page.locator('#custom-skill-current-3')).toHaveText('40');

  // Add I based skill
  await rows.nth(4).getByRole('combobox', { name: 'Based on characteristic' }).selectOption('i');
  await expect(page.locator('#custom-skill-initial-4')).toHaveText('35');
  await page.locator('#custom-skill-aug-4').fill('5');
  await expect(page.locator('#custom-skill-current-4')).toHaveText('40');

  // Add Ag based skill
  await rows.nth(5).getByRole('combobox', { name: 'Based on characteristic' }).selectOption('ag');
  await expect(page.locator('#custom-skill-initial-5')).toHaveText('35');
  await page.locator('#custom-skill-aug-5').fill('5');
  await expect(page.locator('#custom-skill-current-5')).toHaveText('40');

  // Add Dex based skill
  await rows.nth(6).getByRole('combobox', { name: 'Based on characteristic' }).selectOption('dex');
  await expect(page.locator('#custom-skill-initial-6')).toHaveText('35');
  await page.locator('#custom-skill-aug-6').fill('5');
  await expect(page.locator('#custom-skill-current-6')).toHaveText('40');

  // Add Int based skill
  await rows.nth(7).getByRole('combobox', { name: 'Based on characteristic' }).selectOption('int');
  await expect(page.locator('#custom-skill-initial-7')).toHaveText('35');
  await page.locator('#custom-skill-aug-7').fill('5');
  await expect(page.locator('#custom-skill-current-7')).toHaveText('40');

  // Add WP based skill
  await rows.nth(8).getByRole('combobox', { name: 'Based on characteristic' }).selectOption('wp');
  await expect(page.locator('#custom-skill-initial-8')).toHaveText('35');
  await page.locator('#custom-skill-aug-8').fill('5');
  await expect(page.locator('#custom-skill-current-8')).toHaveText('40');

  // Add Fel based skill
  await rows.nth(9).getByRole('combobox', { name: 'Based on characteristic' }).selectOption('fel');
  await expect(page.locator('#custom-skill-initial-9')).toHaveText('35');
  await page.locator('#custom-skill-aug-9').fill('5');
  await expect(page.locator('#custom-skill-current-9')).toHaveText('40');
});

test('should highlight row if option checked', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  const row = await page.locator('#custom-skill tbody').getByRole('row').nth(0);

  await expect(row).not.toHaveClass('highlighted');

  await row.locator('#custom-skill-hl-0').press('Space');

  await expect(row).toHaveClass('highlighted');
});

test('should remove and reorder custom skill when one is removed', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Open settings modal
  await page.getByRole('button', { name: 'Open settings' }).click();

  // Choose a non-json file
  await page.locator('#import-db').setInputFiles('tests/assets/custom-items.json');

  // Click on Send Button
  await page.locator('#import-button').click();

  await page.locator('#close-modal').click();

  const tbody = page.locator('#custom-skill tbody');
  const rows = await tbody.getByRole('row');

  await expect(rows).toHaveCount(4);

  await rows.nth(0).getByRole('button', { name: 'Delete' }).click();

  const newFirstItem = rows.nth(0).getByLabel('Advance', { exact: true });

  await expect(rows).toHaveCount(3);
  await expect(newFirstItem).toHaveId('custom-skill-aug-0');
});

test('should have the remove button of the last row disabled', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  const rows = await page.locator('#custom-skill tbody').getByRole('row');

  const deleteButton = await rows.nth(0).getByRole('button', { name: 'Delete' });

  await expect(deleteButton).toBeDisabled();
});
