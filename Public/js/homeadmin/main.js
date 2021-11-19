$(document).ready(function()
{
    var db;
    $.post("../home",function(data)
     {
       alert(JSON.stringify(data.loi1[0].Email));
     });
});