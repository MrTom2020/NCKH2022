$(document).ready(function()
{
    $.post("./Admin/home",function(data)
     {
         alert(data.loi.toString());
     });
});