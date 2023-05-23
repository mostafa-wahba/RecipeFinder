import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import UseFetch from "./UseFetch";
export default function Search({setMealFromChild,mealFromChild}) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  console.log(inputValue);
  const { meal } = UseFetch({inputValue});
  setMealFromChild(meal);
  return (
    <>
      <div className="search w-100 d-flex justify-content-between mb-5">
        <label htmlFor="ing"></label>
        <input
          type="text"
          id="ing"
          name="ing"
          value={inputValue}
          onChange={handleInputChange}
          className="form-control position-relative"
          placeholder="Search Here"
        />
        <div className="search-info d-flex align-items-center position-absolute">
          {mealFromChild?<p className="m-0 position-relative num-recipes"><span className=" me-3 position-absolute">({mealFromChild?.length}</span>Recipes)</p>:""}
          
        <button className="bg-transparent border-0">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        </div>
      </div>
    </>
  );
}
