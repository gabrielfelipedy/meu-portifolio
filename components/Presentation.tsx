import React from "react";
import Image from "next/image";

import img_profile from "/public/assets/img/profile.jpg";

const Presentation = () => {
  return (
    <div className="global-padding-x global-padding-y">
      <div className="center max-container">
        <div className="relative w-[300px] h-[300px]">
          <Image
            src={img_profile}
            alt="profile"
            layout="fill"
            className="object-cover object-center rounded-full"
          />
        </div>

        <div className="flex flex-col items-center w-full">
          <h1 className="font-title mb-10 text-center">Gabriel Felipe</h1>
          <p className="text-slate-500 text-2xl md:text-3xl">
            Portifólio de desenvolvedor
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
