export class CarouselPage {
  constructor(page) { this.page = page; }

  carousel() {
    return this.page.locator('ul.animate-carousel');
  }

  productByName(name) {
    return this.page.locator('ul.animate-carousel h3', { hasText: name }).first();
  }

  async clickProduct(name) {
    // Click the parent anchor of the h3
    const link = this.page.locator('ul.animate-carousel a', { hasText: name }).first();
    await link.click({ force: true });
  }
}