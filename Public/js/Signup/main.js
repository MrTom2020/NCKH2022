$(document).ready(function(){

  $('#reset').on('click', function(){
      $('#register-form').reset();
  });
  $("#submit").click(function(){
    $.post('../../../insertdt',{
      Email:$("#email").val(),
     Name: $("#father_name").val() + " " + $("#name").val(),
     SDT:$("#pincode").val(),
      BirthDay:$("#birth_date").val(),
      CMND:$("#CMND").val(),
     DC:$("#address").val()
      },function(data)
      {
        if(data.kq == 1)
        {
         alert("Thêm dữ liệu thành công");
        }
        else if(data.kq == 0)
        {
            alert("Thiếu tham số");
        }
         
    });
  });
})(jQuery);