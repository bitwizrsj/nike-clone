document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".circle", {
        rotation: 360,
        scrollTrigger: {
            trigger: ".circle-container",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });
});
