import classNames from "classnames/bind";
import styles from "./RegisterPage.module.scss";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { DefaultLayout } from "../../layouts";
import cors from "cors";
import success from "../../assets/images/popup_sucess.png";
import failed from "../../assets/images/popup_failed.png";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function RegisterPage() {
  const [first_name, setFname] = useState("");
  const [last_name, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("user");
   
  const [isDisplay, setDisplay] = useState(0);

  const handleRegister = async (e) => {
    e.preventDefault();

    const data = { first_name, last_name, username, password, email, phoneNumber, address, role };

    try {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        if (result.errCode === 0) {
          console.log("Register successful:", result);
          console.log(">>> check data register", result.data);
          setDisplay(1);
        } else {
          console.error("Login failed:", result);
          setDisplay(2);
        }
      }
    } catch (error) {
      console.error("Error during register:", error);
    }
  };

  return (
    <div className={cx("wapper_login")}>
      <div className={cx("login_content")}>
        <div className={cx("left_content")}>
          <div className={cx("wellcome")}>Welcome !!!</div>
          <div className={cx("slogan")}>A smart World for you</div>
          <div className={cx("image")}></div>
        </div>
        <div className={cx("right_content")}>
          <form onSubmit={handleRegister}>
            <h1 className={cx("login")}>Sign up</h1>
            <h2 className={cx("heading")}>First name</h2>
            <input
              className={cx("firstname")}
              type="text"
              value={first_name}
              placeholder="Firstname"
              onChange={(e) => setFname(e.target.value)}
              required
            />
            <h2 className={cx("heading")}>Last name</h2>
            <input
              className={cx("lastname")}
              type="text"
              value={last_name}
              placeholder="Lastname"
              onChange={(e) => setLname(e.target.value)}
              required
            />
            <h2 className={cx("heading")}>Username</h2>
            <input
              className={cx("username")}
              type="text"
              value={username}
              placeholder="Username"
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
            <h2 className={cx("heading")}>Email</h2>
            <input
              className={cx("email")}
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <h2 className={cx("heading")}>Phone Number</h2>
            <input
              className={cx("phone")}
              type="text"
              value={phoneNumber}
              placeholder="Phone number"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <h2 className={cx("heading")}>Address</h2>
            <input
              className={cx("address")}
              type="text"
              value={address}
              placeholder="Phone number"
              onChange={(e) => setAddress(e.target.value)}
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
              Good job <span className={cx("user")}>{} !!!</span>
            </div>
            <div className={cx("comeback")}>Wellcome to the SmartHouse</div>
            <Link to="/sign-in">
              <button className={cx("ok")}>Sign in right now</button>
            </Link>
          </div>
        </div>
      )}

      {/* Failure Popup */}
      {isDisplay === 2 && (
        <div className={cx("popup", "failure")}>
          <div className={cx("wrapper_popup")}>
            <img className={cx("popup_success")} src={failed} alt="" />
            <div className={cx("title")}>Failed Sign up !!!</div>
            <div className={cx("comeback")}>Double check your information</div>
            <button className={cx("failed")} onClick={() => setDisplay(0)}>
              Retry sign up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterPage;
