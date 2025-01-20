import "./About.css";
import profilePhoto from "../../images/lucila_tagle_photo.jpg";

function About() {
  return (
    <div className="about">
      <h1 className="about__title">Lucila Tagle</h1>
      <div className="about__container">
        <img src={profilePhoto} className="about__photo" />
        <p className="about__paragraph">
          Soy Lucila Tagle y soy Terapeuta de mente, alma y cuerpo. Soy
          Nutriologa con especialidades en Nutrición Clínica, Nutrición
          Ortomolecular, Nutrición Renal y Nutrición Deportiva. Tengo
          Certificaciones en Medicina Holistica China, Procesos de
          Desintoxicación y Naturismo y Salud Digestiva. También tengo estudios
          en Biodescodificación con reconocimiento por la Universidad de Cuba, y
          Bioneuroemoción. Trabajo con Terapias Cuánticas, Sistema de Par de
          Imanes a nivel craneal, Terapias con Frecuencias y Sonidos Wongs y
          también tengo una Certificación en Masaje Holistico con Masaje
          Tántrico. También trabajo en el Manejo de la Energía a través de la
          filosofía Tao, Terapia Transpersonal y Manejo de la Energía Sexual.
          Puedo ayudarte con orientación nutricional, tengo planes de Nutrición,
          Desintoxicación y Desparasitación física, emocional y espiritual.
        </p>
      </div>
    </div>
  );
}

export default About;
