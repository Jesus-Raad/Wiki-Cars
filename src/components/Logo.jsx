import React from 'react'
import Image from 'next/image'
import { Kaushan_Script } from 'next/font/google';

// Cargar la fuente

const kaushanScript = Kaushan_Script({
  weight: '400', // Puedes especificar el peso si es necesario
  subsets: ['latin'], // Puedes elegir los subsets de la fuente, en este caso 'latin'
  display: 'swap', // Mejora la experiencia de carga
});
const Logo = ({direction,width,height,sizeText}) => {
  const imgW=width||65
  const imgh=height||56
  return (
    <div className={direction?"flex  justify-center gap-0 z-50":"flex flex-col justify-center gap-0 z-50"}>
      <Image
        width={imgW}
        height={imgh}
        src={"/img/white_car_image.png"}
        alt={"logo"}
      />
      <p className={`${kaushanScript.className} text-white italic w-fit `}>Wiki-Cars</p>
    </div>
  );
};

export default Logo;
