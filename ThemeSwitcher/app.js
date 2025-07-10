"use strict";
class ThemeSwitcher {
    constructor(btnId, iconId) {
        this.btnId = btnId;
        this.iconId = iconId;
        this.theme = "light";
        this.iconEl = document.getElementById(this.iconId);
        this.loadTheme();
        const btn = document.getElementById(this.btnId);
        btn.addEventListener("click", () => this.toggleTheme());
    }
    loadTheme() {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            this.theme = savedTheme;
        }
        document.body.className = this.theme;
        this.updateIcon();
    }
    toggleTheme() {
        this.theme = this.theme === "light" ? "dark" : "light";
        document.body.className = this.theme;
        localStorage.setItem("theme", this.theme);
        this.animateIcon();
        this.updateIcon();
    }
    updateIcon() {
        if (this.theme === "light") {
            this.iconEl.className = "fas fa-moon icon";
        }
        else {
            this.iconEl.className = "fas fa-sun icon";
        }
    }
    animateIcon() {
        this.iconEl.classList.add("rotate");
        setTimeout(() => this.iconEl.classList.remove("rotate"), 500);
    }
}
new ThemeSwitcher("themeBtn", "themeIcon");
