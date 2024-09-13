gsap.to("#page2 h1",{
    transform:"translateX(-170%)",
    scrollTrigger:{
        trigger:"#page2",
        markers:true,
        scroller:"body",
        scrub:true,
        pin:true,
        start:"top 0%",
        end:"top -100%"
    }
})