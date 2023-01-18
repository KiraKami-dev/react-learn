import React from "react";

export default function Meme() {
  // Connecting to API using
  React.useEffect(
    function () {
      console.log("Effect ran");
      fetch(`https://api.imgflip.com/get_memes`)
        .then((res) => res.json())
        .then((data) => setMemeImage(data.data.memes));
    },
    [0]
  );

  const [memeImage, setMemeImage] = React.useState();
  function getMemeImage() {
    // const memesArray = memeImage.data.memes;
    const randomNumber = Math.floor(Math.random() * memeImage.length);
    const url = memeImage[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  // Text on image
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="meme--cont">
        <div className="input--cont">
          <input
            type="text"
            placeholder="Top text"
            className="input--top"
            name="topText"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Bottom text"
            className="input--bottom"
            name="bottomText"
            onChange={handleChange}
          />
        </div>
        <div className="button-cont">
          <button className="meme--button" onClick={getMemeImage}>
            Get a new meme image 🖼
          </button>
        </div>
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}
