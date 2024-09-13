var initialPath=`M 10 100 Q 600 100 1190 100`;
var finalPath=`M 10 100 Q 600 100 1190 100`;

var string = document.querySelector("#string");
string.addEventListener("mousemove",function(dets){
 initialPath=`M 10 100 Q ${dets.x} ${dets.y} 1190 100`
    gsap.to("svg path",{
        attr:{
            d:initialPath,
        },
        duration:0.3,
        ease:"powers3.out"
    })
});
string.addEventListener("mouseleave",function(dets){
       gsap.to("svg path",{
           attr:{
               d:finalPath,
           },
           duration:1.8,
           ease:"elastic.out(1.0.2)"
       })
   });