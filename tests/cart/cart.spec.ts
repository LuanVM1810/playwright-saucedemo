import { test } from "../../fixtures/base.fixture";
import { validInforLogin } from "../../utils";

test.describe('Cart page', () => {
    test.beforeEach(async ({loginPage}) => {
        loginPage.goTo();
        loginPage.login(validInforLogin.username, validInforLogin.password);
    })
})