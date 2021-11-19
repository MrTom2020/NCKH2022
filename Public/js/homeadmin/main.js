$(document).ready(function()
{
    $.post("./home",function(data)
     {
         alert(data.loi1);
     });
    //alert("0k");
});