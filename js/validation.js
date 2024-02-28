$(document).ready(function(){
    $("#sign-up").validate({
        rules:{
            fname:{
                required:true,
                minlength:3
            },
            emailaddress: {
                email:true
            },
            sub:{
                required:true,
                minlength:5
            },
            mess:{
                required:true,
                minlength:50
            },
        },
        messages:{
            fname:{
                minlength:"Please enter a valid name"
               
            },
        }
    })
})