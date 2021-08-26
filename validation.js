$(document).ready(function() {
    $('#contact').submit('click',function(event) {
        var isFormValid = false;
        if(isFormValid == false)
        {
            if (!$('#fname').val()) {
                $('#err1').addClass("error_show")
                // alert('Enter your name!');
                $('#fname').focus();
                event.preventDefault();
                isFormValid = false;
            }
            else
            {
                $('#err1').removeClass("error_show"); 
            }
            if (!$('#lname').val()) {
                $('#err2').addClass("error_show")
                $('#lname').focus();
                event.preventDefault();
                isFormValid = false;
            }
            else
            {
                $('#err2').removeClass("error_show"); 
            }
            if (!$('#pcode').val()) {
                $('#err3').addClass("error_show")
                $('#pcode').focus();
                event.preventDefault();
                isFormValid = false;
            }
            else
            {
                $('#err3').removeClass("error_show"); 
            }
            if (!$('#email').val()) {
                $('#err4').addClass("error_show")
                $('#email').focus();
                event.preventDefault();
                isFormValid = false;
            }
            else
            {
                $('#err4').removeClass("error_show"); 
            }
            if (!$('#uname').val()) {
                $('#err5').addClass("error_show")
                $('#uname').focus();
                event.preventDefault();
                isFormValid = false;
            }
            else
            {
                $('#err5').removeClass("error_show"); 
            }
            if (!$('#pswd').val()) {
                $('#err6').addClass("error_show")
                $('#pswd').focus();
                event.preventDefault();
                isFormValid = false;
            }
            else
            {
                $('#err6').removeClass("error_show"); 
            }
            if (!$('#cpswd').val()) {
                $('#err7').addClass("error_show")
                $('#cpswd').focus();
                event.preventDefault();
            }
            else
            {
                $('#err7').removeClass("error_show"); 
      
            }
            $('#fname').on('keypress',function(event) {
                $('#err1').removeClass("error_show"); 
            })
            $('#lname').on('keypress',function(event) {
                $('#err2').removeClass("error_show"); 
            })
            $('#pcode').on('keypress',function(event) {
                $('#err3').removeClass("error_show"); 
            })
            $('#email').on('keypress',function(event) {
                $('#err4').removeClass("error_show"); 
            })
            $('#uname').on('keypress',function(event) {
                $('#err5').removeClass("error_show"); 
            })
            $('#pswd').on('keypress',function(event) {
                $('#err6').removeClass("error_show"); 
            })
            $('#cpswd').on('keypress',function(event) {
                $('#err7').removeClass("error_show"); 
            })
            if ($("#fname").val() != 0 && $("#fname").val() != 0 && $("#lname").val() != 0 && $("#pcode").val() != 0 && $("#email").val() != 0 && $("#uname").val() != 0 && $("#pswd").val() != 0 && $("#cpswd").val() != 0 ){
                    isFormValid = true;
                }
            else{
                    isFormValid = false;
                }
                $("#email").change(function () {    
                    var inputvalues = $(this).val();    
                    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;    
                    if(!regex.test(inputvalues))
                    {       
                        $('#err41').addClass("error_show")
                        $('#email').val('');
                        $('#email').focus();
                        isFormValid = false;
                    }
                    else
                    {
                        $('#err41').removeClass("error_show"); 
                        isFormValid == true
                    }    

                });
                    $("#uname").change(function () {    
                        var inputvalues = $(this).val();    
                        var regex = /^[a-zA-Z0-9_]{5,10}$/;    
                        if(!regex.test(inputvalues))
                        {       
                            $('#err51').addClass("error_show")
                            $('#uname').val('');
                            $('#uname').focus();
                            isFormValid = false;
                        }
                        else
                        {
                            $('#err51').removeClass("error_show"); 
                            isFormValid == true
                        }    
                    });
                    
                    $("#pswd").change(function () {    
                        var inputvalues = $(this).val();    
                        var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}/;    
                        if(!regex.test(inputvalues))
                        {       
                            $('#err61').addClass("error_show")
                            $('#pswd').val('');
                            $('#pswd').focus();
                            isFormValid = false;
                        }
                        else
                        {
                            $('#err61').removeClass("error_show"); 
                            isFormValid == true
                        }    
                    });

                    $("#cpswd").change(function () {    
                        var cpswd = $('#cpswd').val();    
                        var pswd = $('#pswd').val();       
                        if(cpswd != pswd)
                        {       
                            $('#err71').addClass("error_show")
                            $('#cpswd').val('');
                            $('#cpswd').focus();
                            isFormValid = false;
                        }
                        else
                        {
                            $('#err71').removeClass("error_show"); 
                            isFormValid == true
                        }    
                    });
                    $("#pcode").change(function () {    
                        var inputvalues = $(this).val();    
                        var regex = /^\d{6}$/;    
                        if(!regex.test(inputvalues))
                        {       
                            $('#err31').addClass("error_show")
                            $('#pcode').val('');
                            $('#pcode').focus();
                            isFormValid = false;
                        }
                        else
                        {
                            $('#err31').removeClass("error_show"); 
                            isFormValid == true
                        }    
                    });
        }
           
        if(isFormValid == true)
        {
            alert("All validations are satisfied, Good to go!");
          
        }
        else
        {
            alert("All Fields are Required")
        }
    })
});