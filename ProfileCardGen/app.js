"use strict";
class Profile {
    constructor(name, jobTitle) {
        this.name = name;
        this.jobTitle = jobTitle;
    }
    createCard() {
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
const nameInput = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");
const createBtn = document.getElementById("createBtn");
const container = document.getElementById("profileCardContainer");
createBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const job = jobInput.value.trim();
    if (name && job) {
        const profile = new Profile(name, job);
        const card = profile.createCard();
        container.innerHTML = "";
        container.appendChild(card);
    }
    else {
        alert("Please enter both name and job title");
    }
});
