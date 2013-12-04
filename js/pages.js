/* Page Transitions Function */

$(function() {  


$(".nav-1-next").click(function() { 

$('.sun-nav').appendTo('#page1-navholder'); 
$(".cn-button").click();


if ($('ul.pages li.background.background').eq(0).hasClass("current")) {
   return false;
} 
else {
    $('ul.pages li.background').removeClass('move-from-top rotateRoomTopIn rotateFall rotateRoomTopOut scaleUp').css({"opacity":"0",
      "z-index":"0"}); 
        $('.current').is(function() {
            $(this).addClass("fold-bottom");
            $(this).removeClass("current");
            $(this).css("opacity", "1");
        });
    $('ul.pages li.background').eq(0).removeClass('fold-bottom').addClass('current move-from-top').css("opacity", "1"); 
}

});

$(".nav-2-next").click(function() { 

  $('.sun-nav').appendTo('#page2-navholder'); 
  $(".cn-button").click();

if ($("ul.pages li.background:eq(-3),ul.pages li.background:eq(-2),ul.pages li.background:eq(-1)").hasClass('current')) {
 


if ($('ul.pages li.background').eq(1).hasClass("current")) {
   return false;
} 
else {
    $('ul.pages li.background').removeClass('move-from-top rotateRoomTopIn rotateRoomTopOut scaleUp').css({"opacity":"0",
      "z-index":"0"}); 
        $('.current').is(function() {
            $(this).addClass("fold-bottom");
            $(this).removeClass("current");
            $(this).css("opacity", "1");
        });
    $('ul.pages li.background').eq(1).removeClass('fold-bottom').addClass('current move-from-top').css("opacity", "1"); 
}


} 

else {



if ($('ul.pages li.background').eq(1).hasClass("current")) {
   return false;
} 
else {
    $('ul.pages li.background').removeClass('move-from-top rotateRoomTopIn rotateRoomTopOut rotateFall scaleUp').css({"opacity":"0",
      "z-index":"0"});
        $('.current').is(function() {
            $(this).addClass("rotateRoomTopOut");
            $(this).removeClass("current");
            $(this).css("opacity", "1");
        });
    $('ul.pages li.background').eq(1).removeClass('move-from-top rotateRoomTopOut rotateFall').addClass('current rotateRoomTopIn').css("opacity", "1"); 
}


}

});

$(".nav-3-next").click(function() { 

  $('.sun-nav').appendTo('#page3'); 
$(".cn-button").click();

if ($("ul.pages li.background:eq(-2),ul.pages li.background:eq(-1)").hasClass('current')) {

if ($('ul.pages li.background').eq(2).hasClass("current")) {
   return false;
}
else {
    $('ul.pages li.background').removeClass('move-from-top rotateRoomTopIn rotateRoomTopOut rotateFall scaleUp').css({"opacity":"0",
      "z-index":"0"});
        $('.current').is(function() {
            $(this).addClass("fold-bottom");
            $(this).removeClass("current");
            $(this).css("opacity", "1");
        });
    $('ul.pages li.background').eq(2).removeClass('fold-bottom rotateFall').addClass('current move-from-top').css("opacity", "1"); 
}
}
else {

if ($('ul.pages li.background').eq(2).hasClass("current")) {
   return false;
} 
else {
    $('ul.pages li.background').removeClass('move-from-top rotateRoomTopIn rotateRoomTopOut rotateFall scaleUp').css({"opacity":"0",
      "z-index":"0"});
        $('.current').is(function() {
            $(this).addClass("rotateRoomTopOut");
            $(this).removeClass("current");
            $(this).css("opacity", "1");
        });
    $('ul.pages li.background').eq(2).removeClass('move-from-top rotateRoomTopOut rotateFall').addClass('current rotateRoomTopIn').css("opacity", "1"); 
}
    
}
});

$(".nav-4-next").click(function() { 

  $('.sun-nav').appendTo('#page4'); 
  $(".cn-button").click();


if ($("ul.pages li.background:eq(-1)").hasClass('current')) {

if ($('ul.pages li.background').eq(3).hasClass("current")) {
   return false;
} 
else {
    $('ul.pages li.background').removeClass('move-from-top rotateRoomTopIn rotateRoomTopOut rotateFall scaleUp').css({"opacity":"0",
      "z-index":"0"});
        $('.current').is(function() {
            $(this).addClass("fold-bottom");
            $(this).removeClass("current");
            $(this).css("opacity", "1");
        });
    $('ul.pages li.background').eq(3).removeClass('fold-bottom rotateFall').addClass('current move-from-top').css("opacity", "1"); 
}
}
else {

if ($('ul.pages li.background').eq(3).hasClass("current")) {
   return false;
} 
else {
    $('ul.pages li.background').removeClass('move-from-top rotateRoomTopIn rotateRoomTopOut scaleUp').css({"opacity":"0",
      "z-index":"0"}); 
        $('.current').is(function() {
            $(this).addClass("rotateRoomTopOut");
            $(this).removeClass("current");
            $(this).css("opacity", "1");
        }); 
    $('ul.pages li.background').eq(3).removeClass('move-from-top rotateRoomTopOut rotateFall').addClass('current rotateRoomTopIn').css("opacity", "1"); 
}
    
}
});


$(".nav-5-next").click(function() { 

$('.sun-nav').appendTo('#page5'); 
$(".cn-button").click();


if ($('ul.pages li.background').eq(4).hasClass("current")) {
   return false;
} 
else {
    $('ul.pages li.background').removeClass('move-from-top rotateRoomTopIn rotateRoomTopOut rotateFall scaleUp').css({"opacity":"0",
      "z-index":"0"});
        $('.current').is(function() {
            $(this).addClass("rotateFall");
            $(this).removeClass("current");
            $(this).css("opacity", "1");
            $(this).css("z-index", "4");

        }); 
    $('ul.pages li.background').eq(4).removeClass('move-from-top rotateRoomTopOut rotateFall').addClass('current scaleUp').css("opacity", "1"); 
}
    

});

    


});