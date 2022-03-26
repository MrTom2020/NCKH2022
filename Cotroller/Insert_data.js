var user = require("../Models/user");

module.exports = function(app)
{
    app.post('../insertdt',function(req,res)
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
            var u = new user({
                Email:req.body.Email,
                Password:req.body.Password,
                Name:req.body.Name,
                SDT:req.body.SDT,
                BirthDay:req.body.BirthDay,
                CMND:req.body.CMND,
                DC:req.body.DC,
                ID_TH:""
            });
            u.save(function(error)
            {
                if(error)
                {
                    res.json({kq:0,kqtv:"Thiếu tham số"});
                }
                else
                {
                    res.json({kq:1,kqtv:u});
                }
            });
        }
    });
}