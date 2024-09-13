// Animate the navigation bar
var tl=gsap.timeline();
tl.from(".navBar .logo h1 , .navBar .menu li", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "back.out",
    stagger:0.2
  });
  
  // Animate the hero section
  tl.from(".hero-page .left h1", {
    duration: 1.5,
    x: -100,
    opacity: 0,
    ease: "power4.out",
  });
  tl.from(".hero-page .right img", {
    duration: 1.5,
    x: 100,
    opacity: 0,
    ease: "power4.out",
  });

  
  tl.from(".hero-page .left p", {
    duration: 1.5,
    x: -100,
    opacity: 0,
    ease: "power4.out",
  });
  
  tl.from(".hero-page .left button", {
    duration: 1,
    scale: 0,
    opacity: 0,
    ease: "back.out(1.7)",
  });
  
  
  // Animate the company logos
  tl.from(".centrebottom img", {
    duration: 1,
    scale: 0,
    opacity: 0,
    ease: "back.out(1.7)",
    stagger: 0.2,
  });
  
  // Animate service cards (staggered entrance)
// Make sure to register the ScrollTrigger plugin if not already done
gsap.registerPlugin(ScrollTrigger);
tl.from(".service h3",{
opacity:0,
x:-100,
duration:1,
})

tl.from(".service_pannel .serviceInfoButton .container", {
  duration: 1.5,
  x: -200,
  opacity: 0,
  ease: "power4.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".container",    scroller: "body",  // Assuming default scroller is the body
    markers: true,     // Displays start/end markers (for debugging)
    scrub: 3,          // Smoothens the scroll-based animation
    start: "top 115%",  // Triggers when the top of the trigger element reaches 85% of the viewport
  }
});
  
  // Button hover animations (scaling effect)
  document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        duration: 0.3,
        scale: 1.1,
      });
    });
  
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        duration: 0.3,
        scale: 1,
      });
    });
  });
  