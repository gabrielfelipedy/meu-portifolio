import React from "react";
import Image from "next/image";

import img_profile from "/public/assets/img/me-no-background.png";

const Presentation = () => {
  return (
    <div className="global-padding-x bg-mobile-position md:bg-position h-auto min-h-[100vh] bg-fixed relative overflow-hidden dark:bg-dark-300">

      <div className="absolute inset-0 bg-[linear-gradient(transparent_1%,white_65%)] md:bg-[linear-gradient(transparent_45%,white_95%)] dark:hidden"></div>

      <div className="max-container flex flex-col z-10 relative">
        <div className="md:w-7/12">
          <h1 className="font-title mt-72 md:mt-10">Gabriel Felipe</h1>
          <p className="md:text-slate-500 mt-5 font-monoglyphic text-2xl md:text-3xl md:w-10/12">
            Desenvolvedor de Software e Designer Gráfico
          </p>
        </div>

        <div className="md:w-5/12 mt-6 md:mt-20">
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
