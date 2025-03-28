import './App.css'
import { useEffect } from 'react'
import { getRecipe } from './services/api'

function App() {
  let meal = 'Beef';
  useEffect(() => { // useEffect: manages fetch functionality
    const loadRecipe = async () => {
      const recipeData = await getRecipe(meal);
      console.log(recipeData);
      // meals: array of all the meals containing meal
      // strIngredients + int: each ingredient
      // strInstructions: instructions
      // strMealThumb: image of the meal
      // strMeasure: corresponds to the ingredient
    };
    loadRecipe();
  });
}

export default App;
