import React from "react";
import twitter from "../img/Twitter.png"
import facebook from "../img/Facebook.png"
import instagram from "../img/Instagram.png"
import github from "../img/GitHub.png"

export default function Footer(){
    return(
        <footer>
            <img src={twitter}/>
            <img src={facebook}/>
            <img src={instagram}/>
            <img src={github}/>
        </footer>
    )
}
