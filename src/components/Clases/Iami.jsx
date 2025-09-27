import React from "react";

const IAMI = () => {
  const cards = [
    {
      title: "Dirija el aire hacia el pecho",
      image: "/images/respi/1.png",
      description:
        "Siéntate con el cuerpo ligeramente adelantado, los brazos cruzados como si te abrazases. Inspira por la nariz, abre la boca, espira con la boca abierta y empaña un espejo.",
    },
    {
      title: "Respiración Diafragmática (Abdominal)",
      image: "/images/respi/2.png",
      description:
        "El paciente debe estar acostado o sentado en una posición cómoda. Colocar una mano sobre el abdomen y la otra sobre el pecho. Inhalar profundamente por la nariz, asegurándose de que el abdomen se eleve mientras el pecho permanece quieto. Exhalar lentamente por la boca con los labios fruncidos.",
    },
    {
      title: "Respiración Diafragmática con Elevación de Piernas",
      image: "/images/respi/3.png",
      description:
        "Acostado, inhalar profundamente mientras eleva una pierna estirada. Mantener la respiración por 2-3 segundos. Exhalar lentamente mientras baja la pierna. Alternar con la otra pierna.",
    },
    {
      title: "Respiración Diafragmática con Canto o Sonidos Vocales",
      image: "/images/respi/4.png",
      description:
        "Inhalar profundamente por la nariz. Exhalar lentamente pronunciando una vocal o cantando suavemente. Intentar prolongar la exhalación lo máximo posible.",
    },
    {
      title: "Respiración Diafragmática con Aplausoterapia",
      image: "/images/respi/5.png",
      description:
        "Acostado o sentado, inhalar profundamente por la nariz. Mientras exhala, recibir suaves palmadas en la espalda o el tórax (realizadas por un terapeuta o cuidador).",
    },
 
    {
      title: "Respiración Diafragmática con Visualización",
      image: "/images/respi/7.png",
      description:
        "Cerrar los ojos y visualizar cómo el aire entra y llena los pulmones. Inhalar por la nariz en 4 segundos. Mantener la respiración 2 segundos. Exhalar lentamente en 6-8 segundos.",
    },
    {
      title: "Respiración Diafragmática con Globos",
      image: "/images/respi/8.png",
      description:
        "Tomar aire profundamente por la nariz. Exhalar lentamente dentro de un globo. Repetir hasta inflar el globo varias veces.",
    },
    {
      title: "Respiración en Decúbito Prono (Boca Abajo)",
      image: "/images/respi/9.png",
      description:
        "Acostarse boca abajo con una almohada en el pecho. Inhalar profundamente y exhalar lentamente. Mantener la posición por 5-10 minutos.",
    },
    {
      title: "Respiración Costodiafragmática",
      image: "/images/respi/10.png",
      description:
        "Colocar las manos a los lados del tórax, justo debajo de las costillas. Inhalar profundamente tratando de expandir las costillas hacia los lados. Exhalar lentamente por la boca con los labios fruncidos.",
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
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 py-8 text-white">Ejercicio Respiratorio</h1>
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

export default IAMI;
