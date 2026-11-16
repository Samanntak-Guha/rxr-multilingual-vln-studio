/***********************************************************************
 * RxR Multilingual VLN Agent — Custom Map & Room Studio
 * Frontend Application Engine (Modularized & Backend Integrated)
 ***********************************************************************/

/***********************************************************************
 * 1. PRELOADED RXR MULTILINGUAL MAPS & DATASETS
 ***********************************************************************/
const DEFAULT_MAPS = {
    "mp3d_house_a": {
        id: "mp3d_house_a",
        name: "Matterport3D House A (Residential)",
        rooms: [
            { id: "r_living", name: "Living Room", name_hi: "बैठक कक्ष", name_te: "లివింగ్ రూమ్", x: 60, y: 50, w: 220, h: 160, color: "#6366f1", landmarks: ["Sofa", "Smart TV", "Coffee Table"] },
            { id: "r_hallway", name: "Central Hallway", name_hi: "गलियारा", name_te: "హాల్‌వే", x: 310, y: 120, w: 170, h: 150, color: "#8b5cf6", landmarks: ["Wall Painting", "Coat Rack"] },
            { id: "r_kitchen", name: "Kitchen", name_hi: "रसोईघर", name_te: "వంటగది", x: 520, y: 45, w: 210, h: 155, color: "#10b981", landmarks: ["Fridge", "Island Counter", "Oven"] },
            { id: "r_dining", name: "Dining Room", name_hi: "भोजन कक्ष", name_te: "డైనింగ్ రూమ్", x: 520, y: 235, w: 210, h: 150, color: "#f59e0b", landmarks: ["Dining Table", "Chandelier"] },
            { id: "r_bedroom", name: "Master Bedroom", name_hi: "शयनकक्ष", name_te: "బెడ్ రూమ్", x: 60, y: 245, w: 220, h: 145, color: "#ec4899", landmarks: ["King Bed", "Wardrobe", "Lamp"] },
            { id: "r_study", name: "Study Room", name_hi: "अध्ययन कक्ष", name_te: "స్టడీ రూమ్", x: 310, y: 295, w: 170, h: 110, color: "#06b6d4", landmarks: ["Bookshelf", "Study Desk"] }
        ],
        nodes: [
            { id: "vp_1", x: 135, y: 125, roomId: "r_living", label: "Living West" },
            { id: "vp_2", x: 230, y: 145, roomId: "r_living", label: "Living East" },
            { id: "vp_3", x: 395, y: 190, roomId: "r_hallway", label: "Hall Center" },
            { id: "vp_4", x: 615, y: 125, roomId: "r_kitchen", label: "Kitchen Main" },
            { id: "vp_5", x: 620, y: 310, roomId: "r_dining", label: "Dining Table" },
            { id: "vp_6", x: 170, y: 315, roomId: "r_bedroom", label: "Bedroom Center" },
            { id: "vp_7", x: 395, y: 350, roomId: "r_study", label: "Study Desk" }
        ],
        edges: [
            ["vp_1", "vp_2"],
            ["vp_2", "vp_3"],
            ["vp_3", "vp_4"],
            ["vp_4", "vp_5"],
            ["vp_3", "vp_5"],
            ["vp_3", "vp_6"],
            ["vp_1", "vp_6"],
            ["vp_3", "vp_7"]
        ],
        presets: {
            en: [
                {
                    title: "Living Room → Kitchen (via Hallway)",
                    text: "Start in the Living Room near the Sofa, walk east into the Central Hallway, then turn left and stop inside the Kitchen near the Fridge.",
                    start: "vp_1",
                    goal: "vp_4"
                },
                {
                    title: "Master Bedroom → Dining Room",
                    text: "Exit the Master Bedroom, pass through the Central Hallway, and enter the Dining Room beside the Dining Table.",
                    start: "vp_6",
                    goal: "vp_5"
                },
                {
                    title: "Kitchen → Study Room Desk",
                    text: "Walk out of the Kitchen into the Central Hallway and head south into the Study Room near the Bookshelf.",
                    start: "vp_4",
                    goal: "vp_7"
                }
            ],
            hi: [
                {
                    title: "बैठक कक्ष → रसोईघर (Living to Kitchen)",
                    text: "बैठक कक्ष में सोफा के पास से शुरू करें, गलियारे से होते हुए आगे बढ़ें और रसोईघर में फ्रिज के पास रुकें।",
                    start: "vp_1",
                    goal: "vp_4"
                },
                {
                    title: "शयनकक्ष → भोजन कक्ष (Bedroom to Dining)",
                    text: "शयनकक्ष से बाहर निकलें, मुख्य गलियारे को पार करें और भोजन कक्ष में डाइनिंग टेबल के पास रुकें।",
                    start: "vp_6",
                    goal: "vp_5"
                }
            ],
            te: [
                {
                    title: "లివింగ్ రూమ్ → వంటగది (Living to Kitchen)",
                    text: "లివింగ్ రూమ్‌లో సోఫా దగ్గర ప్రారంభించి, హాల్‌వే గుండా నడిచి, వంటగదిలో ఫ్రిజ్ దగ్గర ఆగండి.",
                    start: "vp_1",
                    goal: "vp_4"
                },
                {
                    title: "బెడ్ రూమ్ → స్టడీ రూమ్ (Bedroom to Study)",
                    text: "బెడ్ రూమ్ నుండి బయటకు వెళ్లి, హాల్‌వే మీదుగా స్టడీ రూమ్‌లోని బుక్‌షెల్ఫ్ దగ్గరకు వెళ్లండి.",
                    start: "vp_6",
                    goal: "vp_7"
                }
            ]
        }
    },
    "smart_campus_lab": {
        id: "smart_campus_lab",
        name: "Smart Robotics Campus — Floor 1",
        rooms: [
            { id: "r_lobby", name: "Main Lobby", name_hi: "मुख्य लॉबी", name_te: "మెయిన్ లాబీ", x: 55, y: 140, w: 175, h: 160, color: "#6366f1", landmarks: ["Reception Desk", "Kiosk"] },
            { id: "r_corridor", name: "Tech Corridor", name_hi: "कॉरिडोर", name_te: "కారిడార్", x: 265, y: 155, w: 220, h: 130, color: "#8b5cf6", landmarks: ["Notice Board", "Water Cooler"] },
            { id: "r_ailab", name: "AI Vision Lab", name_hi: "एआई विज़न लैब", name_te: "AI ల్యాబ్", x: 265, y: 25, w: 220, h: 105, color: "#06b6d4", landmarks: ["GPU Cluster", "Whiteboard"] },
            { id: "r_drone", name: "Drone Arena", name_hi: "ड्रोन एरीना", name_te: "డ్రోన్ ఎరీనా", x: 520, y: 50, w: 215, h: 155, color: "#10b981", landmarks: ["Motion Capture Net", "Quadcopter"] },
            { id: "r_seminar", name: "Seminar Hall", name_hi: "सेमिनार हॉल", name_te: "సెమినార్ హాల్", x: 520, y: 235, w: 215, h: 150, color: "#f59e0b", landmarks: ["Projector Screen", "Podium"] }
        ],
        nodes: [
            { id: "vp_1", x: 140, y: 220, roomId: "r_lobby", label: "Lobby Entry" },
            { id: "vp_2", x: 375, y: 220, roomId: "r_corridor", label: "Corridor Hub" },
            { id: "vp_3", x: 375, y: 78, roomId: "r_ailab", label: "AI Lab Center" },
            { id: "vp_4", x: 625, y: 125, roomId: "r_drone", label: "Drone Test Pad" },
            { id: "vp_5", x: 625, y: 310, roomId: "r_seminar", label: "Seminar Stage" }
        ],
        edges: [
            ["vp_1", "vp_2"],
            ["vp_2", "vp_3"],
            ["vp_2", "vp_4"],
            ["vp_3", "vp_4"],
            ["vp_2", "vp_5"]
        ],
        presets: {
            en: [
                {
                    title: "Main Lobby → Drone Arena",
                    text: "Leave the Main Lobby, move straight through the Tech Corridor, and enter the Drone Arena near the Quadcopter.",
                    start: "vp_1",
                    goal: "vp_4"
                },
                {
                    title: "AI Vision Lab → Seminar Hall",
                    text: "Step out of the AI Vision Lab into the Tech Corridor and proceed south-east into the Seminar Hall.",
                    start: "vp_3",
                    goal: "vp_5"
                }
            ],
            hi: [
                {
                    title: "मुख्य लॉबी → ड्रोन एरीना",
                    text: "मुख्य लॉबी से शुरू करें, कॉरिडोर से आगे बढ़ें और ड्रोन एरीना में रुकें।",
                    start: "vp_1",
                    goal: "vp_4"
                }
            ],
            te: [
                {
                    title: "మెయిన్ లాబీ → డ్రోన్ ఎరీనా",
                    text: "మెయిన్ లాబీ నుండి బయలుదేరి కారిడార్ గుండా డ్రోన్ ఎరీనాకు చేరుకోండి.",
                    start: "vp_1",
                    goal: "vp_4"
                }
            ]
        }
    }
};

/***********************************************************************
 * 2. APPLICATION STATE
 ***********************************************************************/
let mapsStore = JSON.parse(JSON.stringify(DEFAULT_MAPS));
let activeMapId = "mp3d_house_a";
let currentMode = "simulator"; // 'simulator' | 'editor'
let currentLang = "en"; // 'en' | 'hi' | 'te'
let editorTool = "select"; // 'select' | 'addRoom' | 'addNode' | 'connectEdge'
let isBackendConnected = false;

// Agent & Trajectory State
let agentState = {
    currentNodeId: "vp_1",
    x: 135,
    y: 125,
    targetX: 135,
    targetY: 125,
    headingDeg: 0,
    startNodeId: "vp_1",
    goalNodeId: "vp_4",
    intermediateConstraints: [], // Array of intermediate room or viewpoint constraints
    manualDropdownOverride: false, // Flag to prevent stale parser overwriting manual selections
    plannedPath: [], // Array of node IDs
    executedNodes: ["vp_1"],
    stepIndex: 0,
    isPlaying: false,
    isWalking: false, // Smooth physical walking animation active
    onHopComplete: null, // Callback upon arriving at target node
    stepTimer: null,
    timer: null,
    activeTokenIndex: 0,
    walkingPace: 1.0, // Multiplier: 0.4x (Slow) to 3.0x (Fast)
    walkBobPhase: 0
};

// Interactive Canvas Editor State
let dragTarget = null; // { type: 'room'|'node', id: string, offsetX: number, offsetY: number }
let selectedEntity = null; // { type: 'room'|'node', id: string }
let edgeSourceNodeId = null;
let isConnectingDrag = false;
let mousePos = { x: 0, y: 0 };

const floorplanCanvas = document.getElementById("floorplanCanvas");
const ctx = floorplanCanvas ? floorplanCanvas.getContext("2d") : null;

/***********************************************************************
 * 2B. OPTIMIZED THREE.JS MATTERPORT 3D PANORAMA & DOLLHOUSE STATE
 ***********************************************************************/
const SCALE_3D = 0.045; // 1 canvas pixel = 0.045 meters in 3D world
const WALL_HEIGHT_3D = 3.1; // 3.1m ceiling height
let threeState = {
    scene: null,
    camera: null,
    renderer: null,
    worldGroup: null,
    dynamicTrajectoryGroup: null,
    agentMeshGroup: null,
    clickableHotspots: [], // Includes viewpoint nodes, room floor plates, and 3D doors
    hotspotRingsById: {},  // Fast O(1) lookup for updating node highlight colors without scene rebuild
    roomFloorsById: {},    // Fast O(1) lookup for highlighting active room floor
    doorPoints2D: [],      // Computed 2D doorway locations for rendering on 2D map as well
    wallMaterials: [],
    labelAnchors: [], // { pos: THREE.Vector3, text: string, type: 'room'|'node'|'landmark'|'door', color: string }
    cameraMode: "panorama", // 'panorama' | 'dollhouse' | 'map2d'
    wallOpacity: 0.38, // Rich architectural wall visibility (default 0.38)
    autoRotate: false,
    // Panorama First-Person Look State
    panoYaw: 0, // radians
    desiredPanoYaw: 0,
    panoPitch: -0.06, // radians
    panoFov: 75,
    // Dollhouse Orbit Camera State
    orbitTheta: 0.65,
    orbitPhi: 0.92,
    orbitRadius: 22,
    orbitTarget: null,
    orbitDesiredTarget: null,
    // Smooth Camera Interpolation & Waypoint Navigation
    camCurrentPos: null,
    camDesiredPos: null,
    walkWaypoints: [],
    currentWaypointIndex: 0,
    // Pointer interaction state
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    pointerDownPos: { x: 0, y: 0 },
    mapCenter2D: { x: 380, y: 215 },
    lastLabelUpdateMs: 0,
    rebuildScheduled: false
};

if (typeof THREE !== "undefined") {
    threeState.orbitTarget = new THREE.Vector3(0, 0, 0);
    threeState.orbitDesiredTarget = new THREE.Vector3(0, 0, 0);
    threeState.camCurrentPos = new THREE.Vector3(0, 1.65, 0);
    threeState.camDesiredPos = new THREE.Vector3(0, 1.65, 0);
}

/***********************************************************************
 * 2C. BACKEND INTEGRATION LAYER
 ***********************************************************************/
async function checkBackendConnection() {
    try {
        const resp = await fetch("/api/health", { cache: "no-store" });
        if (resp.ok) {
            const data = await resp.json();
            setBackendStatus(true, `Backend: Online (${data.service || "Connected"})`);
            return true;
        }
    } catch (e) {
        // Backend offline or running in standalone file mode
    }
    setBackendStatus(false, "Standalone Mode");
    return false;
}

function setBackendStatus(online, label) {
    isBackendConnected = online;
    const badge = document.getElementById("backendStatusBadge");
    const dot = document.getElementById("backendDot");
    const txt = document.getElementById("backendStatusText");
    if (!badge || !dot || !txt) return;

    if (online) {
        badge.className = "hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono rounded-full border backend-badge-online";
        dot.className = "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse";
        txt.textContent = label;
    } else {
        badge.className = "hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono rounded-full border backend-badge-offline";
        dot.className = "w-1.5 h-1.5 rounded-full bg-amber-400";
        txt.textContent = label;
    }
}

async function loadMapsFromBackend() {
    try {
        const resp = await fetch("/api/maps");
        if (resp.ok) {
            const serverMaps = await resp.json();
            if (serverMaps && Object.keys(serverMaps).length > 0) {
                mapsStore = serverMaps;
                if (mapsStore["mp3d_house_a"]) mapsStore["mp3d_house_a"].addedToSimulator = true;
                if (mapsStore["smart_campus_lab"]) mapsStore["smart_campus_lab"].addedToSimulator = true;
                populateMapSelector();
                if (!mapsStore[activeMapId]) {
                    activeMapId = Object.keys(mapsStore)[0];
                }
                loadMap(activeMapId);
                return;
            }
        }
    } catch (err) {
        console.warn("Backend API unavailable, using built-in maps data.", err);
    }
}

