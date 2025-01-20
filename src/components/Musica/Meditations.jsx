import "./Meditations.css";
import { useEffect, useState } from "react";
import Spotify from "../Musica/Spotify";

function Meditations() {
  return (
    <div className="music__meditations">
      <h2 className="music__meditations-subtitle">Meditaciones</h2>
      <p className="music__meditations-subtitle-2">
        Meditaciones guiadas para comenzar el día y para la noche
      </p>
      <p className="music__meditations-paragraph">
        Meditar es una práctica que consiste en concentrar la atención y
        eliminar el flujo de pensamientos confusos. Sus beneficios incluyen:
        Reducir el estrés, mejorar la concentración, mejorar la salud general,
        fortalecer la consciencia personal, aliviar síntomas de enfermedades,
        mejorar el bienestar emocional, construir conexiones entre las distintas
        partes del cerebro.
      </p>
      <p className="music__meditations-paragraph">
        La meditación es un tipo de medicina complementaria para cuerpo y mente.
        Puede ayudar a que te relajes profundamente y a calmar tu mente. Durante
        la meditación, concentras tu atención en algo. Eliminas todos los
        pensamientos que llenan tu mente y te causan estrés.
      </p>
      <h3 className="music__meditations-subtitle-2">
        Te recomendamos nuestras playlists y tracks favoritos para escuchar
        Meditaciones que puedes encontrar en Spotify! Buscalas y reproducelas
        aquí, solo copia el texto de alguna de las opciones en el buscador y
        Disfruta!!!
      </h3>
      <ul className="music__meditations-list">
        <li className="music__meditations-list-item">
          Meditaciones.Dr Joe Dispenza
        </li>
        <li className="music__meditations-list-item">
          Meditación de la Mañana. Vive un día pleno - Medita con Pilar
        </li>
        <li className="music__meditations-list-item">
          Música para Desconectar Profundamente - Relax Sound
        </li>
        <li className="music__meditations-list-item">
          Meditación para dormir profundamente - Medita con Pilar
        </li>
        <li className="music__meditations-list-item">
          Meditación Autoalusiva: La más Poderosa Meditación de Jacobo Grinberg
          | Meditación Guiada
        </li>
      </ul>
      <Spotify />
      {/* <div className="music__content-spotify">
        <h3 className="=music__title-spotify">Encuentra tu música!</h3>
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
                  <button className="music__track-button-play">
                    Play Track
                  </button>
                </a>
              </div>
            </>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Meditations;
