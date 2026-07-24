
// Classroom Assignment ---> Demonstrating Polymorphism

class Demonstrate
{
    reportStep(msg:string, status:string) : void
    reportStep(msg:string, status:string, snap?:boolean) : void
    
    reportStep(msg:string, status:string, snap?:boolean) : void
    {
        if(snap)
    {
        console.log( msg  +  " which is updated to the "  +  status  +  " and the statement is "  +  snap)
    }
    else
    {
        console.log( msg  +  " has become "  +  status  +  " nowadays")
    }
    }

}

const ObjDemo = new Demonstrate()
ObjDemo.reportStep("Java is a Programming language", "latest version", true )
ObjDemo.reportStep("Automation testing", "popular")

