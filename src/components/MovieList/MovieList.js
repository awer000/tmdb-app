import React, { Component } from "react";
import styles from "./MovieList.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class MovieList extends Component {
  render() {
    const { pending, error, data, onMovieID } = this.props;
    const movieList =
      data &&
      data.map(value => (
        <div
          className={cx("list")}
          key={value.id}
          onClick={() => {
            onMovieID(value.id);
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/original${value.poster_path}`}
            alt="movie-poster"
          />
          <div className={cx("movie-info")}>
            <p>{`제목: ${value.title}`}</p>
            <p>{`원제: ${value.original_title}`}</p>
            <p>{`내용: ${
              value.overview
                ? value.overview.length < 200
                  ? value.overview
                  : value.overview.substring(0, 200) + "..."
                : "-"
            }`}</p>
          </div>
        </div>
      ));
    return (
      <div className={cx("MovieList")}>
        {pending ? <div>로딩중</div> : movieList}
      </div>
    );
  }
}

export default MovieList;
