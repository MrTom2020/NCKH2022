$(document).ready(function()
{
    $.post("./login",function(data)
     {
         alert(data.loi.toString());
     });
});