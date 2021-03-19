$(document).ready(function () {


    $("#submit").click(function () {
        $("#form").submit();
    });


    $("#form").keypress(function (e) {
        if (e.keyCode == 13) {
            $("#form").submit();
        }
    });

    $(".form-control").focus(function () {
        $(this).removeClass('required');
        $(this).parent().find("span").remove();
    });


    $("#form").submit(function () {

        var required = 0;

        $(".form-control").each(function (index) {
            $(this).removeClass('required');
            $(this).parent().find("span").remove();
            if ($(this).val() == "") {
                $(this).addClass('required');
                $(this).parent().append('<span>* Gerekli alanı doldurunuz!!!</span>');
                required++;
            }
        });

        if (required > 0) {
            return false;
        }

        return true;

    });

});