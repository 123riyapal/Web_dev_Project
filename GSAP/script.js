// gsap.to("#box",{
//     x:1200,
//     rotate:360,
//     duration:4,
//     dealy:4,
//     backgroundColor:"blueviolet",
//     boxShadow: '10px 10px 7px purple',
//     scale:0.5
// })
gsap.from("#box",{
    x:1200,
    rotate:360,
    duration:2,
    dealy:1,
    repeat:-1,
    yoyo:true,
    backgroundColor:"blueviolet",
    boxShadow: '10px 10px 7px purple',
    scale:0.5,
    borderRadius:"50%",
})