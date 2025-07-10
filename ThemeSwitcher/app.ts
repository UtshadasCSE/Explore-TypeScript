class ThemeSwitcher {
  private theme: string = "light";
  private iconEl: HTMLElement;

  constructor(private btnId: string, private iconId: string) {
    this.iconEl = document.getElementById(this.iconId) as HTMLElement;
    this.loadTheme();
    const btn = document.getElementById(this.btnId) as HTMLButtonElement;
    btn.addEventListener("click", () => this.toggleTheme());
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      this.theme = savedTheme;
    }
    document.body.className = this.theme;
    this.updateIcon();
  }

  private toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    document.body.className = this.theme;
    localStorage.setItem("theme", this.theme);
    this.animateIcon();
    this.updateIcon();
  }

  private updateIcon() {
    if (this.theme === "light") {
      this.iconEl.className = "fas fa-moon icon";
    } else {
      this.iconEl.className = "fas fa-sun icon";
    }
  }

  private animateIcon() {
    this.iconEl.classList.add("rotate");
    setTimeout(() => this.iconEl.classList.remove("rotate"), 500);
  }
}

new ThemeSwitcher("themeBtn", "themeIcon");
