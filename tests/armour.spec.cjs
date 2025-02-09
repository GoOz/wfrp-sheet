// @ts-check
import { test, expect } from '@playwright/test';

test('should remove and reorder armour when one is removed', async ({ page }) => {
  await page.goto('http://localhost:8080/wfrp-sheet/en/');

  // Open settings modal
  await page.getByRole('button', { name: 'Open settings' }).click();

  // Choose a non-json file
  await page.locator('#import-db').setInputFiles('tests/assets/custom-items.json');

  // Click on Send Button
  await page.locator('#import-button').click();

  await page.locator('#close-modal').click();

  const tbody = page.locator('#armour tbody');
  const rows = await tbody.getByRole('row');

  await expect(rows).toHaveCount(4);

  // Workaround to avoid persistent storage permissions popup on Firefox
  await page.locator('#armour-name-1').click();
  await page.locator('#armour-name-1').press('Shift+Tab');

  await rows.nth(0).getByRole('button', { name: 'Delete' }).press('Enter');

  const newFirstItem = rows.nth(0).getByRole('spinbutton', { name: 'Enc' });

  await expect(rows).toHaveCount(3);
  await expect(newFirstItem).toHaveId('armour-encumbrance-0');
});

test('should have the remove button of the last row disabled', async ({ page }) => {
  await page.goto('http://localhost:8080/wfrp-sheet/en/');

  const rows = await page.locator('#armour tbody').getByRole('row');

  const deleteButton = await rows.nth(0).getByRole('button', { name: 'Delete' });

  await expect(deleteButton).toBeDisabled();
});
