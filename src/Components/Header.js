import React from "react";
import logo from "../images/logo.png";
import style from "../Components/Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.header_container}>
      <NavLink to="/home/">
        <img src={logo} alt="logo"></img>
      </NavLink>

      <div className={style.list}>
        <div>
          <NavLink to="/users/" className={style.link}>
            Users
          </NavLink>
        </div>
        <div>
          <NavLink to="/history/" className={style.link}>
            History
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Header;
