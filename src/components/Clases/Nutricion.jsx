import React from "react";

const Nutricion = () => {
  const cards = [
    {
      title: "Rotación de hombros",
      image: "/images/nut/1.png",
      description:
        "Con los brazos relajados a los lados, rota los hombros hacia adelante y luego hacia atrás.",
    },
    {
      title: "Flexión y extensión de codo",
      image: "/images/nut/2.png",
      description:
        "Sentado o de pie, flexiona los codos llevando las manos hacia los hombros y luego estira los brazos hacia abajo.",
    },
    {
      title: "Movimientos de Dedos",
      image: "/images/nut/3.png",
      description:
        "Abre y cierra la mano en un movimiento de pinza, como si estuvieras agarrando algo.",
    },
    {
      title: "Flexión extensión  de Muñecas",
      image: "/images/nut/4.png",
      description:
        "sentado, con el antebrazo apoyado sobre una mesa, y dejando la mano fuera, llevar la mano hacia arriba lentamente todo lo que se pueda.",
    },
    {
      title: "Elevación de Brazos",
      image: "/images/nut/5.png",
      description:
        "Con los brazos a los lados, eleva los brazos hacia arriba y luego vuelve a bajarlos lentamente.",
    },
    {
      title: "Prona supinación",
      image: "/images/nut/6.png",
      description:
        "En la misma posición que antes, se gira la mano para intentar mirarnos la palma.",
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 bg-gradient-to-b from-blue-400 via-blue-400 to-white min-h-screen text-gray-900">
     <div className="max-w-2xl  py-12 mx-auto bg-blue-100 border-l-4 border-blue-400 text-blue-900 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">
           Recomendaciones sobre los ejercicios
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>
            Realiza <strong>10 repeticiones</strong> o{" "}
            <strong>10 segundos</strong> por 2 veces o ajusta según tu
            tolerancia.
          </li>
          <li>
            Si sientes fatiga o molestias, reduce la intensidad y{" "}
            <strong>suspende</strong>.
          </li>
          <li>
            Haz los ejercicios <strong>dos veces al día</strong> (mañana y
            tarde), siguiendo siempre las indicaciones de tu fisioterapeuta y
            médico.
          </li>
          <li>
            Evita hacer ejercicio <strong>justo después de comer</strong> para
            prevenir molestias.
          </li>
        </ul>
        <hr className="my-4 border-purple-300" />
        <h4 className="text-xl font-semibold"> Beneficios del ejercicio:</h4>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>
             <strong>Acelera tu recuperación</strong> al mejorar la
            circulación y la movilidad.
          </li>
          <li>
             <strong>Previene la rigidez muscular</strong> y mantiene la
            fuerza.
          </li>
          <li>
             <strong>Mejora tu estado de ánimo</strong> y reduce el estrés.
          </li>
        </ul>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 py-8 text-white">EJERCICIOS CIRCULATORIOS – MIEMBRO SUPERIOR</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nutricion;
