$(document).ready(function(){

  var index = 1;

    if ($('#fil_1').is(':checked')){
      $('.filling__descriptions--ganash').css("display","block");
      $('.filling__descriptions--raphaelloh').css("display","none");
      $('.filling__descriptions--zaher').css("display","none");
      $('.filling__descriptions--yogurt').css("display","none");
      $('.filling__descriptions--snikers').css("display","none");
      $('.filling__ganash').css("display","flex");
      $('.filling__raphaelloh').css("display","none");
      $('.filling__zaher').css("display","none");
      $('.filling__yogurt').css("display","none");
      $('.filling__snikers').css("display","none");
      index = 1;
    }

    $('#fil_1').click(function(){
      index = 1;
    })

    $('#fil_2').click(function(){
      index = 2;
    })

    $('#fil_3').click(function(){
      index = 3;
    })

    $('#fil_4').click(function(){
      index = 4;
    })

    $('#fil_5').click(function(){
      index = 5;
    })

    if (index > 5) {
      index=1;
    }

    if (index = 0) {
      index=5;
    }

    $('#next_fil').click(function(){
      index ++;
    })

    $('#last_fil').click(function(){
      index --;
    })

    if (index == 1) {
      $('.filling__descriptions--ganash').css("display","block");
      $('.filling__descriptions--raphaelloh').css("display","none");
      $('.filling__descriptions--zaher').css("display","none");
      $('.filling__descriptions--yogurt').css("display","none");
      $('.filling__descriptions--snikers').css("display","none");
      $('.filling__ganash').css("display","flex");
      $('.filling__raphaelloh').css("display","none");
      $('.filling__zaher').css("display","none");
      $('.filling__yogurt').css("display","none");
      $('.filling__snikers').css("display","none");
    }

     if (index == 2) {
      $('.filling__descriptions--ganash').css("display","none");
      $('.filling__descriptions--raphaelloh').css("display","block");
      $('.filling__descriptions--zaher').css("display","none");
      $('.filling__descriptions--yogurt').css("display","none");
      $('.filling__descriptions--snikers').css("display","none");
      $('.filling__ganash').css("display","none");
      $('.filling__raphaelloh').css("display","flex");
      $('.filling__zaher').css("display","none");
      $('.filling__yogurt').css("display","none");
      $('.filling__snikers').css("display","none");
    }

    if (index == 3) {
      $('.filling__descriptions--ganash').css("display","none");
      $('.filling__descriptions--raphaelloh').css("display","none");
      $('.filling__descriptions--zaher').css("display","block");
      $('.filling__descriptions--yogurt').css("display","none");
      $('.filling__descriptions--snikers').css("display","none");
      $('.filling__ganash').css("display","none");
      $('.filling__raphaelloh').css("display","none");
      $('.filling__zaher').css("display","flex");
      $('.filling__yogurt').css("display","none");
      $('.filling__snikers').css("display","none");
    }

    if (index == 4) {
      $('.filling__descriptions--ganash').css("display","none");
      $('.filling__descriptions--raphaelloh').css("display","none");
      $('.filling__descriptions--zaher').css("display","none");
      $('.filling__descriptions--yogurt').css("display","block");
      $('.filling__descriptions--snikers').css("display","none");
      $('.filling__ganash').css("display","none");
      $('.filling__raphaelloh').css("display","none");
      $('.filling__zaher').css("display","none");
      $('.filling__yogurt').css("display","flex");
      $('.filling__snikers').css("display","none");
    }

    if (index == 5) {
      $('.filling__descriptions--ganash').css("display","none");
      $('.filling__descriptions--raphaelloh').css("display","none");
      $('.filling__descriptions--zaher').css("display","none");
      $('.filling__descriptions--yogurt').css("display","none");
      $('.filling__descriptions--snikers').css("display","block");
      $('.filling__ganash').css("display","none");
      $('.filling__raphaelloh').css("display","none");
      $('.filling__zaher').css("display","none");
      $('.filling__yogurt').css("display","none");
      $('.filling__snikers').css("display","flex");
    }
});

