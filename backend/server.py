#!/usr/bin/env python3
"""
RxR Multilingual VLN Agent — Custom Map & Room Studio
Backend Server & REST API Engine (Python Standard Library Implementation)
"""

import os
import sys
import json
import math
import mimetypes
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import auth

# Path resolution
BACKEND_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.dirname(BACKEND_DIR)
FRONTEND_DIR = os.path.join(ROOT_DIR, "frontend")
DATA_DIR = os.path.join(BACKEND_DIR, "data")
MAPS_FILE = os.path.join(DATA_DIR, "maps.json")

# Ensure data dir exists
os.makedirs(DATA_DIR, exist_ok=True)

# Helper to read maps
def load_maps_from_disk():
    if os.path.isfile(MAPS_FILE):
        try:
            with open(MAPS_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"[WARN] Error reading maps file: {e}")
    return {}

def save_maps_to_disk(maps_data):
    try:
        with open(MAPS_FILE, "w", encoding="utf-8") as f:
            json.dump(maps_data, f, indent=2, ensure_ascii=False)
        return True
    except Exception as e:
        print(f"[ERROR] Failed to save maps file: {e}")
        return False

# Dijkstra algorithm for shortest path planning on map graph
def compute_shortest_path(nodes, edges, start_id, goal_id):
    if not start_id or not goal_id:
        return []
    if start_id == goal_id:
        return [start_id]

    node_dict = {n["id"]: n for n in nodes}
    if start_id not in node_dict or goal_id not in node_dict:
        return [start_id]

    adj = {n["id"]: [] for n in nodes}
    for u, v in edges:
        if u in node_dict and v in node_dict:
            dist = math.hypot(node_dict[u]["x"] - node_dict[v]["x"], node_dict[u]["y"] - node_dict[v]["y"])
            adj[u].append({"to": v, "cost": dist})
            adj[v].append({"to": u, "cost": dist})

    distances = {n["id"]: float("inf") for n in nodes}
    previous = {}
    visited = set()
    distances[start_id] = 0

    while len(visited) < len(nodes):
        curr = None
        best = float("inf")
        for nid in distances:
            if nid not in visited and distances[nid] < best:
                best = distances[nid]
                curr = nid

        if curr is None or curr == goal_id:
            break
        visited.add(curr)

        for edge in adj.get(curr, []):
            alt = distances[curr] + edge["cost"]
            if alt < distances[edge["to"]]:
                distances[edge["to"]] = alt
                previous[edge["to"]] = curr

    if distances[goal_id] == float("inf"):
        return [start_id]

    path = []
    curr = goal_id
    while curr:
        path.insert(0, curr)
        curr = previous.get(curr)
    return path


