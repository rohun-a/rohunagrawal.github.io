var html = document.documentElement;
var body = document.getElementsByTagName("body")[0];
var canvas = document.getElementById("background");
var context  = canvas.getContext("2d");

var currentThirdFrame = (index) => {
  if(window.innerWidth < 1000) index = 99;
  return `./thirdset/ezgif-frame-${(index).toString().padStart(3, '0')}.jpg`
}
    
 

  var frameThirdCount = 200;
  var preloadThirdImages = () => {
    for (let i = 1; i < frameThirdCount; i++) {
      var img = new Image();
      img.src = currentThirdFrame(i);
    }
  };
  


// var img = new Image()
// canvas.width=1920;
// canvas.height=1080; 
// img.onload=function(){
//   canvas.width  = canvas.clientWidth;
//   canvas.height = canvas.clientHeight;


//   const iw     = img.width;
//   const ih     = img.height;
//   const cw     = canvas.width;
//   const ch     = canvas.height;
//   const f      = Math.max(cw/iw, ch/ih);

//   context.setTransform(
//     /*     scale x */ f,
//     /*      skew x */ 0,
//     /*      skew y */ 0,
//     /*     scale y */ f,
//     /* translate x */ (cw - f * iw) / 2,
//     /* translate y */ (ch - f * ih) / 2,
//   );

//   context.drawImage(img, 0, 0);
// }

var updateThirdImage = index => {
       if (index < 25) canvas.style.opacity = ((index)/(25));
       if (index > 180) canvas.style.opacity = 1-((index-180)/(200-180));
  img.src = currentThirdFrame(index);
  context.drawImage(img, 0, 0);
}

var prevScrollFraction;

// window.addEventListener('scroll', () => {  
//   if($(this).scrollTop() > $('#hero').height()) {
//     moveAnimation();
//   }

// });

function thirdSet(offsetStart, offsetEnd, scrollHeight) {
    document.getElementById("background").style.transform = "translateX(-15%) scale(0.75)";
    console.log(offsetStart, scrollHeight);

  var container = document.getElementById("container");
  var scrollContainer = document.getElementById("scrollContainer");

  const scrollTop = html.scrollTop - $('#hero').height() - offsetStart;
  const maxScrollTop = scrollHeight - window.innerHeight ;
  const scrollFraction = scrollTop / (offsetEnd-offsetStart);

  console.log(scrollFraction);
  console.log(scrollTop, maxScrollTop)
  
  var frameThirdIndex = Math.min(
    frameThirdCount - 1,
    Math.ceil(scrollFraction * frameThirdCount)
  );

  var offsetHeight = offsetEnd-offsetStart;
  var start = 0.3
  var end = 0.8
  if(scrollTop > offsetHeight*start && scrollTop < offsetHeight*end &&  $("#text6").css("opacity") != 1)
  {
      console.log("hi");

    doMarginAnimation("#text6",  1, "-=40px", () => {
      $("#text6").removeClass("animation-playing")
    })
  }
  else if (scrollTop > offsetHeight*end   && $("#text6").css("opacity") != 0){
    doMarginAnimation("#text6",  0, "-=40px",  () => {
      $("#text6").animate({marginTop: "+=80px"}, () => {
        $("#text6").removeClass("animation-playing")
      })
    })
  }
  else if(scrollTop < offsetHeight*start &&  $("#text6").css("opacity") != 0)
  {
    doMarginAnimation("#text6",  0, "-=40px",  () => {
      $("#text6").animate({marginTop: "+=80px"}, () => {
        $("#text6").removeClass("animation-playing")
      })
    })
  }


  //     }
  //     else
  //       {
  //         if(!$("#text6").hasClass("animation-playing"))
  //         {
  //           $("#text6").animate({opacity: "1"}, 500, () => {
  //             $("#text6").removeClass("animation-playing")
  //           })
  //           $("#text6").addClass("animation-playing")
  //         }
  //       }
  //     break; 
  // }
  
  prevScrollFraction = scrollFraction;
  requestAnimationFrame(() => {
    updateThirdImage(frameThirdIndex + 1)
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
preloadThirdImages()
