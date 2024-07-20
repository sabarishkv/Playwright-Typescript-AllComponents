import exp from "constants";
import { CommonBasePage } from "../../common/commonBase";
import { expect } from "@playwright/test";

export class HomePage extends CommonBasePage {
  homePageSpinner = () =>
    this.page.locator("//img[contains(@class,'loader-spinner')]");

  pageSpinner = () => "//div/img[contains(@class,'loader-spinner')]";

  async verifyPageLoadSpinner(): Promise<void> {
    
    await this.page.waitForSelector(this.pageSpinner(),{state: 'hidden', timeout: 600 * 1000 })
     let status: boolean = true;

    if (status) {
      console.log(
        `${this.homePageSpinner()} is hidden i.e page is loaded successful`
      );
    } else {
      console.log("Page load not successful");
    }
  }
}
