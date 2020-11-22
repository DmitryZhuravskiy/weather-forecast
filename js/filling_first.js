$(document).ready(function(){


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
    }

    $('#fil_1').click(function(){
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
    })

    $('#fil_2').click(function(){
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
    })

    $('#fil_3').click(function(){
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
    })

    $('#fil_4').click(function(){
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
    })

    $('#fil_5').click(function(){
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
    })
});

