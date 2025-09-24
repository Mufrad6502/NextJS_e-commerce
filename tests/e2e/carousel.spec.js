import { test, expect } from '../../fixtures/base.fixture';
import { CarouselPage } from '../../pages/carousel.page';
test('carousel renders products and allows navigation', async ({ page }) => {
  const carousel = new CarouselPage(page);

  await page.goto('/');

  await expect(carousel.carousel()).toBeVisible();

  // Validate product titles are visible
  await expect(carousel.productByName('Acme Mug')).toBeVisible();
  await expect(carousel.productByName('Acme Hoodie')).toBeVisible();
  await expect(carousel.productByName('Acme Baby Cap')).toBeVisible();

  // Click product by name
  await carousel.clickProduct('Acme Mug');

  await expect(page).toHaveURL(/acme-mug/);
});