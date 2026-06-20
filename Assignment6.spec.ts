
import {test} from "@playwright/test"
test('Leaftaps-Create a Lead', async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill('demoCSR2')
    await page.locator('[class="inputLogin"]').nth(1).fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.locator(`text="CRM/SFA"`).click()

    await page.locator(`text='Leads'`).click()
    await page.locator(`text='Create Lead'`).click()
    await page.locator('#createLeadForm_companyName').fill('TCS')
    await page.locator('#createLeadForm_firstName').fill('Devi')
    await page.locator('#createLeadForm_lastName').fill('Priya')
    await page.locator('#createLeadForm_personalTitle').fill('Ms.')
    await page.locator('#createLeadForm_generalProfTitle').fill('Testleaf')
    await page.locator('#createLeadForm_annualRevenue').fill('5,000,000')
    await page.locator('#createLeadForm_departmentName').fill('Quality Assurance')
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('1234567895')
    await page.locator('.smallSubmit').click()

})