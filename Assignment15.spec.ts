
import test from "@playwright/test"

import {parse} from "csv-parse/sync"
import fs from "fs"
import path from "path"

let value:any[]=parse(fs.readFileSync(path.join(__dirname,'../../../Data/Leaftaps.csv')),{columns:true,skip_empty_lines:true})

    test(`Assignment to read Leaftaps data from CSV file`, async ({page}) => {

        await page.goto("https://leaftaps.com/opentaps/control/main")

        await page.locator("#username").fill(value[0].UserName)
        await page.locator("#password").fill(value[0].Password)
        await page.locator(".decorativeSubmit").click()
        await page.locator(`//div[@id="label"]`).click()
        await page.locator(`//a[text()="Leads"]`).click()
        await page.locator(`//a[text()="Create Lead"]`).click()
        await page.locator(`//input[@id="createLeadForm_companyName"]`).fill(value[0].CompanyName)
        await page.locator(`//input[@id="createLeadForm_firstName"]`).fill(value[0].FirstName)
        await page.locator(`//input[@id="createLeadForm_lastName"]`).fill(value[0].LastName)
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


