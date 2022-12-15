import React from "react";
import profile from "../img/profile.png";
import email from "../img/Mail.png"
import linkedin from "../img/linkedin.png"

export default function Header() {
  return (
    <header>
      <img src={profile} alt="Profile pic" className="profile" />
      <h2>Akshat Khair</h2>
      <p className="post">Frontend Developer</p>
      <small>akshatkhair.co.in</small>
      <div className="buttons">
      <button className="email">
        <img src={email} />
        <p>Email</p>
      </button>
      <button className="linkedin">
      <img src={linkedin} />
        <p>Linkedin</p>
      </button>
      </div>
    </header>
  );
}
