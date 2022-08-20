const express = require("express");
const app=express();
app.use(express.json());

//product route
const product = require("./routes/productRoute");


//product route pre map route 
app.use("/api/v1", product);

module.exports=app;