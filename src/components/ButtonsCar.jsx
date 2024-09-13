import Link from "next/link";
import React from 'react'

const ButtonsCar = ({ text, style,link,action,}) => {
  
    
const linkPath = link || '#'
 
switch (style) {
  case "black":
    return  <Link href={linkPath} onClick={action}  className="flex items-center text-center py-3 px-6 min-h-[40px] justify-center max-w-fit text-white rounded font-semibold text-sm leading-4 bg-[#32363A]">{text}</Link>;
  case "miniBlack":
    return  <Link href={linkPath} onClick={action}  className="flex items-center text-center py-1 px-4 min-h-[40px] justify-center max-w-fit text-white rounded font-normal text-sm leading-4 bg-[#32363A] ">{text}</Link>;
  default:
    return <Link href={linkPath} onClick={action} className="flex justify-center text-center items-center bg-transparent text-[#2A5B45] py-3  rounded">{text}</Link>;
}


  
}

export default ButtonsCar