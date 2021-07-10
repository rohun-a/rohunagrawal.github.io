const html = document.documentElement;
const body = document.getElementsByTagName("body")[0];
const canvas = document.getElementById("background");
const context  = canvas.getContext("2d");

const currentFrame = (index) => {
  if(window.innerWidth < 1000) index = 149;
  return `./images/1_${(index-1).toString().padStart(5, '0')}.jpg`
}
    
 

  const frameCount = 300;
  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };
  


const img = new Image()
img.src = currentFrame(1);
canvas.width=1920;
canvas.height=1080; 
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

var prevScrollFraction;

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  
  
  var frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  var offsetHeight = body.offsetHeight - html.offsetHeight
  console.log(scrollTop, html.offsetHeight)
  if(scrollTop > offsetHeight*0.2 && scrollTop < offsetHeight*0.5 &&  $("#text1").css("opacity") != 1)
  {
    console.log("hi")
    doMarginAnimation("#text1",  1, "-=40px", () => {
      $("#text1").removeClass("animation-playing")
    })
  }
  else if (scrollTop > offsetHeight*0.5   && $("#text1").css("opacity") != 0){
    doMarginAnimation("#text1",  0, "-=40px",  () => {
      $("#text1").animate({marginTop: "+=80px"}, () => {
        $("#text1").removeClass("animation-playing")
      })
    })
  }
  else if(scrollTop < offsetHeight*0.2 &&  $("#text1").css("opacity") != 0)
  {
    doMarginAnimation("#text1",  0, "-=40px",  () => {
      $("#text1").animate({marginTop: "+=80px"}, () => {
        $("#text1").removeClass("animation-playing")
      })
    })
  }

  if(scrollTop > offsetHeight*0.6 && scrollTop < offsetHeight*0.9 && $("#text2").css("opacity") != 1)
  {
    console.log("hi")
    doMarginAnimation("#text2",  1, "-=40px", () => {
      $("#text2").removeClass("animation-playing")
    })
  }
  else if (scrollTop > offsetHeight*0.9  && $("#text2").css("opacity") != 0){
    doMarginAnimation("#text2",  0, "-=40px",  () => {
      $("#text2").animate({marginTop: "+=80px"}, () => {
        $("#text2").removeClass("animation-playing")
      })
    })
  }
  else if (scrollTop < offsetHeight*0.6  && $("#text2").css("opacity") != 0){
    doMarginAnimation("#text2",  0, "-=40px",  () => {
      $("#text2").animate({marginTop: "+=80px"}, () => {
        $("#text2").removeClass("animation-playing")
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
    updateImage(frameIndex + 1)
  })
});

 function doMarginAnimation(id, opacity, marginTop, callback)
 {
  if(!$(id).hasClass("animation-playing"))
  {
    $(id).animate({opacity: opacity, marginTop: marginTop}, 400, callback)
    $(id).addClass("animation-playing")
  }
 }
preloadImages()
