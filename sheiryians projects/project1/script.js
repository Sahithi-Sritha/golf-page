var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x-10+"px"
    crsr.style.top = dets.y-10+"px"
    blur.style.left = dets.x-200+"px"
    blur.style.top = dets.y-200+"px"
})

gsap.to("#nav",{
    backgroundColor: "black",
    height: "100px",
    duration: 1,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        
        start: "top -10",
        end: "top -11",
        scrub: 1
        
    }
})

gsap.to("#main",{
    backgroundColor: "black",
    
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        
        start: "top -25%",
        end: "top -70%",
        scrub: 1
        
    }
})

gsap.to(".scroller-in", {
    x: "-100%",
    duration: 30,
    ease: "none",
    repeat: 100
  });
  
  VanillaTilt.init(document.querySelectorAll(".tilt-box"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
  });
  