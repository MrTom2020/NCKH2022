$(document).ready(function()
{
    var db;
    $.post("../home",function(data)
     {
        db = data.loi1.toString();
     });
     var mongoose = require('mongoose');
     mongoose.connect(db.toString(),{useNewUrlParser:true,useUnifiedTopology: true},function(err,db){
            if(err)
            {
                alert("ko");
            }
            else if(db)
             {
                alert("ok");
            }
            });
});