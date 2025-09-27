import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Inicio from "./components/Inicio/Inicio";
import Nosotros from "./components/Nosotros/Nosotros";
import Iami from "./components/Clases/Iami";
import Lactancia from "./components/Clases/Lactancia";
import Relajacion from "./components/Clases/Relajacion";
import Psicologia from "./components/Clases/Psicologia";
import Nutricion from "./components/Clases/Nutricion";
import Principios from "./components/Principios/Principios";
import Contacto from "./components/Contacto/Contacto";
import General from "./components/General/General";
import Ultimo from "./components/Clases/Camapo";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/clases/Ejercicio Respetiratorio" element={<Iami />} />
        <Route path="/general" element={<General />} />
        <Route path="/clases/Riesgo de caida" element={<Lactancia />} />
        <Route path="/clases/Ejercicio de miembro inferior" element={<Relajacion />} />
        <Route path="/clases/Ejercicio de miembro superior" element={<Psicologia />} />
        <Route path="/clases/EJERCICIOS CIRCULATORIOS – MIEMBRO SUPERIOR" element={<Nutricion />} />
        <Route path="/clases/Posicionamiento en cama" element={<Ultimo />} />
        <Route path="/principios" element={<Principios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
