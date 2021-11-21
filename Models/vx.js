const mongoose = require("mongoose");

const vxSchema = new mongoose.Schema({
    IdUser:String,
    Tenvx:String,
    Loai:String,
    Noitiem:String,
    NgayTiem:String
});
module.exports = mongoose.model("vx",vxSchema);