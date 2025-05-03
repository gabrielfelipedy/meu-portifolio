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
import ImageGallery from "./ImageGallery";

const Projects = () => {
  return (
    <div className="global-padding-x bg-light-900 dark:bg-dark-400">
      <div className="max-container">

        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="mt-20 md:mt-52 mb-4"
          >
            <p className="text-light-700 dark:text-light-800 font-subtitle">
              Landing pages e sistemas web
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <h1 className="font-title pb-2 title-gradient dark:text-white">
              Projetos relevantes
            </h1>
          </motion.div>
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

        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="mt-20 md:mt-52 mb-4"
          >
            <p className="text-light-700 font-subtitle">
              Flyers, posters e anúncios
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <h1 className="font-title pb-2 title-gradient dark:text-white">
              Design Gráfico
            </h1>
          </motion.div>
        </div>

        <ImageGallery />
      </div>
    </div>
  );
};

export default Projects;
