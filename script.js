const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger); 

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".part1",
    start: "50% 50%",
    end: "120% 50%",
    scrub: true,
    // markers: true 
  }
});
tl.to(".rotate-div",{
  rotate:-15,
  scale:0.8
},'a')
tl.to("#row-div-1",{
  marginTop:"-2%"
},'a')
tl.to("#row-div-2",{
  marginTop:"0%"
},'a')
tl.to("#row-div-3",{
  marginTop:"-2%"
},'a')
tl.to("#row-div-4",{
  marginTop:"-8%"

},'a')
tl.to("#row-div-5",{
  marginTop:"-10%"

},'a')
tl.to(".overlay h1",{
  opacity:1

},'a')
tl.to(".overlay",{
  backgroundColor:
  "#00000092"
},'a')
tl.to(".scrolling ",{
  width:
  "100%"
},'a')


// part-2


var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part2",
    start: "0% 70%",
    end: "50% 50%",
    scrub: true,
    // markers: true 
  }
});
tl2.to(".rounded-div-wrapper",{
  height:0,
  marginTop:0

})


var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".content-2",
    start: "20% 50%",
    end: "100% 50%",
    scrub: 1,
    markers: true 
  }
});
tl3.to(".text-area-hover h1",{
  width:"100%"

})
tl3.to(".text-area-hover h2",{
  width:"100%"

})