// @ts-check
import { test, expect } from '@playwright/test';

test('should update walk & run values when movement value is inputted', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  const movement = await page.locator('#movement');
  const walk = await page.locator('#walk');
  const run = await page.locator('#run');

  // Fill movement value
  await movement.fill('4');

  // Updated outputs
  await expect(walk).toHaveText('8'); // Twice the movement
  await expect(run).toHaveText('16'); // Four times the movement
});
