// /pages/ProductsPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    // usar texto visible en lugar de una clase que no se encuentra
    this.title = page.getByText('Products', { exact: true });
  }

  async verifyIsOnProductsPage() {
    // usar expect para esperar visibilidad con un timeout razonable
    await expect(this.title).toBeVisible({ timeout: 5000 });
  }
}