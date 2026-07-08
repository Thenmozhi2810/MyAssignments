
import {test} from "@playwright/test"

test("Nested Frame using Frame Objects", async ({page}) => {

    await page.goto("https://www.leafground.com/frame.xhtml")

    const frameRef=page.frame({url:"https://www.leafground.com/framebutton.xhtml"})

// Before click
    const BeforeClick=await frameRef?.locator("#Click").innerText()
    console.log(BeforeClick)

// Click action    
    await frameRef?.locator("#Click").click()

// After click    
    const AfterClick=await frameRef?.locator("#Click").innerText()
    console.log(AfterClick)

    await page.waitForTimeout(10000)
    
})  

