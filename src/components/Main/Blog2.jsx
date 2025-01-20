import "./Main.css";
import BlogImage2 from "../../images/blog-image-2.jpg";

function Blog2() {
  return (
    <div className="blog__container">
      <h1 className="blog__title">
        Reprograma tu Mente: Libera tu Potencial y Alcanza tus Metas
      </h1>
      <img src={BlogImage2} className="blog__image-gde" />
      <p className="blog__paragraph">
        ¿Alguna vez te has preguntado por qué te cuesta tanto alcanzar tus
        objetivos? La respuesta puede estar en tus creencias limitantes. A lo
        largo de nuestra vida, hemos internalizado creencias que pueden sabotear
        nuestro éxito y bienestar. Pero la buena noticia es que podemos
        reprogramar nuestra mente y crear una nueva realidad.
      </p>

      <h2 className="blog__subtitle">¿Qué son las creencias limitantes?</h2>
      <p className="blog__paragraph">
        Son pensamientos negativos y arraigados que nos impiden avanzar y
        alcanzar nuestro máximo potencial. Estas creencias pueden ser el
        resultado de experiencias pasadas, educación, o mensajes culturales.
      </p>

      <h2 className="blog__subtitle">
        ¿Cómo superar las creencias limitantes?
      </h2>
      <ul>
        <li>
          <p className="blog__paragraph">
            Identifica tus creencias limitantes: Observa tus pensamientos y
            emociones. ¿Qué te dices a ti mismo? ¿Qué te impide avanzar?
          </p>
        </li>
        <li>
          <p className="blog__paragraph">
            Cuestiona tus creencias: ¿Hay alguna evidencia que las sustente?
            ¿Son realmente ciertas?
          </p>
        </li>
        <li>
          <p className="blog__paragraph">
            Reemplaza las creencias negativas por positivas: Afirmaciones
            positivas y visualización pueden ayudarte a crear una nueva
            realidad.
          </p>
        </li>
        <li>
          <p className="blog__paragraph">
            Busca apoyo: Habla con un terapeuta o mentor que pueda ayudarte a
            superar tus creencias limitantes.
          </p>
        </li>
        <li>
          <p className="blog__paragraph">
            Celebra tus logros: Reconoce tus avances y recompénsate por tus
            esfuerzos.
          </p>
        </li>
      </ul>
      <p className="blog__paragraph">
        ¡Libera tu potencial! Al reprogramar tu mente, podrás alcanzar tus metas
        y vivir una vida más plena y satisfactoria.
      </p>
    </div>
  );
}

export default Blog2;
