"use client"
import Card from '@/components/Card';
import { WikiCars } from '@/context/wikiCarsContext';
import React, { useContext } from 'react'

const ListSection = () => {
    const { cars,finishFilter,favorite } = useContext(WikiCars);

    const favoriteCarIds = favorite.map(car => car.carId);


    const isCarFavorite=(element) =>{ return favoriteCarIds.includes(element.carId)}

  return (
    <div className=' flex w-auto justify-center mt-16 '>
      { finishFilter.length>0?<div className="flex  flex-wrap justify-center max-w-[1111px] gap-3">
        {finishFilter.slice(0, finishFilter.length).map((car) => {
          return <Card generic={true} car={car} key={car._id} isCarFavorite={isCarFavorite(car)} />;
        })}
      </div> :<div className="flex  flex-wrap justify-center max-w-[1111px] gap-3">
        {cars.slice(0, cars.length).map((car) => {
          return <Card generic={true} car={car} key={car._id} isCarFavorite={isCarFavorite(car)} />;
        })}
      </div>}
    </div>
  )
}

export default ListSection