import React from "react";

const Lactancia = () => {
  const cards = [
    {
      title: "levanta los brazos Uso de las manos para levantarse ",
      image: "/images/cai/1.png",
      description:
        "Coloca tu camilla en 30° para estar más cómodo, luego vas a levantar tus brazos hasta la barbilla y vuelves y lo bajas .",
    },
    {
      title: "Separación de piernas  ",
      image: "/images/cai/2.png",
      description:
        "Acostado, el paciente separa las piernas a lo ancho de la cama y luego las junta nuevamente.",
    },
    {
      title: "Uso de las manos para levantarse",
      image: "/images/cai/3.jpg",
      description:
        "El paciente usa las manos apoyadas en la cama o en un lado para levantarse lentamente.",
    },
   
    {
      title: "Rotaciones de Tobillo",
      image: "/images/cai/5.png",
      description:
        "Sentado, levanta un pie y rota el tobillo en círculos.",
    },
    {
      title: "Flexión y Extensión de Rodillas",
      image: "/images/cai/6.png",
      description:
        "Sentado, extiende una pierna hacia adelante y flexiona la rodilla llevándola hacia atrás.",
    },
   
    {
      title: "Marcha en el Lugar",
      image: "/images/cai/8.jpg",
      description:
        "De pie o sentado, simula caminar en el lugar, levantando las rodillas de manera controlada. Imitando el movimiento de caminar.",
    },
    {
      title: "Toma de Medidas del Equilibrio",
      image: "/images/cai/9.png",
      description:
        "De pie, trata de mantener el equilibrio sobre un pie durante .",
    },
    {
      title: "Sentadillas Asistidas  ",
      image: "/images/cai/10.jpg",
      description:
        "De pie y con el respaldo de una silla, baja como si fueras a sentarte. Mantén el peso en los talones.",
    },
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
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 py-8 text-white">RIESGOS DE CAÍDA</h1>
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

export default Lactancia;
