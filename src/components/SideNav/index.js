import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import styles from "./SideNav.component.scss";

const cx = classNames.bind(styles);
function SideNav() {
  return (
    <div className={cx("wrapper-sidenav")}>
      <div className={cx("sidenav-intro")}>
        <div className={cx("key-title")}>A</div>
        <div className={cx("sidenav-title")}>SMART HOUSE - DEVICES</div>
      </div>
      <div className={cx("sidenav-options")}>
        <div className={cx("sidenav-item")}>
          <div className={cx("sidenav-icon")}>
            <FontAwesomeIcon
              style={{ color: "#efbb35", fontSize: "25px" }}
              icon={faChartColumn}
            />
          </div>
          <div className={cx("sidenav-content")}>Quản lý thiết bị</div>
        </div>
        <div className={cx("sidenav-item")}>
          <div className={cx("sidenav-icon")}>
            <FontAwesomeIcon
              style={{ color: "#efbb35", fontSize: "25px" }}
              icon={faChartColumn}
            />
          </div>
          <div className={cx("sidenav-content")}>Thống kê sử dụng</div>
        </div>
        <div className={cx("sidenav-item")}>
          <div className={cx("sidenav-icon")}>
            <FontAwesomeIcon
              style={{ color: "#efbb35", fontSize: "25px" }}
              icon={faChartColumn}
            />
          </div>
          <div className={cx("sidenav-content")}>Cảnh báo</div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
