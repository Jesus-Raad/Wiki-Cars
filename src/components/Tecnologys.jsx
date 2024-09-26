import Image from "next/image";
import React from "react";

const Tecnologys = () => {
  return (
    <div className="flex gap-6 p-8 bg-white border-4 border-red-500 min-w-10 min-h-10 m-auto">
      <Image width={100} height={110} src={`/img/github..png`}/>
      <Image width={40} height={40} src={`/img/hyperui.png`}/>
      <Image width={90} height={40} src={`/img/kinde.png`}/>
      <Image width={100} height={40} src={`/img/lucide.png`}/>
      <Image width={120} height={40} src={`/img/mongoDB.png`}/>
      <Image width={100} height={40} src={`/img/next.png`}/>
      <Image width={100} height={40} src={`/img/shadcn.png`}/>
      <Image width={100} height={40} src={`/img/tailwind.png`}/>
      <Image className="bg-black rounded px-2" width={90} height={40} src={`/img/vercel.svg`}/>
    </div>
  );
};

export default Tecnologys;
