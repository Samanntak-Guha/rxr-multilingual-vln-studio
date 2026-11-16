#!/usr/bin/env python3
"""
RxR Multilingual VLN Agent — Custom Map & Room Studio
Isolated Authentication & Session Manager (Python Standard Library)
"""

import os
import json
import time
import secrets
import hashlib

DATA_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data")
USERS_FILE = os.path.join(DATA_DIR, "users.json")
SESSION_DURATION_SEC = 7 * 24 * 60 * 60  # 7 days

os.makedirs(DATA_DIR, exist_ok=True)
active_sessions = {}  # token -> { "userId", "email", "name", "expiresAt" }

def hash_password(password: str, salt: str) -> str:
    key = hashlib.pbkdf2_hmac("sha512", password.encode("utf-8"), bytes.fromhex(salt), 100000)
    return key.hex()

def load_users():
    if os.path.isfile(USERS_FILE):
        try:
            with open(USERS_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"[AUTH WARN] Error reading users file: {e}")
    return {}

def save_users(users):
    try:
        with open(USERS_FILE, "w", encoding="utf-8") as f:
            json.dump(users, f, indent=2, ensure_ascii=False)
        return True
    except Exception as e:
        print(f"[AUTH ERROR] Failed to save users file: {e}")
        return False

# Initialize default research account if not present
users = load_users()
if not users:
    salt = secrets.token_hex(16)
    default_id = "usr_" + secrets.token_hex(6)
    users["researcher@rxr.studio"] = {
        "id": default_id,
        "email": "researcher@rxr.studio",
        "name": "VLN Researcher",
        "salt": salt,
        "passwordHash": hash_password("Password123!", salt),
        "createdAt": "2026-11-16T00:00:00Z"
    }
    save_users(users)

def register_user(email: str, password: str, name: str = ""):
    if not email or "@" not in email:
        return {"success": False, "error": "Valid email address is required."}
    if not password or len(password) < 6:
        return {"success": False, "error": "Password must be at least 6 characters long."}

    clean_email = email.strip().lower()
    clean_name = name.strip() if name else clean_email.split("@")[0]

    users = load_users()
    if clean_email in users:
        return {"success": False, "error": "An account with this email already exists."}

    salt = secrets.token_hex(16)
    password_hash = hash_password(password, salt)
    user_id = "usr_" + secrets.token_hex(6)

    new_user = {
        "id": user_id,
        "email": clean_email,
        "name": clean_name,
        "salt": salt,
        "passwordHash": password_hash,
        "createdAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
    }
    users[clean_email] = new_user
    save_users(users)

    token = secrets.token_hex(32)
    expires_at = time.time() + SESSION_DURATION_SEC
    active_sessions[token] = {
        "userId": new_user["id"],
        "email": new_user["email"],
        "name": new_user["name"],
        "expiresAt": expires_at
    }

    return {
        "success": True,
        "token": token,
        "user": {"id": new_user["id"], "email": new_user["email"], "name": new_user["name"]}
    }

def login_user(email: str, password: str):
    if not email or not password:
        return {"success": False, "error": "Email and password are required."}

    clean_email = email.strip().lower()
    users = load_users()
    user = users.get(clean_email)

    if not user:
        return {"success": False, "error": "Invalid email or password."}

    incoming_hash = hash_password(password, user["salt"])
    if incoming_hash != user["passwordHash"]:
        return {"success": False, "error": "Invalid email or password."}

    token = secrets.token_hex(32)
    expires_at = time.time() + SESSION_DURATION_SEC
    active_sessions[token] = {
        "userId": user["id"],
        "email": user["email"],
        "name": user["name"],
        "expiresAt": expires_at
    }

    return {
        "success": True,
        "token": token,
        "user": {"id": user["id"], "email": user["email"], "name": user["name"]}
    }

def verify_token(token: str):
    if not token:
        return None
    session = active_sessions.get(token)
    if not session:
        return None
    if time.time() > session["expiresAt"]:
        del active_sessions[token]
        return None
    return {"id": session["userId"], "email": session["email"], "name": session["name"]}

def logout_user(token: str):
    if token and token in active_sessions:
        del active_sessions[token]
    return {"success": True}

def extract_token_from_headers(headers):
    auth_header = headers.get("Authorization") or headers.get("authorization")
    if auth_header and auth_header.startswith("Bearer "):
        return auth_header[7:].strip()
    return headers.get("x-auth-token")
