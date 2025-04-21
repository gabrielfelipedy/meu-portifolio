import React from "react";


const Presentation = () => {
  return (
    <div className="global-padding-x bg-mobile-position md:bg-position h-auto min-h-[100vh] bg-fixed relative overflow-hidden">

      <div className="absolute inset-0 bg-[linear-gradient(transparent_1%,white_65%)] md:bg-[linear-gradient(transparent_45%,white_95%)] dark:bg-[linear-gradient(transparent_1%,theme(colors.dark.100)_65%)] dark:md:bg-[linear-gradient(transparent_45%,theme(colors.dark.100)_95%)]"></div>

      <div className="max-container flex flex-col z-10 relative">
        <div className="md:w-7/12">
          <h1 className="font-title mt-96 md:mt-10 title-gradient dark:text-light-400">Gabriel Felipe</h1>
          <p className=" dark:text-slate-300 mt-5 font-monoglyphic text-2xl md:text-3xl md:w-10/12">
            Desenvolvedor de Software e Designer Gráfico
          </p>
        </div>

        <div className="md:w-5/12 mt-6 md:mt-20">
          <p className="font-section paragraph-space text-justify dark:text-light-800">
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
