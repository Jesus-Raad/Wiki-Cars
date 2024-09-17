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
      <div className="flex  flex-col items-center mt-16  ">
        <div className="flex  ">

          <Card animationComp={true} changeSide={true} car={firstChoice} changeFirstChoice={true} />{" "}
          <StatasSection />
          <Card animationComp={true} car={secondChoice} />
        </div>
        <StatasSection mobileVew={true}/>
      </div>
    </>
  );
}

export default AnimateSection;
