import React from "react";
import styles from "./Header.component.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import classNames from "classnames/bind";
import logo from '../../assets/images/logo_smart_house.png'
import avatar from '../../assets/images/avartar_user.png'

const cx = classNames.bind(styles);
function Header() {
  return (
    <div className={cx("container-header", "row")}>
      <div className={cx("col-4", "col", "header-logo")}>
        <img className={cx('logo')} src={logo} alt="logo-team" />
      </div>
      <div className={cx("col-8", "col", "header-content")}>
        <div className={cx('notification')}>
        <FontAwesomeIcon style={{ color: 'rgb(255, 255, 255)', fontSize: '25px'}} icon={faBell} />
        </div>
        <div className={cx('avatar-user')}>
          <img className={cx('avatar-image')} src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default Header;
