const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle("stuck", e.intersectionRatio < 1),
  { threshold: [1] }
);

document.querySelectorAll(".sticky").forEach(el => {
    observer.observe(el);    
});
