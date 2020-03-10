$("#submit").on("click", function() {
    let name = $("#name").val().trim();
    let phone = $("#phone").val().trim();
    let message = $("#message").val().trim();

    if(name === "") {
        $("#erconts").text("Введите имя");
        return false;
    } else if ( phone === "" || !phone.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)) {
        $("#erconts").text("Введите номер телефона");
        return false;
    }else if(message.length < 5){
        $("#erconts").text("Введите сообщение не менее 5 символов");
        return false;
    }

    $("#erconts").text("");

    $.ajax({
        url:'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: {'name': name,'phone' : phone, 'message' : message },
        dataType: 'html',
        beforeSend: function () {
            $("#submit").prop("disable", true);
        },
        success: function (data) {

            if(!data) {
                alert("Были ошибки,  сообщение не отправлено!");
            } else {
                $(".modal").addClass("disable");
                $(".modalGood").addClass("modalGoodEnable");
            }

           $("#mailForm").trigger("reset");

           $("#sendMail").prop("disable", false);


        }
    });
});

$('.head').on('click', function (){
    $('.modal-wrapper').removeClass('open');

    $(".modal").removeClass("disable");
    $(".modalGood").removeClass("modalGoodEnable");

});