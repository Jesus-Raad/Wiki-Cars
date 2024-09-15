"use client";
import Card from "@/components/Card";
import { WikiCars } from "@/context/wikiCarsContext";
import React, { useContext } from "react";

function AnimateSection() {
  const { firstChoice, setFirstChoice, secondChoice, setSecondChoice } =
    useContext(WikiCars);
  return (
    <>
      <div className="flex mt-16 justify-center">
          <Card animationComp={true} car={firstChoice} />{" "}
          {" "}
          <Card animationComp={true} car={secondChoice} />
        
      </div>
    </>
  );
}

export default AnimateSection;
