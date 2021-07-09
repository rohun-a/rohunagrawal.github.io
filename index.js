const html = document.documentElement;
const canvas = document.getElementById("background");
const context  = canvas.getContext("2d");

const currentFrame = index => (
    `https://www.apple.com/105/media/us/airpods-max/2020/996b980b-3131-44f1-af6c-fe72f9b3bfb5/anim/turn/large_2x/large_2x_${index.toString().padStart(4, '0')}.jpg`
  )

  const frameCount = 45;
  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };
  


const img = new Image()
img.src = currentFrame(1);
canvas.width=2008;
canvas.height=2428; 
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
  
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  if(scrollTop > html.offsetHeight*0.5 && $("#text1").css("opacity") != 1)
  {
    console.log("hi")
    if(!$("#text1").hasClass("animation-playing"))
        {
          $("#text1").animate({opacity: "1", marginTop: "-=20px"}, 400, () => {
            $("#text1").removeClass("animation-playing")
          })
          $("#text1").addClass("animation-playing")
        }
  }
  else if (scrollTop < html.offsetHeight*0.5   && $("#text1").css("opacity") != 0){
    if(!$("#text1").hasClass("animation-playing"))
        {
          $("#text1").animate({opacity: "0",  marginTop: "+=20px"}, 400, () => {
            $("#text1").removeClass("animation-playing")
          })
          $("#text1").addClass("animation-playing")
        }
  }

  if(scrollTop > html.offsetHeight*0.7 && $("#text2").css("opacity") != 1)
  {
    console.log("hi")
    if(!$("#text2").hasClass("animation-playing"))
        {
          $("#text2").animate({opacity: "1", marginTop: "-=20px"}, 400, () => {
            $("#text2").removeClass("animation-playing")
          })
          $("#text2").addClass("animation-playing")
        }
  }
  else if (scrollTop < html.offsetHeight*0.7  && $("#text2").css("opacity") != 0){
    if(!$("#text2").hasClass("animation-playing"))
        {
          $("#text2").animate({opacity: "0", marginTop: "+=20px"}, 400, () => {
            $("#text2").removeClass("animation-playing")
          })
          $("#text2").addClass("animation-playing")
        }
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
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()
