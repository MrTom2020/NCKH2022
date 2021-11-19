$(document).ready(function()
{
    $.post("./Adminhome",function(data)
     {
         alert(data.loi1.toString());
     });
});