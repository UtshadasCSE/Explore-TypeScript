"use strict";
class Counter {
    constructor(initial) {
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
const countEl = document.getElementById("count");
const incBtn = document.getElementById("increment");
const decBtn = document.getElementById("decrement");
incBtn.onclick = () => {
    counter.increase();
    countEl.textContent = counter.count.toString();
};
decBtn.onclick = () => {
    counter.decrease();
    countEl.textContent = counter.count.toString();
};
