var user = require("../Models/user");

module.exports = function(app)
{
    app.post('/updatedt',function(req,res)
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
            var s = req.body.Email;
            var vt = s.indexOf("AAA!!!",0);
            var e = s.substring(0,vt);
            var id = s.substring(vt + 6,s.length);
            user.findOneAndUpdate({_id:id},
            {
                Name:req.body.Name,
           SDT:req.body.SDT,
           BirthDay:req.body.BirthDay,
           CMND:req.body.CMND,
           DC:req.body.DC},(err)=>{
              if(err)
              {
                res.json({kq:0,kqtv:err});
              }
              res.json({kq:1,kqtv:"OK"});
           });
        }
    });
}