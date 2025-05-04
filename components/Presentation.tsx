"use client";

import React, { useRef } from "react";

import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, SplitText);
}

const Presentation = () => {
  const container = useRef<HTMLElement | any>();
  const name = useRef<HTMLElement | any>();
  const rolling = useRef<HTMLElement | any>();
  const description = useRef<HTMLElement | any>();

  useGSAP(
    () => {
      const name_split = new SplitText(name.current, {
        type: "lines",
        linesClass: "line",
      });

      gsap.from(name_split.lines, {
        y: 10,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power3.out",
      });

      const rolling_split = new SplitText(rolling.current, {
        type: "lines",
        linesClass: "line",
      });

      gsap.from(rolling_split.lines, {
        y: 10,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power3.out",
      });

      const description_split = new SplitText(description.current, {
        type: "lines",
        linesClass: "line",
      });

      gsap.from(description_split.lines, {
        y: 10,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power3.out",
      });

      return () => {
        name_split.revert();
        rolling_split.revert();
        description_split.revert();
      };
    },
    { scope: container }
  );

  return (
    <div
      className="flex items-center justify-center min-h-[95vh] relative overflow-hidden max-container"
      ref={container}
    >
      <div
        className="flex flex-col items-centertext-center p-5 rounded-[0.75rem] max-w-[800px]"
        ref={name}
      >
        <p className="dark:text-light-800 font-small tracking-widest my-name">
          GABRIEL FELIPE
        </p>
        <div
          className="font-title font-bold text-light-400 text-wrap my-rolling"
          ref={rolling}
        >
          Desenvolvedor de Software e Designer Gráfico
        </div>

        <div className="mt-10"></div>

        <div
          className="font-section text-wrap description dark:text-light-800"
          ref={description}
        >
          Olá, muito prazer! Sou Gabriel Felipe, sou Desenvolvedor de Software e
          Designer gráfico. Utilizo meus conhecimentos e experiência para
          oferecer soluções personalizadas para você.
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
  );
};

export default Presentation;
