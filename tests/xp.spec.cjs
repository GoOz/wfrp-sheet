// @ts-check
import { test, expect } from '@playwright/test';

test('total should be updated with current & spent values', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  const current = await page.locator('#current-xp');
  const spent = await page.locator('#spent-xp');
  const total = await page.locator('#total-xp');

  // Fill current & spent values
  await current.fill('90');
  await spent.fill('180');

  // Updated output
  await expect(total).toHaveText('270');
});
