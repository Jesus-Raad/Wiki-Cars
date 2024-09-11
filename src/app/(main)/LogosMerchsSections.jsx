"use client"
import Image from 'next/image'
import React from 'react'

const LogosMerchsSections = () => {
    const logo=["/img/Audi-logo.png","/img/BMWLOGO.png","/img/fordLogo.png","/img/hondaLogo.png","/img/HyundaiLogo.png","/img/mercedesLogo.png","/img/NissanLogo.png","/img/toyotaLogo.png","/img/volkswagenLogo.png"]
  return (
    <div className='flex justify-center gap-5 my-3'>
     {logo.map((merch)=>{
        return(
            <Image
            
            width={25}
            height={50}
            src={merch}
            alt={"logo"}
            sizes=" (max-width: 100px) 50vw, 25vw"
            objectFit="cover"
          />
        )
     })}
    </div>
  )
}

export default LogosMerchsSections