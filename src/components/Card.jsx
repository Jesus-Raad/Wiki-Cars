"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import ButtonsCar from "./ButtonsCar";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Info, Star } from "lucide-react";
import { WikiCars } from "@/context/wikiCarsContext";
import { useRouter } from "next/navigation";

const Card = ({ animationComp, generic, car, changeSide, cardFav }) => {
  const {
    carInfo,
    setCarInfo,
    firstChoice,
    setFirstChoice,
    secondChoice,
    setSecondChoice,
    changeForS,
    setChangeForS,
  
  } = useContext(WikiCars);

  

  const handleFirstChoice = () => {
    setFirstChoice(car);
    router.push("/carsComparator");
  };
  const handleSecondChoice = () => {
    if (!firstChoice) {
      setFirstChoice(car);
    } else {
      setSecondChoice(car);
    }
    router.push("/carsComparator");
  };

  const [openCard, setOpenCard] = useState(false);

  const router = useRouter();

  const hanldeInfoCar = (event) => {
    event.preventDefault();

    setCarInfo(car);
    router.push("/carInfo");
  };

  const handleCard = () => {
    if (openCard === true) {
      return setOpenCard(false);
    } else {
      return setOpenCard(true);
    }
  };
  /////////////////////////
  const handleChangeBottom = (event) => {
    event.preventDefault();
    if (changeSide) {
      setChangeForS(true);
    } else {
      setChangeForS(false);
    }
    router.push("/allCarsList");
  };

  const { user, getUser } = useKindeBrowserClient();
  const alsoUser = getUser();


  

  const handleFavorite = async (carId) => {
    const userId = user?.id; // Obtén el ID del usuario desde Kinde
  
    if (!userId) return; // Verifica que el usuario esté autenticado
  
    try {
      const response = await fetch('/api/users/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, carId }),
      });
  
      if (!response.ok) {
        console.error('Error al agregar favorito');
      }
  
      // Actualiza el estado para reflejar los cambios en la UI si es necesario.
    } catch (error) {
      console.error('Error al manejar favorito:', error);
    }
  };










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
              onError={(e) => {
                e.target.src = `/img/${car.make_display.toLowerCase()}Logo.svg`; // Cambia a la ruta de tu imagen genérica
              }}
            />

            <div className="pb-2 px-2  flex flex-col justify-start  text-[#32363A]">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{car.model_name}</h3>{" "}
                {user && (
                  <Star
                  className="cursor-pointer"
                    size={17}
                    color={ "#FFFFFF"} 
                    onClick={handleFavorite}
                  />
                )}
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
                  {car.model_seats ? car.model_seats : "N/D"}
                </p>
              </div>
              <div className=" flex justify-between items-center  z-10">
                <div className="w-fit cursor-pointer">
                  <button
                    onClick={hanldeInfoCar}
                    className="flex  text-sm justify-center items-center px-2 py-1 rounded-full bg-[#ef4444]  text-white   hover:bg-[#ff4b4b] hover:scale-105  hover:shadow-lg  transition-all duration-300"
                  >
                    Detalles
                  </button>
                </div>
                <button
                  onClick={changeForS ? handleFirstChoice : handleSecondChoice}
                  className="flex text-white text-sm justify-center items-center px-2 py-1 rounded-full  bg-black    hover:bg-[#32363A] hover:scale-105  hover:shadow-lg  transition-all duration-300"
                >
                  Comparar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {animationComp && (
        <>
          {car === null ? (
            <div className="flex flex-col items-center  justify-center w-[200px] max-h-[500px]  sm:w-[250px] md:max-h-[400px] lg:h-[700px] lg:min-w-[400px] sticky top-16">
              <p className="text-black  h-fit">seleccione un coche</p>
              <ButtonsCar
                style={"gray"}
                action={handleChangeBottom}
                text={"Elegir"}
              />
            </div>
          ) : (
            <div className="flex  flex-col items-center justify-center   h-fit sticky top-[70px] gap-5">
              {" "}
              <article className="relative w-[170px]  max-h-[500px]  rounded-xl sm:w-[250px] md:max-h-[400px] md:pt-0 lg:h-[700px] lg:min-w-[400px]  transition-all duration-[3s] ease-[ease]   ">
                <style jsx>{`
                  article::before {
                    content: "";

                    position: absolute;
                    bottom: 0;
                    height: 70%;
                    width: 100%;
                    background-image: linear-gradient(
                      to bottom,
                      transparent 10%,
                      rgba(0, 0, 0, 0.5) 50%,
                      rgba(0, 0, 0) 95%
                    );
                    opacity: 0;
                    transition: all 0.3s ease;
                    border-radius: 12px; /* Agrega el borde redondeado */
                  }

                  article:hover::before {
                    opacity: 1;
                  }
                `}</style>
                <div className="h-full overflow-hidden min-h-[210px]">
                  <Image
                    className="  rounded-xl object-cover  bottom-0 w-full h-full"
                    width={768}
                    height={768}
                    src={`/img/${car.model_name}${car.model_year}vertical.jpg`}
                    alt={"verticalCar"}
                    onError={(e) => {
                      e.target.src = `/img/${car.make_display.toLowerCase()}Logo.svg`; // Cambia a la ruta de tu imagen genérica
                    }}
                  />
                  <Image
                    className="absolute w-[200px] rounded-xl   md:min-h-[280px] lg:min-w-[280px] bottom-0 left-0 right-0 m-auto translate-y-1/4 transition-[3s] duration-[ease] opacity-0 hover:opacity-100 hover:translate-y-[10%] mb-3"
                    width={740}
                    height={740}
                    src={`/img/${car.model_name}${car.model_year}png.png`}
                    alt={"verticalCar"}
                    onError={(e) => {
                      e.target.src = `/img/CarGenericpng.png`; // Cambia a la ruta de tu imagen genérica
                    }}
                  />
                </div>
              </article>
              <div
                className={changeSide ? "w-full" : " flex w-full justify-end"}
              >
                <div className=" w-fit cursor-pointer">
                  <button
                    onClick={hanldeInfoCar}
                    className="flex  text-sm justify-center items-center px-2 py-1 rounded-full bg-[#ef4444]  text-white   hover:bg-[#ff4b4b] hover:scale-105  hover:shadow-lg  transition-all duration-300"
                  >
                    Detalles
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2  w-[70px] md:w-28  bg-white rounded-full px-2 absolute bottom-0 mb-32 ">
                <Image
                  width={80}
                  height={50}
                  src={`/img/${car.make_display.toLowerCase()}Logo.svg`}
                  alt={"logo"}
                  objectFit="cover"
                />
              </div>
              <div className="mt-10">
                <ButtonsCar
                  style={"black"}
                  action={handleChangeBottom}
                  text={"Cambiar coche"}
                />
              </div>
            </div>
          )}
         {cardFav && (
  <div className="flex text-black">
    <Image
      width={40}
      height={40}
      src={`/img/${car.model_name}${car.model_year}png.png`}
      alt={"miniIcon"}
      onError={(e) => {
        e.target.src = `/img/CarGenericpng.png`; // Imagen genérica si no encuentra la específica
      }}
    />
    <p>
      {car.model_name} ({car.model_year})
    </p>
  </div>
)}
        </>
      )}
    </>
  );
};

export default Card;
