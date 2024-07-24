import { CommonBasePage } from "../../common/commonBase";

export class HomePage extends CommonBasePage {
  homePageSpinner = () =>
    this.page.locator("//img[contains(@class,'loader-spinner')]");

  productLoadSpinner = () => "//figure//img[contains(@class,'loader-spinner')]";
  bannerLoadSpinner = () => "//a/img[contains(@class,'loader-spinner')]";


  async verifyPageLoadSpinner(): Promise<void> {
    
    await this.page.waitForSelector(this.productLoadSpinner(),{state: 'hidden', timeout: 600 * 1000 })
   // await this.page.waitForSelector(this.bannerLoadSpinner(),{state: 'hidden', timeout: 600 * 1000 })
     let loaderStatus: boolean = true;

    if (loaderStatus) {
      console.log(
        `${this.homePageSpinner()} is hidden i.e page is loaded successful`
      );
    } else {
      console.log("Page load not successful");
    }
  }
}
