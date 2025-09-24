export class HomePage {
  constructor(page) { this.page = page; }
  async goto() { await this.page.goto('/'); }
  navLink(name) { return this.page.getByRole('link', { name }); }
  productCardByName(name) { return this.page.getByRole('link', { name }); }
}