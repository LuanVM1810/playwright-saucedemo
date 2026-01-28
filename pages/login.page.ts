import {Page, Locator} from '@playwright/test'

export class LoginPage {
    readonly page: Page

    readonly userName: Locator
    readonly password: Locator
    readonly buttonLogin: Locator

    constructor(page: Page){
        this.page = page;
        this.userName = page.getByLabel("Username")
        this.password = page.getByLabel("Password")
        this.buttonLogin = page.getByRole("button", {name: "Login"});
    }

    async goTo(){
        await this.page.goto('https://the-internet.herokuapp.com/login', { waitUntil: 'domcontentloaded' });
    }

    async login(userName: string, password: string) {
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.buttonLogin.click()
    }
}