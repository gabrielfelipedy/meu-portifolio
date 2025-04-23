import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import ScrollApear from "./animations/ScrollApear";
// import { motion } from "motion/react"
import * as motion from "motion/react-client";

interface props {
  name: string;
  date: string;
  image_src: StaticImageData;
  description: string;
  tech_icons: {
    source: StaticImageData;
    description: string;
  }[];
  project_url: string;
}

const Project = (props: props) => {
  return (
    <div className="mt-32 md:mt-64">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <p className="font-subtitle mt-10 font-bold dark:text-white">
            {props.name}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <p className="font-section text-gray-600 dark:text-slate-400">
            {props.date}
          </p>
        </motion.div>
      </div>

      <div className="flex items-center flex-col md:flex-row mt-20 gap-5">
        <ScrollApear>
          <div className="relative md:basis-6/12 img-size">
            <Image
              src={props.image_src}
              alt="instagram"
              layout="fill"
              className="object-contain object-center rounded-lg img-hover flex-shrink-0"
            />
          </div>
        </ScrollApear>

        <ScrollApear>
          <div className="md:basis-6/12 flex flex-col justify-center mb-32">
            <p className="font-section mt-10 dark:text-white">
              {props.description}
            </p>

            <p className="font-small font-bold mt-10 dark:text-slate-200">
              Tecnologias utilizadas
            </p>

            <div className="mt-5 flex gap-5">
              {props.tech_icons.map((tech_badge) => {
                return (
                  <div
                    key={tech_badge.description}
                    className="flex items-center gap-2 border-[1px] dark:border-dark-100 border-slate-400 p-2 rounded-lg dark:bg-dark-500 hover:bg-slate-200 dark:hover:bg-dark-400"
                  >
                    <Image
                      src={tech_badge.source} // or a remote URL
                      alt="image"
                      className="w-6 object-contain"
                    />
                    <span className="dark:text-slate-200">
                      {tech_badge.description}
                    </span>
                  </div>
                );
              })}
            </div>

            <motion.div
              className="inline-block w-full md:w-[150px]"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={props.project_url} target="_blank">
                <Button className="font-small dark:text-dark-200 dark:bg-light-900 py-6 border-2 flex items-center gap-2 mt-10 w-full">
                  Visitar site
                </Button>
              </Link>
            </motion.div>
          </div>
        </ScrollApear>
      </div>
    </div>
  );
};

export default Project;
