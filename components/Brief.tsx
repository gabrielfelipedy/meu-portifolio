import React from "react";
import Image from "next/image";
import my_photo from "/public/assets/img/me.jpg";

const Brief = () => {
  return (
    <div className="global-padding-x global-padding-y">
      <div className="max-container">
        
        <div className="flex flex-col justify-center">
          <h2 className="font-subtitle font-bold mb-16">Apresentação</h2>

          <p className="font-section paragraph-space text-justify">
            Olá, muito prazer! Sou Gabriel Felipe, desenvolvedor web full-stack com experiência em
            design gráfico e desenvolvimento de software. Atualmente curso a
            faculdade de Ciência da Computação.
          </p>

          <p className="font-section paragraph-space text-justify">
            Utilizo meus conhecimentos e experiência adquiridos ao longo do
            tempo para oferecer soluções personalizadas para cada cliente de
            acordo com a sua necessidade pessoal.
          </p>

          <p className="font-section paragraph-space text-justify">
            Minha especialidade é criar interfaces modernas e responsivas
            utilizando as mais recentes tecnologias web como React, Next.js e
            Tailwind CSS. Da mesma maneira, utilizo tecnologias como NodeJS e 
            Express.JS para criar aplicação server-side de forma eficiente
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brief;
