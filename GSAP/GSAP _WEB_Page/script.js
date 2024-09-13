var tl = gsap.timeline();
var part2 = document.querySelector(".part2");
var menu = document.querySelector(".ri-menu-2-line");
var close = document.querySelector(".ri-close-line");

// Common animations (for both mobile and desktop)
gsap.from("h2", {
    y: -20,
    duration: 1,
    opacity: 0,
    delay: 1,
    stagger: 1,
});

gsap.from("h1", {
    y: 20,
    duration: 1,
    opacity: 0,
    stagger: 1,
    scale: 0.2,
});

tl.from("h4", {
    y: -20,
    duration: 1,
    opacity: 0,
    stagger: 1,
});

// Check screen width before executing menu animations
if (window.innerWidth > 600) {
    // If width is greater than 600px, apply different animation settings
    gsap.to("h1", {
        fontSize: "3em",
        duration: 1,
    });
    gsap.to("h2", {
        fontSize: "2em",
        duration: 1,
    });
}

menu.addEventListener("click", function() {
    if (window.innerWidth > 600) {
        // Animation for screens greater than 600px
        tl.to(part2, {
            right: 0,
            duration: 0.5,  // Faster duration for larger screens
        });
        tl.from("h4", {
            x: 200, // Different starting position for larger screens
            duration: 0.3,
            opacity: 0,
            stagger: 0.5,
        });
    } else {
        // Animation for screens less than or equal to 600px
        tl.to(part2, {
            right: 0,
            duration: 1,  // Slower duration for smaller screens
        });
        tl.from("h4", {
            x: 120,
            duration: 0.3,
            opacity: 0,
            stagger: 1,
        });
    }
});

close.addEventListener("click", function() {
    tl.reverse();
});
tl.play();
