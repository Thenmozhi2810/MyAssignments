
import {test,expect} from "@playwright/test"

test("Class Assisnment-2 Herokuapp Dowload", async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/download")

// Create a Listener
    const FileDownload = page.waitForEvent('download')

// Trigger the download action
    await page.locator(`//a[text()="background.jpg"]`).click()

// Resolve the promise
    const FDown = await FileDownload

    await FDown.saveAs(`Utils/${FDown.suggestedFilename()}`)  // Browser suggested Filename

// Verify the file downloaded (or) not
    expect(FDown).toBeTruthy()

// Verify the download using PARTIAL TEXT
    expect(FDown.suggestedFilename()).toContain("background")


})  