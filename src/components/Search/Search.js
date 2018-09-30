import React, { Component } from "react";
import styles from "./Search.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class Search extends Component {
  render() {
    const { input, onChange, onMovieName } = this.props;

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
      </div>
    );
  }
}

export default Search;
