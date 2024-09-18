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
      <div className={firstChoice&&secondChoice?"flex  flex-col items-center   ":"flex  flex-col items-center  justify-center mt-16 h-screen"}>
        <div className="flex  ">

          <Card animationComp={true} changeSide={true} car={firstChoice}  />{" "}
          <StatasSection />
          <Card animationComp={true} car={secondChoice} />
        </div>
        <StatasSection mobileVew={true}/>
      </div>
    </>
  );
}

export default AnimateSection;
