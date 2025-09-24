export class ProductPage {
  constructor(page) { this.page = page; }
  title() { return this.page.getByRole('heading', { level: 1 }); }
  price() { return this.page.getByText(/\$[0-9]+\.[0-9]{2} USD/); }
  async selectColor(name) { await this.page.getByRole('button', { name }).click(); }
  async selectSize(name) { await this.page.getByRole('button', { name }).click(); }
  async addToCart() { await this.page.getByRole('button', { name: 'Add To Cart' }).click(); }
}