import React from 'react'
import Image from 'next/image'
import { Kaushan_Script } from 'next/font/google';

// Cargar la fuente
const kaushanScript = Kaushan_Script({
  weight: '400', // Puedes especificar el peso si es necesario
  subsets: ['latin'], // Puedes elegir los subsets de la fuente, en este caso 'latin'
  display: 'swap', // Mejora la experiencia de carga
});

const Logo = () => {
  return (
    <div className="flex flex-col justify-center gap-0">
      <Image
        width={65}
        height={56}
        src={"/img/white_car_image.png"}
        alt={"logo"}
      />
      <p className={`${kaushanScript.className} text-white italic w-fit `}>Wiki-Cars</p>
    </div>
  );
};

export default Logo;
