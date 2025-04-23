import React from "react";
import FadeOnScroll from "./animations/FadeOnScroll";

const Presentation = () => {
  return (
    <div className="flex global-padding-x min-w-[375px] min-h-[667px] md:min-h-[400px] lg:min-h-[95vh] relative overflow-hidden">
      
      <FadeOnScroll>
        <div className="bg-position md:md-bg-position lg:lg-bg-position"></div>
      </FadeOnScroll>

      <div className="absolute inset-0 bg-[linear-gradient(transparent_1%,theme(colors.light.900)_65%)] md:bg-[linear-gradient(transparent_45%,theme(colors.light.900)_95%)] dark:bg-[linear-gradient(transparent_1%,theme(colors.dark.400)_65%)] dark:md:bg-[linear-gradient(transparent_45%,theme(colors.dark.400)_95%)]"></div>

      <div className="max-container flex flex-col z-10 relative">

        <div className="mt-auto mb-10">
        <div className="md:w-7/12">
          <h1 className="font-title mt-72 md:mt-10 lg:mt-32 text-light-400">
            Gabriel Felipe
          </h1>

          <p className=" dark:text-slate-300 mt-5 font-monoglyphic text-2xl lg:text-3xl md:w-10/12">
            Desenvolvedor de Software
          </p>
          <p className=" dark:text-slate-300 font-monoglyphic text-2xl lg:text-3xl md:w-10/12">
            Designer Gráfico
          </p>
        </div>

        <div className="md:w-6/12 lg:w-6/12 mt-6 md:mt-8 lg:mt-20">
          <p className="font-section paragraph-space dark:text-light-800">
            Olá, muito prazer! Sou Gabriel Felipe, sou Desenvolvedor de Software
            e Designer gráfico. Utilizo meus conhecimentos e experiência para
            oferecer soluções personalizadas para você.
          </p>
        </div>
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
