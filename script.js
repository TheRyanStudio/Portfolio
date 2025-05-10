
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  animation: gsap.from("#title-name", {
    y: "50vh",
    scale: 4,
    yPercent: -50,
  }),
  scrub: true,
  trigger: ".scroll-trigger",
  start: "top bottom",
  endTrigger: ".scroll-trigger",
  end: "top center",
});

    
ScrollTrigger.create({
  animation: gsap.from(".background-text", {
    x: "-50vw",
  }),
  scrub: 1,
  trigger: "#about",
  start: "top 50%",
  end: "top 20%",
  toggleActions: "restart pause reverse pause"
});

const projects = gsap.utils.toArray("#portfolio-horizontal .project");

gsap.to(projects, {
  xPercent: -100 * (projects.length - 1),
  scrollTrigger: {
    trigger: "#portfolio-horizontal",
    pin: true,
    scrub: 1,
  },
});



const tl = gsap.timeline();
tl.from(".project-col-img1", {xPercent: 225,})
.from(".project-col-img2", {xPercent: 100,})

ScrollTrigger.create({
  animation: tl,
  trigger: ".project-col-img1",
  start: "top 100%",
  end: "top 50%",
    scrub: 2,
})
