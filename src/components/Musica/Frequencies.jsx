import "./Frequencies.css";
import { useEffect, useState } from "react";
import Spotify from "../Musica/Spotify";

function Frequencies(props) {
  return (
    <div className="music__frequencies">
      <h2 className="music__frequencies-subtitle">
        Frecuencia 432 hz, Para dormir y sanar.
      </h2>
      <p className="music__frequencies-paragraph">
        Las frecuencias de las ondas sonoras determinan su tono y se suele medir
        en Hertz (Hz), una unidad que equivale a una onda por segundo y el oído
        humano es capaz de percibir un amplio rango de frecuencias de 20 a
        20,000 Hz.
        <p className="music__frequencies-paragraph">
          En unidades del Sistema Internacional (SI), el resultado se mide en
          Hertz (Hz), llamados así por el físico alemán, Heinrich Rudolf Hertz y
          su lectura es a través de multímetros digitales.
        </p>
        <p className="music__frequencies-paragraph">
          ¿Cuáles son las frecuencias sonoras que se usan y sus efectos?
        </p>
        <p className="music__frequencies-paragraph">
          Mediante las frecuencias sonoras contenidas en la música podemos
          modificar el funcionamiento de un ser vivo, dicho de otra forma, sanar
          y mejorar el cuerpo humano. A continuación, te presentamos una lista
          de frecuencias y sus posibles efectos sanadores.
        </p>
        <p className="music__frequencies-paragraph">
          432 Hz. Se asocia a propiedades relajantes y armoniosas, y se dice que
          puede ayudar a mejorar el estado de ánimo y la conexión con el cuerpo
          y el universo. Sus beneficios pueden ser: Relajación, bienestar,
          meditación, conexión con la naturaleza.
        </p>
        <p className="music__frequencies-paragraph">
          528 Hz. Se dice que tiene beneficios para la salud física, mental y
          emocional. Reduce la ansiedad, libera la tristeza y resentimiento,
          amplía el corazón para sentir puro amor e irradia curación en el
          cuerpo.
        </p>
        <p className="music__frequencies-paragraph">
          963 Hz. Frecuencia de Dios y conexión divina. Se asocia con varios
          beneficios, como la meditación, la relajación, el despertar espiritual
          y la claridad mental, calma preocupaciones y atrae bendiciones.
        </p>
        <p className="music__frequencies-paragraph">
          888 Hz. Se asocia con varios beneficios, como la relajación, la
          conexión energética, el crecimiento personal y la manifestación de
          deseos. Se le atribuye la capacidad de atraer a tu vida abundancia,
          amor, plenitud y prosperidad infinita del Universo.
        </p>
        <p className="music__frequencies-paragraph">
          639 Hz. Se asocia con la activación del chakra del corazón y se dice
          que tiene beneficios para la sanación emocional, la relajación y el
          amor propio.
        </p>
      </p>
      <h3 className="music__frequencies-subtitle-2">
        Te recomendamos nuestras playlists y tracks favoritos para escuchar
        Frecuencias Sanadoras que puedes encontrar en Spotify! Buscalas y
        reproducelas aquí, solo copia el texto de alguna de las opciones en el
        buscador y Disfruta!!!
      </h3>
      <ul className="music__frequencies-list">
        <li className="music__frequencies-list-item">
          432 Hz - Eleva Tu Energía
        </li>
        <li className="music__frequencies-list-item">
          432 Hz - Frecuencia Sanadora
        </li>
        <li className="music__frequencies-list-item">
          888 Hz - Frecuencia de Abundancia y Prosperidad Infinita del Universo
        </li>
        <li className="music__frequencies-list-item">
          639 hz Frecuencia del Amor
        </li>
        <li className="music__frequencies-list-item">
          Alta Vibración 432 Hz & Energía Positiva
        </li>
      </ul>
      <Spotify />
      {/* <div className="music__content-spotify">
        <h2 className="=music__subtitle">Encuentra tu música!</h2>
        <form className="music__form" onSubmit={handleSearch}>
          <img
            className="music__spotify-icon"
            src={spotifyLogo}
            alt="spotify logo"
          />
          <input
            className="music__input"
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

export default Frequencies;
