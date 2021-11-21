var user = require("../Models/user");

module.exports = function(app)
{
    app.post('/insertdt',function(req,res)
    {
        if(!req.body.Email ||
        !req.body.Password ||
        !req.body.Name ||
        !req.body.SDT ||
        !req.body.BirthDay ||
        !req.body.CMND ||
        !req.body.DC ||
        !req.body.Loai ||
        !req.body.noitiem ||
        !req.body.Ngaytiem)
        {
            res.json({kq:0});
        }
        else
        {
            res.json({kq:1});
        }
    });
}