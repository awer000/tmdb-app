import React, { Component } from "react";
import MovieList from "../components/MovieList/MovieList";
import { connect } from "react-redux";
import * as searchActions from "store/modules/search";
import { bindActionCreators } from "redux";

class MovieListContainer extends Component {
  handleMovieID = id => {
    const { SearchActions } = this.props;
    SearchActions.getMovieId(id);
  };
  render() {
    const { pending, error, data } = this.props;
    return (
      <MovieList
        pending={pending}
        error={error}
        data={data}
        onMovieID={this.handleMovieID}
      />
    );
  }
}

export default connect(
  state => ({
    pending: state.search.pending,
    error: state.search.error,
    data: state.search.data
  }),
  dispatch => ({
    SearchActions: bindActionCreators(searchActions, dispatch)
  })
)(MovieListContainer);
