import { test, expect } from '../../fixtures/base.fixture';
import { HomePage } from '../../pages/home.page';
import { CategoryPage } from '../../pages/category.page';
import { ProductPage } from '../../pages/product.page';
import { CartPage } from '../../pages/cart.page';

const PRODUCT = 'Acme Circles T-Shirt';

test('cart shows proceed to checkout button', async ({ page }) => {
  const home = new HomePage(page);
  const category = new CategoryPage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  // Go to home and navigate to product
  await home.goto();
  await page.waitForTimeout(1000); // wait to see home page
  await category.selectCategory('Shirts');
  await page.waitForTimeout(1000); // wait to see category page
  await home.productCardByName(PRODUCT).click();
  await page.waitForTimeout(1000); // wait to see product page

  // Select variant and add to cart
  await product.selectColor('Black');
  await product.selectSize('XS');
  await product.addToCart();
  await page.waitForTimeout(1500); // wait to see cart drawer

  // Validate cart and checkout
  await expect(page.getByText('My Cart', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: /proceed to checkout/i })).toBeVisible();
});