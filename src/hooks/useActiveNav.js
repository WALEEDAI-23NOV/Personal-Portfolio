import { useState, useEffect } from "react";

const SECTIONS = ["hero", "about", "tools", "projects", "posts", "cta"];

/**
 * useActiveNav
 * Tracks which section is currently in view and returns its id string.
 * Used by Navbar to highlight the active link.
 */
export function useActiveNav() {
  const [activeNav, setActiveNav] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      let current = "hero";
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id;
        }
      });
      setActiveNav(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return activeNav;
}
