"use client"
import React from "react";
import Logo from "./Logo";
import { ArrowRightLeft, Search, Star, User } from "lucide-react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
  return (
    <nav className="flex w-screen px-4 py-2 justify-between fixed z-50 ">
      <div className=" flex justify-between w-screen rounded-xl h-[55px] bg-gray-400/80 px-2">
       <Logo width={65} height={56}/>
        <div className="flex items-center  gap-2">
        <Star color="#ffffff" />
        <ArrowRightLeft color="#ffffff" />
        <Search color="#ffffff" />
        <LoginLink><User color="#ffffff"/></LoginLink> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
