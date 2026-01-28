import test, { expect } from "@playwright/test";
import { LoginPage } from "../../pages/login.page";
import { validInforLogin } from "../../utils";

test("login success", async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.login(validInforLogin.username, validInforLogin.password);
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});

test("login fail username", async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.login("123", validInforLogin.password);
    await expect(page.locator('#flash')).toContainText('Your username is invalid!')
})

test("login fail password", async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.login(validInforLogin.username, "12345678");
    await expect(page.locator('#flash')).toContainText('Your password is invalid!')
})
