var user = require("../Models/Users");
const mongoose = require('mongoose');
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
            res.json({kq:1,loi:"ok"})
        }
        });
}