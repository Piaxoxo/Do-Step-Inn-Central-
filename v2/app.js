import * as THREE from '/assets/vendor/three.module.js';

/* Do Step Inn Central — v2 hero scene (playful arrival).
   The hero object is the hostel's signature: a wooden lockable POD.
   On load a keypad "unlocks" and the slatted door swings open to reveal the
   bed; smaller pods float behind. Pointer + scroll drive parallax.
   Few real photos → the 3D carries the atmosphere. */

const canvas = document.getElementById('scene');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = matchMedia('(max-width: 820px)').matches;

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
} catch (e) {
  document.documentElement.classList.add('no-webgl', 'scene-ready');
  throw e;
}
renderer.setPixelRatio(Math.min(devicePixelRatio, isMobile ? 1.5 : 2));
renderer.setSize(innerWidth, innerHeight);

const scene = new THREE.Scene();
const GROUND = 0x1a1109;
scene.fog = new THREE.FogExp2(GROUND, 0.03);

const camera = new THREE.PerspectiveCamera(52, innerWidth / innerHeight, 0.1, 120);
camera.position.set(0, 0.5, 9);

/* ---------- lights ---------- */
scene.add(new THREE.AmbientLight(0x6b5238, 1.0));
const key = new THREE.DirectionalLight(0xffd9a0, 1.5); key.position.set(3, 5, 6); scene.add(key);
const mint = new THREE.PointLight(0x5FB894, 60, 40); mint.position.set(-6, 2, 4); scene.add(mint);
const amber = new THREE.PointLight(0xF4A81A, 40, 40); amber.position.set(6, -2, 3); scene.add(amber);
const lampLight = new THREE.PointLight(0xffca6a, 0, 8); lampLight.position.set(1.1, 0.4, -0.6); scene.add(lampLight);

/* ---------- materials ---------- */
const wood = new THREE.MeshStandardMaterial({ color: 0xa06a38, roughness: 0.72, metalness: 0.02 });
const woodDark = new THREE.MeshStandardMaterial({ color: 0x6f4a28, roughness: 0.85 });
const inner = new THREE.MeshStandardMaterial({ color: 0x241a10, roughness: 1 });
const sheet = new THREE.MeshStandardMaterial({ color: 0xF1E8D8, roughness: 0.9 });
const pillowMat = new THREE.MeshStandardMaterial({ color: 0xB33A3A, roughness: 0.85 });
const blanketMat = new THREE.MeshStandardMaterial({ color: 0x8f2f2f, roughness: 0.9 });
const lampMat = new THREE.MeshStandardMaterial({ color: 0x3a2a15, emissive: 0xffca6a, emissiveIntensity: 0.2 });
const box = (w, h, d, m) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
const at = (mesh, x, y, z) => { mesh.position.set(x, y, z); return mesh; };

/* slatted panel: a set of thin vertical wood slats filling w×h in the XY plane */
function slatPanel(w, h, mat, slats = 9, depth = 0.12) {
  const g = new THREE.Group();
  const gap = w / slats;
  for (let i = 0; i < slats; i++) {
    const s = box(gap * 0.82, h, depth, mat);
    s.position.x = -w / 2 + gap * (i + 0.5);
    g.add(s);
  }
  return g;
}

/* ---------- the hero POD ---------- */
const pod = new THREE.Group();
scene.add(pod);
const W = 3.4, H = 2.3, D = 3.4;
// shell (open front)
pod.add(at(box(W, 0.14, D, wood), 0, -H / 2, 0));      // floor
pod.add(at(box(W, 0.14, D, wood), 0, H / 2, 0));        // ceiling
const back = slatPanel(W, H, wood, 10, 0.12); back.position.z = -D / 2; pod.add(back);              // slatted back
pod.add(at(box(0.14, H, D, woodDark), -W / 2, 0, 0));   // left
pod.add(at(box(0.14, H, D, woodDark), W / 2, 0, 0));    // right
// bed
pod.add(at(box(W - 0.5, 0.28, D - 0.6, sheet), 0, -H / 2 + 0.35, 0.1));
pod.add(at(box(1.05, 0.34, 0.7, pillowMat), -0.85, -H / 2 + 0.62, -0.9));
pod.add(at(box(W - 0.9, 0.2, 1.7, blanketMat), 0.1, -H / 2 + 0.55, 0.45));
// reading lamp
const lamp = box(0.24, 0.24, 0.24, lampMat); lamp.position.set(1.15, 0.35, -0.7); pod.add(lamp);

// door — slatted, hinged on the left front edge, pivots open
const doorPivot = new THREE.Group();
doorPivot.position.set(-W / 2, 0, D / 2);           // left-front vertical edge
const door = slatPanel(W, H, wood, 9, 0.14);
door.position.x = W / 2;                             // shift so pivot is at the left edge
doorPivot.add(door);
pod.add(doorPivot);

