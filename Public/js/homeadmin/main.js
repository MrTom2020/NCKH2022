$(document).ready(function()
{
    $.post("./h",function(data)
     {
         alert(data.loi1.toString());
     });
});