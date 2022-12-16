import React from "react"
import airbnb_logo from '../img/airbnb.png'

export default function Navbar() {
    return (
        <nav>
            <img src={airbnb_logo} className="nav--logo"/>
        </nav>
    )
}