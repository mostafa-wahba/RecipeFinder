import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UseFetch({ inputValue }) {
  const [more, setMore] = useState(16);
  const [meal, setMeal] = useState([]);
  const [all, setAll] = useState([]);

  async function getMeals() {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`
      );
      setMeal(data.meals);
    } 
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMeals(inputValue,setMeal)
  }, [inputValue]);

  function moreMeals() {
    setMore(more + 20);
  }

  return { moreMeals, meal ,more};
}
