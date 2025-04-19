const express=require("express")
const app=express()
const dotenv=require("dotenv").config()
const cors=require("cors")
// const serverless = require('serverless-http');
const apiRouter=require("./routes/api")
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    
    // برای درخواست‌های OPTIONS پاسخ فوری بدهید
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    
    next();
  });

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());
app.options('*', cors()); // برای همه routes
app.use("/",apiRouter)
// https://www.instagram.com/p/DIKhWGDxEY8/?utm_source=ig_web_copy_link
// https://www.instagram.com/p/DId17NmCYQC/?utm_source=ig_web_copy_link
// https://www.instagram.com/p/DIZWFQiiwEM/?utm_source=ig_web_copy_link
// https://www.instagram.com/p/DHOD77ot1QE/?utm_source=ig_web_copy_link
// https://www.instagram.com/reel/DIN-VHSIM7M/?utm_source=ig_web_copy_link

const port=process.env.Port || 3000
app.listen(3000)

module.exports = app;
