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
    if ((await fieldLocator.isVisible()) && testData != null) {
      await fieldLocator.fill(testData);
      console.log(`The ${fieldLocator} is filled with ${testData}`);
    } else {
      console.log(
        `The ${fieldLocator} is not visible and${testData} is not entered`
      );
    }
  }
  async slowScrollToBottomUsingScrollbar(
    page: Page,
    step: number,
    delay: number
  ): Promise<void> {
    // Get the height of the scroll bar
    const scrollBarHeight = await page.evaluate(
      () => document.documentElement.clientHeight
    );

    let currentPosition = 0;
    const scrollHeight = await page.evaluate(() => document.body.scrollHeight);

    while (currentPosition < scrollHeight) {
      currentPosition += step;

      await page.mouse.move(scrollBarHeight - 5, currentPosition);
      await page.mouse.down();
      await page.mouse.move(scrollBarHeight - 5, currentPosition + step, {
        steps: 10,
      });
      await page.mouse.up();

      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  async slowScrollToBottomUsingArrowKey(
    page: Page,
    step: number,
    delay: number
  ): Promise<void> {
    let currentPosition = 0;
    const scrollHeight = await page.evaluate(() => document.body.scrollHeight);

    while (currentPosition < scrollHeight) {
      await page.keyboard.press("ArrowDown");
      currentPosition += step;

      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  async slowScrollToTopUsingArrowKey(
    page: Page,
    step: number,
    delay: number
  ): Promise<void> {
    let currentPosition = 0;
    const scrollHeight = await page.evaluate(() => document.body.scrollHeight);

    while (currentPosition < scrollHeight) {
      await page.keyboard.press("ArrowUp");
      currentPosition += step;

      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}