class StudioHTTPRequestHandler(BaseHTTPRequestHandler):
    """Handles static frontend assets and REST API endpoints."""

    def _set_headers(self, status=200, content_type="application/json"):
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.end_headers()

    def do_OPTIONS(self):
        self._set_headers(204)

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path

        # 1. API Endpoints
        if path == "/api/health":
            data = {
                "status": "ok",
                "service": "RxR-Multilingual-VLN-Studio",
                "version": "2.4.0",
                "engine": "Python Standard HTTP Engine"
            }
            self._set_headers(200)
            self.wfile.write(json.dumps(data).encode("utf-8"))
            return

        if path == "/api/auth/me":
            token = auth.extract_token_from_headers(self.headers)
            user = auth.verify_token(token)
            if user:
                self._set_headers(200)
                self.wfile.write(json.dumps({"authenticated": True, "user": user}).encode("utf-8"))
            else:
                self._set_headers(401)
                self.wfile.write(json.dumps({"authenticated": False, "error": "Unauthorized or expired session"}).encode("utf-8"))
            return

        if path == "/api/maps":
            maps = load_maps_from_disk()
            self._set_headers(200)
            self.wfile.write(json.dumps(maps).encode("utf-8"))
            return

        if path.startswith("/api/maps/"):
            map_id = path[len("/api/maps/"):]
            maps = load_maps_from_disk()
            if map_id in maps:
                self._set_headers(200)
                self.wfile.write(json.dumps(maps[map_id]).encode("utf-8"))
            else:
                self._set_headers(404)
                self.wfile.write(json.dumps({"error": f"Map '{map_id}' not found"}).encode("utf-8"))
            return

        # 2. Static Frontend Files
        req_path = path.lstrip("/")
        if not req_path:
            req_path = "index.html"

        file_path = os.path.abspath(os.path.join(FRONTEND_DIR, req_path))

        # Security check to prevent directory traversal
        if not file_path.startswith(FRONTEND_DIR) or not os.path.isfile(file_path):
            self._set_headers(404, "text/plain")
            self.wfile.write(b"404 Not Found")
            return

        mime_type, _ = mimetypes.guess_type(file_path)
        if not mime_type:
            mime_type = "application/octet-stream"

        try:
            with open(file_path, "rb") as f:
                content = f.read()
            self._set_headers(200, mime_type)
            self.wfile.write(content)
        except (ConnectionResetError, ConnectionAbortedError, BrokenPipeError):
            pass
        except Exception as e:
            try:
                self._set_headers(500, "text/plain")
                self.wfile.write(f"500 Internal Server Error: {e}".encode("utf-8"))
            except Exception:
                pass

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path
        body = self._read_body_json()

        if path == "/api/maps":
            if not body or "id" not in body:
                self._set_headers(400)
                self.wfile.write(json.dumps({"error": "Missing map id"}).encode("utf-8"))
                return
            maps = load_maps_from_disk()
            maps[body["id"]] = body
            save_maps_to_disk(maps)
            self._set_headers(201)
            self.wfile.write(json.dumps({"success": True, "map": body}).encode("utf-8"))
            return

        if path == "/api/plan-path":
            nodes = body.get("nodes", [])
            edges = body.get("edges", [])
            start_id = body.get("start")
            goal_id = body.get("goal")
            path_result = compute_shortest_path(nodes, edges, start_id, goal_id)
            self._set_headers(200)
            self.wfile.write(json.dumps({"planned_path": path_result}).encode("utf-8"))
            return

        if path == "/api/auth/register":
            reg_result = auth.register_user(body.get("email"), body.get("password"), body.get("name", ""))
            status = 201 if reg_result.get("success") else 400
            self._set_headers(status)
            self.wfile.write(json.dumps(reg_result).encode("utf-8"))
            return

        if path == "/api/auth/login":
            login_result = auth.login_user(body.get("email"), body.get("password"))
            status = 200 if login_result.get("success") else 401
            self._set_headers(status)
            self.wfile.write(json.dumps(login_result).encode("utf-8"))
            return

        if path == "/api/auth/logout":
            token = auth.extract_token_from_headers(self.headers) or body.get("token")
            auth.logout_user(token)
            self._set_headers(200)
            self.wfile.write(json.dumps({"success": True, "message": "Logged out successfully"}).encode("utf-8"))
            return

        self._set_headers(404)
        self.wfile.write(json.dumps({"error": "Endpoint not found"}).encode("utf-8"))

    def do_PUT(self):
        parsed = urlparse(self.path)
        path = parsed.path
        body = self._read_body_json()

        if path.startswith("/api/maps/"):
            map_id = path[len("/api/maps/"):]
            if not body:
                self._set_headers(400)
                self.wfile.write(json.dumps({"error": "Empty request body"}).encode("utf-8"))
                return
            body["id"] = map_id
            maps = load_maps_from_disk()
            maps[map_id] = body
            save_maps_to_disk(maps)
            self._set_headers(200)
            self.wfile.write(json.dumps({"success": True, "map": body}).encode("utf-8"))
            return

        self._set_headers(404)
        self.wfile.write(json.dumps({"error": "Endpoint not found"}).encode("utf-8"))

    def do_DELETE(self):
        parsed = urlparse(self.path)
        path = parsed.path

        if path.startswith("/api/maps/"):
            map_id = path[len("/api/maps/"):]
            maps = load_maps_from_disk()
            if map_id in maps:
                del maps[map_id]
                save_maps_to_disk(maps)
                self._set_headers(200)
                self.wfile.write(json.dumps({"success": True, "deleted": map_id}).encode("utf-8"))
            else:
                self._set_headers(404)
                self.wfile.write(json.dumps({"error": "Map not found"}).encode("utf-8"))
            return

        self._set_headers(404)
        self.wfile.write(json.dumps({"error": "Endpoint not found"}).encode("utf-8"))

    def _read_body_json(self):
        try:
            content_length = int(self.headers.get("Content-Length", 0))
            if content_length > 0:
                raw_data = self.rfile.read(content_length)
                return json.loads(raw_data.decode("utf-8"))
        except Exception:
            pass
        return {}


def run_server(port=8000, host="0.0.0.0"):
    server_address = (host, port)
    httpd = HTTPServer(server_address, StudioHTTPRequestHandler)
    print("==================================================================")
    print("  RxR Multilingual VLN Agent — Custom Map & Room Studio")
    print(f"  Backend & Integrated Frontend Running at:")
    print(f"  👉 http://localhost:{port} (or http://127.0.0.1:{port})")
    print("==================================================================")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server gracefully...")
        httpd.server_close()


if __name__ == "__main__":
    port = 8000
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            pass
    run_server(port=port)
