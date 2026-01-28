import { Locator, Page } from "@playwright/test";

export class InventoryPage {
    readonly page: Page;

    readonly productsTitle: Locator;
    readonly listItem: Locator

    constructor(page: Page){
        this.page = page;
        this.productsTitle = page.locator('[data-test="title"]')
        this.listItem = page.locator('[data-test="inventory_list"]')
    }
}