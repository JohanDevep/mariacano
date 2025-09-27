import React from "react";

const Contacto = () => {
  return (
    <div className="max-w-7xl mx-auto m-10 px-6 py-12 md:py-16 bg-gradient-to-b from-purple-500 via-purple-300 to-white min-h-screen">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
        Contáctanos
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-white">
            En Orientación para madres gestantes y lactantes nos encanta saber
            de ti. Llámanos o llena el formulario y nos pondremos en contacto
            contigo.
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300">
            Horario de apertura:
          </h2>
          <p className="text-white text-lg">
            <strong>Lunes – Viernes:</strong> 8 a.m. - 4 p.m.
          </p>
          <p className="text-white text-lg mb-6">
            <strong>Sábado:</strong> 8 a.m. - 3 p.m.
          </p>

          <div className="bg-yellow-300 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Visítanos:</h3>
            <p className="text-gray-700">Calle 13 #5-98 Centro</p>
            <h3 className="text-xl font-bold text-gray-800 mt-4">
              Llámanos o escríbenos al WhatsApp
            </h3>
            <p className="text-gray-700">
              883 3435 - 312 3336398 - 322 5317530
            </p>
            <h3 className="text-xl font-bold text-gray-800 mt-4">Escríbenos</h3>
            <p className="text-gray-700">madregestanteylactante@gmail.com</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-4 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              className="w-full p-4 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <textarea
              placeholder="Escribe tu mensaje aquí..."
              className="w-full p-4 border border-purple-500 rounded-lg h-36 focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
            <button className="bg-purple-500 text-white text-lg px-8 py-3 rounded-lg w-full hover:bg-purple-600 transition">
              Enviar
            </button>
          </form>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Nuestras Instalaciones
          </h2>
          <iframe
            className="w-full h-56 md:h-72 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/videoid"
            title="Instalaciones"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Ubicación</h2>
          <iframe
            className="w-full h-56 md:h-72 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.8064941649516!2d-75.27811232552902!3d3.902149838306589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3c1a2455aaeb71%3A0x9f49dc6e461b3142!2sNeiva!5e0!3m2!1sen!2sco!4v1614768960462!5m2!1sen!2sco"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
