import * as React from "react";
import RecipeCard from "../views/recipe-card";
import recipes from "../data/recipes.json";

const Recipe = (props) => {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeCard {...recipe} />
      ))}
    </>
  );
};

export default Recipe;

