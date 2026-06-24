
// Create a Lead using Playwright Locators

import test from "@playwright/test"
test("Playwright Locators", async ({page}) =>{
    await page.goto("https://leaftaps.com/opentaps/control/main")

    await page.getByLabel("Username").fill('Demosalesmanager')
    await page.getByLabel("Password").fill('crmsfa')
    page.getByRole("button",{name:"Login"}).click()
    page.getByRole("link",{name:"CRM/SFA"}).click()
    await page.getByRole("link",{name:"Leads"}).click()
    await page.getByRole("link",{name:"Create Lead"}).click()
    await page.locator(`//input[@id="createLeadForm_companyName"]`).fill('Cognizant')
    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill('Thenmozhi')
    await page.locator(`//input[@id="createLeadForm_lastName"]`).fill('D')
    await page.locator(`//input[@id="createLeadForm_personalTitle"]`).fill('Ms.')
    await page.locator(`//input[@id="createLeadForm_generalProfTitle"]`).fill('Playwright Locators')
    await page.locator(`//input[@id="createLeadForm_annualRevenue"]`).fill('5,000,000')
    await page.locator(`//input[@id="createLeadForm_departmentName"]`).fill('QA')
    await page.locator(`//input[@id="createLeadForm_primaryPhoneNumber"]`).fill('1234567895')
    page.locator(`//input[@name="submitButton"]`).click()

})