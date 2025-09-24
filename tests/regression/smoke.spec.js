import { test, expect } from '../../fixtures/base.fixture';

test('smoke — home + nav + one product', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'All' })).toBeVisible();
  await expect(page.getByRole('link').filter({ hasText: /Acme/ }).first()).toBeVisible();
});