import {test} from "@playwright/test"
import { CommonBasePage } from "../../common/commonBase"

test("Navigate to the E-commerce",async ({page}) => {
 const commonBase = new CommonBasePage(page);


 await commonBase.navigateToUrl("https://ecommerce-playground.lambdatest.io/");
 await page.pause();

    
})

