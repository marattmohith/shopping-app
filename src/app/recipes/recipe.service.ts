import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private slService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe("Fried Rice", "Chinese fried rice", 
        "https://therecipecritic.com/wp-content/uploads/2019/07/easy_fried_rice.jpg",
        [new Ingredient('Rice',1), new Ingredient('Carrot',2)]),
        new Recipe("General Tso Tofu", "Chinese Tofu", 
        "https://simpleveganblog.com/wp-content/uploads/2018/12/General-tsos-tofu.jpg",
        [new Ingredient('Tofu', 1), new Ingredient('Soy Sauce', 1)])
      ];

       getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index:number) {
        return this.recipes[index]
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

}