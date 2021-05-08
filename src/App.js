import React, { useState } from "react";
import Axios from "axios";
import { v4 as uuid } from "uuid";
import "./App.css";

import Recipe from "./components/Recipe";
import Alert from "./components/Alert";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "0717dbf6";
  const APP_KEY = "281b38bec4cd1774d46d89f1f4de8fec";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        setAlert("No Result Found!");
      } else {
        setAlert("");
      }

      setRecipes(result.data.hits);

      setQuery("");
    } else setAlert("Empty search field!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <h1>Foods & Recipe</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        {alert && <Alert alert={alert} />}
        <input
          type="text"
          placeholder="Search Items"
          autoComplete="off"
          onChange={handleChange}
          value={query}
        />
        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => {
            return <Recipe key={uuid()} recipe={recipe} />;
          })}
      </div>
    </div>
  );
};

export default App;
