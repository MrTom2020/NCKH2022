var express = require("express");
var app = express();
app.use(express.static("Public"));
app.set("view engine","ejs");
app.set("views","./View");
app.listen(process.env.PORT || 5000);



var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));


require("./Cotroller/Signup")(app);