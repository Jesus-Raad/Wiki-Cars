import React from 'react'
import Image from 'next/image';
const Card = ({car}) => {
    return (
        <div className="w-[209px] h-[340px] border border-gray-300 rounded-lg overflow-hidden shadow-md">
          <div className="relative h-2/3">
            {/* <Image 
              src="/path/to/car-image.jpg" // Cambia la ruta por la imagen del coche
              alt={`${car.model_make_id} ${car.model_name}`}
              layout="fill"
              objectFit="cover"
            /> */}
          </div>
          <div className="p-2 h-1/3 flex flex-col justify-between text-black">
            <h3 className="text-lg font-bold">{car.model_name}</h3>
            <p className="text-sm text-gray-600">{car.model_make_display}</p>
            <div className="mt-2">
              <p className="text-sm"><strong>Year:</strong> {car.model_year}</p>
              <p className="text-sm"><strong>Engine:</strong> {car.model_engine_cc}cc {car.model_engine_cyl}-cyl {car.model_engine_type}</p>
              <p className="text-sm"><strong>Power:</strong> {car.model_engine_power_ps} PS</p>
              <p className="text-sm"><strong>Seats:</strong> {car.model_seats}</p>
            </div>
          </div>
        </div>
      );
}

export default Card