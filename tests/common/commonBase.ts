import { Locator, Page, devices } from "@playwright/test";

export class CommonBasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToUrl(pageUrl: string): Promise<void> {
    if (pageUrl != null) {
      await this.page.goto(pageUrl);
      console.log(
        `${pageUrl} is entered successful and opened in the browser ${devices}`
      );
    } else {
      console.log(`The pageUrl:${pageUrl} is null and cannot open browser`);
    }
  }

  async fillTextField(fieldLocator: Locator, testData: string): Promise<void> {
    if (await fieldLocator.isVisible() && testData != null) {
      await fieldLocator.fill(testData);
      console.log(`The ${fieldLocator} is filled with ${testData}`);
    }
    else{
      console.log(`The ${fieldLocator} is not visible and${testData} is not entered`);
    }
  }
}
