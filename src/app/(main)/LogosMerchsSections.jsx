"use client";
import Image from "next/image";
import React from "react";

const LogosMerchsSections = () => {
  const logo = [
    "/img/audiLogo.svg",
    "/img/bmwLogo.svg",
    "/img/fordLogo.svg",
    "/img/hondaLogo.svg",
    "/img/hyundaiLogo.svg",
    "/img/mercedes-benzLogo.svg",
    "/img/nissanLogo.svg",
    "/img/toyotaLogo.svg",
    "/img/volkswagenLogo.svg",
    "/img/chevroletLogo.svg"
  ];
  return (
    <div className="flex justify-center py-4 gap-3 my-3 md:gap-[20px] lg:gap-[30px] ">
      {logo.map((merch,i )=>{
        return(
            <div key={i} className="w-[25px] sm:w-[40px] md:w-[55px]  lg:w-[70px] ">

                <Image
                
                width={100}
                height={50}
                src={merch}
                alt={"logo"}
                sizes=" (max-width: 100px) 50vw, 25vw"
                objectFit="cover"
              />
            </div>
            )
     })}


    
    </div>
  );
};

export default LogosMerchsSections;
