import React from "react";
import { v4 as uuid } from "uuid";

const RecipeDetails = ({ ingredients }) => {
  return ingredients.map((ingredient) => {
    return (
      <ul key={uuid()} className="ingredient-list">
        <li className="ingredient-text">{ingredient.text}</li>
        <li className="ingredient-weight">Weight - {ingredient.weight}</li>
      </ul>
    );
  });
};
export default RecipeDetails;
