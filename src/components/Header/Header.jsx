import "./Header.css";
import { FaBeer } from "react-icons/fa";
import Navigation from "../Navigation/Navigation";
import Logotipo from "../../images/Logo.jpg";
import facebookLogo from "../../images/facebook_white.svg";
import tiktokLogo from "../../images/tiktok_white.svg";
import youtubeLogo from "../../images/youtube_white.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__top">
        <div>
          <ul className="header__list">
            <li className="header__list-item">
              <Link
                to="https://www.facebook.com/lucilatagle/"
                className="header__social-link"
              >
                <img
                  className="header__social-icon"
                  src={facebookLogo}
                  alt="facebook logo"
                />
              </Link>
            </li>
            <li className="header__list-item">
              <Link
                to="https://www.tiktok.com/@lucila.tagle"
                className="header__social-link"
              >
                <img
                  className="header__social-icon"
                  src={tiktokLogo}
                  alt="tiktok logo"
                />
              </Link>
            </li>
            <li className="header__list-item">
              <Link
                to="https://www.youtube.com/@saludintegralconlucilatagl2390"
                className="header__social-link"
              >
                <img
                  className="header__social-icon"
                  src={youtubeLogo}
                  alt="youtube logo"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <img src={Logotipo} alt="Logo" className="header__logo" />
      <h1 className="header__title">Salud Integral en Consciencia</h1>
      <Navigation />
    </div>
  );
}

export default Header;
