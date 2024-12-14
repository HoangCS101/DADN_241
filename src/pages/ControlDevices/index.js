import classNames from "classnames/bind";
import styles from "./ControlDevices.module.scss";
import { DefaultLayout } from "../../layouts";
import React, { useState } from "react";
import axios from "axios";
import lighting from "../../assets/control_device/light.png";
import pumpwater from "../../assets/control_device/pump_water.png";
import door from "../../assets/control_device/door.png";
import fan from "../../assets/control_device/fan.png";
import Authentication from "../../components/Authentication";

const cx = classNames.bind(styles);
const LightSwitch = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const handleToggle = async () => {
    console.log(">>> check env: ", process.env.REACT_APP_NAME_ADF_KEY);
    console.log(">>> check env: ", process.env.REACT_APP_ADF_KEY);

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
            [process.env.REACT_APP_NAME_ADF_KEY]: process.env.REACT_APP_ADF_KEY,
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
            [process.env.REACT_APP_NAME_ADF_KEY]: process.env.REACT_APP_ADF_KEY,
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
            [process.env.REACT_APP_NAME_ADF_KEY]: process.env.REACT_APP_ADF_KEY,
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
            [process.env.REACT_APP_NAME_ADF_KEY]: process.env.REACT_APP_ADF_KEY,
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
      <div className={cx("control_device-title")}>
        <div className={cx("title")}>Quản lý thiết bị</div>
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
    </div>
  );
};

