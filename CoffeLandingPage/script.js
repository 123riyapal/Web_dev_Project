document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY; // Change 50 to the desired scroll position to trigger the color change
    if (scrolled > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const coffeeImage = document.getElementById("coffeeImage");
  
  document.getElementById("cappuccino").addEventListener("click", function() {
    coffeeImage.src = "COFFEE.webp"; // Change to the appropriate image URL
  });

  document.getElementById("latte").addEventListener("click", function() {
    coffeeImage.src = "images/latte.webp"; // Change to the appropriate image URL
  });

  document.getElementById("arabica").addEventListener("click", function() {
    coffeeImage.src = "images/Arabica.webp"; // Change to the appropriate image URL
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const desertImage = document.getElementById("desertImage");
  
  document.getElementById("lecreme").addEventListener("click", function() {
    desertImage.src = "images/lecreme.webp"; // Change to the appropriate image URL
  });

  document.getElementById("creme").addEventListener("click", function() {
    desertImage.src = "images/creme.webp"; // Change to the appropriate image URL
  });

  document.getElementById("tiramisu").addEventListener("click", function() {
    desertImage.src = "images/tiramisu.webp"; // Change to the appropriate image URL
  });
});
// gsap.to("#box",{
//     x:1200,
//     rotate:360,
//     duration:4,
//     dealy:4,
//     backgroundColor:"blueviolet",
//     boxShadow: '10px 10px 7px purple',
//     scale:0.5
// })
document.querySelector('.menu-button').addEventListener('click', function() {
  this.classList.toggle('clicked');
  this.style.color="white";
});
document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  // Animation for the main page
  gsap.from(".main-page", {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".main-page",
      start: "top 80%",  // when the top of the element is 80% from the top of the viewport
      toggleActions: "play none none none "
    }
  });

  // Animation for the line
  gsap.from(".line", {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".line",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  // Animation for the experiences section
  gsap.from(".experiences", {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".experiences",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  // Animation for the coffee types section
  gsap.from(".coffee-types .types div", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".coffee-types",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  // Animation for the our coffee section
  gsap.from(".our-coffee .left-Side", {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".our-coffee",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
  gsap.from(".our-coffee .right-Side img", {
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".our-coffee",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  // Animation for the our desserts section
  gsap.from(".our-desert .left-Side", {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".our-desert",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
  gsap.from(".our-desert .right-Side img", {
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".our-desert",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  // Animation for the app section
  gsap.from(".app h1", {
    y: -50,
    opacity: 0,
    duration: 1,
    stagger:0.2,
    scrollTrigger: {
      trigger: ".app",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
  gsap.from(".app p", {
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".app",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
  gsap.from(".app .App-button button", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".app",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
  gsap.from(".app .phone-wrapper img", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".app",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  // Animation for the gallery section
  gsap.from(".gallery h1", {
    y: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".gallery",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
  gsap.from(".gallery .img-wrap img", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".gallery",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
  gsap.from(".gallery .testimonal", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger:1,
    scrollTrigger: {
      trigger: ".gallery",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
  gsap.from("h1" , {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "h1",
      start: "top 80%",  // when the top of the element is 80% from the top of the viewport
      toggleActions: "play none none none"
    }
  });
  gsap.from(".footer-right", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".footer-right",
      start: "top 90%",
      toggleActions: "play none none none"
    }
  });

  // Animation for the gallery section
  gsap.from(".footer-left", {
    y: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".footer-left",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });


});

