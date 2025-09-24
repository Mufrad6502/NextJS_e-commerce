export class SearchPage {
  constructor(page) { this.page = page; }

  searchInput() {
    return this.page.getByPlaceholder('Search for products...');
  }

  async searchFor(query) {
    await this.searchInput().fill(query);
    await this.page.keyboard.press('Enter');
  }

  results() {
    return this.page.locator('h3.mr-4.line-clamp-2.flex-grow.pl-2.leading-none.tracking-tight');
  }
}