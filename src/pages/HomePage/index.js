import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHigh } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";
import DefaultLayout from "./../../layouts/DefaultLayout/index";
import NhietdoDoam from "../../assets/images/temperature_humidity.png"
import TimeUsing from "../../assets/images/time_using.png"

const cx = classNames.bind(styles);
function Home() {
  const Temperature = 37;
  const Humidity = 60;
  return (
    <DefaultLayout>
      <div className={cx("wrapper-homepage")}>
        <div className={cx("homepage-title")}>
          <div className={cx("title-icon")}>
            <img className={cx('icon-image')} src={NhietdoDoam} alt="Temperature and Humidity" />
          </div>
          <div className={cx("title-text")}>Thống kê hiện tại</div>
        </div>
        <div className={cx("cart-component")}>
          <div className={cx("cart-item")}>
            <div className={cx("cart-name")}>Nhiệt độ hiện tại</div>
            <div className={cx("content-card")}>
              <div className={cx("wrapper-icon")}>
                <FontAwesomeIcon
                  style={{ color: "#1d7bd9", fontSize: "65px" }}
                  icon={faTemperatureHigh}
                  beat
                />
              </div>
              <div className={cx("wrapper-content")}>
                <div className={cx("num-temperature")}>{Temperature}°C</div>
              </div>
            </div>
          </div>
          <div className={cx("cart-item")}>
            <div className={cx("cart-name")}>Độ ẩm hiện tại</div>
            <div className={cx("content-card")}>
              <div className={cx("wrapper-icon")}>
                <FontAwesomeIcon
                  style={{ color: "#1d7bd9", fontSize: "65px" }}
                  icon={faDroplet}
                  beat
                />
              </div>
              <div className={cx("wrapper-content")}>
                <div className={cx("num-temperature")}>{Humidity}%</div>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------End Section 1------------------------- */}
        <div className={cx("homepage-title")}>
          <div className={cx("title-icon")}>
            <img className={cx('icon-image-2')} src={TimeUsing} alt="Temperature and Humidity" />
          </div>
          <div className={cx("title-text")}>Thời gian sử dụng hôm nay</div>
        </div>
        <div className={cx("cart-component")}>
          <div className={cx("cart-item")}>
            <div className={cx("cart-name")}>Nhiệt độ hiện tại</div>
            <div className={cx("content-card")}>
              <div className={cx("wrapper-icon")}>
                <FontAwesomeIcon
                  style={{ color: "#1d7bd9", fontSize: "65px" }}
                  icon={faTemperatureHigh}
                  beat
                />
              </div>
              <div className={cx("wrapper-content")}>
                <div className={cx("num-temperature")}>{Temperature}°C</div>
              </div>
            </div>
          </div>
          <div className={cx("cart-item")}>
            <div className={cx("cart-name")}>Độ ẩm hiện tại</div>
            <div className={cx("content-card")}>
              <div className={cx("wrapper-icon")}>
                <FontAwesomeIcon
                  style={{ color: "#1d7bd9", fontSize: "65px" }}
                  icon={faDroplet}
                  beat
                />
              </div>
              <div className={cx("wrapper-content")}>
                <div className={cx("num-temperature")}>{Humidity}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Home;
