/* =========================================================
   Three.js scene — particles + wireframe geometries
   Pure ESM, no build step. Loaded via <script type="module">
   ========================================================= */
import * as THREE from 'three';

const canvas = document.getElementById('webgl');
if (!canvas) throw new Error('webgl canvas missing');

// ---------- Device & preference detection ----------
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = window.matchMedia('(pointer: coarse)').matches;
const lowCores = (navigator.hardwareConcurrency || 4) <= 4;

const signalReady = () => document.dispatchEvent(new CustomEvent('three:ready'));

if (prefersReducedMotion) {
  canvas.style.display = 'none';
  signalReady();
} else {
  initScene();
}

function initScene() {
  // ---------- Scene / camera / renderer ----------
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0b1120, 0.028);

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    120
  );
  camera.position.set(0, 0, 9);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: !isMobile,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
  renderer.setSize(window.innerWidth, window.innerHeight, false);

  // ---------- Particles ----------
  const particleCount = isMobile ? 700 : lowCores ? 1200 : 2000;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const cTeal = new THREE.Color(0x2dd4bf);
  const cSky = new THREE.Color(0x38bdf8);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 32;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 32;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 32;

    const c = Math.random() > 0.5 ? cTeal : cSky;
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 0.035,
    vertexColors: true,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
  });

  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // ---------- Wireframe shapes ----------
  const geometries = [
    new THREE.IcosahedronGeometry(0.7, 0),
    new THREE.OctahedronGeometry(0.7, 0),
    new THREE.TetrahedronGeometry(0.85, 0),
    new THREE.TorusGeometry(0.55, 0.18, 8, 22),
    new THREE.DodecahedronGeometry(0.65, 0),
  ];

  const shapes = [];
  const shapeCount = isMobile ? 4 : lowCores ? 6 : 9;

  for (let i = 0; i < shapeCount; i++) {
    const geo = geometries[i % geometries.length];
    const isTeal = i % 2 === 0;
    const mat = new THREE.MeshBasicMaterial({
      color: isTeal ? 0x2dd4bf : 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.32,
    });
    const mesh = new THREE.Mesh(geo, mat);

    mesh.position.set(
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 10 - 2
    );
    mesh.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );
    mesh.userData = {
      rotX: (Math.random() - 0.5) * 0.004,
      rotY: (Math.random() - 0.5) * 0.004,
      floatSpeed: 0.4 + Math.random() * 0.6,
      floatOffset: Math.random() * Math.PI * 2,
      baseY: mesh.position.y,
    };
    scene.add(mesh);
    shapes.push(mesh);
  }

  // ---------- Mouse parallax ----------
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  window.addEventListener(
    'pointermove',
    (e) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = -(e.clientY / window.innerHeight) * 2 + 1;
    },
    { passive: true }
  );

  // ---------- Scroll ----------
  let scrollTarget = 0;
  let scrollCurrent = 0;
  window.addEventListener(
    'scroll',
    () => {
      scrollTarget = window.scrollY;
    },
    { passive: true }
  );

  // ---------- Resize ----------
  let resizeRAF = 0;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(resizeRAF);
    resizeRAF = requestAnimationFrame(() => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
      renderer.setSize(window.innerWidth, window.innerHeight, false);
    });
  });

  // ---------- Animate ----------
  const clock = new THREE.Clock();
  let firstFrame = true;
  let running = true;

  // Pause when tab hidden — battery friendly
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) {
      clock.getDelta();
      animate();
    }
  });

  function animate() {
    if (!running) return;
    requestAnimationFrame(animate);

    const t = clock.getElapsedTime();

    // Smooth mouse + scroll
    mouse.x += (mouse.tx - mouse.x) * 0.05;
    mouse.y += (mouse.ty - mouse.y) * 0.05;
    scrollCurrent += (scrollTarget - scrollCurrent) * 0.08;

    const maxScroll = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );
    const scrollNorm = scrollCurrent / maxScroll;

    // Camera drift
    camera.position.x = mouse.x * 0.9;
    camera.position.y = mouse.y * 0.55;
    camera.position.z = 9 - scrollNorm * 4.5;
    camera.lookAt(0, 0, 0);

    // Particles
    particles.rotation.y = t * 0.02;
    particles.rotation.x = t * 0.008;

    // Shapes
    for (let i = 0; i < shapes.length; i++) {
      const s = shapes[i];
      s.rotation.x += s.userData.rotX;
      s.rotation.y += s.userData.rotY;
      s.position.y =
        s.userData.baseY +
        Math.sin(t * s.userData.floatSpeed + s.userData.floatOffset) * 0.45;
    }

    renderer.render(scene, camera);

    if (firstFrame) {
      firstFrame = false;
      signalReady();
    }
  }
  animate();

  // Safety net: if anything goes wrong, still hide loader
  setTimeout(() => {
    if (firstFrame) signalReady();
  }, 3500);
}