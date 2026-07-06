
// Edge Browser Instance

// import {test,chromium} from "@playwright/test"
// test("RedBus Login",async({})=>{

//     const browser=await chromium.launch()
//     const context=await browser.newContext()
//     const page=await context.newPage()

//     await page.goto("https://www.redbus.in/")
    
//     let pagetitle=await page.title()
//     console.log(page.title())

//     let pageurl=page.url()
//     console.log(page.url())

// })


// Webkit Browser Instance

import {test, webkit} from "@playwright/test"
test("Flipkart Login",async({})=>{

    const browser=await webkit.launch()
    const context=await browser.newContext()
    const page=await context.newPage()

    await page.goto("https://www.flipkart.com")
    
    let pagetitle=await page.title()
    console.log(page.title())

    let pageurl=page.url()
    console.log(page.url())

})
