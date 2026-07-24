
class WebComponent 
{
    selector:string

    constructor(selector:string) 
    {
        this.selector = selector
    }

    click()
    {
        console.log(`Click button is pressed using ${this.selector}`)
    }

    focus()
    {
        console.log(`Focus on the code using ${this.selector}`)
    }
}

class Button extends WebComponent
{
    click()
    {
        console.log(`After the ${this.selector} ic clicked, it gives a pop-up message`)
    }
}

class TextInput extends WebComponent
{
    value:string

    constructor(selector:string)
    {
        super(selector)    // method overriding
        this.value = ""
    }

    enterText(text:string)
    {
        this.value = text
        console.log(`${this.value} is a Programming language`)
    }
}

function testComponents()
{
    const ObjButton = new Button(".decorativeSubmit")
    const ObjText = new TextInput("#username")

    ObjButton.click()

    ObjText.enterText("Java")

}

testComponents()

