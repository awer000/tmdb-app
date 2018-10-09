import React, { Component } from "react";
import styles from "./MovieList.scss";
import classNames from "classnames/bind";
import { ChasingDots } from "better-react-spinkit";
import noImg from "img/not-found-img.png";

const cx = classNames.bind(styles);

class MovieList extends Component {
  render() {
    const { pending, data, onMovieID, selectedData } = this.props;
    const movieData = [...new Set(data)]

    const movieList =
      data &&
      movieData.map(value => (
        <li
          className={cx("list")}
          key={value.id}
          onClick={() => {
            onMovieID(value.id);
          }}
        >
          <img
            src={
              value.poster_path
                ? `https://image.tmdb.org/t/p/original${value.poster_path}`
                : noImg
            }
            alt="movie-poster"
          />
          <div className={cx("movie-info")}>
            <p>{`제목: ${value.title}`}</p>
            <p>{`원제: ${value.original_title}`}</p>
            <p>{`내용: ${
              value.overview
                ? value.overview.length < 170
                  ? value.overview
                  : value.overview.substring(0, 130) + "..."
                : "-"
            }`}</p>
          </div>
        </li>
      ));
    if (pending) {
      return <ChasingDots />;
    }
    return (
      <div className={cx("MovieList")}>
        {pending ? (
          <ChasingDots className={cx("loader")} size={60} />
        ) : (
          <ul className={cx(selectedData && "selectedData")}>{movieList}</ul>
        )}
      </div>
    );
  }
}

export default MovieList;