async function syncMapToBackend(mapObj) {
    if (!mapObj || !mapObj.id) return;
    try {
        await fetch(`/api/maps/${mapObj.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(mapObj)
        });
    } catch (err) {
        // Silent local fallback
    }
}

/***********************************************************************
 * 3. INITIALIZATION & UI SETUP
 ***********************************************************************/
window.onload = async function () {
    initThreeMatterportEngine();
    populateMapSelector();
    loadMap(activeMapId);
    setupCanvasEvents();
    handleResize();
    window.addEventListener("resize", handleResize);
    requestAnimationFrame(animateThreeLoop);

    // Check backend connection & synchronize maps
    const online = await checkBackendConnection();
    if (online) {
        await loadMapsFromBackend();
    }
};

function handleResize() {
    const stage = document.getElementById("unifiedStageWrapper");
    const w = (stage && stage.clientWidth > 50) ? stage.clientWidth : 800;
    const h = (stage && stage.clientHeight > 50) ? stage.clientHeight : 500;

    if (floorplanCanvas) {
        floorplanCanvas.width = w;
        floorplanCanvas.height = h;
    }

    if (threeState.renderer && threeState.camera) {
        threeState.renderer.setSize(w, h);
        threeState.camera.aspect = w / h;
        threeState.camera.updateProjectionMatrix();
    }
    renderCanvas();
}

function updateWalkingPace(val) {
    const pace = Math.max(0.3, Math.min(2.5, parseFloat(val) || 1.0));
    agentState.walkingPace = pace;

    const slider = document.getElementById("walkingPaceSlider");
    if (slider && parseFloat(slider.value) !== pace) slider.value = pace;

    const label = document.getElementById("walkingPaceLabel");
    if (label) label.textContent = `${pace.toFixed(1)}x`;

    const quickSel = document.getElementById("quickPaceSelect");
    if (quickSel) {
        const opts = Array.from(quickSel.options);
        const match = opts.find(o => Math.abs(parseFloat(o.value) - pace) < 0.15);
        if (match) quickSel.value = match.value;
    }

    const fovText = document.getElementById("hud3DFovText");
    if (fovText) {
        fovText.textContent = `FOV: ${Math.round(threeState.panoFov)}° | Pace: ${pace.toFixed(1)}x`;
    }
}

function onToggleVisualLayers() {
    renderCanvas();
    rebuild3DMatterportScene();
}

function getActiveMap() {
    return mapsStore[activeMapId] || DEFAULT_MAPS[activeMapId] || Object.values(mapsStore)[0];
}

function showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const toast = document.createElement("div");
    const colors = {
        info: "border-[#55BFD0]/50 bg-[#24292B] text-[#F0EEE7]",
        success: "border-[#72C9A2]/50 bg-[#24292B] text-[#F0EEE7]",
        warning: "border-[#E5AD69]/50 bg-[#24292B] text-[#F0EEE7]",
        warn: "border-[#E5AD69]/50 bg-[#24292B] text-[#F0EEE7]",
        error: "border-[#D87979]/50 bg-[#24292B] text-[#F0EEE7]"
    };
    const icons = {
        info: "fa-solid fa-circle-info text-[#55BFD0]",
        success: "fa-solid fa-circle-check text-[#72C9A2]",
        warning: "fa-solid fa-triangle-exclamation text-[#E5AD69]",
        warn: "fa-solid fa-triangle-exclamation text-[#E5AD69]",
        error: "fa-solid fa-circle-xmark text-[#D87979]"
    };
    toast.className = `px-4 py-2.5 rounded-lg border shadow-lg text-xs font-medium flex items-center gap-2.5 transition-all duration-300 ${colors[type] || colors.info}`;
    toast.innerHTML = `<i class="${icons[type] || icons.info}"></i><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

function updateMapSimStatusBadge() {
    const map = getActiveMap();
    const badge = document.getElementById("mapSimStatusBadge");
    const btnText = document.getElementById("btnAddMapToSimText");
    const btn = document.getElementById("btnAddMapToSim");
    if (!badge || !map) return;

    if (map.addedToSimulator) {
        badge.className = "px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40";
        badge.textContent = "Active in Simulator";
        if (btnText) btnText.textContent = "Re-Sync Map to Simulator";
        if (btn) btn.className = "w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold text-xs shadow-md shadow-emerald-600/30 flex items-center justify-center gap-2 transition";
    } else {
        badge.className = "px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40";
        badge.textContent = "Draft (Not in Simulator)";
        if (btnText) btnText.textContent = "Add Map to VLN Simulator";
        if (btn) btn.className = "w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-xs shadow-md shadow-indigo-600/30 flex items-center justify-center gap-2 transition";
    }
}

function generateDefaultPresetsForMap(map) {
    if (!map || !map.rooms || map.rooms.length === 0 || !map.nodes || map.nodes.length === 0) return;
    const rStart = map.rooms[0];
    const rGoal = map.rooms[map.rooms.length - 1];
    const nStart = map.nodes.find(n => n.roomId === rStart.id) || map.nodes[0];
    const nGoal = map.nodes.find(n => n.roomId === rGoal.id) || map.nodes[map.nodes.length - 1];

    map.presets = {
        en: [{
            title: `${rStart.name} → ${rGoal.name}`,
            text: `Start in the ${rStart.name}, follow the hallway corridor, and reach the ${rGoal.name}.`,
            start: nStart.id,
            goal: nGoal.id
        }],
        hi: [{
            title: `${rStart.name} → ${rGoal.name}`,
            text: `${rStart.name} से शुरू करें और ${rGoal.name} तक जाएं।`,
            start: nStart.id,
            goal: nGoal.id
        }],
        te: [{
            title: `${rStart.name} → ${rGoal.name}`,
            text: `${rStart.name} నుండి మొదలుపెట్టి ${rGoal.name} కి చేరుకోండి.`,
            start: nStart.id,
            goal: nGoal.id
        }]
    };
}

function addCurrentMapToSimulator() {
    const map = getActiveMap();
    if (!map) return;

    if (!map.rooms || map.rooms.length === 0) {
        showToast("Please add at least 1 room before adding this map to the simulator.", "warn");
        return;
    }
    if (!map.nodes || map.nodes.length === 0) {
        showToast("Please add at least 1 viewpoint node before adding this map to the simulator.", "warn");
        return;
    }

    // Mark as added to simulator
    map.addedToSimulator = true;

    // Generate presets if empty
    if (!map.presets || !map.presets.en || map.presets.en.length === 0) {
        generateDefaultPresetsForMap(map);
    }

    if (!agentState.startNodeId || !map.nodes.some(n => n.id === agentState.startNodeId)) {
        agentState.startNodeId = map.nodes[0].id;
    }
    if (!agentState.goalNodeId || !map.nodes.some(n => n.id === agentState.goalNodeId)) {
        agentState.goalNodeId = map.nodes[map.nodes.length - 1].id;
    }
    agentState.currentNodeId = agentState.startNodeId;
    agentState.executedNodes = [agentState.startNodeId];
    agentState.plannedPath = computeShortestPath(agentState.startNodeId, agentState.goalNodeId);

    updateMapSimStatusBadge();
    populateMapSelector();
    syncMapToBackend(map);
    showToast(`🚀 Map "${map.name}" has been added to VLN Simulator!`, "success");
    appendActionLog(`[DEPLOY] Map "${map.name}" added to VLN Simulator.`);

    setTimeout(() => {
        switchMode("simulator");
    }, 400);
}

function populateMapSelector() {
    const sel = document.getElementById("mapSelector");
    if (!sel) return;
    sel.innerHTML = "";
    sel.style.backgroundColor = "#0f172a";
    sel.style.color = "#f8fafc";
    sel.style.colorScheme = "dark";

    const allMaps = Object.values(mapsStore);
    // In simulator mode, ONLY show maps that have been added to simulator
    // In editor mode, show all maps so user can build any draft
    const availableMaps = currentMode === "simulator"
        ? allMaps.filter(m => m.addedToSimulator)
        : allMaps;

    availableMaps.forEach(m => {
        const opt = document.createElement("option");
        opt.value = m.id;
        const tag = (currentMode === "editor" && !m.addedToSimulator) ? " [Draft]" : "";
        opt.textContent = `${m.name}${tag}`;
        opt.style.backgroundColor = "#0f172a";
        opt.style.color = "#f8fafc";
        if (m.id === activeMapId) opt.selected = true;
        sel.appendChild(opt);
    });

    if (availableMaps.length > 0 && !availableMaps.some(m => m.id === activeMapId)) {
        loadMap(availableMaps[0].id);
    }

    sel.onchange = (e) => loadMap(e.target.value);
}

function loadMap(mapId) {
    stopSimulationTimer();
    activeMapId = mapId;
    const map = getActiveMap();
    if (!map) return;

    document.getElementById("activeMapTitle").textContent = map.name;
    updateMapStatsHeader();
    updateMapSimStatusBadge();
    populateStartGoalDropdowns();
    populatePresetsDropdown();
    populateLinkDropdowns();
    renderRoomsListInEditor();

    // Set initial start/goal
    if (map.nodes && map.nodes.length > 0) {
        agentState.startNodeId = map.nodes[0].id;
        agentState.goalNodeId = map.nodes[map.nodes.length - 1].id;
        const startSel = document.getElementById("startNodeSelect");
        const goalSel = document.getElementById("goalNodeSelect");
        if (startSel) startSel.value = agentState.startNodeId;
        if (goalSel) goalSel.value = agentState.goalNodeId;
        agentState.plannedPath = computeShortestPath(agentState.startNodeId, agentState.goalNodeId);
    } else {
        agentState.startNodeId = "";
        agentState.goalNodeId = "";
        agentState.currentNodeId = "";
        agentState.plannedPath = [];
        agentState.executedNodes = [];
    }
    applyPresetInstruction();
    resetSimulation();
    rebuild3DMatterportScene();
}

function updateMapStatsHeader() {
    const map = getActiveMap();
    if (!map) return;
    document.getElementById("activeMapStats").textContent =
        `(${map.rooms.length} Rooms • ${map.nodes.length} Viewpoints • ${map.edges.length} Edges)`;
    document.getElementById("roomCountLabel").textContent = map.rooms.length;
    renderQuickRoomJumpBar();
    populateLinkDropdowns();
}

function hasDirectDoorBetweenRooms(roomAId, roomBId) {
    const map = getActiveMap();
    if (!map || !roomAId || !roomBId) return false;
    if (roomAId === roomBId) return true;
    return map.edges.some(([uId, vId]) => {
        const u = map.nodes.find(n => n.id === uId);
        const v = map.nodes.find(n => n.id === vId);
        if (!u || !v) return false;
        return (u.roomId === roomAId && v.roomId === roomBId) || (u.roomId === roomBId && v.roomId === roomAId);
    });
}

function renderQuickRoomJumpBar() {
    const bar = document.getElementById("quickRoomJumpBar");
    if (!bar) return;
    const map = getActiveMap();
    if (!map) return;
    const currNode = map.nodes.find(n => n.id === agentState.currentNodeId);
    const activeRoomId = currNode ? currNode.roomId : null;

    bar.innerHTML = "";
    map.rooms.forEach(r => {
        const isCurr = r.id === activeRoomId;
        const hasDoor = activeRoomId ? hasDirectDoorBetweenRooms(activeRoomId, r.id) : true;
        const candidateNode = map.nodes.find(n => n.roomId === r.id);
        const hasPath = candidateNode && currNode ? computeShortestPath(currNode.id, candidateNode.id).length > 1 : false;

        const btn = document.createElement("button");

        if (isCurr) {
            btn.className = "px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[#2B3234] text-[#B8D96B] border border-[#B8D96B]/60 shrink-0 transition flex items-center gap-1.5";
            btn.innerHTML = `<i class="fa-solid fa-location-dot text-[10px] text-[#B8D96B]"></i><span>${r.name}</span>`;
            btn.title = "Current Room";
        } else if (hasDoor) {
            btn.className = "px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#1E2325] text-[#55BFD0] border border-[#55BFD0]/50 hover:bg-[#2B3234] shrink-0 transition flex items-center gap-1.5";
            btn.innerHTML = `<i class="fa-solid fa-door-open text-[10px] text-[#55BFD0]"></i><span>${r.name}</span>`;
            btn.title = `Direct doorway connected to ${r.name}`;
        } else if (hasPath) {
            btn.className = "px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#1E2325] text-[#72C9A2] border border-[#394144] hover:border-[#72C9A2]/50 shrink-0 transition flex items-center gap-1.5";
            btn.innerHTML = `<i class="fa-solid fa-route text-[10px] text-[#72C9A2]"></i><span>${r.name}</span>`;
            btn.title = `Navigate connected path to ${r.name}`;
        } else {
            btn.className = "px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#171A1C] text-[#777F7D] border border-[#394144] opacity-50 shrink-0 transition flex items-center gap-1.5";
            btn.innerHTML = `<i class="fa-solid fa-lock text-[10px]"></i><span>${r.name}</span>`;
            btn.title = `No connected path from current room`;
        }

        btn.onclick = () => switchPanoramaToRoom(r.id);
        bar.appendChild(btn);
    });
}

function switchPanoramaToRoom(roomId) {
    const map = getActiveMap();
    if (!map) return;
    const room = map.rooms.find(r => r.id === roomId);
    if (!room) return;

    let targetNode = map.nodes.find(n => n.roomId === roomId);
    if (!targetNode && map.nodes.length > 0) {
        const rcx = room.x + room.w / 2;
        const rcy = room.y + room.h / 2;
        targetNode = map.nodes.reduce((best, n) =>
            Math.hypot(n.x - rcx, n.y - rcy) < Math.hypot(best.x - rcx, best.y - rcy) ? n : best
        , map.nodes[0]);
    }

    if (targetNode) {
        onClicked3DHotspot(targetNode.id, true, false);
    }
}

function switchMode(mode) {
    currentMode = mode;
    const simBtn = document.getElementById("modeSimBtn");
    const editBtn = document.getElementById("modeEditBtn");
    const simPanel = document.getElementById("simulatorPanel");
    const editPanel = document.getElementById("editorPanel");

    if (mode === "simulator") {
        const map = getActiveMap();
        // If the current map hasn't been added to simulator, switch to an added map
        if (map && !map.addedToSimulator) {
            const addedMap = Object.values(mapsStore).find(m => m.addedToSimulator);
            if (addedMap) {
                showToast(`"${map.name}" is in Draft mode. Loaded active simulator map "${addedMap.name}".`, "info");
                loadMap(addedMap.id);
            }
        }

        simBtn.className = "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 bg-[#B8D96B] text-[#171A1C] shadow-sm";
        editBtn.className = "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 text-[#A8ADA9] hover:text-[#F0EEE7]";
        simPanel.classList.remove("hidden");
        simPanel.classList.add("flex");
        editPanel.classList.add("hidden");
        editPanel.classList.remove("flex");
        selectedEntity = null;
        edgeSourceNodeId = null;
        document.getElementById("selectedEntityBox").classList.add("hidden");
        populateMapSelector();
        populateStartGoalDropdowns();
    } else {
        editBtn.className = "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 bg-[#789C91] text-[#171A1C] shadow-sm";
        simBtn.className = "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 text-[#A8ADA9] hover:text-[#F0EEE7]";
        editPanel.classList.remove("hidden");
        editPanel.classList.add("flex");
        simPanel.classList.add("hidden");
        simPanel.classList.remove("flex");
        set3DCameraMode("map2d");
        populateMapSelector();
        updateMapSimStatusBadge();
        renderRoomsListInEditor();
    }
    renderCanvas();
}

/***********************************************************************
 * 4. MULTILINGUAL INSTRUCTION & TOKEN ATTENTION ENGINE
 ***********************************************************************/
function setLanguage(lang) {
    currentLang = lang;
    ["en", "hi", "te"].forEach(l => {
        const btn = document.getElementById(`langBtn-${l}`);
        if (!btn) return;
        if (l === lang) {
            btn.className = "px-2.5 py-1 rounded text-xs font-semibold bg-[#B8D96B] text-[#171A1C] transition";
        } else {
            btn.className = "px-2.5 py-1 rounded text-xs font-medium text-[#A8ADA9] hover:text-[#F0EEE7] transition";
        }
    });

    const langNames = {
        en: "English (en-IN / en-US)",
        hi: "Hindi / हिंदी (hi-IN)",
        te: "Telugu / తెలుగు (te-IN)"
    };
    document.getElementById("detectedLangBadge").textContent = langNames[lang];
    populatePresetsDropdown();
    applyPresetInstruction();
    renderCanvas();
}

function populatePresetsDropdown() {
    const map = getActiveMap();
    const select = document.getElementById("presetInstructionSelect");
    if (!select) return;
    select.innerHTML = "";
    const presets = (map && map.presets && map.presets[currentLang]) || [];

    if (presets.length === 0) {
        const opt = document.createElement("option");
        opt.value = "-1";
        opt.textContent = "Custom Instruction (Type your own below)";
        select.appendChild(opt);
        return;
    }

    presets.forEach((p, idx) => {
        const opt = document.createElement("option");
        opt.value = idx;
        opt.textContent = p.title;
        select.appendChild(opt);
    });
}

function applyPresetInstruction() {
    const map = getActiveMap();
    if (!map) return;
    const presets = (map.presets && map.presets[currentLang]) || [];
    const select = document.getElementById("presetInstructionSelect");
    const idx = parseInt(select ? select.value : "0", 10);

    if (presets[idx]) {
        document.getElementById("instructionInput").value = presets[idx].text;
        // Dynamically parse the preset instruction to extract start, destination, and intermediate constraints
        applyParsedInstructionText();
    } else {
        renderTokenAttention(0);
        resetSimulation();
    }
}

const instructionInputEl = document.getElementById("instructionInput");
let instructionParseDebounceTimer = null;
if (instructionInputEl) {
    instructionInputEl.addEventListener("input", () => {
        clearTimeout(instructionParseDebounceTimer);
        instructionParseDebounceTimer = setTimeout(() => {
            applyParsedInstructionText();
        }, 220);
        renderTokenAttention(agentState.stepIndex);
    });
}

function parseMultilingualInstruction(rawText, map) {
    if (!rawText || !map) return null;
    const text = rawText.trim();
    if (!text) return null;

    const lowerText = text.toLowerCase();
    const isHindi = /[\u0900-\u097F]/.test(text);
    const isTelugu = /[\u0C00-\u0C7F]/.test(text);
    const detectedLang = isHindi ? "hi" : (isTelugu ? "te" : "en");

    // Build entity lexicon from active map
    const lexicon = [];

    // 1. Viewpoint Nodes (e.g. vp_1, vp_2, etc.)
    (map.nodes || []).forEach(node => {
        const nodeAliases = [
            node.id.toLowerCase(),
            `viewpoint ${node.id}`.toLowerCase(),
            `node ${node.id}`.toLowerCase(),
            `vp ${node.id.replace('vp_', '')}`.toLowerCase()
        ];
        if (node.label) nodeAliases.push(node.label.toLowerCase());
        lexicon.push({
            type: "node",
            id: node.id,
            nodeId: node.id,
            roomId: node.roomId,
            aliases: nodeAliases.filter(Boolean),
            priority: 100 // Highest priority for exact viewpoint IDs
        });
    });

    // 2. Rooms & Structural Spaces
    (map.rooms || []).forEach(room => {
        const roomAliases = [
            room.name ? room.name.toLowerCase() : null,
            room.id ? room.id.toLowerCase() : null,
            room.name_hi ? room.name_hi.trim() : null,
            room.name_te ? room.name_te.trim() : null
        ].filter(Boolean);

        if (room.name_hi) {
            const hi = room.name_hi.trim();
            roomAliases.push(hi);
            // Oblique inflection in Hindi: masculine nouns ending with -aa (\u093E) inflect to -e (\u0947) before postpositions
            if (hi.endsWith('\u093E')) {
                const stem = hi.slice(0, -1);
                roomAliases.push(stem + '\u0947');     // e.g. गलियारा -> गलियारे
                roomAliases.push(stem + '\u094B\u0902'); // e.g. गलियारों
                roomAliases.push(stem);
            }
        }

        if (room.name_te) {
            const te = room.name_te.trim();
            roomAliases.push(te);
            roomAliases.push(te + 'లో');
            roomAliases.push(te + 'కు');
            roomAliases.push(te + 'కి');
        }

        if (room.name) {
            const clean = room.name.toLowerCase().replace(/[\(\)]/g, '').trim();
            roomAliases.push(clean);

            // Generic aliases
            if (clean.includes("bedroom")) {
                roomAliases.push("bedroom", "bedroom 1", "bedroom1", "bed room", "bed room 1", "bedroom 2", "bedroom2");
            }
            if (clean.includes("hallway") || clean.includes("corridor")) {
                roomAliases.push("hallway", "corridor", "hall", "central hallway", "pathway");
            }
            if (clean.includes("living")) {
                roomAliases.push("living", "living room", "lounge");
            }
            if (clean.includes("kitchen")) {
                roomAliases.push("kitchen");
            }
            if (clean.includes("dining")) {
                roomAliases.push("dining", "dining room");
            }
            if (clean.includes("study")) {
                roomAliases.push("study", "study room", "office");
            }
            if (clean.includes("balcony") || clean.includes("terrace")) {
                roomAliases.push("balcony", "terrace");
            }
            if (clean.includes("bath")) {
                roomAliases.push("bath", "bathroom", "washroom");
            }

            const numM = clean.match(/([a-z]+)\s*(\d+)/i);
            if (numM) {
                roomAliases.push(`${numM[1]} ${numM[2]}`);
                roomAliases.push(`${numM[1]}${numM[2]}`);
            }
        }

        const primaryNode = (map.nodes || []).find(n => n.roomId === room.id);

        lexicon.push({
            type: "room",
            id: room.id,
            nodeId: primaryNode ? primaryNode.id : null,
            roomId: room.id,
            room: room,
            aliases: Array.from(new Set(roomAliases)),
            priority: 50
        });

        // 3. Landmarks in this room
        (room.landmarks || []).forEach(lm => {
            lexicon.push({
                type: "landmark",
                id: lm,
                nodeId: primaryNode ? primaryNode.id : null,
                roomId: room.id,
                room: room,
                aliases: [lm.toLowerCase().trim()],
                priority: 20
            });
        });
    });

    // Find occurrences of lexicon entries in the input text
    const matches = [];
    lexicon.forEach(entry => {
        entry.aliases.forEach(alias => {
            if (!alias || alias.length < 2) return;
            const searchTarget = (isHindi || isTelugu) ? text : lowerText;
            const needle = (isHindi || isTelugu) ? alias : alias.toLowerCase();
            let pos = 0;
            while (pos < searchTarget.length) {
                const idx = searchTarget.indexOf(needle, pos);
                if (idx === -1) break;

                let valid = true;
                if (!isHindi && !isTelugu) {
                    const prevChar = idx > 0 ? searchTarget[idx - 1] : ' ';
                    const nextChar = idx + needle.length < searchTarget.length ? searchTarget[idx + needle.length] : ' ';
                    const boundaryChars = /[\s,.;:!?\-_'"\(\)\[\]\/]/;
                    if (!boundaryChars.test(prevChar) || !boundaryChars.test(nextChar)) {
                        if (entry.type !== "node") {
                            valid = false;
                        }
                    }
                }

                if (valid) {
                    matches.push({
                        entry: entry,
                        alias: needle,
                        startIdx: idx,
                        endIdx: idx + needle.length,
                        priority: entry.priority + needle.length
                    });
                }
                pos = idx + needle.length;
            }
        });
    });

    if (matches.length === 0) return null;

    matches.sort((a, b) => {
        if (a.startIdx !== b.startIdx) return a.startIdx - b.startIdx;
        return b.priority - a.priority;
    });

    const nonOverlapping = [];
    matches.forEach(m => {
        const conflict = nonOverlapping.some(prev =>
            (m.startIdx >= prev.startIdx && m.startIdx < prev.endIdx) ||
            (m.endIdx > prev.startIdx && m.endIdx <= prev.endIdx)
        );
        if (!conflict) {
            nonOverlapping.push(m);
        }
    });

    if (nonOverlapping.length === 0) return null;

    function getContextBefore(m, len = 40) {
        const start = Math.max(0, m.startIdx - len);
        return lowerText.substring(start, m.startIdx);
    }
    function getContextAfter(m, len = 40) {
        const end = Math.min(lowerText.length, m.endIdx + len);
        return lowerText.substring(m.endIdx, end);
    }

    nonOverlapping.forEach(m => {
        const pre = getContextBefore(m);
        const post = getContextAfter(m);

        let role = null;

        if (
            /(?:through|via|past|pathway\s+through|path\s+through|by\s+way\s+of|across|pass\s+through)\s+(?:the\s+)?$/i.test(pre) ||
            /^(?:\s+)?(?:area|corridor|passage)?\s*(?:से\s+होते\s+हुए|के\s+रास्ते|होकर|से\s+होकर|के\s+माध्यम\s+से)/i.test(post) ||
            /^(?:\s+)?(?:గుండా|ద్వారా|మీదుగా|నుండి\s+దాటి)/i.test(post)
        ) {
            role = "intermediate";
        } else if (
            /(?:start(?:\s+in|\s+at|\s+from|\s+near|\s+beside)?|begin(?:\s+in|\s+at|\s+from)?|go\s+from|\bfrom|depart(?:\s+from)?|leave|exit)\s+(?:the\s+)?$/i.test(pre) ||
            /^(?:\s+)?(?:से\s+शुरू|से\s+प्रारंभ|से\s+निकलो|से\s+आरंभ)/i.test(post) ||
            /^(?:\s+)?(?:నుండి\s+ప్రారంభించి|నుంచి\s+ప్రారంభించి|నుండి\s+మొదలుపెట్టి)/i.test(post)
        ) {
            role = "start";
        } else if (
            /(?:to|reach|stop(?:\s+at|\s+in|\s+near)?|go\s+to|enter|head\s+to|arrive\s+at|destination\s+is)\s+(?:the\s+)?$/i.test(pre) ||
            /^(?:\s+)?(?:तक\s+जाएं|पर\s+जाएं|में\s+जाएं|की\s+ओर\s+जाएं|जाएं|पहुंचें|में\s+रुकें|पर\s+रुकें)/i.test(post) ||
            /^(?:\s+)?(?:కు\s+వెళ్ళండి|కి\s+వెళ్ళండి|చేరుకోండి|దగ్గరకు\s+వెళ్ళండి|ఆగండి)/i.test(post)
        ) {
            role = "goal";
        }

        m.role = role;
    });

    let assignedStart = null;
    let assignedGoal = null;
    const assignedIntermediates = [];

    nonOverlapping.forEach(m => {
        if (m.role === "start" && !assignedStart) assignedStart = m;
        else if (m.role === "goal" && !assignedGoal) assignedGoal = m;
        else if (m.role === "intermediate") assignedIntermediates.push(m);
    });

    const unassigned = nonOverlapping.filter(m => m !== assignedStart && m !== assignedGoal && !assignedIntermediates.includes(m));

    if (unassigned.length > 0) {
        if (!assignedStart && !assignedGoal) {
            if (unassigned.length === 1) {
                if (/start/i.test(lowerText) || /शुरू/i.test(text) || /ప్రారంభ/i.test(text)) {
                    assignedStart = unassigned[0];
                } else {
                    assignedGoal = unassigned[0];
                }
            } else if (unassigned.length === 2) {
                assignedStart = unassigned[0];
                assignedGoal = unassigned[1];
            } else {
                assignedStart = unassigned[0];
                assignedGoal = unassigned[unassigned.length - 1];
                for (let i = 1; i < unassigned.length - 1; i++) {
                    assignedIntermediates.push(unassigned[i]);
                }
            }
        } else if (!assignedStart && assignedGoal) {
            const beforeGoal = unassigned.filter(m => m.startIdx < assignedGoal.startIdx);
            if (beforeGoal.length > 0) {
                assignedStart = beforeGoal[0];
                for (let i = 1; i < beforeGoal.length; i++) {
                    assignedIntermediates.push(beforeGoal[i]);
                }
            } else {
                assignedStart = unassigned[0];
            }
        } else if (assignedStart && !assignedGoal) {
            const afterStart = unassigned.filter(m => m.startIdx > assignedStart.startIdx);
            if (afterStart.length > 0) {
                assignedGoal = afterStart[afterStart.length - 1];
                for (let i = 0; i < afterStart.length - 1; i++) {
                    assignedIntermediates.push(afterStart[i]);
                }
            } else {
                assignedGoal = unassigned[0];
            }
        } else {
            unassigned.forEach(m => assignedIntermediates.push(m));
        }
    }

    return {
        detectedLang,
        startNodeId: assignedStart ? assignedStart.entry.nodeId : null,
        goalNodeId: assignedGoal ? assignedGoal.entry.nodeId : null,
        intermediateConstraints: assignedIntermediates.map(m => {
            if (m.entry.type === "node") return m.entry.nodeId;
            if (m.entry.type === "room") return m.entry.room;
            return m.entry.roomId || m.entry.nodeId;
        }).filter(Boolean)
    };
}

function applyParsedInstructionText() {
    const input = document.getElementById("instructionInput");
    if (!input) return;
    const text = input.value.trim();
    const map = getActiveMap();
    if (!map || !text) return;

    const parsed = parseMultilingualInstruction(text, map);
    if (!parsed) return;

    let stateChanged = false;

    if (parsed.startNodeId && map.nodes.some(n => n.id === parsed.startNodeId)) {
        if (agentState.startNodeId !== parsed.startNodeId) {
            agentState.startNodeId = parsed.startNodeId;
            const startSel = document.getElementById("startNodeSelect");
            if (startSel) startSel.value = parsed.startNodeId;
            stateChanged = true;
        }
    }

    if (parsed.goalNodeId && map.nodes.some(n => n.id === parsed.goalNodeId)) {
        if (agentState.goalNodeId !== parsed.goalNodeId) {
            agentState.goalNodeId = parsed.goalNodeId;
            const goalSel = document.getElementById("goalNodeSelect");
            if (goalSel) goalSel.value = parsed.goalNodeId;
            stateChanged = true;
        }
    }

    agentState.intermediateConstraints = parsed.intermediateConstraints || [];

    if (stateChanged || agentState.intermediateConstraints.length > 0) {
        agentState.manualDropdownOverride = false;
        agentState.plannedPath = computeConstrainedPath(agentState.startNodeId, agentState.goalNodeId, agentState.intermediateConstraints);
        resetSimulation(true);
    }
}

function renderTokenAttention(stepIdx) {
    const input = document.getElementById("instructionInput");
    const container = document.getElementById("tokenAttentionContainer");
    if (!input || !container) return;
    const rawText = input.value.trim();
    container.innerHTML = "";

    if (!rawText) {
        container.innerHTML = `<span class="text-xs text-slate-500 italic">Enter an instruction above to inspect cross-modal attention weights...</span>`;
        return;
    }

    const tokens = rawText.split(/\s+/);
    const totalSteps = Math.max(1, agentState.plannedPath.length - 1);
    const focusRatio = Math.min(1, stepIdx / totalSteps);
    const focusCenter = Math.floor(focusRatio * (tokens.length - 1));

    tokens.forEach((tok, i) => {
        const dist = Math.abs(i - focusCenter);
        const weight = Math.max(0.12, Math.exp(-(dist * dist) / 4.5));
        const span = document.createElement("span");
        span.className = "token-pill px-2 py-0.5 rounded-md text-xs font-medium border";

        if (weight > 0.72) {
            span.style.backgroundColor = "rgba(99, 102, 241, 0.45)";
            span.style.borderColor = "rgba(129, 140, 248, 0.8)";
            span.style.color = "#ffffff";
        } else if (weight > 0.38) {
            span.style.backgroundColor = "rgba(99, 102, 241, 0.18)";
            span.style.borderColor = "rgba(99, 102, 241, 0.35)";
            span.style.color = "#cbd5e1";
        } else {
            span.style.backgroundColor = "rgba(15, 23, 42, 0.6)";
            span.style.borderColor = "rgba(51, 65, 85, 0.4)";
            span.style.color = "#64748b";
        }

        span.textContent = tok;
        span.title = `Attention weight: ${(weight * 100).toFixed(0)}%`;
        container.appendChild(span);
    });
}

/***********************************************************************
 * 5. SHORTEST PATH PLANNER (BFS / DIJKSTRA) & SIMULATION EXECUTION
 ************************************************************************/
function populateStartGoalDropdowns() {
    const map = getActiveMap();
    if (!map) return;
    const startSel = document.getElementById("startNodeSelect");
    const goalSel = document.getElementById("goalNodeSelect");
    if (!startSel || !goalSel) return;
    startSel.innerHTML = "";
    goalSel.innerHTML = "";

    if (!map.nodes || map.nodes.length === 0) {
        const opt1 = document.createElement("option");
        opt1.value = "";
        opt1.textContent = "(Add rooms or viewpoints first)";
        startSel.appendChild(opt1);
        const opt2 = document.createElement("option");
        opt2.value = "";
        opt2.textContent = "(Add rooms or viewpoints first)";
        goalSel.appendChild(opt2);
        return;
    }

    // Auto-validate start and goal IDs against active map
    if (!map.nodes.some(n => n.id === agentState.startNodeId)) {
        agentState.startNodeId = map.nodes[0].id;
    }
    if (!map.nodes.some(n => n.id === agentState.goalNodeId)) {
        agentState.goalNodeId = map.nodes[map.nodes.length - 1].id;
    }

    map.nodes.forEach(node => {
        const room = map.rooms.find(r => r.id === node.roomId);
        const label = `${node.id} — ${room ? room.name : (node.label || "Viewpoint")}`;

        const opt1 = document.createElement("option");
        opt1.value = node.id;
        opt1.textContent = label;
        if (node.id === agentState.startNodeId) opt1.selected = true;
        startSel.appendChild(opt1);

        const opt2 = document.createElement("option");
        opt2.value = node.id;
        opt2.textContent = label;
        if (node.id === agentState.goalNodeId) opt2.selected = true;
        goalSel.appendChild(opt2);
    });
}

function updateStartGoalNodes() {
    agentState.manualDropdownOverride = true;
    const startSel = document.getElementById("startNodeSelect");
    const goalSel = document.getElementById("goalNodeSelect");
    if (startSel) agentState.startNodeId = startSel.value;
    if (goalSel) agentState.goalNodeId = goalSel.value;
    agentState.intermediateConstraints = [];
    agentState.plannedPath = computeConstrainedPath(agentState.startNodeId, agentState.goalNodeId, []);
    resetSimulation(true);
}

function computeShortestPath(startId, goalId) {
    const map = getActiveMap();
    if (!map || !startId || !goalId) return [];
    if (startId === goalId) return [startId];

    const adj = {};
    map.nodes.forEach(n => adj[n.id] = []);
    map.edges.forEach(([u, v]) => {
        const nu = map.nodes.find(n => n.id === u);
        const nv = map.nodes.find(n => n.id === v);
        if (nu && nv) {
            const d = Math.hypot(nu.x - nv.x, nu.y - nv.y);
            adj[u].push({ to: v, cost: d });
            adj[v].push({ to: u, cost: d });
        }
    });

    const dist = {};
    const prev = {};
    const visited = new Set();
    map.nodes.forEach(n => dist[n.id] = Infinity);
    dist[startId] = 0;

    while (visited.size < map.nodes.length) {
        let u = null;
        let best = Infinity;
        for (const id in dist) {
            if (!visited.has(id) && dist[id] < best) {
                best = dist[id];
                u = id;
            }
        }
        if (u === null || u === goalId) break;
        visited.add(u);

        for (const edge of (adj[u] || [])) {
            const alt = dist[u] + edge.cost;
            if (alt < dist[edge.to]) {
                dist[edge.to] = alt;
                prev[edge.to] = u;
            }
        }
    }

    if (dist[goalId] === Infinity) return [startId];
    const path = [];
    let curr = goalId;
    while (curr) {
        path.unshift(curr);
        curr = prev[curr];
    }
    return path;
}

function calculatePathDistance(pathNodeIds, map) {
    if (!pathNodeIds || pathNodeIds.length <= 1 || !map) return 0;
    let dist = 0;
    for (let i = 1; i < pathNodeIds.length; i++) {
        const n1 = map.nodes.find(n => n.id === pathNodeIds[i - 1]);
        const n2 = map.nodes.find(n => n.id === pathNodeIds[i]);
        if (n1 && n2) {
            dist += Math.hypot(n2.x - n1.x, n2.y - n1.y);
        }
    }
    return dist;
}

function computeConstrainedPath(startNodeId, goalNodeId, intermediateConstraints = []) {
    const map = getActiveMap();
    if (!map || !startNodeId || !goalNodeId) return [];
    if (!intermediateConstraints || intermediateConstraints.length === 0) {
        return computeShortestPath(startNodeId, goalNodeId);
    }

    let currentFromId = startNodeId;
    const fullPath = [startNodeId];

    for (let c = 0; c < intermediateConstraints.length; c++) {
        const constraint = intermediateConstraints[c];
        let candidateNodeIds = [];
        let constraintName = "";

        if (typeof constraint === "string") {
            if (map.nodes.some(n => n.id === constraint)) {
                candidateNodeIds = [constraint];
                constraintName = constraint;
            } else {
                const room = map.rooms.find(r => r.id === constraint || r.name.toLowerCase() === constraint.toLowerCase());
                if (room) {
                    candidateNodeIds = map.nodes.filter(n => n.roomId === room.id).map(n => n.id);
                    constraintName = room.name;
                }
            }
        } else if (constraint && constraint.id) {
            candidateNodeIds = map.nodes.filter(n => n.roomId === constraint.id).map(n => n.id);
            constraintName = constraint.name || constraint.id;
        }

        if (candidateNodeIds.length === 0) continue;

        let nextTargetCandidates = [];
        if (c < intermediateConstraints.length - 1) {
            const nextC = intermediateConstraints[c + 1];
            if (typeof nextC === "string" && map.nodes.some(n => n.id === nextC)) {
                nextTargetCandidates = [nextC];
            } else {
                const nextRoom = map.rooms.find(r => (nextC.id && r.id === nextC.id) || r.name.toLowerCase() === (nextC.name || nextC).toLowerCase());
                if (nextRoom) {
                    nextTargetCandidates = map.nodes.filter(n => n.roomId === nextRoom.id).map(n => n.id);
                }
            }
        }
        if (nextTargetCandidates.length === 0) {
            nextTargetCandidates = [goalNodeId];
        }

        let bestSubPath = null;
        let bestTargetNode = null;
        let minTotalCost = Infinity;

        candidateNodeIds.forEach(candId => {
            const p1 = computeShortestPath(currentFromId, candId);
            if (p1.length > 0 && p1[p1.length - 1] === candId) {
                nextTargetCandidates.forEach(nextTgt => {
                    const p2 = computeShortestPath(candId, nextTgt);
                    if (p2.length > 0 && p2[p2.length - 1] === nextTgt) {
                        const totalCost = calculatePathDistance(p1, map) + calculatePathDistance(p2, map);
                        if (totalCost < minTotalCost) {
                            minTotalCost = totalCost;
                            bestSubPath = p1;
                            bestTargetNode = candId;
                        }
                    }
                });
            }
        });

        if (!bestSubPath || bestSubPath.length === 0 || bestSubPath[bestSubPath.length - 1] !== bestTargetNode) {
            showToast(`Requested route through "${constraintName}" is not available on this map.`, "warn");
            appendActionLog(`[WARNING] Route constraint through "${constraintName}" could not be satisfied on current graph.`);
            const direct = computeShortestPath(currentFromId, goalNodeId);
            if (direct.length > 1) {
                for (let k = 1; k < direct.length; k++) fullPath.push(direct[k]);
            }
            return fullPath;
        }

        for (let k = 1; k < bestSubPath.length; k++) {
            fullPath.push(bestSubPath[k]);
        }
        currentFromId = bestTargetNode;
    }

    if (currentFromId !== goalNodeId) {
        const finalSubPath = computeShortestPath(currentFromId, goalNodeId);
        if (finalSubPath.length > 1) {
            for (let k = 1; k < finalSubPath.length; k++) {
                fullPath.push(finalSubPath[k]);
            }
        }
    }

    return fullPath;
}

function getDoorwayWaypoints(fromNode, toNode, door, map) {
    const isVertical = (door.angle === Math.PI / 2 || door.orientation === "vertical");
    const offset = 26; // approx 1.17 meters in 3D: comfortable architectural clearance inside rooms in front of the door

    let approachX = door.x, approachY = door.y;
    let exitX = door.x, exitY = door.y;

    if (isVertical) {
        // Wall runs vertically along Y. Door normal is along X.
        const fromIsLeft = fromNode.x < door.x;
        approachX = fromIsLeft ? door.x - offset : door.x + offset;
        exitX = fromIsLeft ? door.x + offset : door.x - offset;
    } else {
        // Wall runs horizontally along X. Door normal is along Y.
        const fromIsTop = fromNode.y < door.y;
        approachY = fromIsTop ? door.y - offset : door.y + offset;
        exitY = fromIsTop ? door.y + offset : door.y - offset;
    }

    const pFrom = map2DTo3D(fromNode.x, fromNode.y);
    const pApp = map2DTo3D(approachX, approachY);
    const pThresh = map2DTo3D(door.x, door.y);
    const pExit = map2DTo3D(exitX, exitY);
    const pTarget = map2DTo3D(toNode.x, toNode.y);

    const yawToApp = Math.atan2(pApp.x - pFrom.x, pApp.z - pFrom.z);
    const yawThroughDoor = Math.atan2(pThresh.x - pApp.x, pThresh.z - pApp.z);
    const yawToTarget = Math.atan2(pTarget.x - pExit.x, pTarget.z - pExit.z);

    return [
        {
            name: "approach",
            x3D: pApp.x,
            z3D: pApp.z,
            x2D: approachX,
            y2D: approachY,
            yaw: yawToApp,
            isApproach: true
        },
        {
            name: "threshold",
            x3D: pThresh.x,
            z3D: pThresh.z,
            x2D: door.x,
            y2D: door.y,
            yaw: yawThroughDoor,
            isThreshold: true,
            isDoorway: true
        },
        {
            name: "exit",
            x3D: pExit.x,
            z3D: pExit.z,
            x2D: exitX,
            y2D: exitY,
            yaw: yawThroughDoor,
            isExit: true,
            enteredRoomId: toNode.roomId
        },
        {
            name: "target",
            x3D: pTarget.x,
            z3D: pTarget.z,
            x2D: toNode.x,
            y2D: toNode.y,
            yaw: yawToTarget,
            isTarget: true,
            isFinal: true,
            targetNodeId: toNode.id
        }
    ];
}

function walkSingleHop(fromNodeId, toNodeId, onDone) {
    const map = getActiveMap();
    if (!map) return;
    const fromNode = map.nodes.find(n => n.id === fromNodeId);
    const toNode = map.nodes.find(n => n.id === toNodeId);
    if (!fromNode || !toNode) {
        if (onDone) onDone();
        return;
    }

    const isDifferentRoom = fromNode.roomId !== toNode.roomId;
    let door = null;
    if (isDifferentRoom) {
        door = (threeState.doorPoints2D ? threeState.doorPoints2D.find(d =>
            (d.roomUId === fromNode.roomId && d.roomVId === toNode.roomId) ||
            (d.roomUId === toNode.roomId && d.roomVId === fromNode.roomId) ||
            (d.uId === fromNode.id && d.vId === toNode.id) ||
            (d.uId === toNode.id && d.vId === fromNode.id)
        ) : null);

        if (!door) {
            const hit = intersectSegmentWithRect(fromNode.x, fromNode.y, toNode.x, toNode.y,
                map.rooms.find(r => r.id === fromNode.roomId) || { x: 0, y: 0, w: 100, h: 100 });
            if (hit) door = hit;
        }
    }

    threeState.walkWaypoints = [];
    threeState.currentWaypointIndex = 0;

    if (door) {
        // Multi-waypoint continuous walk: Approach doorway -> Step through threshold -> Enter room -> Reach target
        threeState.walkWaypoints = getDoorwayWaypoints(fromNode, toNode, door, map);
    } else {
        const pTarget = map2DTo3D(toNode.x, toNode.y);
        const pFrom = map2DTo3D(fromNode.x, fromNode.y);
        const yawToTarget = Math.atan2(pTarget.x - pFrom.x, pTarget.z - pFrom.z);
        threeState.walkWaypoints = [
            {
                name: "target",
                x3D: pTarget.x,
                z3D: pTarget.z,
                x2D: toNode.x,
                y2D: toNode.y,
                yaw: yawToTarget,
                isFinal: true,
                targetNodeId: toNode.id
            }
        ];
    }

    // Ensure panoramic background for current and upcoming rooms are preloaded & cached
    PanoramaManager.preloadRoute(agentState.plannedPath, map);
    if (isDifferentRoom) {
        PanoramaManager.startTransition(fromNode.roomId, toNode.roomId, map);
    }

    const firstWp = threeState.walkWaypoints[0];
    threeState.camDesiredPos.set(firstWp.x3D, 1.55, firstWp.z3D);
    threeState.orbitDesiredTarget.set(firstWp.x3D, 0.9, firstWp.z3D);
    threeState.desiredPanoYaw = firstWp.yaw;
    agentState.targetX = firstWp.x2D;
    agentState.targetY = firstWp.y2D;
    agentState.headingDeg = Math.round(((Math.PI / 2 - firstWp.yaw) * 180) / Math.PI) % 360;

    agentState.isWalking = true;
    agentState.onHopComplete = () => {
        agentState.isWalking = false;
        agentState.currentNodeId = toNode.id;
        if (agentState.executedNodes[agentState.executedNodes.length - 1] !== toNode.id) {
            agentState.executedNodes.push(toNode.id);
        }

        const prevRoom = map.rooms.find(r => r.id === fromNode.roomId);
        const targetRoom = map.rooms.find(r => r.id === toNode.roomId);
        const crossedDoor = isDifferentRoom ? ` [Through Doorway → ${targetRoom ? targetRoom.name : "Room"}]` : "";
        const angle = Math.round(Math.atan2(toNode.y - fromNode.y, toNode.x - fromNode.x) * 180 / Math.PI);
        const turnDiff = ((angle - agentState.headingDeg + 540) % 360) - 180;
        const turnAction = Math.abs(turnDiff) < 25 ? "FORWARD" : (turnDiff > 0 ? "TURN_RIGHT + FORWARD" : "TURN_LEFT + FORWARD");

        // Complete panorama transition cleanly
        PanoramaManager.completeTransition(map);

        appendActionLog(`[STEP ${agentState.stepIndex + 1}] ${turnAction} → ${toNode.id}${crossedDoor}`);
        updateMetricsDisplay(toNode.id === agentState.goalNodeId);
        renderCanvas();
        update3DTrajectoryAndHighlights();
        syncAgentTo3DScene(false);
        renderQuickRoomJumpBar();

        if (onDone) onDone();
    };
}

function resetSimulation(previewOnly = false) {
    stopSimulationTimer();
    const map = getActiveMap();
    if (!map) return;

    if (!agentState.plannedPath || agentState.plannedPath.length === 0 || !previewOnly) {
        agentState.plannedPath = computeConstrainedPath(agentState.startNodeId, agentState.goalNodeId, agentState.intermediateConstraints || []);
    }

    agentState.stepIndex = 0;
    agentState.isWalking = false;
    agentState.onHopComplete = null;
    threeState.walkWaypoints = [];
    threeState.currentWaypointIndex = 0;
    const startNode = map.nodes.find(n => n.id === agentState.startNodeId) || map.nodes[0];
    agentState.executedNodes = startNode ? [startNode.id] : [];

    if (startNode) {
        agentState.currentNodeId = startNode.id;
        agentState.x = startNode.x;
        agentState.y = startNode.y;
        agentState.targetX = startNode.x;
        agentState.targetY = startNode.y;
        PanoramaManager.preloadRoute(agentState.plannedPath, map);
        PanoramaManager.setActiveRoom(startNode.roomId, map);
    }

    if (agentState.plannedPath.length > 1) {
        const nextNode = map.nodes.find(n => n.id === agentState.plannedPath[1]);
        if (nextNode && startNode) {
            agentState.headingDeg = Math.round(Math.atan2(nextNode.y - startNode.y, nextNode.x - startNode.x) * 180 / Math.PI);
        }
    }

    clearActionLog();
    const constraintDesc = (agentState.intermediateConstraints && agentState.intermediateConstraints.length > 0)
        ? ` [Via: ${agentState.intermediateConstraints.map(c => c.name || c.id || c).join(", ")}]`
        : "";
    appendActionLog(`[READY] Start: ${agentState.startNodeId} → Target: ${agentState.goalNodeId}${constraintDesc} (${Math.max(0, agentState.plannedPath.length - 1)} hops)`);
    renderTokenAttention(0);
    updateMetricsDisplay();
    renderCanvas();
    update3DTrajectoryAndHighlights();
    syncAgentTo3DScene(true);
    renderQuickRoomJumpBar();
}

function stepSimulation() {
    const map = getActiveMap();
    if (!map) return false;
    if (agentState.isWalking) return false;

    if (agentState.plannedPath.length <= 1) {
        showToast("No connected path between Start and Goal viewpoints! Link nodes in the Builder.", "warn");
        return false;
    }

    if (agentState.stepIndex >= agentState.plannedPath.length - 1) {
        appendActionLog(`[STOP] Goal viewpoint ${agentState.goalNodeId} reached! Navigation Success.`);
        stopSimulationTimer();
        updateMetricsDisplay(true);
        showToast("Goal reached! Navigation Success.", "success");
        return false;
    }

    const currNodeId = agentState.plannedPath[agentState.stepIndex];
    const nextNodeId = agentState.plannedPath[agentState.stepIndex + 1];

    walkSingleHop(currNodeId, nextNodeId, () => {
        agentState.stepIndex++;
        renderTokenAttention(agentState.stepIndex);
        const isDone = agentState.stepIndex >= agentState.plannedPath.length - 1;
        if (isDone) {
            appendActionLog(`[STOP] Agent called STOP action in target room. SR = 100%`);
            stopSimulationTimer();
            updateMetricsDisplay(true);
            showToast("Goal reached! Navigation Success.", "success");
        }
    });

    return true;
}

function runFullSimulation() {
    if (agentState.isPlaying) {
        stopSimulationTimer();
        return;
    }

    if (agentState.plannedPath.length <= 1) {
        agentState.plannedPath = computeConstrainedPath(agentState.startNodeId, agentState.goalNodeId, agentState.intermediateConstraints || []);
    }

    if (agentState.stepIndex >= agentState.plannedPath.length - 1) {
        resetSimulation(true);
    }

    agentState.isPlaying = true;
    const btn = document.getElementById("btnRunNav");
    if (btn) btn.innerHTML = `<i class="fa-solid fa-pause"></i><span>Pause Navigation</span>`;
    const quickBtn = document.getElementById("btnQuickRunNav");
    if (quickBtn) quickBtn.innerHTML = `<i class="fa-solid fa-pause"></i><span>Pause Simulator</span>`;

    function runNextHop() {
        if (!agentState.isPlaying) return;
        if (agentState.stepIndex >= agentState.plannedPath.length - 1) {
            stopSimulationTimer();
            return;
        }

        const currNodeId = agentState.plannedPath[agentState.stepIndex];
        const nextNodeId = agentState.plannedPath[agentState.stepIndex + 1];

        walkSingleHop(currNodeId, nextNodeId, () => {
            agentState.stepIndex++;
            renderTokenAttention(agentState.stepIndex);
            const isDone = agentState.stepIndex >= agentState.plannedPath.length - 1;
            if (isDone) {
                appendActionLog(`[STOP] Agent called STOP action in target room. SR = 100%`);
                stopSimulationTimer();
                updateMetricsDisplay(true);
                showToast("Goal reached! Navigation Success.", "success");
            } else if (agentState.isPlaying) {
                agentState.stepTimer = setTimeout(runNextHop, 40);
            }
        });
    }

    runNextHop();
}

function stopSimulationTimer() {
    agentState.isPlaying = false;
    if (agentState.stepTimer) {
        clearTimeout(agentState.stepTimer);
        agentState.stepTimer = null;
    }
    if (agentState.timer) {
        clearInterval(agentState.timer);
        agentState.timer = null;
    }
    const btn = document.getElementById("btnRunNav");
    if (btn) {
        btn.innerHTML = `<i class="fa-solid fa-play"></i><span>Execute VLN Agent</span>`;
    }
    const quickBtn = document.getElementById("btnQuickRunNav");
    if (quickBtn) {
        quickBtn.innerHTML = `<i class="fa-solid fa-play"></i><span>Run Simulator</span>`;
    }
}

function updateMetricsDisplay(completed = false) {
    const map = getActiveMap();
    if (!map) return;
    let plPixels = 0;
    for (let i = 1; i < agentState.executedNodes.length; i++) {
        const n1 = map.nodes.find(n => n.id === agentState.executedNodes[i - 1]);
        const n2 = map.nodes.find(n => n.id === agentState.executedNodes[i]);
        if (n1 && n2) plPixels += Math.hypot(n2.x - n1.x, n2.y - n1.y);
    }
    const plMeters = (plPixels / 45).toFixed(1);

    const currNode = map.nodes.find(n => n.id === agentState.currentNodeId);
    const goalNode = map.nodes.find(n => n.id === agentState.goalNodeId);
    let neMeters = 0;
    if (currNode && goalNode) {
        neMeters = (Math.hypot(goalNode.x - currNode.x, goalNode.y - currNode.y) / 45).toFixed(1);
    }

    const success = parseFloat(neMeters) < 1.5;
    const spl = completed && success ? "0.96" : (agentState.stepIndex === 0 ? "1.00" : "0.78");

    document.getElementById("metricPL").textContent = `${plMeters}m`;
    document.getElementById("metricNE").textContent = `${neMeters}m`;
    document.getElementById("metricSPL").textContent = spl;

    const statusBadge = document.getElementById("metricStatus");
    if (completed && success) {
        statusBadge.textContent = "SUCCESS (STOP)";
        statusBadge.className = "text-xs font-bold font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 inline-block";
    } else if (agentState.stepIndex > 0) {
        statusBadge.textContent = "NAVIGATING";
        statusBadge.className = "text-xs font-bold font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 inline-block";
    } else {
        statusBadge.textContent = "READY";
        statusBadge.className = "text-xs font-bold font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 inline-block";
    }

    const totalSteps = Math.max(0, agentState.plannedPath.length - 1);
    document.getElementById("metricStepCount").textContent = `Step ${agentState.stepIndex} / ${totalSteps}`;
}

function clearActionLog() {
    const log = document.getElementById("actionLogContainer");
    if (log) log.innerHTML = "";
}

function appendActionLog(msg) {
    const log = document.getElementById("actionLogContainer");
    if (!log) return;
    const item = document.createElement("div");
    item.className = "text-slate-300 border-l-2 border-indigo-500 pl-2 py-0.5";
    item.textContent = msg;
    log.appendChild(item);
    log.scrollTop = log.scrollHeight;
}

/***********************************************************************
 * 6. 2D TOPOLOGICAL FLOORPLAN CANVAS RENDERER
 ***********************************************************************/
function renderCanvas() {
    if (!ctx || !floorplanCanvas) return;
    const map = getActiveMap();
    if (!map) return;
    const W = floorplanCanvas.width;
    const H = floorplanCanvas.height;
    ctx.clearRect(0, 0, W, H);

    // 1. Subtle Blueprint Grid
    const toggleGridEl = document.getElementById("toggleGrid");
    if (toggleGridEl && toggleGridEl.checked) {
        ctx.strokeStyle = "rgba(51, 65, 85, 0.28)";
        ctx.lineWidth = 1;
        const step = 35;
        for (let x = 0; x < W; x += step) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, H);
            ctx.stroke();
        }
        for (let y = 0; y < H; y += step) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(W, y);
            ctx.stroke();
        }
    }

    // 2. Render Rooms (Bounding Regions + Multilingual Title + Landmarks)
    const toggleLandmarksEl = document.getElementById("toggleLandmarks");
    const showLandmarks = toggleLandmarksEl ? toggleLandmarksEl.checked : true;
    map.rooms.forEach(room => {
        const isGoalRoom = map.nodes.some(n => n.id === agentState.goalNodeId && n.roomId === room.id);
        const isStartRoom = map.nodes.some(n => n.id === agentState.startNodeId && n.roomId === room.id);
        const isSelected = selectedEntity && selectedEntity.type === "room" && selectedEntity.id === room.id;
        const semColorHex = getSemanticRoomColorHex(room);

        ctx.save();
        ctx.fillStyle = hexToRgba(semColorHex, isGoalRoom ? 0.32 : (isStartRoom ? 0.26 : 0.20));
        ctx.strokeStyle = isSelected ? "#B8D96B" : (isGoalRoom ? "#72C9A2" : (isStartRoom ? "#55BFD0" : hexToRgba(semColorHex, 0.88)));
        ctx.lineWidth = isSelected ? 3.0 : (isGoalRoom || isStartRoom ? 2.5 : 1.8);

        roundRect(ctx, room.x, room.y, room.w, room.h, 12);
        ctx.fill();
        ctx.stroke();

        const displayRoomName = getLocalizedRoomName(room);
        ctx.fillStyle = hexToRgba(semColorHex, 0.95);
        ctx.font = "600 12px Inter, sans-serif";
        ctx.fillText(displayRoomName, room.x + 12, room.y + 22);

        if (showLandmarks && room.landmarks && room.landmarks.length > 0) {
            ctx.font = "500 10px JetBrains Mono, monospace";
            room.landmarks.forEach((lm, idx) => {
                const ly = room.y + 42 + idx * 18;
                if (ly < room.y + room.h - 10) {
                    ctx.fillStyle = "rgba(15, 23, 42, 0.75)";
                    roundRect(ctx, room.x + 10, ly - 11, Math.min(room.w - 20, lm.length * 6.5 + 18), 15, 4);
                    ctx.fill();
                    ctx.fillStyle = "#cbd5e1";
                    ctx.fillText(`• ${lm}`, room.x + 15, ly);
                }
            });
        }
        if (isSelected && currentMode === "editor") {
            // Draw a prominent [✕ Delete] button at top-right of the room
            const btnW = 54;
            const btnH = 20;
            const btnX = room.x + room.w - btnW - 6;
            const btnY = room.y + 6;
            ctx.save();
            ctx.fillStyle = "rgba(225, 29, 72, 0.92)";
            ctx.strokeStyle = "#fda4af";
            ctx.lineWidth = 1.5;
            roundRect(ctx, btnX, btnY, btnW, btnH, 5);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#ffffff";
            ctx.font = "bold 10px Inter, sans-serif";
            ctx.textAlign = "center";
            ctx.fillText("✕ Delete", btnX + btnW / 2, btnY + 14);
            ctx.restore();
        }
        ctx.restore();
    });

    // 3. Render Topological Navigation Edges (Only where direct links or doors connect rooms)
    map.edges.forEach(([uId, vId]) => {
        const u = map.nodes.find(n => n.id === uId);
        const v = map.nodes.find(n => n.id === vId);
        if (!u || !v) return;

        // If nodes are in different rooms, only draw edge if a door connects them!
        if (u.roomId !== v.roomId && !hasDirectDoorBetweenRooms(u.roomId, v.roomId)) {
            return;
        }

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(u.x, u.y);
        ctx.lineTo(v.x, v.y);
        ctx.strokeStyle = "rgba(148, 163, 184, 0.38)";
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.stroke();
        ctx.restore();
    });

    // 3B. Render 2D Doorway Markers on Room Walls where Agent Transitions Room-to-Room
    const toggleDoorsEl = document.getElementById("toggleDoors");
    const showDoors2D = toggleDoorsEl ? toggleDoorsEl.checked : true;
    if (showDoors2D && threeState.doorPoints2D) {
        threeState.doorPoints2D.forEach(door => {
            const isDoorSelected = selectedEntity && selectedEntity.type === "door" &&
                ((selectedEntity.uId === door.uId && selectedEntity.vId === door.vId) ||
                 (selectedEntity.uId === door.vId && selectedEntity.vId === door.uId));

            ctx.save();
            ctx.translate(door.x, door.y);
            ctx.rotate(door.angle || 0);

            // Selection glow if door is selected
            if (isDoorSelected) {
                ctx.save();
                ctx.strokeStyle = "#38bdf8";
                ctx.lineWidth = 2.5;
                ctx.fillStyle = "rgba(56, 189, 248, 0.28)";
                roundRect(ctx, -20, -12, 40, 24, 6);
                ctx.fill();
                ctx.stroke();
                ctx.restore();
            }

            // Door threshold (golden floor plate)
            ctx.fillStyle = isDoorSelected ? "rgba(56, 189, 248, 0.45)" : "rgba(245, 158, 11, 0.35)";
            ctx.strokeStyle = isDoorSelected ? "#38bdf8" : "#fbbf24";
            ctx.lineWidth = isDoorSelected ? 2.5 : 2;
            roundRect(ctx, -14, -5, 28, 10, 3);
            ctx.fill();
            ctx.stroke();

            // Architectural open door swing leaf
            ctx.beginPath();
            ctx.moveTo(-14, 0);
            ctx.lineTo(-6, -16);
            ctx.strokeStyle = isDoorSelected ? "#bae6fd" : "#fef08a";
            ctx.lineWidth = 2.5;
            ctx.stroke();

            // Swing arc (quarter circle)
            ctx.beginPath();
            ctx.arc(-14, 0, 16, -Math.PI / 2, -Math.PI / 3);
            ctx.setLineDash([2, 3]);
            ctx.strokeStyle = isDoorSelected ? "rgba(56, 189, 248, 0.9)" : "rgba(251, 191, 36, 0.7)";
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Door badge text
            ctx.setLineDash([]);
            ctx.fillStyle = isDoorSelected ? "#38bdf8" : "#fbbf24";
            ctx.font = "bold 9px 'JetBrains Mono', monospace";
            ctx.textAlign = "center";
            ctx.fillText(isDoorSelected ? "SELECTED" : "DOOR", 0, 15);

            ctx.restore();
        });
    }

    // Interactive Edge Drawing Line in Editor Mode
    if (currentMode === "editor" && editorTool === "connectEdge" && edgeSourceNodeId) {
        const srcNode = map.nodes.find(n => n.id === edgeSourceNodeId);
        if (srcNode) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(srcNode.x, srcNode.y);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.strokeStyle = "#f59e0b";
            ctx.lineWidth = 2.5;
            ctx.setLineDash([4, 4]);
            ctx.stroke();
            ctx.restore();
        }
    }

    // 4. Render Executed Trajectory Path (Only where links & doors exist - remove lines where no link)
    if (agentState.executedNodes.length > 1) {
        ctx.save();
        ctx.strokeStyle = "#fbbf24";
        ctx.lineWidth = 4;
        ctx.shadowColor = "rgba(251, 191, 36, 0.5)";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        let pathStarted = false;

        for (let i = 0; i < agentState.executedNodes.length; i++) {
            const curr = map.nodes.find(node => node.id === agentState.executedNodes[i]);
            if (!curr) continue;

            if (i === 0) {
                ctx.moveTo(curr.x, curr.y);
                pathStarted = true;
            } else {
                const prev = map.nodes.find(node => node.id === agentState.executedNodes[i - 1]);
                if (!prev) {
                    ctx.moveTo(curr.x, curr.y);
                    continue;
                }

                // Check if an actual edge exists in map.edges between prev and curr
                const edgeExists = map.edges.some(([a, b]) =>
                    (a === prev.id && b === curr.id) || (a === curr.id && b === prev.id)
                );

                // If in different rooms, must have a direct door between them
                const roomsLinked = (prev.roomId === curr.roomId) || hasDirectDoorBetweenRooms(prev.roomId, curr.roomId);

                if (edgeExists && roomsLinked) {
                    if (!pathStarted) {
                        ctx.moveTo(prev.x, prev.y);
                        pathStarted = true;
                    }
                    ctx.lineTo(curr.x, curr.y);
                } else {
                    // No link between these rooms - do NOT draw line across!
                    ctx.moveTo(curr.x, curr.y);
                }
            }
        }
        ctx.stroke();
        ctx.restore();
    }

    // 5. Render Viewpoint Nodes
    const toggleNodeIdsEl = document.getElementById("toggleNodeIds");
    const showIds = toggleNodeIdsEl ? toggleNodeIdsEl.checked : true;
    map.nodes.forEach(node => {
        const isStart = node.id === agentState.startNodeId;
        const isGoal = node.id === agentState.goalNodeId;
        const isSelected = selectedEntity && selectedEntity.type === "node" && selectedEntity.id === node.id;
        const isEdgeSource = (currentMode === "editor" && editorTool === "connectEdge" && edgeSourceNodeId === node.id);
        const isHoverCandidate = (currentMode === "editor" && editorTool === "connectEdge" && edgeSourceNodeId && edgeSourceNodeId !== node.id && Math.hypot(node.x - mousePos.x, node.y - mousePos.y) <= 25);

        ctx.save();

        // Pulsing / glowing halos for edge linking
        if (isEdgeSource) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, 17, 0, Math.PI * 2);
            ctx.strokeStyle = "#f59e0b";
            ctx.lineWidth = 3;
            ctx.setLineDash([4, 4]);
            ctx.stroke();
            ctx.setLineDash([]);
        } else if (isHoverCandidate) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, 16, 0, Math.PI * 2);
            ctx.strokeStyle = "#10b981";
            ctx.lineWidth = 3;
            ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, isGoal || isStart || isEdgeSource ? 10 : 7, 0, Math.PI * 2);

        if (isEdgeSource) {
            ctx.fillStyle = "#f59e0b";
        } else if (isGoal) {
            ctx.fillStyle = "#10b981";
        } else if (isStart) {
            ctx.fillStyle = "#6366f1";
        } else {
            ctx.fillStyle = "#475569";
        }
        ctx.fill();
        ctx.lineWidth = isSelected || isEdgeSource ? 3 : 2;
        ctx.strokeStyle = isSelected ? "#38bdf8" : (isEdgeSource ? "#fbbf24" : "#f8fafc");
        ctx.stroke();

        if (showIds || isEdgeSource || isHoverCandidate) {
            ctx.font = "600 10px JetBrains Mono, monospace";
            ctx.fillStyle = isEdgeSource ? "#fbbf24" : (isHoverCandidate ? "#34d399" : "#e2e8f0");
            const labelText = isEdgeSource ? `${node.id} (Source)` : (isHoverCandidate ? `${node.id} (Target)` : node.id);
            ctx.fillText(labelText, node.x - 12, node.y - 13);
        }
        ctx.restore();
    });

    // 6. Render VLN Agent Pose & Vision Cone
    if (agentState.x && agentState.y) {
        ctx.save();
        const rad = (agentState.headingDeg * Math.PI) / 180;
        const coneLen = 42;
        const fov = 0.55;

        // Field-of-View Cone
        ctx.beginPath();
        ctx.moveTo(agentState.x, agentState.y);
        ctx.lineTo(agentState.x + Math.cos(rad - fov) * coneLen, agentState.y + Math.sin(rad - fov) * coneLen);
        ctx.arc(agentState.x, agentState.y, coneLen, rad - fov, rad + fov);
        ctx.closePath();
        const grad = ctx.createRadialGradient(agentState.x, agentState.y, 4, agentState.x, agentState.y, coneLen);
        grad.addColorStop(0, "rgba(34, 211, 238, 0.55)");
        grad.addColorStop(1, "rgba(34, 211, 238, 0.0)");
        ctx.fillStyle = grad;
        ctx.fill();

        // Agent Outer Ring
        ctx.beginPath();
        ctx.arc(agentState.x, agentState.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = "#06b6d4";
        ctx.fill();
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = "#ffffff";
        ctx.stroke();

        // Heading Arrow
        ctx.beginPath();
        ctx.moveTo(agentState.x, agentState.y);
        ctx.lineTo(agentState.x + Math.cos(rad) * 16, agentState.y + Math.sin(rad) * 16);
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2.5;
        ctx.stroke();
        ctx.restore();
    }
}

