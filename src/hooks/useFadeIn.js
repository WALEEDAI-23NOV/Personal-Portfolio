import { useEffect } from "react";

/**
 * useFadeIn
 * Observes all elements with the class "fade-in" and adds "visible"
 * when they enter the viewport, triggering the CSS fade-in animation.
 */
export function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
