
import {test} from "@playwright/test"
test("W3School File", async ({page}) => {
    page.once("dialog", (alert) => {
        alert.accept()
    })

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    
    const FrameRef=page.frameLocator(`//iframe[@id="iframeResult"]`)
    const beforeClick=await FrameRef.locator(`//button[text()="Try it"]`).innerText()
    console.log(beforeClick);

    await FrameRef.locator(`//button[text()="Try it"]`).click()

    const afterClick=await FrameRef.locator(`//p[text()="You pressed OK!"]`).innerText()
    console.log(afterClick);

    await page.waitForTimeout(3000)
    
})
