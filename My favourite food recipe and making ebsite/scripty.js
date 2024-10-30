<script>
    const searchBar = document.getElementById('searchBar');
    const recipeList = document.getElementById('recipe-list');

    searchBar.addEventListener('input', function() {
        const query = searchBar.value.toLowerCase();
        recipeList.innerHTML = ''; // Clear existing recipes

        // Filter recipes based on search query
        const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(query));

        // Display filtered recipes
        filteredRecipes.forEach(recipe => {
            const recipeCard = `
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="${recipe.img}" class="card-img-top" alt="${recipe.title}">
                        <div class="card-body">
                            <h5 class="card-title">${recipe.title}</h5>
                            <p class="card-text">${recipe.description}</p>
                            <a href="${recipe.link}" class="btn btn-info">View Recipe</a>
                        </div>
                    </div>
                </div>
            `;
            recipeList.innerHTML += recipeCard;
        });

        // Show a message if no recipe is found
        if (filteredRecipes.length === 0) {
            recipeList.innerHTML = '<p class="text-center">No recipes found</p>';
        }
    });
</script>
