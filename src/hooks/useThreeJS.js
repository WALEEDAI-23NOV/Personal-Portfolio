import { useState, useEffect } from "react";

/**
 * useThreeJS
 * Dynamically loads Three.js from CDN and returns a boolean
 * indicating whether it's ready to use via window.THREE.
 */
export function useThreeJS() {
  const [threeLoaded, setThreeLoaded] = useState(!!window.THREE);

  useEffect(() => {
    if (window.THREE) {
      setThreeLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.min.js";
    script.onload = () => setThreeLoaded(true);
    document.head.appendChild(script);
  }, []);

  return threeLoaded;
}
