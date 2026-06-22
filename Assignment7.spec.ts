// Assignment 1 - Create Lead

import test from "@playwright/test"
test.only("Salesforce-Create Lead", async ({page}) => {

    await page.goto("https://login.salesforce.com/")
    await page.locator(`//input[@id="username"]`).fill('thenmozhidp2810.243a7fb346cf@agentforce.com')
    await page.locator(`//input[@id="password"]`).fill('thenu@1978')
    await page.locator(`//input[@id="Login"]`).click()

    await page.locator(`//button[@title="App Launcher"]`).click()
    await page.locator(`//button[@aria-label="View All Applications"]`).click()
    await page.locator(`//div[@data-name="Sales"]`).click()
    await page.locator(`//span[text()="Leads"]`).click()
    await page.locator(`//button[@name="New"]`).click()
    page.locator(`//button[@aria-label="Salutation"]`)
    await page.locator(`//span[text()="Ms."]`).click()
    await page.locator(`//input[@name="lastName"]`).fill('D')
    await page.locator(`//input[@name="Company"]`).fill('Cognizant')
    await page.locator(`//button[@name="SaveEdit"]`).click()

})


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


// Assignment 3 - Create Individuals

import test from "@playwright/test"
test("Create Credentials", async ({page}) => {
    await page.goto("https://login.salesforce.com/")
    await page.locator(`//input[@id="username"]`).fill('thenmozhidp2810.243a7fb346cf@agentforce.com')
    await page.locator(`//input[@id="password"]`).fill('thenu@1978')
    await page.locator(`//input[@id="Login"]`).click()

    await page.locator(`//button[@title="App Launcher"]`).click()
    await page.locator(`//button[@aria-label="View All Applications"]`).click()
    await page.locator(`//a[@data-label="Individuals"]`).click()
    await page.locator(`//div[@title="New"]`).click()
    await page.locator(`//input[@placeholder="Last Name"]`).fill('D')
    await page.click((`//span[text()="Save"]`))

})



// Assignment 4 - Edit Individuals

import test from "@playwright/test"
test("Edit Credentials", async ({page}) => {
    await page.goto("https://login.salesforce.com/")
    await page.locator(`//input[@id="username"]`).fill('thenmozhidp2810.243a7fb346cf@agentforce.com')
     await page.locator(`//input[@id="password"]`).fill('thenu@1978')
     await page.locator(`//input[@id="Login"]`).click()

     await page.locator(`//button[@title="App Launcher"]`).click()
     await page.locator(`//button[@aria-label="View All Applications"]`).click()
     await page.locator(`//a[@data-label="Individuals"]`).click()
     await page.locator(`//input[@name="Individual-search-input"]`).fill('DP')
     await page.locator(`(//div[@title="Edit"])[1]`).click()
    await page.locator(`(//a[@class="select"])[1]`).click()
    await page.locator(`//a[@title="Mr."]`).click()
    await page.locator(`//input[@placeholder="First Name"]`).fill('Thenmozhi')
    await page.locator(`//span[text()="Save"]`).click()

})