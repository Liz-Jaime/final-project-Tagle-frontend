import "./Main.css";
import { Link, Outlet } from "react-router-dom";
import BlogImage1 from "../../images/blog-image-1.jpg";
import BlogImage2 from "../../images/blog-image-2.jpg";
import BlogImage3 from "../../images/blog-image-3.jpg";

function Main() {
  return (
    <div className="blog">
      <div className="blog__item">
        <div className="blog__item-image">
          <Link to="blog1" className="blog__item-image-link">
            <img src={BlogImage1} className="blog__image" />
          </Link>
        </div>
        <p className="blog__item-date">28 de diciembre de 2024</p>
        <Link to="blog1" className="blog__item-title">
          Alimentando el Bienestar: La Clave de una Vida Plena en la Edad Adulta
        </Link>
      </div>

      <div className="blog__item">
        <div className="blog__item-image">
          <Link to="blog2" className="blog__item-image-link">
            <img src={BlogImage2} className="blog__image" />
          </Link>
        </div>
        <p className="blog__item-date">13 de diciembre de 2024</p>
        <Link to="blog2" className="blog__item-title">
          Reprograma tu Mente: Libera tu Potencial y Alcanza tus Metas
        </Link>
      </div>

      <div className="blog__item">
        <div className="blog__item-image">
          <Link to="blog3" className="blog__item-image-link">
            <img src={BlogImage3} className="blog__image" />
          </Link>
        </div>
        <p className="blog__item-date">27 de noviembre de 2024</p>
        <Link to="blog3" className="blog__item-title">
          La Energía que Somos: Respira, Medita y Vive
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Main;
