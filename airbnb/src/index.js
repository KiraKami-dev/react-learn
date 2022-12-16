import "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import card1 from "./img/card1.png";
import card2 from "./img/card2.png";
import card3 from "./img/card3.png";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="appcont">
        <Card
          img={card1}
          status="SOLD OUT"
          rating="5.0"
          review="6"
          contry="USA"
          title="Life lessons with Katie Zaferes"
          price="136"
        />
        <Card
          img={card2}
          status="ONLINE"
          rating="4.5"
          review="10"
          contry="Italy"
          title="Learn wedding photography"
          price="125"
        />
        <Card
          img={card3}
          status="ONLINE"
          rating="4.8"
          review="8"
          contry="Italy"
          title="Group Mountain Biking"
          price="50"
        />
      </div>
    </>
  );
}
const root = document.getElementById("root");

ReactDOM.render(<App />, root);
