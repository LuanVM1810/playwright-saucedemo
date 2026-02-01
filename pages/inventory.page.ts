import { Locator, Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly productsTitle: Locator;
  readonly listItem: Locator;
  readonly cartBadge: Locator;
  readonly sortDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsTitle = page.locator('[data-test="title"]');
    this.listItem = page.locator('[data-test="inventory_list"]');
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
  }

  async goto() {
    await this.page.goto("/inventory.html");
  }

  async getProductNames(): Promise<string[]> {
    return this.page.locator(".inventory_item_name").allTextContents();
  }

  async getProductPrices(): Promise<number[]> {
    const prices = await this.page.locator(".inventory_item_price").allTextContents();

    return prices.map((price) => Number(price.replace("$", "")));
  }

  async addProductByName(name: string) {
    await this.page
      .locator(".inventory_item", { hasText: name })
      .getByRole("button", { name: /add to cart/i })
      .click();
  }

  async removeProductByName(name: string) {
    await this.page
      .locator(".inventory_item", { hasText: name })
      .getByRole("button", { name: /remove/i })
      .click();
  }

  async getCartCount(): Promise<number> {
    if (await this.cartBadge.isVisible()) {
      return Number(await this.cartBadge.textContent());
    }
    return 0;
  }

  async sortBy(option: "az" | "za" | "lohi" | "hilo") {
    await this.sortDropdown.selectOption(option);
  }
}
