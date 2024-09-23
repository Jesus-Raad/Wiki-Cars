"use client";
import Card from "@/components/Card";
import Logo from "@/components/Logo";
import { WikiCars } from "@/context/wikiCarsContext";
import React, { useContext } from "react";
import StatasSection from "./StatasSection";



function AnimateSection() {
  const { firstChoice, setFirstChoice, secondChoice, setSecondChoice } =
    useContext(WikiCars);
  return (
    <>
      <div className={firstChoice&&secondChoice?"flex  flex-col items-center mt-[90px]  ":"flex  flex-col items-center  justify-center mt-16 h-screen"}>
        <div className="flex gap-4 ">

          <Card animationComp={true} changeSide={true} car={firstChoice}  />{" "}
          
          <Card animationComp={true} car={secondChoice} />
        </div>
        <StatasSection />
      </div>
    </>
  );
}

export default AnimateSection;
