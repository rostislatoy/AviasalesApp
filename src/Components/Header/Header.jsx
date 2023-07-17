import React from "react";
import "./Header.scss";
import logo from "./img/avia-logo.png";

import { useSelector } from "react-redux";

export default function Header() {
  const stop = useSelector((state) => state.stop);

  return (
    <header className="header">
      <img
        className={stop ? "logo is-loaded" : "logo not-loaded"}
        src={logo}
        alt="AviaSales"
      />
      <div
        className={stop ? "spinner sphere loaded" : "spinner sphere"}
        id="sphere"
      >
        <div className="inner">
          <div className="disc">
            <img className="logo" src={logo} alt="AviaSales" />
          </div>
          <div className="disc"></div>
          <div className="disc"></div>
        </div>
      </div>
    </header>
  );
}
