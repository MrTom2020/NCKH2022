$(document).ready(function()
{
    var db;
    $.post("../home",function(data)
     {
        db = data.loi1.toString();
     });
});