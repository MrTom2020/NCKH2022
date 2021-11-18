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
    app.get("/home",function(req,res)
    {
        res.render("Admin/home");
    });
    app.get("/*",function(req,res)
    {
        res.render("h");
    });
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
            var kqtv = a(u.Name,u.Password);
            res.json({kq:kqtv,loi:chuoi})
        }
        });
}
function a(tk,mk)
{
    chuoi = 'mongodb+srv://'+ tk.toString() +':'+mk.toString() + '@cluster0.8kkbk.mongodb.net/Cluster0?retryWrites=true&w=majority';
  mongoose.connect(chuoi,{useNewUrlParser:true,useUnifiedTopology: true},function(err,db){
        if(err)
        {
            kqqq = 0;
        }
        else if(db)
         {
           kqqq = 1;
        }
        });
            return kqqq;
}