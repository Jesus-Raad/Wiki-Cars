"use client";
import ButtonsCar from "@/components/ButtonsCar";
import { WikiCars } from "@/context/wikiCarsContext";
import { Info, Star } from "lucide-react";
import { Kaushan_Script } from "next/font/google";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const kaushanScript = Kaushan_Script({
  weight: "400", // Puedes especificar el peso si es necesario
  subsets: ["latin"], // Puedes elegir los subsets de la fuente, en este caso 'latin'
  display: "swap", // Mejora la experiencia de carga
});

const CarDetail = () => {
  const { carInfo,favorite } = useContext(WikiCars);

  const [comments, setComments] = useState(carInfo?.commit || []);

;


  const { register, handleSubmit, reset } = useForm();
  const { user, getUser } = useKindeBrowserClient();
  console.log(user);
  

  const onSubmit = async (data) => {
    if (!carInfo) return;
  
    const commentData = {
      carId: carInfo.carId,
      comment: data.comment,
      username: user?.given_name || "Anónimo",
    };
  
    try {
      const response = await fetch("/api/topCars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commentData),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        console.error(result.error);
        return;
      }
  
      // Agregar el nuevo comentario al estado
      setComments((prevComments) => [...prevComments, result.comment]);
  
      reset(); // Limpiar el formulario
    } catch (error) {
      console.error("Error al enviar el comentario:", error);
    }
  };
 
//////////////////////fav

const handleFavorite = async () => {
  try {
    // Asegúrate de que el ID de usuario esté disponible.
    const userId = user || alsoUser;

    if (!userId) {
      console.error("User ID no disponible");
      return;
    }

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, carId: car }),
    });


    
    if (res.ok) {
      
      setIsFavorite(!isFavorite);
    } else {
      console.error('Error al manejar favorito');
    }
  } catch (error) {
    console.error('Error al manejar favorito:', error);
  }
};

  const favoriteCarIds = favorite.map(car => car.carId);


  const carFavorite=() =>{ return favoriteCarIds.includes(carInfo?.carId)}

  const isCarFavorite=carFavorite()


  return (
    <>
      {carInfo ? (
        <div>
 <h2
                className={`${kaushanScript.className} flex justify-center gap-24 items-center text-black  text-2xl leading-7 font-medium mt-[90px] pb-3 sm:text-3xl  md:text-4xl   lg:text-5xl lg:font-semibold lg:leading-6`}
              >
               {carInfo.model_name}   {carInfo.model_year}
                
              </h2>
        <div className=" flex flex-col gap-6 md:flex-row items-center justify-center h-fit max-w-7xl mx-auto px-4 pb-8 ">
          {/* Imagen del vehículo */}
          <div className=" flex flex-col justify-center items-center w-fit min-h-64  gap-3 md:h-94  ">
            <Image
              src={`/img/${carInfo.model_name}${carInfo.model_year}.jpg`}
              alt={`${carInfo.model_make_display} ${carInfo.model_name}`}
              objectFit="cover"
              className="rounded-lg shadow-lg"
              height={120}
              width={450}
            />
            <div className="flex flex-col bg-black justify-center h-full w-full rounded-lg mx-5 items-center py-6 gap-6">
              <h2
                className={`${kaushanScript.className} flex gap-24 items-center text-[#ef4444]  text-2xl leading-7 font-medium sm:text-3xl  md:text-4xl   lg:text-5xl lg:font-semibold lg:leading-6`}
              >
                Comentarios
                {user &&    <Star
          className="cursor-pointer"
          size={22}
          color={isCarFavorite===false? "#FFFFFF" :"#FF0000"  }
           // Rojo si es favorito, blanco si no
          onClick={handleFavorite}
        />}
              </h2>
              {comments.length > 0 ? (
                <div className="flex flex-col w-full items-start ">
                  {comments.map((c, index) => (
                    <p className="flex pl-3 justify-center gap-4" key={index}>
                         <Image
                    className="rounded-full"
                    width={28}
                    height={28}
                    src={user?.picture}
                    alt={"userPicture"}
                  />
                      <strong>{c.username}: </strong>
                      {c.comment}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-[#ef4444]">No hay comentarios aún.</p>
              )}
              <form onSubmit={handleSubmit(onSubmit)} className="flex  justify-center items-center ">
                <input
                  type="text"
                  {...register("comment", { required: true })}
                  placeholder="Deja tu comentario"
                  className="border p-2 text-black rounded"
                />
                <button
                  type="submit"
                  className="bg-[#ef4444] rounded text-white px-4 py-2  hover:bg-[#ff4b4b]  hover:scale-105  hover:shadow-lg  transition-all duration-300"
                >
                  Enviar 
                </button>
              </form>
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
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-black h-screen gap-3 mt-16 px-3 ">
          {" "}
          <p className=" flex flex-col items-center text-center pointer-events-none gap-2 text-xl text-gray-500 md:flex-row ">
            Por favor, selecciona un coche para ver los detalles. Haciendo click
            en  <button
                  
                  className="flex  text-sm justify-center cursor-none items-center px-2 py-1 rounded-full bg-[#ef4444]  text-white   hover:bg-[#ff4b4b] hover:scale-105  hover:shadow-lg  transition-all duration-300"
                >
                  Detalles
                </button>
          </p>
          <ButtonsCar link={"/allCarsList"} style={"gray"} text={"Buscar"} />
        </div>
      )}
    </>
  );
};

export default CarDetail;
