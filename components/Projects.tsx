"use client";

import React, { useRef } from "react";
import Image from "next/image";

import amparo from "/public/assets/img/amparo.png";
import camila from "/public/assets/img/camila-neiva.png";

import nextjs_icon from "/public/assets/icons/nextjs.svg";
import tailwindcss_icon from "/public/assets/icons/tailwindcss.svg";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Project from "./Project";
import ImageGallery from "./ImageGallery";

import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const Projects = () => {
  const container = useRef<HTMLElement | any>();

  useGSAP(
    () => {
      gsap.to(`.landing-pages`, {
        scrollTrigger: `.landing-pages`,
        opacity: 1,
        duration: 0.75,
        delay: 0.1,
      });
    },
    { scope: container }
  );

  return (
    <div
      className=" bg-light-900 dark:bg-dark-400 max-container"
      ref={container}
    >
      <div className="flex flex-col landing-pages opacity-0">
        <p className="dark:text-light-800 font-small tracking-widest">
          LANDING PAGES
        </p>

        <h1 className="font-title pb-2 title-gradient dark:text-light-400">
          Projetos relevantes
        </h1>
      </div>

      <Project
        id={1}
        name="Instituto Amparo"
        date="31 de Setembro de 2024 - Agora"
        image_src={amparo}
        description="Uma Landing Page feita para o Instituto Amparo, um centro de tratamento e de saúde mental."
        tech_icons={[
          {
            source: nextjs_icon,
            description: "NextJS",
          },
          { source: tailwindcss_icon, description: "TailwindCSS" },
        ]}
        project_url="https://lp-institutoamparo.vercel.app"
      />

      <Project
        id={2}
        name="Dra. Camila Neiva"
        date="31 de Setembro de 2024 - Agora"
        image_src={camila}
        description="Uma Landing Page criada para a Dra. Camila Neiva divulgar seu trabalho na área da Psicologia e da Psiquiatria."
        tech_icons={[
          {
            source: nextjs_icon,
            description: "NextJS",
          },
          { source: tailwindcss_icon, description: "TailwindCSS" },
        ]}
        project_url="https://lp-camilaneiva.vercel.app"
      />

      {/* <div className="flex flex-col">
          <p className="text-light-700 font-subtitle">
            Flyers, posters e anúncios
          </p>

          <h1 className="font-title pb-2 title-gradient dark:text-white">
            Design Gráfico
          </h1>
        </div> */}

      {/* <ImageGallery /> */}
    </div>
  );
};

export default Projects;
