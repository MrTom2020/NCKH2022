var user = require("../Models/user");

module.exports = function(app)
{
    app.post('/checkEmail',function(req,res)
    {
        if(!req.body.Email)
        {
            res.json({kq:0,kqtv:"Thiếu tham số"});
        }
        else
        {
        //     user.find({Email:req.body.Email}).exec(function(err, u)
        //     {
        //      if (err)
        //      {
        //         res.json({kq:0,kqtv:"Thiếu tham số"});
        //      }
        //      else{
        //         if(u[0].Email.length === 0)
        //         {
        //             res.json({kq:1,kqtv:"OK"});
        //         }
        //         else
        //         {
        //             res.json({kq:0,kqtv:"Đã có tài khoản đăng ký"});
        //         }
        //      }  
        //    });
         
        }
    });
    app.post('/insertdt',function(req,res)
    {
        if(!req.body.Email ||
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
                    res.json({kq:1,kqtv:"Thêm dữ liệu thành công"});
                }
            });
        }
    });


}