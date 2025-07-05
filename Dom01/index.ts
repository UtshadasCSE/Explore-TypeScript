// Define a tuple type for contact: [name: string, age: number]
type Contact = [string, number];

// Store contacts in an array
let contacts: Contact[] = [];

// Get form elements
const form = document.getElementById("contactForm") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const ageInput = document.getElementById("age") as HTMLInputElement;
const contactList = document.getElementById("contactList") as HTMLUListElement;

// Handle form submission
form.addEventListener("submit", function (e: Event) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const age = Number(ageInput.value);

  if (name && age > 0) {
    // Create a tuple
    const newContact: Contact = [name, age];

    // Add to contacts array
    contacts.push(newContact);

    // Update the UI
    renderContacts();

    // Clear form
    nameInput.value = "";
    ageInput.value = "";
  }
});

// Render contacts to the list
function renderContacts() {
  contactList.innerHTML = "";
  contacts.forEach(([name, age], index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${name} (${age} years old)`;
    contactList.appendChild(li);
  });
}
