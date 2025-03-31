import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getRecipe } from '../api/api';
import '../styles/MealRecipe.css';

function MealRecipe() {
    const { mealName } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => { 
        const fetchMealDetails = async () => {
            const data = await getRecipe(mealName);
            setMeal(data.meals[0]);
        };
        fetchMealDetails();
    }, [mealName]);

    if (!meal) return <p>Loading meal details...</p>;

    return (
        <div className="meal-recipe">
            <h1>{meal.strMeal}</h1>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="main-meal-image" />
            <p><strong>Category:</strong> {meal.strCategory}</p>
            <p><strong>Ethnicity:</strong> {meal.strArea}</p>
            <p><strong>Instructions:</strong> {meal.strInstructions}</p>
        </div>
    );
};
  
export default MealRecipe;