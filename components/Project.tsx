import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

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
    <div className="mt-12 scroll-animation">
      <div className="flex flex-col items-center">
        <p className="font-section mt-10 font-bold">{props.name}</p>
        <p className="font-small text-gray-600">{props.date}</p>
      </div>

      <div className="flex items-center flex-col lg:flex-row">
        <div className="relative lg:basis-3/5 img-size">
          <Image
            src={props.image_src}
            alt="instagram"
            layout="fill"
            className="object-contain object-center rounded-lg img-hover flex-shrink-0"
          />
        </div>

        <div className="lg:basis-2/5 flex flex-col justify-center mb-32">
          <p className="font-section mt-10">
            Uma Landing Page feita para o Instituto Amparo, um centro de
            tratamento e de saúde mental.
          </p>

          <p className="font-small font-bold mt-10">Tecnologias utilizadas</p>

          <div className="mt-5 flex gap-5">
            {props.tech_icons.map((tech_badge) => {
              return (
                <div 
                key={tech_badge.description}
                className="flex items-center gap-2 border-2 border-slate-400 p-2 rounded-lg dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-dark-400">
                  <Image
                    src={tech_badge.source} // or a remote URL
                    alt="image"
                    className="w-6 object-contain"
                  />
                  <span>{tech_badge.description}</span>
                </div>
              );
            })}
          </div>

          <Link href={props.project_url} target="_blank">
          <Button className="text-xl p-7 flex items-center gap-2 mt-10 w-full sm:w-[150px]">
            Visitar site
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
