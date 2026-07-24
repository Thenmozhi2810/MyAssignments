
// Demonstrating INTERFACE

export interface DatabaseConnection
{
    connect():void
    disconnect():void
    executeUpdate():void

}


// Demonstrating ABSTRACTION


import { DatabaseConnection } from "./Interface_W6_HA_2";

abstract class MySqlConnection implements DatabaseConnection
{
    connect(): void 
    {
        console.log("The Database is connected")
    }
    disconnect(): void
    {
        console.log("The Database is disconnected")
    }
    executeUpdate(): void 
    {
       console.log("The Database is updated") 
    }
    executeQuery():void
    {
        console.log("The Query in the database is executed")
    }

}

export class PlaywrightConnection extends MySqlConnection
{
    connect(): void 
    {
        console.log("The Database is connected")
    }
    disconnect(): void
    {
        console.log("The Database is disconnected")
    }
    executeUpdate(): void 
    {
       console.log("The Database is updated") 
    }
    executeQuery():void
    {
        console.log("The Query in the database is executed")
    }

}


// INTERFACE & ABSTRACTION spec.ts

import test from '@playwright/test'

import { PlaywrightConnection } from './Abstract_W6_HA_2'

test("Object created for Playwright Connection", async ({}) => {

    const PC = new PlaywrightConnection()
    PC.connect()
    PC.disconnect()
    PC.executeUpdate()
    PC.executeQuery()

})


