"use client";
import Card from "@/components/Card";
import { WikiCars } from "@/context/wikiCarsContext";
import React, { useContext } from "react";

const CarsSections = ({ acc }) => {
  const { cars } = useContext(WikiCars);

  

  return (
    <div className="flex flex-col  justify-center items-center py-4 gap-6">
      <h2 className="text-[#b0b5bf] text-2xl leading-7 font-medium sm:text-3xl  md:text-4xl   lg:text-5xl lg:font-semibold lg:leading-6">Coches </h2>
      <div className="flex  flex-wrap justify-center max-w-[1111px] gap-3">
        {cars.slice(0, acc).map((car) => {
          return <Card car={car} key={car._id} />;
        })}
      </div>
    </div>
  );
};

export default CarsSections;
