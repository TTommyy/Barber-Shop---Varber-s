// Home
const tl = gsap.timeline({ defaults: { ease: "power1.out"}});

tl.from(".lp-title1, .lp-title2, .landing-page p, .lp-button", {x: "-35%", opacity: 0, duration: 1, stagger: 0.05})

const wwoTl = gsap.timeline ({
    scrollTrigger: {
        trigger: ".wwo ",
        start: "center bottom"
    }
});

wwoTl.from(".wwo h1, .wwo p, .wwo button", {x: "-50%", opacity: 0, duration: 1.3})
    .from(".title-seperator", {x: "-75%", opacity: 0, duration: 0.4}, "-=0.5");

const benTl = gsap.timeline ({
    scrollTrigger: {
        trigger: ".benefits",
        start: "center bottom"
    }
});

benTl.from(".benefits-h1, .benefits-p1, .benefits-p2", {opacity: 0, x: "50%", duration: 1., stagger: 0.05, delay: 0.2})
    .from(".title-seperator2", {x: "100%", opacity: 0, duration: 0.4}, "-=0.5");

const wuTl = gsap.timeline ({
    scrollTrigger: {
        trigger: ".whyus",
        start: "center bottom"
    }
});

wuTl.from(".whyus-h1, .whyus-p1, .whyus-p2", {x: "-50%", opacity: 0, duration: 1, delay: 0.1})
    .from(".title-seperator3", {x: "-75%", opacity: 0, duration: 0.4}, "-=0.5")
    .from(".whyus-img", {duration: 1, opacity: 0, delay: 0.30});

const TestTl = gsap.timeline ({
    scrollTrigger: {
        trigger: ".testimonials",
        start: "center bottom"
    }
});

TestTl.from(".test-info h1, .test-user, .test-sign, .test-button", {opacity: 0, x: "-50%", duration: 1., stagger: 0.05, delay: 0.2})
    .from(".title-seperator6", {x: "-100%", opacity: 0, duration: 0.5}, "-=0.5");

const ContTl = gsap.timeline ({
    scrollTrigger: {
        trigger: ".contact",
        start: "center bottom"
    }
});

ContTl.from(".contact-info", {x: "-50%", opacity: 0, duration: 1.25})
    .from(".contact-footer", {x: "50%", opacity: 0, duration: 1.25}, "-=1.4");

// About Us
const about = gsap.timeline ({
    scrollTrigger: {
        trigger: ".varbers",
        start: "bottom bottom"
    }
});

about.from(".varbers-text h1, .varbers-a-p1, .varbers-a-p2", {x: "-50%", opacity: 0, duration: 0.8})
    .from(".a-lp-seperator2", {x: "-100%", opacity: 0, duration: 0.5}, "-=0.5")
    .from(".varber-a-img", {x: "50%", opacity: 0, duration: 1}, "-=1");

const staff = gsap.timeline ({
    scrollTrigger: {
        trigger: ".team",
        start: "center bottom"
    }
});

staff.from(".teams", {y: "55%", opacity: 0, duration: 1.5});

const services = gsap.timeline ({
    scrollTrigger: {
        trigger: ".a-services",
        start: "center bottom"
    }
});

services.from(".a-services-grids1", {x: "-75%", opacity: 0, duration: 0.5})
    .from(".a-services-grids2", {x: "-75%", opacity: 0, duration: 0.5})
    .from(".a-services-grids3", {x: "-75%", opacity: 0, duration: 0.5})
    .from(".a-services-grids4", {x: "-75%", opacity: 0, duration: 0.5});