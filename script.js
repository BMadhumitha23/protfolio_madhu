// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("backToTop");

  // Show/hide button when scrolling
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Scroll to top on button click
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


  function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 500);
  }

  // Desktop: Click = Heart, Mousemove = Sparkle
  document.addEventListener('click', function (e) {
    createHeart(e.clientX, e.clientY);
  });

  document.addEventListener('mousemove', function (e) {
    createSparkle(e.clientX, e.clientY);
  });

  // Mobile: Touch = Heart + Sparkle
  document.addEventListener('touchstart', function (e) {
    const touch = e.touches[0];
    createHeart(touch.clientX, touch.clientY);
    createSparkle(touch.clientX, touch.clientY);
  });

  document.addEventListener('touchmove', function (e) {
    const touch = e.touches[0];
    createSparkle(touch.clientX, touch.clientY);
  });

