import React, { useRef, useEffect } from "react";

/**
 * Cube3D
 * Renders an interactive 3D Rubik's cube via Three.js.
 * Requires window.THREE to be loaded before mounting.
 * Mouse movement rotates and scales the cube.
 */
export default function Cube3D() {
  const cubeRef = useRef(null);

  useEffect(() => {
    if (!window.THREE) return;
    const THREE     = window.THREE;
    const container = cubeRef.current;
    if (!container) return;

    // ── Scene & Camera ──────────────────────────────────────────────────────
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    // ── Renderer ─────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping      = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // ── Environment Map ───────────────────────────────────────────────────────
    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color(0x111111);
    const eL1 = new THREE.PointLight(0xffffff, 3); eL1.position.set(10, 10, 10);   envScene.add(eL1);
    const eL2 = new THREE.PointLight(0xffffff, 2); eL2.position.set(-10, -10, -10); envScene.add(eL2);

    const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256);
    const cubeCamera       = new THREE.CubeCamera(0.1, 1000, cubeRenderTarget);
    scene.environment      = cubeRenderTarget.texture;

    // ── Lights ───────────────────────────────────────────────────────────────
    const dirLight  = new THREE.DirectionalLight(0xffffff, 1.2); dirLight.position.set(5, 5, 5);   scene.add(dirLight);
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.7); fillLight.position.set(-5, -3, -5); scene.add(fillLight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    // ── Rubik's Cube ──────────────────────────────────────────────────────────
    const rubiks     = new THREE.Group();
    scene.add(rubiks);

    const cubeSize   = 1;
    const gap        = 0.02;
    const offset     = cubeSize / 2 + 0.01;
    const stickerSize = 0.92;

    const COLORS = {
      right:  new THREE.Color("#f5f5f5"),
      left:   new THREE.Color("#84e41b"),
      top:    new THREE.Color("#2764ef"),
      bottom: new THREE.Color("#eb7b52"),
      front:  new THREE.Color("#e9e12f"),
      back:   new THREE.Color("#222222"),
      base:   new THREE.Color("#111111"),
    };

    const stickerGeo = new THREE.PlaneGeometry(stickerSize, stickerSize);

    function addSticker(cube, color, pos, rot) {
      const mat     = new THREE.MeshPhysicalMaterial({ color, roughness: 0.2, metalness: 0.1, clearcoat: 0.6, envMapIntensity: 1 });
      const sticker = new THREE.Mesh(stickerGeo, mat);
      sticker.position.set(...pos);
      sticker.rotation.set(...rot);
      cube.add(sticker);
    }

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const geo     = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize, 3, 3, 3);
          const baseMat = new THREE.MeshPhysicalMaterial({
            color: COLORS.base, roughness: 0.15, metalness: 0.3,
            clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 1.2,
          });
          const cube = new THREE.Mesh(geo, baseMat);
          cube.position.set(
            x * (cubeSize + gap),
            y * (cubeSize + gap),
            z * (cubeSize + gap)
          );

          if (x ===  1) addSticker(cube, COLORS.right,  [offset, 0, 0],  [0,  Math.PI / 2, 0]);
          if (x === -1) addSticker(cube, COLORS.left,  [-offset, 0, 0],  [0, -Math.PI / 2, 0]);
          if (y ===  1) addSticker(cube, COLORS.top,   [0,  offset, 0],  [-Math.PI / 2, 0, 0]);
          if (y === -1) addSticker(cube, COLORS.bottom, [0, -offset, 0], [ Math.PI / 2, 0, 0]);
          if (z ===  1) addSticker(cube, COLORS.front,  [0, 0,  offset], [0, 0, 0]);
          if (z === -1) addSticker(cube, COLORS.back,   [0, 0, -offset], [0, Math.PI, 0]);

          rubiks.add(cube);
        }
      }
    }

    // ── Mouse Interaction ─────────────────────────────────────────────────────
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    let targetScale = 1;

    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth)  * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    const maxRotation = Math.PI / 5;
    const smoothness  = 0.07;

    function animate() {
      requestAnimationFrame(animate);

      targetX += (mouseX - targetX) * smoothness;
      targetY += (mouseY - targetY) * smoothness;

      rubiks.rotation.y = targetX * maxRotation;
      rubiks.rotation.x = targetY * maxRotation;

      const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
      const magnet   = 1 - Math.min(distance, 1);
      targetScale    = 1 + magnet * 0.2;
      rubiks.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
      rubiks.position.x = targetX * 0.5 * magnet;
      rubiks.position.y = targetY * 0.5 * magnet;

      rubiks.visible = false;
      cubeCamera.update(renderer, envScene);
      rubiks.visible = true;

      renderer.render(scene, camera);
    }
    animate();

    // ── Resize ───────────────────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={cubeRef} id="cube-3d" />;
}