const SensorControl = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isPopupVisible2, setPopupVisible2] = useState(false);
  const [isPopupVisible3, setPopupVisible3] = useState(false);
  const [temperatureValue, setTemperatureValue] = useState("");
  const [lightValue, setLightValue] = useState("");
  const [infraredValue, setInfraredValue] = useState("");

  // Control sensor:
  const [onLightSensor, setOnLightSensor] = useState(false);
  const [onTemperatureSensor, setOnTemperatureSensor] = useState(false);
  const [onInFraredSensor, setOnInfraredSensor] = useState(false);

  // Control device
  const [onLight, setOnLight] = useState(false);
  const [onFan, setOnFan] = useState(false);
  const [onDoor, setOnDoor] = useState(false);
  const [onPump, setOnPump] = useState(false);
  const handleUpdateTemperature = () => {
    return;
  };

  const handleMouseEnter = (itemId) => {
    setActiveItem(itemId);
  };

  const handleMouseLeave = (id) => {
    setActiveItem(null);
    // setPopupVisible(false);
  };

  const HandleClickSensor = (id) => {
    if (id === 1) {
      setPopupVisible(true);
    }
    if (id === 2) {
      setPopupVisible2(true);
    }
    if (id === 3) {
      setPopupVisible3(true);
    }

    return null; // Return null if the condition is not met
  };
  const HandleClickOutside = (id) => {
    if (id === 1) {
      setPopupVisible(false);
    }
    if (id === 2) {
      setPopupVisible2(false);
    }
    if (id === 3) {
      setPopupVisible3(false);
    }
    return null; // Return null if the condition is not met
  };

  const handleSubmit = async (event, id, option) => {
    event.preventDefault(); // Prevent default form submission
    const dataUser = JSON.parse(localStorage.getItem("dataUser"));
    const authToken = localStorage.getItem("authToken");
    let api = "";
    let statusSensor = option;
    let pirSensor = statusSensor == "ON" ? 1 : 0;
    let data = {};
    if (id === 1) {
      api = "/api/setup/temperature";
      data = {
        email_user: dataUser.Email,
        temperature_value: temperatureValue,
        status: statusSensor,
      };
    } else if (id === 2) {
      api = "/api/setup/light";
      data = {
        email_user: dataUser.Email,
        light_value: lightValue,
        status: statusSensor,
      };
    } else if (id === 3) {
      api = "api/setup/pir";
      data = {
        email_user: dataUser.Email,
        pir_value: pirSensor,
        status: statusSensor,
      };
    }
    if (option === "ON") {
      statusSensor = "ON";
    } else {
      statusSensor = "OFF";
    }
    console.log(">>> check token - post control sensor: ", authToken);
    console.log(">>> check data user - post control sensor: ", dataUser);

    console.log(">>> check post data:", data);

    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(
          "Success fetch from - ",
          api,
          " - with data: ",
          data,
          " is: >>>",
          result
        );
        setPopupVisible(false);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={cx("sensor_wrapper")}>
      {/* POPUP 1 */}
      {isPopupVisible && (
        <div
          className={cx("wrapper_post")}
          onClick={() => HandleClickOutside(1)}
        >
          <form
            className={cx("wrapper_form")}
            onClick={(event) => {
              event.stopPropagation();
            }}
            onSubmit={(event) => {
              handleSubmit(event, 1, "ON");
            }}
          >
            <h3 className={cx("title_form")}>Điều khiển cảm biến nhiệt độ</h3>
            <input
              type="number"
              placeholder="Nhập giá trị giới hạn cho cảm biến"
              value={temperatureValue}
              onChange={(e) => setTemperatureValue(e.target.value)}
            />
            <div className={cx("options")}>
              <button
                className={cx("cancel")}
                onClick={() => HandleClickOutside(1)}
              >
                Hủy bỏ
              </button>
              <button
                onClick={(event) => {
                  handleSubmit(event, 1, "OFF");
                }}
                className={cx("off")}
              >
                Tắt cảm biến
              </button>
              <button type="submit" className={cx("submit")}>
                Xác nhận
              </button>
            </div>
          </form>
        </div>
      )}
      {/* {POPUP 2} */}
      {isPopupVisible2 && (
        <div
          className={cx("wrapper_post")}
          onClick={() => HandleClickOutside(2)}
        >
          <form
            action="post"
            className={cx("wrapper_form")}
            onClick={(event) => {
              event.stopPropagation();
            }}
            onSubmit={(event) => handleSubmit(event, 2, "ON")}
          >
            <h3 className={cx("title_form")}>Điều khiển cảm biến ánh sáng</h3>
            <input
              type="number"
              placeholder="Nhập giá trị giới hạn cho cảm biến"
              value={lightValue}
              onChange={(e) => setLightValue(e.target.value)}
            />
            <div className={cx("options")}>
              <button
                className={cx("cancel")}
                onClick={() => HandleClickOutside(2)}
              >
                Hủy bỏ
              </button>
              <button
                onClick={(event) => {
                  handleSubmit(event, 2, "OFF");
                }}
                className={cx("off")}
              >
                Tắt cảm biến
              </button>
              <button type="submit" className={cx("submit")}>
                Xác nhận
              </button>
            </div>
          </form>
        </div>
      )}
      {/* {POPUP 3} */}
      {isPopupVisible3 && (
        <div
          className={cx("wrapper_post")}
          onClick={() => HandleClickOutside(3)}
        >
          <form
            action="post"
            className={cx("wrapper_form")}
            onClick={(event) => {
              event.stopPropagation();
            }}
            onSubmit={(event) => {
              const selectedValue = event.target.elements.sensorStatus.value;
              handleSubmit(event, 3, selectedValue);
            }}
          >
            <h3 className={cx("title_form")}>Điều khiển cảm biến hồng ngoại</h3>
            <select name="sensorStatus" className={cx("select-input")}>
              <option value="ON">Bật cảm biến</option>
              <option value="OFF">Tắt cảm biến</option>
            </select>
            <div className={cx("options")}>
              <button
                className={cx("cancel")}
                style={{ width: "48%" }}
                onClick={() => HandleClickOutside(3)}
              >
                Hủy bỏ
              </button>
              {/* <button
                onClick={(event) => {
                  handleSubmit(event, 3, "OFF");
                }}
                className={cx("off")}
              >
                Tắt cảm biến
              </button> */}
              <button
                style={{ width: "48%" }}
                type="submit"
                className={cx("submit")}
              >
                Xác nhận
              </button>
            </div>
          </form>
        </div>
      )}
      <div className={cx("sensor_title")}>Điều khiển thiết bị cảm biến</div>
      <div className={cx("sensor_content")}>
        <div
          className={cx("sensor_item")}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
          onClick={() => HandleClickSensor(1)}
        >
          <div className={cx("overlay", { display: activeItem === 1 })}>
            <div className={cx("name_sensor")}>Cảm biến nhiệt độ</div>
          </div>
        </div>
        <div
          className={cx("sensor_item")}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
          onClick={() => HandleClickSensor(2)}
        >
          <div className={cx("overlay", { display: activeItem === 2 })}>
            <div className={cx("name_sensor")}>Cảm biến ánh sáng</div>
          </div>
        </div>
        <div
          className={cx("sensor_item")}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
          onClick={() => HandleClickSensor(3)}
        >
          <div className={cx("overlay", { display: activeItem === 3 })}>
            <div className={cx("name_sensor")}>Cảm biến hồng ngoại</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HistoryControl = () => {
  return (
    <div class={cx("history_wrapper")}>
      <div className={cx("history_title")}>Lịch sử điều khiển thiết bị</div>
      <div className={cx("history_content")}>
        <table className={cx("history_table")}>
          <tr>
            <th>Thiết bị điều khiển</th>
            <th>Trạng thái điều khiển</th>
            <th>Điều khiển lần cuối</th>
          </tr>
          <tr>
            <td>Bóng đèn điện</td>
            <td>Tắt</td>
            <td>12:00:00 am</td>
          </tr>
          <tr>
            <td>Quạt điện</td>
            <td>Tắt</td>
            <td>12:00:00 am</td>
          </tr>
          <tr>
            <td>Cửa tự động</td>
            <td>Tắt</td>
            <td>12:00:00 am</td>
          </tr>
          <tr>
            <td>Máy bơm nước</td>
            <td>Tắt</td>
            <td>12:00:00 am</td>
          </tr>
        </table>

        <table className={cx("history_table")}>
          <tr>
            <th>Điều khiển cảm biến</th>
            <th>Trạng thái điều khiển</th>
            <th>Điều khiển lần cuối</th>
            <th>Giá trị điều khiển</th>
          </tr>
          <tr>
            <td>Cảm biến nhiệt độ</td>
            <td>Bật</td>
            <td>12:00:00 am</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Cảm biến ánh sáng</td>
            <td>Tắt</td>
            <td>12:00:00 am</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Cảm biến hồng ngoại</td>
            <td>Tắt</td>
            <td>12:00:00 am</td>
            <td>1</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

function ControlDevices() {
  return (
    <Authentication>
      <DefaultLayout>
        <ControlDevicesContent />
        <SensorControl />
        <HistoryControl />
      </DefaultLayout>
    </Authentication>
  );
}

export default ControlDevices;
