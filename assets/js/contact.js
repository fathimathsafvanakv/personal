$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            name:{
                required:true,
                minlength:4
            },
            email:{
                type:email,
                required:true
            },
            subject:{
                required:true,
                minlength:10
            },
            message:{
                required:true,
                minlength:10
            }
        },
        messages:{
            name:{
                required:"please enter name",
                minlength:"atleast 4 characters"
            },
            email:{
                required:"please enter email"
            },
            subject:{
                required:"please enter subject",
                minlength:"atleast 10 characters"
            },
            message:{
                required:"please enter Message",
                minlength:"atleast 10 characters"
            },
        }
    });
});