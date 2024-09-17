"use client";
import Card from "@/components/Card";
import Logo from "@/components/Logo";
import { WikiCars } from "@/context/wikiCarsContext";
import React, { useContext } from "react";



function AnimateSection() {
  const { firstChoice, setFirstChoice, secondChoice, setSecondChoice } =
    useContext(WikiCars);
  return (
    <>
      <div className="flex  flex-col items-center   ">
        <div className="flex mt-16 ">

          <Card animationComp={true} changeSide={true} car={firstChoice} />{" "}
          {" "}
          <Card animationComp={true} car={secondChoice} />
        </div>
      
      </div>
    </>
  );
}

export default AnimateSection;
