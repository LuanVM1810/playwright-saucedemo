import { Locator, Page } from "@playwright/test";

export class CartPage {
    readonly page : Page;
    readonly continueBtn : Locator;
    readonly checkoutBtn : Locator;

    constructor(page: Page){
        this.page = page;
        this.continueBtn = page.getByRole('button', {name: /continue shopping/i});
        this.checkoutBtn = page.getByRole('button', {name : /checkout/i});
    }

    async goto(){
        await this.page.goto('/cart.html');
    }

    async clickContinueShopping(){
        await this.continueBtn.click();
    }

    async clickCheckout(){
        await this.checkoutBtn.click();
    }
}