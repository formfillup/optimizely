/**
 * Interactive 3D tilt effect for the hero headline.
 * Standalone — does not touch any other element on the page.
 * Safe to include on pages that don't have the hero heading;
 * it simply exits early if the elements aren't found, and it
 * skips entirely on touch devices (no mousemove there anyway).
 */
(function () {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

  const heroArea = document.querySelector(".hero-photo");
  const heroTitle = document.querySelector(".hero-giant-title");

  if (!heroArea || !heroTitle || prefersReducedMotion || !hasFinePointer) return;

  const BASE_ROTATE = "rotate(-1.6deg)"; // matches the static CSS resting tilt
  const MAX_ROTATE = 12;                 // max additional tilt in degrees
  const SHADOW_UNIT = 1.15;              // px per depth step, scaled by cursor offset
  const EASE = 0.12;                     // lerp factor — lower = smoother/slower

  // Same layered depth steps/colors as the static CSS, so it looks
  // identical at rest and only "moves" on interaction.
  const LAYERS = [3, 6, 9, 12];
  const COLORS = ["#6FAE2C", "#58941F", "#427A17", "#0B2A1B"];

  let targetRotateX = 0;
  let targetRotateY = 0;
  let currentRotateX = 0;
  let currentRotateY = 0;
  let rafId = null;

  function applyShadow(rotateX, rotateY) {
    let dx = rotateY / MAX_ROTATE;
    let dy = -rotateX / MAX_ROTATE;

    // At rest, fall back to the original bottom-right depth direction
    if (Math.abs(dx) < 0.02 && Math.abs(dy) < 0.02) {
      dx = 1;
      dy = 1;
    }

    const shadow = LAYERS.map((step, i) => {
      const x = (dx * step * SHADOW_UNIT).toFixed(1);
      const y = (dy * step * SHADOW_UNIT).toFixed(1);
      return `${x}px ${y}px 0 ${COLORS[i]}`;
    }).join(", ");

    heroTitle.style.textShadow = shadow;
  }

  function tick() {
    currentRotateX += (targetRotateX - currentRotateX) * EASE;
    currentRotateY += (targetRotateY - currentRotateY) * EASE;

    heroTitle.style.transform =
      `${BASE_ROTATE} rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg)`;
    applyShadow(currentRotateX, currentRotateY);

    const settled =
      Math.abs(targetRotateX - currentRotateX) < 0.01 &&
      Math.abs(targetRotateY - currentRotateY) < 0.01;

    rafId = settled ? null : requestAnimationFrame(tick);
  }

  function startLoop() {
    if (!rafId) rafId = requestAnimationFrame(tick);
  }

  heroArea.addEventListener("mousemove", function (e) {
    const rect = heroArea.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;

    targetRotateY = (relX - 0.5) * 2 * MAX_ROTATE;
    targetRotateX = -(relY - 0.5) * 2 * MAX_ROTATE;

    startLoop();
  });

  heroArea.addEventListener("mouseleave", function () {
    targetRotateX = 0;
    targetRotateY = 0;
    startLoop();
  });
})();
