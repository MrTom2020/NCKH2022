var user = require("../Models/user");

module.exports = function(app)
{
    app.get("/",function(req,res){
        res.render("login");
    });
    app.get("/admin",function(req,res)
    {
        res.render("admin");
    });
    app.get("/*",function(req,res)
    {
        res.render("Err");
    });
    // app.post('/dangky',function(req,res)
    // {

    // });
}