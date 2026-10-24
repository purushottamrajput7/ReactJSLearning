import React, { useState } from "react";
import { LOGO } from "../../constants/localization";

const Header = () => {
  const [logingBtnText, setLoginBtnText] = useState("Login");

  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="logo">
          <img src={LOGO} alt="Logo" />
        </div>
        <div className="menu">
          <ul className="list">
            <li className="item">
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
            <li>
              <button
                className="btn login-btn"
                onClick={() => {
                  logingBtnText == "Login"
                    ? setLoginBtnText("Logout")
                    : setLoginBtnText("Login");
                }}
              >
                {logingBtnText}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
