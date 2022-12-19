import React from "react";
import Star from "../img/Star.png";
import circle from "../img/circle.png";


export default function Card(props) {
  return (
    <div className="container">
      <div className="subcont1">
        <img src={props.img} className="cardimg" />
        <div className="sold">{props.status}</div>
      </div>
      <div className="starrow">
        <img src={Star} className="starimg" />
        <p className="rating">{props.rating}</p>
        <p className="grey">({props.review})</p>
        <img src={circle} />
        <p className="grey">{props.country}</p>
      </div>
      <p className="content--title">{props.title}</p>
      <p className="content--price">
        <b>From ${props.price} </b>/ person
      </p>
    </div>
  );
}
