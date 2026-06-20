
// Assignment 2 - Edit Lead

import {test} from "@playwright/test"
test("Launch a Browser",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill('demoCSR2')
    await page.locator('.inputLogin').nth(1).fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    page.locator('href="/crmsfa/control/main')
    page.locator('a[href="/crmsfa/control/leadsMain"]')
    await page.locator(`text='Create Lead'`).click()
    await page.locator('#createLeadForm_companyName').fill('TCS')
    await page.locator('#createLeadForm_firstName').fill('Thenmozhi')
    await page.locator('#createLeadForm_lastName').fill('D')
    await page.locator('[value="Create Lead"]').click()
    page.locator('[href="updateLeadForm?partyId=15503]').nth(2)
    await page.locator('#updateLeadForm_companyName').fill('Cognizant')
    await page.locator('[value="Update"]').click()

})
