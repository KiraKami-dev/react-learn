import "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data/data";

function App() {
  const dataelement = data.map((items) => {
    return (
      <Card
        img={items.coverImg}
        status={items.location}
        rating={items.stats.rating}
        review={items.stats.reviewCount}
        country="USA"
        title={items.title}
        price={items.price}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <div className="appcont">{dataelement}</div>
    </>
  );
}
const root = document.getElementById("root");

ReactDOM.render(<App />, root);
