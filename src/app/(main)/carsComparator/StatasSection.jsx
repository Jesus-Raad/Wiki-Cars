"use client";
import { WikiCars } from "@/context/wikiCarsContext";
import React, { useContext } from "react";

const StatasSection = ({mobileVew}) => {
  const {
    carInfo,
    setCarInfo,
    firstChoice,
    setFirstChoice,
    secondChoice,
    setSecondChoice,
  } = useContext(WikiCars);

  const calcularAceleracion = (peso, potencia) => {
    if (!peso || !potencia) return "N/D";
    const aceleracion = peso / potencia;
    return aceleracion.toFixed(2);
  };
  const aceleracion1 =
    calcularAceleracion(
      parseInt(firstChoice?.model_weight_kg),
      parseInt(firstChoice?.model_engine_power_ps)
    ) + " Kph";
  const aceleracion2 =
    calcularAceleracion(
      parseInt(secondChoice?.model_weight_kg),
      parseInt(secondChoice?.model_engine_power_ps)
    ) + " Kph";
  return (
<div className={!mobileVew?"hidden lg:flex flex-col items-center gap-8  w-fit mt-[70px] px-4   ":"flex flex-col items-center gap-8  w-fit m-4 lg:hidden  "}>
{firstChoice&&secondChoice&&<> <div className="flex flex-col gap-4 items-center">

      <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
        Año
      </h1>
     <div className="flex  gap-12">
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {firstChoice.model_year ? firstChoice.model_year : "N/D"}
        </p>
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {secondChoice.model_year ? secondChoice.model_year : "N/D"}
        </p>
      </div>

</div>

<div className="flex flex-col gap-4 items-center">
<h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
Combustible
      </h1>
     <div className="flex  gap-12">
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {firstChoice.model_engine_fuel
            ? firstChoice.model_engine_fuel
            : "N/D"}
        </p>
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {secondChoice.model_engine_fuel
            ? secondChoice.model_engine_fuel
            : "N/D"}
        </p>
      </div>

</div>

<div className="flex flex-col gap-4 items-center">
      <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
        Transmisión
      </h1>
     <div className="flex  gap-12">
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {firstChoice.model_transmission_type
            ? firstChoice.model_transmission_type
            : "N/D"}
        </p>
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {secondChoice.model_transmission_type
            ? secondChoice.model_transmission_type
            : "N/D"}
        </p>
      </div>

</div>

<div className="flex flex-col gap-4 items-center">
      <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
        Ancho{" "}
      </h1>
     <div className="flex  gap-12">
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {firstChoice.model_width_mm
            ? `${firstChoice.model_width_mm} mm`
            : "N/D"}
        </p>
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {secondChoice.model_width_mm
            ? `${secondChoice.model_width_mm} mm`
            : "N/D"}
        </p>
      </div>

</div>

<div className="flex flex-col gap-4 items-center">
      <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
        Longitud{" "}
      </h1>
     <div className="flex  gap-12">
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {firstChoice.model_length_mm
            ? `${firstChoice.model_length_mm} mm`
            : "N/D"}
        </p>
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {secondChoice.model_length_mm
            ? `${secondChoice.model_length_mm} mm`
            : "N/D"}
        </p>
      </div>
</div>

<div className="flex flex-col gap-4 items-center">

      <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
        Peso{" "}
      </h1>
     <div className="flex  gap-12">
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {firstChoice.model_weight_kg
            ? `${firstChoice.model_weight_kg} Kg`
            : "N/D"}
        </p>
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {secondChoice.model_weight_kg
            ? `${secondChoice.model_weight_kg} Kg`
            : "N/D"}
        </p>
      </div>

</div>

<div className="flex flex-col gap-4 items-center">

      <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
        Potencia
      </h1>
     <div className="flex  gap-12">
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {firstChoice.model_engine_power_ps
            ? `${firstChoice.model_engine_power_ps} PS`
            : "N/D"}
        </p>
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {secondChoice.model_engine_power_ps
            ? `${secondChoice.model_engine_power_ps} PS`
            : "N/D"}
        </p>
      </div>

</div>

<div className="flex flex-col gap-4 items-center">
      <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
        Aceleracion
      </h1>
     <div className="flex  gap-12">
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {firstChoice.model_weight_kg &&
            firstChoice.model_engine_power_ps &&
            aceleracion1}
        </p>
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {secondChoice.model_weight_kg &&
            secondChoice.model_engine_power_ps &&
            aceleracion2}
        </p>
      </div>

</div>

<div className="flex flex-col gap-4 items-center">
      <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
        Velocidad Maxima
      </h1>
     <div className="flex  gap-12">
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {firstChoice.model_top_speed_kph
            ? `${firstChoice.model_top_speed_kph} KPH`
            : "N/D"}
        </p>
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {secondChoice.model_top_speed_kph
            ? `${secondChoice.model_top_speed_kph} KPH`
            : "N/D"}
        </p>
      </div>
</div>

<div className="flex flex-col gap-4 items-center">

      <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
        0-100 kph(s)
      </h1>
     <div className="flex  gap-12">
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {firstChoice.model_0_to_100_kph
            ? `${firstChoice.model_0_to_100_kph} s`
            : "N/D"}
        </p>
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {secondChoice.model_0_to_100_kph
            ? `${secondChoice.model_0_to_100_kph} s`
            : "N/D"}
        </p>
      </div>

</div>

<div className="flex flex-col gap-4 items-center">

      <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
       Tanque (L)
      </h1>
     <div className="flex  gap-12">
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {firstChoice.model_fuel_cap_l
            ? `${firstChoice.model_fuel_cap_l} L`
            : "N/D"}
        </p>
        <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
          {secondChoice.model_fuel_cap_l
            ? `${secondChoice.model_fuel_cap_l} L`
            : "N/D"}
        </p>
        </div>
      </div> </>}
    </div>
  );
};

export default StatasSection;
