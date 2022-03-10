

$(document).ready(function () {
    $(".form_error").hide();
    $("input").attr("required", "");
    var exp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    $("#fname").on("blur", function() {
        if ( $(this).val().match('^[a-zA-Z]{3,16}$') ) {
            $("#fname").next().next().hide();
        } else {
            
            $("#fname").next().next().show();
        }
    });

    $("#lname").on("blur", function() {
        if ( $(this).val().match('^[a-zA-Z]{3,16}$') ) {
            $("#lname").next().next().hide();
        } else {
            
            $("#lname").next().next().show();
        }
    });

    $("#mail_data").on("blur", function() {
        if ( $(this).val().match(exp) ) {
            $("#mail_data").next().next().hide();
        } else {
            
            $("#mail_data").next().next().show();
        }
    });

    $("#password").on("blur", function() {
        if ( $(this).val().length === 6 ) {
            $("#password").next().next().hide();
        } else {
            
            $("#password").next().next().show();
        }
    });

    $("#cpassword").on("blur", function() {
        if ( $(this).val().length === 6 && $(this).val() === $("#password").val() ) {
            $("#cpassword").next().next().hide();
        } else {
            
            $("#cpassword").next().next().show();
        }
    });

});