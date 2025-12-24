import express,{ Application} from "express";

const app : Application =express();

const PORT : Number = 3000;

app.listen(PORT,()=>{
    console.log("Server is running on ",PORT);    
})


