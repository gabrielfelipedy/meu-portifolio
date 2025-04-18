import React from "react";
import Image from "next/image";
import my_photo from "/public/assets/img/me.jpg";

const Brief = () => {
  return (
    <div className="global-padding-x global-padding-y">
      <div className="max-container">
        <h2 className="font-subtitle mb-20">Apresentação</h2>

        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex flex-col justify-center">
            <p className="font-section paragraph-space text-justify">
              Sou Gabriel Felipe, desenvolvedor web full-stack com experiência
              em design gráfico e desenvolvimento de software. Atualmente curso
              a faculdade de Ciência da Computação.
            </p>

            <p className="font-section paragraph-space text-justify">
              Utilizo meus conhecimentos e experiência adquiridos ao longo do
              tempo para oferecer soluções personalizadas para cada cliente de
              acordo com a sua necessidade pessoal.
            </p>

            <p className="font-section paragraph-space text-justify">
              Minha especialidade é criar interfaces modernas e responsivas
              utilizando as mais recentes tecnologias web como React, Next.js e
              Tailwind CSS.
            </p>
          </div>

          <div className="flex justify-end">
            <div className="relative w-[500px] h-[650px] hidden md:block">
              <Image
                src={my_photo}
                alt="profile"
                layout="fill"
                className="object-cover object-center rounded-[2.5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brief;
