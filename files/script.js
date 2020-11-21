const tl = gsap.timeline({ defaults: { ease: "power1.out"}});

tl.from(".lp-title1, .lp-title2, .landing-page p, .lp-button", {x: "-35%", opacity: 0, duration: 1, stagger: 0.08})

const wwoTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".wwo ",
        start: "center bottom"
    }
});

wwoTl.from(".wwo h1, .wwo p, .wwo button", {x: "-38%", opacity: 0, duration: 1.3})
    .from(".title-seperator", {x: "-50%", opacity: 0}, "-=0.5");

const benTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".benefits",
        start: "center bottom"
    }
});

benTl.from(".benefits-h1, .title-seperator2, .benefits-p1, .benefits-p2", {opacity: 0, duration: 3, stagger: 0.05, delay: 0.2});

const wuTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".whyus",
        start: "center bottom"
    }
});

wuTl.from(".whyus-h1, .whyus-p1, .whyus-p2", {x: "-50%", opacity: 0, duration: 1, delay: 0.1})
    .from(".title-seperator3", {x: "-50%", opacity: 0}, "-=0.5")
    .from(".bubble-1, .bubble-2, .bubble-3", {opacity: 0, duration: 0.3}, "-=0.16")
    .from(".whyus-img", {duration: 1.2, opacity: 0, delay: 0.75});

const TestTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".testimonials",
        start: "center bottom"
    }
});

TestTl.from(".test-info h1, .title-seperator6, .test-user, .test-sign, .test-button", {opacity: 0, duration: 3, stagger: 0.05, delay: 0.2});

const ContTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact",
        start: "center bottom"
    }
});

ContTl.from(".contact-info", {x: "-50%", opacity: 0, duration: 1.3})
ContTl.from(".contact-footer", {x: "50%", opacity: 0, duration: 1.3}, "-=1.3")