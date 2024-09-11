import React from "react";
import Image from "next/image";
import ButtonsCar from "./buttonsCar";
const Card = ({ car }) => {
  return (
    <div className=" flex flex-col justify-between  w-[209px] h-[181.6px] border bg-[#b0b5bf] border-gray-300 rounded-lg  overflow-hidden shadow-md transition-all duration-500 hover:h-[320px]">
      <div className=" flex  justify-center h-[120px]">
        <Image
          className=" rounded-lg"
          src={`/img/${car.model_name}${car.model_year}.jpg`} // Cambia la ruta por la imagen del coche
          alt={`${car.model_make_id} ${car.model_name}`}
          height={97.7}
          width={206}
          objectFit="cover"
        />
      </div>
      <div className="pb-2 px-2   flex flex-col justify-between  text-[#32363A]">
        <h3 className="text-lg font-bold">{car.model_name}</h3>
        <p className="text-sm text-white">{car.model_make_display}</p>
        <div className="mt-4 text-white">
          <p className="text-sm">
            <strong className="text-[#32363A]">Year:</strong> {car.model_year}
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
            <strong className="text-[#32363A]">Seats:</strong> {car.model_seats}
          </p>
        </div>
        <div className=" flex justify-center items-center z-10">
          <ButtonsCar style={"miniBlack"} text={"Info"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
