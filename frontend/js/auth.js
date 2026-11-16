/**
 * RxR Multilingual VLN Agent — Custom Map & Room Studio
 * Authentication Client & View Router
 */

(function () {
    const TOKEN_KEY = "rxr_studio_auth_token";
    let currentUser = null;

    const AuthManager = {
        getToken() {
            try {
                return localStorage.getItem(TOKEN_KEY);
            } catch (e) {
                return null;
            }
        },

        setToken(token) {
            try {
                if (token) {
                    localStorage.setItem(TOKEN_KEY, token);
                } else {
                    localStorage.removeItem(TOKEN_KEY);
                }
            } catch (e) {}
        },

        getCurrentUser() {
            return currentUser;
        },

        async checkSession() {
            const token = this.getToken();
            if (!token) {
                currentUser = null;
                this.updateUserUI(null);
                return null;
            }

            try {
                const res = await fetch("/api/auth/me", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                if (res.ok) {
                    const data = await res.json();
                    if (data.authenticated && data.user) {
                        currentUser = data.user;
                        this.updateUserUI(currentUser);
                        return currentUser;
                    }
                }
            } catch (err) {
                console.warn("[Auth] Session verification error:", err);
            }

            // If token invalid or expired, clear it
            this.setToken(null);
            currentUser = null;
            this.updateUserUI(null);
            return null;
        },

        async login(email, password) {
            try {
                const res = await fetch("/api/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password })
                });
                const data = await res.json();
                if (res.ok && data.success && data.token) {
                    this.setToken(data.token);
                    currentUser = data.user;
                    this.updateUserUI(currentUser);
                    return { success: true, user: currentUser };
                }
                return { success: false, error: data.error || "Login failed. Check your credentials." };
            } catch (err) {
                return { success: false, error: "Network error during authentication." };
            }
        },

        async register(email, password, name) {
            try {
                const res = await fetch("/api/auth/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password, name })
                });
                const data = await res.json();
                if (res.ok && data.success && data.token) {
                    this.setToken(data.token);
                    currentUser = data.user;
                    this.updateUserUI(currentUser);
                    return { success: true, user: currentUser };
                }
                return { success: false, error: data.error || "Registration failed." };
            } catch (err) {
                return { success: false, error: "Network error during registration." };
            }
        },

        async logout() {
            const token = this.getToken();
            if (token) {
                try {
                    await fetch("/api/auth/logout", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        },
                        body: JSON.stringify({ token })
                    });
                } catch (e) {}
            }
            this.setToken(null);
            currentUser = null;
            this.updateUserUI(null);
            if (typeof showToast === "function") {
                showToast("Signed out successfully", "info");
            }
            this.navigateTo("landing");
        },

        updateUserUI(user) {
            const userPill = document.getElementById("topNavUserPill");
            const landingUserSlot = document.getElementById("landingNavUserSlot");
            const userNameEl = document.getElementById("topNavUserName");
            const userAvatarEl = document.getElementById("topNavUserAvatar");

            if (user) {
                if (userPill) userPill.classList.remove("hidden");
                if (userNameEl) userNameEl.textContent = user.name || user.email.split("@")[0];
                if (userAvatarEl) {
                    const initials = (user.name || user.email).substring(0, 2).toUpperCase();
                    userAvatarEl.textContent = initials;
                }
                if (landingUserSlot) {
                    landingUserSlot.innerHTML = `
                        <button onclick="AuthManager.navigateTo('studio')" class="btn-primary text-xs font-semibold py-2 px-3.5 rounded-lg flex items-center gap-1.5 transition">
                            <i class="fa-solid fa-cube"></i>
                            <span>Open Studio</span>
                        </button>
                        <button onclick="AuthManager.logout()" class="btn-secondary text-xs font-medium py-2 px-3 rounded-lg flex items-center gap-1.5 transition" title="Sign Out">
                            <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        </button>
                    `;
                }
            } else {
                if (userPill) userPill.classList.add("hidden");
                if (landingUserSlot) {
                    landingUserSlot.innerHTML = `
                        <button onclick="AuthManager.navigateTo('login')" class="btn-secondary text-xs font-semibold py-2 px-3.5 rounded-lg transition">
                            Sign In
                        </button>
                        <button onclick="AuthManager.navigateTo('register')" class="btn-primary text-xs font-semibold py-2 px-3.5 rounded-lg flex items-center gap-1.5 transition">
                            <span>Get Started</span>
                            <i class="fa-solid fa-arrow-right text-[11px]"></i>
                        </button>
                    `;
                }
            }
        },

        navigateTo(viewName) {
            const landingView = document.getElementById("viewLanding");
            const authView = document.getElementById("viewAuth");
            const studioView = document.getElementById("viewStudio");
            const loginCard = document.getElementById("authLoginCard");
            const registerCard = document.getElementById("authRegisterCard");

            if (!landingView || !authView || !studioView) return;

            // Remove active classes
            [landingView, authView, studioView].forEach(v => {
                v.classList.remove("view-active");
                v.classList.add("view-hidden");
            });

            if (viewName === "landing") {
                landingView.classList.remove("view-hidden");
                landingView.classList.add("view-active");
                window.location.hash = "#/";
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else if (viewName === "login" || viewName === "register") {
                authView.classList.remove("view-hidden");
                authView.classList.add("view-active");
                if (viewName === "login") {
                    loginCard.classList.remove("hidden");
                    registerCard.classList.add("hidden");
                    window.location.hash = "#/login";
                } else {
                    registerCard.classList.remove("hidden");
                    loginCard.classList.add("hidden");
                    window.location.hash = "#/register";
                }
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else if (viewName === "studio") {
                // If not logged in, prompt login
                if (!currentUser && !this.getToken()) {
                    if (typeof showToast === "function") {
                        showToast("Authentication required to access Studio workspace", "warning");
                    }
                    this.navigateTo("login");
                    return;
                }
                studioView.classList.remove("view-hidden");
                studioView.classList.add("view-active");
                window.location.hash = "#/studio";

                // Ensure Three.js canvas resizes accurately when transitioning to visible
                setTimeout(() => {
                    if (typeof handleResize === "function") {
                        handleResize();
                    }
                }, 60);
            }
        }
    };

    window.AuthManager = AuthManager;

    // View router hash listener
    window.addEventListener("hashchange", () => {
        const hash = window.location.hash;
        if (hash === "#/login") {
            AuthManager.navigateTo("login");
        } else if (hash === "#/register") {
            AuthManager.navigateTo("register");
        } else if (hash === "#/studio") {
            AuthManager.navigateTo("studio");
        } else if (hash === "#/" || hash === "") {
            AuthManager.navigateTo("landing");
        }
    });

    // Initial load check
    document.addEventListener("DOMContentLoaded", async () => {
        await AuthManager.checkSession();
        const hash = window.location.hash;
        if (hash === "#/studio") {
            AuthManager.navigateTo("studio");
        } else if (hash === "#/login") {
            AuthManager.navigateTo("login");
        } else if (hash === "#/register") {
            AuthManager.navigateTo("register");
        } else {
            // Default: show landing page
            AuthManager.navigateTo("landing");
        }
    });
})();
