import React, { useEffect, useState } from "react";
import { LOGO } from "../../constants/localization";
import { Link } from "react-router";

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
              <Link to="/home">Home</Link>
            </li>
            <li className="item">
              <Link to="/about">About Us</Link>
            </li>
            <li className="item">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="item">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="item">
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
