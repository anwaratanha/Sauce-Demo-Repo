import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor( public page: Page) {}

  async gotoLoginPage(URL: string) {
    await this.page.goto(URL);
  }

  async login(user: string, pass: string) {
    await this.page.fill('#user-name', user);
    await this.page.fill('#password', pass);
    await this.page.click('#login-button');
  }

  async verifyErrorMessage(expectedText: string) {
    await expect(this.page.locator('//h3[@data-test="error"]')).toHaveText(expectedText);
  }

}
