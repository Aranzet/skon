$(document).ready(function(){
    $('.menu-toggle').click(function(){
    $('.menu-toggle').toggleClass('active')
    $('nav').toggleClass('active')
    })
});
$(document).ready(function(){
$('.question-btn1').click(function(){ 
    $('.answer1').fadeToggle();
    });
});
$(document).ready(function(){
$('.question-btn2').click(function(){ 
    $('.answer2').fadeToggle();
    });
});
$(document).ready(function(){
$('.question-btn3').click(function(){ 
    $('.answer3').fadeToggle();
    });
});
$(document).ready(function(){
$('.question-btn4').click(function(){ 
    $('.answer4').fadeToggle();
    });
});
$(document).ready(function(){
$('.question-btn5').click(function(){ 
    $('.answer5').fadeToggle();
    });
});
$(document).ready(function(){
$('.question-btn6').click(function(){ 
    $('.answer6').fadeToggle();
    });
});
$(function() {
    $('.qbtn1').click(function() {
        if($('.qbtn1').hasClass("active-question")) {
            $('.qbtn1').toggleClass("active-question")
        } else {
            $('.qbtn1').toggleClass("active-question");
            $('.qbtn1').addClass("active-question");
        }
    });
});
$(function() {
    $('.qbtn2').click(function() {
        if($('.qbtn2').hasClass("active-question")) {
            $('.qbtn2').toggleClass("active-question")
        } else {
            $('.qbtn2').toggleClass("active-question");
            $('.qbtn2').addClass("active-question");
        }
    });
});
$(function() {
    $('.qbtn3').click(function() {
        if($('.qbtn3').hasClass("active-question")) {
            $('.qbtn3').toggleClass("active-question")
        } else {
            $('.qbtn3').toggleClass("active-question");
            $('.qbtn3').addClass("active-question");
        }
    });
});
$(function() {
    $('.qbtn4').click(function() {
        if($('.qbtn4').hasClass("active-question")) {
            $('.qbtn4').toggleClass("active-question")
        } else {
            $('.qbtn4').toggleClass("active-question");
            $('.qbtn4').addClass("active-question");
        }
    });
});
$(function() {
    $('.qbtn5').click(function() {
        if($('.qbtn5').hasClass("active-question")) {
            $('.qbtn5').toggleClass("active-question")
        } else {
            $('.qbtn5').toggleClass("active-question");
            $('.qbtn5').addClass("active-question");
        }
    });
});
$(function() {
    $('.qbtn6').click(function() {
        if($('.qbtn6').hasClass("active-question")) {
            $('.qbtn6').toggleClass("active-question")
        } else {
            $('.qbtn6').toggleClass("active-question");
            $('.qbtn6').addClass("active-question");
        }
    });
});