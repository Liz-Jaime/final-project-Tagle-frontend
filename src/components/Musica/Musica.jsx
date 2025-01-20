import "./Musica.css";
import { Link, Outlet } from "react-router-dom";

function Musica() {
  return (
    <div className="music">
      <h1 className="music__title">Música para Sanar</h1>
      <p className="music__content">
        La música tiene el poder de evocar emociones y transformar nuestra
        energía. Escuchar música que te inspire y te haga sentir bien puede ser
        muy beneficioso.
      </p>
      <section className="music__meditations">
        <ul className="music__links">
          <li className="music__links-item">
            <Link to="meditations" className="music__links-item-m">
              Meditaciones
            </Link>
          </li>
          <li className="music__links-item">
            <Link to="frequencies" className="music__links-item-f">
              Frecuencias
            </Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </div>
  );
}

export default Musica;
