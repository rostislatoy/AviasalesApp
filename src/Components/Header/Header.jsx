import React from "react";
import "./Header.scss";
import logo from "./img/logo.svg";
export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="" />
    </header>
  );
}
