
// Demonstrating Abstraction

// INTERFACE

export interface Payments {

    cashOnDelivery():void
    upiPayments():void
    cardPayments():void
    internetBanking():void

}


// ABSTRACT

import { Payments } from "./Interface_Week6_ClassroomAssignment"

abstract class CanaraBank implements Payments
{
    cashOnDelivery()
    {
        console.log("The product is delivered using cash on delivery")
    }

    upiPayments()
    {
        console.log("The payment is processed by UPI")   
    }

    cardPayments()
    {
        console.log("The payment can also be processed by card")
    }

    internetBanking()
    {
        console.log("Internet banking is also available for this website")
    }

    recordPaymentDetails()
    {
        console.log("The payment details are recorded by default")
    }
}

export class Amazon extends CanaraBank
{
    cashOnDelivery()
    {
        console.log("The product is delivered using cash on delivery")
    }

    upiPayments()
    {
        console.log("The payment is processed by UPI")   
    }

    cardPayments()
    {
        console.log("The payment can also be processed by card")
    }

    internetBanking()
    {
        console.log("Internet banking is also available for this website")
    }

    recordPaymentDetails()
    {
        console.log("The payment details are recorded & traced by default in this website")
    }

    enterUsername()
    {
        console.log("Username Entered")
    }

    enterPassword()
    {
        console.log("Password Entered")

    }
    
    clickLogin()
    {
        console.log("Login button clicked")
    }
}


// INTERFACE & ABSTRACTION spec.ts

import test from "@playwright/test" 

import { Amazon } from "./Abstraction_W6_CA"

test("Object created for Amazon", async ({}) => {

    const AM = new Amazon()
    AM.cashOnDelivery()
    AM.upiPayments()
    AM.cardPayments()
    AM.internetBanking()
    AM.recordPaymentDetails()
    AM.enterUsername()
    AM.enterPassword()
    AM.clickLogin()

})


