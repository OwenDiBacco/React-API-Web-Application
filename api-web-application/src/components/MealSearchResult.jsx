import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MealSearchResult.css'; 

const MealSearchResult = ({ meal }) => {
    /*
    meals: array of all the meals containing meal
      - idMeal: meal id
      - strMeal: name of the meal
      - strArea: food nationality
    strIngredients + int: each ingredient
    strInstructions: instructions
    strMealThumb: image of the meal
    strMeasure: corresponds to the ingredient
    */
    return (
        <div className="meal-container">
            <Link to={`/meal/${meal.strMeal}`} className="meal-link">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
                <div className="meal-information">
                    <h3>{meal.strMeal}</h3>
                    <p className="meal-area">{meal.strArea}</p>
                </div>
            </Link>
        </div>
    );
};

export default MealSearchResult;