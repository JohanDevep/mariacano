import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const submenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setSubmenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg z-50 py-3 md:py-4">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-8 max-w-6xl">
      
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>

        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-5 md:p-0 transition-all duration-300 ease-in-out ${
            menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full md:opacity-100 md:translate-x-0"
          } rounded-lg md:rounded-none z-50`}
        >
          <li>
            <Link
              to="/"
              className={`block py-2 px-4 text-lg font-semibold rounded-md transition ${
                location.pathname === "/"
                  ? "text-blue-600 bg-gray-100"
                  : "text-gray-800 hover:text-blue-600"
              }`}
            >
              INICIO
            </Link>
          </li>

          <li>
            <Link
              to="/general"
              className={`block py-2 px-4 text-lg font-semibold rounded-md transition ${
                location.pathname.startsWith("/general")
                  ? "text-blue-600 bg-gray-100"
                  : "text-gray-800 hover:text-blue-600"
              }`}
            >
              OBJETIVO
            </Link>
          </li>

          <li className="relative" ref={submenuRef}>
            <button
              onClick={() => setSubmenuOpen(!submenuOpen)}
              className="block py-2 px-4 text-lg font-semibold text-gray-800 hover:text-blue-600 flex items-center"
            >
              CLASES <FaChevronDown className="ml-2" />
            </button>
            {submenuOpen && (
              <ul className="absolute left-0 top-full mt-1 w-52 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                {[
                  { path: "/clases/Ejercicio Respetiratorio", label: "EJERCICIO RESPIRATORIO" },
                  { path: "/clases/Riesgo de caida ", label: "RIESGOS DE CAÍDA " },
                  { path: "/clases/Ejercicio de miembro inferior", label: "EJERCICIOS DEL MIEMBROS INFERIOR " },
                  { path: "/clases/Ejercicio de miembro superior", label: "EJERCICIOS DEL MIEMBRO SUPERIOR" },
                  { path: "/clases/EJERCICIOS CIRCULATORIOS – MIEMBRO SUPERIOR", label: "EJERCICIOS CIRCULATORIOS – MIEMBRO SUPERIOR" },
                  { path: "/clases/Posicionamiento en cama", label: "POSICIONAMIENTO EN LA CAMA" }
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={() => setSubmenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

       
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;