const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    Email:String,
    Password:String,
    Name:String,
    SDT:String,
    BirthDay:String,
    CMND:String,
    DC:String,
    Status:{
        M1:{
            Loai:String,
            noitiem:String,
            Ngaytiem:String
        }
    }
});
module.exports = mongoose.model("user",userSchema);