import React from "react";
import Image from "next/image";

import model from "/public/assets/img/model.jpg";
import gaby from "/public/assets/img/gabysite.png";
import amparo from "/public/assets/img/instituto-amparo.png";
import camila from "/public/assets/img/camila-neiva.png";
import calculadora_ebtt from "/public/assets/img/calculadora-ebtt.png";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Projects = () => {
  return (
    <div className="global-padding-x global-padding-y">
      <div className="max-container">
        <div className="flex flex-col items-center mt-20">
          <h1 className="font-title mb-10 text-center">Meus projetos</h1>

          <p className="text-slate-500 text-2xl md:text-3xl text-center w-6/12">
            Aqui você encontrará projetos que já fiz para diversos públicos e
            clientes
          </p>
        </div>

        <div className="mt-40 ">
          <div className="rounded-lg p-4">
            <div className="flex flex-col items-center">
              <div className="container-size">
                <p className="font-section mt-10 font-bold">Gabrielle Franzotti Site</p>
                <p className="font-small text-gray-600">
                  31 de Março de 2025 - Agora
                </p>

                <p className="font-section mt-10">
                  Uma Landing Page criada para divulgar presets para o
                  aplicativo Adobe Lightroom criados pela digital influencer
                  Gabrielle Franzotti
                </p>
              </div>

              <div className="relative img-size">
                <Image
                  src={gaby}
                  alt="instagram"
                  layout="fill"
                  className="object-contain object-center rounded-lg img-hover"
                />
              </div>

              <div className="container-size">
                <div className="mt-5 flex gap-5">
                  <Badge>AngularJS</Badge>
                </div>

                <Button className="text-xl p-7 flex items-center gap-2 mt-10">
                  Visitar site
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-lg p-4">
            <div className="flex flex-col items-center">
              <div className="container-size">
                <p className="font-section mt-10 font-bold">Calculadora EBTT</p>
                <p className="font-small text-gray-600">
                  31 de Março de 2025 - Agora
                </p>

                <p className="font-section mt-10">
                  Um sistema web projetado para calcular com precisão os
                  salários dos professores servidore públicos inseridos na
                  carreira EBTT.
                </p>
              </div>

              <div className="relative img-size">
                <Image
                  src={calculadora_ebtt}
                  alt="instagram"
                  layout="fill"
                  className="object-contain object-center rounded img-hover"
                />
              </div>

              <div className="container-size">
                <div className="mt-5 flex gap-5">
                  <Badge>AngularJS</Badge>
                  <Badge>.NET</Badge>
                  <Badge>Postgresql</Badge>
                </div>

                <Button className="text-xl p-7 flex items-center gap-2 mt-10">
                  Visitar site
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-lg p-4">
            <div className="flex flex-col items-center">
              <div className="container-size">
                <p className="font-section mt-10 font-bold">Instituto Amparo</p>
                <p className="font-small text-gray-600">
                  31 de Setembro de 2024 - Agora
                </p>

                <p className="font-section mt-10">
                  Uma Landing Page feita para o Instituto Amparo, um centro de
                  tratamento e de saúde mental.
                </p>
              </div>

              <div className="relative img-size">
                <Image
                  src={amparo}
                  alt="instagram"
                  layout="fill"
                  className="object-contain object-center rounded-lg img-hover"
                />
              </div>

              <div className="container-size">
                <div className="mt-5 flex gap-5">
                  <Badge>NextJS</Badge>
                  <Badge>TailwindCSS</Badge>
                </div>

                <Button className="text-xl p-7 flex items-center gap-2 mt-10">
                  Visitar site
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-lg p-4">
            <div className="flex flex-col items-center">
              <div className="container-size">
                <p className="font-section mt-10 font-bold">
                  Landing Page Dra. Camila Neiva
                </p>
                <p className="font-small text-gray-600">
                  31 de Setembro de 2024 - Agora
                </p>

                <p className="font-section mt-10">
                  Uma Landing Page criada para a Dra. Camila Neiva divulgar seu
                  trabalho na área da Psicologia e da Psiquiatria.
                </p>
              </div>

              <div className="relative img-size">
                <Image
                  src={camila}
                  alt="instagram"
                  layout="fill"
                  className="object-contain object-center rounded-[2rem] img-hover"
                />
              </div>

              <div className="container-size">
                <div className="mt-5 flex gap-5">
                  <Badge>NextJS</Badge>
                  <Badge>TailwindCSS</Badge>
                </div>

                <Button className="text-xl p-7 flex items-center gap-2 mt-10">
                  Visitar site
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
