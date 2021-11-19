//var user = require("../Models/User");
$(document).ready(function()
{
    var db;
    $.post("../home",function(data)
     {
        db = data.loi1.toString();
     });
     user.find({Email:'tomhumchinvn@gmail.com'},{Email:1}).limit(6).exec(function(err, u)
     {
        if (err) throw err;
        alert(u);
      });
     
});