"use client";
import React, { createContext, useEffect, useState } from "react";

export const WikiCars = createContext(null);

export default function WikiCarsProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [carInfo, setCarInfo] = useState(null);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [visibleMenuCondition, setVisibleMenuCondition] = useState(false);
  const [IsSearchSection, setIsSearchSection] = useState(false);
  const [yearCar, setYearCar] = useState("");
  const [makerCar, setMakerCar] = useState("");
  const [modelCar, setModelCar] = useState("");
  const [finishFilter, setFinishFilter] = useState([]);
  const [changeForS, setChangeForS] = useState(false);
  const [visibleFavSectionCondition, setVisibleFavSectionCondition]=useState(false)

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await fetch(
          `https://wiki-cars.vercel.app/api/topCars`
        );
        const data = await response.json();
        console.log(data);

        setCars(data); // Asegúrate de guardar los datos correctamente
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCar();
  }, []);

  return (
    <WikiCars.Provider
      value={{
        cars,
        setCars,
        carInfo,
        setCarInfo,
        visibleMenuCondition,
        setVisibleMenuCondition,
        modelCar,
        setModelCar,
        makerCar,
        setMakerCar,
        yearCar,
        setYearCar,
        IsSearchSection,
        setIsSearchSection,
        firstChoice,
        setFirstChoice,
        secondChoice,
        setSecondChoice,
        finishFilter,
        setFinishFilter,
        changeForS,
        setChangeForS,visibleFavSectionCondition, setVisibleFavSectionCondition
      }}
    >
      {children}
    </WikiCars.Provider>
  );
}
