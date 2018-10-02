import React, { Component } from "react";
import styles from "./MovieInfo.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class MovieInfo extends Component {
  render() {
    const { pending, selectedData, onInitSelectedData } = this.props;

    if (!selectedData) {
      return null;
    }
    const {
      genres,
      original_title,
      overview,
      poster_path,
      production_companies,
      release_date,
      runtime,
      tagline,
      vote_average
    } = selectedData;

    const genresList = genres.map(value => {
      return value.name;
    });
    const companyList = production_companies.map(value => value.name);
    if (pending) {
      return <div>로딩중</div>;
    }
    return (
      <div className={cx("MovieInfo")}>
        <div className={cx("background")} onClick={onInitSelectedData} />
        <div className={cx("movie-info")}>
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt="movie-poster"
          />
          <div className={cx("info-box")}>
            <div className={cx("close-button")} onClick={onInitSelectedData}>
              X
            </div>
            <div className={cx("up-info")}>
              <h2>{original_title}</h2>
              <p className={cx("tagline")}>{tagline}</p>
              <p className={cx("overview")}>{overview}</p>
            </div>
            <div className={cx("down-info")}>
              <p className={cx("genres")}>{genresList.join(" , ")}</p>
              <p className={cx("company")}>{companyList.join(" , ")}</p>
              <div className={cx("number-box")}>
                <div className={cx("release-date")}>
                  <p>Release:</p>
                  <p>{release_date ? `${release_date}` : "-"}</p>
                </div>
                <div className={cx("runtime")}>
                  <p>Runtime:</p>
                  <p>{runtime ? `${runtime} min` : "-"}</p>
                </div>
                <div className={cx("vote-average")}>
                  <p>Vote Average:</p>
                  <p>{vote_average ? `${vote_average} / 10` : "-"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieInfo;
