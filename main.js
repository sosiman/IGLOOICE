// ======= CATEGORÍAS Y HERRAMIENTAS DEL PDF =======
const IA_CATEGORIES = [
  { emoji: "🧠", name: "Inteligencias Artificiales y Multiuso", tools: [
    "Claude sonnet4: IA para programar y preguntas complejas",
    "DeepSite: Crea webs y te da el código en vivo",
    "Manus: Nueva IA",
    "Google AI Edge: App para IA en Android (en Github)",
    "Aigagent: ChatGPT para escenarios .json",
    "NEO BY flowith: Infinity agents",
    "Genspark.ai: Plataforma multi-agente, imágenes, video",
    "MGX: AI Dev Team (como Cursor y Lovable)",
    "Grok: Última IA",
    "Agente de IA: chatLLM (computer agent)",
    "META AI: IA de texto avanzada",
    "ARC SEARCH: Buscador con IA",
    "Uncensored.com: IA sin censura",
    "Chat LLM: IA que hace y analiza videos",
    "ChatLLM computer Agent: Avanzado, 10€/mes",
    "KORTIX.AI: IA que duplica empleados"
  ]},
  { emoji: "🎨", name: "Generadores de Imágenes / Edición Visual", tools: [
    "Google ai studio: Imágenes",
    "GAMMA: Presentaciones, webs y más",
    "Blinkshot.io: Imágenes ilimitadas con API",
    "Freep!k.com: Imágenes gratuitas y premium",
    "Flux playground: Fotos e imágenes avanzadas",
    "Recraft: Remove/replace backgrounds",
    "Alpina: Mezcla imágenes",
    "Dreamina ai: Imágenes tipo Canva",
    "Meta: Imágenes y videos",
    "Playgroundai: Genera imágenes",
    "Musavir.ai: Foto de perfil",
    "Opencart: Generador de imágenes",
    "Invidio.ai: Videos y subtítulos IA",
    "KREA: IA de imágenes y edición",
    "Raphael AI: Imágenes ilimitadas",
    "Heygen ai: Añade productos a imagen",
    "Lovart.ai: Diseños espectaculares IA",
    "Freep!k ai: Fotos pro para CV"
  ]},
  { emoji: "🖼️", name: "Videos, Animación y Presentaciones", tools: [
    "WAN.video: Crea videos",
    "Prezi: Presentaciones",
    "Make influencer: Videos con IA",
    "Pika.art: Video+voz IA",
    "PIKA.ART: Videos con imágenes IA",
    "Invidio AI: Hace videos",
    "Qwen2.5-Plus: IA de imágenes",
    "TV.garden: TV mundial por IA",
    "Labs.google/flow: Video con Veo 3 fast",
    "Style.io: Videos por diseño",
    "Opusclip: Clips con subtítulos",
    "Skyeels.ai: Videos gratis",
    "Vidau: Remix de video de producto",
    "Snipzy.dev: Animaciones web",
    "Hedra: Avatares IA",
    "Omnihuman1.org: Videos IA realistas",
    "Apop AI: Modelos IA para Instagram",
    "Celebify AI: IA de personajes"
  ]},
  { emoji: "📝", name: "Automatización, Programación y Codificación", tools: [
    "Bolt.new: Programar juegos IA",
    "Theyseeyourphotos.com: Info de fotos IA",
    "Codepen.io/pen: Probar código live",
    "Afindy.com: Directorio IA y precios",
    "NINJACHAT.AI: IA simultáneas",
    "V0.dev ai: Código+UI IA",
    "Softgen.ai: Apps en tiempo real",
    "Webdraw.io: Dibuja y haz webs reales",
    "Blackbox.ai: Páginas eficientes IA",
    "Prompt genie: Generador de prompts",
    "Prompt-genie.com: Prompts detallados",
    "Copycode.ai: Prompts desde screenshot",
    "Magicloops.dev: Apps por prompt",
    "Cssgridgenerator.io: Grids por IA"
  ]},
  { emoji: "🗃️", name: "Organización, Base de Datos, Excel y PDFs", tools: [
    "Numerous.ai: Excel IA",
    "Rows ai: Google Ads, Stripe en Excel",
    "DashDash AI: Excel+GPT",
    "Sheets+AI: Tablas IA",
    "Airtable.com: Sheets IA y webhooks",
    "Typedai.com: Tests PDF",
    "Pdf2-anki.com: Cuadros y resumen PDF",
    "Chatpdf.com: Chatea con PDF",
    "Notebooklm: Podcast de PDF",
    "NotebookLM: Resúmenes de archivo",
    "Studyfetch.com: PDF a video y notas",
    "NAPKIN.AI: Presentaciones, mapas mentales",
    "Classcentral.com: Certificados IA"
  ]},
  { emoji: "💬", name: "Chatbots, Asistentes y Automatización de Texto", tools: [
    "Chatgpt.com/tasks: Programa tareas",
    "Chatbot.com: Chatbot de tu web",
    "Chatbotstudio.com: Chatbot IA",
    "ChatLLM TEAMS: Informes IA PDF",
    "Operator.chatgpt.com: Memes web",
    "Theresanaiforthat.com: IA por función"
  ]},
  { emoji: "🗂️", name: "Directorios y Herramientas Multiuso", tools: [
    "Transitionallhooks.com: Hooks para reels",
    "Afindy.com: Directorio IA y precios",
    "Tinywow.com: Todas las tools (PDF a JPEG, etc)"
  ]},
  { emoji: "🔊", name: "Audio, TTS y Clonación de Voz", tools: [
    "Ttsfree.com: Texto a voz gratis",
    "Fish.audio: Clona tu voz",
    "Openai.fm: Voces realistas",
    "Lovevoice.AI: +100 voces IA",
    "Character.AI: Clonación de voz",
    "Zonos.live: Clona voces"
  ]},
  { emoji: "🛠️", name: "Herramientas de Utilidad y Extensiones", tools: [
    "Shell:recent: Apps recientes",
    "Wintoys: Control de Windows",
    "Volume Master: Extensión subir volumen",
    "VPN: Gamivo.com/cart",
    "File.pizza: Comparte archivos",
    "WindhawkK.net: Mejor acceso a archivos",
    "Spacedesk: Tu móvil como monitor",
    "Cloude code extension: VS code"
  ]},
  { emoji: "🌐", name: "Creación de Páginas Web y Frontend", tools: [
    "LandingSite.ai: Web por descripción",
    "DeepSite: Crea webs en vivo",
    "Emergent.ai: Explica webs",
    "Templo.io: Plantillas editables web",
    "Readdy.ai: Web instantánea",
    "Qwen3: Web dev IA",
    "Opening.fly.dev.ai: Web de screenshot",
    "Webdraw.io: Webs desde dibujos"
  ]},
  { emoji: "💡", name: "Otras Funciones Útiles y Extra", tools: [
    "shell:appsfolder: Lista apps PC",
    "NCPA.CPL: Ajustes de red",
    "Mrt: Revisar malware",
    "N8NCHAT.COM: Automatización OpenAI",
    "Consensus, scispace, tyxz: IAs académicas",
    "ZZZ CODE AI: Código por IA"
  ]},
  { emoji: "👨‍💻", name: "Sistemas Operativos y Escritorio", tools: [
    "OptiOS-optiprojects: SO liviano 2GB",
    "Puter.com: SO web en navegador"
  ]},
  { emoji: "🔗", name: "Extra: Otros, Redes y Más", tools: [
    "Partyrock: Apps IA",
    "Skipkids.com: Descargar videos YouTube",
    "Buildcores.com: PC 3D y FPS por IA",
    "Margave.dev: Office gratis"
  ]}
];

