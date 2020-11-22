var toggle = 0;

$(document).ready(function(){

  $(".main-nav__toggle").click(function(){

    if (toggle == 0) {
      $(".navigation").css("display","block");
      toggle++;
    }

    else {
      $(".navigation").css("display","none");
      toggle--;
    }
  });
});

