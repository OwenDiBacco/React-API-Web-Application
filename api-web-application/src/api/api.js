export const getRecipe = async (meal) => {
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    );
    const text = await response.text();
    const data = JSON.parse(text);
    return data;
};