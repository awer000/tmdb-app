import React, { Component } from "react";
import styles from "./Search.scss";
import classNames from "classnames/bind";
import { FaGithub } from "react-icons/fa";

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
            onKeyUp={(e = window.event) => {
              if (e.keyCode === 13) {
                onMovieName(input);
                onInitSelectedData();
              }
            }}
          />
          <div className={cx("developer-info")}>
            <a href="https://github.com/awer000/tmdb-app">
              <FaGithub className={cx("git-icon")} />
              View Code
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
