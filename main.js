// --------- MANIFIESTO Y CATEGORÍAS (EJEMPLO) ---------
const categories = [
  {
    name: "Claude sonnet4",
    description: "IA para programar y preguntas complejas.",
    tools: []
  },
  {
    name: "DeepSite",
    description: "Construye webs en tiempo real y puedes copiar el código.",
    tools: []
  },
  {
    name: "Manus",
    description: "Nueva IA.",
    tools: []
  },
  {
    name: "Google AI Edge",
    description: "App para mover modelos de IA en Android, disponible en GitHub.",
    tools: []
  },
  {
    name: "Aigagent con chat gpt",
    description: "Crea .json del escenario que quieras.",
    tools: []
  },
  {
    name: "NEO BY flowith",
    description: "Infinity agents.",
    tools: []
  },
  {
    name: "Genspark.ai",
    description: "Plataforma completa con agentes de IA.",
    tools: []
  },
  {
    name: "MGX",
    description: "El primer AI DEV TEAM.",
    tools: []
  },
  {
    name: "Grok",
    description: "Última y mejor IA actual.",
    tools: []
  },
  {
    name: "Agente de IA: chatLLM",
    description: "Computer agent.",
    tools: []
  },
  {
    name: "META AI",
    description: "IA más potente de texto.",
    tools: []
  }
];

const manifestoList = document.getElementById('manifesto-list');
manifestoList.innerHTML = categories.map(cat =>
  `<div class="cat"><b>${cat.name}</b>: <span>${cat.description}</span></div>`
).join('');

// --------- THREE.JS IGLOO 3D ---------
let scene, camera, renderer, controls, iglooGroup, animating = true, soundOn = false;

