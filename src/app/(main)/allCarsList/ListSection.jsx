"use client"
import Card from '@/components/Card';
import { WikiCars } from '@/context/wikiCarsContext';
import React, { useContext } from 'react'

const ListSection = () => {
    const { cars,finishFilter, changeForS } = useContext(WikiCars);


  return (
    <div className=' flex w-screen justify-center mt-16 '>
      { finishFilter.length>0?<div className="flex  flex-wrap justify-center max-w-[1111px] gap-3">
        {finishFilter.slice(0, finishFilter.length).map((car) => {
          return <Card generic={true} car={car} key={car._id}  />;
        })}
      </div> :<div className="flex  flex-wrap justify-center max-w-[1111px] gap-3">
        {cars.slice(0, cars.length).map((car) => {
          return <Card generic={true} car={car} key={car._id}  />;
        })}
      </div>}
    </div>
  )
}

export default ListSection