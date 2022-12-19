import React from "react";
import earth from "../img/earth.png";

export default function Navbar() {
  return (
    <nav>
      <img src={earth} alt="logo" className="earthlogo" />
      <p className="nav--text">my travel journal</p>
    </nav>
  );
}
