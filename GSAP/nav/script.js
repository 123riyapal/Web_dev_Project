var tl=gsap.timeline()
tl.from("h2",{
    y:-20,
    duration:1,
    opacity:0,
    delay:1,
    stagger:1,
})
tl.from("h4",{
    y:-20,
    duration:1,
    opacity:0,
    stagger:1,
})
tl.from("h1",{
    y:20,
    duration:1,
    opacity:0,
    stagger:1,
    scale:0.2,
})

