"use client"; // <--- Add this directive at the very top

import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion"; // AnimatePresence isn't used here, so removed for now;

interface props {
  src: StaticImageData;
  alt: string;
  className?: string;
  ImageProps : string;
}

const ImageAnimated = (props: props) => {
  return (
    // You might want animation props on this motion.div later
    <motion.div className={`${props.className}`}>
      {/* The parent div needs position: relative for fill={true} to work */}

      <Image
        src={props.src}
        alt={props.alt}
        className={`rounded-[0.75rem] ${props.ImageProps}`}
      />
    </motion.div>
  );
};

export default ImageAnimated;
