$(document).ready(function()
{
    var db;
    $.post("../home",function(data)
     {
       alert(data[0].toString());
     });
});