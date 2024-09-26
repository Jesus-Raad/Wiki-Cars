"use client";
import React, { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import { LogOut, MenuIcon, Search, X } from "lucide-react";
import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";

import { WikiCars } from "@/context/wikiCarsContext";
import MenuOptions from "./MenuOptions";
import SearcFilter from "./SearcFilter";
import Link from "next/link";
import Card from "./Card";
import { Kaushan_Script } from "next/font/google";

const kaushanScript = Kaushan_Script({
  weight: "400", // Puedes especificar el peso si es necesario
  subsets: ["latin"], // Puedes elegir los subsets de la fuente, en este caso 'latin'
  display: "swap", // Mejora la experiencia de carga
});

const Navbar = () => {
  const { isAuthenticated } = useKindeBrowserClient();

  const { user, getUser } = useKindeBrowserClient();
  const alsoUser = getUser();

  const {
    visibleMenuCondition,
    setVisibleMenuCondition,
    IsSearchSection,
    setIsSearchSection,
    visibleFavSectionCondition,
    setVisibleFavSectionCondition,
    favorite,
    setFavorite,
    isFavorite,
    setIsFavorite,
  } = useContext(WikiCars);

  const handleVisibleFavSectionCondition = () => {
    if (visibleFavSectionCondition === true) {
      setVisibleFavSectionCondition(false);
    } else {
      setVisibleFavSectionCondition(true);
      setVisibleMenuCondition(false);
      setIsSearchSection(false);
    }
  };
  const handleMenuVisible = () => {
    if (visibleMenuCondition === true) {
      setVisibleMenuCondition(false);
    } else {
      setVisibleFavSectionCondition(false);

      setVisibleMenuCondition(true);
      setIsSearchSection(false);
    }
  };

  const handleSearchSectionVisible = () => {
    if (IsSearchSection === true) {
      setIsSearchSection(false);
    } else {
      setVisibleFavSectionCondition(false);

      setVisibleMenuCondition(false);
      setIsSearchSection(true);
    }
  };

  useEffect(() => {
    const fetchFavorites = async () => {
      const userId = alsoUser.id; // El userId que obtuviste tras el login

      const response = await fetch("/api/users", {
        method: "GET",
        headers: {
          userId: userId, // Asegúrate de enviar el userId aquí
        },
      });

      const data = await response.json();
      
      setFavorite(data.favorites);
    };

    if (alsoUser?.id) {
      fetchFavorites();
    }
  }, [alsoUser, isFavorite]);
 

  return (
    <nav className="bg-black fixed z-50 top-0 w-screen shadow-xl">
      <div className=" w-screen px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href={"/"}>
              <Logo width={65} height={56} />
            </Link>
          </div>
          <div id="no-scroll"
            className={
              visibleFavSectionCondition
                ? " flex flex-col absolute max-w-[314px] min-w-[200px] md:min-w-[300px] max-h-[391.37px] min-h-[270px] overflow-scroll  bg-[white]  gap-5 p-2 rounded-lg border-red-500 border-[3px]  shadow-2xl shadow-black  right-1 md:right-5 top-16    "
                : " flex flex-col absolute w-[314px] max-h-[391.37px] min-h-[270px] bg-[white] invisible gap-5 p-2 rounded-lg border-[#000000] border-solid border-[1px] right-5 top-[70px]"
            }
          >
            <div className="flex justify-between p-2 items-center">
            <h2
        className={` ${kaushanScript.className} text-black  text-2xl leading-7 font-medium sm:text-3xl  md:text-4xl   lg:text-5xl lg:font-semibold lg:leading-6`}
      >
        Fav Cars{" "}
      </h2>
       <X
                onClick={handleVisibleFavSectionCondition}
                size={18}
                color=" #ef4444"
              />
            </div>
            <div  className="flex flex-col  gap-2  ">
              {/* aqui quiero hacer un map de los coches favoritos del usuario y que rendericen la <card cardFav={true}> */}
              {/* Mapeamos los favoritos y renderizamos las mini tarjetas */}
              {favorite.length > 0 ? (
                favorite.map((car) => (
                  <Card key={car} car={car} cardFav={true} /> // cardFav renderiza la tarjeta en su formato pequeño
                ))
              ) : (
                <p className=" flex justify-center text-black">No tienes coches favoritos aún.</p>
              )}
            </div>
          </div>
          <div className="md:flex md:items-center md:gap-12">
            <div aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <div className="text-white transition cursor-pointer hover:text-red-500">
                    {" "}
                    <Search
                      onClick={handleSearchSectionVisible}
                      color=" #ef4444"
                    />{" "}
                  </div>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-red-500"
                    href="/carsComparator"
                  >
                    {" "}
                    Comparador{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-red-500"
                    href="/allCarsList"
                  >
                    Coches
                  </Link>
                </li>

                <li>
                  {/* seccion de favoritos */}
                  <div
                    className="text-white transition hover:text-red-500"
                    onClick={handleVisibleFavSectionCondition}
                  >
                    Favoritos
                  </div>
                </li>

                {user && (
                  <li>
                    <div
                      className="text-white transition hover:text-red-500"
                      href="#"
                    >
                      {" "}
                      <LogoutLink>
                        <LogOut size={18} color=" #ef4444" />
                      </LogoutLink>{" "}
                    </div>
                  </li>
                )}
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                {!isAuthenticated ? (
                  <LoginLink>
                    <button className="flex items-center text-center py-1 px-4 min-h-[40px] justify-center max-w-fit text-white rounded font-normal text-sm leading-4 bg-red-500 ">
                      {" "}
                      Iniciar Sesión
                    </button>
                  </LoginLink>
                ) : (
                  <Image
                    className="rounded-full"
                    width={28}
                    height={28}
                    src={user?.picture}
                    alt={"userPicture"}
                  />
                )}
              </div>

              <div className="block md:hidden">
                <MenuIcon onClick={handleMenuVisible} color="#ef4444" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SearcFilter />
      <MenuOptions
        actionSearch={handleSearchSectionVisible}
        actionFav={handleVisibleFavSectionCondition}
      />
    </nav>
  );
};

export default Navbar;
