import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Meal() {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();

  async function getMealDetails(id, callback) {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    console.log(data);
    callback(data.meals);
  }

  useEffect(() => {
    getMealDetails(id, setDetails);
  }, []);

  useEffect(() => {
    if (details.length) {
      setIsLoading(false);
    }
  }, [details]);

  return (
    <>
      {isLoading ? (
        <div className="loading w-100">
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      ) : (
        <div className="container">
          {details.map((meal) => {
            let IngredientNames = Object.keys(meal)
              .filter(
                (key) =>
                  key.includes("strIngredient") &&
                  meal[key] !== null &&
                  meal[key] !== ""
              )
              .map((key) => meal[key]);
            let IngredientContainer = (
              <ul className="list-unstyled d-flex">
                {IngredientNames.map((ingredient) => (
                  <li key={ingredient} className="alert alert-info m-2 p-1">
                    {ingredient}
                  </li>
                ))}
              </ul>
            );

            let tagsNames = meal.strTags ? meal.strTags.split(",") : [];
            let tagsContainer = (
              <ul className="list-unstyled d-flex">
                {tagsNames.map((tag) => (
                  <li key={tag} className="alert alert-danger m-2 p-1">
                    {tag}
                  </li>
                ))}
              </ul>
            );

            return (
              <div key={meal.idMeal} className="row my-5">
                <div className="col-md-4">
                  <img
                    className="w-100 rounded-3"
                    src={meal.strMealThumb}
                    alt=""
                  />
                  <h2>{meal.strMeal}</h2>
                </div>
                <div className="col-md-8">
                  <h2>Instructions</h2>
                  <p>{meal.strInstructions}</p>
                  <h3>
                    <span className="fw-bolder">Area : </span>
                    {meal.strArea}
                  </h3>
                  <h3>
                    <span className="fw-bolder">Category : </span>
                    {meal.strCategory}
                  </h3>
                  <h3>Recipes :</h3>
                  <ul className="list-unstyled d-flexg-3 flex-wrap">
                    {IngredientContainer}
                  </ul>

                  <h3>Tags :</h3>
                  <ul className="list-unstyled d-flex g-3 flex-wrap">
                    {tagsContainer}
                  </ul>

                  {meal.strSource && (
                    <a
                      target="_blank"
                      href={meal.strSource}
                      className="btn btn-success"
                    >
                      Source
                    </a>
                  )}
                  {meal.strYoutube && (
                    <a
                      target="_blank"
                      href={meal.strYoutube}
                      className="btn btn-danger"
                    >
                      Youtube
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
