var html = document.documentElement;
var body = document.getElementsByTagName("body")[0];
var canvas = document.getElementById("background");
var context  = canvas.getContext("2d");


var currentFirstFrame = (index) => {
  if(window.innerWidth < 1000) index = 149;
  return `./firstset/1_${(index-1).toString().padStart(5, '0')}.jpg`
}
 

  var frameFirstCount = 280;
  var preloadFirstImages = () => {
    for (let i = 1; i < frameFirstCount; i++) {
      var img = new Image();
      img.src = currentFirstFrame(i);
    }
  };
  


var img = new Image()
img.src = currentFirstFrame(1);
canvas.width=1920;
canvas.height=1080; 
img.onload=function(){
  canvas.width  = canvas.clientWidth;
  canvas.height = canvas.clientHeight;


  const iw     = img.width;
  const ih     = img.height;
  const cw     = canvas.width;
  const ch     = canvas.height;
  const f      = Math.max(cw/iw, ch/ih);

  context.setTransform(
    /*     scale x */ f,
    /*      skew x */ 0,
    /*      skew y */ 0,
    /*     scale y */ f,
    /* translate x */ (cw - f * iw) / 2,
    /* translate y */ (ch - f * ih) / 2,
  );

  context.drawImage(img, 0, 0);
}

var updateFirstImage = index => {
  if (index > 260) canvas.style.opacity = 1-((index-260)/(280-260));
  img.src = currentFirstFrame(index);
  context.drawImage(img, 0, 0);
}




var prevScrollFraction;

// window.addEventListener('scroll', () => {  
//   if($(this).scrollTop() > $('#hero').height()) {
//     moveAnimation();
//   }

// });

function firstSet(offsetStart, offsetEnd, scrollHeight) {

  document.getElementById("background").style.transform = "translateX(-15%) scale(0.75)";


  var container = document.getElementById("container");
  var scrollContainer = document.getElementById("scrollContainer");

  const scrollTop = html.scrollTop - $('#hero').height();
  const maxScrollTop = scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / offsetEnd;




  console.log(scrollFraction);
  
  var frameFirstIndex = Math.min(
    frameFirstCount - 1,
    Math.ceil(scrollFraction * frameFirstCount)
  );

  var offsetHeight = offsetEnd-offsetStart;
  var start = 0.3
  var end = 0.8
  if(scrollTop > offsetHeight*start && scrollTop < offsetHeight*end &&  $("#text1").css("opacity") != 1)
  {

    doMarginAnimation("#text1",  1, "-=40px", () => {
      $("#text1").removeClass("animation-playing")
    })
  }
  else if (scrollTop > offsetHeight*end   && $("#text1").css("opacity") != 0){
    doMarginAnimation("#text1",  0, "-=40px",  () => {
      $("#text1").animate({marginTop: "+=80px"}, () => {
        $("#text1").removeClass("animation-playing")
      })
    })
  }
  else if(scrollTop < offsetHeight*start &&  $("#text1").css("opacity") != 0)
  {
    doMarginAnimation("#text1",  0, "-=40px",  () => {
      $("#text1").animate({marginTop: "+=80px"}, () => {
        $("#text1").removeClass("animation-playing")
      })
    })
  }

  

  
  // switch(html.scrollTop) {
  //   case 300: 
  //     if(prevScrollFraction > scrollFraction) {
        
         
  //     }
  //     else
  //       {
  //         if(!$("#text1").hasClass("animation-playing"))
  //         {
  //           $("#text1").animate({opacity: "1"}, 500, () => {
  //             $("#text1").removeClass("animation-playing")
  //           })
  //           $("#text1").addClass("animation-playing")
  //         }
  //       }
  //     break; 
  // }
  
  prevScrollFraction = scrollFraction;
  requestAnimationFrame(() => {
    updateFirstImage(frameFirstIndex + 1)
  })
}

$(window).scroll(function(e){ 
  var $el = $('#container'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > $('#hero').height() && !isPositionFixed){ 
    $el.css({'position': 'fixed', 'top': 0}); 
  }
  if ($(this).scrollTop() < $('#hero').height() && isPositionFixed){

    $el.css({'position': 'static', 'top': 0}); 
  } 
});

 function doMarginAnimation(id, opacity, marginTop, callback)
 {
  if(!$(id).hasClass("animation-playing"))
  {
    $(id).animate({opacity: opacity, marginTop: marginTop}, 400, callback)
    $(id).addClass("animation-playing")
  }
 }
preloadFirstImages()