function getLocalizedRoomName(room) {
    if (!room) return "";
    if (currentLang === "hi" && room.name_hi) return `${room.name_hi} (${room.name})`;
    if (currentLang === "te" && room.name_te) return `${room.name_te} (${room.name})`;
    return room.name;
}

/***********************************************************************
 * ARCHITECTURAL 3D VIEWPORT COLOR SYSTEM (Design Tokens)
 ***********************************************************************/
const VIEWPORT_PALETTE = {
    envBackground: 0x171C20,   // #171C20 Environment background
    floor: 0xA9A69C,           // #A9A69C Floor
    walls: 0xD8D4C9,           // #D8D4C9 Walls
    ceiling: 0xEEECE5,         // #EEECE5 Ceiling
    furniture: 0x647D75,       // #647D75 Furniture
    selectedObject: 0xB8D96B,  // #B8D96B Selected object (Lime)
    navigationPath: 0x55C6DC,  // #55C6DC Navigation path (Cyan)
    agentPosition: 0xF0A45D,   // #F0A45D Agent position (Amber)
    waypoints: 0x72D6B1,       // #72D6B1 Waypoints (Mint)
    fovCone: 0x66B9D0,         // #66B9D0 FOV visualization
    graphEdges: 0x82909B,      // #82909B Graph edges
    gridGuides: 0x59636B       // #59636B Grid and guides
};

