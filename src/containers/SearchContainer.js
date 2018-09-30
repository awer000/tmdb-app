import React, { Component } from "react";
import Search from "../components/Search/Search";
import { connect } from "react-redux";
import * as searchActions from "store/modules/search";
import { bindActionCreators } from "redux";

class SearchContainer extends Component {
  handleChange = e => {
    const { SearchActions } = this.props;
    SearchActions.changeInput(e.target.value);
  };

  handleMovieName = name => {
    const { SearchActions } = this.props;
    SearchActions.getMovieName(name);
  };

  handleMovieID = id => {
    const { SearchActions } = this.props;
    SearchActions.getMovieId(id);
  };

  handleInitSelectedData = () => {
    const { SearchActions } = this.props;
    SearchActions.initSelectedData();
  };

  render() {
    const { input, data, pending, error, selectedData } = this.props;
    return (
      <Search
        input={input}
        onChange={this.handleChange}
        data={data}
        pending={pending}
        error={error}
        onMovieName={this.handleMovieName}
        onMovieID={this.handleMovieID}
        selectedData={selectedData}
        onInitSelectedData={this.handleInitSelectedData}
      />
    );
  }
}

export default connect(
  state => ({
    input: state.search.input,
    data: state.search.data,
    pending: state.search.pending,
    error: state.search.error,
    selectedData: state.search.selectedData
  }),
  dispatch => ({
    SearchActions: bindActionCreators(searchActions, dispatch)
  })
)(SearchContainer);
