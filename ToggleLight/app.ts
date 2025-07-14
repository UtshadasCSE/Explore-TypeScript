class Light {
  isOn: boolean;
  constructor(isOn: boolean) {
    this.isOn = isOn;
  }
  toggle() {
    this.isOn = !this.isOn;
  }
  status() {
    return this.isOn ? "ON" : "OFF";
  }
}
const light = new Light(false);

const statusEl = document.getElementById("status") as HTMLElement;
const toggleBtn = document.getElementById("toggle") as HTMLButtonElement;

toggleBtn.addEventListener("click", () => {
  light.toggle();
  statusEl.textContent = light.status();
  document.body.style.background = light.isOn ? "#fff8b3" : "#121212";
  document.body.style.color = light.isOn ? "#121212" : "#ffffff";
});
