var tl=gsap.timeline();
tl.to(".box",{
     x:1200,
     rotate:360,
     duration:2,
     borderRadius:100,
     backgroundColor:"cyan",
     repeat:1,
})
tl.to(".box1",{
    x:1200,
    rotate:360,
    duration:2,
    borderRadius:100,
    repeat:1,

    backgroundColor:"green",
})
tl.to(".box2",{
    x:1200,
    rotate:360,
    duration:2,
    borderRadius:100,
    repeat:1,

    backgroundColor:"brown",
})