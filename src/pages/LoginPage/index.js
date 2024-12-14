import classNames from "classnames/bind";
import styles from "./LoginPage.module.scss";
import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";
import { DefaultLayout } from "../../layouts";
import cors from "cors";
import success from "../../assets/images/popup_sucess.png";
import failed from "../../assets/images/popup_failed.png";
import { Link } from "react-router-dom";
import { storeAuthToken } from "../../components/Authentication";

const cx = classNames.bind(styles);

function LoginPage() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isDisplay, setDisplay] = useState(0);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const data = { email, password };

    try {
      const response = await fetch("/api/users/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        if (result.errCode === 0) {
          console.log("Login successful:", result);
          console.log(result.data);
          setMessage(result.message);
          setUser(result.data.Username);
          setDisplay(1);

          // Store token and user data
          console.log(">>> check token: ", result.token);
          storeAuthToken(result.token); // Use the utility function to store token and timestamp
          localStorage.setItem("dataUser", JSON.stringify(result.data));
          console.log(
            ">>> check local storage token - login: ",
            localStorage.getItem("authToken")
          );
          console.log(
            ">>> check local storage data user - login: ",
            localStorage.getItem("dataUser")
          );
        } else {
          console.error("Login failed:", result);
          setDisplay(2);
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className={cx("wapper_login")}>
      <div className={cx("login_content")}>
        <div className={cx("left_content")}>
          <div className={cx("wellcome")}>Welcome Back !!!</div>
          <div className={cx("slogan")}>A smart World for you</div>
          <div className={cx("image")}></div>
        </div>
        <div className={cx("right_content")}>
          <form onSubmit={handleLogin}>
            <h1 className={cx("login")}>Login</h1>
            <h2 className={cx("heading")}>Username</h2>
            <input
              className={cx("username")}
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <h2 className={cx("heading")}>Password</h2>
            <input
              className={cx("password")}
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className={cx("submit")} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* Success Popup */}
      {isDisplay === 1 && (
        <div className={cx("popup", "success")}>
          <div className={cx("wrapper_popup")}>
            <img className={cx("popup_success")} src={success} alt="" />
            <div className={cx("title")}>
              Good job <span className={cx("user")}>{user} !!!</span>
            </div>
            <div className={cx("comeback")}>Wellcome Back the SmartHouse</div>
            <Link to="/">
              <button className={cx("ok")}>Return your home</button>
            </Link>
          </div>
        </div>
      )}

      {/* Failure Popup */}
      {isDisplay === 2 && (
        <div className={cx("popup", "failure")}>
          <div className={cx("wrapper_popup")}>
            <img className={cx("popup_success")} src={failed} alt="" />
            <div className={cx("title")}>Failed Login !!!</div>
            <div className={cx("comeback")}>Double check your information</div>
            <button className={cx("failed")} onClick={() => setDisplay(0)}>
              Retry login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
