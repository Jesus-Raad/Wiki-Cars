"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import ButtonsCar from "./ButtonsCar";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Info, Star } from "lucide-react";
import { WikiCars } from "@/context/wikiCarsContext";
import { useRouter } from "next/navigation";
import { disconnect } from "mongoose";

const Card = ({ animationComp, generic, car, changeSide }) => {
  const { carInfo, setCarInfo, firstChoice,
    setFirstChoice,
    secondChoice,
    setSecondChoice, } = useContext(WikiCars);

    const handleFirstChoice=()=>{
      setFirstChoice(car)
    }
    const handleSecondChoice=()=>{
      setSecondChoice(car)
    }

  const [openCard, setOpenCard] = useState(false);

  const router = useRouter();

  const hanldeInfoCar = (event) => {
    event.preventDefault();

    setCarInfo(car);
    // router.push('/carInfo')
  };

  const handleCard = () => {
    if (openCard === true) {
      return setOpenCard(false);
    } else {
      return setOpenCard(true);
    }
  };

  const { user, getUser } = useKindeBrowserClient();
  const alsoUser = getUser();

  const peso = parseInt(car.model_weight_kg);
  const potencia = parseInt(car.model_engine_power_ps);

  const calcularAceleracion = (peso, potencia) => {
    if (!peso || !potencia) return "N/D";
    const aceleracion = peso / potencia;
    return aceleracion.toFixed(2);
  };
  const aceleracion = calcularAceleracion(peso, potencia) + " Kph";


  return (
    <>
      {generic && (
        <div className=" flex  items-center h-[320px]  ">
          <div
            onClick={handleCard}
            className={
              openCard
                ? " flex flex-col justify-start  w-[209px] h-[320px] border bg-[#b0b5bf] border-gray-300 rounded-lg  overflow-hidden shadow-md transition-all duration-500 hover:h-[320px]"
                : " flex flex-col justify-start  w-[209px] h-[181.6px] border bg-[#b0b5bf] border-gray-300 rounded-lg  overflow-hidden shadow-md transition-all duration-500 hover:h-[320px]"
            }
          >
            <Image
              className=" rounded-lg h-[120px]"
              src={`/img/${car.model_name}${car.model_year}.jpg`}
              alt={`${car.model_make_id} ${car.model_name}`}
              height={120}
              width={206}
              objectFit="cover"
            />

            <div className="pb-2 px-2  flex flex-col justify-start  text-[#32363A]">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{car.model_name}</h3>{" "}
                {user && <Star size={17} color="#ffffff" />}
              </div>
              <p className="text-sm text-white">{car.model_make_display}</p>
              <div className="mt-4 text-white">
                <p className="text-sm">
                  <strong className="text-[#32363A]">Year:</strong>{" "}
                  {car.model_year}
                </p>
                <p className="text-sm">
                  <strong className="text-[#32363A]">Engine:</strong>{" "}
                  {car.model_engine_cc}cc {car.model_engine_cyl}-cyl{" "}
                  {car.model_engine_type}
                </p>
                <p className="text-sm">
                  <strong className="text-[#32363A]">Power:</strong>{" "}
                  {car.model_engine_power_ps} PS
                </p>
                <p className="text-sm">
                  <strong className="text-[#32363A]">Seats:</strong>{" "}
                  {car.model_seats?car.model_seats:"N/D"}
                </p>
              </div>
              <div className=" flex justify-between items-center  z-10">
                <button onClick={handleFirstChoice} className="flex text-white text-sm justify-center items-center p-2 w-6 h-6 rounded-full  bg-[#32363A]">1</button>
                <ButtonsCar
                  style={"miniBlack"}
                  text={"Info"}
                  action={hanldeInfoCar}
                />
                <button onClick={handleSecondChoice} className="flex text-white text-sm justify-center items-center p-2 w-6 h-6 rounded-full  bg-[#32363A]">2</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {animationComp && (
        <div
          className={
            changeSide
              ? " flex flex-col items-center  pb-8  "
              : "flex  flex-col items-center pb-8"
          }
        >
          
            <article className="relative w-[200px] max-h-[500px] m-0 sm:w-[250px] md:max-h-[400px] lg:h-screen lg:min-w-[400px] overflow-hidden transition-all duration-[3s] ease-[ease]   ">
              <style jsx>{`
                article::before {
                  content: "";
                  position: absolute;
                  bottom: 0;
                  height: 100%;
                  width: 100%;
                  background-image: linear-gradient(
                    to bottom,
                    transparent 10%,
                    rgba(0, 0, 0, 0.5) 50%,
                    rgba(0, 0, 0) 95%
                  );
                  opacity: 0;
                  transition: all 0.3s ease;
                }

                article:hover::before {
                  opacity: 1;
                }
              `}</style>
              <div className="h-full ">
                <Image
                  className=" shadow-[0_60px_60px_-60px_rgba(0,30,255,0.5)]  object-cover  w-full h-full"
                  width={768}
                  height={768}
                  src={`/img/${car.model_name}${car.model_year}vertical.jpg`}
                  alt={"verticalCar"}
                />
                <Image
                  className="absolute w-[200px] md:min-h-[280px] lg:min-w-[280px] bottom-0 left-0 right-0 m-auto translate-y-1/4 transition-[3s] duration-[ease] opacity-0 hover:opacity-100 hover:translate-y-[10%] mb-3"
                  width={768}
                  height={768}
                  src={`/img/${car.model_name}${car.model_year}png.png`}
                  alt={"verticalCar"}
                />
              </div>
            </article>
            <div className={changeSide?"w-full":" flex w-full justify-end"}>

            <div className=" w-fit cursor-pointer" >

            <Info poin onClick={hanldeInfoCar}  color="#6b7280"/>
            </div>
            </div>
           
          <div className={changeSide?"flex flex-col items-center gap-2  w-fit    ":"flex flex-col items-center gap-2  w-fit   "}>
            <Image
              width={100}
              height={50}
              src={`/img/${car.make_display.toLowerCase()}Logo.svg`}
              alt={"logo"}
              sizes=" (max-width: 100px) 50vw, 25vw"
              objectFit="cover"
            />
            <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4 lg:text-3xl lg:font-bold lg:leading-5">
              Año
            </h1>
            
              <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {car.model_year ? car.model_year : "N/D"}
              </p>
          
            <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4 lg:text-3xl lg:font-bold lg:leading-5">
              Tipo de combustible
            </h1>
            
              <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {car.model_engine_fuel ? car.model_engine_fuel : "N/D"}
              </p>
            
              <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4 lg:text-3xl lg:font-bold lg:leading-5">
              Transmisión
            </h1>
            
              <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {car.model_transmission_type
                  ? car.model_transmission_type
                  : "N/D"}
              </p>
           

            <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4 lg:text-3xl lg:font-bold lg:leading-5">
              Ancho{" "}
            </h1>

            
              <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {car.model_width_mm ? `${car.model_width_mm} mm` : "N/D"}
              </p>
           
            <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4 lg:text-3xl lg:font-bold lg:leading-5">
              Longitud{" "}
            </h1>

            
              <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {car.model_length_mm ? `${car.model_length_mm} mm` : "N/D"}
              </p>
           
              <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4 lg:text-3xl lg:font-bold lg:leading-5">
              Peso{" "}
            </h1>

            
              <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {car.model_weight_kg ? `${car.model_weight_kg} Kg` : "N/D"}
              </p>
           
            <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4 lg:text-3xl lg:font-bold lg:leading-5">
              Potencia
            </h1>
            
              <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {car.model_engine_power_ps
                  ? `${car.model_engine_power_ps} PS`
                  : "N/D"}
              </p>
            
            <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4 lg:text-3xl lg:font-bold lg:leading-5">
              Aceleracion
            </h1>
            
              <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {car.model_weight_kg &&
                  car.model_engine_power_ps &&
                  aceleracion}
              </p>
           

            <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4 lg:text-3xl lg:font-bold lg:leading-5">
              Velocidad Maxima
            </h1>
            
              <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {car.model_top_speed_kph
                  ? `${car.model_top_speed_kph} KPH`
                  : "N/D"}
              </p>
            

            <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4 lg:text-3xl lg:font-bold lg:leading-5">
              Tiempo de 0 a 100 kph (s)
            </h1>
            
              <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {car.model_0_to_100_kph ? `${car.model_0_to_100_kph} s` : "N/D"}
              </p>
           

            <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4 lg:text-3xl lg:font-bold lg:leading-5">
              Capacidad del tanque (L)
            </h1>
            
              <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {car.model_fuel_cap_l ? `${car.model_fuel_cap_l} L` : "N/D"}
              </p>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
