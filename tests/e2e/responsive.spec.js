import { test, expect } from '@playwright/test';

const viewports = [
  { w: 1366, h: 900, name: 'desktop' },
  { w: 390, h: 844, name: 'mobile' }
];

for (const v of viewports) {
  test(`home renders on ${v.name}`, async ({ page }) => {
    await page.setViewportSize({ width: v.w, height: v.h });
    await page.goto('https://demo.vercel.store/');
    if (v.name === 'desktop') {
      await expect(page.getByRole('link', { name: 'All' })).toBeVisible();
    } else if (v.name === 'mobile') {
      await expect(page.getByRole('button', { name: /menu/i })).toBeVisible();
    }
  });
}