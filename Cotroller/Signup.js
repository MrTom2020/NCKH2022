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
            mongoose.connect('mongodb+srv://'+ u.Name.toString() +':'+u.Password.toString() + '@cluster0.8kkbk.mongodb.net/Cluster0?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true},function(err,db){
            if(err)
            {
                res.json({kq:2,loi:"k0"});
            }
            else if(db)
             {
                res.json({kq:1,loi:"ok"});
            }
            });
        }
        });
}