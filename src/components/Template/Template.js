import React from "react";
import styles from "./Template.scss";
import classNames from "classnames/bind";
import SearchContainer from "../../containers/SearchContainer";

const cx = classNames.bind(styles);

const Template = () => (
  <div className={cx("Template")}>
    <SearchContainer />
  </div>
);

export default Template;
