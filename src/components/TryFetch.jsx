"use client"
import { WikiCars } from '@/context/wikiCarsContext';
import React, { useContext } from 'react'

const TryFetch = () => {
    const {cars, setCars} = useContext(WikiCars);
    console.log(cars);
    
  return (
    <div>
      hola
    </div>
  )
}

export default TryFetch