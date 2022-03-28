const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    Email:{type:String,
        require:true},
    Name:String,
    SDT:String,
    BirthDay:String,
    CMND:String,
    DC:String,
    ID_TH:String
});
module.exports = mongoose.model("user",userSchema);