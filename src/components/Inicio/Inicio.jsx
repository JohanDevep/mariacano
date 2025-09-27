import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";

const images = ["/images/ini.jpg", "/images/ini1.jpg", "/images/ini2.jpg"];

const Inicio = () => {
  return (
    <div className="flex flex-col items-center mt-12 p-12 md:p-12 space-y-12 bg-gradient-to-b from-blue-200 via-blue-50 to-white min-h-screen">
      <div className="flex flex-col md:flex-row items-center w-full max-w-7xl p-6 md:p-12 rounded-lg shadow-md">
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="w-72 md:w-10/12 h-60 md:h-80 rounded-lg shadow-xl"
          />
        </div>
        <div className="md:w-1/2 text-left pl-4 md:pl-8">
          <h1 className="text-2xl md:text-5xl font-serif text-gray-800 leading-tight">
            <span className="text-black-500">PROGRAMA</span> DE <br />
            ACONDICIONAMIENTO FISICO{" "}
            <span className="text-black-500">PARA PACIENTES HOSPITALARIOS</span>
            .
          </h1>

          <div className="flex items-center gap-4">
            <img
              src="/images/camen.jpg"
              alt="Logo"
              className="w-32 md:w-40 h-24 md:h-40 rounded-lg shadow-xl"
            />
            <img
              src="/images/maria.png"
              alt="Logo"
              className="w-32 md:w-40 h-24 md:h-40 rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center p-6 md:p-10 w-full max-w-7xl">
        <div className="w-full md:w-2/3 rounded-lg shadow-lg overflow-hidden">
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            showStatus={false}
            showArrows={true}
          >
            {images.map((src, index) => (
              <div key={index}>
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="w-full h-64 md:h-[450px] object-cover rounded-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <p className="text-2xl md:text-4xl font-semibold text-gray-700 text-center md:text-left pl-4 md:pl-8 leading-tight">
          Cuidamos tu salud, física y mental,{" "}
          <span className="text-pink-600">siempre contigo.</span>
        </p>
      </div>
      <div className="w-full max-w-7xl text-left px-4 md:px-0">
        <h2 className="text-3xl md:text-5xl font-bold text-purple-700 mb-6 md:mb-8">
          Video
        </h2>
        <div className="flex justify-center">
  <video
    className="rounded-lg shadow-lg w-[500px]" 
    controls
    autoPlay
    muted
    loop
  >
    <source src="/images/video/video.mp4" type="video/mp4" />
    Tu navegador no soporta la reproducción de video.
  </video>
</div>

      </div>
    </div>
  );
};

export default Inicio;
