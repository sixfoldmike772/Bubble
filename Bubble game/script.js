/*function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

};

loco();
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css">
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>
*/
//Math.floor(1.234) makes it 1
//Math.random() generates any no. between 1 and 0


var timer = 60;
var score = 0;
var hitrn = 0;


function inscore(){
score+=10;
document.querySelector("#scoreval").textContent = score;
}

function hit(){
  hitrn =   Math.floor(Math.random()*10)
  document.querySelector("#hitval").textContent = hitrn;
}

function bubble(){
var clutter = "";

for(var i = 0; i<=151; i++)
{
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector(".pbtm").innerHTML = clutter;
}

function rntimer(){
    var timerint = setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
    }
   else{
         clearInterval(timerint);
         document.querySelector("#timerval").textContent = "Time's Up!";
         document.querySelector(".pbtm").innerHTML = "<h1>Game Over</h1>";
   }
    
 },1000);

}

document.querySelector(".pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        inscore();
        bubble();
        hit();
    }
    
 })

hit();
rntimer();
bubble();