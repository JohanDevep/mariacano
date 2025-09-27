import React from "react";

const General = () => {
  return (
    <div className="max-w-7xl m-10 mx-auto px-6 py-12 md:py-16 bg-gradient-to-b from-blue-300 via-blue-400 to-white min-h-screen">
      <div className="bg-blue-300 p-10 rounded-lg shadow-xl mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-6">
          OBJETIVO GENERAL
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img
            src="/images/nueva.jpg"
            alt="Objetivo General"
            className="rounded-lg shadow-xl w-full"
          />
          <div className="bg-blue-300 p-8 rounded-lg shadow-lg text-black">
            <p className="mt-4 text-2xl md:text-3xl leading-relaxed">
            Desarrollar un programa de acondicionamiento físico en pacientes hospitalizado de la ESE Carmen Emilia Ospino sede Canaima
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-300 p-10 rounded-lg shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-6">
          OBJETIVO ESPECIFICOS
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <img
              src="/images/espe.avif"
              alt="Objetivo Específico 1"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          <div className="bg-blue-300 p-8 rounded-lg shadow-lg text-black">
            <ul className="mt-4 space-y-4 text-lg md:text-2xl leading-relaxed">
              <li>
                <span className=" font-bold">• </span>{" "}
                Implementar el programa en los pacientes hospitalizados estableciendo las alertas tempranas qué promueva el desacondicionamiento.
              </li>
              <li>
                <span className=" font-bold">• </span>{" "}
                Estrategia digital para uso personal del paciente, como herramienta para fortalecer el abordaje terapéutico en la estancia hospitalaria.
              </li>
              <li>
                <span className=" font-bold">• </span> 
                Promover la humanización del servicio a través  del autocuidado de los pacientes hospitalizados y cuidadores.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
