import { React } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Logout.component.scss";

const cx = classNames.bind(styles);

function LogoutForm({ onConfirm, onCancel }) {
  return (
    <div className={cx("logout_wrapper")}>
      <div className={cx("logout")}>
        <div className={cx("text")}>Do you certainly want to log out?</div>
        <div className={cx("button")}>
          <button className={cx("no")} onClick={onCancel}>
            No
          </button>
          <button className={cx("yes")} onClick={onConfirm}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutForm;
