import React from "react";
import "../sass/layout/_header.scss";
import logo from "../images/logo.png";
import { AiOutlineHome } from "react-icons/ai";
function Header() {
  return (
    <div>
      <header className="header">
        <div className="header__top">
          <div className="header__top-logo">
            <img alt="logo" src={logo} />
          </div>
          <div className="header__top-icon">
            <AiOutlineHome className="AiOutlineHome" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
