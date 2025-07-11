class RecipeFinder {
  private input = document.getElementById("searchInput") as HTMLInputElement;
  private btn = document.getElementById("searchBtn") as HTMLButtonElement;
  private results = document.getElementById("results") as HTMLDivElement;

  private modal = document.getElementById("modal") as HTMLDivElement;
  private closeModalBtn = document.getElementById(
    "closeModal"
  ) as HTMLSpanElement;
  private modalTitle = document.getElementById(
    "modalTitle"
  ) as HTMLHeadingElement;
  private modalImage = document.getElementById(
    "modalImage"
  ) as HTMLImageElement;
  private modalInstructions = document.getElementById(
    "modalInstructions"
  ) as HTMLParagraphElement;
  private modalIngredients = document.getElementById(
    "modalIngredients"
  ) as HTMLUListElement;

  constructor() {
    this.btn.addEventListener("click", () => this.search());
    this.closeModalBtn.addEventListener("click", () => this.hideModal());
    window.addEventListener("click", (e) => {
      if (e.target === this.modal) this.hideModal();
    });
  }

  async search() {
    const query = this.input.value.trim();
    if (!query) return;

    this.results.innerHTML = `<p>Searching for recipes...</p>`;

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();

      if (!data.meals) {
        this.results.innerHTML = `<p>No recipes found for "${query}".</p>`;
        return;
      }

      this.results.innerHTML = "";
      data.meals.forEach((meal: any) => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
          <h3>${meal.strMeal}</h3>
          <p>${meal.strInstructions.substring(0, 80)}...</p>
        `;

        card.addEventListener("click", () => this.showModal(meal));
        this.results.appendChild(card);
      });
    } catch (err) {
      console.error(err);
      this.results.innerHTML = `<p>Something went wrong.</p>`;
    }
  }

  showModal(meal: any) {
    this.modalTitle.textContent = meal.strMeal;
    this.modalImage.src = meal.strMealThumb;
    this.modalInstructions.textContent = meal.strInstructions;

    this.modalIngredients.innerHTML = "";
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        const li = document.createElement("li");
        li.textContent = `${ingredient} - ${measure}`;
        this.modalIngredients.appendChild(li);
      }
    }

    this.modal.style.display = "block";
  }

  hideModal() {
    this.modal.style.display = "none";
  }
}

new RecipeFinder();
