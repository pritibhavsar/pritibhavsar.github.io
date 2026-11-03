// Scroll-reveal for `.wow` / `[data-reveal]` elements. Content stays visible if JS or IntersectionObserver is unavailable.
const targets = document.querySelectorAll('.wow, [data-reveal]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (targets.length && 'IntersectionObserver' in window && !reduceMotion) {
  document.documentElement.classList.add('reveal-ready');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );

  targets.forEach((el) => {
    const delay = el.getAttribute('data-wow-delay');
    if (delay) el.style.setProperty('--reveal-delay', delay);
    observer.observe(el);
  });
}
