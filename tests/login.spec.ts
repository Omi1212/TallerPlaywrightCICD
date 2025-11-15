// /tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
test('Login exitoso en SauceDemo con POM', async ({ page }) => {
 const loginPage = new LoginPage(page);
 const productsPage = new ProductsPage(page);
 await loginPage.goto();
 await loginPage.login('standard_user', 'secret_sauce');
 await productsPage.verifyIsOnProductsPage();
 await expect(productsPage.title).toHaveText('Products');
});