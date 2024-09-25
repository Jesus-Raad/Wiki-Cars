"use client";
import { WikiCars } from "@/context/wikiCarsContext";
import { Equal, MoveDown, MoveUp } from "lucide-react";
import React, { useContext } from "react";

const StatasSection = ({ mobileVew }) => {
  const {
    carInfo,
    setCarInfo,
    firstChoice,
    setFirstChoice,
    secondChoice,
    setSecondChoice,
  } = useContext(WikiCars);

  const calcularAceleracion = (peso, potencia) => {
    if (!peso || !potencia) {
      return "---";
    }
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
    <div className="flex flex-col items-center gap-8  w-full m-4   ">
      {firstChoice && secondChoice && (
        <>
          {" "}
          <div className="flex min-w-[356px] md:min-w-[816px] justify-evenly">
            <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
              {firstChoice.model_year ? firstChoice.model_year : "---"}
            </p>
            <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
              Año
            </h1>
            <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
              {secondChoice.model_year ? secondChoice.model_year : "---"}
            </p>
          </div>
          <div className="flex min-w-[356px] md:min-w-[816px] justify-evenly">
          
            <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
              {firstChoice.model_engine_fuel
                ? firstChoice.model_engine_fuel
                : "---"}
            </p>
            <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
              Combustible
            </h1>
            <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
              {secondChoice.model_engine_fuel
                ? secondChoice.model_engine_fuel
                : "---"}
            </p>
          </div>




       
            
          <div className="flex min-w-[356px] md:min-w-[816px] justify-evenly">
              <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {firstChoice.model_transmission_type
                  ? firstChoice.model_transmission_type
                  : "---"}
              </p>
              <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
              Transmisión
            </h1>
              <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {secondChoice.model_transmission_type
                  ? secondChoice.model_transmission_type
                  : "---"}
              </p>
            </div>
        



       
          
            <div className="flex min-w-[356px] md:min-w-[816px] justify-evenly">
            <p className="flex items-center text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {firstChoice.model_width_mm
                  ? `${firstChoice.model_width_mm} mm`
                  : "---"}
                {firstChoice.model_width_mm > secondChoice.model_width_mm ? (
                  <MoveUp color="#2b9c41" />
                ) : firstChoice.model_width_mm ===
                  secondChoice.model_width_mm ? (
                  <Equal color="#dba50f" />
                ) : (
                  <MoveDown color="#ef4444" />
                )}
              </p>
              <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
              Ancho{" "}
            </h1>
              <p className="flex items-center text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {firstChoice.model_width_mm < secondChoice.model_width_mm ? (
                  <MoveUp color="#2b9c41" />
                ) : firstChoice.model_width_mm ===
                  secondChoice.model_width_mm ? (
                  <Equal color="#dba50f" />
                ) : (
                  <MoveDown color="#ef4444" />
                )}{" "}
                {secondChoice.model_width_mm
                  ? `${secondChoice.model_width_mm} mm`
                  : "---"}
              </p>
            </div>
          




          
           
            <div className="flex min-w-[356px] md:min-w-[816px] justify-evenly">
              <p className=" flex text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {firstChoice.model_length_mm
                  ? `${firstChoice.model_length_mm} mm`
                  : "---"}
                {firstChoice.model_length_mm > secondChoice.model_length_mm ? (
                  <MoveUp color="#2b9c41" />
                ) : firstChoice.model_length_mm ===
                  secondChoice.model_length_mm ? (
                  <Equal color="#dba50f" />
                ) : firstChoice.model_length_mm ===
                  secondChoice.model_length_mm ? (
                  <Equal color="#dba50f" />
                ) : (
                  <MoveDown color="#ef4444" />
                )}
              </p>
              <h1 className="flex text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
              Longitud{" "}
            </h1>
              <p className="flex items-center text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {firstChoice.model_length_mm < secondChoice.model_length_mm ? (
                  <MoveUp color="#2b9c41" />
                ) : firstChoice.model_length_mm ===
                  secondChoice.model_length_mm ? (
                  <Equal color="#dba50f" />
                ) : (
                  <MoveDown color="#ef4444" />
                )}{" "}
                {secondChoice.model_length_mm
                  ? `${secondChoice.model_length_mm} mm`
                  : "---"}
              </p>
            </div>
          





          
        
            <div className="flex min-w-[356px] md:min-w-[816px] justify-evenly">
              <p className="flex items-center text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {firstChoice.model_weight_kg
                  ? `${firstChoice.model_weight_kg} Kg`
                  : "---"}
                {firstChoice.model_weight_kg > secondChoice.model_weight_kg ? (
                  <MoveUp color="#2b9c41" />
                ) : firstChoice.model_weight_kg ===
                  secondChoice.model_weight_kg ? (
                  <Equal color="#dba50f" />
                ) : (
                  <MoveDown color="#ef4444" />
                )}
              </p>
              <h1 className="flex text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
              Peso{" "}
            </h1>
              <p className="flex items-center text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {firstChoice.model_weight_kg < secondChoice.model_weight_kg ? (
                  <MoveUp color="#2b9c41" />
                ) : firstChoice.model_weight_kg ===
                  secondChoice.model_weight_kg ? (
                  <Equal color="#dba50f" />
                ) : (
                  <MoveDown color="#ef4444" />
                )}{" "}
                {secondChoice.model_weight_kg
                  ? `${secondChoice.model_weight_kg} Kg`
                  : "---"}
              </p>
            </div>
          


          
           
            <div className="flex min-w-[356px] md:min-w-[816px] justify-evenly">
              <p className="flex items-center text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {firstChoice.model_engine_power_ps
                  ? `${firstChoice.model_engine_power_ps} PS`
                  : "---"}
                {firstChoice.model_engine_power_ps >
                secondChoice.model_engine_power_ps ? (
                  <MoveUp color="#2b9c41" />
                ) : firstChoice.model_engine_power_ps ===
                  secondChoice.model_engine_power_ps ? (
                  <Equal color="#dba50f" />
                ) : (
                  <MoveDown color="#ef4444" />
                )}
              </p>
              <h1 className="flex text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
              Potencia
            </h1>
              <p className="flex items-center text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {firstChoice.model_engine_power_ps <
                secondChoice.model_engine_power_ps ? (
                  <MoveUp color="#2b9c41" />
                ) : firstChoice.model_engine_power_ps ===
                  secondChoice.model_engine_power_ps ? (
                  <Equal color="#dba50f" />
                ) : (
                  <MoveDown color="#ef4444" />
                )}{" "}
                {secondChoice.model_engine_power_ps
                  ? `${secondChoice.model_engine_power_ps} PS`
                  : "---"}
              </p>
            </div>
          




      
         
            <div className="flex min-w-[356px] md:min-w-[816px] justify-evenly">
              <p className="flex items-center text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {firstChoice.model_weight_kg &&
                  firstChoice.model_engine_power_ps &&
                  aceleracion1}
                {aceleracion1 > aceleracion2 ? (
                  <MoveUp color="#2b9c41" />
                ) : aceleracion1 === aceleracion2 ? (
                  <Equal color="#dba50f" />
                ) : (
                  <MoveDown color="#ef4444" />
                )}
              </p>
              <h1 className="flex text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
              Aceleracion
            </h1>
              <p className="flex items-center text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {aceleracion1 < aceleracion2 ? (
                  <MoveUp color="#2b9c41" />
                ) : aceleracion1 === aceleracion2 ? (
                  <Equal color="#dba50f" />
                ) : (
                  <MoveDown color="#ef4444" />
                )}{" "}
                {secondChoice.model_weight_kg &&
                  secondChoice.model_engine_power_ps &&
                  aceleracion2}
              </p>
            </div>
         


         
           
            <div className="flex min-w-[356px] md:min-w-[816px] justify-evenly">
              <p className="flex items-center text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {firstChoice.model_top_speed_kph
                  ? `${firstChoice.model_top_speed_kph} KPH`
                  : "---"}
                {firstChoice.model_top_speed_kph >
                secondChoice.model_top_speed_kph ? (
                  <MoveUp color="#2b9c41" />
                ) : firstChoice.model_top_speed_kph ===
                  secondChoice.model_top_speed_kph ? (
                  <Equal color="#dba50f" />
                ) : (
                  <MoveDown color="#ef4444" />
                )}
              </p>
              <h1 className="flex text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
              Velocidad Maxima
            </h1>
              <p className="flex items-center text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {firstChoice.model_top_speed_kph <
                secondChoice.model_top_speed_kph ? (
                  <MoveUp color="#2b9c41" />
                ) : firstChoice.model_top_speed_kph ===
                  secondChoice.model_top_speed_kph ? (
                  <Equal color="#dba50f" />
                ) : (
                  <MoveDown color="#ef4444" />
                )}{" "}
                {secondChoice.model_top_speed_kph
                  ? `${secondChoice.model_top_speed_kph} KPH`
                  : "---"}
              </p>
            </div>
          


        
         
            <div className="flex min-w-[356px] md:min-w-[816px] justify-evenly">
              {" "}
              <p className="flex items-center text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {firstChoice.model_0_to_100_kph
                  ? `${firstChoice.model_0_to_100_kph} s`
                  : "---"}
                {firstChoice.model_0_to_100_kph >
                secondChoice.model_0_to_100_kph ? (
                  <MoveUp color="#2b9c41" />
                ) : firstChoice.model_0_to_100_kph ===
                  secondChoice.model_0_to_100_kph ? (
                  <Equal color="#dba50f" />
                ) : (
                  <MoveDown color="#ef4444" />
                )}
              </p>
              <h1 className="flex text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
              0-100 kph(s)
            </h1>
              <p className="flex items-center text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {firstChoice.model_0_to_100_kph <
                secondChoice.model_0_to_100_kph ? (
                  <MoveUp color="#2b9c41" />
                ) : firstChoice.model_0_to_100_kph ===
                  secondChoice.model_0_to_100_kph ? (
                  <Equal color="#dba50f" />
                ) : (
                  <MoveDown color="#ef4444" />
                )}{" "}
                {secondChoice.model_0_to_100_kph
                  ? `${secondChoice.model_0_to_100_kph} s`
                  : "---"}
              </p>
            </div>
          


         
           
            <div className="flex min-w-[356px] md:min-w-[816px] justify-evenly">
              {" "}
              <p className="flex items-center text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {firstChoice.model_fuel_cap_l
                  ? `${firstChoice.model_fuel_cap_l} L`
                  : "---"}
                {firstChoice.model_fuel_cap_l >
                secondChoice.model_fuel_cap_l ? (
                  <MoveUp color="#2b9c41" />
                ) : firstChoice.model_fuel_cap_l ===
                  secondChoice.model_fuel_cap_l ? (
                  <Equal color="#dba50f" />
                ) : (
                  <MoveDown color="#ef4444" />
                )}
              </p>
              <h1 className="text-[#374151] text-lg font-bold leading-4 sm:text-xl sm:leading-4 md:text-2xl md:font-bold md:leading-4  lg:font-bold lg:leading-5">
              Tanque (L)
            </h1>
              <p className="flex items-center text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
                {firstChoice.model_fuel_cap_l <
                secondChoice.model_fuel_cap_l ? (
                  <MoveUp color="#2b9c41" />
                ) : firstChoice.model_fuel_cap_l ===
                  secondChoice.model_fuel_cap_l ? (
                  <Equal color="#dba50f" />
                ) : (
                  <MoveDown color="#ef4444" />
                )}{" "}
                {secondChoice.model_fuel_cap_l
                  ? `${secondChoice.model_fuel_cap_l} L`
                  : "---"}
              </p>
            </div>
        
        </>
      )}
    </div>
  );
};

export default StatasSection;
