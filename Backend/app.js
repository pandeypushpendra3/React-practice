const express = require("express");
const app = express();

// require('dotenv').config();


app.get("/",(req,res)=>{
    res.send("hello from node");
});

const port = 8000;

app.listen(port,()=>{
    console.log("Listen to the port")
});