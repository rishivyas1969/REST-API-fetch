const express = require("express") ;
const router = express.Router() ;
const async = require("express-async-await") ;
const fetch = require("node-fetch") ;

router.get("/",async (req, res, next) => {

    const result = await IprocessData() ;
    res.json(result) ;
}) ;

const IfoundData = async () => {
    return await fetch("https://finnhub.io/api/v1/news?category=general&token=bs2vi67rh5r9f6appe50") ;
}

async function IprocessData(req, res, next) {
    const news = await IfoundData() ;
    return news.json() ;
}

module.exports = router ;