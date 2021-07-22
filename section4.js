var html = document.documentElement;
var body = document.getElementsByTagName("body")[0];
var canvas = document.getElementById("background");
var context  = canvas.getContext("2d");

var currentFourthFrame = (index) => {

 //if(index == 182)  $('#container').css({'position': 'static', 'top': 0});     
  if(window.innerWidth < 1000) index = 91;
  return `./fourthset/Lyve Rackmont Back_Frames 7 _ 8_${(index).toString().padStart(5, '0')}.jpg`
}
    
 

  var frameFourthCount = 270;
  var preloadFourthImages = () => {
    for (let i = 1; i < frameFourthCount; i++) {
      var img = new Image();
      img.src = currentFourthFrame(i);
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

var updateFourthImage = index => {
       if (index < 25) canvas.style.opacity = ((index)/(25));
       console.log(1-((index-250)/(270-250)))

       if (index > 250) canvas.style.opacity = 1-((index-250)/(270-250));
  img.src = currentFourthFrame(index);
  context.drawImage(img, 0, 0);
}

var prevScrollFraction;

// window.addEventListener('scroll', () => {  
//   if($(this).scrollTop() > $('#hero').height()) {
//     moveAnimation();
//   }

// });

function fourthSet(offsetStart, offsetEnd, scrollHeight) {
    document.getElementById("background").style.transform = "none";

    console.log(offsetStart, scrollHeight);

  var container = document.getElementById("container");
  var scrollContainer = document.getElementById("scrollContainer");

  const scrollTop = html.scrollTop - $('#hero').height() - offsetStart;
  const maxScrollTop = scrollHeight - window.innerHeight ;
  const scrollFraction = scrollTop / (offsetEnd-offsetStart);

  console.log(scrollFraction);
  console.log(scrollTop, maxScrollTop)
  
  var frameFourthIndex = Math.min(
    frameFourthCount - 1,
    Math.ceil(scrollFraction * frameFourthCount)
  );

  var offsetHeight = offsetEnd-offsetStart;
  var start = 0.05
  var end = 0.3
  if(scrollTop > offsetHeight*start && scrollTop < offsetHeight*end &&  $("#label5").css("opacity") != 1)
  {

    doMarginAnimation("#label5",  1, "-=40px", () => {
      $("#label5").removeClass("animation-playing")
    })
  }
  else if (scrollTop > offsetHeight*end   && $("#label5").css("opacity") != 0){
    doMarginAnimation("#label5",  0, "-=40px",  () => {
      $("#label5").animate({marginTop: "+=80px"}, () => {
        $("#label5").removeClass("animation-playing")
      })
    })
  }
  else if(scrollTop < offsetHeight*start &&  $("#label5").css("opacity") != 0)
  {
    doMarginAnimation("#label5",  0, "-=40px",  () => {
      $("#label5").animate({marginTop: "+=80px"}, () => {
        $("#label5").removeClass("animation-playing")
      })
    })
  }
   

  var offsetHeight = offsetEnd-offsetStart;
  var start = 0.6
  var end = 0.9
  if(scrollTop > offsetHeight*start && scrollTop < offsetHeight*end &&  $("#text7").css("opacity") != 1)
  {

    doMarginAnimation("#text7",  1, "-=40px", () => {
      $("#text7").removeClass("animation-playing")
    })
  }
  else if (scrollTop > offsetHeight*end   && $("#text7").css("opacity") != 0){
    doMarginAnimation("#text7",  0, "-=40px",  () => {
      $("#text7").animate({marginTop: "+=80px"}, () => {
        $("#text7").removeClass("animation-playing")
      })
    })
  }
  else if(scrollTop < offsetHeight*start &&  $("#text7").css("opacity") != 0)
  {
    doMarginAnimation("#text7",  0, "-=40px",  () => {
      $("#text7").animate({marginTop: "+=80px"}, () => {
        $("#text7").removeClass("animation-playing")
      })
    })
  }


  var offsetHeight = offsetEnd-offsetStart;
  var start = 0.6
  var end = 0.9
  if(scrollTop > offsetHeight*start && scrollTop < offsetHeight*end &&  $("#text8").css("opacity") != 1)
  {

    doMarginAnimation("#text8",  1, "-=40px", () => {
      $("#text8").removeClass("animation-playing")
    })
  }
  else if (scrollTop > offsetHeight*end   && $("#text8").css("opacity") != 0){
    doMarginAnimation("#text8",  0, "-=40px",  () => {
      $("#text8").animate({marginTop: "+=80px"}, () => {
        $("#text8").removeClass("animation-playing")
      })
    })
  }
  else if(scrollTop < offsetHeight*start &&  $("#text8").css("opacity") != 0)
  {
    doMarginAnimation("#text8",  0, "-=40px",  () => {
      $("#text8").animate({marginTop: "+=80px"}, () => {
        $("#text8").removeClass("animation-playing")
      })
    })
  }
   
   
  

  
  console.log(html.scrollTop)
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
    updateFourthImage(frameFourthIndex + 1)
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
preloadFourthImages()
