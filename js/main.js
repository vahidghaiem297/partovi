
const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrapper",
    start: "0 0",
    end: "+=150%",
    pin: true,
    scrub: true,
    markers: false,
    id: "timeline1"
  }
});

t2.to(".mask", {
  scale: 1.2,
  z: 500,
  transformOrigin: "center top",
  ease: "power4.inOut"
})
  .to(".section.hero", {
    scale: 1,
    transformOrigin: "center top",
    ease: "power4.inOut"
  }, "<");






$(document).ready(function () {

  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    offset: 100,
    delay: 0,
    mirror: true,
  });


})






$(function () {
  $(".typed").typed({
    strings: ["Designer.", "Frontend.", "Good Person.", "Hard Worker."],

    stringsElement: null,

    typeSpeed: 50,

    startDelay: 1200,

    backSpeed: 20,

    backDelay: 500,

    loop: true,

    loopCount: false,

    showCursor: false,

    cursorChar: "|",

    attr: null,

    contentType: 'html',

    callback: function () { },

    preStringTyped: function () { },

    onStringTyped: function () { },

    resetCallback: function () { }
  });
});

(function ($) {
  $(window).on("load", function () {
    $("a[rel='m_PageScroll2id']").mPageScroll2id();
  });
})(jQuery);


$(document).ready(function () {
  var timelineNew = gsap.timeline({
    scrollTrigger: {
      trigger: ".info",
      start: "+=80%",
      end: "+=80%",
      // pin: true, 
      scrub: 2,
      repeat: -1,
      yoyo: true,
      markers: false,
      id: "timeline3"
    }
  });

  timelineNew.from(".letter", {
    yPercent: "random([-120, 120])",
    duration: 1,
    opacity: 0,
    stagger: 0.05,
    ease: "back.out"
  });
  timelineNew.from(".spiral", {
    opacity: 0, 
    scale: 0,
     duration: 2,
    ease: "back.out"
  });
  timelineNew.from(".windwill", {
    rotation: 360,
    duration: 2, // seconds
    scale: 0,
    ease: "back.out"
  });
  timelineNew.from(".cylander", {
    rotation: 360,
    duration: 2, // seconds
    scale: 0,
    ease: "back.out"
  });
})

