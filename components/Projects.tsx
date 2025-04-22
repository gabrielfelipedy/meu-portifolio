import React from "react";
import Image from "next/image";

import amparo from "/public/assets/img/amparo.png";
import camila from "/public/assets/img/camila-neiva.png";

import nextjs_icon from "/public/assets/icons/nextjs.svg";
import tailwindcss_icon from "/public/assets/icons/tailwindcss.svg";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Project from "./Project";
import ScrollApear from "./animations/ScrollApear";
import * as motion from "motion/react-client";

const Projects = () => {
  return (
    <div className="global-padding-x bg-slate-100 dark:bg-dark-300">
      <div className="max-container">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 5 }}
            viewport={{ once: true }}
          >
            <h1 className="font-title title-gradient dark:text-white mt-20 md:mt-52 mb-10 text-center">
              Meus projetos
            </h1>
          </motion.div>

          <div className="w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 5 }}
              viewport={{ once: true }}
            >
              <p className="text-light-700 font-subtitle text-center">
                Aqui você encontrará meus projetos mais relevantes
              </p>
            </motion.div>
          </div>
        </div>

        <Project
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
          name="Landing Page Dra. Camila Neiva"
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
      </div>
    </div>
  );
};

export default Projects;
