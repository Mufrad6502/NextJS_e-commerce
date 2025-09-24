export class CategoryPage {
  constructor(page) { this.page = page; }
  async selectCategory(name) { await this.page.getByRole('link', { name }).click(); }
  grid() { return this.page.locator('main'); }
  containsProduct(name) { return this.page.getByRole('link', { name }); }
}