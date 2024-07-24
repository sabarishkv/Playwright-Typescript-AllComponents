import { test } from "@playwright/test";
import { CommonBasePage } from "../../common/commonBase";
import { delay, eCommerceUrl, step } from "../testData/testData";
import { HomePage } from "../pages/homePage";

test.use({viewport: { width: 1440, height: 683 }}
)
test.setTimeout(500000);


test("Navigate to the E-commerce", async ({ page }) => {
  const commonBase = new CommonBasePage(page);
  const homePage = new HomePage(page);

  await test.step("Navigate to E-Commerce Page", async () => {
    await commonBase.navigateToUrl(eCommerceUrl);
  });

  await test.step("Wait for Loader", async () => {
    await commonBase.slowScrollToBottomUsingArrowKey(page, step, delay);
    await commonBase.slowScrollToTopUsingArrowKey(page, step, delay);
    await homePage.verifyPageLoadSpinner();
  });

});
