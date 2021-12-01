var vx = require("../Models/vx");

module.exports = function(app)
{
    app.post("../insert_vx",function(req,res){
        if(!req.body.Tenvx ||
            !req.body.Loai ||
            !req.body.Noitiem ||
            !req.body.NgayTiem)
            {
                res.json({kq:0});
            }
            else
            {
                res.json({kq:1});
            }
    });
}