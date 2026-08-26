import * as THREE from '/assets/vendor/three.module.js';

/* Do Step Inn Central — 3D prototype (Phase 1).
   Warm, scroll-driven depth: the camera glides forward through floating
   panels of the hostel — a stand-in for the corridor fly-through until the
   real façade/corridor photos are in. Placeholder textures = current repo photos. */

const canvas = document.getElementById('scene');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = matchMedia('(max-width: 820px)').matches;

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
} catch (e) {
  document.documentElement.classList.add('no-webgl', 'scene-ready');
  throw e; // stop the module; CSS fallback (static hero) takes over
}
renderer.setPixelRatio(Math.min(devicePixelRatio, isMobile ? 1.5 : 2));
renderer.setSize(innerWidth, innerHeight);

const scene = new THREE.Scene();
const GROUND = 0x33261a;               // warmer, lighter ground (was near-black) — brighter overall
scene.background = new THREE.Color(GROUND);
scene.fog = new THREE.FogExp2(GROUND, 0.018);  // thinner haze so panels stay bright with depth

const camera = new THREE.PerspectiveCamera(58, innerWidth / innerHeight, 0.1, 120);
camera.position.set(0, 0, 9);

/* ---------- photo panels along -Z (the "corridor") ---------- */
const PHOTOS = ['door-window', 'community', 'room-pod', 'kitchen', 'room-private', 'lounge', 'why-proof', 'bathroom', 'checkin'];
const GAP = 5.4;
const loader = new THREE.TextureLoader();
const panels = [];

PHOTOS.forEach((name, i) => {
  const tex = loader.load(`/assets/img/${name}.jpg`);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const w = 7.2, h = 4.8;
  const mat = new THREE.MeshBasicMaterial({ map: tex });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  const side = i % 2 ? 1 : -1;
  mesh.position.set(side * (2.4 + i * 0.05), (i % 2 ? 0.35 : -0.35), -i * GAP);
  mesh.rotation.y = side * -0.22;
  scene.add(mesh);

  // warm frame glow behind each panel
  const frame = new THREE.Mesh(
    new THREE.PlaneGeometry(w + 0.35, h + 0.35),
    new THREE.MeshBasicMaterial({ color: 0xF4A81A, transparent: true, opacity: 0.14 })
  );
  frame.position.copy(mesh.position); frame.position.z -= 0.06; frame.rotation.y = mesh.rotation.y;
  scene.add(frame);
  panels.push(mesh);
});

const END_Z = -(PHOTOS.length - 1) * GAP;

/* ---------- dust motes ---------- */
let dust;
if (!reduce) {
  const N = isMobile ? 260 : 700;
  const pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 26;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
    pos[i * 3 + 2] = -Math.random() * (PHOTOS.length * GAP);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  dust = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffca6a, size: 0.05, transparent: true, opacity: 0.55, depthWrite: false }));
  scene.add(dust);
}

/* ---------- scroll + pointer ---------- */
let scrollT = 0;           // 0..1 target from scroll
let curT = 0;              // eased
const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

function onScroll() {
  const max = document.body.scrollHeight - innerHeight;
  scrollT = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

if (!reduce && !isMobile) {
  addEventListener('pointermove', (e) => {
    pointer.tx = (e.clientX / innerWidth - 0.5);
    pointer.ty = (e.clientY / innerHeight - 0.5);
  });
}

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

/* reveal HTML sections */
const io = new IntersectionObserver((es) => {
  es.forEach((en) => { if (en.isIntersecting) en.target.classList.add('in'); });
}, { threshold: 0.35 });
document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

/* ---------- render loop ---------- */
const clock = new THREE.Clock();
function tick() {
  const t = clock.getElapsedTime();
  curT += (scrollT - curT) * (reduce ? 1 : 0.06);
  camera.position.z = 9 + curT * (END_Z - 9 + 3);

  pointer.x += (pointer.tx - pointer.x) * 0.05;
  pointer.y += (pointer.ty - pointer.y) * 0.05;
  camera.position.x = pointer.x * 1.6;
  camera.position.y = -pointer.y * 1.0;
  camera.lookAt(0, 0, camera.position.z - 6);

  if (dust) { dust.rotation.y = t * 0.02; dust.position.y = Math.sin(t * 0.3) * 0.3; }

  panels.forEach((p, i) => { p.rotation.z = Math.sin(t * 0.3 + i) * 0.004; });

  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}
tick();

/* signal ready (hide preloader) */
requestAnimationFrame(() => document.documentElement.classList.add('scene-ready'));
