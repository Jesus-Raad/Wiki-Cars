"use client";
import React, { useContext } from "react";
import Logo from "./Logo";
import { LogOut, MenuIcon, Search } from "lucide-react";
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

const Navbar = () => {
  const { isAuthenticated } = useKindeBrowserClient();

  const { user, getUser } = useKindeBrowserClient();
  const alsoUser = getUser();
console.log(user);

  const {
    visibleMenuCondition,
    setVisibleMenuCondition,
    IsSearchSection,
    setIsSearchSection,
  } = useContext(WikiCars);

  const handleMenuVisible = () => {
    if (visibleMenuCondition === true) {
      setVisibleMenuCondition(false);
    } else {
      setVisibleMenuCondition(true);
      setIsSearchSection(false);
    }
  };

  const handleSearchSectionVisible = () => {
    if (IsSearchSection === true) {
      setIsSearchSection(false);
    } else {
      setVisibleMenuCondition(false);
      setIsSearchSection(true);
    }
  };

  return (
    <nav className="bg-white fixed z-50 top-0 w-screen shadow-xl">
      <div className=" w-screen px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
          <Link href={"/"}><Logo width={65} height={56} darck={true} /></Link> 
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <div
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    <Search
                      onClick={handleSearchSectionVisible}
                      color="#6b7280"
                    />{" "}
                  </div>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/carsComparator"
                  >
                    {" "}
                    Comparador{" "}
                  </Link>
                </li>

                <li>
                  <div
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Favoritos
                  </div>
                </li>

                <li>
                  <div
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Contacto{" "}
                  </div>
                </li>
                {user && (
                  <li>
                    <div
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      <LogoutLink>
                        <LogOut color="#6b7280" />
                      </LogoutLink>{" "}
                    </div>
                  </li>
                )}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                {!isAuthenticated ? (
                  <LoginLink>
                    <button className="flex items-center text-center py-1 px-4 min-h-[40px] justify-center max-w-fit text-white rounded font-normal text-sm leading-4 bg-[#6b7280] ">
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
                <MenuIcon onClick={handleMenuVisible} color="#6b7280" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SearcFilter />
      <MenuOptions action={handleSearchSectionVisible} />
    </nav>
  );
};

export default Navbar;
