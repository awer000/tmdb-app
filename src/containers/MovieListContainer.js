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
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.data !== nextProps.data) {
      return true;
    }
    return false;
  }

  render() {
    const { pending, error, data, selectedData } = this.props;

    return (
      <MovieList
        pending={pending}
        error={error}
        data={data}
        onMovieID={this.handleMovieID}
        selectedData={selectedData}
      />
    );
  }
}

export default connect(
  state => ({
    pending: state.search.pending,
    error: state.search.error,
    data: state.search.data,
    selectedData: state.search.selectedData
  }),
  dispatch => ({
    SearchActions: bindActionCreators(searchActions, dispatch)
  })
)(MovieListContainer);
