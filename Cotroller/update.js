var user = require("../Models/user");

module.exports = function(app)
{
    app.post('/update1',function(req,res)
    {
            var s = req.body.Email;
            var vt = s.indexOf("AAA!!!",0);
            var e = s.substring(0,vt);
            var id = s.substring(e.length,s.length);
            user.findOneAndUpdate({_id:id},
            {
                ID_TH:e
            },(err)=>{
              if(err)
              {
                res.json({kq:0,kqtv:id});
              }
              else
              {
                res.json({kq:1,kqtv:"OK"});
              }
           });
    });
}