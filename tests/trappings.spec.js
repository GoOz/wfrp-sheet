// @ts-check
import { test, expect } from '@playwright/test';

test('should remove and reorder trappings when one is removed', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Open settings modal
  await page.getByRole('button', { name: 'Open settings' }).click();

  // Choose a non-json file
  await page.locator('#import-db').setInputFiles('tests/assets/custom-items.json');

  // Click on Send Button
  await page.locator('#import-button').click();

  await page.locator('#close-modal').click();

  const tbody = page.locator('#trappings tbody');
  const rows = await tbody.getByRole('row');

  await expect(rows).toHaveCount(4);

  await rows.nth(0).getByRole('button', { name: 'Delete' }).click();

  const newFirstItem = rows.nth(0).getByRole('spinbutton', { name: 'Enc' });

  await expect(rows).toHaveCount(3);
  await expect(newFirstItem).toHaveId('trappings-encumbrance-0');
});

test('should have the remove button of the last row disabled', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  const rows = await page.locator('#trappings tbody').getByRole('row');

  const deleteButton = await rows.nth(0).getByRole('button', { name: 'Delete' });

  await expect(deleteButton).toBeDisabled();
});
