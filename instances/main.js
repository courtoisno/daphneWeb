



$(document).ready(function(){


    $('.collapsible').collapsible();
  
   
    $("#PRO1").hide();
    $("#PRO2").hide();
    $("#PRO3").hide();
    $("#PRO4").hide();
   $("#PRO5").hide();


  $(document).ready(function(){
    $('.collapsible').collapsible();


  $(document).on("click", function(e){
      if($(e.target).is("#p1")){
        $("#PRO1").show();
      }else{
          $("#PRO1").hide();
      }
  });

  $(document).on("click", function(e){
      if($(e.target).is("#p2")){
        $("#PRO2").show();
      }else{
          $("#PRO2").hide();
      }
  });

  $(document).on("click", function(e){
      if($(e.target).is("#p3")){
        $("#PRO3").show();
      }else{
          $("#PRO3").hide();
      }
  });

    $(document).on("click", function(e){
      if($(e.target).is("#p4")){
        $("#PRO4").show();
      }else{
          $("#PRO4").hide();
      }
  });


    $(document).on("click", function(e){
      if($(e.target).is("#p5")){
        $("#PRO5").show();
      }else{
          $("#PRO5").hide();
      }
  });

  });
 
  });