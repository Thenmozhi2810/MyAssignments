
// Demonstrating Method Overloading

class APIClient
{
    sendRequest(endpoint:string) : void
    sendRequest(endpoint:string, requestBody:string, requestStatus?: boolean) : void

    sendRequest(endpoint:string, requestBody?:string, requestStatus?: boolean) : void
    {
        if(requestStatus===true)
        {
            console.log("This website - " + endpoint + " provides all the " + requestBody + " and that is always " + requestStatus)
        }
        else
        {
            console.log("This website - " + endpoint + " is very useful")
        }
    }
}

const client = new APIClient()
client.sendRequest("www.google.com")
client.sendRequest("www.google.com", "information", true)



// Demonstrating Method Overriding

class BasePage
{
    findElements()
    {
        console.log("Find the elements in the Base Page")
    }

    clickElement()
    {
        console.log("Perform the click action")
    }

    enterText()
    {
        console.log("Enter the mandatory fields")
    }

    performCommonTask()
    {
        console.log("Performance results of the Base Page")
    }
}

class LoginPage4
{
    performCommonTask()
    {
        console.log("Performance results of the Login Page")
    }
}

const BP = new BasePage()
BP.findElements()
BP.clickElement()
BP.enterText()
BP.performCommonTask()

const LP = new LoginPage4()
LP.performCommonTask()

