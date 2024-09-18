import React from "react";
import InfoUtilsWeb from "./InfoUtilsWeb";
import CarsSections from "./CarsSections";
import Footer from "./Footer";
import LogosMerchsSections from "./LogosMerchsSections";

const page = () => {
  return (
    <>
      <video className="mt-16 sticky sm:m-0"  autoPlay loop muted width="100%">
        <source
          src="/videos/y2mate.com - Dodge Challenger Hellcat SRT Redeye Widebody  The Ultimate Muscle Car challenger hellcat redeye_1440p.mp4"
          type="video/mp4"
        />
        Tu navegador no soporta el elemento de video.
      </video>

      <InfoUtilsWeb
        textBtn={"Elige el coche"}
        title={"Detalles de coches"}
        description={
          "Si buscas información detallada de un vehículo específico, estamos aquí para ayudarte. Te proporcionamos una descripción completa de las características y especificaciones clave."
        }
        img={"/img/cocheBlack.jpg"}
        link={"/allCarsList"}
      />
      <InfoUtilsWeb
        textBtn={"Comencemos"}
        changeSide={true}
        img={"/img/porsche1-11.jpg"}
        title={"Comparación de coches"}
        description={
          "Si estás interesado en obtener una descripción comparativa y detallada de un vehículo, te ofrezco la posibilidad de analizar y comparar modelos, verciones y marcas. Solo tienes que pinchar en las opciones 1 y 2 que salen junto con la informacion de los coches, el 1 para el primer coche y el 2 para el segundo."
        }
        link={"/carsComparator"}
        
      />
      <CarsSections acc={10} />
      <LogosMerchsSections/>
      <Footer />
    </>
  );
};

export default page;
