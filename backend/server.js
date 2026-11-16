/**
 * RxR Multilingual VLN Agent — Custom Map & Room Studio
 * Backend Server & REST API Engine (Node.js Standard Library Implementation)
 */

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const url = require('node:url');
const auth = require('./auth.js');

const BACKEND_DIR = __dirname;
const ROOT_DIR = path.resolve(BACKEND_DIR, '..');
const FRONTEND_DIR = path.join(ROOT_DIR, 'frontend');
const DATA_DIR = path.join(BACKEND_DIR, 'data');
const MAPS_FILE = path.join(DATA_DIR, 'maps.json');

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

function loadMaps() {
    if (fs.existsSync(MAPS_FILE)) {
        try {
            return JSON.parse(fs.readFileSync(MAPS_FILE, 'utf8'));
        } catch (e) {
            console.error('[WARN] Error reading maps file:', e.message);
        }
    }
    return {};
}

function saveMaps(maps) {
    try {
        fs.writeFileSync(MAPS_FILE, JSON.stringify(maps, null, 2), 'utf8');
        return true;
    } catch (e) {
        console.error('[ERROR] Failed to save maps file:', e.message);
        return false;
    }
}

function computeShortestPath(nodes, edges, startId, goalId) {
    if (!startId || !goalId) return [];
    if (startId === goalId) return [startId];

    const nodeDict = {};
    nodes.forEach(n => nodeDict[n.id] = n);
    if (!nodeDict[startId] || !nodeDict[goalId]) return [startId];

    const adj = {};
    nodes.forEach(n => adj[n.id] = []);
    edges.forEach(([u, v]) => {
        if (nodeDict[u] && nodeDict[v]) {
            const d = Math.hypot(nodeDict[u].x - nodeDict[v].x, nodeDict[u].y - nodeDict[v].y);
            adj[u].push({ to: v, cost: d });
            adj[v].push({ to: u, cost: d });
        }
    });

    const distances = {};
    const previous = {};
    const visited = new Set();
    nodes.forEach(n => distances[n.id] = Infinity);
    distances[startId] = 0;

    while (visited.size < nodes.length) {
        let curr = null;
        let best = Infinity;
        for (const nid in distances) {
            if (!visited.has(nid) && distances[nid] < best) {
                best = distances[nid];
                curr = nid;
            }
        }
        if (!curr || curr === goalId) break;
        visited.add(curr);

        for (const edge of (adj[curr] || [])) {
            const alt = distances[curr] + edge.cost;
            if (alt < distances[edge.to]) {
                distances[edge.to] = alt;
                previous[edge.to] = curr;
            }
        }
    }

    if (distances[goalId] === Infinity) return [startId];
    const pathArr = [];
    let curr = goalId;
    while (curr) {
        pathArr.unshift(curr);
        curr = previous[curr];
    }
    return pathArr;
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // API Routes
    if (pathname === '/api/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            status: 'ok',
            service: 'RxR-Multilingual-VLN-Studio',
            version: '2.4.0',
            engine: 'Node.js Standard HTTP Engine'
        }));
        return;
    }

    if (pathname === '/api/auth/me' && req.method === 'GET') {
        const token = auth.extractToken(req);
        const user = auth.verifyToken(token);
        if (user) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ authenticated: true, user }));
        } else {
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ authenticated: false, error: 'Unauthorized or expired session.' }));
        }
        return;
    }

    if (pathname === '/api/maps' && req.method === 'GET') {
        const maps = loadMaps();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(maps));
        return;
    }

    if (pathname.startsWith('/api/maps/') && req.method === 'GET') {
        const mapId = pathname.slice('/api/maps/'.length);
        const maps = loadMaps();
        if (maps[mapId]) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(maps[mapId]));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: `Map '${mapId}' not found` }));
        }
        return;
    }

    if (req.method === 'POST' || req.method === 'PUT') {
        let bodyRaw = '';
        req.on('data', chunk => bodyRaw += chunk);
        req.on('end', () => {
            let body = {};
            try { body = JSON.parse(bodyRaw); } catch(e) {}

            if (pathname === '/api/maps' && req.method === 'POST') {
                if (!body.id) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Missing map id' }));
                    return;
                }
                const maps = loadMaps();
                maps[body.id] = body;
                saveMaps(maps);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, map: body }));
                return;
            }

            if (pathname.startsWith('/api/maps/') && req.method === 'PUT') {
                const mapId = pathname.slice('/api/maps/'.length);
                const maps = loadMaps();
                body.id = mapId;
                maps[mapId] = body;
                saveMaps(maps);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, map: body }));
                return;
            }

            if (pathname === '/api/plan-path' && req.method === 'POST') {
                const result = computeShortestPath(body.nodes || [], body.edges || [], body.start, body.goal);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ planned_path: result }));
                return;
            }

            if (pathname === '/api/auth/register' && req.method === 'POST') {
                const regResult = auth.registerUser(body.email, body.password, body.name);
                res.writeHead(regResult.success ? 201 : 400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(regResult));
                return;
            }

            if (pathname === '/api/auth/login' && req.method === 'POST') {
                const loginResult = auth.loginUser(body.email, body.password);
                res.writeHead(loginResult.success ? 200 : 401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(loginResult));
                return;
            }

            if (pathname === '/api/auth/logout' && req.method === 'POST') {
                const token = auth.extractToken(req) || body.token;
                auth.logoutUser(token);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, message: 'Logged out successfully.' }));
                return;
            }

            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Not Found' }));
        });
        return;
    }

    if (pathname.startsWith('/api/maps/') && req.method === 'DELETE') {
        const mapId = pathname.slice('/api/maps/'.length);
        const maps = loadMaps();
        if (maps[mapId]) {
            delete maps[mapId];
            saveMaps(maps);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, deleted: mapId }));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Map not found' }));
        }
        return;
    }

    // Static Frontend File Serving
    let reqPath = pathname === '/' ? '/index.html' : pathname;
    const safePath = path.normalize(path.join(FRONTEND_DIR, reqPath));

    if (!safePath.startsWith(FRONTEND_DIR)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    fs.stat(safePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }

        const ext = path.extname(safePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        fs.createReadStream(safePath).pipe(res);
    });
});

const PORT = parseInt(process.env.PORT || '8000', 10);
server.listen(PORT, '0.0.0.0', () => {
    console.log('==================================================================');
    console.log('  RxR Multilingual VLN Agent — Custom Map & Room Studio');
    console.log(`  Backend & Integrated Frontend Running at:`);
    console.log(`  👉 http://localhost:${PORT} (or http://127.0.0.1:${PORT})`);
    console.log('==================================================================');
});
