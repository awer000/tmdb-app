import React from "react";
import "./App.css";
import SearchContainer from "../containers/SearchContainer";
import MovieListContainer from "../containers/MovieListContainer";

const App = () => {
  return (
    <div className="App">
      <SearchContainer />
      <MovieListContainer />
    </div>
  );
};

export default App;
