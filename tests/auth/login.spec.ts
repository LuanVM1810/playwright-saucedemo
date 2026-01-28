import { test, expect } from "../../fixtures/base.fixture";
import { invalidCases, validInforLogin } from "../../utils";

test("login success", async ({loginPage, inventoryPage}) => {
    await loginPage.goTo();
    await loginPage.login(validInforLogin.username, validInforLogin.password);
    await expect(inventoryPage.productsTitle).toBeVisible();
});

for (const data of invalidCases) {
    test(`login fail with ${data.username}`, async ({ page, loginPage }) => {
    await loginPage.goTo();
    await loginPage.login(data.username, data.password);
    await expect(page.locator('[data-test="error"]')).toBeVisible();
});
}
