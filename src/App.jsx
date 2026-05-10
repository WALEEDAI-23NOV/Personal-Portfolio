import React from "react";

// Styles
import "./styles/global.css";

// Hooks
import { useFadeIn }    from "./hooks/useFadeIn";
import { useActiveNav } from "./hooks/useActiveNav";
import { useThreeJS }   from "./hooks/useThreeJS";

// Components
import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Tools    from "./components/Tools";
import Projects from "./components/Projects";
import Posts    from "./components/Posts";
import CTA      from "./components/CTA";
import Footer   from "./components/Footer";

/**
 * App
 * Root component. Composes the full single-page portfolio layout.
 * All page-level hooks live here and are passed down as needed.
 */
export default function App() {
  const activeNav  = useActiveNav();   // Tracks active section for nav highlight
  const threeLoaded = useThreeJS();    // Loads Three.js CDN script
  useFadeIn();                         // Triggers fade-in on scroll

  return (
    <>
      <Navbar activeNav={activeNav} />
      <Hero   threeLoaded={threeLoaded} />
      <About />
      <Tools />
      <Projects />
      <CTA />
    </>
  );
}
