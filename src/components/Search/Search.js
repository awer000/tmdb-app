import React, { Component } from "react";
import styles from "./Search.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class Search extends Component {
  render() {
    const {
      input,
      data,
      pending,
      error,
      selectedData,
      onChange,
      onMovieName,
      onMovieID
    } = this.props;

    const dataList =
      data &&
      data.map(value => {
        return (
          <img
            key={value.id}
            src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
            alt="poster"
            onClick={() => {
              onMovieID(value.id);
            }}
          />
        );
      });
    return (
      <div className={cx("Search")}>
        <div className={cx("search-box")}>
          <input
            placeholder="영화 제목을 입력하세요..."
            className={cx("input-name")}
            value={input}
            onChange={e => {
              onChange(e);
            }}
          />
          <div
            className={cx("search-button")}
            onClick={() => {
              onMovieName(input);
            }}
          >
            확인
          </div>
        </div>
        {pending ? <div>로딩중..</div> : <div>{dataList}</div>}
      </div>
    );
  }
}

export default Search;
