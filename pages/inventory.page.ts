import { Page, expect } from "@playwright/test";

export class InventoryPage {
  constructor(public page: Page) {}

  async verifyInventoryPage() {
    await expect(this.page.locator('//span[@data-test="title"]')).toHaveText("Products");
  }

  async checkTheVisibilty(locator: string, expectedText: string) {
    await expect(this.page.locator(locator)).toHaveText(expectedText);
  }
}
