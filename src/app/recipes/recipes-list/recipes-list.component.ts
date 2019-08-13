import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test Recipe", "Test Description", "https://therecipecritic.com/wp-content/uploads/2019/07/easy_fried_rice.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
