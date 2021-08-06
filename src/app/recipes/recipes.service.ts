import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

 private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://www.buro-3.nl/wp-content/uploads/2019/06/baby-pig.jpg',
      ingredients: ['friet', 'varken', 'salade'],
    },
    {
      id: 'r2',
      title: 'Vega Schnitzel',
      imageUrl:
        'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_auto,w_1900/hellofresh_s3/image/5ccc28069183cd000f626cb7-a7d08227.jpg',
      ingredients: ['friet', 'vega gehakt', 'salade'],
    },
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes]
  }
  getRecipe(id:string){
    return {...this.recipes.find((recipe)=>{
      return recipe.id === id;
    })};
  }
  deleteRecipe(id:string){
    this.recipes = this.recipes.filter((recipe)=>{
      return recipe.id !== id;
    })
  }
}
