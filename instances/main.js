



$(document).ready(function(){


    $('.collapsible').collapsible();
  
   
    $("#PRO1").hide();
    $("#PRO2").hide();
    $("#PRO3").hide();
    $("#PRO4").hide();
       $("#PRO6").hide();
   $("#PRO7").hide();


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
      if($(e.target).is("#p6")){
        $("#PRO6").show();
      }else{
          $("#PRO6").hide();
      }
  });


    $(document).on("click", function(e){
      if($(e.target).is("#p7")){
        $("#PRO7").show();
      }else{
          $("#PRO7").hide();
      }
  });

  });


 
  });

//BG COLOR CHANGES ON MOUSE POSITION

var $win = $(window),
  w = 0,
  h = 0,
  rgb = [],
  getWidth = function() {
    w = $win.width();
    h = $win.height();
  };


var average = function(a, b) {
  return [0.5 * (a[0] + b[0]), 0.5 * (a[1] + b[1]), 0.5 * (a[1] + b[1])];
}

var center = [255, 230, 230]; // white
var topMiddle = [230, 230, 230]; // black
var leftMiddle = [255, 255, 255]; // red
var rightMiddle = [230, 255, 230]; // green;
var bottomMiddle = [230, 247, 255]; // blue;


var topLeft = average(leftMiddle, topMiddle);
var topRight = average(topMiddle, rightMiddle);
var bottomLeft = average(leftMiddle, bottomMiddle);
var bottomRight = average(bottomMiddle, rightMiddle);


var interpolate2D = function(x00, x01, x10, x11, x, y) {
  return x00 * (1 - x) * (1 - y) + x10 * x * (1 - y) + x01 * (1 - x) * y + x11 * x * y;
}

var interpolateArray = function(x00, x01, x10, x11, x, y) {
  var result = [0, 0, 0];
  for (var i = 0; i < 3; ++i) {
    result[i] = Math.floor(interpolate2D(x00[i], x01[i], x10[i], x11[i], x, y));
  }
  return result;
}


$win.resize(getWidth).mousemove(function(e) {
  var positionX = e.pageX / w;
  var positionY = e.pageY / h;
  var x00, x01, x11, x10;

  if (positionX > 0.5 && positionY > 0.5) {
    x00 = center;
    x01 = bottomMiddle;
    x10 = rightMiddle;
    x11 = bottomRight;
    positionX = 2.0 * (positionX - 0.5); // scale position back to [0, 1]
    positionY = 2.0 * (positionY - 0.5);
  } else if (positionX > 0.5 && positionY <= 0.5) {
    x00 = topMiddle;
    x01 = center;
    x10 = topRight;
    x11 = rightMiddle;
    positionX = 2.0 * (positionX - 0.5);
    positionY = 2.0 * (positionY);
  } else if (positionX <= 0.5 && positionY <= 0.5) {
    x00 = topLeft;
    x01 = leftMiddle;
    x10 = topMiddle;
    x11 = center;
    positionX = 2.0 * (positionX);
    positionY = 2.0 * (positionY);
  } else if (positionX <= 0.5 && positionY > 0.5) {
    x00 = leftMiddle;
    x01 = bottomLeft;
    x10 = center;
    x11 = bottomMiddle;
    positionX = 2.0 * (positionX);
    positionY = 2.0 * (positionY - 0.5);
  } else {
    // can't happen
  }



  rgb = interpolateArray(x00, x01, x10, x11, positionX, positionY);


  $(document.body).css('background', 'rgb(' + rgb.join(',') + ')');
  //top: rgb(85, 209, 79)
  //right: rgb(104, 129, 197)
  //bottom: rgb(40,129,255)
  //left: rgb(255, 184, 0)
}).resize();