// Semantic Architectural Room Color Palette
const SEMANTIC_ROOM_PALETTE = {
    bedroom: 0x4A6B82,    // #4A6B82 Muted blue
    kitchen: 0x4E7D63,    // #4E7D63 Muted green
    hallway: 0x99733E,    // #99733E Warm amber
    corridor: 0x99733E,   // #99733E Warm amber
    living: 0x3D757A,     // #3D757A Muted teal
    lounge: 0x3D757A,     // #3D757A Muted teal
    dining: 0x8A5647,     // #8A5647 Muted terracotta
    study: 0x5D586F,      // #5D586F Muted violet-grey
    office: 0x5D586F,     // #5D586F Muted violet-grey
    balcony: 0x5C7872,    // #5C7872 Muted slate
    terrace: 0x5C7872,    // #5C7872 Muted slate
    bathroom: 0x447A85,   // #447A85 Muted cyan
    washroom: 0x447A85,   // #447A85 Muted cyan
    default: 0x5A6872     // #5A6872 Neutral slate
};

function getSemanticRoomColor(room) {
    if (!room) return SEMANTIC_ROOM_PALETTE.default;
    const nameLower = (room.name || "").toLowerCase();
    const idLower = (room.id || "").toLowerCase();
    for (const [key, color] of Object.entries(SEMANTIC_ROOM_PALETTE)) {
        if (key === "default") continue;
        if (nameLower.includes(key) || idLower.includes(key)) {
            return color;
        }
    }
    if (room.color) {
        try {
            return new THREE.Color(room.color).getHex();
        } catch(e) {}
    }
    return SEMANTIC_ROOM_PALETTE.default;
}

function getSemanticRoomColorHex(room) {
    const hexNum = getSemanticRoomColor(room);
    return "#" + hexNum.toString(16).padStart(6, "0");
}

/***********************************************************************
 * 6B. DUAL-SPHERE 360° PANORAMA & ARCHITECTURAL TEXTURE ENGINE
 * Provides persistent, smooth, crossfaded 360° panorama room navigation,
 * preloading, texture caching, and eliminates black screens & flickering.
 ***********************************************************************/
