$(document).ready(function()
{
    var db;
    $.post("../home",function(data)
     {
       alert(data.toString());
     });
});