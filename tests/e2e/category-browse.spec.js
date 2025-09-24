import { test, expect } from '../../fixtures/base.fixture';
import { HomePage } from '../../pages/home.page';
import { CategoryPage } from '../../pages/category.page';

const CATEGORIES = ['All', 'Shirts', 'Stickers'];

for (const cat of CATEGORIES) {
  test(`category switch renders products for: ${cat}`, async ({ page }) => {
    const home = new HomePage(page);
    const category = new CategoryPage(page);
    await home.goto();
    await category.selectCategory(cat);
    await expect(category.grid()).toBeVisible();
    await expect(page.getByRole('link').filter({ hasText: /Acme/ }).first()).toBeVisible();
  });
}