const PanoramaManager = {
    cache: new Map(), // roomId -> THREE.CanvasTexture
    currentSphere: null,
    transitionSphere: null,
    group: null,
    activeRoomId: null,
    targetRoomId: null,
    transitionAlpha: 0.0,
    isTransitioning: false,
    failedLoads: new Set(),

    init(scene) {
        if (this.group) return;
        this.group = new THREE.Group();
        this.group.name = "panoramaSpheresGroup";

        const radius = 55;
        // Inverted sphere (scale -1, 1, 1) for interior viewing
        const currentGeo = new THREE.SphereGeometry(radius, 48, 32);
        currentGeo.scale(-1, 1, 1);
        const currentMat = new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 1.0,
            depthWrite: false,
            side: THREE.FrontSide
        });
        this.currentSphere = new THREE.Mesh(currentGeo, currentMat);
        this.currentSphere.renderOrder = -100;
        this.group.add(this.currentSphere);

        const transGeo = new THREE.SphereGeometry(radius * 0.998, 48, 32);
        transGeo.scale(-1, 1, 1);
        const transMat = new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 0.0,
            depthWrite: false,
            side: THREE.FrontSide
        });
        this.transitionSphere = new THREE.Mesh(transGeo, transMat);
        this.transitionSphere.renderOrder = -99;
        this.group.add(this.transitionSphere);

        scene.add(this.group);
        this.setVisible(threeState.cameraMode === "panorama");
    },

    getRoomPanoramaTexture(roomId, map) {
        if (!roomId) return null;
        if (this.cache.has(roomId)) {
            return this.cache.get(roomId);
        }
        const room = map ? map.rooms.find(r => r.id === roomId) : null;
        if (!room) return null;
        const tex = this.generateEquirectangularPanoramaTexture(room, map);
        if (tex) {
            this.cache.set(roomId, tex);
        }
        return tex;
    },

    generateEquirectangularPanoramaTexture(room, map) {
        if (typeof document === "undefined") return null;
        const W = 2048;
        const H = 1024;
        const canvas = document.createElement("canvas");
        canvas.width = W;
        canvas.height = H;
        const ctx = canvas.getContext("2d");
        if (!ctx) return null;

        const semanticHex = room ? getSemanticRoomColorHex(room) : "#55BFD0";
        const roomName = room ? (room.name || room.id) : "Space";

        // 1. Sky/Ceiling -> Horizon -> Floor Gradient
        const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
        bgGrad.addColorStop(0.0, "#0e1113");
        bgGrad.addColorStop(0.25, "#161a1c");
        bgGrad.addColorStop(0.34, "#1d2225");
        bgGrad.addColorStop(0.50, "#191e20");
        bgGrad.addColorStop(0.66, "#14181a");
        bgGrad.addColorStop(1.0, "#0b0d0e");
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, W, H);

        // 2. Ceiling Cove Architectural Lighting
        const ceilingGrad = ctx.createLinearGradient(0, 0, 0, H * 0.34);
        ceilingGrad.addColorStop(0, "rgba(240, 238, 231, 0.08)");
        ceilingGrad.addColorStop(0.6, "rgba(85, 191, 208, 0.06)");
        ceilingGrad.addColorStop(1, "rgba(245, 158, 11, 0.09)");
        ctx.fillStyle = ceilingGrad;
        ctx.fillRect(0, 0, W, H * 0.34);

        ctx.strokeStyle = "rgba(85, 191, 208, 0.32)";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(0, H * 0.33);
        ctx.lineTo(W, H * 0.33);
        ctx.stroke();

        // 3. Walls & Architectural Panels
        const wallH = H * 0.35;
        const wallY = H * 0.33;

        const wallTint = ctx.createLinearGradient(0, wallY, 0, wallY + wallH);
        wallTint.addColorStop(0, "rgba(29, 34, 37, 0.96)");
        wallTint.addColorStop(0.5, semanticHex + "25");
        wallTint.addColorStop(1, "rgba(18, 22, 24, 0.98)");
        ctx.fillStyle = wallTint;
        ctx.fillRect(0, wallY, W, wallH);

        const numPanels = 12;
        const panelW = W / numPanels;
        for (let p = 0; p < numPanels; p++) {
            const px = p * panelW;
            ctx.strokeStyle = "rgba(57, 65, 68, 0.45)";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(px, wallY);
            ctx.lineTo(px, wallY + wallH);
            ctx.stroke();

            ctx.strokeStyle = "rgba(85, 191, 208, 0.12)";
            ctx.strokeRect(px + 14, wallY + 16, panelW - 28, wallH - 32);
        }

        // Chair Rail
        ctx.strokeStyle = "rgba(168, 173, 169, 0.35)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, H * 0.58);
        ctx.lineTo(W, H * 0.58);
        ctx.stroke();

        // Baseboard
        ctx.fillStyle = "#141719";
        ctx.fillRect(0, H * 0.66, W, H * 0.025);
        ctx.strokeStyle = "rgba(85, 191, 208, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, H * 0.66);
        ctx.lineTo(W, H * 0.66);
        ctx.stroke();

        // 4. Floor Architectural Perspective
        const floorY = H * 0.68;
        for (let fy = floorY; fy < H; fy += 28) {
            const pOpacity = Math.min(0.35, 0.08 + ((fy - floorY) / (H - floorY)) * 0.28);
            ctx.strokeStyle = `rgba(85, 191, 208, ${pOpacity.toFixed(2)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, fy);
            ctx.lineTo(W, fy);
            ctx.stroke();
        }
        for (let fx = 0; fx < W; fx += 128) {
            ctx.strokeStyle = "rgba(43, 50, 52, 0.45)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(fx, floorY);
            ctx.lineTo(W / 2 + (fx - W / 2) * 0.25, H);
            ctx.stroke();
        }

        // Nadir Emblem
        const nadirGrad = ctx.createRadialGradient(W / 2, H * 0.92, 10, W / 2, H * 0.92, 120);
        nadirGrad.addColorStop(0, "rgba(85, 191, 208, 0.45)");
        nadirGrad.addColorStop(0.6, "rgba(85, 191, 208, 0.15)");
        nadirGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = nadirGrad;
        ctx.beginPath();
        ctx.arc(W / 2, H * 0.92, 120, 0, Math.PI * 2);
        ctx.fill();

        // 5. Doorways to Adjacent Rooms
        if (room && map) {
            const roomDoors = (threeState.doorPoints2D || []).filter(d => d.roomUId === room.id || d.roomVId === room.id);
            const center2D = { x: room.x + room.w / 2, y: room.y + room.h / 2 };
            const center3D = map2DTo3D(center2D.x, center2D.y);

            roomDoors.forEach(door => {
                const doorPos3D = map2DTo3D(door.x, door.y);
                const dx = doorPos3D.x - center3D.x;
                const dz = doorPos3D.z - center3D.z;
                const angle = Math.atan2(dx, dz);
                const normX = ((angle / Math.PI + 1) / 2) * W;

                const dw = 140;
                const dh = wallH * 0.85;
                const dy = wallY + (wallH - dh);
                const dxLeft = (normX - dw / 2 + W) % W;

                ctx.fillStyle = "rgba(245, 158, 11, 0.18)";
                ctx.fillRect(dxLeft, dy, dw, dh);
                ctx.strokeStyle = "rgba(251, 191, 36, 0.85)";
                ctx.lineWidth = 3;
                ctx.strokeRect(dxLeft, dy, dw, dh);

                const targetRoomName = (door.roomUId === room.id) ? (door.roomVName || "Doorway") : (door.roomUName || "Doorway");
                ctx.fillStyle = "#1e2325";
                ctx.fillRect(dxLeft - 10, dy - 26, dw + 20, 22);
                ctx.strokeStyle = "rgba(251, 191, 36, 0.75)";
                ctx.lineWidth = 1;
                ctx.strokeRect(dxLeft - 10, dy - 26, dw + 20, 22);

                ctx.fillStyle = "#fbbf24";
                ctx.font = "bold 13px 'SF Pro', sans-serif";
                ctx.textAlign = "center";
                ctx.fillText(`🚪 ${targetRoomName}`, dxLeft + dw / 2, dy - 10);
            });
        }

        // 6. Architectural Room Badge Header (Azimuth 0)
        const titleX = W * 0.5;
        const titleY = wallY + 65;

        ctx.fillStyle = "rgba(23, 26, 28, 0.92)";
        if (ctx.roundRect) ctx.roundRect(titleX - 220, titleY - 32, 440, 64, 8);
        else ctx.rect(titleX - 220, titleY - 32, 440, 64);
        ctx.fill();
        ctx.strokeStyle = semanticHex;
        ctx.lineWidth = 1.8;
        ctx.stroke();

        ctx.fillStyle = "#f0eee7";
        ctx.font = "bold 20px 'SF Pro', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(roomName.toUpperCase(), titleX, titleY - 4);

        ctx.fillStyle = "#55bfd0";
        ctx.font = "12px monospace";
        ctx.fillText("MATTERPORT3D • EQUIRECTANGULAR 360° • RXR STUDIO", titleX, titleY + 18);

        // 7. Landmarks / Furniture Badges
        if (room && room.landmarks && room.landmarks.length > 0) {
            room.landmarks.forEach((lm, idx) => {
                const lmAngle = -Math.PI * 0.6 + (idx / Math.max(1, room.landmarks.length - 1)) * (Math.PI * 1.2);
                const lmX = (((lmAngle / Math.PI + 1) / 2) * W) % W;
                const lmY = wallY + wallH * 0.55;

                ctx.fillStyle = "rgba(8, 51, 68, 0.88)";
                if (ctx.roundRect) ctx.roundRect(lmX - 70, lmY - 18, 140, 36, 6);
                else ctx.rect(lmX - 70, lmY - 18, 140, 36);
                ctx.fill();
                ctx.strokeStyle = "rgba(34, 211, 238, 0.6)";
                ctx.lineWidth = 1.2;
                ctx.stroke();

                ctx.fillStyle = "#67e8f9";
                ctx.font = "bold 13px 'SF Pro', sans-serif";
                ctx.textAlign = "center";
                ctx.fillText(`✦ ${lm}`, lmX, lmY + 5);
            });
        }

        const tex = new THREE.CanvasTexture(canvas);
        tex.colorSpace = (typeof THREE.SRGBColorSpace !== "undefined") ? THREE.SRGBColorSpace : THREE.LinearEncoding;
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.ClampToEdgeWrapping;
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.generateMipmaps = false;

        return tex;
    },

    preloadRoute(pathNodeIds, map) {
        if (!pathNodeIds || !map) return;
        const roomIds = new Set();
        pathNodeIds.forEach(nid => {
            const n = map.nodes.find(node => node.id === nid);
            if (n && n.roomId) roomIds.add(n.roomId);
        });
        roomIds.forEach(rid => {
            if (!this.cache.has(rid)) {
                this.getRoomPanoramaTexture(rid, map);
            }
        });
    },

    setActiveRoom(roomId, map) {
        if (!roomId) return;
        const tex = this.getRoomPanoramaTexture(roomId, map);
        if (tex && this.currentSphere) {
            this.currentSphere.material.map = tex;
            this.currentSphere.material.opacity = 1.0;
            this.currentSphere.material.needsUpdate = true;
        }
        if (this.transitionSphere) {
            this.transitionSphere.material.opacity = 0.0;
            this.transitionSphere.material.needsUpdate = true;
        }
        this.activeRoomId = roomId;
        this.targetRoomId = null;
        this.isTransitioning = false;
        this.transitionAlpha = 0.0;
    },

    startTransition(fromRoomId, toRoomId, map) {
        if (!fromRoomId || !toRoomId || fromRoomId === toRoomId) return;
        const texFrom = this.getRoomPanoramaTexture(fromRoomId, map);
        const texTo = this.getRoomPanoramaTexture(toRoomId, map);

        if (this.currentSphere && texFrom) {
            this.currentSphere.material.map = texFrom;
            this.currentSphere.material.opacity = 1.0;
            this.currentSphere.material.needsUpdate = true;
        }
        if (this.transitionSphere) {
            this.transitionSphere.material.map = texTo || null;
            this.transitionSphere.material.opacity = 0.0;
            this.transitionSphere.material.needsUpdate = true;
        }
        this.activeRoomId = fromRoomId;
        this.targetRoomId = toRoomId;
        this.isTransitioning = true;
        this.transitionAlpha = 0.0;
    },

    updateTransition(alpha) {
        this.transitionAlpha = Math.max(0.0, Math.min(1.0, alpha));
        if (this.currentSphere && this.transitionSphere && this.isTransitioning) {
            const hasTargetTex = !!this.transitionSphere.material.map;
            if (hasTargetTex) {
                // Keep base sphere visible while crossfading transition sphere over it
                this.currentSphere.material.opacity = Math.max(0.05, 1.0 - this.transitionAlpha * 0.95);
                this.transitionSphere.material.opacity = this.transitionAlpha;
            } else {
                // If target panorama is delayed or failed to load, keep current panorama 100% visible
                this.currentSphere.material.opacity = 1.0;
                this.transitionSphere.material.opacity = 0.0;
            }
            this.currentSphere.material.needsUpdate = true;
            this.transitionSphere.material.needsUpdate = true;
        }
    },

    completeTransition(map) {
        if (this.targetRoomId) {
            this.setActiveRoom(this.targetRoomId, map);
        } else {
            this.isTransitioning = false;
            this.transitionAlpha = 0.0;
            if (this.transitionSphere) {
                this.transitionSphere.material.opacity = 0.0;
                this.transitionSphere.material.needsUpdate = true;
            }
        }
    },

    updatePosition(camPos) {
        if (this.group && camPos) {
            this.group.position.copy(camPos);
        }
    },

    setVisible(visible) {
        if (this.group) {
            this.group.visible = visible;
        }
    }
};

/***********************************************************************
 * 6C. ARCHITECTURAL WALL GENERATION WITH DOORWAY OPENINGS
 * Cuts out 1.40m x 2.45m portals at doorway locations so first-person camera
 * never intersects solid wall boxes during doorway transitions.
 ***********************************************************************/
function createRoomWallsWithOpenings(room, w3D, h3D, d3D, wallMat, edgesMat, allDoors) {
    const group = new THREE.Group();
    const T = 0.08;
    const doorW = 1.40;
    const doorH = 2.45;
    const hw = room.w / 2;
    const hh = room.h / 2;
    const cx = room.x + hw;
    const cy = room.y + hh;

    const roomDoors = (allDoors || []).filter(d => d.roomUId === room.id || d.roomVId === room.id);
    const wallDoors = { N: [], S: [], W: [], E: [] };

    roomDoors.forEach(d => {
        const lx = d.x - cx;
        const ly = d.y - cy;
        const distN = Math.abs(ly + hh);
        const distS = Math.abs(ly - hh);
        const distW = Math.abs(lx + hw);
        const distE = Math.abs(lx - hw);
        const minDist = Math.min(distN, distS, distW, distE);
        if (minDist < 50) {
            if (minDist === distN) wallDoors.N.push({ u3D: lx * SCALE_3D, d });
            else if (minDist === distS) wallDoors.S.push({ u3D: lx * SCALE_3D, d });
            else if (minDist === distW) wallDoors.W.push({ u3D: ly * SCALE_3D, d });
            else wallDoors.E.push({ u3D: ly * SCALE_3D, d });
        }
    });

    function addWallSegment(width, height, depth, posX, posY, posZ) {
        if (width <= 0.04 || depth <= 0.04 || height <= 0.04) return;
        const geo = new THREE.BoxGeometry(width, height, depth);
        const mesh = new THREE.Mesh(geo, wallMat);
        mesh.position.set(posX, posY, posZ);
        group.add(mesh);

        if (edgesMat) {
            const edgeGeo = new THREE.EdgesGeometry(geo);
            const edgeMesh = new THREE.LineSegments(edgeGeo, edgesMat);
            edgeMesh.position.set(posX, posY, posZ);
            group.add(edgeMesh);
        }
    }

    // 1. North Wall (z = -d3D/2, spans x from -w3D/2 to +w3D/2)
    if (wallDoors.N.length > 0) {
        const u = wallDoors.N[0].u3D;
        const x1 = Math.max(-w3D / 2, u - doorW / 2);
        const x2 = Math.min(w3D / 2, u + doorW / 2);
        const wLeft = x1 - (-w3D / 2);
        const wRight = (w3D / 2) - x2;
        const wLintel = x2 - x1;
        const hLintel = h3D - doorH;

        if (wLeft > 0.05) addWallSegment(wLeft, h3D, T, -w3D / 2 + wLeft / 2, h3D / 2, -d3D / 2);
        if (wRight > 0.05) addWallSegment(wRight, h3D, T, x2 + wRight / 2, h3D / 2, -d3D / 2);
        if (wLintel > 0.05 && hLintel > 0.05) addWallSegment(wLintel, hLintel, T, (x1 + x2) / 2, doorH + hLintel / 2, -d3D / 2);
    } else {
        addWallSegment(w3D, h3D, T, 0, h3D / 2, -d3D / 2);
    }

    // 2. South Wall (z = +d3D/2, spans x from -w3D/2 to +w3D/2)
    if (wallDoors.S.length > 0) {
        const u = wallDoors.S[0].u3D;
        const x1 = Math.max(-w3D / 2, u - doorW / 2);
        const x2 = Math.min(w3D / 2, u + doorW / 2);
        const wLeft = x1 - (-w3D / 2);
        const wRight = (w3D / 2) - x2;
        const wLintel = x2 - x1;
        const hLintel = h3D - doorH;

        if (wLeft > 0.05) addWallSegment(wLeft, h3D, T, -w3D / 2 + wLeft / 2, h3D / 2, d3D / 2);
        if (wRight > 0.05) addWallSegment(wRight, h3D, T, x2 + wRight / 2, h3D / 2, d3D / 2);
        if (wLintel > 0.05 && hLintel > 0.05) addWallSegment(wLintel, hLintel, T, (x1 + x2) / 2, doorH + hLintel / 2, d3D / 2);
    } else {
        addWallSegment(w3D, h3D, T, 0, h3D / 2, d3D / 2);
    }

    // 3. West Wall (x = -w3D/2, spans z from -d3D/2 to +d3D/2)
    if (wallDoors.W.length > 0) {
        wallDoors.W.sort((a, b) => a.u3D - b.u3D);
        let currZ = -d3D / 2;
        wallDoors.W.forEach(doorInfo => {
            const u = doorInfo.u3D;
            const z1 = Math.max(currZ, u - doorW / 2);
            const z2 = Math.min(d3D / 2, u + doorW / 2);
            const dSeg = z1 - currZ;
            const dLintel = z2 - z1;
            const hLintel = h3D - doorH;

            if (dSeg > 0.05) addWallSegment(T, h3D, dSeg, -w3D / 2, h3D / 2, currZ + dSeg / 2);
            if (dLintel > 0.05 && hLintel > 0.05) addWallSegment(T, hLintel, dLintel, -w3D / 2, doorH + hLintel / 2, (z1 + z2) / 2);
            currZ = z2;
        });
        const dRem = (d3D / 2) - currZ;
        if (dRem > 0.05) addWallSegment(T, h3D, dRem, -w3D / 2, h3D / 2, currZ + dRem / 2);
    } else {
        addWallSegment(T, h3D, d3D, -w3D / 2, h3D / 2, 0);
    }

    // 4. East Wall (x = +w3D/2, spans z from -d3D/2 to +d3D/2)
    if (wallDoors.E.length > 0) {
        wallDoors.E.sort((a, b) => a.u3D - b.u3D);
        let currZ = -d3D / 2;
        wallDoors.E.forEach(doorInfo => {
            const u = doorInfo.u3D;
            const z1 = Math.max(currZ, u - doorW / 2);
            const z2 = Math.min(d3D / 2, u + doorW / 2);
            const dSeg = z1 - currZ;
            const dLintel = z2 - z1;
            const hLintel = h3D - doorH;

            if (dSeg > 0.05) addWallSegment(T, h3D, dSeg, w3D / 2, h3D / 2, currZ + dSeg / 2);
            if (dLintel > 0.05 && hLintel > 0.05) addWallSegment(T, hLintel, dLintel, w3D / 2, doorH + hLintel / 2, (z1 + z2) / 2);
            currZ = z2;
        });
        const dRem = (d3D / 2) - currZ;
        if (dRem > 0.05) addWallSegment(T, h3D, dRem, w3D / 2, h3D / 2, currZ + dRem / 2);
    } else {
        addWallSegment(T, h3D, d3D, w3D / 2, h3D / 2, 0);
    }

    return group;
}

function computeAll3DDoors(map) {
    const doorList = [];
    const placedDoorKeys = new Set();
    if (!map || !map.edges) return doorList;

    map.edges.forEach(([uId, vId]) => {
        const u = map.nodes.find(n => n.id === uId);
        const v = map.nodes.find(n => n.id === vId);
        if (!u || !v || u.roomId === v.roomId) return;

        const roomU = map.rooms.find(r => r.id === u.roomId);
        const roomV = map.rooms.find(r => r.id === v.roomId);
        const doorPlacements = [];

        if (roomU) {
            const hitU = intersectSegmentWithRect(u.x, u.y, v.x, v.y, roomU);
            if (hitU) doorPlacements.push({ ...hitU, targetNodeId: v.id, fromNodeId: u.id, roomName: roomV ? roomV.name : v.id });
        }
        if (roomV) {
            const hitV = intersectSegmentWithRect(v.x, v.y, u.x, u.y, roomV);
            if (hitV) doorPlacements.push({ ...hitV, targetNodeId: u.id, fromNodeId: v.id, roomName: roomU ? roomU.name : u.id });
        }

        if (doorPlacements.length === 2 && Math.hypot(doorPlacements[0].x - doorPlacements[1].x, doorPlacements[0].y - doorPlacements[1].y) < 55) {
            const midX = (doorPlacements[0].x + doorPlacements[1].x) / 2;
            const midY = (doorPlacements[0].y + doorPlacements[1].y) / 2;
            const key = `${Math.round(midX / 20)}_${Math.round(midY / 20)}`;
            if (!placedDoorKeys.has(key)) {
                placedDoorKeys.add(key);
                doorList.push({
                    x: midX,
                    y: midY,
                    orientation: doorPlacements[0].orientation,
                    angle: doorPlacements[0].orientation === "vertical" ? Math.PI / 2 : 0,
                    uId: u.id,
                    vId: v.id,
                    roomUId: u.roomId,
                    roomVId: v.roomId,
                    roomU,
                    roomV,
                    roomUName: roomU ? roomU.name : u.roomId,
                    roomVName: roomV ? roomV.name : v.roomId
                });
            }
        } else if (doorPlacements.length > 0) {
            doorPlacements.forEach(dp => {
                const key = `${Math.round(dp.x / 18)}_${Math.round(dp.y / 18)}`;
                if (!placedDoorKeys.has(key)) {
                    placedDoorKeys.add(key);
                    doorList.push({
                        x: dp.x,
                        y: dp.y,
                        orientation: dp.orientation,
                        angle: dp.orientation === "vertical" ? Math.PI / 2 : 0,
                        uId: u.id,
                        vId: v.id,
                        roomUId: u.roomId,
                        roomVId: v.roomId,
                        roomU,
                        roomV,
                        roomUName: roomU ? roomU.name : u.roomId,
                        roomVName: roomV ? roomV.name : v.roomId
                    });
                }
            });
        } else {
            const midX = (u.x + v.x) / 2;
            const midY = (u.y + v.y) / 2;
            const key = `${Math.round(midX / 20)}_${Math.round(midY / 20)}`;
            if (!placedDoorKeys.has(key)) {
                placedDoorKeys.add(key);
                const isVertical = Math.abs(u.y - v.y) > Math.abs(u.x - v.x);
                const orientation = isVertical ? "horizontal" : "vertical";
                doorList.push({
                    x: midX,
                    y: midY,
                    orientation,
                    angle: orientation === "vertical" ? Math.PI / 2 : 0,
                    uId: u.id,
                    vId: v.id,
                    roomUId: u.roomId,
                    roomVId: v.roomId,
                    roomU,
                    roomV,
                    roomUName: roomU ? roomU.name : u.roomId,
                    roomVName: roomV ? roomV.name : v.roomId
                });
            }
        }
    });
    return doorList;
}

/***********************************************************************
 * 7. ACTUAL 3D MATTERPORT PANORAMA & DOLLHOUSE ENGINE (OPTIMIZED)
 ***********************************************************************/
function initThreeMatterportEngine() {
    const canvas = document.getElementById("matterport3DCanvas");
    const wrapper = document.getElementById("matterport3DWrapper");
    const stage = document.getElementById("unifiedStageWrapper");
    if (!canvas || !wrapper || typeof THREE === "undefined") return;

    const w = (stage && stage.clientWidth > 50) ? stage.clientWidth : ((wrapper && wrapper.clientWidth > 50) ? wrapper.clientWidth : 800);
    const h = (stage && stage.clientHeight > 50) ? stage.clientHeight : ((wrapper && wrapper.clientHeight > 50) ? wrapper.clientHeight : 500);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(VIEWPORT_PALETTE.envBackground);
    scene.fog = new THREE.FogExp2(VIEWPORT_PALETTE.envBackground, 0.007);

    // Near plane set to 0.05m with doorway wall cutouts eliminating near-clipping
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.05, 140);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));

    const ambientLight = new THREE.AmbientLight(0xf0eee7, 1.15);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xdfe6dc, 0.75);
    dirLight1.position.set(16, 26, 14);
    scene.add(dirLight1);

    const fillLight = new THREE.DirectionalLight(0xa8ada9, 0.45);
    fillLight.position.set(-16, 20, -14);
    scene.add(fillLight);

    const worldGroup = new THREE.Group();
    const dynamicTrajectoryGroup = new THREE.Group();
    scene.add(worldGroup);
    scene.add(dynamicTrajectoryGroup);

    // Initialize 360° Panorama dual-sphere background engine
    PanoramaManager.init(scene);

    threeState.scene = scene;
    threeState.camera = camera;
    threeState.renderer = renderer;
    threeState.worldGroup = worldGroup;
    threeState.dynamicTrajectoryGroup = dynamicTrajectoryGroup;

    setup3DViewportInteractions(canvas);
}

function disposeThreeGroup(group) {
    if (!group) return;
    while (group.children.length > 0) {
        const child = group.children[0];
        group.remove(child);
        if (child.children && child.children.length > 0) {
            disposeThreeGroup(child);
        }
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
            if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
            else child.material.dispose();
        }
    }
}

function map2DTo3D(x2d, y2d) {
    const cx = threeState.mapCenter2D.x;
    const cy = threeState.mapCenter2D.y;
    return {
        x: (x2d - cx) * SCALE_3D,
        z: (y2d - cy) * SCALE_3D
    };
}

function schedule3DSceneRebuild() {
    if (threeState.rebuildScheduled) return;
    threeState.rebuildScheduled = true;
    requestAnimationFrame(() => {
        threeState.rebuildScheduled = false;
        rebuild3DMatterportScene();
    });
}

function rebuild3DMatterportScene() {
    if (!threeState.worldGroup || typeof THREE === "undefined") return;
    const map = getActiveMap();
    if (!map) return;

    disposeThreeGroup(threeState.worldGroup);
    threeState.clickableHotspots = [];
    threeState.hotspotRingsById = {};
    threeState.roomFloorsById = {};
    threeState.wallMaterials = [];
    threeState.labelAnchors = [];

    // Precompute all 3D doors first so room walls can cut open portal frames around them
    threeState.doorPoints2D = computeAll3DDoors(map);

    if (map.rooms.length > 0) {
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
        map.rooms.forEach(r => {
            minX = Math.min(minX, r.x);
            maxX = Math.max(maxX, r.x + r.w);
            minY = Math.min(minY, r.y);
            maxY = Math.max(maxY, r.y + r.h);
        });
        threeState.mapCenter2D = { x: (minX + maxX) / 2, y: (minY + maxY) / 2 };
    } else {
        threeState.mapCenter2D = { x: 380, y: 215 };
    }

    const toggleGridEl = document.getElementById("toggleGrid");
    const showGrid = toggleGridEl ? toggleGridEl.checked : true;
    const toggleLandmarksEl = document.getElementById("toggleLandmarks");
    const showModels = toggleLandmarksEl ? toggleLandmarksEl.checked : true;

    // 1. Lightweight Global Ground Grid
    if (showGrid) {
        const globalGrid = new THREE.GridHelper(44, 24, VIEWPORT_PALETTE.gridGuides, 0x24292B);
        globalGrid.position.y = -0.02;
        globalGrid.material.transparent = true;
        globalGrid.material.opacity = 0.55;
        threeState.worldGroup.add(globalGrid);
    }

    // 2. Build 3D Rooms with Semantic Colors and Distinct Architectural Outlines
    map.rooms.forEach(room => {
        const roomGroup = new THREE.Group();
        const center2D = { x: room.x + room.w / 2, y: room.y + room.h / 2 };
        const pos3D = map2DTo3D(center2D.x, center2D.y);
        const w3D = room.w * SCALE_3D;
        const d3D = room.h * SCALE_3D;
        const h3D = WALL_HEIGHT_3D;

        roomGroup.position.set(pos3D.x, 0, pos3D.z);
        const isGoalRoom = map.nodes.some(n => n.id === agentState.goalNodeId && n.roomId === room.id);
        const isStartRoom = map.nodes.some(n => n.id === agentState.startNodeId && n.roomId === room.id);
        const semanticHex = getSemanticRoomColor(room);
        const roomHex = new THREE.Color(semanticHex);

        // 2A. Interactive Floor Plate (Rich Architectural Palette & Outlines)
        const floorGeo = new THREE.PlaneGeometry(w3D, d3D);
        const floorMat = new THREE.MeshBasicMaterial({
            color: roomHex,
            transparent: true,
            opacity: isGoalRoom ? 0.68 : (isStartRoom ? 0.58 : 0.48),
            side: THREE.DoubleSide,
            depthWrite: false
        });
        const floorMesh = new THREE.Mesh(floorGeo, floorMat);
        floorMesh.rotation.x = -Math.PI / 2;
        floorMesh.position.y = 0.01;
        floorMesh.userData = { roomId: room.id };
        roomGroup.add(floorMesh);
        threeState.clickableHotspots.push(floorMesh);
        threeState.roomFloorsById[room.id] = { mat: floorMat, baseColor: roomHex };

        // Floor Perimeter Outline for clear physical boundaries
        const floorEdgesGeo = new THREE.EdgesGeometry(floorGeo);
        const floorEdgesMat = new THREE.LineBasicMaterial({
            color: isGoalRoom ? VIEWPORT_PALETTE.waypoints : (isStartRoom ? VIEWPORT_PALETTE.navigationPath : 0x394144),
            transparent: true,
            opacity: 0.95
        });
        const floorOutline = new THREE.LineSegments(floorEdgesGeo, floorEdgesMat);
        floorOutline.rotation.x = -Math.PI / 2;
        floorOutline.position.y = 0.015;
        roomGroup.add(floorOutline);

        // 2B. Optimized Architectural Grid Lines
        if (showGrid) {
            const roomGrid = createRoomArchitecturalGrid(w3D, h3D, d3D, roomHex, isGoalRoom);
            roomGroup.add(roomGrid);
        }

        // 2C. Fast Lambert Architectural Walls with Doorway Portal Openings (No Near-Plane Wall Slicing)
        const wallColor = new THREE.Color(VIEWPORT_PALETTE.walls).lerp(roomHex, 0.20);
        const wallMat = new THREE.MeshLambertMaterial({
            color: wallColor,
            transparent: true,
            opacity: threeState.wallOpacity,
            side: THREE.DoubleSide,
            depthWrite: false
        });
        threeState.wallMaterials.push(wallMat);

        const edgesMat = new THREE.LineBasicMaterial({
            color: isGoalRoom ? VIEWPORT_PALETTE.waypoints : (isStartRoom ? VIEWPORT_PALETTE.navigationPath : 0x59636B),
            transparent: true,
            opacity: 0.90
        });
        const wallsGroup = createRoomWallsWithOpenings(room, w3D, h3D, d3D, wallMat, edgesMat, threeState.doorPoints2D);
        roomGroup.add(wallsGroup);

        // 2D. Procedural 3D Furniture / Landmarks
        if (showModels && room.landmarks && room.landmarks.length > 0) {
            room.landmarks.forEach((lmName, idx) => {
                const model3D = createProcedural3DLandmark(lmName, roomHex, idx, room.landmarks.length, w3D, d3D);
                roomGroup.add(model3D);

                const worldLmPos = new THREE.Vector3(
                    pos3D.x + model3D.position.x,
                    model3D.userData.labelHeight || 1.25,
                    pos3D.z + model3D.position.z
                );
                threeState.labelAnchors.push({
                    pos: worldLmPos,
                    text: lmName,
                    type: "landmark",
                    color: "#22d3ee"
                });
            });
        }

        threeState.labelAnchors.push({
            pos: new THREE.Vector3(pos3D.x, h3D + 0.35, pos3D.z),
            text: getLocalizedRoomName(room),
            type: "room",
            color: room.color || "#818cf8"
        });

        threeState.worldGroup.add(roomGroup);
    });

    // 3. Render Topological Navigation Graph Edges in 3D
    map.edges.forEach(([uId, vId]) => {
        const u = map.nodes.find(n => n.id === uId);
        const v = map.nodes.find(n => n.id === vId);
        if (!u || !v) return;
        const p1 = map2DTo3D(u.x, u.y);
        const p2 = map2DTo3D(v.x, v.y);

        const pts = [new THREE.Vector3(p1.x, 0.08, p1.z), new THREE.Vector3(p2.x, 0.08, p2.z)];
        const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
        const lineMat = new THREE.LineBasicMaterial({
            color: VIEWPORT_PALETTE.graphEdges,
            transparent: true,
            opacity: 0.65
        });
        const line = new THREE.Line(lineGeo, lineMat);
        threeState.worldGroup.add(line);
    });

    // 3B. Build 3D Doors & Architectural Portals Where Agent Travels Room-to-Room
    const toggleDoorsEl = document.getElementById("toggleDoors");
    const showDoors = toggleDoorsEl ? toggleDoorsEl.checked : true;
    if (showDoors && threeState.doorPoints2D) {
        threeState.doorPoints2D.forEach(door => {
            const dMesh = create3DDoorwayMesh(door.x, door.y, door.orientation, door.uId, door.vId, door.roomU, door.roomV);
            threeState.worldGroup.add(dMesh);
        });
    }

    // 4. Render Interactive Matterport 3D Viewpoint Floor Hotspots
    map.nodes.forEach(node => {
        const p = map2DTo3D(node.x, node.y);
        const hotspotGroup = new THREE.Group();
        hotspotGroup.position.set(p.x, 0.05, p.z);

        const ringGeo = new THREE.RingGeometry(0.30, 0.44, 16);
        const ringMat = new THREE.MeshBasicMaterial({
            color: VIEWPORT_PALETTE.waypoints,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.92
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = -Math.PI / 2;
        hotspotGroup.add(ringMesh);

        const cylGeo = new THREE.CylinderGeometry(0.30, 0.30, 0.5, 12, 1, true);
        const cylMat = new THREE.MeshBasicMaterial({
            color: VIEWPORT_PALETTE.waypoints,
            transparent: true,
            opacity: 0.24,
            side: THREE.DoubleSide,
            depthWrite: false
        });
        const cylMesh = new THREE.Mesh(cylGeo, cylMat);
        cylMesh.position.y = 0.25;
        hotspotGroup.add(cylMesh);

        const hitGeo = new THREE.CylinderGeometry(0.48, 0.48, 0.85, 8);
        const hitMat = new THREE.MeshBasicMaterial({ visible: false });
        const hitMesh = new THREE.Mesh(hitGeo, hitMat);
        hitMesh.position.y = 0.42;
        hitMesh.userData = { nodeId: node.id };
        hotspotGroup.add(hitMesh);

        threeState.clickableHotspots.push(hitMesh);
        threeState.hotspotRingsById[node.id] = { ringMat, cylMat, cylMesh };
        threeState.worldGroup.add(hotspotGroup);

        threeState.labelAnchors.push({
            pos: new THREE.Vector3(p.x, 0.65, p.z),
            text: node.id,
            type: "node",
            color: "#e2e8f0"
        });
    });

    // 5. 3D Agent Avatar & Heading Frustum Cone (Architectural Palette)
    const agentGroup = new THREE.Group();
    const bodyGeo = new THREE.CylinderGeometry(0.22, 0.28, 1.35, 10);
    const bodyMat = new THREE.MeshBasicMaterial({ color: VIEWPORT_PALETTE.agentPosition, transparent: true, opacity: 0.7, wireframe: true });
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    bodyMesh.position.y = 0.7;
    agentGroup.add(bodyMesh);

    const coneGeo = new THREE.ConeGeometry(0.55, 1.4, 4);
    coneGeo.rotateX(Math.PI / 2);
    const coneEdges = new THREE.EdgesGeometry(coneGeo);
    const coneLine = new THREE.LineSegments(coneEdges, new THREE.LineBasicMaterial({ color: VIEWPORT_PALETTE.fovCone }));
    coneLine.position.set(0, 1.35, 0.7);
    agentGroup.add(coneLine);

    threeState.agentMeshGroup = agentGroup;
    threeState.worldGroup.add(agentGroup);

    // Preload panoramic background textures along planned route
    PanoramaManager.preloadRoute(agentState.plannedPath, map);
    const currNode = map.nodes.find(n => n.id === agentState.currentNodeId) || map.nodes[0];
    if (currNode) {
        PanoramaManager.setActiveRoom(currNode.roomId, map);
    }

    update3DTrajectoryAndHighlights();
    syncAgentTo3DScene(false);
}

function update3DTrajectoryAndHighlights() {
    if (!threeState.dynamicTrajectoryGroup || typeof THREE === "undefined") return;
    disposeThreeGroup(threeState.dynamicTrajectoryGroup);

    const map = getActiveMap();
    if (!map) return;
    const currNode = map.nodes.find(n => n.id === agentState.currentNodeId);
    const activeRoomId = currNode ? currNode.roomId : null;

    map.nodes.forEach(node => {
        const refs = threeState.hotspotRingsById[node.id];
        if (!refs) return;
        const isStart = node.id === agentState.startNodeId;
        const isGoal = node.id === agentState.goalNodeId;
        const isCurrent = node.id === agentState.currentNodeId;
        const hex = isGoal ? VIEWPORT_PALETTE.waypoints : (isCurrent ? VIEWPORT_PALETTE.agentPosition : (isStart ? VIEWPORT_PALETTE.navigationPath : VIEWPORT_PALETTE.graphEdges));
        refs.ringMat.color.setHex(hex);
        refs.cylMat.color.setHex(hex);
        refs.cylMat.opacity = isCurrent ? 0.45 : 0.22;
    });

    map.rooms.forEach(room => {
        const floorRef = threeState.roomFloorsById[room.id];
        if (!floorRef) return;
        const isActiveRoom = room.id === activeRoomId;
        const isGoalRoom = map.nodes.some(n => n.id === agentState.goalNodeId && n.roomId === room.id);
        const isStartRoom = map.nodes.some(n => n.id === agentState.startNodeId && n.roomId === room.id);
        floorRef.mat.opacity = isActiveRoom ? 0.75 : (isGoalRoom ? 0.68 : (isStartRoom ? 0.58 : 0.48));
    });

    if (agentState.executedNodes.length > 1) {
        const pathPts = [];
        agentState.executedNodes.forEach(nid => {
            const n = map.nodes.find(node => node.id === nid);
            if (n) {
                const p = map2DTo3D(n.x, n.y);
                pathPts.push(new THREE.Vector3(p.x, 0.14, p.z));
            }
        });
        if (pathPts.length > 1) {
            const curve = new THREE.CatmullRomCurve3(pathPts);
            const tubeGeo = new THREE.TubeGeometry(curve, pathPts.length * 6, 0.065, 6, false);
            const tubeMat = new THREE.MeshBasicMaterial({ color: VIEWPORT_PALETTE.navigationPath });
            const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
            threeState.dynamicTrajectoryGroup.add(tubeMesh);
        }
    } else if (agentState.plannedPath && agentState.plannedPath.length > 1) {
        const planPts = [];
        agentState.plannedPath.forEach(nid => {
            const n = map.nodes.find(node => node.id === nid);
            if (n) {
                const p = map2DTo3D(n.x, n.y);
                planPts.push(new THREE.Vector3(p.x, 0.10, p.z));
            }
        });
        if (planPts.length > 1) {
            const curve = new THREE.CatmullRomCurve3(planPts);
            const tubeGeo = new THREE.TubeGeometry(curve, planPts.length * 6, 0.035, 6, false);
            const tubeMat = new THREE.MeshBasicMaterial({
                color: VIEWPORT_PALETTE.navigationPath,
                transparent: true,
                opacity: 0.55
            });
            const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
            threeState.dynamicTrajectoryGroup.add(tubeMesh);
        }
    }
}

function createRoomArchitecturalGrid(w, h, d, color, isGoal) {
    const pts = [];
    const step = 1.35;
    const halfW = w / 2;
    const halfD = d / 2;

    for (let x = -halfW; x <= halfW + 0.01; x += step) {
        pts.push(new THREE.Vector3(x, 0.02, -halfD), new THREE.Vector3(x, 0.02, halfD));
        pts.push(new THREE.Vector3(x, 0, -halfD), new THREE.Vector3(x, h, -halfD));
        pts.push(new THREE.Vector3(x, 0, halfD), new THREE.Vector3(x, h, halfD));
    }
    for (let z = -halfD; z <= halfD + 0.01; z += step) {
        pts.push(new THREE.Vector3(-halfW, 0.02, z), new THREE.Vector3(halfW, 0.02, z));
        pts.push(new THREE.Vector3(-halfW, 0, z), new THREE.Vector3(-halfW, h, z));
        pts.push(new THREE.Vector3(halfW, 0, z), new THREE.Vector3(halfW, h, z));
    }
    const midY = h * 0.5;
    pts.push(new THREE.Vector3(-halfW, midY, -halfD), new THREE.Vector3(halfW, midY, -halfD));
    pts.push(new THREE.Vector3(halfW, midY, -halfD), new THREE.Vector3(halfW, midY, halfD));
    pts.push(new THREE.Vector3(halfW, midY, halfD), new THREE.Vector3(-halfW, midY, halfD));
    pts.push(new THREE.Vector3(-halfW, midY, halfD), new THREE.Vector3(-halfW, midY, -halfD));

    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const mat = new THREE.LineBasicMaterial({
        color: isGoal ? 0x10b981 : color,
        transparent: true,
        opacity: 0.25
    });
    return new THREE.LineSegments(geo, mat);
}

function intersectSegmentWithRect(x1, y1, x2, y2, room) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const walls = [
        { x1: room.x, y1: room.y, x2: room.x + room.w, y2: room.y, orientation: "horizontal" },
        { x1: room.x, y1: room.y + room.h, x2: room.x + room.w, y2: room.y + room.h, orientation: "horizontal" },
        { x1: room.x, y1: room.y, x2: room.x, y2: room.y + room.h, orientation: "vertical" },
        { x1: room.x + room.w, y1: room.y, x2: room.x + room.w, y2: room.y + room.h, orientation: "vertical" }
    ];

    let bestHit = null;
    let bestT = Infinity;

    walls.forEach(w => {
        const rdx = w.x2 - w.x1;
        const rdy = w.y2 - w.y1;
        const denom = dx * rdy - dy * rdx;
        if (Math.abs(denom) < 1e-5) return;
        const t = ((w.x1 - x1) * rdy - (w.y1 - y1) * rdx) / denom;
        const u = ((w.x1 - x1) * dy - (w.y1 - y1) * dx) / denom;
        if (t >= 0.01 && t <= 0.99 && u >= 0.01 && u <= 0.99 && t < bestT) {
            bestT = t;
            bestHit = {
                x: x1 + t * dx,
                y: y1 + t * dy,
                orientation: w.orientation
            };
        }
    });
    return bestHit;
}

function create3DDoorwayMesh(x2d, y2d, orientation, nodeUId, nodeVId, roomU, roomV) {
    const group = new THREE.Group();
    const p = map2DTo3D(x2d, y2d);
    group.position.set(p.x, 0, p.z);
    if (orientation === "vertical") {
        group.rotation.y = Math.PI / 2;
    }

    const doorW = 1.35;
    const doorH = 2.45;
    const postThick = 0.12;

    const frameMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.9 });
    const leftPost = new THREE.Mesh(new THREE.BoxGeometry(postThick, doorH, postThick), frameMat);
    leftPost.position.set(-doorW / 2, doorH / 2, 0);
    group.add(leftPost);

    const rightPost = new THREE.Mesh(new THREE.BoxGeometry(postThick, doorH, postThick), frameMat);
    rightPost.position.set(doorW / 2, doorH / 2, 0);
    group.add(rightPost);

    const topLintel = new THREE.Mesh(new THREE.BoxGeometry(doorW + postThick, postThick, postThick), frameMat);
    topLintel.position.set(0, doorH, 0);
    group.add(topLintel);

    // Architectural Doorway Corridor Vestibule Floor: Spans 2.6m deep across the doorway threshold
    // so there is NEVER an empty dark void beneath the camera while transitioning between rooms!
    const vestibuleGeo = new THREE.PlaneGeometry(doorW + 0.4, 2.6);
    const vestibuleMat = new THREE.MeshBasicMaterial({
        color: 0x1e293b,
        transparent: true,
        opacity: 0.85,
        side: THREE.DoubleSide,
        depthWrite: false
    });
    const vestibuleMesh = new THREE.Mesh(vestibuleGeo, vestibuleMat);
    vestibuleMesh.rotation.x = -Math.PI / 2;
    vestibuleMesh.position.y = 0.02;
    group.add(vestibuleMesh);

    // Golden threshold step
    const threshGeo = new THREE.PlaneGeometry(doorW, 0.45);
    const threshMat = new THREE.MeshBasicMaterial({
        color: 0xf59e0b,
        transparent: true,
        opacity: 0.85,
        side: THREE.DoubleSide,
        depthWrite: false
    });
    const threshMesh = new THREE.Mesh(threshGeo, threshMat);
    threshMesh.rotation.x = -Math.PI / 2;
    threshMesh.position.y = 0.03;
    group.add(threshMesh);

    // Corridor side walls (jambs) to enclose the transition corridor and eliminate black voids
    const jambMat = new THREE.MeshBasicMaterial({
        color: 0x1e2325,
        transparent: true,
        opacity: 0.65,
        side: THREE.DoubleSide,
        depthWrite: false
    });
    const leftJamb = new THREE.Mesh(new THREE.BoxGeometry(0.06, doorH, 2.6), jambMat);
    leftJamb.position.set(-doorW / 2 - 0.03, doorH / 2, 0);
    group.add(leftJamb);

    const rightJamb = new THREE.Mesh(new THREE.BoxGeometry(0.06, doorH, 2.6), jambMat);
    rightJamb.position.set(doorW / 2 + 0.03, doorH / 2, 0);
    group.add(rightJamb);

    // Warm overhead doorway light so the transition zone is continuously illuminated
    const doorPointLight = new THREE.PointLight(0xfef08a, 1.8, 9.0);
    doorPointLight.position.set(0, doorH - 0.15, 0);
    group.add(doorPointLight);

    // Fully swung open door leaf (folded back towards the wall post so camera glides freely)
    const leafPivot = new THREE.Group();
    leafPivot.position.set(-doorW / 2, 0, 0);
    leafPivot.rotation.y = 1.48; // fully open

    const leafGeo = new THREE.BoxGeometry(doorW * 0.88, doorH - 0.06, 0.04);
    const leafMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.28,
        depthWrite: false
    });
    const leafMesh = new THREE.Mesh(leafGeo, leafMat);
    leafMesh.position.set((doorW * 0.88) / 2, (doorH - 0.06) / 2, 0);
    leafPivot.add(leafMesh);

    const leafEdges = new THREE.LineSegments(
        new THREE.EdgesGeometry(leafGeo),
        new THREE.LineBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.85 })
    );
    leafEdges.position.copy(leafMesh.position);
    leafPivot.add(leafEdges);

    const handleMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 0.04, 0.14),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    handleMesh.position.set(doorW * 0.76, 1.02, 0);
    leafPivot.add(handleMesh);

    group.add(leafPivot);

    const hitBox = new THREE.Mesh(
        new THREE.BoxGeometry(doorW * 1.25, doorH, 1.2),
        new THREE.MeshBasicMaterial({ visible: false })
    );
    hitBox.position.y = doorH / 2;
    hitBox.userData = {
        doorBetween: [nodeUId, nodeVId],
        doorPos2D: { x: x2d, y: y2d },
        roomUId: roomU ? roomU.id : null,
        roomVId: roomV ? roomV.id : null,
        roomUName: roomU ? roomU.name : nodeUId,
        roomVName: roomV ? roomV.name : nodeVId
    };
    group.add(hitBox);
    threeState.clickableHotspots.push(hitBox);

    return group;
}

function createProcedural3DLandmark(name, roomColor, index, total, roomW, roomD) {
    const group = new THREE.Group();
    const lower = name.toLowerCase();

    function addPart(w, h, d, x, y, z, hexColor = VIEWPORT_PALETTE.furniture) {
        const geo = new THREE.BoxGeometry(w, h, d);
        const mat = new THREE.MeshBasicMaterial({
            color: hexColor,
            transparent: true,
            opacity: 0.28,
            depthWrite: false
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, y, z);
        group.add(mesh);

        const edgeGeo = new THREE.EdgesGeometry(geo);
        const wireMat = new THREE.LineBasicMaterial({
            color: hexColor,
            transparent: true,
            opacity: 0.85
        });
        const wire = new THREE.LineSegments(edgeGeo, wireMat);
        wire.position.set(x, y, z);
        group.add(wire);
    }

    if (lower.includes("sofa") || lower.includes("couch")) {
        addPart(1.7, 0.42, 0.75, 0, 0.21, 0, VIEWPORT_PALETTE.furniture);
        addPart(1.7, 0.55, 0.2, 0, 0.65, -0.28, VIEWPORT_PALETTE.furniture);
        addPart(0.22, 0.48, 0.75, -0.75, 0.45, 0, VIEWPORT_PALETTE.furniture);
        addPart(0.22, 0.48, 0.75, 0.75, 0.45, 0, VIEWPORT_PALETTE.furniture);
        group.userData.labelHeight = 1.25;
    } else if (lower.includes("bed")) {
        addPart(1.65, 0.45, 1.9, 0, 0.225, 0, 0x789c91);
        addPart(1.65, 1.05, 0.16, 0, 0.525, -0.88, 0x789c91);
        addPart(0.55, 0.14, 0.35, -0.38, 0.52, -0.6, 0xd8d4c9);
        addPart(0.55, 0.14, 0.35, 0.38, 0.52, -0.6, 0xd8d4c9);
        group.userData.labelHeight = 1.35;
    } else if (lower.includes("fridge") || lower.includes("wardrobe") || lower.includes("bookshelf") || lower.includes("cluster")) {
        addPart(0.85, 1.85, 0.65, 0, 0.925, 0, VIEWPORT_PALETTE.furniture);
        addPart(0.87, 0.04, 0.67, 0, 0.6, 0, 0x82909b);
        addPart(0.87, 0.04, 0.67, 0, 1.2, 0, 0x82909b);
        group.userData.labelHeight = 2.1;
    } else if (lower.includes("table") || lower.includes("desk") || lower.includes("counter") || lower.includes("island")) {
        addPart(1.45, 0.1, 0.85, 0, 0.75, 0, 0x789c91);
        addPart(0.1, 0.75, 0.1, -0.62, 0.375, -0.34, 0x59636b);
        addPart(0.1, 0.75, 0.1, 0.62, 0.375, -0.34, 0x59636b);
        addPart(0.1, 0.75, 0.1, -0.62, 0.375, 0.34, 0x59636b);
        addPart(0.1, 0.75, 0.1, 0.62, 0.375, 0.34, 0x59636b);
        group.userData.labelHeight = 1.15;
    } else if (lower.includes("tv") || lower.includes("screen") || lower.includes("whiteboard") || lower.includes("painting")) {
        addPart(1.4, 0.82, 0.08, 0, 1.35, 0, 0x55bfd0);
        addPart(0.5, 0.55, 0.3, 0, 0.275, 0, 0x2b3234);
        group.userData.labelHeight = 1.95;
    } else {
        addPart(0.7, 0.85, 0.7, 0, 0.425, 0, VIEWPORT_PALETTE.furniture);
        group.userData.labelHeight = 1.2;
    }

    const angle = (index / Math.max(1, total)) * Math.PI * 2 + 0.5;
    const rx = Math.max(0.6, roomW * 0.33);
    const rz = Math.max(0.6, roomD * 0.33);
    group.position.set(Math.cos(angle) * rx, 0, Math.sin(angle) * rz);

    return group;
}

function syncAgentTo3DScene(snapImmediately = false) {
    const map = getActiveMap();
    if (!map) return;
    const currNode = map.nodes.find(n => n.id === agentState.currentNodeId) || map.nodes[0];
    const currRoom = currNode ? map.rooms.find(r => r.id === currNode.roomId) : null;

    const tx = agentState.targetX !== undefined ? agentState.targetX : (agentState.x || 135);
    const ty = agentState.targetY !== undefined ? agentState.targetY : (agentState.y || 125);
    if (snapImmediately) {
        agentState.x = tx;
        agentState.y = ty;
        threeState.walkWaypoints = [];
        threeState.currentWaypointIndex = 0;
        if (currRoom) {
            PanoramaManager.setActiveRoom(currRoom.id, map);
        }
    }

    const p3d = map2DTo3D(tx, ty);
    if (threeState.camDesiredPos && threeState.orbitDesiredTarget) {
        if (snapImmediately || !threeState.walkWaypoints || threeState.walkWaypoints.length === 0) {
            threeState.camDesiredPos.set(p3d.x, 1.55, p3d.z);
            threeState.orbitDesiredTarget.set(p3d.x, 0.9, p3d.z);
        }
        if (snapImmediately) {
            threeState.camCurrentPos.copy(threeState.camDesiredPos);
            threeState.orbitTarget.copy(threeState.orbitDesiredTarget);
        }
    }

    const targetYaw = -(agentState.headingDeg * Math.PI) / 180 + Math.PI / 2;
    threeState.desiredPanoYaw = targetYaw;
    if (snapImmediately || threeState.panoYaw === undefined) {
        threeState.panoYaw = targetYaw;
    }

    if (threeState.agentMeshGroup) {
        const curr3D = map2DTo3D(agentState.x || tx, agentState.y || ty);
        threeState.agentMeshGroup.position.set(curr3D.x, 0, curr3D.z);
        threeState.agentMeshGroup.rotation.y = targetYaw;
        threeState.agentMeshGroup.visible = (threeState.cameraMode === "dollhouse");
    }

    const landmarks = (currRoom && currRoom.landmarks) ? currRoom.landmarks : ["Corridor"];
    document.getElementById("currentRoomBadge").textContent = currRoom ? currRoom.name : "Hallway";
    document.getElementById("egoPoseText").textContent = `Node: ${currNode ? currNode.id : "N/A"} | Heading: ${agentState.headingDeg}°`;
    document.getElementById("egoLandmarksText").textContent = `3D Models: ${landmarks.join(", ")}`;
}

function set3DCameraMode(mode) {
    threeState.cameraMode = mode;
    const wrap3D = document.getElementById("matterport3DWrapper");
    const wrap2D = document.getElementById("canvasWrapper");
    const hint = document.getElementById("hud3DHint");

    const activeSidebarCls = "py-2 px-2 rounded-lg bg-[#2B3234] border border-[#55BFD0] text-[#55BFD0] text-xs font-semibold flex items-center justify-center gap-1.5 transition";
    const inactiveSidebarCls = "py-2 px-2 rounded-lg bg-[#1E2325] border border-[#394144] text-[#A8ADA9] hover:text-[#F0EEE7] text-xs font-semibold flex items-center justify-center gap-1.5 transition";

    const activeHudCls = "px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#55BFD0] text-[#171A1C] shadow-sm flex items-center gap-1.5 transition";
    const inactiveHudCls = "px-3 py-1.5 rounded-lg text-xs font-semibold text-[#A8ADA9] hover:text-[#F0EEE7] flex items-center gap-1.5 transition";

    ["panorama", "dollhouse", "map2d"].forEach(m => {
        const sBtn = document.getElementById(`camBtn-${m}`);
        if (sBtn) sBtn.className = (m === mode) ? activeSidebarCls : inactiveSidebarCls;
    });

    document.getElementById("hudBtnPanorama").className = (mode === "panorama") ? activeHudCls : inactiveHudCls;
    document.getElementById("hudBtnDollhouse").className = (mode === "dollhouse") ? activeHudCls : inactiveHudCls;
    document.getElementById("hudBtnMap2D").className = (mode === "map2d") ? activeHudCls : inactiveHudCls;

    if (mode === "map2d") {
        wrap3D.classList.add("hidden");
        wrap2D.classList.remove("hidden");
        hint.innerHTML = `<i class="fa-solid fa-map text-indigo-400"></i> 2D Topological Map: Click any room or node to move agent • Use Room & Map Builder to edit layout`;
        handleResize();
        renderCanvas();
    } else {
        wrap2D.classList.add("hidden");
        wrap3D.classList.remove("hidden");
        handleResize();

        if (mode === "panorama") {
            hint.innerHTML = `<i class="fa-solid fa-street-view text-cyan-400"></i> 360° Panorama: Drag to look around • Click glowing 3D rings or 3D doors to travel room-to-room`;
        } else {
            hint.innerHTML = `<i class="fa-solid fa-cubes text-cyan-400"></i> 3D Dollhouse: Drag to orbit 3D architecture • Scroll to zoom • Click any room, door, or node`;
        }
    }

    if (threeState.agentMeshGroup) {
        threeState.agentMeshGroup.visible = (mode === "dollhouse");
    }

    PanoramaManager.setVisible(mode === "panorama");
    if (mode === "panorama" && threeState.camera) {
        PanoramaManager.updatePosition(threeState.camera.position);
    }
}

function update3DWallOpacity(val) {
    threeState.wallOpacity = parseFloat(val);
    threeState.wallMaterials.forEach(mat => {
        mat.opacity = threeState.wallOpacity;
    });
}

function toggle3DAutoRotate() {
    threeState.autoRotate = !threeState.autoRotate;
    const btn = document.getElementById("hudBtnAutoRotate");
    btn.className = threeState.autoRotate
        ? "px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 text-slate-950 shadow-md flex items-center gap-1.5 transition"
        : "px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white border-l border-slate-800 transition";
}

function setup3DViewportInteractions(canvas) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    canvas.addEventListener("pointerdown", (e) => {
        threeState.isDragging = true;
        threeState.desiredPanoYaw = undefined;
        threeState.dragStartX = e.clientX;
        threeState.dragStartY = e.clientY;
        threeState.pointerDownPos = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener("pointermove", (e) => {
        if (!threeState.isDragging) {
            const rect = canvas.getBoundingClientRect();
            if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
                mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
                mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
                raycaster.setFromCamera(mouse, threeState.camera);
                const hits = raycaster.intersectObjects(threeState.clickableHotspots, false);
                if (hits.length > 0 && hits[0].object.userData && (hits[0].object.userData.doorBetween || hits[0].object.userData.nodeId)) {
                    canvas.style.cursor = "pointer";
                } else {
                    canvas.style.cursor = (threeState.cameraMode === "map2d") ? "crosshair" : "grab";
                }
            }
            return;
        }
        const dx = e.clientX - threeState.dragStartX;
        const dy = e.clientY - threeState.dragStartY;
        threeState.dragStartX = e.clientX;
        threeState.dragStartY = e.clientY;

        if (threeState.cameraMode === "panorama") {
            threeState.panoYaw -= dx * 0.0065;
            threeState.panoPitch = Math.max(-1.15, Math.min(1.15, threeState.panoPitch - dy * 0.0055));
            agentState.headingDeg = Math.round(((Math.PI / 2 - threeState.panoYaw) * 180) / Math.PI) % 360;
            document.getElementById("egoPoseText").textContent = `Node: ${agentState.currentNodeId} | Heading: ${agentState.headingDeg}°`;
            renderCanvas();
        } else {
            threeState.orbitTheta -= dx * 0.0075;
            threeState.orbitPhi = Math.max(0.2, Math.min(Math.PI / 2 - 0.06, threeState.orbitPhi - dy * 0.0065));
        }
    });

    window.addEventListener("pointerup", (e) => {
        if (!threeState.isDragging) return;
        threeState.isDragging = false;

        const moveDist = Math.hypot(e.clientX - threeState.pointerDownPos.x, e.clientY - threeState.pointerDownPos.y);
        if (moveDist < 6) {
            const rect = canvas.getBoundingClientRect();
            if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
                mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
                mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
                raycaster.setFromCamera(mouse, threeState.camera);
                const hits = raycaster.intersectObjects(threeState.clickableHotspots, false);
                if (hits.length > 0) {
                    const hitData = hits[0].object.userData;
                    const map = getActiveMap();
                    if (currentMode === "editor") {
                        if (hitData.nodeId) {
                            selectedEntity = { type: "node", id: hitData.nodeId };
                            updateSelectedEntityInspector();
                            renderRoomsListInEditor();
                            renderCanvas();
                            onClicked3DHotspot(hitData.nodeId, false, false);
                        } else if (hitData.doorBetween) {
                            const [uId, vId] = hitData.doorBetween;
                            const nodeU = map ? map.nodes.find(n => n.id === uId) : null;
                            const nodeV = map ? map.nodes.find(n => n.id === vId) : null;
                            const roomU = nodeU && map ? map.rooms.find(r => r.id === nodeU.roomId) : null;
                            const roomV = nodeV && map ? map.rooms.find(r => r.id === nodeV.roomId) : null;
                            selectedEntity = {
                                type: "door",
                                id: `${uId}_${vId}`,
                                uId,
                                vId,
                                roomUId: hitData.roomUId || (nodeU ? nodeU.roomId : null),
                                roomVId: hitData.roomVId || (nodeV ? nodeV.roomId : null),
                                roomUName: hitData.roomUName || (roomU ? roomU.name : uId),
                                roomVName: hitData.roomVName || (roomV ? roomV.name : vId)
                            };
                            updateSelectedEntityInspector();
                            renderRoomsListInEditor();
                            renderCanvas();

                            // In Panorama view, walking through the clicked doorway into connected room
                            if (threeState.cameraMode === "panorama") {
                                const nextId = (agentState.currentNodeId === uId) ? vId : uId;
                                onClicked3DHotspot(nextId, false, false, hitData.doorPos2D);
                            }
                        } else if (hitData.roomId) {
                            selectedEntity = { type: "room", id: hitData.roomId };
                            updateSelectedEntityInspector();
                            renderRoomsListInEditor();
                            renderCanvas();
                            switchPanoramaToRoom(hitData.roomId);
                        }
                    } else {
                        // simulator mode
                        if (hitData.nodeId) {
                            onClicked3DHotspot(hitData.nodeId, false, true);
                        } else if (hitData.doorBetween) {
                            const [uId, vId] = hitData.doorBetween;
                            const nextId = (agentState.currentNodeId === uId) ? vId : uId;
                            onClicked3DHotspot(nextId, false, false, hitData.doorPos2D);
                        } else if (hitData.roomId) {
                            switchPanoramaToRoom(hitData.roomId);
                        }
                    }
                }
            }
        }
    });

    canvas.addEventListener("wheel", (e) => {
        e.preventDefault();
        if (threeState.cameraMode === "panorama") {
            threeState.panoFov = Math.max(40, Math.min(100, threeState.panoFov + e.deltaY * 0.04));
            threeState.camera.fov = threeState.panoFov;
            threeState.camera.updateProjectionMatrix();
            document.getElementById("hud3DFovText").textContent = `FOV: ${Math.round(threeState.panoFov)}° | Pace: ${agentState.walkingPace.toFixed(1)}x`;
        } else {
            threeState.orbitRadius = Math.max(6, Math.min(42, threeState.orbitRadius + e.deltaY * 0.015));
            document.getElementById("hud3DFovText").textContent = `Zoom: ${threeState.orbitRadius.toFixed(1)}m | Pace: ${agentState.walkingPace.toFixed(1)}x`;
        }
    }, { passive: false });
}

function onClicked3DHotspot(nodeId, autoSwitchToPanorama = false, isDirectUserAction = true, viaDoorPos2D = null) {
    const map = getActiveMap();
    if (!map) return;
    const targetNode = map.nodes.find(n => n.id === nodeId);
    if (!targetNode) return;

    if (nodeId === agentState.currentNodeId) return;

    // Plan connected path from current node to clicked target
    const hopPath = computeShortestPath(agentState.currentNodeId, targetNode.id);
    if (!hopPath || hopPath.length <= 1) {
        const currNode = map.nodes.find(n => n.id === agentState.currentNodeId);
        const currRoom = currNode ? map.rooms.find(r => r.id === currNode.roomId) : null;
        const targetRoom = map.rooms.find(r => r.id === targetNode.roomId);
        showToast(`No connected path from ${currRoom ? currRoom.name : agentState.currentNodeId} to ${targetRoom ? targetRoom.name : targetNode.id}!`, "warn");
        return;
    }

    stopSimulationTimer();

    // Walk through each hop in hopPath continuously
    let hopIndex = 0;
    function walkNextInPath() {
        if (hopIndex >= hopPath.length - 1) {
            const finalRoom = map.rooms.find(r => r.id === targetNode.roomId);
            showToast(`Arrived at ${finalRoom ? finalRoom.name : targetNode.id}`, "success");
            return;
        }
        const u = hopPath[hopIndex];
        const v = hopPath[hopIndex + 1];
        hopIndex++;
        walkSingleHop(u, v, () => {
            walkNextInPath();
        });
    }

    const room = map.rooms.find(r => r.id === targetNode.roomId);
    showToast(`Walking to ${room ? room.name : targetNode.id} (${agentState.walkingPace.toFixed(1)}x)`, "info");
    walkNextInPath();
}

let lastThreeTimestamp = 0;
function animateThreeLoop(timestamp) {
    requestAnimationFrame(animateThreeLoop);
    if (!threeState.renderer || !threeState.scene || !threeState.camera) return;

    const now = (typeof timestamp === "number" && !isNaN(timestamp)) ? timestamp : performance.now();
    if (!lastThreeTimestamp || isNaN(lastThreeTimestamp)) lastThreeTimestamp = now;
    const deltaMs = now - lastThreeTimestamp;
    const dt = Math.min(0.05, Math.max(0.005, (deltaMs > 0 && !isNaN(deltaMs)) ? (deltaMs / 1000) : 0.016));
    lastThreeTimestamp = now;

    // Linear physical walking speed (m/s) scaled proportionally by walkingPace slider
    const walkSpeed = 2.8 * Math.max(0.35, agentState.walkingPace);

    // Multi-stage waypoint navigation (e.g. Room A -> Doorway Portal -> Room B)
    if (threeState.walkWaypoints && threeState.walkWaypoints.length > threeState.currentWaypointIndex) {
        const currWp = threeState.walkWaypoints[threeState.currentWaypointIndex];
        threeState.camDesiredPos.set(currWp.x3D, 1.55, currWp.z3D);
        agentState.targetX = currWp.x2D;
        agentState.targetY = currWp.y2D;
        if (currWp.yaw !== undefined) {
            threeState.desiredPanoYaw = currWp.yaw;
        }
    }

    const dx3D = threeState.camDesiredPos.x - threeState.camCurrentPos.x;
    const dz3D = threeState.camDesiredPos.z - threeState.camCurrentPos.z;
    const dist3D = Math.hypot(dx3D, dz3D);
    const isWalking = dist3D > 0.04;

    if (isNaN(agentState.walkBobPhase)) agentState.walkBobPhase = 0;

    if (isWalking && dist3D > 0.001) {
        const stepDist = Math.min(dist3D, Math.max(0, walkSpeed * dt));
        if (!isNaN(stepDist) && stepDist > 0) {
            threeState.camCurrentPos.x += (dx3D / dist3D) * stepDist;
            threeState.camCurrentPos.z += (dz3D / dist3D) * stepDist;
            agentState.walkBobPhase = (agentState.walkBobPhase + (stepDist / 0.5) * Math.PI * 2) % (Math.PI * 200);
        }

        // Smooth continuous panorama crossfade during doorway traversal
        if (threeState.walkWaypoints && threeState.walkWaypoints.length > 1) {
            const totalWp = threeState.walkWaypoints.length;
            const progress = (threeState.currentWaypointIndex + Math.max(0, 1.0 - (dist3D - stepDist) / Math.max(0.01, dist3D))) / totalWp;
            PanoramaManager.updateTransition(progress);
        }
    } else {
        threeState.camCurrentPos.x = threeState.camDesiredPos.x;
        threeState.camCurrentPos.z = threeState.camDesiredPos.z;

        // Check if current waypoint crossed doorway into connected room
        if (threeState.walkWaypoints && threeState.walkWaypoints.length > threeState.currentWaypointIndex) {
            const completedWp = threeState.walkWaypoints[threeState.currentWaypointIndex];
            if (completedWp.enteredRoomId) {
                const map = getActiveMap();
                if (map) {
                    const enteredRoom = map.rooms.find(r => r.id === completedWp.enteredRoomId);
                    if (enteredRoom) {
                        const badge = document.getElementById("currentRoomBadge");
                        if (badge) badge.textContent = enteredRoom.name;
                        const lmBadge = document.getElementById("egoLandmarksText");
                        if (lmBadge && enteredRoom.landmarks) {
                            lmBadge.textContent = `3D Models: ${enteredRoom.landmarks.join(", ")}`;
                        }
                    }
                }
            }
        }

        // Advance to next waypoint (e.g. crossing doorway threshold into connected room)
        if (threeState.walkWaypoints && threeState.currentWaypointIndex < threeState.walkWaypoints.length - 1) {
            threeState.currentWaypointIndex++;
            const nextWp = threeState.walkWaypoints[threeState.currentWaypointIndex];
            threeState.camDesiredPos.set(nextWp.x3D, 1.55, nextWp.z3D);
            agentState.targetX = nextWp.x2D;
            agentState.targetY = nextWp.y2D;
            if (nextWp.yaw !== undefined) {
                threeState.desiredPanoYaw = nextWp.yaw;
            }
        } else {
            // Reached final viewpoint of this hop
            threeState.walkWaypoints = [];
            threeState.desiredPanoYaw = undefined;
            const map = getActiveMap();
            PanoramaManager.completeTransition(map);

            if (agentState.isWalking && agentState.onHopComplete) {
                const cb = agentState.onHopComplete;
                agentState.onHopComplete = null;
                cb();
            }
        }
    }

    if (agentState.targetX !== undefined && agentState.targetY !== undefined) {
        const dx2d = agentState.targetX - agentState.x;
        const dy2d = agentState.targetY - agentState.y;
        const dist2D = Math.hypot(dx2d, dy2d);
        if (dist2D > 0.4) {
            const speed2D = walkSpeed / SCALE_3D; // canvas pixels per second
            const step2D = Math.min(dist2D, speed2D * dt);
            agentState.x += (dx2d / dist2D) * step2D;
            agentState.y += (dy2d / dist2D) * step2D;
            agentState.headingDeg = Math.round(Math.atan2(dy2d, dx2d) * 180 / Math.PI);
        } else {
            agentState.x = agentState.targetX;
            agentState.y = agentState.targetY;
        }
        if (dist2D > 0.4 || isWalking) {
            renderCanvas();
        }
    }

    if (threeState.autoRotate) {
        if (threeState.cameraMode === "panorama") {
            threeState.panoYaw += 0.003;
        } else if (threeState.cameraMode === "dollhouse") {
            threeState.orbitTheta += 0.004;
        }
    } else if (threeState.desiredPanoYaw !== undefined && isWalking && !threeState.isDragging) {
        // Smoothly orient head and avatar towards walking path only while walking
        let diffYaw = (threeState.desiredPanoYaw - threeState.panoYaw) % (Math.PI * 2);
        if (diffYaw > Math.PI) diffYaw -= Math.PI * 2;
        if (diffYaw < -Math.PI) diffYaw += Math.PI * 2;
        if (Math.abs(diffYaw) > 0.005) {
            threeState.panoYaw += diffYaw * Math.min(1.0, 5.0 * dt);
        }
    }

    // Smoothly orbit camera follows the continuous avatar position in dollhouse mode
    threeState.orbitDesiredTarget.set(threeState.camCurrentPos.x, 0.9, threeState.camCurrentPos.z);
    threeState.orbitTarget.lerp(threeState.orbitDesiredTarget, Math.min(1.0, 6.0 * dt));

    if (threeState.agentMeshGroup) {
        const walkBob = isWalking
            ? Math.abs(Math.sin(agentState.walkBobPhase)) * (0.06 * Math.min(1.0, agentState.walkingPace))
            : 0;
        threeState.agentMeshGroup.position.set(threeState.camCurrentPos.x, walkBob, threeState.camCurrentPos.z);
        threeState.agentMeshGroup.rotation.y = threeState.panoYaw;
    }

    if (threeState.cameraMode === "panorama") {
        // Natural human walking motion: vertical head bob + subtle lateral sway
        const headBob = isWalking ? Math.sin(agentState.walkBobPhase) * (0.032 * Math.min(1.0, agentState.walkingPace)) : 0;
        const headSway = isWalking ? Math.cos(agentState.walkBobPhase * 0.5) * (0.014 * Math.min(1.0, agentState.walkingPace)) : 0;

        // Sideways sway perpendicular to camera orientation
        const perpX = Math.cos(threeState.panoYaw) * headSway;
        const perpZ = -Math.sin(threeState.panoYaw) * headSway;

        const hBob = (!isNaN(headBob) && isFinite(headBob)) ? headBob : 0;
        const pX = (!isNaN(perpX) && isFinite(perpX)) ? perpX : 0;
        const pZ = (!isNaN(perpZ) && isFinite(perpZ)) ? perpZ : 0;

        if (!isNaN(threeState.camCurrentPos.x) && !isNaN(threeState.camCurrentPos.z)) {
            threeState.camera.position.set(
                threeState.camCurrentPos.x + pX,
                threeState.camCurrentPos.y + hBob,
                threeState.camCurrentPos.z + pZ
            );
        }

        const lookDir = new THREE.Vector3(
            Math.sin(threeState.panoYaw) * Math.cos(threeState.panoPitch),
            Math.sin(threeState.panoPitch),
            Math.cos(threeState.panoYaw) * Math.cos(threeState.panoPitch)
        );
        const target = threeState.camera.position.clone().add(lookDir);
        threeState.camera.lookAt(target);
        PanoramaManager.updatePosition(threeState.camera.position);
    } else if (threeState.cameraMode === "dollhouse") {
        const ox = threeState.orbitTarget.x + threeState.orbitRadius * Math.sin(threeState.orbitPhi) * Math.sin(threeState.orbitTheta);
        const oy = threeState.orbitTarget.y + threeState.orbitRadius * Math.cos(threeState.orbitPhi);
        const oz = threeState.orbitTarget.z + threeState.orbitRadius * Math.sin(threeState.orbitPhi) * Math.cos(threeState.orbitTheta);
        threeState.camera.position.set(ox, oy, oz);
        threeState.camera.lookAt(threeState.orbitTarget);
    }

    if (threeState.cameraMode !== "map2d") {
        threeState.renderer.render(threeState.scene, threeState.camera);
        if (!timestamp || timestamp - threeState.lastLabelUpdateMs > 40) {
            threeState.lastLabelUpdateMs = timestamp || 0;
            updateProjected3DLabels();
        }
    }
}

function updateProjected3DLabels() {
    const container = document.getElementById("labels3DContainer");
    const toggleNodeIdsEl = document.getElementById("toggleNodeIds");
    const showLabels = toggleNodeIdsEl ? toggleNodeIdsEl.checked : true;
    if (!container) return;
    if (!showLabels || threeState.cameraMode === "map2d") {
        container.innerHTML = "";
        return;
    }

    const canvas = document.getElementById("matterport3DCanvas");
    if (!canvas) return;
    const W = canvas.clientWidth;
    const H = canvas.clientHeight;

    while (container.children.length < threeState.labelAnchors.length) {
        const el = document.createElement("div");
        el.className = "label-3d absolute px-1.5 py-0.5 rounded text-[10px] font-mono whitespace-nowrap -translate-x-1/2 -translate-y-1/2";
        container.appendChild(el);
    }
    while (container.children.length > threeState.labelAnchors.length) {
        container.removeChild(container.lastChild);
    }

    const tempV = new THREE.Vector3();
    const camPos = threeState.camera.position;
    const camDir = new THREE.Vector3();
    threeState.camera.getWorldDirection(camDir);

    threeState.labelAnchors.forEach((anchor, i) => {
        const el = container.children[i];
        if (!el) return;

        // Frustum culling: Vector from camera to anchor
        tempV.copy(anchor.pos).sub(camPos);
        const distToCam = tempV.length();
        const dot = tempV.normalize().dot(camDir);

        // Hide labels behind or beside the camera or too far away in panorama mode
        if (dot < 0.25 || (threeState.cameraMode === "panorama" && distToCam > 24)) {
            el.style.opacity = "0";
            return;
        }

        tempV.copy(anchor.pos);
        tempV.project(threeState.camera);

        if (tempV.z > 1 || tempV.z < -1) {
            el.style.opacity = "0";
            return;
        }

        const x = (tempV.x * 0.5 + 0.5) * W;
        const y = (-(tempV.y * 0.5) + 0.5) * H;

        if (x < 10 || x > W - 10 || y < 10 || y > H - 10) {
            el.style.opacity = "0";
            return;
        }

        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.opacity = "1";
        el.textContent = anchor.text;

        if (anchor.type === "room") {
            el.style.backgroundColor = "rgba(15, 23, 42, 0.85)";
            el.style.border = `1px solid ${anchor.color}`;
            el.style.color = "#f8fafc";
            el.style.fontWeight = "600";
        } else if (anchor.type === "landmark") {
            el.style.backgroundColor = "rgba(8, 51, 68, 0.78)";
            el.style.border = "1px solid rgba(34, 211, 238, 0.45)";
            el.style.color = "#67e8f9";
        } else {
            el.style.backgroundColor = "rgba(15, 23, 42, 0.75)";
            el.style.color = anchor.color;
        }
    });
}

/***********************************************************************
 * 8. INTERACTIVE 2D MAP & ROOM BUILDER ENGINE
 ***********************************************************************/
function setEditorTool(tool) {
    editorTool = tool;
    edgeSourceNodeId = null;
    isConnectingDrag = false;
    ["select", "addRoom", "addNode", "connectEdge"].forEach(t => {
        const btn = document.getElementById(`toolBtn-${t}`);
        if (!btn) return;
        if (t === tool) {
            btn.className = "p-2 rounded-xl border border-[#B8D96B] bg-[rgba(184,217,107,0.14)] text-[#F0EEE7] text-xs font-semibold flex flex-col items-center gap-1 transition";
        } else {
            btn.className = "p-2 rounded-xl border border-[#394144] bg-[#1E2325] text-[#A8ADA9] hover:text-[#F0EEE7] text-xs font-medium flex flex-col items-center gap-1 transition";
        }
    });

    const hints = {
        select: "Drag rooms or viewpoint nodes on the 2D canvas to reposition them in 2D & 3D.",
        addRoom: "Click anywhere on the 2D floorplan canvas to place a new Room with 3D walls & waypoint.",
        addNode: "Click anywhere on the 2D floorplan canvas to drop a new Viewpoint Node.",
        connectEdge: "Link Nodes: Click or drag from a source viewpoint to a target viewpoint (or use the dropdown below)."
    };
    document.getElementById("editorToolHint").innerHTML = `<i class="fa-solid fa-circle-info text-indigo-400 mr-1"></i> ${hints[tool]}`;
    const activeLinkInd = document.getElementById("activeLinkIndicator");
    if (activeLinkInd) activeLinkInd.textContent = (tool === "connectEdge") ? "Interactive Mode" : "Click or Pick";
    renderCanvas();
}

function setupCanvasEvents() {
    if (!floorplanCanvas) return;
    floorplanCanvas.addEventListener("pointerdown", onCanvasPointerDown);
    floorplanCanvas.addEventListener("pointermove", onCanvasPointerMove);
    window.addEventListener("pointerup", onCanvasPointerUp);
}

function getCanvasCoords(e) {
    if (!floorplanCanvas) return { x: 0, y: 0 };
    const rect = floorplanCanvas.getBoundingClientRect();
    const scaleX = rect.width ? (floorplanCanvas.width / rect.width) : 1;
    const scaleY = rect.height ? (floorplanCanvas.height / rect.height) : 1;
    return {
        x: Math.round((e.clientX - rect.left) * scaleX),
        y: Math.round((e.clientY - rect.top) * scaleY)
    };
}

function onCanvasPointerDown(e) {
    const pt = getCanvasCoords(e);
    const map = getActiveMap();
    if (!map) return;

    if (currentMode === "simulator") {
        const clickedNode = map.nodes.find(n => Math.hypot(n.x - pt.x, n.y - pt.y) <= 20);
        if (clickedNode) {
            onClicked3DHotspot(clickedNode.id, true);
            return;
        }
        const clickedRoom = map.rooms.find(r => pt.x >= r.x && pt.x <= r.x + r.w && pt.y >= r.y && pt.y <= r.y + r.h);
        if (clickedRoom) {
            switchPanoramaToRoom(clickedRoom.id);
        }
        return;
    }

    if (editorTool === "addRoom") {
        createRoomAtPosition(pt.x, pt.y);
        return;
    }

    if (editorTool === "addNode") {
        createNodeAtPosition(pt.x, pt.y);
        return;
    }

    if (editorTool === "connectEdge") {
        const clickedNode = map.nodes.find(n => Math.hypot(n.x - pt.x, n.y - pt.y) <= 25);
        if (clickedNode) {
            if (!edgeSourceNodeId) {
                edgeSourceNodeId = clickedNode.id;
                isConnectingDrag = true;
                showToast(`Selected source ${clickedNode.id}. Now click or drag to destination node.`, "info");
            } else if (edgeSourceNodeId === clickedNode.id) {
                showToast(`Deselected ${clickedNode.id}`, "info");
                edgeSourceNodeId = null;
                isConnectingDrag = false;
            } else {
                connectNodes(edgeSourceNodeId, clickedNode.id);
                edgeSourceNodeId = null;
                isConnectingDrag = false;
            }
            renderCanvas();
        } else {
            if (edgeSourceNodeId) {
                showToast(`Source ${edgeSourceNodeId} is active. Click a destination node to complete link (or click ${edgeSourceNodeId} to cancel).`, "info");
            }
        }
        return;
    }

    // Check if clicked the [✕ Delete] button on the selected room
    if (selectedEntity && selectedEntity.type === "room") {
        const selRoom = map.rooms.find(r => r.id === selectedEntity.id);
        if (selRoom) {
            const btnW = 54;
            const btnH = 20;
            const btnX = selRoom.x + selRoom.w - btnW - 6;
            const btnY = selRoom.y + 6;
            if (pt.x >= btnX && pt.x <= btnX + btnW && pt.y >= btnY && pt.y <= btnY + btnH) {
                removeRoomById(selRoom.id);
                return;
            }
        }
    }

    const hitNode = map.nodes.find(n => Math.hypot(n.x - pt.x, n.y - pt.y) <= 22);
    if (hitNode) {
        selectedEntity = { type: "node", id: hitNode.id };
        dragTarget = { type: "node", id: hitNode.id, offsetX: pt.x - hitNode.x, offsetY: pt.y - hitNode.y };
        agentState.currentNodeId = hitNode.id;
        agentState.executedNodes = [hitNode.id]; // Reset executed nodes so no stray yellow lines appear across unlinked rooms
        agentState.x = hitNode.x;
        agentState.y = hitNode.y;
        agentState.targetX = hitNode.x;
        agentState.targetY = hitNode.y;
        syncAgentTo3DScene(false);
        updateSelectedEntityInspector();
        renderRoomsListInEditor();
        renderCanvas();
        return;
    }

    if (threeState.doorPoints2D && threeState.doorPoints2D.length > 0) {
        const hitDoor = threeState.doorPoints2D.find(d => Math.hypot(d.x - pt.x, d.y - pt.y) <= 22);
        if (hitDoor) {
            selectedEntity = {
                type: "door",
                id: `${hitDoor.uId}_${hitDoor.vId}`,
                uId: hitDoor.uId,
                vId: hitDoor.vId,
                roomUId: hitDoor.roomUId,
                roomVId: hitDoor.roomVId,
                roomUName: hitDoor.roomUName,
                roomVName: hitDoor.roomVName
            };
            updateSelectedEntityInspector();
            renderRoomsListInEditor();
            renderCanvas();
            return;
        }
    }

    for (let i = map.rooms.length - 1; i >= 0; i--) {
        const r = map.rooms[i];
        if (pt.x >= r.x && pt.x <= r.x + r.w && pt.y >= r.y && pt.y <= r.y + r.h) {
            selectedEntity = { type: "room", id: r.id };
            dragTarget = { type: "room", id: r.id, offsetX: pt.x - r.x, offsetY: pt.y - r.y };
            switchPanoramaToRoom(r.id);
            updateSelectedEntityInspector();
            renderRoomsListInEditor();
            renderCanvas();
            return;
        }
    }

    selectedEntity = null;
    updateSelectedEntityInspector();
    renderRoomsListInEditor();
    renderCanvas();
}

function onCanvasPointerMove(e) {
    mousePos = getCanvasCoords(e);
    if (currentMode === "editor" && editorTool === "connectEdge" && edgeSourceNodeId) {
        renderCanvas();
    }
    if (!dragTarget) return;

    const map = getActiveMap();
    if (!map) return;
    if (dragTarget.type === "node") {
        const node = map.nodes.find(n => n.id === dragTarget.id);
        if (node) {
            node.x = Math.max(20, Math.min(floorplanCanvas.width - 20, mousePos.x - dragTarget.offsetX));
            node.y = Math.max(20, Math.min(floorplanCanvas.height - 20, mousePos.y - dragTarget.offsetY));
            const enclosingRoom = map.rooms.find(r => node.x >= r.x && node.x <= r.x + r.w && node.y >= r.y && node.y <= r.y + r.h);
            if (enclosingRoom) node.roomId = enclosingRoom.id;
            if (node.id === agentState.currentNodeId) {
                agentState.x = node.x;
                agentState.y = node.y;
                agentState.targetX = node.x;
                agentState.targetY = node.y;
                syncAgentTo3DScene(true);
            }
            updateSelectedEntityInspector();
        }
    } else if (dragTarget.type === "room") {
        const room = map.rooms.find(r => r.id === dragTarget.id);
        if (room) {
            const newX = Math.max(10, Math.min(floorplanCanvas.width - room.w - 10, mousePos.x - dragTarget.offsetX));
            const newY = Math.max(10, Math.min(floorplanCanvas.height - room.h - 10, mousePos.y - dragTarget.offsetY));
            const dx = newX - room.x;
            const dy = newY - room.y;
            room.x = newX;
            room.y = newY;
            map.nodes.filter(n => n.roomId === room.id).forEach(n => {
                n.x += dx;
                n.y += dy;
                if (n.id === agentState.currentNodeId) {
                    agentState.x = n.x;
                    agentState.y = n.y;
                    agentState.targetX = n.x;
                    agentState.targetY = n.y;
                    syncAgentTo3DScene(true);
                }
            });
            updateSelectedEntityInspector();
        }
    }
    renderCanvas();
}

function onCanvasPointerUp(e) {
    if (dragTarget) {
        dragTarget = null;
        syncMapToBackend(getActiveMap());
        schedule3DSceneRebuild();
    }
    if (isConnectingDrag && edgeSourceNodeId) {
        const pt = getCanvasCoords(e);
        const map = getActiveMap();
        if (map) {
            const targetNode = map.nodes.find(n => Math.hypot(n.x - pt.x, n.y - pt.y) <= 25 && n.id !== edgeSourceNodeId);
            if (targetNode) {
                connectNodes(edgeSourceNodeId, targetNode.id);
                edgeSourceNodeId = null;
            }
        }
        isConnectingDrag = false;
        renderCanvas();
    }
}

function connectNodes(id1, id2) {
    if (!id1 || !id2 || id1 === id2) return false;
    const map = getActiveMap();
    if (!map) return false;

    // Check if edge already exists
    const exists = map.edges.some(([a, b]) =>
        (a === id1 && b === id2) || (a === id2 && b === id1)
    );
    if (exists) {
        showToast(`Nodes ${id1} and ${id2} are already linked!`, "info");
        return false;
    }

    const n1 = map.nodes.find(n => n.id === id1);
    const n2 = map.nodes.find(n => n.id === id2);
    const r1 = n1 ? map.rooms.find(r => r.id === n1.roomId) : null;
    const r2 = n2 ? map.rooms.find(r => r.id === n2.roomId) : null;

    map.edges.push([id1, id2]);

    if (r1 && r2 && r1.id !== r2.id) {
        showToast(`🚪 Door created between ${r1.name} and ${r2.name}! Inter-room travel unlocked.`, "success");
        appendActionLog(`[DOORWAY] Door created between ${r1.name} ↔ ${r2.name}`);
    } else {
        showToast(`Connected viewpoints ${id1} ↔ ${id2}! Navigation path updated.`, "success");
    }

    // Recompute path for simulation immediately
    agentState.plannedPath = computeShortestPath(agentState.startNodeId, agentState.goalNodeId);
    updateMetricsDisplay();
    updateMapStatsHeader();
    populateLinkDropdowns();
    renderQuickRoomJumpBar();
    renderCanvas();
    syncMapToBackend(map);
    rebuild3DMatterportScene();
    return true;
}

function populateLinkDropdowns() {
    const selA = document.getElementById("linkNodeASelect");
    const selB = document.getElementById("linkNodeBSelect");
    if (!selA || !selB) return;
    const map = getActiveMap();
    if (!map || !map.nodes) return;

    const prevA = selA.value;
    const prevB = selB.value;

    selA.innerHTML = "";
    selB.innerHTML = "";

    if (map.nodes.length === 0) {
        const opt = document.createElement("option");
        opt.value = "";
        opt.textContent = "(No viewpoints)";
        selA.appendChild(opt);
        selB.appendChild(opt.cloneNode(true));
        return;
    }

    map.nodes.forEach((n, idx) => {
        const room = map.rooms.find(r => r.id === n.roomId);
        const text = `${n.id} — ${room ? room.name : (n.label || "Node")}`;
        
        const optA = document.createElement("option");
        optA.value = n.id;
        optA.textContent = text;
        selA.appendChild(optA);

        const optB = document.createElement("option");
        optB.value = n.id;
        optB.textContent = text;
        selB.appendChild(optB);
    });

    if (map.nodes.some(n => n.id === prevA)) selA.value = prevA;
    else selA.selectedIndex = 0;

    if (map.nodes.some(n => n.id === prevB)) selB.value = prevB;
    else if (map.nodes.length > 1) selB.selectedIndex = 1;
    else selB.selectedIndex = 0;
}

function linkNodesFromDropdown() {
    const selA = document.getElementById("linkNodeASelect");
    const selB = document.getElementById("linkNodeBSelect");
    if (!selA || !selB) return;
    const idA = selA.value;
    const idB = selB.value;
    if (!idA || !idB) {
        showToast("Please add at least 2 viewpoint nodes to link.", "warn");
        return;
    }
    if (idA === idB) {
        showToast("Please choose two different viewpoint nodes to link.", "warn");
        return;
    }
    connectNodes(idA, idB);
}

function updateSelectedEntityInspector() {
    const box = document.getElementById("selectedEntityBox");
    const sidebarDeleteBtn = document.getElementById("sidebarDeleteBtn");
    const sidebarDeleteBtnText = document.getElementById("sidebarDeleteBtnText");
    const sidebarSelTitle = document.getElementById("sidebarSelTitle");
    const sidebarSelSubtitle = document.getElementById("sidebarSelSubtitle");
    const sidebarSelTypeBadge = document.getElementById("sidebarSelTypeBadge");

    if (!selectedEntity || currentMode !== "editor") {
        if (box) box.classList.add("hidden");
        if (sidebarDeleteBtn) {
            sidebarDeleteBtn.classList.add("hidden");
            sidebarDeleteBtn.classList.remove("flex");
        }
        if (sidebarSelTitle) sidebarSelTitle.textContent = "No Item Selected";
        if (sidebarSelSubtitle) sidebarSelSubtitle.textContent = "Click any room, viewpoint node, or door to inspect or delete.";
        if (sidebarSelTypeBadge) sidebarSelTypeBadge.innerHTML = '<i class="fa-solid fa-hand-pointer text-indigo-400"></i> Selection Inspector';
        return;
    }

    const map = getActiveMap();
    if (!map) return;

    if (box) box.classList.remove("hidden");
    if (sidebarDeleteBtn) {
        sidebarDeleteBtn.classList.remove("hidden");
        sidebarDeleteBtn.classList.add("flex");
    }

    if (selectedEntity.type === "room") {
        const r = map.rooms.find(rm => rm.id === selectedEntity.id);
        if (r) {
            const nodeCount = map.nodes.filter(n => n.roomId === r.id).length;
            const title = `Room: ${r.name}`;
            const sub = `Size: ${r.w}×${r.h}px • Nodes: ${nodeCount} • Landmarks: ${(r.landmarks || []).join(", ") || "None"}`;

            if (box) {
                document.getElementById("selEntityTitle").textContent = title;
                document.getElementById("selEntitySub").textContent = sub;
            }
            if (sidebarSelTitle) sidebarSelTitle.textContent = title;
            if (sidebarSelSubtitle) sidebarSelSubtitle.textContent = sub;
            if (sidebarSelTypeBadge) sidebarSelTypeBadge.innerHTML = '<i class="fa-solid fa-vector-square text-emerald-400"></i> Room Selected';
            if (sidebarDeleteBtnText) sidebarDeleteBtnText.textContent = "Delete Room";
        }
    } else if (selectedEntity.type === "node") {
        const n = map.nodes.find(nd => nd.id === selectedEntity.id);
        if (n) {
            const room = map.rooms.find(r => r.id === n.roomId);
            const edgeCount = map.edges.filter(([u, v]) => u === n.id || v === n.id).length;
            const title = `Viewpoint Node: ${n.id}`;
            const sub = `Room: ${room ? room.name : "Unassigned"} • Pos: (${Math.round(n.x)}, ${Math.round(n.y)}) • Edges: ${edgeCount}`;

            if (box) {
                document.getElementById("selEntityTitle").textContent = title;
                document.getElementById("selEntitySub").textContent = sub;
            }
            if (sidebarSelTitle) sidebarSelTitle.textContent = title;
            if (sidebarSelSubtitle) sidebarSelSubtitle.textContent = sub;
            if (sidebarSelTypeBadge) sidebarSelTypeBadge.innerHTML = '<i class="fa-solid fa-location-dot text-cyan-400"></i> Node Selected';
            if (sidebarDeleteBtnText) sidebarDeleteBtnText.textContent = "Delete Node";
        }
    } else if (selectedEntity.type === "door") {
        const roomU = selectedEntity.roomUId ? map.rooms.find(r => r.id === selectedEntity.roomUId) : null;
        const roomV = selectedEntity.roomVId ? map.rooms.find(r => r.id === selectedEntity.roomVId) : null;
        const uName = roomU ? roomU.name : (selectedEntity.roomUName || selectedEntity.uId);
        const vName = roomV ? roomV.name : (selectedEntity.roomVName || selectedEntity.vId);
        const title = `Doorway: ${uName} ↔ ${vName}`;
        const sub = `Connects ${selectedEntity.uId} & ${selectedEntity.vId} • Deleting door will unlink rooms`;

        if (box) {
            document.getElementById("selEntityTitle").textContent = title;
            document.getElementById("selEntitySub").textContent = sub;
        }
        if (sidebarSelTitle) sidebarSelTitle.textContent = title;
        if (sidebarSelSubtitle) sidebarSelSubtitle.textContent = sub;
        if (sidebarSelTypeBadge) sidebarSelTypeBadge.innerHTML = '<i class="fa-solid fa-door-open text-amber-400"></i> Doorway Selected';
        if (sidebarDeleteBtnText) sidebarDeleteBtnText.textContent = "Delete Door & Unlink";
    }
}

function deleteSelectedEntity() {
    if (!selectedEntity) return;
    const map = getActiveMap();
    if (!map) return;

    if (selectedEntity.type === "room") {
        removeRoomById(selectedEntity.id);
    } else if (selectedEntity.type === "node") {
        removeNodeById(selectedEntity.id);
    } else if (selectedEntity.type === "door") {
        removeDoor(selectedEntity.uId, selectedEntity.vId, selectedEntity.roomUId, selectedEntity.roomVId);
    }
}

function removeNodeById(nodeId) {
    const map = getActiveMap();
    if (!map) return;

    map.nodes = map.nodes.filter(n => n.id !== nodeId);
    map.edges = map.edges.filter(([u, v]) => u !== nodeId && v !== nodeId);

    if (agentState.currentNodeId === nodeId && map.nodes.length > 0) {
        agentState.currentNodeId = map.nodes[0].id;
        agentState.x = map.nodes[0].x;
        agentState.y = map.nodes[0].y;
    }

    showToast(`Deleted viewpoint node ${nodeId}`, "warn");
    selectedEntity = null;
    updateSelectedEntityInspector();
    updateMapStatsHeader();
    populateLinkDropdowns();
    populateStartGoalDropdowns();
    renderRoomsListInEditor();
    renderCanvas();
    syncMapToBackend(map);
    rebuild3DMatterportScene();
}

function removeDoor(uId, vId, roomUId, roomVId) {
    const map = getActiveMap();
    if (!map) return;

    // Filter out edge(s) connecting these two nodes or connecting the two rooms
    map.edges = map.edges.filter(([u, v]) => {
        const matchesExact = (u === uId && v === vId) || (u === vId && v === uId);
        if (matchesExact) return false;
        if (roomUId && roomVId) {
            const nodeU = map.nodes.find(n => n.id === u);
            const nodeV = map.nodes.find(n => n.id === v);
            if (nodeU && nodeV) {
                const matchesRooms = (nodeU.roomId === roomUId && nodeV.roomId === roomVId) ||
                                     (nodeU.roomId === roomVId && nodeV.roomId === roomUId);
                if (matchesRooms) return false;
            }
        }
        return true;
    });

    const roomU = roomUId ? map.rooms.find(r => r.id === roomUId) : null;
    const roomV = roomVId ? map.rooms.find(r => r.id === roomVId) : null;
    const uName = roomU ? roomU.name : (roomUId || uId);
    const vName = roomV ? roomV.name : (roomVId || vId);

    showToast(`🚪 Door between ${uName} and ${vName} deleted. Rooms unlinked!`, "warn");
    appendActionLog(`[DOORWAY REMOVED] Door between ${uName} ↔ ${vName} deleted. Inter-room travel blocked.`);

    selectedEntity = null;
    updateSelectedEntityInspector();
    updateMapStatsHeader();
    populateLinkDropdowns();
    populateStartGoalDropdowns();
    renderQuickRoomJumpBar();
    renderRoomsListInEditor();
    renderCanvas();
    syncMapToBackend(map);
    rebuild3DMatterportScene();
}

function addBuiltRoomToMap() {
    addRoomDirectly();
}

function addRoomDirectly() {
    const cx = Math.round((floorplanCanvas ? floorplanCanvas.width : 800) / 2 + (Math.random() * 120 - 60));
    const cy = Math.round((floorplanCanvas ? floorplanCanvas.height : 480) / 2 + (Math.random() * 100 - 50));
    createRoomAtPosition(cx, cy);
}

function createRoomAtPosition(cx, cy) {
    const map = getActiveMap();
    if (!map) return;
    const nameInput = document.getElementById("newRoomName").value.trim();
    const roomName = nameInput || `Custom Room ${map.rooms.length + 1}`;
    const color = document.getElementById("newRoomColor").value || "#6366f1";
    const w = Math.max(80, Math.min(400, parseInt(document.getElementById("newRoomWidth").value, 10) || 170));
    const h = Math.max(80, Math.min(350, parseInt(document.getElementById("newRoomHeight").value, 10) || 130));
    const rawLandmarks = document.getElementById("newRoomLandmarks").value.trim();
    const landmarks = rawLandmarks
        ? rawLandmarks.split(",").map(s => s.trim()).filter(Boolean)
        : ["Table", "Sofa"];

    const canvasW = floorplanCanvas ? floorplanCanvas.width : 800;
    const canvasH = floorplanCanvas ? floorplanCanvas.height : 480;
    const rx = Math.max(15, Math.min(canvasW - w - 15, Math.round(cx - w / 2)));
    const ry = Math.max(15, Math.min(canvasH - h - 15, Math.round(cy - h / 2)));

    const newRoomId = `r_custom_${Date.now().toString().slice(-4)}`;
    const newRoom = {
        id: newRoomId,
        name: roomName,
        x: rx,
        y: ry,
        w: w,
        h: h,
        color: color,
        landmarks: landmarks
    };
    map.rooms.push(newRoom);

    const newNodeId = `vp_${map.nodes.length + 1}`;
    const nodeX = Math.round(rx + w / 2);
    const nodeY = Math.round(ry + h / 2);

    map.nodes.push({
        id: newNodeId,
        x: nodeX,
        y: nodeY,
        roomId: newRoomId,
        label: `${roomName} Center`
    });

    // Do NOT automatically link across rooms without a door. User explicitly links them.
    selectedEntity = { type: "room", id: newRoomId };

    // Auto-initialize start and goal nodes for simulation if this is a newly created map
    if (!agentState.startNodeId || map.nodes.length === 1) {
        agentState.startNodeId = newNodeId;
        agentState.goalNodeId = newNodeId;
        agentState.currentNodeId = newNodeId;
        agentState.x = nodeX;
        agentState.y = nodeY;
        agentState.targetX = nodeX;
        agentState.targetY = nodeY;
        syncAgentTo3DScene(true);
    } else if (map.nodes.length >= 2) {
        if (agentState.goalNodeId === agentState.startNodeId) {
            agentState.goalNodeId = newNodeId;
        }
    }

    // Generate starter preset if map doesn't have any
    if (!map.presets || !map.presets.en || map.presets.en.length === 0) {
        const startRoom = map.rooms[0]?.name || "Entrance";
        const goalRoom = roomName;
        map.presets = {
            en: [{
                title: `${startRoom} → ${goalRoom}`,
                text: `Start in the ${startRoom}, follow the pathway through the hallway, and reach the ${goalRoom}.`,
                start: agentState.startNodeId,
                goal: agentState.goalNodeId
            }],
            hi: [{
                title: `${startRoom} → ${goalRoom}`,
                text: `${startRoom} से शुरू करें और ${goalRoom} में जाएं।`,
                start: agentState.startNodeId,
                goal: agentState.goalNodeId
            }],
            te: [{
                title: `${startRoom} → ${goalRoom}`,
                text: `${startRoom} నుండి ${goalRoom}కి వెళ్లండి.`,
                start: agentState.startNodeId,
                goal: agentState.goalNodeId
            }]
        };
        populatePresetsDropdown();
        applyPresetInstruction();
    }

    agentState.plannedPath = computeShortestPath(agentState.startNodeId, agentState.goalNodeId);
    updateMetricsDisplay();

    document.getElementById("newRoomName").value = "";
    document.getElementById("newRoomLandmarks").value = "";

    updateMapStatsHeader();
    renderRoomsListInEditor();
    populateStartGoalDropdowns();
    populateLinkDropdowns();
    renderCanvas();
    syncMapToBackend(map);
    rebuild3DMatterportScene();
    showToast(`Added "${roomName}" with 3D model & viewpoint ${newNodeId}`, "success");
}

function createNodeAtPosition(x, y) {
    const map = getActiveMap();
    if (!map) return;
    const enclosingRoom = map.rooms.find(r => x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h);
    const newNodeId = `vp_${map.nodes.length + 1}`;
    const newNode = {
        id: newNodeId,
        x, y,
        roomId: enclosingRoom ? enclosingRoom.id : (map.rooms[0] ? map.rooms[0].id : ""),
        label: enclosingRoom ? `${enclosingRoom.name} Node` : `Node ${newNodeId}`
    };
    map.nodes.push(newNode);

    if (!agentState.startNodeId) {
        agentState.startNodeId = newNodeId;
        agentState.goalNodeId = newNodeId;
    } else if (agentState.goalNodeId === agentState.startNodeId) {
        agentState.goalNodeId = newNodeId;
    }
    agentState.plannedPath = computeShortestPath(agentState.startNodeId, agentState.goalNodeId);

    updateMapStatsHeader();
    populateStartGoalDropdowns();
    populateLinkDropdowns();
    renderCanvas();
    syncMapToBackend(map);
    rebuild3DMatterportScene();
    showToast(`Placed viewpoint node ${newNodeId}`, "info");
}

function autoConnectNearbyNodes() {
    const map = getActiveMap();
    if (!map) return;
    let added = 0;
    for (let i = 0; i < map.nodes.length; i++) {
        for (let j = i + 1; j < map.nodes.length; j++) {
            const u = map.nodes[i];
            const v = map.nodes[j];
            const dist = Math.hypot(u.x - v.x, u.y - v.y);
            if (dist <= 260) {
                const exists = map.edges.some(([a, b]) => (a === u.id && b === v.id) || (a === v.id && b === u.id));
                if (!exists) {
                    map.edges.push([u.id, v.id]);
                    added++;
                }
            }
        }
    }
    agentState.plannedPath = computeShortestPath(agentState.startNodeId, agentState.goalNodeId);
    updateMetricsDisplay();
    updateMapStatsHeader();
    populateLinkDropdowns();
    renderCanvas();
    syncMapToBackend(map);
    rebuild3DMatterportScene();
    showToast(`Auto-linked ${added} nearby viewpoint pairs!`, "success");
}

let editorElementsTab = "rooms"; // "rooms" | "nodes" | "doors"

function setEditorElementsTab(tab) {
    editorElementsTab = tab;
    ["rooms", "nodes", "doors"].forEach(t => {
        const btn = document.getElementById(`elemTab-${t}`);
        if (btn) {
            if (t === tab) {
                btn.className = "py-1 px-1.5 rounded-lg text-[11px] font-semibold bg-[#B8D96B] text-[#171A1C] transition flex items-center justify-center gap-1 shadow-sm";
            } else {
                btn.className = "py-1 px-1.5 rounded-lg text-[11px] font-semibold text-[#A8ADA9] hover:text-[#F0EEE7] transition flex items-center justify-center gap-1";
            }
        }
    });
    renderRoomsListInEditor();
}

function renderRoomsListInEditor() {
    const map = getActiveMap();
    const container = document.getElementById("roomsListContainer");
    if (!container || !map) return;
    container.innerHTML = "";

    // Update count labels
    const roomCountEl = document.getElementById("roomCountLabel");
    const nodeCountEl = document.getElementById("nodeCountLabel");
    const doorCountEl = document.getElementById("doorCountLabel");
    if (roomCountEl) roomCountEl.textContent = map.rooms.length;
    if (nodeCountEl) nodeCountEl.textContent = map.nodes.length;
    const doorCount = (threeState.doorPoints2D || []).length;
    if (doorCountEl) doorCountEl.textContent = doorCount;

    if (editorElementsTab === "rooms") {
        if (map.rooms.length === 0) {
            container.innerHTML = '<p class="text-xs text-slate-500 italic p-3 text-center">No rooms in this map. Click "Insert Room" above.</p>';
            return;
        }
        map.rooms.forEach(r => {
            const isSelected = selectedEntity && selectedEntity.type === "room" && selectedEntity.id === r.id;
            const item = document.createElement("div");
            item.className = `flex items-center justify-between border rounded-xl px-3 py-2 text-xs transition cursor-pointer ${
                isSelected ? "bg-indigo-900/40 border-indigo-500 shadow" : "bg-slate-900/85 border-slate-800 hover:border-slate-700"
            }`;
            item.onclick = (e) => {
                if (e.target.closest("button")) return;
                selectedEntity = { type: "room", id: r.id };
                switchPanoramaToRoom(r.id);
                updateSelectedEntityInspector();
                renderCanvas();
                renderRoomsListInEditor();
            };
            item.innerHTML = `
                <div class="flex items-center gap-2 min-w-0">
                    <span class="w-3 h-3 rounded-full shrink-0" style="background-color: ${r.color || '#6366f1'}"></span>
                    <div class="truncate">
                        <p class="font-semibold text-slate-200 truncate">${r.name}</p>
                        <p class="text-[10px] text-slate-400 truncate">${(r.landmarks || []).join(", ") || "No landmarks"}</p>
                    </div>
                </div>
                <button onclick="removeRoomById('${r.id}')" class="text-slate-400 hover:text-rose-400 px-2 py-1 transition rounded hover:bg-rose-500/10" title="Delete Room">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            `;
            container.appendChild(item);
        });
    } else if (editorElementsTab === "nodes") {
        if (map.nodes.length === 0) {
            container.innerHTML = '<p class="text-xs text-slate-500 italic p-3 text-center">No viewpoint nodes on map. Click "Add Node" tool above.</p>';
            return;
        }
        map.nodes.forEach(n => {
            const room = map.rooms.find(r => r.id === n.roomId);
            const isSelected = selectedEntity && selectedEntity.type === "node" && selectedEntity.id === n.id;
            const item = document.createElement("div");
            item.className = `flex items-center justify-between border rounded-xl px-3 py-2 text-xs transition cursor-pointer ${
                isSelected ? "bg-cyan-900/40 border-cyan-500 shadow" : "bg-slate-900/85 border-slate-800 hover:border-slate-700"
            }`;
            item.onclick = (e) => {
                if (e.target.closest("button")) return;
                selectedEntity = { type: "node", id: n.id };
                onClicked3DHotspot(n.id, false, false);
                updateSelectedEntityInspector();
                renderCanvas();
                renderRoomsListInEditor();
            };
            item.innerHTML = `
                <div class="flex items-center gap-2 min-w-0">
                    <i class="fa-solid fa-location-dot text-cyan-400 shrink-0 text-sm"></i>
                    <div class="truncate">
                        <p class="font-semibold text-slate-200 truncate font-mono">${n.id} ${n.id === agentState.currentNodeId ? '<span class="text-[10px] text-emerald-400 font-sans ml-1">(Agent Here)</span>' : ''}</p>
                        <p class="text-[10px] text-slate-400 truncate">${room ? room.name : "Unassigned Room"} • (${Math.round(n.x)}, ${Math.round(n.y)})</p>
                    </div>
                </div>
                <button onclick="removeNodeById('${n.id}')" class="text-slate-400 hover:text-rose-400 px-2 py-1 transition rounded hover:bg-rose-500/10" title="Delete Viewpoint Node">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            `;
            container.appendChild(item);
        });
    } else if (editorElementsTab === "doors") {
        const doors = threeState.doorPoints2D || [];
        if (doors.length === 0) {
            container.innerHTML = '<p class="text-xs text-slate-500 italic p-3 text-center">No doorways between rooms. Link two nodes across different rooms to create a door.</p>';
            return;
        }
        doors.forEach(door => {
            const isSelected = selectedEntity && selectedEntity.type === "door" &&
                ((selectedEntity.uId === door.uId && selectedEntity.vId === door.vId) ||
                 (selectedEntity.uId === door.vId && selectedEntity.vId === door.uId));
            const item = document.createElement("div");
            item.className = `flex items-center justify-between border rounded-xl px-3 py-2 text-xs transition cursor-pointer ${
                isSelected ? "bg-amber-900/40 border-amber-500 shadow" : "bg-slate-900/85 border-slate-800 hover:border-slate-700"
            }`;
            item.onclick = (e) => {
                if (e.target.closest("button")) return;
                selectedEntity = {
                    type: "door",
                    id: `${door.uId}_${door.vId}`,
                    uId: door.uId,
                    vId: door.vId,
                    roomUId: door.roomUId,
                    roomVId: door.roomVId,
                    roomUName: door.roomUName,
                    roomVName: door.roomVName
                };
                updateSelectedEntityInspector();
                renderCanvas();
                renderRoomsListInEditor();
            };
            item.innerHTML = `
                <div class="flex items-center gap-2 min-w-0">
                    <i class="fa-solid fa-door-open text-amber-400 shrink-0 text-sm"></i>
                    <div class="truncate">
                        <p class="font-semibold text-slate-200 truncate">${door.roomUName || door.roomUId} ↔ ${door.roomVName || door.roomVId}</p>
                        <p class="text-[10px] text-amber-300/80 truncate font-mono">Nodes ${door.uId} ↔ ${door.vId}</p>
                    </div>
                </div>
                <button onclick="removeDoor('${door.uId}', '${door.vId}', '${door.roomUId}', '${door.roomVId}')" class="text-slate-400 hover:text-rose-400 px-2 py-1 transition rounded hover:bg-rose-500/10" title="Delete Door & Unlink Rooms">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            `;
            container.appendChild(item);
        });
    }
}

function removeRoomById(roomId) {
    const map = getActiveMap();
    if (!map) return;
    map.rooms = map.rooms.filter(r => r.id !== roomId);
    const removedNodeIds = new Set(map.nodes.filter(n => n.roomId === roomId).map(n => n.id));
    map.nodes = map.nodes.filter(n => n.roomId !== roomId);
    map.edges = map.edges.filter(([u, v]) => !removedNodeIds.has(u) && !removedNodeIds.has(v));

    if (removedNodeIds.has(agentState.currentNodeId) && map.nodes.length > 0) {
        agentState.currentNodeId = map.nodes[0].id;
        agentState.x = map.nodes[0].x;
        agentState.y = map.nodes[0].y;
    }

    selectedEntity = null;
    updateSelectedEntityInspector();
    updateMapStatsHeader();
    renderRoomsListInEditor();
    populateLinkDropdowns();
    populateStartGoalDropdowns();
    renderQuickRoomJumpBar();
    renderCanvas();
    syncMapToBackend(map);
    rebuild3DMatterportScene();
    showToast("Room, associated nodes, and doorway portals deleted.", "warn");
}

/***********************************************************************
 * 9. MODALS: CREATE NEW MAP & IMPORT/EXPORT JSON
 ***********************************************************************/
function openNewMapModal() {
    document.getElementById("createMapName").value = "";
    document.getElementById("newMapModal").classList.remove("hidden");
    document.getElementById("newMapModal").classList.add("flex");
}

function closeNewMapModal() {
    document.getElementById("newMapModal").classList.add("hidden");
    document.getElementById("newMapModal").classList.remove("flex");
}

function confirmCreateNewMap() {
    const nameInput = document.getElementById("createMapName").value.trim() || `Custom VLN Environment ${Object.keys(mapsStore).length + 1}`;
    const tpl = document.getElementById("createMapTemplate").value;
    const newId = `custom_map_${Date.now().toString().slice(-4)}`;

    if (tpl === "starter") {
        mapsStore[newId] = {
            id: newId,
            name: nameInput,
            rooms: [
                { id: "r_entry", name: "Entrance Foyer", x: 80, y: 120, w: 200, h: 160, color: "#6366f1", landmarks: ["Main Door", "Security Desk"] },
                { id: "r_main", name: "Main Hall", x: 360, y: 120, w: 240, h: 160, color: "#10b981", landmarks: ["Center Table", "Display Screen"] }
            ],
            nodes: [
                { id: "vp_1", x: 180, y: 200, roomId: "r_entry", label: "Entry Node" },
                { id: "vp_2", x: 480, y: 200, roomId: "r_main", label: "Main Hall Node" }
            ],
            edges: [["vp_1", "vp_2"]],
            presets: {
                en: [{ title: "Entrance Foyer → Main Hall", text: "Start at the Entrance Foyer and walk straight into the Main Hall.", start: "vp_1", goal: "vp_2" }],
                hi: [],
                te: []
            }
        };
    } else {
        mapsStore[newId] = {
            id: newId,
            name: nameInput,
            rooms: [],
            nodes: [],
            edges: [],
            presets: { en: [], hi: [], te: [] }
        };
    }

    populateMapSelector();
    loadMap(newId);
    syncMapToBackend(mapsStore[newId]);
    closeNewMapModal();
    switchMode("editor");
    showToast(`Created map "${nameInput}"! Use the Room & Map Builder to customize.`, "success");
}

function openJsonModal() {
    const map = getActiveMap();
    document.getElementById("jsonTextarea").value = JSON.stringify(map, null, 2);
    document.getElementById("jsonModal").classList.remove("hidden");
    document.getElementById("jsonModal").classList.add("flex");
}

function closeJsonModal() {
    document.getElementById("jsonModal").classList.add("hidden");
    document.getElementById("jsonModal").classList.remove("flex");
}

function copyMapJson() {
    const textarea = document.getElementById("jsonTextarea");
    textarea.select();
    document.execCommand("copy");
    showToast("Map JSON copied to clipboard!", "success");
}

function importMapJson() {
    try {
        const parsed = JSON.parse(document.getElementById("jsonTextarea").value);
        if (!parsed.id || !Array.isArray(parsed.rooms) || !Array.isArray(parsed.nodes)) {
            showToast("Invalid Map JSON schema: requires 'id', 'rooms', and 'nodes'.", "warn");
            return;
        }
        mapsStore[parsed.id] = parsed;
        populateMapSelector();
        loadMap(parsed.id);
        syncMapToBackend(parsed);
        closeJsonModal();
        showToast(`Imported map "${parsed.name || parsed.id}" successfully!`, "success");
    } catch (err) {
        showToast("JSON Syntax Error: Please check your JSON formatting.", "warn");
    }
}

/***********************************************************************
 * 10. CANVAS DRAWING UTILITIES
 ***********************************************************************/
function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}

function hexToRgba(hex, alpha) {
    const clean = hex.replace("#", "");
    const bigint = parseInt(clean, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Global Keyboard Shortcut: Delete or Backspace removes currently selected room, node, or door
window.addEventListener("keydown", (e) => {
    if (e.key === "Delete" || e.key === "Backspace") {
        const activeTag = document.activeElement ? document.activeElement.tagName.toUpperCase() : "";
        if (activeTag === "INPUT" || activeTag === "TEXTAREA" || activeTag === "SELECT") {
            return;
        }
        if (selectedEntity && currentMode === "editor") {
            e.preventDefault();
            deleteSelectedEntity();
        }
    }
});
