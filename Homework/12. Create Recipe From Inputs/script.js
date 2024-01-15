var recipeForm = document.getElementById("recipe-form") 
var recipeName = document.getElementById("recipe-name")
var recipeIngredients = document.getElementById("recipe-ingredients")
var recipeMethod = document.getElementById("recipe-method")
var button = document.getElementById("btn");
var list = document.getElementById("list");


var recipes = [];
console.log(recipes)

function Recipe(recipeName, recipeIngredients, recipeMethod) {
    this.recipeName = recipeName;
    this.recipeIngredients = recipeIngredients;
    this.recipeMethod = recipeMethod;
}
console.log(Recipe)

function showRecipes(recipeArr, element) {
    element.innerHTML = "";
    for(let recipes of recipeArr) {
        element.innerHTML += `<li><b>Recipe: </b> ${recipes.recipeName} <b>Ingredients: </b>${recipes.recipeIngredients}, <b>Method: </b>${recipes.recipeMethod}</li>`
    }
}


button.addEventListener("click", function(event) {
    event.preventDefault();

    var recipeName = document.getElementById("recipe-name")
    var recipeIngredients = document.getElementById("recipe-ingredients")
    var recipeMethod = document.getElementById("recipe-method")

    var newRecipe = new Recipe(recipeName.value, recipeIngredients.value, recipeMethod.value);

    recipes.push(newRecipe);
    console.log(recipes);
    showRecipes(recipes, list);

    recipeName.value = "";
    recipeIngredients.value = "";
    recipeMethod.value = ""
})






