var express = require("express");
//var sphp = require("php");
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
// mongoose.connect('mongodb+srv://admin02:hiep1234@cluster0.8kkbk.mongodb.net/Cluster0?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true},function(err,db)
// //mongoose.connect('mongodb+srv://'+ 'admin01' +':'+'hiep1234' + '@cluster0.8kkbk.mongodb.net/NCKH2022?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true},function(err,db)
// {
//             if(err)
//             {
//                 console.log("ko");
//             }
//             else if(db)
//              {
//                 console.log("ok");
//             }
//             });
require("./Cotroller/Signup")(app);
require("./Cotroller/Insert_data")(app);
require("./Cotroller/Update_data")(app);
require("./Cotroller/insert_data_vx")(app);
require("./Cotroller/update")(app);
require("./Cotroller/check_data")(app);