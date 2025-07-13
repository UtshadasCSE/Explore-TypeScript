class Counter {
  count: number;
  constructor(initial: number) {
    this.count = initial;
  }
  increase() {
    this.count++;
  }
  decrease() {
    this.count--;
  }
}

const counter = new Counter(0);

const countEl = document.getElementById("count") as HTMLElement;
const incBtn = document.getElementById("increment") as HTMLButtonElement;
const decBtn = document.getElementById("decrement") as HTMLButtonElement;

incBtn.onclick = () => {
  counter.increase();
  countEl.textContent = counter.count.toString();
};

decBtn.onclick = () => {
  counter.decrease();
  countEl.textContent = counter.count.toString();
};
