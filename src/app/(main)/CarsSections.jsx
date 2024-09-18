"use client";
import Card from "@/components/Card";
import { WikiCars } from "@/context/wikiCarsContext";
import React, { useContext } from "react";
import { Kaushan_Script } from "next/font/google";
const kaushanScript = Kaushan_Script({
  weight: "400", // Puedes especificar el peso si es necesario
  subsets: ["latin"], // Puedes elegir los subsets de la fuente, en este caso 'latin'
  display: "swap", // Mejora la experiencia de carga
});
const CarsSections = ({ acc }) => {
  const { cars } = useContext(WikiCars);



  return (
    <div className="flex flex-col bg-[#32363A] justify-center rounded-2xl mx-5 items-center py-6 gap-6">
      <h2
        className={`${kaushanScript.className} text-[#ef4444]  text-2xl leading-7 font-medium sm:text-3xl  md:text-4xl   lg:text-5xl lg:font-semibold lg:leading-6`}
      >
        Show Cars{" "}
      </h2>
      <div className="flex  flex-wrap justify-center max-w-[1111px] gap-3">
        {cars.slice(0, acc).map((car) => {
          return <Card generic={true} car={car} key={car._id} />;
        })}
      </div>
    </div>
  );
};

export default CarsSections;
