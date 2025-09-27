import React from "react";

const Psicologia = () => {
  const cards = [
    {
      title: "Flexión lateral de cuello ambos lados (inclinar la cabeza)",
      image: "/images/su/1.jpg",
      description:
        "El paciente puede estar sentado o de pie consiste en inclinar la cabeza hacia un lado, acercando la oreja al hombro sin levantarlo, manteniendo la espalda recta y los hombros relajados.",
    },
    {
      title: "Rotación de cuello a ambos lados (como si dijéramos NO)",
      image: "/images/su/2.jpg",
      description:
        "Siéntate o párate con la espalda recta y los hombros relajados. Gira lentamente la cabeza hacia la derecha hasta donde sea cómodo, luego regresa al centro y repite hacia la izquierda. Mantén el movimiento controlado, sin forzar el cuello ni encoger los hombros.",
    },
    {
      title: "Flexión y extensión sin dolor (bajar la cabeza y llevarla hacia atrás) ",
      image: "/images/su/3.jpg",
      description:
        "Siéntate o párate con la espalda recta y los hombros relajados. Inclina lentamente la cabeza hacia adelante, llevando el mentón hacia el pecho sin forzar el movimiento. Mantén unos segundos y regresa al centro. Luego, inclina la cabeza suavemente hacia atrás, mirando hacia arriba sin generar molestias.",
    },
    {
      title: "Elevación de hombros con los brazos colgando ",
      image: "/images/su/4.jpg",
      description:
        " De pie o sentado, con la espalda recta y los brazos relajados a los lados del cuerpo, eleva ambos hombros hacia las orejas en un movimiento controlado. Mantén la posición por 2-3 segundos y luego relájalos lentamente.",
    },
    {
      title: "Levantar los brazos estirados hacia adelante",
      image: "/images/su/5.jpg",
      description:
        "De pie o sentado, con la espalda recta y los brazos relajados a los lados, eleva ambos brazos estirados hacia adelante hasta la altura de los hombros, luego bájalos lentamente.",
    },
    {
      title: "Llevar brazos estirados hacia detrás",
      image: "/images/su/6.jpg",
      description:
        "De pie o sentado, con la espalda recta y los brazos relajados a los lados, extiende ambos brazos hacia atrás lo más posible sin doblar los codos, manteniendo el movimiento controlado. Sostén la posición por unos segundos y regresa lentamente a la posición inicial.",
    },
    {
      title: "Brazos colgados, tocar el suelo (o internarlo) por los lados",
      image: "/images/su/7.png",
      description:
        "De pie, con la espalda recta y los brazos relajados a los lados, inclina lentamente el torso hacia un lado, intentando tocar el suelo con la mano sin flexionar las rodillas. Vuelve al centro y repite hacia el otro lado.",
    },
   
    {
      title: "Manos en la nuca, rotaciones de tronco (giros)",
      image: "/images/su/10.jpg",
      description:
        "Coloca las manos en la nuca con los codos abiertos y la espalda recta. Gira el tronco lentamente hacia un lado sin mover la cadera, vuelve al centro y repite hacia el otro lado.",
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
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 py-8 text-white">EJERCICIOS DEL MIEMBRO SUPERIOR </h1>
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

export default Psicologia;
