$('form[name=signup_form').submit(function(e) {

    let $form =$(this);
    let $error = $form.find(".error");
    let data = $form.serialize();

    $.ajax({
        url: "/user/signup",
        type: "POST",
        data: data,
        dataType: "json",
        success: function(res){
            console.log(res);
        },
        error: function(res) {
            console.log(res);
            $error.text(res.responseJSON.error).removeClass('error--hidden');
        }
    });

  e.preventDefault();  
})