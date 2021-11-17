var express = require("express");
var app = express();
app.use(express.static("Public"));
app.set("view engine","ejs");
app.set("views","./View");
app.set("admin","./View/Admin");
app.listen(process.env.PORT || 5000);



var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

const mongoose = require('mongoose');
const { json } = require("body-parser");
mongoose.connect('mongodb+srv://admin01:hiep1234@cluster0.8kkbk.mongodb.net/Cluster0?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true},function(err,db){
    if(err)
    {
        console.log("...11" + err);
    }
    else if(db)
    {
      console.log("ok123");
    }
  });
require("./Cotroller/Signup")(app);