var user = require("../Models/user");

module.exports = function(app)
{
    app.post('/insertdt',function(req,res)
    {
        res.json({kq:1});
    });
}