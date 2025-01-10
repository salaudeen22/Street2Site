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

// Media query breakpoints
const breakpoints = {
  mobile: "(max-width: 480px)",
  tablet: "(min-width: 481px) and (max-width: 1024px)",
  desktop: "(min-width: 1025px)"
};

// Responsive values
const getResponsiveValues = () => {
  if (window.matchMedia(breakpoints.mobile).matches) {
    return {
      rotate: -10,
      scale: 0.6,
      marginTop: {
        row1: "-1%",
        row2: "0%", 
        row3: "-1%",
        row4: "-4%",
        row5: "-5%"
      }
    };
  } else if (window.matchMedia(breakpoints.tablet).matches) {
    return {
      rotate: -12,
      scale: 0.7,
      marginTop: {
        row1: "-1.5%",
        row2: "0%",
        row3: "-1.5%",
        row4: "-6%", 
        row5: "-7%"
      }
    };
  } else {
    return {
      rotate: -15,
      scale: 0.8,
      marginTop: {
        row1: "-2%",
        row2: "0%",
        row3: "-2%",
        row4: "-8%",
        row5: "-10%"
      }
    };
  }
};

// Update animations on resize
let responsiveValues = getResponsiveValues();
window.addEventListener('resize', () => {
  responsiveValues = getResponsiveValues();
  // Refresh animations
  ScrollTrigger.refresh();
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".part1",
    start: "50% 50%",
    end: "120% 50%",
    scrub: true,
  },
});



tl.to(
  ".rotate-div",
  {
    rotate: () => responsiveValues.rotate,
    scale: () => responsiveValues.scale,
  },
  "a"
);

tl.to(
  "#row-div-1",
  {
    marginTop: () => responsiveValues.marginTop.row1,
  },
  "a"
);

tl.to(
  "#row-div-2",
  {
    marginTop: () => responsiveValues.marginTop.row2,
  },
  "a"
);

tl.to(
  "#row-div-3",
  {
    marginTop: () => responsiveValues.marginTop.row3,
  },
  "a"
);

tl.to(
  "#row-div-4",
  {
    marginTop: () => responsiveValues.marginTop.row4,
  },
  "a"
);

tl.to(
  "#row-div-5",
  {
    marginTop: () => responsiveValues.marginTop.row5,
  },
  "a"
);

tl.to(
  ".overlay h1, .overlay h2",
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
    start: window.matchMedia(breakpoints.mobile).matches ? "0% 80%" : "0% 70%",
    end: "50% 50%",
    scrub: true,
  },
});

tl2.to(".rounded-div-wrapper", {
  height: 0,
  marginTop: 0,
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".content-2",
    start: window.matchMedia(breakpoints.mobile).matches ? "10% 50%" : "20% 50%",
    end: "100% 50%",
    scrub: 1,
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
    start: "30% 50%",
    end: "200% 50%",
    pin: true,
    markers:true,
    scrub: 1,
  },
});

tl4.to(
  ".rght-part-4",
  {
    marginTop: window.matchMedia(breakpoints.mobile).matches ? "-10%" : "-15%",
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
    start: window.matchMedia(breakpoints.mobile).matches ? "10% 50%" : "20% 50%",
    end: "100% 50%",
    scrub: 1,
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
    start: window.matchMedia(breakpoints.mobile).matches ? "0% 80%" : "0% 70%",
    end: "20% 50%",
    scrub: 1,
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
  },
});

tl7.to("#demo", {
  bottom: window.matchMedia(breakpoints.mobile).matches ? "5%" : "7%",
});

tl7.to(
  ".ourwork-txt",
  {
    height: window.matchMedia(breakpoints.mobile).matches ? "40vh" : "60vh",
  },
  "height"
);

tl7.to(
  ".ourwork-txt-div",
  {
    height: window.matchMedia(breakpoints.mobile).matches ? "40vh" : "60vh",
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
  marginTop: window.matchMedia(breakpoints.mobile).matches ? "-200%" : "-300%",
});

tl7.to("#demo", {
  bottom: window.matchMedia(breakpoints.mobile).matches ? "5%" : "7%",
});
