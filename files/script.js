const tl = gsap.timeline({ defaults: { ease: "power1.out"}});

// Landing page animation
tl.from(".lp-title1, .lp-title2, .landing-page p, .lp-button", {x: "-35%", opacity: 0, duration: 1.2, stagger: 0.08})