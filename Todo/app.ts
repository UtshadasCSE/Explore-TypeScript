class Task {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
}

const tasks: Task[] = [];

const input = document.getElementById("taskInput") as HTMLInputElement;
const btn = document.getElementById("addTask") as HTMLButtonElement;
const list = document.getElementById("taskList") as HTMLUListElement;

btn.onclick = () => {
  const text = input.value.trim();
  if (text) {
    const task = new Task(text);
    tasks.push(task);
    render();
    input.value = "";
  } else {
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
