
(function ($) {
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
    const mongoose = require('mongoose');
    $('#btn_login').click(function()
    {
        $.post("./login",{
           Name:$("#email").val(),
           Password:$("#pass").val()
        },function(data)
        {
            if(data.kq == 1)
            {
                mongoose.connect('mongodb+srv://'+ $("#email").val() +':'+$("#pass").val() + '@cluster0.8kkbk.mongodb.net/Cluster0?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true},function(err,db){
                 if(err)
                 {
                   alert("ko");
                 }
                  else if(db)
                 {
                    alert("ok");
                  }
                 });
            }
            //alert(data.kq.toString());
        });
       // window.location="https://nckh2022.herokuapp.com/home";
    });
    $('#btn_signup').click(function()
    {
        window.location="https://nckh2022.herokuapp.com/Signup";
    });
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

})(jQuery);