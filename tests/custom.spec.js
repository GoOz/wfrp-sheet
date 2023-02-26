// @ts-check
import { test, expect } from '@playwright/test';

test('should add new row when value is inputted in the last row in Custom Skills', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  const tbody = await page.locator('#custom-skill tbody');

  // Custom table tbody should have only 1 <tr> child by default
  const numberOfRows = await tbody.getByRole('row');
  await expect(numberOfRows).toHaveCount(1);

  // Add some text in a cell of the first row
  const firstRowCell = await numberOfRows.nth(0).locator('.hl-wrapper-name > div[contenteditable]');
  await firstRowCell.fill('foobar');

  // Expect a new row to be added
  await expect(firstRowCell).toHaveText('foobar');
  await expect(numberOfRows).toHaveCount(2);
});

test('should add new row when value is inputted in the last row in Talents', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  const tbody = await page.locator('#talents tbody');

  // Custom table tbody should have only 1 <tr> child by default
  const numberOfRows = await tbody.getByRole('row');
  await expect(numberOfRows).toHaveCount(1);

  // Add some text in a cell of the first row
  const firstRowCell = await numberOfRows.nth(0).getByRole('textbox').nth(0);
  await firstRowCell.fill('foobar');

  // Expect a new row to be added
  await expect(firstRowCell).toHaveText('foobar');
  await expect(numberOfRows).toHaveCount(2);
});

test('should add new row when value is inputted in the last row in Armour', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  const tbody = await page.locator('#armour tbody');

  // Custom table tbody should have only 1 <tr> child by default
  const numberOfRows = await tbody.getByRole('row');
  await expect(numberOfRows).toHaveCount(1);

  // Add some text in a cell of the first row
  const firstRowCell = await numberOfRows.nth(0).getByRole('textbox').nth(0);
  await firstRowCell.fill('foobar');

  // Expect a new row to be added
  await expect(firstRowCell).toHaveValue('foobar');
  await expect(numberOfRows).toHaveCount(2);
});

test('should add new row when value is inputted in the last row in Trappings', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  const tbody = await page.locator('#trappings tbody');

  // Custom table tbody should have only 1 <tr> child by default
  const numberOfRows = await tbody.getByRole('row');
  await expect(numberOfRows).toHaveCount(1);

  // Add some text in a cell of the first row
  const firstRowCell = await numberOfRows.nth(0).getByRole('textbox').nth(0);
  await firstRowCell.fill('foobar');

  // Expect a new row to be added
  await expect(firstRowCell).toHaveText('foobar');
  await expect(numberOfRows).toHaveCount(2);
});

test('should add new row when value is inputted in the last row in Weapons', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  const tbody = await page.locator('#weapons tbody');

  // Custom table tbody should have only 1 <tr> child by default
  const numberOfRows = await tbody.getByRole('row');
  await expect(numberOfRows).toHaveCount(1);

  // Add some text in a cell of the first row
  const firstRowCell = await numberOfRows.nth(0).getByRole('textbox').nth(0);
  await firstRowCell.fill('foobar');

  // Expect a new row to be added
  await expect(firstRowCell).toHaveValue('foobar');
  await expect(numberOfRows).toHaveCount(2);
});

test('should add new row when value is inputted in the last row in Spells', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  const tbody = await page.locator('#spells tbody');

  // Custom table tbody should have only 1 <tr> child by default
  const numberOfRows = await tbody.getByRole('row');
  await expect(numberOfRows).toHaveCount(1);

  // Add some text in a cell of the first row
  const firstRowCell = await numberOfRows.nth(0).getByRole('textbox').nth(0);
  await firstRowCell.fill('foobar');

  // Expect a new row to be added
  await expect(firstRowCell).toHaveValue('foobar');
  await expect(numberOfRows).toHaveCount(2);
});
