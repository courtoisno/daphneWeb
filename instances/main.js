



$(document).ready(function(){

//   $('a[href^="#"]').click(function(){
//   var the_id = $(this).attr("href");

//   $('html, body').animate({
//     scrollTop:$(the_id).offset().top
//   }, 'slow');
//   return false;
// });


    $('.collapsible').collapsible();

  
  //Show-hide projects -------------------------------------------------


  $(document).ready(function(){
    $('.collapsible').collapsible();

          $('#p1').on('click', function(){
    $('#PRO1').css("display","block");
  })

     $('#p2').on('click', function(){
    $('#PRO2').css("display","block");
  });

      $('#p3').on('click', function(){
    $('#PRO3').css("display","block");
    });

    $('#p4').on('click', function(){
    $('#PRO4').css("display","block");
  });

       $('#p5').on('click', function(){
    $('#PRO5').css("display","block");
  });

        $('#p6').on('click', function(){
    $('#PRO6').css("display","block");
  });


      $('#p7').on('click', function(){
    $('#PRO7').css("display","block");
  });
  





           $('#closing1').on('click', function(){
               $('#PRO1').css("display","none");
            });
           $('#closing2').on('click', function(){
               $('#PRO2').css("display","none");
            });
           $('#closing3').on('click', function(){
               $('#PRO3').css("display","none");
            });
           $('#closing4').on('click', function(){
               $('#PRO4').css("display","none");
            });
            $('#closing5').on('click', function(){
               $('#PRO5').css("display","none");
            });
           $('#closing6').on('click', function(){
               $('#PRO6').css("display","none");
            });
           $('#closing7').on('click', function(){
               $('#PRO7').css("display","none");
            });

  });


 
  });


///ANCHOR LINKS TO PROJECTS------------------------------------------------------------
// function scrollToAnchor(aid){
//     var aTag = $("a[name='"+ aid +"']");
//     $('html,body').animate({scrollTop: aTag.offset().top},'slow');
// }



// $("#link1").click(function() {
//    scrollToAnchor('id1');
// });
// $("#link2").click(function() {
//    scrollToAnchor('id2');
// });
// $("#link3").click(function() {
//    scrollToAnchor('id3');
// });
// $("#link4").click(function() {
//    scrollToAnchor('id4');
// });
// $("#link5").click(function() {
//    scrollToAnchor('id5');
// });
// $("#link6").click(function() {
//    scrollToAnchor('id6');
// });
// $("#link7").click(function() {
//    scrollToAnchor('id7');
// });









//BG COLOR CHANGES ON MOUSE POSITION ----------------------------------------

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
var topMiddle = [230, 247, 230]; // black
var leftMiddle = [230, 247, 255]; // red
var rightMiddle = [230, 255, 230]; // green;
var bottomMiddle = [255, 255, 255]; // blue;


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