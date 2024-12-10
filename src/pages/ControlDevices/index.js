import classNames from "classnames/bind";
import styles from "./ControlDevices.module.scss";
import { DefaultLayout } from "../../layouts";
import React, { useState } from "react";
import axios from "axios";
import lighting from "../../assets/control_device/light.png";
import pumpwater from "../../assets/control_device/pump_water.png";
import door from "../../assets/control_device/door.png";
import fan from "../../assets/control_device/fan.png";

const cx = classNames.bind(styles);
const LightSwitch = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const handleToggle = async () => {
    const newStatus = isLightOn ? "0" : "1";

    try {
      const response = await axios.post(
        "https://io.adafruit.com/api/v2/Vinhnguyen2003/feeds/nutnhan-light/data",
        {
          email_user: "vinhnguyen@gmail.com",
          relayName: "nutnhan-light",
          value: newStatus,
        },
        {
          headers: {
            "X-AIO-Key": process.env.REACT_APP_ADF_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);
      setIsLightOn(!isLightOn);
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu đến API:", error);
      if (error.response) {
        console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
      }
    }
  };

  return (
    <div className={cx("switch-container")} onClick={handleToggle}>
      <div className={cx("switch", { on: isLightOn, off: !isLightOn })}>
        <div className={cx("ball")}>{isLightOn ? "ON" : "OFF"}</div>
      </div>
    </div>
  );
};

const FanSwitch = () => {
  const [isFanOn, setIsFanOn] = useState(false);

  const handleToggle = async () => {
    const newStatus = isFanOn ? "0" : "1";

    try {
      const response = await axios.post(
        "https://io.adafruit.com/api/v2/Vinhnguyen2003/feeds/nutnhan-fan/data",
        {
          email_user: "vinhnguyen@gmail.com",
          relayName: "nutnhan_fan",
          value: newStatus,
        },
        {
          headers: {
            "X-AIO-Key": process.env.REACT_APP_ADF_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);
      setIsFanOn(!isFanOn);
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu đến API:", error);
      if (error.response) {
        console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
      }
    }
  };

  return (
    <div className={cx("switch-container")} onClick={handleToggle}>
      <div className={cx("switch", { on: isFanOn, off: !isFanOn })}>
        <div className={cx("ball")}>{isFanOn ? "ON" : "OFF"}</div>
      </div>
    </div>
  );
};
const DoorSwitch = () => {
  const [isDoorOn, setIsDoorOn] = useState(false);

  const handleToggle = async () => {
    const newStatus = isDoorOn ? "0" : "1";

    try {
      const response = await axios.post(
        "https://io.adafruit.com/api/v2/Vinhnguyen2003/feeds/nutnhan-door/data",
        {
          email_user: "vinhnguyen@gmail.com",
          relayName: "nutnhan_door",
          value: newStatus,
        },
        {
          headers: {
            "X-AIO-Key": process.env.REACT_APP_ADF_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);
      setIsDoorOn(!isDoorOn);
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu đến API:", error);
      if (error.response) {
        console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
      }
    }
  };

  return (
    <div className={cx("switch-container")} onClick={handleToggle}>
      <div className={cx("switch", { on: isDoorOn, off: !isDoorOn })}>
        <div className={cx("ball")}>{isDoorOn ? "ON" : "OFF"}</div>
      </div>
    </div>
  );
};
const PumpSwitch = () => {
  const [isPumpOn, setIsPumpOn] = useState(false);

  const handleToggle = async () => {
    const newStatus = isPumpOn ? "0" : "1";

    try {
      const response = await axios.post(
        "https://io.adafruit.com/api/v2/Vinhnguyen2003/feeds/nutnhan-pump/data",
        {
          email_user: "vinhnguyen@gmail.com",
          relayName: "nutnhan_pump",
          value: newStatus,
        },
        {
          headers: {
            "X-AIO-Key": process.env.REACT_APP_ADF_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);
      setIsPumpOn(!isPumpOn);
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu đến API:", error);
      if (error.response) {
        console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
      }
    }
  };

  return (
    <div className={cx("switch-container")} onClick={handleToggle}>
      <div className={cx("switch", { on: isPumpOn, off: !isPumpOn })}>
        <div className={cx("ball")}>{isPumpOn ? "ON" : "OFF"}</div>
      </div>
    </div>
  );
};
const ControlDevicesContent = () => {
  return (
    <div className={cx("wrapper_control_device")}>
      <div className={cx("control_device-title")}>Quản lý thiết bị</div>
      <div className={cx("list-devices", "row")}>
        <div className={cx("device-item", "col")}>
          <div className={cx("device-title")}>Bóng đèn điện</div>
          <div className={cx("device-status")}>
            <img className={cx("image-device")} src={lighting} alt="" />
            <LightSwitch />
          </div>
        </div>
        <div className={cx("device-item", "col")}>
          <div className={cx("device-title")}>Quạt điện</div>
          <div className={cx("device-status")}>
            <img className={cx("image-device")} src={fan} alt="" />
            <FanSwitch />
          </div>
        </div>
        <div className={cx("device-item", "col")}>
          <div className={cx("device-title")}>Cửa tự động</div>
          <div className={cx("device-status")}>
            <img className={cx("image-device")} src={door} alt="" />
            <DoorSwitch />
          </div>
        </div>
        <div className={cx("device-item", "col")}>
          <div className={cx("device-title")}>Máy bơm nước</div>
          <div className={cx("device-status")}>
            <img className={cx("image-device")} src={pumpwater} alt="" />
            <PumpSwitch />
          </div>
        </div>
      </div>
    </div>
  );
};

function ControlDevices() {
  return (
    <DefaultLayout>
      <ControlDevicesContent />
    </DefaultLayout>
  );
}

export default ControlDevices;
