class Profile {
  name: string;
  jobTitle: string;
  constructor(name: string, jobTitle: string) {
    this.name = name;
    this.jobTitle = jobTitle;
  }
  createCard(): HTMLDivElement {
    const card = document.createElement("div");
    card.className = `profile-card`;
    card.innerHTML = `
       <h2>${this.name}</h2>
      <p>${this.jobTitle}</p>
    `;
    return card;
  }
}

// DOM elements

const nameInput = document.getElementById("nameInput") as HTMLInputElement;
const jobInput = document.getElementById("jobInput") as HTMLInputElement;
const createBtn = document.getElementById("createBtn") as HTMLButtonElement;
const container = document.getElementById(
  "profileCardContainer"
) as HTMLDivElement;

createBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const job = jobInput.value.trim();
  if (name && job) {
    const profile = new Profile(name, job);
    const card = profile.createCard();
    container.innerHTML = "";
    container.appendChild(card);
  } else {
    alert("Please enter both name and job title");
  }
});
