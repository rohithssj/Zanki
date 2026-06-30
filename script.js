document.addEventListener("DOMContentLoaded", () => {
  // Wait for a small moment to ensure everything is ready
  setTimeout(() => {
    // Navbar fade in
    gsap.to(".navbar", {
      opacity: 1,
      duration: 1.2,
      ease: "power2.out"
    });

    // Hero title fade up
    gsap.to(".hero-title.fade-up", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2
    });

    // Hero subtitle fade up
    gsap.to(".hero-subtitle.fade-up", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.4
    });

    // Hero buttons fade up
    gsap.to(".hero-buttons.fade-up", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.6
    });

    // Preview section slide upward
    gsap.to(".preview-section.fade-up", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.8
    });
  }, 100);
});