// keypad / lock in front of the door
const lock = new THREE.Group();
lock.position.set(0.55, 0, D / 2 + 0.55);
const lockBody = box(0.5, 0.72, 0.1, new THREE.MeshStandardMaterial({ color: 0x2a2018, roughness: 0.6 }));
const ringMat = new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0xF4A81A, emissiveIntensity: 1.4 });
const ring = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.045, 12, 28), ringMat);
ring.position.z = 0.08;
lock.add(lockBody, ring);
pod.add(lock);

/* ---------- floating background pods ---------- */
const floaters = [];
const NF = isMobile ? 3 : 6;
for (let i = 0; i < NF; i++) {
  const g = new THREE.Group();
  const s = 0.6 + Math.random() * 0.5;
  g.add(box(1.8 * s, 1.3 * s, 1.8 * s, wood));
  g.add(at(box(1.5 * s, 1.0 * s, 0.05, inner), 0, 0, 0.9 * s));
  g.position.set((Math.random() - 0.5) * 24, (Math.random() - 0.5) * 12, -8 - Math.random() * 16);
  g.rotation.y = (Math.random() - 0.5) * 1.2;
  g.userData = { sp: 0.2 + Math.random() * 0.4, ph: Math.random() * 6, rot: (Math.random() - 0.5) * 0.1 };
  scene.add(g); floaters.push(g);
}

/* ---------- dust ---------- */
let dust;
if (!reduce) {
  const N = isMobile ? 200 : 520;
  const pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 30;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
    pos[i * 3 + 2] = -Math.random() * 22 + 4;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  dust = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffca6a, size: 0.05, transparent: true, opacity: 0.5, depthWrite: false }));
  scene.add(dust);
}

/* ---------- scroll + pointer ---------- */
let scrollT = 0;
const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
function heroEnd() { return Math.max(1, innerHeight * 1.05); }
function onScroll() { scrollT = Math.min(1, Math.max(0, scrollY / heroEnd())); }
addEventListener('scroll', onScroll, { passive: true }); onScroll();
if (!reduce && !isMobile) {
  addEventListener('pointermove', (e) => { pointer.tx = e.clientX / innerWidth - 0.5; pointer.ty = e.clientY / innerHeight - 0.5; });
}
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

/* reveal HTML sections (independent of DOM i18n) */
const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) en.target.classList.add('in'); }), { threshold: 0.2 });
document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

/* ---------- intro timeline (time-driven, no GSAP dependency) ---------- */
const easeOut = (x) => 1 - Math.pow(1 - x, 3);
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const clock = new THREE.Clock();

function tick() {
  const t = clock.getElapsedTime();

  // pointer easing
  pointer.x += (pointer.tx - pointer.x) * 0.05;
  pointer.y += (pointer.ty - pointer.y) * 0.05;

  // intro: camera dolly in
  const dolly = easeOut(clamp01(t / 2.6));
  const baseZ = 9 - dolly * 2.7;

  // lock pulse, then unlock at 1.4s
  const unlocked = t > 1.4;
  if (!unlocked) {
    ringMat.emissive.setHex(0xF4A81A);
    ringMat.emissiveIntensity = 1.1 + Math.sin(t * 6) * 0.7;
  } else {
    const u = clamp01((t - 1.4) / 0.5);
    ringMat.emissive.setHex(0x5FB894);
    ringMat.emissiveIntensity = 1.8 + (1 - u) * 1.5;
    lock.scale.setScalar(1 + Math.sin(u * Math.PI) * 0.25);
    lock.position.z = (D / 2 + 0.55) + u * 0.6;           // pops toward viewer then fades role
    lock.visible = t < 3.6;                                // tuck the lock away once open
  }

  // door swings open from 1.7s → 3.4s
  const dOpen = easeOut(clamp01((t - 1.7) / 1.7));
  doorPivot.rotation.y = -dOpen * 2.15;

  // lamp warms up once open
  const lit = clamp01((t - 2.6) / 1.2);
  lampMat.emissiveIntensity = 0.2 + lit * 1.6;
  lampLight.intensity = lit * 9;

  // idle bob + pointer/scroll parallax on the pod
  pod.position.y = Math.sin(t * 0.6) * 0.06 - scrollT * 3.2;
  pod.position.x = pointer.x * 0.8;
  pod.rotation.y = -0.25 + pointer.x * 0.25 + scrollT * 0.2;
  pod.rotation.x = pointer.y * 0.12;
  pod.scale.setScalar(1 - scrollT * 0.15);

  // floaters drift
  floaters.forEach((f) => {
    f.position.y += Math.sin(t * f.userData.sp + f.userData.ph) * 0.002;
    f.rotation.y += f.userData.rot * 0.01;
    f.position.x += Math.sin(t * 0.1 + f.userData.ph) * 0.003;
  });
  if (dust) { dust.rotation.y = t * 0.015; dust.position.y = -scrollT * 2; }

  // camera
  camera.position.z = baseZ;
  camera.position.x = pointer.x * 1.2;
  camera.position.y = 0.5 - pointer.y * 0.7 - scrollT * 1.2;
  camera.lookAt(0, -scrollT * 1.5, 0);

  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}
tick();

requestAnimationFrame(() => document.documentElement.classList.add('scene-ready'));
