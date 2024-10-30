const recipes = [
    {
        title: "Spaghetti Bolognese",
        image: "https://via.placeholder.com/300",
        description: "A classic Italian pasta dish with rich and savory sauce."
    },
    {
        title: "Chicken Curry",
        image: "https://via.placeholder.com/300",
        description: "A spicy and flavorful dish that's perfect with rice."
    },
    {
        title: "Vegetable Stir Fry",
        image: "https://via.placeholder.com/300",
        description: "A quick and healthy option loaded with colorful vegetables."
    }
];

function displayRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipes.forEach(recipe => {
        const card = `
            <div class="col-md-4">
                <div class="card recipe-card">
                    <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}">
                    <div class="card-body">
                        <h5 class="card-title">${recipe.title}</h5>
                        <p class="card-text">${recipe.description}</p>
                    </div>
                </div>
            </div>
        `;
        recipeList.innerHTML += card;
    });
}

// Display recipes on page load
window.onload = displayRecipes;
