const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function setupPlaybookMotion() {
  if (reducedMotion()) return () => {};

  let observer: IntersectionObserver | undefined;
  const frame = window.requestAnimationFrame(() => {
    document.querySelectorAll<HTMLElement>('.playbook-hero > *, .playbook-section').forEach((element) => {
      element.classList.add('motion-enter');
    });

    const targets = document.querySelectorAll<HTMLElement>('.chapter-link, .playbook-family-link, .play-grid, .scenario-grid');
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('motion-revealed');
            observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' }
    );

    targets.forEach((target, index) => {
      target.classList.add('motion-reveal');
      target.style.setProperty('--motion-delay', `${Math.min(index % 4, 3) * 55}ms`);
      observer?.observe(target);
    });
  });

  return () => {
    window.cancelAnimationFrame(frame);
    observer?.disconnect();
    document.querySelectorAll<HTMLElement>('.motion-enter, .motion-reveal, .motion-revealed').forEach((element) => {
      element.classList.remove('motion-enter', 'motion-reveal', 'motion-revealed');
      element.style.removeProperty('--motion-delay');
    });
  };
}
