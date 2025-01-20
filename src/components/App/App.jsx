import "./App.css";
import { useEffect, useState } from "react"; // Nueva importación
import Header from "../../components/Header/Header.jsx";
import { Routes, Route } from "react-router-dom";
import Main from "../../components/Main/Main.jsx";
import Musica from "../../components/Musica/Musica.jsx";
import About from "../../components/About/About.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Meditations from "../Musica/Meditations.jsx";
import Frequencies from "../Musica/Frequencies.jsx";
import Blog1 from "../Main/Blog1.jsx";
import Blog2 from "../Main/Blog2.jsx";
import Blog3 from "../Main/Blog3.jsx";
// import api from "../../utils/api.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/music" element={<Musica />}>
          <Route path="meditations" element={<Meditations />} />
          <Route path="frequencies" element={<Frequencies />} />
        </Route>
        <Route path="/about-me" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
