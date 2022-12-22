import React from "react";
import memesData from "../data/memedata";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(function () {
      return memesArray[randomNumber].url;
    });
  }

  return (
    <main>
      <div className="meme--cont">
        <div className="input--cont">
          <input type="text" placeholder="Top text" className="input--top" />
          <input
            type="text"
            placeholder="Bottom text"
            className="input--bottom"
          />
        </div>
        <div className="button-cont">
        <button className="meme--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
        </div>
        <img src={memeImage} className="memeimg" />
      </div>
    </main>
  );
}
