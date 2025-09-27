import React from "react";

const Relajacion = () => {
  const cards = [
    {
      title: "Doble y extienda las rodillas, alternando izquierda y derecha",
      image: "/images/re/1.jpg",
      description:
        "De pie, con la espalda recta y los pies alineados, flexiona una rodilla mientras la otra permanece extendida, luego estira la pierna flexionada y repite el movimiento con la otra rodilla.",
    },
    {
      title: "Flexione una rodilla apoyada en la camilla y eleve la pierna contraria estirada, dirigiendo la punta del pie hacia el techo",
      image: "/images/re/2.jpg",
      description:
        "Apoya una rodilla en la camilla mientras la otra pierna permanece estirada. Eleva la pierna extendida, dirigiendo la punta del pie hacia el techo, y luego bájala lentamente..",
    },
    {
      title: "Separe y aproxime la pierna, alternando izquierda y derecha",
      image: "/images/re/3.png",
      description:
        "De pie o acostado, con la espalda recta, separa una pierna hacia un lado y luego regresa a la posición inicial. Alterna el movimiento con la otra pierna..",
    },
    {
      title: "Elevar una rodilla y después la otra",
      image: "/images/re/4.jpg",
      description:
        "De pie, con la espalda recta, eleva una rodilla hacia el pecho y luego bájala lentamente. Repite el movimiento con la otra pierna, alternando de forma controlada..",
    },
    {
      title: "Flexione ambas piernas apoyadas en la cama, eleve los glúteos",
      image: "/images/re/5.jpg",
      description:
        "Acostado boca arriba, con ambas piernas flexionadas y los pies apoyados en la cama, eleva los glúteos hasta alinear el tronco con las rodillas. Mantén la posición por unos segundos y baja lentamente.",
    },
    {
      title: "Flexión y Extensión de Rodillas",
      image: "/images/re/6.jpg",
      description:
        "Sentado, extiende una pierna hacia adelante y flexiona la rodilla llevándola hacia atrás.",
    },
    {
      title: "Baje y suba la punta del pie",
      image: "/images/re/7.png",
      description:
        "De pie o sentado, con los pies apoyados en el suelo, eleva la punta del pie manteniendo los talones en contacto con el suelo, luego bájala lentamente.",
    },
    {
      title: "Marcha en el Lugar",
      image: "/images/re/8.jpg",
      description:
        "De pie o sentado, simula caminar en el lugar, levantando las rodillas de manera controlada. Imitando el movimiento de caminar.",
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
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 py-8 text-white">EJERCICIOS DEL MIEMBROS INFERIOR</h1>
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

export default Relajacion;
