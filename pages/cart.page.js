export class CartPage {
  constructor(page) { this.page = page; }
  drawer() { return this.page.getByRole('dialog').filter({ hasText: 'Cart' }); }
  lineItemByName(name) { return this.page.getByRole('row', { name }); }
  subtotal() { return this.page.getByText(/total/i); }
}