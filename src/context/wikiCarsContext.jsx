"use client"
import React, { createContext, useEffect, useState } from "react";

export const WikiCars = createContext(null);

export default function WikiCarsProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [carInfo, setCarInfo] = useState({});
  const [visibleMenuCondition,setVisibleMenuCondition]=useState(false)

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await fetch(`https://wiki-cars.vercel.app/api/topCars`);
        const data = await response.json();
        console.log(data);
        
        setCars(data);  // Asegúrate de guardar los datos correctamente
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchCar();
  }, []);

  return (
    <WikiCars.Provider value={{ cars, setCars, carInfo, setCarInfo,visibleMenuCondition,setVisibleMenuCondition }}>
      {children}
    </WikiCars.Provider>
  );
}