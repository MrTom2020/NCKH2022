var user = require("../Models/user");

module.exports = function(app)
{
    app.get("/",function(req,res){
        res.render("login");
    });
}