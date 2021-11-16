var user = require("../Models/user");

module.exports = function(app)
{
    app.get("/",function(req,res){
        res.render("login");
    });
    app.get("/admin",function(req,res)
    {
        res.render("/Admin/home");
    });
    app.get("/*",function(req,res)
    {
        res.render("Err");
    });
}