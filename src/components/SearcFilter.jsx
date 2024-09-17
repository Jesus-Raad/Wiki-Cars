"use client";
import { WikiCars } from "@/context/wikiCarsContext";
import { Search } from "lucide-react";
import { set } from "mongoose";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ButtonsCar from "./ButtonsCar";

const SearcFilter = () => {
  const {
    modelCar,
    setModelCar,
    makerCar,
    setMakerCar,
    yearCar,
    setYearCar,
    cars,
    IsSearchSection,
    setIsSearchSection,
    finishFilter, setFinishFilter
  } = useContext(WikiCars);

  const [availableYears, setAvailableYears] = useState([]);
  const [availableModels, setAvailableModels] = useState([]);

  ///////////////////////////////////////

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  //////////////////////////////////////7
  const { register, handleSubmit, watch } = useForm();

  const makers = Array.from(new Set(cars.map((car) => car.make_display)));
  const years = Array.from(new Set(cars.map((car) => car.model_year)));

  setMakerCar(watch("marca"));
  setYearCar(watch("year"));
  setModelCar(watch("model"));

  useEffect(() => {
    let filteredCars = [];
    if (makerCar && modelCar) {
      filteredCars = cars.filter(
        (car) => car.make_display === makerCar && car.model_name === modelCar
      );
    } else if (makerCar) {
      filteredCars = cars.filter((car) => car.make_display === makerCar);
    } else if (modelCar) {
      filteredCars = cars.filter((car) => car.model_name === modelCar);
    }
    const years = filteredCars.map((car) => car.model_year);
    setAvailableYears(Array.from(new Set(years)));
  }, [makerCar, modelCar, cars]);

  useEffect(() => {
    let filteredCars = [];

    if (makerCar && yearCar) {
      filteredCars = cars.filter(
        (car) => car.make_display === makerCar && car.model_year === yearCar
      );
    } else if (makerCar) {
      filteredCars = cars.filter((car) => car.make_display === makerCar);
    } else if (yearCar) {
      filteredCars = cars.filter((car) => car.model_year === yearCar);
    }

    const models = filteredCars.map((car) => car.model_name);
    setAvailableModels(Array.from(new Set(models)));
  }, [makerCar, yearCar, cars]);
  /////////////////////////////////
 

  useEffect(() => {
    let filteredCars = [];

    if (makerCar && yearCar && modelCar) {
      filteredCars = cars.filter(
        (car) =>
          car.make_display === makerCar &&
          car.model_year === yearCar &&
          car.model_name === modelCar
      );
    } else if (makerCar && yearCar) {
      filteredCars = cars.filter((car) => car.make_display === makerCar&&car.model_year === yearCar);
    }
     else if (yearCar&& modelCar) {
      filteredCars = cars.filter((car) => car.model_year === yearCar&&car.model_name===modelCar);
    }
     else if (makerCar&& modelCar) {
      filteredCars = cars.filter((car) => car.make_display === makerCar&&car.model_name===modelCar);
    }
     else if ( modelCar) {
      filteredCars = cars.filter((car) => car.model_name===modelCar);
    }
     else if (makerCar) {
      filteredCars = cars.filter((car) => car.make_display === makerCar);
    }
    else if (yearCar) {
      filteredCars = cars.filter((car) => car.model_year === yearCar);
    }
     
    setFinishFilter(filteredCars);
  }, [makerCar, yearCar,modelCar, cars]);

  console.log(makerCar);
  console.log(yearCar);
  console.log(modelCar);
console.log(finishFilter);

  return (
    <form
      className={
        IsSearchSection
          ? " flex justify-center absolute bg-white/10 top-[63px]  w-screen py-2  backdrop-blur-lg shadow-lg "
          : "absolute hidden bg-white top-[63px] left-0 w-screen py-2 "
      }
    >
      <div className="flex flex-wrap gap-10 justify-center items-center">
        <div className="">
          <select
            {...register("marca")}
            id="marca"
            className="bg-gray-200 text-gray-700 p-2 rounded-md outline-none focus:ring focus:ring-gray-300 max-w-32 sm:w-auto"
          >
            <option value=""  selected>
              Fabricante
            </option>
            {makers.map((marca) => (
              <option key={marca} value={marca}>
                {capitalize(marca)}
              </option>
            ))}
          </select>
        </div>
        <div className=" flex justify-center w-full sm:w-auto">
        <div className="">
          <select
            {...register("year")}
            id="year"
            className="bg-gray-200 text-gray-700 p-2 rounded-md outline-none focus:ring focus:ring-gray-300 max-w-32 sm:w-auto"
          >
            <option value=""  selected>
              Año 
            </option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        </div>
        <div className=" flex justify-center w-full sm:w-auto">
          <input
            type="text"
            list="modelOptions"
            placeholder="Modelo del coche"
            {...register("model")}
            className="bg-gray-200 text-gray-700 text-center p-2 rounded-md outline-none focus:ring focus:ring-gray-300 w-56 sm:w-auto"
          />
          <datalist id="modelOptions">
            {availableModels.map((model) => (
              <option key={model} value={model}>
                {capitalize(model)}
              </option>
            ))}
          </datalist>
        </div>
        <ButtonsCar style={"gray"} text={"Buscar"} />
      </div>
    </form>
  );
};

export default SearcFilter;
