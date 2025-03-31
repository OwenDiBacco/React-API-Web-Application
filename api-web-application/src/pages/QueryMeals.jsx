import { useEffect, useState } from 'react'
import { getRecipe } from '../api/api';
import SearchBar from '../components/SearchBar';
import MealSearchResult from '../components/MealSearchResult';
import '../styles/QueryMeals.css'; 

function QueryMeals() {
  /* 
  State: a way to store data in a component that can change over time
    - [0]: defines the state variable that holds the current value 
      a. the argument in the useState object indicates the current value

    - [1]: defines the function used to update the state variable
  */
  const [searchQuery, setSearchQuery] = useState(''); 
  const [meal, setMeal] = useState(''); 
  const [mealsData, setMealsData] = useState([]);

  // handleSearch: function called whenever a search action is triggered 
  const handleSearch = (query) => {
    setSearchQuery(query);
    setMeal(query); 
  };
  
  useEffect(() => {
    const loadRecipe = async () => {
      const data = await getRecipe(meal);
      if (data && data.meals) {
        setMealsData(data.meals); 
      } else {
        setMealsData([]); 
      }
    };
  
    loadRecipe();
  }, [meal]); 
      
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="meal-results-container">
        {mealsData.length === 0 ? (
          <p>No Results Found For: "{searchQuery}"</p>
        ) : (
          mealsData.map(recipeData => <MealSearchResult key={recipeData.strMeal} meal={recipeData} />)
        )}
      </div>
    </div>
  );
}

export default QueryMeals;