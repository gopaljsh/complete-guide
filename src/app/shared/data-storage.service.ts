import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import { RecipeService } from "../recipe/recipe.service";
 
@Injectable()
export class dataStorageService {
    constructor(private http: Http, private recipeService: RecipeService) {}

    storeRecipes() {
        return this.http.put('https://ng-recipe-book-4c2fc.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }
}