/**
 * RxR Multilingual VLN Agent — Custom Map & Room Studio
 * Isolated Authentication & Session Manager (Node.js Standard Library)
 */

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// In-memory active session tokens store: token -> { userId, email, name, expiresAt }
const activeSessions = new Map();
const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function hashPassword(password, salt) {
    return crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
}

function loadUsers() {
    if (fs.existsSync(USERS_FILE)) {
        try {
            return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
        } catch (err) {
            console.error('[AUTH WARN] Error reading users file:', err.message);
        }
    }
    return {};
}

function saveUsers(users) {
    try {
        fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
        return true;
    } catch (err) {
        console.error('[AUTH ERROR] Error saving users file:', err.message);
        return false;
    }
}

// Seed default research account if no users exist
(function initDefaultUser() {
    const users = loadUsers();
    if (Object.keys(users).length === 0) {
        const salt = crypto.randomBytes(16).toString('hex');
        const defaultId = 'usr_' + crypto.randomBytes(6).toString('hex');
        users['researcher@rxr.studio'] = {
            id: defaultId,
            email: 'researcher@rxr.studio',
            name: 'VLN Researcher',
            salt: salt,
            passwordHash: hashPassword('Password123!', salt),
            createdAt: new Date().toISOString()
        };
        saveUsers(users);
    }
})();

function registerUser(email, password, name) {
    if (!email || typeof email !== 'string' || !email.includes('@')) {
        return { success: false, error: 'Valid email address is required.' };
    }
    if (!password || typeof password !== 'string' || password.length < 6) {
        return { success: false, error: 'Password must be at least 6 characters long.' };
    }
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = (name && typeof name === 'string') ? name.trim() : cleanEmail.split('@')[0];

    const users = loadUsers();
    if (users[cleanEmail]) {
        return { success: false, error: 'An account with this email already exists.' };
    }

    const salt = crypto.randomBytes(16).toString('hex');
    const passwordHash = hashPassword(password, salt);
    const userId = 'usr_' + crypto.randomBytes(6).toString('hex');

    const newUser = {
        id: userId,
        email: cleanEmail,
        name: cleanName,
        salt: salt,
        passwordHash: passwordHash,
        createdAt: new Date().toISOString()
    };

    users[cleanEmail] = newUser;
    saveUsers(users);

    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = Date.now() + SESSION_DURATION_MS;
    activeSessions.set(token, {
        userId: newUser.id,
        email: newUser.email,
        name: newUser.name,
        expiresAt: expiresAt
    });

    return {
        success: true,
        token: token,
        user: { id: newUser.id, email: newUser.email, name: newUser.name }
    };
}

function loginUser(email, password) {
    if (!email || !password) {
        return { success: false, error: 'Email and password are required.' };
    }
    const cleanEmail = email.trim().toLowerCase();
    const users = loadUsers();
    const user = users[cleanEmail];

    if (!user) {
        return { success: false, error: 'Invalid email or password.' };
    }

    const incomingHash = hashPassword(password, user.salt);
    if (incomingHash !== user.passwordHash) {
        return { success: false, error: 'Invalid email or password.' };
    }

    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = Date.now() + SESSION_DURATION_MS;
    activeSessions.set(token, {
        userId: user.id,
        email: user.email,
        name: user.name,
        expiresAt: expiresAt
    });

    return {
        success: true,
        token: token,
        user: { id: user.id, email: user.email, name: user.name }
    };
}

function verifyToken(token) {
    if (!token) return null;
    const session = activeSessions.get(token);
    if (!session) return null;
    if (Date.now() > session.expiresAt) {
        activeSessions.delete(token);
        return null;
    }
    return { id: session.userId, email: session.email, name: session.name };
}

function logoutUser(token) {
    if (token && activeSessions.has(token)) {
        activeSessions.delete(token);
    }
    return { success: true };
}

function extractToken(req) {
    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader.startsWith('Bearer ')) {
        return authHeader.slice(7).trim();
    }
    if (req.headers['x-auth-token']) {
        return req.headers['x-auth-token'].trim();
    }
    return null;
}

module.exports = {
    registerUser,
    loginUser,
    verifyToken,
    logoutUser,
    extractToken
};
