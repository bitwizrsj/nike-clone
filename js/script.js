function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

init();


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
});
tl.to(".page1 h1", { x: -100 }, "anim")
  .to(".page1 h2", { x: 100 }, "anim")
  .to(".page1 video", { width: "90%" }, "anim");

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -127%",
        end: "top -130%",
        scrub: 3
    }
});

tl2.to(".main", {
    backgroundColor: "#fff"
});

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -130%",
        end: "top -150%",
        scrub: 3
    }
});

tl3.to(".main", {
    backgroundColor: "#0F0D0D"
});

// New timeline for the circle rotation and scroll pause
var circleRotationTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2",
        scroller: ".main",
        start: "top top",
        end: "+=100%", // Adjust this value if needed
        scrub: true,
        pin: true,
        onLeave: () => {
            locoScroll.stop();
        },
        onEnterBack: () => {
            locoScroll.start();
        },
        onUpdate: self => {
            // When rotation is complete, resume scrolling
            if (self.progress === 1) {
                locoScroll.start();
                self.scrollTrigger.kill(); // Unpin the section and remove the trigger
            }
        }
    }
});

// Rotate the circle and counter-rotate the shoes
circleRotationTimeline.to(".circle", {
    rotation: 360,
    duration: 1,
    onUpdate: function() {
        const rotation = gsap.getProperty(".circle", "rotation");
        gsap.set(".shoe", { rotation: -rotation });
    }
});

// Animation for .page2 h1
var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2",
        scroller: ".main",
        start: "top top",
        end: "bottom top",
        scrub: 3
    }
});

tl4.to(".page2 h1", { x: -100 }, "anim")
   .to(".page2 p", { x: -100 }, "anim");

// New timeline for page3 background color change
var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page4",
        scroller: ".main",
        start: "-10%",
        end: "10%",
        scrub: 3
    }
});

tl5.to(".main", {
    backgroundColor: "#fff"
});


