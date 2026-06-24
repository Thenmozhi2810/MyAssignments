

// Create a Playwright script to login into Leaftaps application and store the
// authenticated session. Then reuse the stored state in another test without
// performing login again

import test from "@playwright/test"
test("Leaftaps Login", async ({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill('demoCSR2')
    await page.locator("#password").fill('crmsfa')
    await page.locator(".decorativeSubmit").click()

    await page.context().storageState({path:"Data/LeaftapsLogin.json"})

})


// Skip Login

// import {test,chromium} from "@playwright/test"

// test.use({
//     storageState:"LeaftapsLogin.json"
// })

// test("Skip Login using storageState", async () => {

//     const browser=await chromium.launch()
//     const context=await browser.newContext({storageState:"Data/LeaftapsLogin.json"})
//     const page=await context.newPage()

    
// })