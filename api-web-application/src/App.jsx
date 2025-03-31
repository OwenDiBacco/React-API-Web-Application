import './styles/App.css'
import React from 'react'
import QueryMeals from './pages/QueryMeals'
import MealRecipe from './pages/MealRecipe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QueryMeals />} />
        <Route path="/meal/:mealName" element={<MealRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;