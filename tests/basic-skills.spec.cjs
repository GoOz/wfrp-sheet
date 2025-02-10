// @ts-check
import { test, expect } from '@playwright/test';

test('should update current skill value when advances value is inputted', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  // Fill Charac values
  await page.locator('#ws-i').fill('35');
  await page.locator('#ws-a').fill('5');
  await page.locator('#bs-i').fill('35');
  await page.locator('#bs-a').fill('5');
  await page.locator('#s-i').fill('35');
  await page.locator('#s-a').fill('5');
  await page.locator('#t-i').fill('35');
  await page.locator('#t-a').fill('5');
  await page.locator('#i-i').fill('35');
  await page.locator('#i-a').fill('5');
  await page.locator('#ag-i').fill('35');
  await page.locator('#ag-a').fill('5');
  await page.locator('#dex-i').fill('35');
  await page.locator('#dex-a').fill('5');
  await page.locator('#int-i').fill('35');
  await page.locator('#int-a').fill('5');
  await page.locator('#wp-i').fill('35');
  await page.locator('#wp-a').fill('5');
  await page.locator('#fel-i').fill('35');
  await page.locator('#fel-a').fill('5');

  // Check base values
  await expect(page.locator('#art-current')).toHaveText('40');
  await expect(page.locator('#athletics-current')).toHaveText('40');
  await expect(page.locator('#bribery-current')).toHaveText('40');
  await expect(page.locator('#charm-current')).toHaveText('40');
  await expect(page.locator('#charm-animal-current')).toHaveText('40');
  await expect(page.locator('#climb-current')).toHaveText('40');
  await expect(page.locator('#consume-alcohol-current')).toHaveText('40');
  await expect(page.locator('#cool-current')).toHaveText('40');
  await expect(page.locator('#dodge-current')).toHaveText('40');
  await expect(page.locator('#drive-current')).toHaveText('40');
  await expect(page.locator('#endurance-current')).toHaveText('40');
  await expect(page.locator('#entertain-current')).toHaveText('40');
  await expect(page.locator('#gamble-current')).toHaveText('40');
  await expect(page.locator('#gossip-current')).toHaveText('40');
  await expect(page.locator('#haggle-current')).toHaveText('40');
  await expect(page.locator('#intimidate-current')).toHaveText('40');
  await expect(page.locator('#intuition-current')).toHaveText('40');
  await expect(page.locator('#leadership-current')).toHaveText('40');
  await expect(page.locator('#melee-current')).toHaveText('40');
  await expect(page.locator('#melee-basic-current')).toHaveText('40');
  await expect(page.locator('#navigation-current')).toHaveText('40');
  await expect(page.locator('#outdoor-survival-current')).toHaveText('40');
  await expect(page.locator('#perception-current')).toHaveText('40');
  await expect(page.locator('#ride-current')).toHaveText('40');
  await expect(page.locator('#row-current')).toHaveText('40');
  await expect(page.locator('#stealth-current')).toHaveText('40');

  // Fill advances value
  await page.locator('#art-aug').fill('5');
  await page.locator('#athletics-aug').fill('5');
  await page.locator('#bribery-aug').fill('5');
  await page.locator('#charm-aug').fill('5');
  await page.locator('#charm-animal-aug').fill('5');
  await page.locator('#climb-aug').fill('5');
  await page.locator('#consume-alcohol-aug').fill('5');
  await page.locator('#cool-aug').fill('5');
  await page.locator('#dodge-aug').fill('5');
  await page.locator('#drive-aug').fill('5');
  await page.locator('#endurance-aug').fill('5');
  await page.locator('#entertain-aug').fill('5');
  await page.locator('#gamble-aug').fill('5');
  await page.locator('#gossip-aug').fill('5');
  await page.locator('#haggle-aug').fill('5');
  await page.locator('#intimidate-aug').fill('5');
  await page.locator('#intuition-aug').fill('5');
  await page.locator('#leadership-aug').fill('5');
  await page.locator('#melee-aug').fill('5');
  await page.locator('#melee-basic-aug').fill('5');
  await page.locator('#navigation-aug').fill('5');
  await page.locator('#outdoor-survival-aug').fill('5');
  await page.locator('#perception-aug').fill('5');
  await page.locator('#ride-aug').fill('5');
  await page.locator('#row-aug').fill('5');
  await page.locator('#stealth-aug').fill('5');

  // Check current values
  await expect(page.locator('#art-final')).toHaveText('45');
  await expect(page.locator('#athletics-final')).toHaveText('45');
  await expect(page.locator('#bribery-final')).toHaveText('45');
  await expect(page.locator('#charm-final')).toHaveText('45');
  await expect(page.locator('#charm-animal-final')).toHaveText('45');
  await expect(page.locator('#climb-final')).toHaveText('45');
  await expect(page.locator('#consume-alcohol-final')).toHaveText('45');
  await expect(page.locator('#cool-final')).toHaveText('45');
  await expect(page.locator('#dodge-final')).toHaveText('45');
  await expect(page.locator('#drive-final')).toHaveText('45');
  await expect(page.locator('#endurance-final')).toHaveText('45');
  await expect(page.locator('#entertain-final')).toHaveText('45');
  await expect(page.locator('#gamble-final')).toHaveText('45');
  await expect(page.locator('#gossip-final')).toHaveText('45');
  await expect(page.locator('#haggle-final')).toHaveText('45');
  await expect(page.locator('#intimidate-final')).toHaveText('45');
  await expect(page.locator('#intuition-final')).toHaveText('45');
  await expect(page.locator('#leadership-final')).toHaveText('45');
  await expect(page.locator('#melee-final')).toHaveText('45');
  await expect(page.locator('#melee-basic-final')).toHaveText('45');
  await expect(page.locator('#navigation-final')).toHaveText('45');
  await expect(page.locator('#outdoor-survival-final')).toHaveText('45');
  await expect(page.locator('#perception-final')).toHaveText('45');
  await expect(page.locator('#ride-final')).toHaveText('45');
  await expect(page.locator('#row-final')).toHaveText('45');
  await expect(page.locator('#stealth-final')).toHaveText('45');
});

test('should highlight row if option checked', async ({ page }) => {
  await page.goto('./wfrp-sheet/en/');

  const row = await page.locator('.basic').nth(0).getByRole('row').nth(1);

  await expect(row).not.toHaveClass('highlighted');

  await row.locator('#art-hl').press('Space');

  await expect(row).toHaveClass('highlighted');
});
