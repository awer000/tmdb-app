import React, { Component } from "react";
import "./App.css";
import SearchContainer from "../containers/SearchContainer";
import MovieListContainer from "../containers/MovieListContainer";
import MovieInfo from "./MovieInfo/MovieInfo";
import MovieInfoContainer from "../containers/MovieInfoContainer";

class App extends Component {
  state = {
    movieListToggle: true,
    movieInfoToggle: false
  };

  render() {
    return (
      <div className="App">
        <SearchContainer />
        <MovieListContainer />
        <MovieInfoContainer />
      </div>
    );
  }
}

export default App;
