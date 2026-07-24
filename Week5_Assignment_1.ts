
// INHERITANCE ASSIGNMENT


class Browser3    // Parent
{
    browserName:string
    browserVersion:string

    constructor(name:string, version:string)
    {
        this.browserName = name
        this.browserVersion = version
    }

    openURL(url:string)
    {
        console.log(`${this.browserName} with ${this.browserVersion} version in opening using the URL`)
    }

    closeBrowser()
    {
        console.log(`${this.browserName} is closed`)
    }

    navigateBack()
    {
        console.log(`${this.browserName} is navigated back to next page`)
    }

}

class Chrome1 extends Browser3    // Child 1
{
    openIncognito()
    {
        console.log(`${this.browserName} is opened in Incognito mode`)
    }

    clearCache()
    {
        console.log(`The history is clear in the ${this.browserName} browser`)
    }

}

class Edge1 extends Browser3    // Child 2
{
    takeSnap()
    {
        console.log(`${this.browserName} compares with the previous Snapshots`)
    }

    clearCookies()
    {
        console.log(`The cookies are cleared in the ${this.browserName} browser`)
    }

}

class Safari extends Browser3    // Child 3
{
    readerMode()
    {
        console.log(`${this.browserName} supports ReaderMode option`)
    }

    fullScreenMode()
    {
        console.log(`${this.browserName} supports full screen mode`)
    }

}

const ObjChrome = new Chrome1("Chrome","V 10.0")    // Object created for Child 1
ObjChrome.openURL("www.google.com")
ObjChrome.openIncognito()
ObjChrome.clearCache()

const ObjEdge = new Edge1("Edge","V 20.0")      // Object created for Child 2
ObjEdge.takeSnap()
ObjEdge.clearCookies()

const ObjSafari = new Safari("Safari","V 25.0")     // Object created for Child 3
ObjSafari.readerMode()
ObjSafari.fullScreenMode()


