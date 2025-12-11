import {Page, expect} from '@playwright/test'

export class AddToCart {
    constructor (public page: Page) {}

    async selectProduct () {
       await this.page.locator('//div[@class="inventory_item_name"]');
       await this.page.click('//button[@id="add-to-cart-sauce-labs-backpack"]') 
    }

    async verifyAddToCart(expectedText: string) {
        await expect(this.page.locator('#remove-sauce-labs-backpack')).toHaveText(expectedText)
    }
}