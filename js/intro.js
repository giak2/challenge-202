//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function(){

    $("#box").hide();

    $("#toggle-box").click(function(){
        $("#box").toggle();
    });

    $("#box").click(function(){
        $(this).addClass("animate-box");
        var box = $(this);
        setTimeout(function(){
            box.removeClass("animate-box");
        }, 2000);
    });

    $("h2").click(function(){
        $("#box").css("background-color", "white");
    });

    $("#reset-button").click(function(){
        $("#box").hide();
        $("#box").css("background-color", "gold");
    });

});