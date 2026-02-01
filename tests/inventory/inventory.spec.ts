import { test, expect } from "../../fixtures/base.fixture";
import { validInforLogin } from "../../utils";

test.describe("Inventory page", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goTo();
    await loginPage.login(validInforLogin.username, validInforLogin.password);
  });

  test("user sees product list after login", async ({inventoryPage }) => {
    const products = await inventoryPage.getProductNames();

    expect(products.length).toBe(6);
    expect(products).toContain("Sauce Labs Backpack");
  });

  test("user can add product to cart", async ({ inventoryPage }) => {
    await inventoryPage.addProductByName("Sauce Labs Backpack");

    await expect.poll(() => inventoryPage.getCartCount()).toBe(1);
  });

  test("user can remove product from cart", async ({ inventoryPage }) => {
    await inventoryPage.addProductByName("Sauce Labs Backpack");
    await inventoryPage.removeProductByName("Sauce Labs Backpack");

    await expect.poll(() => inventoryPage.getCartCount()).toBe(0);
  });

  test("user can sort products by price low to high", async ({ inventoryPage }) => {
    await inventoryPage.sortBy("lohi");

    const prices = await inventoryPage.getProductPrices();
    const sortedPrices = [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(sortedPrices);
  });
});
