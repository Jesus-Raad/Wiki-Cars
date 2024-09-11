import ButtonsCar from "@/components/buttonsCar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const InfoUtilsWeb = ({
  changeSide,
  link,
  textBtn,
  title,
  description,
  img,
  action
}) => {
const linkPath=link||""
  return (
    <>
      {changeSide ? (
        <div className="flex flex-col  relative justify-center mx-5 py-3 items-center w-fit gap-8 -z-10 sm:flex-row md:flex-row lg:flex-row">
          <Image
            className="rounded-xl -z-10"
            width={600}
            height={254}
            src={img}
            alt={"imgDescription"}
            sizes=" (max-width: 768px) 50vw, 25vw"
          />

          <div className="flex flex-col w-fit gap-3">
          <h2 className="text-[#b0b5bf] text-2xl leading-7 font-medium sm:text-3xl  md:text-4xl   lg:text-5xl lg:font-semibold lg:leading-6">
          {title}
            </h2>
            <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
              {description}
            </p>
            {textBtn && (
                          <ButtonsCar style={"black"} text={textBtn}/>

            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col  relative justify-center mx-5 py-3 items-center w-fit gap-8 -z-10 sm:flex-row md:flex-row lg:flex-row">
          <div className="flex flex-col w-fit gap-3">
            <h2 className="text-[#b0b5bf] text-2xl leading-7 font-medium sm:text-3xl  md:text-4xl   lg:text-5xl lg:font-semibold lg:leading-6">
              {title}
            </h2>
            <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
              {description}
            </p>
            {textBtn && (
          
              <ButtonsCar style={"black"} text={textBtn}/>
            )}
          </div>
          <Image
            className="rounded-xl -z-10"
            width={600}
            height={254}
            src={img}
            alt={"imgDescription"}
            sizes=" (max-width: 768px) 50vw, 25vw"
          />
        </div>
      )}
    </>
  );
};

export default InfoUtilsWeb;
