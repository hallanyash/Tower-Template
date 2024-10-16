var homepageimages = document.querySelector(".hp-1")


gsap.from(".home-section",{
    opacity:0,
    y:100,
    delay:1
})
gsap.from(".home-section-images", {
  opacity: 0,
  y: 100,
  delay: 1,
});

gsap.from(".home-pages h1",{
    opacity:0,
    y:1,
    delay:2,
    scrollTrigger:".home-pages"
})
gsap.from(".home-pages p", {
  opacity: 0,
  y: 1,
  delay: 2,
  scrollTrigger: ".home-pages",
});
gsap.from(".home-page-images", {
  opacity: 0,
  x:1000,
  stagger:0.3,
  delay: 2,
  scrollTrigger: ".home-pages",
});
gsap.from(".home-section h1",{
    opacity:0,
    x:2000
})
gsap.from(".customer-leftside",{
    opacity:0,
    x:-100,
    delay:1,
    scrollTrigger:".customer-leftside"
});
gsap.from(".customer-rigthside",{
    opacity:0,
    x:500,
    delay:1,
    scrollTrigger:".customer-rightside"
});
gsap.from(".ready-pages h1", {
  opacity: 0,
  y: 1,
  delay: 1,
  scrollTrigger: ".ready-pages"
});
gsap.from(".ready-pages p", {
  opacity: 0,
  delay: 1,
  scrollTrigger: ".ready-pages",
});
gsap.from(".ready-page-images", {
  opacity: 0,
  x:1000,
  delay: 1,
  scrollTrigger: ".ready-pages",
  stagger:1,
  duration:0.8
});
gsap.from(".purchase h1", {
  opacity: 0,
  y: 5,
  delay: 2,
  scrollTrigger: ".purchase"
});
gsap.from(".purchase button", {
  opacity: 0,
  y: 5,
  delay: 2,
  scrollTrigger: ".purchase",
});
gsap.from(".footer-leftside", {
  opacity: 0,
  x: -10,
  delay: 1,
  scrollTrigger: ".footer"
});
gsap.from(".footer-list", {
  opacity: 0,
  x: 500,
  delay: 1,
  scrollTrigger: ".footer",
});
gsap.from(".footer input", {
  opacity: 0,
  x: 500,
  delay: 1,
  scrollTrigger: ".footer",
});
gsap.from(".footer button", {
  opacity: 0,
  x: 500,
  delay: 1,
  scrollTrigger: ".footer",
});
gsap.from(".footer h4", {
  opacity: 0,
  x: 500,
  delay: 1,
  scrollTrigger: ".footer",
});