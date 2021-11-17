var user = require("../Models/Users");
var mongoose = require('mongoose');
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
    app.get("/*",function(req,res)
    {
        res.render("Err");
    });
    // mongoose.connect('mongodb+srv://'+ 'admin01' +':'+'hiep1234' + '@cluster0.8kkbk.mongodb.net/Cluster0?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true},function(err,db){
    //     if(err)
    //     {
    //         console.log("ko");
    //     }
    //     else if(db)
    //      {
    //         console.log("ok");
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
            var kk = a(u.Name,u.Password);
            res.json({kq:kk,loi:"Dữ liệu bị trống"})
        }
        });
}
function a(tk,mk)
{
    var kqq;
    mongoose.connect('mongodb+srv://'+ tk +':'+ mk + '@cluster0.8kkbk.mongodb.net/Cluster0?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true},function(err,db){
            if(err)
            {
                kqq = "ko";
            }
            else if(db)
             {
               kqq = "ok";
            }
            });
            return kqq;
}