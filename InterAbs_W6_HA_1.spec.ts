
// Demonstrating INTERFACE

export interface DatabaseConnection
{
    connect():void
    disconnect():void
    executeUpdate():void
    
}


// Demonstrating ABSTRACTION

import { DatabaseConnection } from "./Interface_W6_HA_1";

export class DBConnect implements DatabaseConnection
{
    connect()
    {
        console.log("The Database is connected")
    }
    disconnect()
    {
        console.log("The Database is disconnected")
    }
    executeUpdate()
    {
        console.log("The Database is updated")
    }

}


// INTERFACE & ABSTRACTION spec.ts

import test from "@playwright/test"

import { DBConnect } from "./Abstraction_W6_HA_1"

test("Object created for DataBase", async ({}) => {

    const DB = new DBConnect()
    DB.connect()
    DB.disconnect()
    DB.executeUpdate()

})

