var user = require("../Models/user");

module.exports = function(app)
{
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
            user.find({Email:req.body.Email}).exec(function(err, u1)
            {
              if (err)
              {
                res.json({kq:0,kqtv:err});
              }
              else{
                  if(u1[0].Email == "")
                  {
                    res.json({kq:1,kqtv:err});
                    u.save(function(error)
                    {
                      if(error)
                    {
                       res.json({kq:0,kqtv:error});
                    }
                    else
                   {
                       res.json({kq:1,kqtv:u});
                   }
               });
                  }
                  else
                  {
                    res.json({kq:0,kqtv:error});
                   }
              } 
              });
        }
    });
}