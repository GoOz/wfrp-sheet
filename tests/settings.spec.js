// @ts-check
import { test, expect } from '@playwright/test';

test('should change the color scheme theme', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Open settings modal
  await page.getByRole('button', { name: 'Open settings' }).click();
  const body = await page.locator('body');

  // Switch theme
  // Switch to light color scheme
  await page.getByText('Light', { exact: true }).click();
  await expect(body).toHaveClass('light');

  // Switch to dark color scheme
  await page.getByText('Dark').click();
  await expect(body).toHaveClass('dark');

  // Switch to auto color scheme
  await page.getByText('Auto', { exact: true }).click();
  await expect(body).toHaveClass('');
});

test('should download exported data', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Open settings modal
  await page.getByRole('button', { name: 'Open settings' }).click();

  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download my data' }).click();
  const download = await downloadPromise;
  await expect(download).toBeTruthy;
});

test('should not import data if input file is empty', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Open settings modal
  await page.getByRole('button', { name: 'Open settings' }).click();

  // Click on Send Button
  await page.locator('#import-button').click()

  // Error
  await expect(page.locator('#import-db-error-empty')).toBeVisible();
});

test('should not import data if inputted file is not a json file', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Open settings modal
  await page.getByRole('button', { name: 'Open settings' }).click();

  // Choose a non-json file
  await page.locator('#import-db').setInputFiles('tests/assets/not-a-json.svg');

  // Click on Send Button
  await page.locator('#import-button').click()

  // Error
  await expect(page.locator('#import-db-error-file')).toBeVisible();
});

test('should not import data if inputted file is not a parsable json file', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Open settings modal
  await page.getByRole('button', { name: 'Open settings' }).click();

  // Choose a non-json file
  await page.locator('#import-db').setInputFiles('tests/assets/wrong-data.json');

  // Click on Send Button
  await page.locator('#import-button').click()

  // Error
  await expect(page.locator('#import-db-error')).toBeVisible();
});

test('should import data if inputted file is a parsable json file', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Open settings modal
  await page.getByRole('button', { name: 'Open settings' }).click();

  // Choose a non-json file
  await page.locator('#import-db').setInputFiles('tests/assets/right-data.json');

  // Click on Send Button
  await page.locator('#import-button').click()

  // Success
  await expect(page.locator('#import-db-success')).toBeVisible();
});

test('should link to changelog', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Open settings modal
  await page.getByRole('button', { name: 'Open settings' }).click();

  await page.getByRole('link', { name: 'Read the CHANGELOG.md' }).click();

  await expect(page).toHaveURL('https://github.com/GoOz/wfrp-sheet/blob/main/CHANGELOG.md');
});
