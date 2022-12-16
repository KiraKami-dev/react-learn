import React from "react";
import card1 from "../img/card1.png"
import Star from "../img/Star.png"
import circle from "../img/circle.png"

export default function Card(){
    return(
        <div className="container">
            <div className="subcont1">
                <img src={card1} className='cardimg'/>
                <div className="sold">SOLD OUT</div>
            </div>
            <div className="starrow">
                <img src={Star} className="starimg"/>
                <p className="rating">5.0</p>
                <p className="grey">(6)</p>
                <img src={circle}/>
                <p className="grey">USA</p>
            </div>
            <p className="content--title">Life lessons with Katie Zaferes</p>
            <p className="content--price"><b>From $136 </b>/ person</p>
        </div>
    )
}