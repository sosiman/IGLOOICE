// Simple IGLOO 3D con bloques "clickeables" para la demo UI
let iglooBlocks = [];

class IglooScene {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(65, window.innerWidth/window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 7, 23);
    this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
    this.scene.fog = new THREE.Fog(0x8B9DC3, 40, 120);

    // Lights
    const aLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(aLight);
    const dLight = new THREE.DirectionalLight(0xffffff, 0.85);
    dLight.position.set(40, 45, 60);
    dLight.castShadow = true; this.scene.add(dLight);

    // Arctic floor
    const floorGeo = new THREE.PlaneGeometry(140, 140, 30, 30);
    const floorMat = new THREE.MeshLambertMaterial({ color: 0xbfd1e6, transparent:true, opacity: 0.98 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI/2; floor.position.y = -0.6; floor.receiveShadow = true;
    this.scene.add(floor);

    // Arctic mountains
    for(let i=0;i<7;i++){
      const g = new THREE.ConeGeometry(16+Math.random()*12, 25+Math.random()*20, 8);
      const m = new THREE.MeshLambertMaterial({ color: 0x8ca3b5, transparent:true, opacity: 0.44 });
      const mt = new THREE.Mesh(g, m);
      mt.position.set((Math.random()-0.5)*120, 2, -45-Math.random()*48);
      this.scene.add(mt);
    }

    // IGLOO BLOQUES
    this.iglooGroup = new THREE.Group();
    let blockCount = 12; // 12 categorías
    let radius = 4.7, y = 2;
    for(let i=0;i<blockCount;i++){
      let angle = i * (Math.PI*2/blockCount);
      let geo = new THREE.BoxGeometry(1.8, 1.1, 2.2);
      let mat = new THREE.MeshPhongMaterial({ color: 0xeaf6ff, shininess: 85, emissive: 0x56a6e5, emissiveIntensity: 0.13 });
      let block = new THREE.Mesh(geo, mat);
      block.position.set(Math.cos(angle)*radius, y, Math.sin(angle)*radius);
      block.rotation.y = -angle;
      block.categoryIndex = i; // Para raycast
      this.iglooGroup.add(block);
      iglooBlocks.push(block);
    }
    // Domo central
    let domeGeo = new THREE.SphereGeometry(4.6, 22, 12, 0, Math.PI*2, 0, Math.PI/1.6);
    let domeMat = new THREE.MeshPhongMaterial({ color: 0xcbe7fb, shininess: 70, transparent:true, opacity: 0.99 });
    let dome = new THREE.Mesh(domeGeo, domeMat);
    dome.position.y = 2.2;
    this.iglooGroup.add(dome);
    this.scene.add(this.iglooGroup);

    // Loop!
    this.animate = this.animate.bind(this);
    this.animate();
    window.addEventListener('resize',()=>this.onResize());
  }
  animate() {
    this.iglooGroup.rotation.y += 0.0015;
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);
  }
  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
document.addEventListener("DOMContentLoaded",()=>{ window.iglooScene = new IglooScene(); });
