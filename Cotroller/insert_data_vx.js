var vx = require("../Models/vx");
var user = require("../Models/user");
module.exports = function(app)
{
    app.post("/insert_vx",function(req,res){
        if( !req.body.Tenvx ||
            !req.body.Loai ||
            !req.body.Noitiem ||
            !req.body.NgayTiem)
            {
                res.json({kq:0});
            }
            else
            {
                var v = new vx({
                    IdUser:req.body.IdUser,
                    Tenvx:req.body.Tenvx,
                    Loai:req.body.Loai,
                    Noitiem:req.body.Noitiem,
                    NgayTiem:req.body.NgayTiem   
                });
                v.save(function(error)
                {
                    if(error)
                    {
                        res.json({kq:0,kqtv_vx:"Error"});
                    }
                    else
                    {
                        res.json({kq:1,kqtv_vx:v});
                    }
                });
            }
    });
}