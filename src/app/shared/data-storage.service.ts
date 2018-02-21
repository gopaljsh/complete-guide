import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';

import { RecipeService } from "../recipe/recipe.service";
import { AuthService } from "../auth/auth.service";
import { Recipe } from "../recipe/recipe.model";
import "rxjs/Rx"
 
@Injectable()
export class dataStorageService {
    constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {}

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-recipe-book-4c2fc.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        return this.http.get('https://ng-recipe-book-4c2fc.firebaseio.com/recipes.json?auth=' + token)
        .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for(let recipe of recipes) {
                    if(!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}