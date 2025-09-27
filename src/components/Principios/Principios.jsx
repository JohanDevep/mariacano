import React from "react";

const Principios = () => {
  return (
    <div className="max-w-7xl mx-auto m-12 px-6 py-12 md:py-16 bg-gradient-to-b from-blue-400 via-blue-400 to-white min-h-screen">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
        Principios
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <img
            src="/images/inicio11.avif"
            alt="Principios 1"
            className="rounded-lg shadow-xl w-full"
          />
          <img
            src="/images/inicio12.avif"
            alt="Principios 2"
            className="rounded-lg shadow-xl w-full"
          />
        </div>

        <div className="bg-blue-300 p-8 rounded-lg shadow-lg text-white">
          <h2 className="text-xl md:text-2xl font-bold text-White-300">
            El programa de ORIENTACIÓN PARA MADRES GESTANTES Y LACTANTES se rige
            por los siguientes principios:
          </h2>
          <ul className="mt-4 space-y-4 text-gray-200">
            <li>
              <span className="text-yellow-600 font-bold">• EQUIDAD:</span> Un
              sentido de justicia completo para las madres y su hogar...
            </li>
            <li>
              <span className="text-green-600 font-bold">• CALIDAD:</span> Todo
              el conjunto de servicios terapéuticos...
            </li>
            <li>
              <span className="text-pink-600 font-bold">
                • PARTICIPACIÓN INTEGRAL:
              </span>{" "}
              Intervención activa con todos los sectores...
            </li>
            <li>
              <span className="text-blue-600 font-bold">• LIDERAZGO:</span>{" "}
              Capaz de establecer una buena comunicación...
            </li>
            <li>
              <span className="text-red-600 font-bold">• PREVENCIÓN:</span>{" "}
              Enfoque de la promoción y fomento de la salud...
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Principios;
