import React, { Component } from "react";
import HeaderLogo from "../image/header_logo.png";
import "../App.css";

const Header = () => (
  <div className="header">
    <img className="header-img" src={HeaderLogo} />一站式跨境卖家成长平台
  </div>
);

export default Header;