function init3D() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xd6eaff);

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 2, 10);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
  document.getElementById('three-container').appendChild(renderer.domElement);

  // Ambient arctic light and fog
  scene.fog = new THREE.Fog(0xd6eaff, 18, 40);
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x88c0d0, 1);
  scene.add(hemiLight);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
  dirLight.position.set(5, 8, 7);
  scene.add(dirLight);

  // Snow particles
  let snowParticles = [];
  const snowGeo = new THREE.BufferGeometry();
  const snowCount = 1600;
  const snowVertices = [];
  for (let i = 0; i < snowCount; i++) {
    snowVertices.push(
      (Math.random() - 0.5) * 35,
      Math.random() * 16 + 1,
      (Math.random() - 0.5) * 35
    );
  }
  snowGeo.setAttribute('position', new THREE.Float32BufferAttribute(snowVertices, 3));
  const snowMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.14, transparent: true, opacity: 0.65 });
  const snow = new THREE.Points(snowGeo, snowMat);
  scene.add(snow);

  // Arctic ground (simple disc)
  const groundGeo = new THREE.CircleGeometry(11, 32);
  const groundMat = new THREE.MeshPhongMaterial({ color: 0xe5f6fc });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = 0;
  scene.add(ground);

  // Igloo group
  iglooGroup = new THREE.Group();

  // Build 11 blocks (one per category)
  const blockGeo = new THREE.CylinderGeometry(1, 1, 1.2, 32);
  for (let i = 0; i < categories.length; i++) {
    let angle = (i / categories.length) * Math.PI * 2;
    let x = Math.cos(angle) * 3.2;
    let z = Math.sin(angle) * 3.2;
    let block = new THREE.Mesh(
      blockGeo,
      new THREE.MeshPhongMaterial({ color: 0x5cb6f2, shininess: 70 })
    );
    block.position.set(x, 0.7, z);
    block.rotation.y = -angle;
    block.userData = { category: i };
    iglooGroup.add(block);

    // Number (text) on top
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(64, 64, 56, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = 'bold 52px Inter';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#228be6';
    ctx.fillText((i+1).toString().padStart(2,'0'), 64, 70);
    const texture = new THREE.CanvasTexture(canvas);
    const numMat = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    const numGeo = new THREE.CircleGeometry(0.7, 32);
    const numMesh = new THREE.Mesh(numGeo, numMat);
    numMesh.position.set(x, 1.45, z);
    numMesh.rotation.x = -Math.PI/2.2;
    iglooGroup.add(numMesh);
  }

  // Igloo dome (main)
  const domeGeo = new THREE.SphereGeometry(2.5, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.6);
  const domeMat = new THREE.MeshPhongMaterial({ color: 0xcce0f8, shininess: 60, transparent: true, opacity: 0.94 });
  const dome = new THREE.Mesh(domeGeo, domeMat);
  dome.position.y = 1.8;
  iglooGroup.add(dome);

  // Igloo entrance
  const archGeo = new THREE.TorusGeometry(0.63, 0.3, 16, 100, Math.PI);
  const archMat = new THREE.MeshPhongMaterial({ color: 0x96cbee });
  const arch = new THREE.Mesh(archGeo, archMat);
  arch.position.set(0, 0.65, 2.33);
  arch.rotation.x = Math.PI/2;
  iglooGroup.add(arch);

  scene.add(iglooGroup);

  // Arctic mountains (simple cones)
  for(let i=0;i<7;i++){
    const mGeo = new THREE.ConeGeometry(2.8 + Math.random()*2.8, 6.5 + Math.random()*5, 7);
    const mMat = new THREE.MeshPhongMaterial({ color: 0xb9e1fa, flatShading: true });
    const m = new THREE.Mesh(mGeo, mMat);
    let angle = Math.random() * Math.PI * 2;
    let radius = 12 + Math.random()*8;
    m.position.set(Math.cos(angle)*radius, 0, Math.sin(angle)*radius);
    m.position.y = (Math.random() > 0.5) ? 0.2 : 0;
    scene.add(m);
  }

  // Controls
  let isDragging = false, prevX = 0;
  renderer.domElement.addEventListener('mousedown', e => { isDragging = true; prevX = e.clientX; });
  renderer.domElement.addEventListener('mouseup', e => { isDragging = false; });
  renderer.domElement.addEventListener('mousemove', e => {
    if(isDragging){
      let dx = (e.clientX-prevX)/window.innerWidth * Math.PI;
      iglooGroup.rotation.y += dx*1.9;
      prevX = e.clientX;
    }
  });
  renderer.domElement.addEventListener('wheel', e => {
    camera.position.z += e.deltaY * 0.002;
    camera.position.z = Math.max(4, Math.min(18, camera.position.z));
  });

  // Touch controls
  let lastTouchX = null;
  renderer.domElement.addEventListener('touchstart', e => {
    if(e.touches.length === 1){
      lastTouchX = e.touches[0].clientX;
    }
  });
  renderer.domElement.addEventListener('touchmove', e => {
    if(e.touches.length === 1 && lastTouchX !== null){
      let dx = (e.touches[0].clientX - lastTouchX) / window.innerWidth * Math.PI;
      iglooGroup.rotation.y += dx * 2.2;
      lastTouchX = e.touches[0].clientX;
    }
  });

  // Pick blocks on click/tap
  renderer.domElement.addEventListener('click', e => {
    let rect = renderer.domElement.getBoundingClientRect();
    let mx = ((e.clientX-rect.left)/rect.width)*2-1, my = -((e.clientY-rect.top)/rect.height)*2+1;
    let raycaster = new THREE.Raycaster();
    raycaster.setFromCamera({x:mx, y:my}, camera);
    let intersects = raycaster.intersectObjects(iglooGroup.children, false);
    let picked = intersects.find(o => o.object.userData && o.object.userData.category !== undefined);
    if(picked){
      showCategoryPanel(picked.object.userData.category);
    }
  });

  animate();
  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  if(animating) {
    iglooGroup.rotation.y += 0.0012;
  }
  renderer.render(scene, camera);
}

// --------- CATEGORY PANEL ---------
function showCategoryPanel(index) {
  const cat = categories[index];
  document.getElementById('panel-content').innerHTML = `<h2>${cat.name}</h2><p>${cat.description}</p>`;
  document.getElementById('category-panel').classList.remove('hidden');
  animating = false;
}
document.getElementById('close-panel').onclick = function() {
  document.getElementById('category-panel').classList.add('hidden');
  animating = true;
};

// --------- SOUND CONTROL ---------
const soundToggle = document.getElementById('sound-toggle');
soundToggle.onclick = function() {
  soundOn = !soundOn;
  document.getElementById('sound-status').textContent = soundOn ? 'On' : 'Off';
  // Aquí puedes integrar sonidos si lo deseas (opcional)
};

// --------- INIT ---------
window.onload = init3D;