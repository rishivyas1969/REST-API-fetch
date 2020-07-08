const express = require("express") ;
const app = express() ;

const router = require("./routes/routes") ;

app.use(router) ;

app.listen(3001, () => {
    console.log("Server started..") ;
})