const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  gsap.to(card, {
    opacity: 0,
    duration: 1,
    scale: 0.7,
    scrollTrigger: {
      trigger: card,
      markers: true,
      scrub: true,
      end: "bottom 15%",
      start: "top 15%",  // Adjust for last card
    }
  });
});
