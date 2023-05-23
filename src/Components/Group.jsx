import React, { useEffect, useState } from "react";
import Search from "./Search";
import UseFetch from "./UseFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Group() {
  const [mealFromChild, setMealFromChild] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dietaryRestriction, setDietaryRestriction] = useState(null);
  const [favoriteRecipes, setFavoriteRecipes] = useState(
    JSON.parse(localStorage.getItem("favoriteRecipes")) || []
  );
  const [notFavoriteRecipes, setNotFavoriteRecipes] = useState(
    JSON.parse(localStorage.getItem("favoriteRecipes")) || []
  );
  const [isLoadingMore, setIsLoadingMore] = useState(false); // new state variable

  const handleDataFromChild = (data) => {
    setMealFromChild(data);
  };

  const { more, moreMeals } = UseFetch({
    inputValue: mealFromChild,
    dietaryRestriction: dietaryRestriction,
  });

  useEffect(() => {
    if (mealFromChild?.length) {
      setIsLoading(false);
    }
  }, [mealFromChild]);

  const handleAddToFavorites = (recipe) => {
    setFavoriteRecipes([...favoriteRecipes, recipe]);
  };

  const handleDeleteToFavorites = (recipe) => {
    const updatedFavoriteRecipes = favoriteRecipes.filter(
      (favRecipe) => favRecipe.idMeal !== recipe.idMeal
   );
    setFavoriteRecipes(updatedFavoriteRecipes);
  };

  useEffect(() => {
    localStorage.setItem("favoriteRecipes", JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  useEffect(() => {
    localStorage.removeItem(
      "favoriteRecipes",
      JSON.stringify(notFavoriteRecipes)
    );
  }, [notFavoriteRecipes]);

  const handleLoadMore = async () => { // new function to handle load more button click
    setIsLoadingMore(true); // set isLoadingMore to true to show spinner
    await moreMeals();
    setIsLoadingMore(false); // set isLoadingMore back to false to hide spinner
  };

  return (
    <>
      <div className="container group my-5 py-5">
        <h2 className="sec-title">Search Results</h2>
        <Search
          setMealFromChild={setMealFromChild}
          mealFromChild={mealFromChild}
          setDietaryRestriction={setDietaryRestriction}
        />
        {isLoading ? (
          <div className="loading w-100">
            <FontAwesomeIcon icon={faSpinner} spin />
          </div>
        ) : (
          <div className="row">
            {mealFromChild?.slice(0, more).map((item) => (
              <div
                className="col-md-3 px-4 my-4 position-relative d-flex flex-column"
                key={item.idMeal}
              >
                <Link to={`/meal/${item.idMeal}`}><img src={item.strMealThumb} className="w-100 rounded-2" /></Link>
                
                <p className="fw-bold disc">{item.strMeal}</p>
                <div className="add-btn position-absolute">
                  <button
                    onClick={() => handleAddToFavorites(item)}
                    className="btn btn-sm btn-outline-primary"
                  >
                    Add to Favorites
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="Load-button d-flex justify-content-center my-5 py-3">
          <button
            onClick={handleLoadMore}
            className="btn btn-lg px-5 rounded-1"
          >
            {isLoadingMore ? ( // conditional rendering to show spinner
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              "Load More"
            )}
          </button>
        </div>
      </div>
      <div className="container my-5 py-5">
        <h2 className="sec-title">Favorite Recipes</h2>
        <div className="row">
          {favoriteRecipes?.map((recipe) => (
            <div
              className="col-md-3 px-4 my-4 position-relative d-flex flex-column"
              key={recipe.idMeal}
            >
              <img src={recipe.strMealThumb} className="w-100 rounded-2" />
              <p className="fw-bold disc">{recipe.strMeal}</p><div className="delete-btn position-absolute">
                <button
                  onClick={() => handleDeleteToFavorites(recipe)}
                  className="btn btn-sm btn-outline-danger"
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))}
          {favoriteRecipes?.length === 0 && (
            <p>You have not added any recipes to your favorites yet.</p>
          )}
        </div>
      </div>
    </>
  );
}