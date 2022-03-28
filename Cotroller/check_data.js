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
            user.find({Email:req.body.Email}).exec(function(err, u)
            {
             if (err)
             {
                res.json({kq:0,kqtv:"Thiếu tham số"});
             }
             else{
                if(u[0].Email.length === 0)
                {
                    res.json({kq:1,kqtv:"OK"});
                }
                else if(u[0].Email.length != 0)
                {
                    res.json({kq:0,kqtv:"Đã có tài khoản đăng ký "});
                }
             }  
           });
         
        }
    });
}