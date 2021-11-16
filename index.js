var express = require("express");
var app = express();

app.listen(process.env.PORT || 5000);

app.get('/',(req,res)=>{
 res.send("1234");
});