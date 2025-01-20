import "./Main.css";
import BlogImage3 from "../../images/blog-image-3.jpg";

function Blog3() {
  return (
    <div className="blog__container">
      <h1 className="blog__title">
        La Energía que Somos: Respira, Medita y Vive
      </h1>
      <img src={BlogImage3} className="blog__image-gde" />
      <p className="blog__paragraph">
        Somos seres de energía en constante movimiento. Nuestra salud y
        bienestar dependen en gran medida de nuestra capacidad para gestionar y
        equilibrar esta energía. La respiración, la meditación y la música son
        herramientas poderosas para conectar con nuestra energía interior y
        promover la sanación.
      </p>
      <h2 className="blog__subtitle">
        ¿Cómo funciona la energía en nuestro cuerpo?
      </h2>
      <p className="blog__paragraph">
        La energía vital fluye a través de nuestro cuerpo a través de canales
        energéticos llamados meridianos. Cuando estos canales están bloqueados o
        desequilibrados, pueden surgir problemas de salud física y emocional.
      </p>
      <h2 className="blog__subtitle">
        ¿Cómo podemos equilibrar nuestra energía?
      </h2>
      <ul>
        <li>
          <p className="blog__paragraph">
            Respiración: La respiración profunda y consciente es una forma
            sencilla y efectiva de relajar el cuerpo y la mente, y de aumentar
            el flujo de energía.
          </p>
        </li>
        <li>
          <p className="blog__paragraph">
            Meditación: La meditación nos ayuda a conectar con nuestro interior
            y a observar nuestros pensamientos y emociones sin juicio.
          </p>
        </li>
        <li>
          <p className="blog__paragraph">
            Música: La música tiene el poder de evocar emociones y transformar
            nuestra energía. Escuchar música que te inspire y te haga sentir
            bien puede ser muy beneficioso.
          </p>
        </li>
        <li>
          <p className="blog__paragraph">
            Movimiento: El ejercicio físico ayuda a liberar la energía bloqueada
            y a mejorar la circulación.
          </p>
        </li>
      </ul>
      <p className="blog__paragraph">
        ¡Conéctate con tu energía interior! Al practicar la respiración, la
        meditación y la música, podrás experimentar una sensación de bienestar
        profundo y una mayor conexión contigo mismo.
      </p>
    </div>
  );
}

export default Blog3;
