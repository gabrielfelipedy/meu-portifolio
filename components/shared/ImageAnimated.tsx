"use client"; // <--- Add this directive at the very top

import Image, { StaticImageData } from "next/image";
import React from "react";

interface props {
  src: StaticImageData;
  alt: string;
  className?: string;
  ImageProps: string;
}

const ImageAnimated = (props: props) => {
  return (
    <>
      <Image
        src={props.src}
        alt={props.alt}
        className={`rounded-[0.75rem] ${props.ImageProps}`}
      />
    </>
  );
};

export default ImageAnimated;
