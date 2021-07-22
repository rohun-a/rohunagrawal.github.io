var html = document.documentElement;
var body = document.getElementsByTagName("body")[0];
var canvas = document.getElementById("background");
var context  = canvas.getContext("2d");


window.addEventListener('scroll', () => {  
    if($(this).scrollTop() > $('#hero').height()) {
      moveAnimation();
    }
});
  
function moveAnimation() {
    section(0, 0.25, firstSet)
    section(0.25, 0.5, secondSet)
    section(0.5, 0.75, thirdSet)
    section(0.75, 1.0, fourthSet)
  }

  function section(offsetStart, offsetEnd, func) {
    var scrollContainer = document.getElementById("scrollContainer");
    const scrollTop = html.scrollTop - $('#hero').height();
    const maxScrollTop = scrollContainer.scrollHeight - window.innerHeight;
    var offsetHeight = maxScrollTop;

    if(scrollTop > offsetHeight*offsetStart && scrollTop < offsetHeight*offsetEnd) {
        console.log(scrollTop)
        func(offsetHeight*offsetStart, (offsetHeight*offsetEnd), (offsetHeight*offsetEnd) - (offsetHeight*offsetStart));

    }
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

    if ($(this).scrollTop() > ($('#hero').height() + $('#scrollContainer').height() - window.innerHeight)  && isPositionFixed){
  
        $el.css({'position': 'static', 'top': 0}); 
      } 
  });
  