import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  const customClassName = ({ isActive }) => {
    return "menu__link" + (isActive ? " menu__link_active" : "");
  };

  return (
    <div className="menu">
      <NavLink to="/" className={customClassName}>
        Blog
      </NavLink>
      <NavLink to="/about-me" className={customClassName}>
        Sobre mí
      </NavLink>
      <NavLink to="/music" className={customClassName}>
        Música
      </NavLink>
    </div>
  );
}

export default Navigation;
