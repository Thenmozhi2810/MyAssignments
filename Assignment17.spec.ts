
import test from "@playwright/test"
import dotenv from "dotenv"

let FileName=process.env.NewFile || 'qa' || 'prod'

dotenv.config({path:`Data/${FileName}.env`})

test("Learn to read data from .ENV file", async ({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/main")

    await page.goto(process.env.L_URL as string)
    await page.locator("#username").fill(process.env.L_UserName as string)
    await page.locator("#password").fill(process.env.L_Password as string)
    await page.locator(".decorativeSubmit").click()
    await page.locator(`//div[@id="label"]`).click()
    await page.locator(`//a[text()="Leads"]`).click()
    await page.locator(`//a[text()="Create Lead"]`).click()
    await page.locator(`//input[@id="createLeadForm_companyName"]`).fill(process.env.L_CompanyName as string)
    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill(process.env.L_FirstName as string)
    await page.locator(`//input[@id="createLeadForm_lastName"]`).fill(process.env.L_LastName as string)
    await page.locator(`//select[@id="createLeadForm_dataSourceId"]`).selectOption({label:"Direct Mail"})

    let MarketCampaign=page.locator(`(//select[@id="createLeadForm_marketingCampaignId"])/option`)
    let CountMC=await MarketCampaign.count()
    console.log(`The toatal values in Market Campaign is ${CountMC}`)

    await page.locator(`//select[@id="createLeadForm_industryEnumId"]`).selectOption({label:"General Services"})
    await page.locator(`//select[@id="createLeadForm_currencyUomId"]`).selectOption({label:"INR - Indian Rupee"})

        
    let State=page.locator(`(//select[@id="createLeadForm_generalStateProvinceGeoId"])/option`)
    let CountState=await State.count()
    console.log(`The No. of States present are ${CountState}`)

    await page.locator(".smallSubmit").click()


})

