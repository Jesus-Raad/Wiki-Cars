import React from "react";
import InfoUtilsWeb from "./InfoUtilsWeb";
import CarsSections from "./CarsSections";
import Footer from "./Footer";
import LogosMerchsSections from "./LogosMerchsSections";

const page = () => {
  return (
    <>
      <video autoPlay loop muted width="100%">
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
        link={"https://github.com/"}
      />
      <InfoUtilsWeb
        textBtn={"Comencemos"}
        changeSide={true}
        img={"/img/porsche1-11.jpg"}
        title={"Comparación de coches"}
        description={
          "Si estás interesado en obtener una descripción comparativa y detallada de un vehículo, te ofrezco la posibilidad de analizar y comparar modelos, verciones y marcas."
        }
        link={"https://github.com/"}
        
      />
      <CarsSections acc={10} />
      <LogosMerchsSections/>
      <Footer />
    </>
  );
};

export default page;
