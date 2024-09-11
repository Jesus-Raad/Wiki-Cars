import Link from "next/link";
import React from 'react'

const ButtonsCar = ({ text, style,link,action,}) => {
  
    
const linkPath = link || '#'
 
switch (style) {
  case "black":
    return  <Link href={linkPath} onClick={action}  className="flex items-center text-center py-3 px-6 min-h-[40px] justify-center max-w-fit text-white rounded font-semibold text-sm leading-4 bg-[#32363A] -z-10">{text}</Link>;
  case "miniBlack":
    return  <Link href={linkPath} onClick={action}  className="flex items-center text-center py-1 px-4 min-h-[40px] justify-center max-w-fit text-white rounded font-normal text-sm leading-4 bg-[#32363A] -z-10">{text}</Link>;
  case "green":
    return <Link href={linkPath}  onClick={action} className="flex items-center text-center py-3 px-6 min-h-[40px] justify-center max-w-fit text-white rounded font-semibold text-sm leading-4 bg-[#2a5b45]">{text}</Link>; 
  case "greenBlock":
    return <button   onClick={action} className="flex items-center text-center py-3 px-6 min-h-[40px] justify-center max-w-fit  text-white rounded opacity-30 font-semibold text-sm leading-4 bg-[#2a5b45]">{text}</button>; 
  case "greenSmall":
    return <Link href={linkPath} onClick={action} className="flex justify-center items-center min-w-[60px] min-h-[32px] text-[white] rounded text-sm font-semibold leading-4 bg-[#2a5b45b2]  group-hover:bg-[#2a5b45] group-hover:cursor-pointer">{text}</Link>; 
  case "agotado":
    return <button  disabled onClick={action} className="flex justify-center items-center min-w-[72px] min-h-[32px] text-[white] rounded text-sm font-semibold leading-4 bg-[#E3DED7] ">{text}</button>; 
  case "gray":
    return <Link href={linkPath} onClick={action} className="flex py-3 px-6 min-h-[40px] justify-center rounded text-center items-center no-underline bg-[#515051] text-sm  font-semibold leading-4 text-[white]">{text}</Link>;
  default:
    return <Link href={linkPath} onClick={action} className="flex justify-center text-center items-center bg-transparent text-[#2A5B45] py-3  rounded">{text}</Link>;
}


  
}

export default ButtonsCar