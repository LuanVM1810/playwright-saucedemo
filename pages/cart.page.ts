import { Locator, Page } from "@playwright/test";

export class CartPage {
    readonly page : Page;
    readonly continueBtn : Locator;
    readonly checkoutBtn : Locator;

    constructor(page: Page){
        this.page = page;
        this.continueBtn = page.getByRole('button', {name: 'Continue Shopping'});
        this.checkoutBtn = page.getByRole('button', {name : 'Checkout'});
    }

    async goto(){
        await this.page.goto('/cart.html');
    }

    async clickContinueShopping(){
        this.continueBtn.click();
    }

    async clickCheckout(){
        this.checkoutBtn.click();
    }
}