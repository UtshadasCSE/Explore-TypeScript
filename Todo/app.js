"use strict";
class Task {
    constructor(title) {
        this.title = title;
    }
}
const tasks = [];
const input = document.getElementById("taskInput");
const btn = document.getElementById("addTask");
const list = document.getElementById("taskList");
btn.onclick = () => {
    const text = input.value.trim();
    if (text) {
        const task = new Task(text);
        tasks.push(task);
        render();
        input.value = "";
    }
    else {
        alert("Please insert task");
    }
};
function render() {
    list.innerHTML = ``;
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.textContent = task.title;
        list.appendChild(li);
    });
}
