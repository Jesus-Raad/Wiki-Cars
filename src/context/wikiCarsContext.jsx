"use client"
import React, { createContext, useEffect, useState } from "react";

export const WikiCars = createContext(null);

export default function WikiCarsProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [make, setMake] = useState("ford");
  const [model, setModel] = useState("mustang");
  const [year, setYear] = useState("1965");

  // useEffect(() => {
  //   const fetchCar = async () => {
  //     try {
  //       const response = await fetch(`/api/products/getCarData?make=${make}&model=${model}&year=${year}`);
  //       const data = await response.json();
  //       setCars(data);  // Asegúrate de guardar los datos correctamente
  //     } catch (error) {
  //       console.error('Error fetching car data:', error);
  //     }
  //   };

  //   fetchCar();
  // }, [make, model, year]);

  return (
    <WikiCars.Provider value={{ cars, setCars, make, setMake, model, setModel, year, setYear }}>
      {children}
    </WikiCars.Provider>
  );
}