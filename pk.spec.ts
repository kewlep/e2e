import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://philipkewley.me/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/'Philip Kewley | IT Professional in Sydney'/);
});

test('Contact link', async ({ page }) => {
  await page.goto('https://philipkewley.me/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Contact' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Philip Kewley | IT Professional in Sydney' })).toBeVisible();
});
