const express=require("express")
const router=express.Router()
const { igdl } = require('btch-downloader')
const _=require("lodash")


router.get("/",(req,res)=>{
    res.send("YY")
})

router.post("/", async (req, res) => {
    const { url } = req.body;
    try {
        
        const data = await igdl(url);
        const uniqueData = _.uniqWith(data, (a, b) => 
            a.thumbnail === b.thumbnail || a.url === b.url
          );
        
        console.log("دانلود موفق برای:", url);
        
        res.json({
            status: true,
            data: uniqueData,
            message: "دانلود با موفقیت انجام شد"
        });
        
    } catch (error) {
        console.error("خطا در پردازش درخواست:", error);

        res.status(500).json({
            status: false,
            message: "خطا در پردازش درخواست",
            error: error.message
        });
    }
});

// خطای 404 برای مسیرهای نامشخص
router.get("/",(req, res) => {
    res.status(404).json({
        status: false,
        message: "مسیر یافت نشد"
    });
});

module.exports = router;