
import {test} from "@playwright/test"

test("Automating alert & frame interaction", async ({page}) => {

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

    page.on('dialog', async (alert) => {

        console.log(alert.message());
        console.log(alert.type());
        console.log(alert.accept())

        const pagrRef=page.frameLocator(`//iframe[@id="iframeResult"]`)
        const beforeClick=await page.locator(`//button[text()="Try it"]`).innerText()
        console.log(beforeClick);

        await pagrRef.locator(`//button[text()="Try it"]`).click()

        const afterClick=await page.locator(`//button[text()="Try it"]`).innerText()
        console.log(afterClick);
        

    })     

})   

