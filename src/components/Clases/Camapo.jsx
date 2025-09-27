import React from "react";

const Camapo = () => {
  const cards = [
    {
      title: "Ejercicios de pelvis",
      image: "/images/cama/1.png",
      description:
        "Colocar las piernas en flexión e indicarle que eleve la pelvis.",
    },
    {
      title: "estiramiento de cuello",
      image: "/images/cama/2.png",
      description:
        "Girar la cabeza lentamente hacia la derecha hasta que sienta leve estiramiento y mantener y continuación misma maniobra hacia la izquierda",
    },
    {
      title: "Extensión de tronco en prono, manos a los lados",
      image: "/images/cama/3.png",
      description:
        "Tumbado boca abajo con cojín en abdomen y brazos estirados a los lados. Elevar los hombros intentando juntar las escápulas sin arquearse demasiado.",
    },
    {
      title: "Puente con elevación de la pierna.",
      image: "/images/cama/4.png",
      description:
        "Tumbado boca arriba, levante la pelvis del suelo echando aire, hasta que los muslos queden en línea con el tronco. Levante el pie del suelo hasta que la rodilla quede estirada.",
    },
    {
      title: "Abducción de cadera",
      image: "/images/cama/5.png",
      description:
        "Con la pierna extendida, elevarla ligeramente y separarla en el plano lateral hasta unos 40º y regresar a la posición inicia.",
    },
    {
      title: "Paso de sedestación a bipedestación sin apoyo",
      image: "/images/cama/6.png",
      description:
        "Desde la posición de sentado, con ambos brazos cruzados sobre el pecho, levántese sin ayuda de las manos. Mantener la posición erguida y volver a sentarse suavemente sin ayuda de las manos.",
    },
    {
      title: "Estiramiento unilateral pectoral mayor",
      image: "/images/cama/7.png",
      description:
        " Apoyando una mano en la pared, con los dedos hacia atrás y el codo doblado a 90º o extendido (si tolera la posición), girar el tronco hacia el lado contrario.",
    },
    {
      title: "Giro de piernas tumbado",
      image: "/images/cama/8.png",
      description:
        "Boca arriba, con los brazos en cruz y con las piernas estiradas, elevamos una pierna con flexión de rodilla a continuación cruzamos esa pierna sobre la otra dejándola caer hacia el lado, de manera que gire nuestra zona lumbar, pero el tronco y permanezcan en la posición de partida.",
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
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 py-8 text-white">
        POSICIONAMIENTO EN LA CAMA
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
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

export default Camapo;
