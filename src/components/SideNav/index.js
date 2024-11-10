import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
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
        <Link to="/">
          <div className={cx("sidenav-item")}>
            <div className={cx("sidenav-icon")}>
              <FontAwesomeIcon
                style={{ color: "#efbb35", fontSize: "25px" }}
                icon={faChartColumn}
              />
            </div>
            <div className={cx("sidenav-content")}>Thống kê sử dụng</div>
          </div>
        </Link>
        <Link to="/control-device">
          <div className={cx("sidenav-item")}>
            <div className={cx("sidenav-icon")}>
              <FontAwesomeIcon
                style={{ color: "#efbb35", fontSize: "25px" }}
                icon={faGear}
              />
            </div>
            <div className={cx("sidenav-content")}>Quản lý thiết bị</div>
          </div>
        </Link>

        {/* <Link to="/">
          <div className={cx("sidenav-item")}>
            <div className={cx("sidenav-icon")}>
              <FontAwesomeIcon
                style={{ color: "#efbb35", fontSize: "25px" }}
                icon={faTriangleExclamation}
              />
            </div>
            <div className={cx("sidenav-content")}>Cảnh báo</div>
          </div>
        </Link>
        <Link to="/profile">
          <div className={cx("sidenav-item")}>
            <div className={cx("sidenav-icon")}>
              <FontAwesomeIcon
                style={{ color: "#efbb35", fontSize: "25px" }}
                icon={faUser}
              />
            </div>
            <div className={cx("sidenav-content")}>Thông tin người dùng</div>
          </div>
        </Link>
        <Link to="/notification">
          <div className={cx("sidenav-item")}>
            <div className={cx("sidenav-icon")}>
              <FontAwesomeIcon
                style={{ color: "#efbb35", fontSize: "25px" }}
                icon={faBell}
              />
            </div>
            <div className={cx("sidenav-content")}>Thông báo hệ thống</div>
          </div>
        </Link> */}
      </div>
    </div>
  );
}

export default SideNav;
