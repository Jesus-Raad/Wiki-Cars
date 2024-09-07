import Image from "next/image";
import Link from "next/link";
import React from "react";

const InfoUtilsWeb = ({
  changeSide,
  linkPath,
  textBtn,
  title,
  description,
  img,
}) => {
  return (
    <>
      {changeSide ? (
        <div className="flex relative justify-center mx-5 py-3 items-center w-fit gap-8">
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
              <Link
                href={linkPath}
                onClick={action}
                className="flex items-center text-center py-3 px-6 min-h-[40px] justify-center max-w-fit text-white rounded font-semibold text-sm leading-4 bg-[#32363A]"
              >
                {textBtn}
              </Link>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center relative mx-5 py-3 items-center w-fit gap-8">
          <div className="flex flex-col w-fit gap-3">
            <h2 className="text-[#b0b5bf] text-2xl leading-7 font-medium sm:text-3xl  md:text-4xl   lg:text-5xl lg:font-semibold lg:leading-6">
              {title}
            </h2>
            <p className="text-[#374151] text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
              {description}
            </p>
            {textBtn && (
              <Link
                href={linkPath}
                onClick={action}
                className="flex items-center text-center py-3 px-6 min-h-[40px] justify-center max-w-fit text-white rounded font-semibold text-sm leading-4 bg-[#32363A]"
              >
                {textBtn}
              </Link>
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
