import "./style.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import Container from "./components/Container";
import data from "./data";

export default function App() {
  const dataelement = data.map((item) => {
    return <Container key={item.id} {...item} />;
  });
  return (
    <>
      <Navbar />
      {dataelement}
    </>
  );
}
