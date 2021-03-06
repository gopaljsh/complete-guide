import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    private Recipes: Recipe[] = [
        new Recipe(
            'Greek Kale Salad with Quinoa & Chicken',
            'Toss the cooked chicken into this healthy 5-ingredient salad recipe while it\'s still warm to lightly wilt the kale.',
            'http://images.media-allrecipes.com/userphotos/960x960/5050778.jpg',
            [
                new Ingredient('Meat', 10),
                new Ingredient('Chicken', 5)
            ]),
        new Recipe(
            'One-Pot Pasta with Tuna',
            'Use the one-pot pasta cooking method to make this tuna pasta recipe that calls for just 5 ingredients and is ready in just over half an hour.',
            'http://images.media-allrecipes.com/userphotos/960x960/5050780.jpg',
            [
                new Ingredient('Chicken', 2),
                new Ingredient('Peas', 100)
            ])
    ];

    constructor(private slService: ShoppingListService) { }

    setRecipes(recipes: Recipe[]) {
        this.Recipes = recipes;
        this.recipeChanged.next(this.Recipes.slice());
    }

    getRecipes() {
        return this.Recipes.slice();
    }

    getRecipe(index: number) {
        return this.Recipes[index]
    }

    addIngredientToShoopingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.Recipes.push(recipe);
        this.recipeChanged.next(this.Recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.Recipes[index] = newRecipe;
        this.recipeChanged.next(this.Recipes.slice());
    }

    deleteRecipe(index: number) {
        this.Recipes.splice(index, 1);
        this.recipeChanged.next(this.Recipes.slice());
    }
}