// ======= UI Interacción =======
const catMenu = document.getElementById("category-menu");
const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const toolsPanel = document.getElementById("tools-panel");
const closePanelBtn = document.getElementById("close-panel");
const catList = document.getElementById("cat-list");
const toolsTitle = document.getElementById("tools-title");
const toolsList = document.getElementById("tools-list");

// Renderiza categorías
IA_CATEGORIES.forEach((cat,i)=>{
  let li = document.createElement("li");
  li.innerHTML = `<span style="font-size:1.6em">${cat.emoji}</span> <span>${cat.name}</span>`;
  li.addEventListener("click", ()=>{
    showTools(i);
    catMenu.classList.add("hidden");
    setTimeout(()=>toolsPanel.classList.remove("hidden"),100);
  });
  catList.appendChild(li);
});

// Mostrar herramientas
function showTools(idx){
  toolsTitle.textContent = `${IA_CATEGORIES[idx].emoji} ${IA_CATEGORIES[idx].name}`;
  toolsList.innerHTML = "";
  IA_CATEGORIES[idx].tools.forEach(t=>{
    let li = document.createElement("li"); li.textContent = t; toolsList.appendChild(li);
  });
}

// Botones menú
openMenuBtn.onclick = ()=> catMenu.classList.remove("hidden");
closeMenuBtn.onclick = ()=> catMenu.classList.add("hidden");
closePanelBtn.onclick = ()=> toolsPanel.classList.add("hidden");
document.addEventListener("keydown",e=>{
  if(e.key==="Escape") {catMenu.classList.add("hidden");toolsPanel.classList.add("hidden");}
});

// Animación hover/click en bloques 3D
document.getElementById('three-canvas').addEventListener("pointerdown", on3DClick);
function on3DClick(evt){
  let mouse = new THREE.Vector2(
    (evt.clientX/window.innerWidth)*2-1,
    -(evt.clientY/window.innerHeight)*2+1
  );
  let raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, window.iglooScene.camera);
  let intersects = raycaster.intersectObjects(iglooBlocks);
  if(intersects.length){
    let block = intersects[0].object;
    // Animación bloque y panel
    gsap.to(block.scale, {x:1.16,y:1.12,z:1.18,duration:0.19,yoyo:true,repeat:1});
    showTools(block.categoryIndex);
    toolsPanel.classList.remove("hidden");
  }
}

// Efecto hover/cursor pointer en bloques 3D
document.getElementById('three-canvas').addEventListener("pointermove", on3DHover);
function on3DHover(evt){
  let mouse = new THREE.Vector2(
    (evt.clientX/window.innerWidth)*2-1,
    -(evt.clientY/window.innerHeight)*2+1
  );
  let raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, window.iglooScene.camera);
  let intersects = raycaster.intersectObjects(iglooBlocks);
  document.body.style.cursor = intersects.length ? "pointer" : "";
}

// Sound Toggle
let soundOn = false;
const soundControl = document.getElementById("sound-control");
soundControl.onclick = ()=>{
  soundOn = !soundOn;
  soundControl.textContent = soundOn ? "🔊 Sound: On" : "🔊 Sound: Off";
  // Aquí podrías añadir lógica para sonido real (audio de ambiente ártico, etc)
};
