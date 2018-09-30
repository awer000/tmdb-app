import React, { Component } from "react";
import styles from "./Search.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class Search extends Component {
  render() {
    const { input, onChange, onMovieName, onInitSelectedData } = this.props;

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
            onKeyUp={e => {
              if (e.keyCode === 13) {
                onMovieName(input);
                onInitSelectedData();
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default Search;
