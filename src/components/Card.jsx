"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import ButtonsCar from "./ButtonsCar";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Info, Star } from "lucide-react";
import { WikiCars } from "@/context/wikiCarsContext";
import { useRouter } from "next/navigation";


const Card = ({ animationComp, generic, car, changeSide, }) => {
  const { carInfo, setCarInfo, firstChoice,
    setFirstChoice,
    secondChoice,
    setSecondChoice, changeForS, setChangeForS} = useContext(WikiCars);

    const handleFirstChoice=()=>{
      setFirstChoice(car)
      router.push('/carsComparator')
    }
    const handleSecondChoice=()=>{
      setSecondChoice(car)
      router.push('/carsComparator')

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
  /////////////////////////
  const handleChangeBottom = (event) => {
    event.preventDefault();
if (changeSide) {
  setChangeForS(true)
  
}else{
  setChangeForS(false)
}
   router.push('/allCarsList')
  };

  
  const { user, getUser } = useKindeBrowserClient();
  const alsoUser = getUser();

  


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
                <div className="w-fit cursor-pointer">

                <Info  onClick={hanldeInfoCar}  color="#6b7280"/>
                </div>
                <button onClick={changeForS?handleFirstChoice:handleSecondChoice} className="flex text-white text-sm justify-center items-center px-2 rounded-full  bg-[#32363A]">Comparate</button>
              
              </div>
            </div>
          </div>
        </div>
      )}
      {animationComp && (
        <div
          className="flex  flex-col items-center justify-center  h-fit sticky top-16 "
          
        >
          
            <article className="relative w-[200px] max-h-[500px]  sm:w-[250px] md:max-h-[400px] lg:h-[700px] lg:min-w-[400px] overflow-hidden transition-all duration-[3s] ease-[ease]   ">
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
                  className=" shadow-[0_60px_60px_-60px_rgba(0,30,255,0.5)]  object-cover bottom-0 w-full h-full"
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
           
          <div className={"flex flex-col items-center gap-2  w-fit   "}>
            <Image
              width={100}
              height={50}
              src={`/img/${car.make_display.toLowerCase()}Logo.svg`}
              alt={"logo"}
              
              objectFit="cover"
            />
            
          </div>
<ButtonsCar style={"gray"} action={handleChangeBottom} text={"Cambiar"}/>
        </div>
      )}
    </>
  );
};

export default Card;
