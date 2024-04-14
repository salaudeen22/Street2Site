const lenis = new Lenis();

lenis.on("scroll", (e) => {
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
  },
});
tl.to(
  ".rotate-div",
  {
    rotate: -15,
    scale: 0.8,
  },
  "a"
);
tl.to(
  "#row-div-1",
  {
    marginTop: "-2%",
  },
  "a"
);
tl.to(
  "#row-div-2",
  {
    marginTop: "0%",
  },
  "a"
);
tl.to(
  "#row-div-3",
  {
    marginTop: "-2%",
  },
  "a"
);
tl.to(
  "#row-div-4",
  {
    marginTop: "-8%",
  },
  "a"
);
tl.to(
  "#row-div-5",
  {
    marginTop: "-10%",
  },
  "a"
);
tl.to(
  ".overlay h1",
  {
    opacity: 1,
  },
  "a"
);
tl.to(
  ".overlay",
  {
    backgroundColor: "#00000092",
  },
  "a"
);
tl.to(
  ".scrolling ",
  {
    width: "100%",
  },
  "a"
);

// part-2

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part2",
    start: "0% 70%",
    end: "50% 50%",
    scrub: true,
    // markers: true
  },
});
tl2.to(".rounded-div-wrapper", {
  height: 0,
  marginTop: 0,
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".content-2",
    start: "20% 50%",
    end: "100% 50%",
    scrub: 1,
    // markers: true
  },
});
tl3.to(".content-2 .text-area-hover h1", {
  width: "100%",
});
tl3.to(".content-2 .text-area-hover h2", {
  width: "100%",
});

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-4",
    start: "50% 50%",
    end: "200% 50%",
    pin: true,
    scrub: 1,
    // markers: true
  },
});
tl4.to(
  ".rght-part-4",
  {
    marginTop: "-15%",
  },
  "sct-1"
);

tl4.to(
  ".c-one",
  {
    opacity: 1,
  },
  "sct-1"
);
tl4.to(
  ".c-two",
  {
    opacity: 1,
  },
  "sct-2"
);
tl4.to(
  ".c-one",
  {
    opacity: 0,
    marginTop: "-50%",
  },
  "sct-2"
);
tl4.to(
  ".c-three",
  {
    opacity: 1,
  },
  "sct-3"
);
tl4.to(
  ".c-one",
  {
    opacity: 0,
    marginTop: "-120%",
  },
  "sct-3"
);
tl4.to(
  ".c-two",
  {
    opacity: 0,
  },
  "sct-3"
);
tl4.to(
  ".cir-icon",
  {
    marginLeft: "100%",
    rotate: 360,
  },
  "sct-4"
);

var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-5",
    start: "20% 50%",
    end: "100% 50%",
    scrub: 1,
    // markers: true
  },
});
tl5.to(".part-5 .text-area-hover h1", {
  width: "100%",
});
tl5.to(".part-5 .text-area-hover h2", {
  width: "100%",
});
var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-6",
    start: "0% 70%",
    end: "20% 50%",
    scrub: 1,
    // markers: true
  },
});
tl6.to(".part-6 .rounded-div-wrapper-6", {
  height: "0%",
  marginTop: "0",
});

var tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-7",
    start: "50% 50%",
    end: "200% 50%",
    pin: true,
    scrub: 1,
    // markers: true,
  },
});
tl7.to("#demo", {
  bottom: "7%",
});
tl7.to(
  ".ourwork-txt",
  {
    height: "60vh",
  },
  "height"
);
tl7.to(
  ".ourwork-txt-div",
  {
    height: "60vh",
  },
  "height"
);
tl7.to(
  "#our",
  {
    left: "0%",
  },
  "height"
);
tl7.to(
  "#work",
  {
    right: "0%",
  },
  "height"
);
tl7.to(".scroll-img", {
  marginTop: "-300%",
});
tl7.to("#demo", {
  bottom: "7%",
});

