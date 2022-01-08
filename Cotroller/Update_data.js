var user = require("../Models/user");

module.exports = function(app)
{
    app.post('/updatedt',function(req,res)
    {
        if(!req.body.Email ||
        !req.body.Password ||
        !req.body.Name ||
        !req.body.SDT ||
        !req.body.BirthDay ||
        !req.body.CMND ||
        !req.body.DC)
        {
            res.json({kq:0,kqtv:"Thiếu tham số"});
        }
        else
        {
            res.json({kq:1,kqtv:req.body.Email});
        }
    });
}