import { test, expect } from '../../fixtures/base.fixture';
import { SearchPage } from '../../pages/search.page';

const PRODUCT = 'Acme Circles T-Shirt';

test('user can search and find a product', async ({ page }) => {
  const search = new SearchPage(page);

  await page.goto('/');
  await page.waitForTimeout(7000); // wait 1s to see home page

  // Perform search
  await search.searchFor('Acme Circles');
  await page.waitForTimeout(7500); // wait 1.5s for search results to appear visually

  // Validate results
  await expect(search.results().first()).toContainText(PRODUCT);
});