"use client";
import ButtonsCar from "@/components/ButtonsCar";
import { WikiCars } from "@/context/wikiCarsContext";
import { Info } from "lucide-react";
import { Kaushan_Script } from "next/font/google";
import Image from "next/image";
import React, { useContext } from "react";

const kaushanScript = Kaushan_Script({
  weight: "400", // Puedes especificar el peso si es necesario
  subsets: ["latin"], // Puedes elegir los subsets de la fuente, en este caso 'latin'
  display: "swap", // Mejora la experiencia de carga
});

const CarDetail = () => {
  const { carInfo } = useContext(WikiCars);

  return (
    <>
      {carInfo ? (
        <div className=" flex flex-col gap-6 md:flex-row  justify-center max-w-7xl mx-auto px-4 py-8 mt-16">
          {/* Imagen del vehículo */}
          <div className=" flex flex-col justify-center items-center w-fit h-64 mt-16 md:h-94 relative">
            <Image
              src={`/img/${carInfo.model_name}${carInfo.model_year}.jpg`}
              alt={`${carInfo.model_make_display} ${carInfo.model_name}`}
              objectFit="cover"
              className="rounded-lg shadow-lg"
              height={120}
              width={450}
            />
             <div className="flex flex-col bg-[#32363A] justify-center h-full w-full rounded-2xl mx-5 items-center py-6 gap-6">
             <h2
        className={`${kaushanScript.className} text-[#ef4444]  text-2xl leading-7 font-medium sm:text-3xl  md:text-4xl   lg:text-5xl lg:font-semibold lg:leading-6`}
      >
      Comentarios
      </h2>
            </div>
          </div>
<div>
          {/* Información básica */}
          <div className="mt-6">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Información básica
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold">Marca:</span>{" "}
                  {carInfo.model_make_display}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Modelo:</span>{" "}
                  {carInfo.model_name}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Versión:</span>{" "}
                  {carInfo.model_trim}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Año:</span>{" "}
                  {carInfo.model_year}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Carrocería:</span>{" "}
                  {carInfo.model_body || "No disponible"}
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold">Posición del motor:</span>{" "}
                  {carInfo.model_engine_position}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Número de puertas:</span>{" "}
                  {carInfo.model_doors}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Número de asientos:</span>{" "}
                  {carInfo.model_seats}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">País de fabricación:</span>{" "}
                  {carInfo.make_country}
                </p>
              </div>
            </div>
          </div>

          {/* Detalles del motor */}
          <div className="mt-6">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Detalles del motor
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold">Cilindrada:</span>{" "}
                  {carInfo.model_engine_cc} cc
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Cilindros:</span>{" "}
                  {carInfo.model_engine_cyl}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Tipo de motor:</span>{" "}
                  {carInfo.model_engine_type}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Combustible:</span>{" "}
                  {carInfo.model_engine_fuel}
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold">Potencia:</span>{" "}
                  {carInfo.model_engine_power_ps} PS a{" "}
                  {carInfo.model_engine_power_rpm} rpm
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Tracción:</span>{" "}
                  {carInfo.model_drive}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Transmisión:</span>{" "}
                  {carInfo.model_transmission_type || "No disponible"}
                </p>
              </div>
            </div>
          </div>

          {/* Dimensiones y peso */}
          <div className="mt-6">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Dimensiones y peso
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold">Peso:</span>{" "}
                  {carInfo.model_weight_kg} kg
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Longitud:</span>{" "}
                  {carInfo.model_length_mm} mm
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Anchura:</span>{" "}
                  {carInfo.model_width_mm} mm
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold">Altura:</span>{" "}
                  {carInfo.model_height_mm} mm
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Distancia entre ejes:</span>{" "}
                  {carInfo.model_wheelbase_mm} mm
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Capacidad del tanque:</span>{" "}
                  {carInfo.model_fuel_cap_l} litros
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-black h-screen gap-3 mt-16 px-3 ">
          {" "}
          <p className=" flex flex-col items-center text-center pointer-events-none gap-2 text-xl text-gray-500 md:flex-row ">
            Por favor, selecciona un coche para ver los detalles. Haciendo click
            en <Info color="#ef4444" />
          </p>
          <ButtonsCar link={"/allCarsList"} style={"gray"} text={"Buscar"} />
        </div>
      )}
    </>
  );
};

export default CarDetail;
