const yearTarget = document.getElementById("year");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

const revealTargets = document.querySelectorAll(".section, .trust-strip, .faculty-card, .program-card, .benefit-card, .cta-card");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
});

revealTargets.forEach((target) => {
  target.classList.add("reveal");
  revealObserver.observe(target);
});
