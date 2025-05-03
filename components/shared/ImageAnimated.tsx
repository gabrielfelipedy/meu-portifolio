"use client"; // <--- Add this directive at the very top

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // AnimatePresence isn't used here, so removed for now
import manancial from "/public/assets/img/design/MANANCIAL-03-05-FEED.png";

const ImageAnimated = () => {
  return (
    // You might want animation props on this motion.div later
    <motion.div>
      {/* The parent div needs position: relative for fill={true} to work */}
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={manancial}
          alt="manancial"
          className="object-cover object-center rounded-[0.75rem]"
          // layout="fill" // Deprecated
          fill // Use the boolean 'fill' prop instead
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add sizes prop for optimization
          priority // Consider adding if the image is above the fold
        />
      </div>
    </motion.div>
  );
};

export default ImageAnimated;