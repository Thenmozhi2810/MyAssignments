
import {test,expect} from "@playwright/test"

import path from 'path'

test(`Multiple file upload using input<type="file">`, async ({page}) => {

    await page.goto("https://www.leafground.com/file.xhtml")

    let fileuploadreference=page.locator(`(//input[@type="file"])[2]`)

// Relative path
    fileuploadreference.setInputFiles([path.join(__dirname,"../../../Utils/Qeagle.jpeg"),path.join(__dirname,"../../../Utils/Testleaf.jpeg")])

    await expect(page.locator(`(//div[@class="ui-fileupload-filename"])[1]`)).toContainText('Qeagle')
    await expect(page.locator(`(//div[@class="ui-fileupload-filename"])[2]`)).toContainText('Testleaf')

})

    