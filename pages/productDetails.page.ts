import {Page, expect} from '@playwright/test'

export class Product{
    constructor(public page: Page) {}


    async navigateProductPage(){
        await this.page.click('#item_0_title_link');
    }

    async verifyProductPage(expectedText: string){
        await expect(this.page.locator('#back-to-products')).toHaveText(expectedText)
    }

    async verifyAddToCartInProductPage(){
        await this.page.click('//button[@id="add-to-cart"]')
    }

    async verifyRemoveButtonInProductPage(expectedText: string){
        await expect(this.page.locator('#remove')).toHaveText(expectedText)
    }

}
    