import React from "react";
import loc2 from "../img/loc2.png";

export default function Container(props) {
  return (
    <section className="container">
      <div className="sub--cont1">
        <img src={props.imageUrl} className="sub--img" />
      </div>
      <div className="sub--cont2">
        <div className="sub--cont3">
          <img src={loc2} alt="loc" />
          <p className="location">{props.location}</p>
          <a href={props.googleMapsUrl} className="maps">
            View on Google Maps
          </a>
        </div>
        <div className="sub--cont4">
          <p className="title">{props.title}</p>
          <p className="date">
            {props.startDate} - {props.endDate}
          </p>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </section>
  );
}
