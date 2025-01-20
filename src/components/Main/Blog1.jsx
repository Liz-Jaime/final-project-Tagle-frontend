import "./Main.css";
import BlogImage1 from "../../images/blog-image-1.jpg";

function Blog1() {
  return (
    <div className="blog__container">
      <h1 className="blog__title">
        Alimentando el Bienestar: La Clave de una Vida Plena en la Edad Adulta
      </h1>
      <img src={BlogImage1} className="blog__image-gde" />
      <p className="blog__paragraph">
        La alimentación es mucho más que satisfacer el hambre. Es el combustible
        que alimenta nuestro cuerpo y mente, y la base sobre la que construimos
        nuestra salud. La alimentación consciente va más allá de contar
        calorías; se trata de establecer una relación respetuosa y nutritiva con
        los alimentos, escuchando las señales de nuestro cuerpo y eligiendo
        opciones que nos aporten energía y vitalidad.
      </p>

      <h2 className="blog__subtitle">
        ¿Por qué es importante la alimentación consciente?
      </h2>
      <ul>
        <li>
          <p className="blog__paragraph">
            Longevidad y prevención de enfermedades: Una dieta equilibrada y
            variada reduce el riesgo de enfermedades crónicas como la diabetes,
            la hipertensión y enfermedades cardiovasculares.
          </p>
        </li>
        <li>
          <p className="blog__paragraph">
            Peso saludable: Al comer de manera consciente, es más fácil
            controlar el apetito y mantener un peso saludable.
          </p>
        </li>
        <li>
          <p className="blog__paragraph">
            Mayor energía y vitalidad: Los alimentos nutritivos proporcionan la
            energía que necesitas para afrontar el día a día con entusiasmo.
          </p>
        </li>
        <li>
          <p className="blog__paragraph">
            Mejor estado de ánimo: La alimentación influye directamente en
            nuestro estado de ánimo y bienestar emocional.
          </p>
        </li>
        <li>
          <p className="blog__paragraph">
            Mejor digestión: Una alimentación consciente favorece una buena
            digestión y reduce los problemas gastrointestinales.
          </p>
        </li>
      </ul>
      <h2 className="blog__subtitle">
        ¿Por qué es importante la alimentación consciente?
      </h2>
      <ul>
        <li>
          <p className="blog__paragraph">
            Come despacio y sin distracciones: Dedica tiempo a disfrutar de cada
            bocado y presta atención a las sensaciones de tu cuerpo.
          </p>
        </li>
        <li>
          <p className="blog__paragraph">
            Escucha a tu cuerpo: Come cuando tengas hambre y detente cuando
            estés satisfecho.
          </p>
        </li>
        <li>
          <p className="blog__paragraph">
            Elige alimentos frescos y naturales: Prioriza frutas, verduras,
            granos enteros y proteínas de alta calidad.
          </p>
        </li>
        <li>
          <p className="blog__paragraph">
            Cocina en casa: Prepara tus propias comidas para tener control sobre
            los ingredientes y las porciones.
          </p>
        </li>
        <li>
          <p className="blog__paragraph">
            Sé amable contigo mismo: No te castigues si comes algo que no está
            en tu plan. Lo importante es mantener una actitud positiva y
            aprender de cada experiencia.
          </p>
        </li>
      </ul>
      <p className="blog__paragraph">
        ¡Invierte en tu salud! La alimentación consciente es una inversión a
        largo plazo que te permitirá disfrutar de una vida más plena y
        saludable.
      </p>
    </div>
  );
}

export default Blog1;
