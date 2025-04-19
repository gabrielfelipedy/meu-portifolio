import React from "react";
import Image from "next/image";

import img_profile from "/public/assets/img/me-no-background.png";

const Presentation = () => {
  return (
    <div className="global-padding-x bg-hero bg-cover sm:bg-contain bg-no-repeat h-[800px] bg-fixed bg-mobile-position sm:bg-position relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>

      <div className="max-container flex flex-col z-10 relative">
        <div className="sm:w-7/12">
          <h1 className="font-title mt-96 sm:mt-10">Gabriel Felipe</h1>
          <p className="sm:text-slate-500 mt-5 font-monoglyphic text-2xl sm:text-3xl sm:w-10/12">
            Desenvolvedor de Software e Designer Gráfico
          </p>
        </div>

        <div className="sm:w-5/12 mt-6 sm:mt-20">
          <p className="font-section paragraph-space text-justify">
            Olá, muito prazer! Sou Gabriel Felipe, sou Desenvolvedor de Software
            e Designer gráfico. Utilizo meus conhecimentos e experiência para
            oferecer soluções personalizadas para você.
          </p>
        </div>

        {/* <div className="relative w-[200px] h-[200px] md:w-[600px] md:h-[700px]">
          <Image
            src={img_profile}
            alt="profile"
            layout="fill"
            className="object-cover object-center"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Presentation;
