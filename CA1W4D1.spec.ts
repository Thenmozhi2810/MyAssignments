
import {test} from "@playwright/test"

test("Prompt Dialog", async ({page}) => {

    await page.goto("https://www.leafground.com/alert.xhtml")

    page.on('dialog', async (alert) => {

        console.log(alert.type())
        console.log(alert.message())
        
        let alertType=alert.type()
        switch(alertType)
        {
            case "alert":
                await alert.dismiss()
                break

            case "confirm":
                await alert.accept()
                break

            case "prompt":
                await alert.accept("Playwright")
                break

            default:
                await alert.dismiss()
                break

        }

    })

    await page.locator(`(//span[text()="Show"])[5]`).click()

})  

