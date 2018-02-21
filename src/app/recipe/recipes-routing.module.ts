import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipeComponent } from "./recipe.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { AuthGuard } from "../auth/auth-guard.service";

const recipesRoute: Routes = [
    { path: '', component: RecipeComponent, children: [
        {path:'', component: RecipeStartComponent},
        {path:'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
        {path:':id', component: RecipeDetailComponent},
        {path:':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
    ] }
];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoute)
    ],
    exports:[RouterModule]
})
export class RecipesRoutingModule {}