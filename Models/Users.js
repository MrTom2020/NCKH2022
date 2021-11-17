const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema({
    Name:String,
    Password:String
});
mongoose.connect('mongodb+srv://'+ 'admin01' +':'+'hiep1234' + '@cluster0.8kkbk.mongodb.net/Cluster0?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true},function(err,db){
        if(err)
        {
            console.log("ko");
        }
        else if(db)
         {
            console.log("ok");
        }
        });
module.exports = mongoose.model("Users",UsersSchema);