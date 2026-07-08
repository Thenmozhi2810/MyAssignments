
import {test} from "@playwright/test"

test("Leafground page using Sequential Windows", async ({page,context}) => {

    await page.goto("https://www.leafground.com/window.xhtml")

// Create a Listener
    const MainPage=context.waitForEvent("page")

// Trigger the click action
    await page.locator(`//span[text()="Open"]`).click()

// Resolve the promise
    const ChildPage=await MainPage

// Email
    await ChildPage.locator("#email").fill("thenmozhi15@gmail.com")
    
    page.bringToFront()
    await page.locator(`//span[text()="Open Multiple"]`).click()


})

