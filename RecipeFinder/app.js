"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class RecipeFinder {
    constructor() {
        this.input = document.getElementById("searchInput");
        this.btn = document.getElementById("searchBtn");
        this.results = document.getElementById("results");
        this.modal = document.getElementById("modal");
        this.closeModalBtn = document.getElementById("closeModal");
        this.modalTitle = document.getElementById("modalTitle");
        this.modalImage = document.getElementById("modalImage");
        this.modalInstructions = document.getElementById("modalInstructions");
        this.modalIngredients = document.getElementById("modalIngredients");
        this.btn.addEventListener("click", () => this.search());
        this.closeModalBtn.addEventListener("click", () => this.hideModal());
        window.addEventListener("click", (e) => {
            if (e.target === this.modal)
                this.hideModal();
        });
    }
    search() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = this.input.value.trim();
            if (!query)
                return;
            this.results.innerHTML = `<p>Searching for recipes...</p>`;
            try {
                const res = yield fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`);
                const data = yield res.json();
                if (!data.meals) {
                    this.results.innerHTML = `<p>No recipes found for "${query}".</p>`;
                    return;
                }
                this.results.innerHTML = "";
                data.meals.forEach((meal) => {
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
            }
            catch (err) {
                console.error(err);
                this.results.innerHTML = `<p>Something went wrong.</p>`;
            }
        });
    }
    showModal(meal) {
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
