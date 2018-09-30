import React, { Component } from "react";
import { connect } from "react-redux";
import * as searchActions from "store/modules/search";
import { bindActionCreators } from "redux";
import MovieInfo from "../components/MovieInfo";

class MovieInfoContainer extends Component {
  render() {
    const { pending, error, selectedData } = this.props;
    return (
      <MovieInfo
        pending={pending}
        error={error}
        selectedData={!null && selectedData}
      />
    );
  }
}

export default connect(
  state => ({
    pending: state.search.pending,
    error: state.search.error,
    selectedData: state.search.selectedData
  }),
  dispatch => ({
    SearchActions: bindActionCreators(searchActions, dispatch)
  })
)(MovieInfoContainer);
