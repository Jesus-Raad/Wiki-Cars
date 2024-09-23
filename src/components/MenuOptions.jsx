import { WikiCars } from "@/context/wikiCarsContext";
import { LoginLink, LogoutLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { ArrowRightLeft, LogOut, Search, Star, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React, { useContext } from "react";

const MenuOptions = ({ actionSearch,actionFav }) => {
  const { user, getUser } = useKindeBrowserClient();
const { visibleMenuCondition}=useContext(WikiCars)
  return (
    <div
      className={
        visibleMenuCondition
          ? " flex flex-col absolute min-w-[150px] min-h-28 bg-[white]  gap-5 p-2  border-solid border-b-[1px] right-4 top-[63px] md:hidden"
          : " flex flex-col absolute min-w-[114px] max-h-[391.37px] min-h-[90px] bg-[white] invisible gap-5 p-2 rounded-lg  border-solid border-[1px] right top-[64px]"
      }
    >
      {user ? (
        <div className="flex flex-col  gap-3 pb-3">
          <div className="flex flex-col items-center">
            <User color="#ef4444" />
            <p className="text-[#ef4444]  text-sm font-normal leading-4 sm:text-base sm:leading-4 md:text-lg md:font-normal md:leading-4 lg:text-xl lg:font-normal lg:leading-5">
              {user.given_name} {user.family_name}
            </p>
            <p className="text-[#374151] max-w-[100px] overflow-scroll  overflow-x-hidden overflow-y-hidden text-xs font-normal leading-4 sm:text-sm sm:leading-4 md:text-base md:font-normal md:leading-4 lg:text-lg lg:font-normal lg:leading-5">
              {user.email}
            </p>
          </div>
          <div className="flex flex-col gap-2 pl-2">
            <div onClick={actionFav} className="flex w-fit gap-2">
              <Star size={15} strokeWidth={1.25} color="#6b7280" />
              <p className="text-[#374151] max-w-[100px]  text-xs font-normal leading-4 sm:text-sm sm:leading-4 md:text-base md:font-normal md:leading-4 lg:text-lg lg:font-normal lg:leading-5">
                Favoritos
              </p>
            </div>
            <Link href="/carsComparator">
      <div className=" flex w-fit gap-2">
        <ArrowRightLeft size={15} strokeWidth={1.25} color="#6b7280" />{" "}
        <p className="text-[#374151] max-w-[100px]  text-xs font-normal leading-4 sm:text-sm sm:leading-4 md:text-base md:font-normal md:leading-4 lg:text-lg lg:font-normal lg:leading-5">
          Comparador
        </p>
      </div>
      </Link>
            <div onClick={actionSearch} className="cursor-pointer flex w-fit gap-2">
              <Search size={15} strokeWidth={1.25} color="#6b7280" />{" "}
              <p className="text-[#374151] max-w-[100px]  text-xs font-normal leading-4 sm:text-sm sm:leading-4 md:text-base md:font-normal md:leading-4 lg:text-lg lg:font-normal lg:leading-5">
                Buscar coche
              </p>
            </div>
          </div>
          <div className="flex justify-center">

          <LogoutLink>
            <button className=" flex items-center w-full bg-[#374151]  text-white rounded max-w-[100px]  text-xs font-light leading-4  px-2 py-1">
              <LogOut size={15} strokeWidth={2} color="#ef4444" />Cerrar Sesión
            </button>
          </LogoutLink>
          </div>
        </div>
      ) : 
      <div className="flex flex-col gap-2 pl-2">
      <Link href="/carsComparator">
      <div className=" flex w-fit gap-2">
        <ArrowRightLeft size={15} strokeWidth={1.25} color="#6b7280" />{" "}
        <p className="text-[#374151] max-w-[100px]  text-xs font-normal leading-4 sm:text-sm sm:leading-4 md:text-base md:font-normal md:leading-4 lg:text-lg lg:font-normal lg:leading-5">
          Comparador
        </p>
      </div>
      </Link>
      <div onClick={actionSearch} className=" cursor-pointer flex w-fit gap-2">
        <Search size={15} strokeWidth={1.25} color="#6b7280" />{" "}
        <p className="text-[#374151] max-w-[100px]  text-xs font-normal leading-4 sm:text-sm sm:leading-4 md:text-base md:font-normal md:leading-4 lg:text-lg lg:font-normal lg:leading-5">
          Buscar coche
        </p>
      </div>
      <div className="flex flex-col w-fit gap-2">
        <div className="flex">

        <Star size={15} strokeWidth={1.25} color="#dc2626" />
        <p className="text-red-600 max-w-[100px]  text-xs font-normal leading-4 sm:text-sm sm:leading-4 md:text-base md:font-normal md:leading-4 lg:text-lg lg:font-normal lg:leading-5">
          Favoritos 
        </p>
        </div>
        <LoginLink>
        <p className=" cursor-pointer text-center text-[#dc2626] max-w-[100px]  text-xs font-thin leading-4 sm:text-sm sm:leading-4 md:text-base md:font-normal md:leading-4 lg:text-lg lg:font-normal lg:leading-5">
          Inicia sesión Primero
        </p>
        </LoginLink>
      </div>
    </div>
      }
    </div>
  );
};

export default MenuOptions;
