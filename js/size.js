$(document).ready(function(){

    if ($('#size_1').is(':checked')){
      $('.weight-kg1').css("display","block");
      $('.weight-kg2').css("display","none");
      $('.weight-kg5').css("display","none");
      $('.weight-kg8').css("display","none");
    }

    $('#size_1').click(function(){
      $('.weight-kg1').css("display","block");
      $('.weight-kg2').css("display","none");
      $('.weight-kg5').css("display","none");
      $('.weight-kg8').css("display","none");
    })

    $('#size_2').click(function(){
      $('.weight-kg1').css("display","none");
      $('.weight-kg2').css("display","block");
      $('.weight-kg5').css("display","none");
      $('.weight-kg8').css("display","none");
    })

    $('#size_3').click(function(){
      $('.weight-kg1').css("display","none");
      $('.weight-kg2').css("display","none");
      $('.weight-kg5').css("display","block");
      $('.weight-kg8').css("display","none");
    })

    $('#size_4').click(function(){
      $('.weight-kg1').css("display","none");
      $('.weight-kg2').css("display","none");
      $('.weight-kg5').css("display","none");
      $('.weight-kg8').css("display","block");
    })
});

