$(function(){
    $("#list ul li:nth-child(1) .bg").click(function(){
        $(".pop1").fadeIn(); //show
    });
    $("#list ul li:nth-child(2) .bg").click(function(){
        $(".pop2").fadeIn(); //show
    });
    $("#list ul li:nth-child(3) .bg").click(function(){
        $(".pop3").fadeIn(); //show
    });








    $(".popup a").click(function(){
        $(".popup").fadeOut(); //hide
    });
});