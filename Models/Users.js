const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema({
    Name:String,
    Password:String
});
module.exports = mongoose.model("Users",UsersSchema);