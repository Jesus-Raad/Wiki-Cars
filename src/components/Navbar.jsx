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

  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    if (!user?.id) return; // Asegúrate de que el usuario esté autenticado

    try {
      const response = await fetch('/api/users/favorites', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'userId': user.id, // Pasamos el ID del usuario en los headers
        },
      });

      if (!response.ok) throw new Error('Error al obtener favoritos');
      
      const data = await response.json();
      setFavorites(data.favorites); // Guardamos la lista de IDs de coches favoritos
    } catch (error) {
      console.error('Error al obtener favoritos:', error);
    }
  };

  // Fetch favoritos cuando el modal se abre
  useEffect(() => {
    if (visibleFavSectionCondition) {
      fetchFavorites();
    }
  }, [visibleFavSectionCondition]);




  return (
    <nav className="bg-black fixed z-50 top-0 w-screen shadow-xl">
      <div className=" w-screen px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href={"/"}>
              <Logo width={65} height={56} />
            </Link>
          </div>
          <div
            className={
              visibleFavSectionCondition
                ? " flex flex-col absolute max-w-[314px] min-w-[200px] max-h-[391.37px] min-h-[270px] bg-[white]  gap-5 p-2 rounded-lg border-[#000000] border-solid border-[1px] right-5 top-[70px]  md:right-[45%] md:top-[200px]  "
                : " flex flex-col absolute w-[314px] max-h-[391.37px] min-h-[270px] bg-[white] invisible gap-5 p-2 rounded-lg border-[#000000] border-solid border-[1px] right-5 top-[70px]"
            }
          >
            <div className="flex justify-end">
              <X onClick={handleVisibleFavSectionCondition} size={18} color=" #ef4444" />
            </div>
            <div>
     {/* aqui quiero hacer un map de los coches favoritos del usuario y que rendericen la <card cardFav={true}> */}
   {/* Mapeamos los favoritos y renderizamos las mini tarjetas */}
   {favorites.length > 0 ? (
            favorites.map((carId) => (
              <Card key={carId} car={carId} cardFav={true} /> // cardFav renderiza la tarjeta en su formato pequeño
            ))
          ) : (
            <p>No tienes coches favoritos aún.</p>
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
