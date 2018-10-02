import React, { Component } from "react";
import "./App.css";
import SearchContainer from "../containers/SearchContainer";
import MovieListContainer from "../containers/MovieListContainer";
import MovieInfoContainer from "../containers/MovieInfoContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as searchActions from "store/modules/search";

class App extends Component {
  state = {
    movieListToggle: true,
    movieInfoToggle: false
  };

  render() {
    const background = this.props.selectedData
      ? this.props.selectedData.backdrop_path
      : "";
    return (
      <div
        className="App"
        style={{
          background: `${background &&
            `url(https://image.tmdb.org/t/p/original${background})`}`,
          backgroundSize: "contain"
        }}
      >
        <SearchContainer />
        <MovieListContainer />
        <MovieInfoContainer />
      </div>
    );
  }
}

export default connect(state => ({
  selectedData: state.search.selectedData
}))(App);
