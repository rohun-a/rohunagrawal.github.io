var html = document.documentElement;
var body = document.getElementsByTagName("body")[0];
var canvas = document.getElementById("background");
var context  = canvas.getContext("2d");

var currentSecondFrame = (index) => {
  if(window.innerWidth < 1000) index = 99;
  return `./secondset/ezgif-frame-${(index).toString().padStart(3, '0')}.jpg`
}
    
 

  var frameSecondCount = 200;
  var preloadSecondImages = () => {
    for (let i = 1; i < frameSecondCount; i++) {
      var img = new Image();
      img.src = currentSecondFrame(i);
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

var updateSecondImage = index => {
       if (index < 25) canvas.style.opacity = ((index)/(25));
       console.log(index);
       if (index > 180) canvas.style.opacity = 1-((index-180)/(200-180));
  img.src = currentSecondFrame(index);
  context.drawImage(img, 0, 0);
}

var prevScrollFraction;

// window.addEventListener('scroll', () => {  
//   if($(this).scrollTop() > $('#hero').height()) {
//     moveAnimation();
//   }

// });

function secondSet(offsetStart, offsetEnd, scrollHeight) {
    document.getElementById("background").style.transform = "none";

    console.log(offsetStart, scrollHeight);

  var container = document.getElementById("container");
  var scrollContainer = document.getElementById("scrollContainer");

  const scrollTop = html.scrollTop - $('#hero').height() - offsetStart;
  const maxScrollTop = scrollHeight - window.innerHeight ;
  const scrollFraction = scrollTop / (offsetEnd-offsetStart);

  console.log(scrollFraction);
  console.log(scrollTop, maxScrollTop)
  
  var frameSecondIndex = Math.min(
    frameSecondCount - 1,
    Math.ceil(scrollFraction * frameSecondCount)
  );

  var offsetHeight = offsetEnd-offsetStart;
  var start = 0.05
  var end = 0.3
  if(scrollTop > offsetHeight*start && scrollTop < offsetHeight*end &&  $("#label1").css("opacity") != 1)
  {

    doMarginAnimation("#label1",  1, "-=40px", () => {
      $("#label1").removeClass("animation-playing")
    })
  }
  else if (scrollTop > offsetHeight*end   && $("#label1").css("opacity") != 0){
    doMarginAnimation("#label1",  0, "-=40px",  () => {
      $("#label1").animate({marginTop: "+=80px"}, () => {
        $("#label1").removeClass("animation-playing")
      })
    })
  }
  else if(scrollTop < offsetHeight*start &&  $("#label1").css("opacity") != 0)
  {
    doMarginAnimation("#label1",  0, "-=40px",  () => {
      $("#label1").animate({marginTop: "+=80px"}, () => {
        $("#label1").removeClass("animation-playing")
      })
    })
  }

  start = 0.05
  end = 0.3
  if(scrollTop > offsetHeight*start && scrollTop < offsetHeight*end &&  $("#label2").css("opacity") != 1)
  {

    doMarginAnimation("#label2",  1, "-=40px", () => {
      $("#label2").removeClass("animation-playing")
    })
  }
  else if (scrollTop > offsetHeight*end   && $("#label2").css("opacity") != 0){
    doMarginAnimation("#label2",  0, "-=40px",  () => {
      $("#label2").animate({marginTop: "+=80px"}, () => {
        $("#label2").removeClass("animation-playing")
      })
    })
  }
  else if(scrollTop < offsetHeight*start &&  $("#label2").css("opacity") != 0)
  {
    doMarginAnimation("#label2",  0, "-=40px",  () => {
      $("#label2").animate({marginTop: "+=80px"}, () => {
        $("#label2").removeClass("animation-playing")
      })
    })
  }

  start = 0.7
  end = 0.9
  if(scrollTop > offsetHeight*start && scrollTop < offsetHeight*end &&  $("#label3").css("opacity") != 1)
  {

    doMarginAnimation("#label3",  1, "-=40px", () => {
      $("#label3").removeClass("animation-playing")
    })
  }
  else if (scrollTop > offsetHeight*end   && $("#label3").css("opacity") != 0){
    doMarginAnimation("#label3",  0, "-=40px",  () => {
      $("#label3").animate({marginTop: "+=80px"}, () => {
        $("#label3").removeClass("animation-playing")
      })
    })
  }
  else if(scrollTop < offsetHeight*start &&  $("#label3").css("opacity") != 0)
  {
    doMarginAnimation("#label3",  0, "-=40px",  () => {
      $("#label3").animate({marginTop: "+=80px"}, () => {
        $("#label3").removeClass("animation-playing")
      })
    })
  }

  start = 0.7
  end = 0.9
  if(scrollTop > offsetHeight*start && scrollTop < offsetHeight*end &&  $("#label4").css("opacity") != 1)
  {

    doMarginAnimation("#label4",  1, "-=40px", () => {
      $("#label4").removeClass("animation-playing")
    })
  }
  else if (scrollTop > offsetHeight*end   && $("#label4").css("opacity") != 0){
    doMarginAnimation("#label4",  0, "-=40px",  () => {
      $("#label4").animate({marginTop: "+=80px"}, () => {
        $("#label4").removeClass("animation-playing")
      })
    })
  }
  else if(scrollTop < offsetHeight*start &&  $("#label4").css("opacity") != 0)
  {
    doMarginAnimation("#label4",  0, "-=40px",  () => {
      $("#label4").animate({marginTop: "+=80px"}, () => {
        $("#label4").removeClass("animation-playing")
      })
    })
  }




  
  // switch(html.scrollTop) {
  //   case 300: 
  //     if(prevScrollFraction > scrollFraction) {
        
         
  //     }
  //     else
  //       {
  //         if(!$("#label1").hasClass("animation-playing"))
  //         {
  //           $("#label1").animate({opacity: "1"}, 500, () => {
  //             $("#label1").removeClass("animation-playing")
  //           })
  //           $("#label1").addClass("animation-playing")
  //         }
  //       }
  //     break; 
  // }
  
  prevScrollFraction = scrollFraction;
  requestAnimationFrame(() => {
    updateSecondImage(frameSecondIndex + 1)
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
preloadSecondImages()
