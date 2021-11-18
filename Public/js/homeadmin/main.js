$(document).ready(function()
{
    $.post("./home",function(data)
     {
         alert(data.loi.toString());
     });
    alert("0k");
});