$("body").css("overflow", "hidden");

$(document).ready(function(){
    $(".btn").mouseover(function() {
        $(this).find('img').toggle();
        $(this).find('span').toggle();
      }).mouseout(function() {
        $(this).find('img').toggle();
        $(this).find('span').toggle();

      })

      });
      