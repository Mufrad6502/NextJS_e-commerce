import { test, expect } from '../../fixtures/base.fixture';
import { HomePage } from '../../pages/home.page';
import { CategoryPage } from '../../pages/category.page';
import { ProductPage } from '../../pages/product.page';
import { CartPage } from '../../pages/cart.page';

const PRODUCT = 'Acme Circles T-Shirt';

test('user can add T-Shirt to cart', async ({ page }) => {
  const home = new HomePage(page);
  const category = new CategoryPage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  await home.goto();
  await category.selectCategory('Shirts');
  await home.productCardByName(PRODUCT).click();
  await product.selectColor('Black');
  await product.selectSize('XS');
  await product.addToCart();

  await expect(page.getByText('My Cart', { exact: true })).toBeVisible();
  await expect(page.locator('span.leading-tight', { hasText: PRODUCT })).toBeVisible();
  await expect(cart.subtotal()).toBeVisible();
});