import { test, expect } from '../../fixtures/base.fixture';

const STATIC_LINKS = [
  'About',
  'Terms & Conditions',
  'Shipping & Return Policy',
  'Privacy Policy',
  'FAQ'
];

for (const name of STATIC_LINKS) {
  test(`${name} page opens`, async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name }).click();
    await expect(page).toHaveURL(/.+/);
    await expect(page.getByRole('heading').first()).toBeVisible();
  });
}