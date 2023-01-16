$(function(){
    $(".nav li").mouseover(function(){
        $(".sub").stop().slideDown();
    });
    
    $(".nav li").mouseout(function(){
        $(".sub").stop().slideUp();
    });
});

//$(function(){
//$(".nav li").hover(function(){
//$(this).children(".sub").stop().slideToggle();
//});