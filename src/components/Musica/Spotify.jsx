import "./Spotify.css";
import { useEffect, useState } from "react";
import spotifyLogo from "../../images/spotify-icon.svg";

function Spotify() {
  const [cancion, setCancion] = useState("");
  const [canciones, setCanciones] = useState([]);

  function handleSearch(e) {
    e.preventDefault();
    if (cancion.trim() === "") {
      alert("Debes ingresar algo");
      return;
    }
    setCancion("");
    getSong(cancion);
  }

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "97ae7bb8efmshdc8a026afbda14dp1416a7jsnf76dee56a479",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  async function getSong(cancion) {
    try {
      let url = `https://spotify23.p.rapidapi.com/search/?q=${cancion}&type=multi&offset=0&limit=5&numberOfTopResults=5`;
      let data = await fetch(url, options);
      let res = await data.json();
      console.log(res);
      setCanciones(res.tracks.items);
    } catch (error) {
      console.log(`ups... error: ${error}`);
    }
  }

  return (
    <section className="music__content-spotify">
      <h2 className="=music__title-spotify">Encuentra tu música!</h2>
      <form className="music__form-spotify" onSubmit={handleSearch}>
        <img
          className="music__icon-spotify"
          src={spotifyLogo}
          alt="spotify logo"
        />
        <input
          className="music__input-spotify"
          type="text"
          value={cancion}
          onChange={(e) => setCancion(e.target.value)}
        />
        <button className="music__button-search" type="submit">
          Buscar
        </button>
      </form>
      <div className="music__track-list">
        {canciones.map((cancion, index) => (
          <>
            <div className="music__track" key={index}>
              <img
                className="music__track-image"
                src={cancion.data.albumOfTrack.coverArt.sources[0].url}
              />
              <h2 className="music__track-name">{cancion.data.name}</h2>
              <a href={cancion.data.uri}>
                <button className="music__track-button-play">Play Track</button>
              </a>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default Spotify;
