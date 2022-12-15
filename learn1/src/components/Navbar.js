import React from "react";
import reactimg from "../img/reactjs-icon.png";

export default function Navbar() {
  return (
    <nav>
      <div className="container" >
        
        <img src={reactimg} alt="Reactlogo" className="navlogo" />
        <h5>
          <b>React Facts</b>
        </h5>
      </div>
      <p className="nav3">React Course - Project - 1</p>
    </nav>
  );
}
