var user = require("../Models/Users");
var mongoose = require('mongoose');
var kqqq;
var chuoi;
module.exports = function(app)
{
    app.get("/",function(req,res){
        res.render("login");
    });
    app.get("/admin",function(req,res)
    {
        res.render("admin");
    });
    app.get("/Signup",function(req,res)
    {
        res.render("Signup");
    });
    app.post("/aa",function(req,res)
    {
        res.send('POST request to the homepage');
    });
    // mongoose.connect('mongodb+srv://'+ 'admin01' +':'+'hiep1234' + '@cluster0.8kkbk.mongodb.net/Cluster0?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true},function(err,db){
    //     if(err)
    //     {
    //         console.log("ko");
    //     }
    //     else if(db)
    //      {
    //        kqqq = "01111";
    //     }
    //     });
    app.post('/login',function(req,res)
    {
        if(!req.body.Name || !req.body.Password)
        {
            res.json({kq:0,loi:"Dữ liệu bị trống"})
        }
        else
        {
            var u = new user({
                Name:req.body.Name,
                Password:req.body.Password
            });
           // setTimeout(6000);
            var kq = a(u.Name,u.Password);
            res.json({kq:kq,loi:chuoi})
        }
        });
}
function a(tk,mk)
{
    chuoi = 'mongodb+srv://'+ tk.toString() +':'+mk.toString() + '@cluster0.8kkbk.mongodb.net/Cluster0?retryWrites=true&w=majority';
  mongoose.connect(chuoi,{useNewUrlParser:true,useUnifiedTopology: true},function(err,db){
        if(err)
        {
            kqqq = "ko";
        }
        else if(db)
         {
           kqqq = "ok";
        }
        });
            return JSON.stringify(kqqq);
}