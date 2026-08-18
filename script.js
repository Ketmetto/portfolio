// Scroll-reveal: fade/slide sections in as they enter the viewport
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    // Fallback: just show everything if the browser can't observe
    items.forEach(i => i.classList.add('in'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(i => io.observe(i));
});
