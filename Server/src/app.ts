import express, { Application } from "express";

const app : Application = express();
const PORT : Number = 3000;

app.listen(PORT,()=>{
    console.log("server is running on port ",PORT);
    
})