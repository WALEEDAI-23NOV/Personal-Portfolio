import { useEffect, useState } from "react";
import * as THREE from "three";

export function useThreeJS() {
  const [threeLoaded, setThreeLoaded] = useState(false);

  useEffect(() => {
    if (THREE) {
      setThreeLoaded(true);
    }
  }, []);

  return threeLoaded;
}