"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

interface props {
  id: number;
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
  const container = useRef<HTMLElement | any>();

  useGSAP(
    () => {
      gsap.to(`.project-name-${props.id}`, {
        scrollTrigger: `.project-name-${props.id}`,
        opacity: 1,
        duration: 2.5,
      });

      gsap.to(`.project-date-${props.id}`, {
        scrollTrigger: `.project-date-${props.id}`,
        opacity: 1,
        duration: 2.5,
        delay: 0.25,
      });

      gsap.to(`.image-${props.id}`, {
        scrollTrigger: `.image-${props.id}`,
        opacity: 1,
        duration: 2.5,
        delay: 0.3,
      });

      gsap.to(`.description-${props.id}`, {
        scrollTrigger: `.description-${props.id}`,
        opacity: 1,
        duration: 2.5,
        delay: 0.3,
      });
    },
    { scope: container }
  );

  return (
    <div className="mt-32" ref={container}>
      <div className="flex flex-col items-center">
        <p
          className={`project-name-${props.id} text-center font-subtitle opacity-0 mt-10 font-bold dark:text-white`}
        >
          {props.name}
        </p>

        <p
          className={`project-date-${props.id} text-center tracking-widest font-small opacity-0 text-gray-600 dark:text-slate-400`}
        >
          {props.date}
        </p>
      </div>

      <div className="flex items-center flex-col md:flex-row mt-20 gap-5">
        <Image
          src={props.image_src}
          alt="instagram"
          className={`rounded-lg img-hover w-full md:w-[500px] lg:w-[750px] xl:w-[1250px] opacity-0 image-${props.id}`}
        />

        <div className={`flex flex-col description-${props.id} opacity-0 justify-center mb-32`}>
          <p className="font-section mt-10 dark:text-white">
            {props.description}
          </p>

          <p className="font-small font-bold mt-10 dark:text-slate-200">
            Tecnologias utilizadas
          </p>

          <div className="mt-5 flex flex-wrap gap-5">
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

          <Button
            asChild
            className="font-small dark:text-dark-200 dark:bg-light-900 py-6 border-2 mt-10 md:max-w-[200px] w-full"
          >
            <Link href={props.project_url} target="_blank">
              Visitar site
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Project;
