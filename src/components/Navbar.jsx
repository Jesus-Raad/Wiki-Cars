import Image from "next/image";
import React from "react";
import Logo from "./Logo";
import { ArrowRightLeft, Search, Star } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex w-screen px-4 py-2 justify-between fixed ">
      <div className=" flex justify-between w-screen  z-50 rounded-xl h-[55px] bg-white/80 px-2">
       <Logo/>
        <div className="flex items-center gap-2">
        <Star color="#000000" />
        <ArrowRightLeft color="#000000" />
        <Search color="#000000" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
