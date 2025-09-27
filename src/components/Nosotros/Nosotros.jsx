import React from "react";

const Nosotros = () => {
  return (
    <div className="max-w-7xl mx-auto m-12 px-6 py-12 md:py-16 bg-gradient-to-b  to-black min-h-screen">
   
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-black">Nosotros</h1>
      
      <div className="bg-gradient-to-r  p-8 md:p-10 rounded-lg shadow-xl mb-16 text-black">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Visión</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img 
            src="/images/noso.avif" 
            alt="Visión" 
            className="rounded-lg shadow-xl w-full max-w-sm mx-auto"
          />
          <div className="p-4 md:p-6 text-lg leading-relaxed text-center md:text-left">
            <p>
              Nuestra visión está fundamentada en la ayuda y el saber de las necesidades que existen hoy en día. 
              Este programa fue creado para fortalecer, acompañar y enfocar este servicio único para madres 
              gestantes y lactantes. En 5 años, buscamos expandir nuestro impacto en todo el departamento del Huila, 
              brindando educación y herramientas esenciales para garantizar un embarazo y lactancia saludables.
            </p>
          </div>
        </div>
      </div>

      {/* Sección Misión */}
      <div className="bg-gradient-to-r  p-8 md:p-10 rounded-lg shadow-xl text-black">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Misión</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-4 md:p-6 text-lg leading-relaxed text-center md:text-left">
            <p>
              Nuestra misión es brindar orientación y apoyo integral a las madres gestantes y lactantes, ofreciendo 
              programas educativos y asistencia especializada para garantizar un desarrollo saludable del bebé y 
              fortalecer el bienestar de la madre. A través de nuestro equipo de profesionales, promovemos el 
              empoderamiento de la mujer en su proceso de maternidad, fomentando hábitos saludables, apoyo emocional 
              y herramientas prácticas para enfrentar los desafíos de la gestación y la lactancia.
            </p>
          </div>
          <img 
            src="/images/noso1.avif" 
            alt="Misión" 
            className="rounded-lg shadow-xl w-full max-w-sm mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
