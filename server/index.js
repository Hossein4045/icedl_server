const express=require("express")
const app=express()
const dotenv=require("dotenv").config()
const cors=require("cors")
// const serverless = require('serverless-http');
const apiRouter=require("./routes/api")

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());
app.use("/",apiRouter)
// https://www.instagram.com/p/DIKhWGDxEY8/?utm_source=ig_web_copy_link
// https://www.instagram.com/p/DId17NmCYQC/?utm_source=ig_web_copy_link
// https://www.instagram.com/p/DIZWFQiiwEM/?utm_source=ig_web_copy_link
// https://www.instagram.com/p/DHOD77ot1QE/?utm_source=ig_web_copy_link
// https://www.instagram.com/reel/DIN-VHSIM7M/?utm_source=ig_web_copy_link


const port=process.env.Port || 3000

module.exports = app;
