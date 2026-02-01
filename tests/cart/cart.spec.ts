import { expect, test } from "../../fixtures/base.fixture";
import { validInforLogin } from "../../utils";

test.describe('Cart page', () => {
    test.beforeEach(async ({loginPage}) => {
        await loginPage.goTo();
        await loginPage.login(validInforLogin.username, validInforLogin.password);
    })

    test('user can back home page to shopping', async ({cartPage, inventoryPage, page}) => {
        await inventoryPage.clickCartIcon();
        await cartPage.clickContinueShopping();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    })

    test('user checkout', async ({inventoryPage, cartPage, page}) => {
        await inventoryPage.clickCartIcon();
        await cartPage.clickCheckout()
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    })
})