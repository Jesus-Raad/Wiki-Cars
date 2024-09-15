"use client";
import React, { createContext, useEffect, useState } from "react";

export const WikiCars = createContext(null);

export default function WikiCarsProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [carInfo, setCarInfo] = useState({});
  const [firstChoice, setFirstChoice] = useState(
    {
      _id: "14777",
      model_make_id: "ford",
      model_name: "Mustang",
      model_trim: "4.7",
      model_year: "1969",
      model_body: "Coupe",
      model_engine_position: "Front",
      model_engine_cc: "4731",
      model_engine_cyl: "8",
      model_engine_type: "V",
      model_engine_valves_per_cyl: null,
      model_engine_power_ps: "220",
      model_engine_power_rpm: "4800",
      model_engine_torque_nm: null,
      model_engine_torque_rpm: null,
      model_engine_bore_mm: null,
      model_engine_stroke_mm: null,
      model_engine_compression: null,
      model_engine_fuel: "Gasoline",
      model_top_speed_kph: null,
      model_0_to_100_kph: null,
      model_drive: "Rear",
      model_transmission_type: null,
      model_seats: "4",
      model_doors: "2",
      model_weight_kg: "1165",
      model_length_mm: "4620",
      model_width_mm: "1740",
      model_height_mm: "1310",
      model_wheelbase_mm: "2750",
      model_lkm_hwy: null,
      model_lkm_mixed: null,
      model_lkm_city: null,
      model_fuel_cap_l: "41",
      model_sold_in_us: "1",
      model_co2: null,
      model_make_display: "Ford",
      make_display: "Ford",
      make_country: "USA",
    },
  );
  const [secondChoice, setSecondChoice] = useState(
    {
      _id: "39276",
      model_make_id: "toyota",
      model_name: "Supra",
      model_trim: "",
      model_year: "1998",
      model_body: "Coupe",
      model_engine_position: "Front",
      model_engine_cc: "2996",
      model_engine_cyl: "6",
      model_engine_type: "in-line",
      model_engine_valves_per_cyl: "4",
      model_engine_power_ps: "330",
      model_engine_power_rpm: "5600",
      model_engine_torque_nm: "441",
      model_engine_torque_rpm: "4600",
      model_engine_bore_mm: "86.0",
      model_engine_stroke_mm: "86.0",
      model_engine_compression: "8.5:1",
      model_engine_fuel: "Gasoline",
      model_top_speed_kph: null,
      model_0_to_100_kph: null,
      model_drive: "Rear",
      model_transmission_type: "Manual",
      model_seats: "4",
      model_doors: "2",
      model_weight_kg: "1615",
      model_length_mm: "4520",
      model_width_mm: "1820",
      model_height_mm: "1280",
      model_wheelbase_mm: "2560",
      model_lkm_hwy: null,
      model_lkm_mixed: null,
      model_lkm_city: null,
      model_fuel_cap_l: "75",
      model_sold_in_us: "1",
      model_co2: null,
      model_make_display: "Toyota",
      make_display: "Toyota",
      make_country: "Japan",
    },
  );
  const [visibleMenuCondition, setVisibleMenuCondition] = useState(false);
  const [IsSearchSection, setIsSearchSection] = useState(false);
  const [yearCar, setYearCar] = useState("");
  const [makerCar, setMakerCar] = useState("");
  const [modelCar, setModelCar] = useState("");
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
      }}
    >
      {children}
    </WikiCars.Provider>
  );
}
