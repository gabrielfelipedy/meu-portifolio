import React from "react";
import Image from "next/image";

import ImageAnimated from "./shared/ImageAnimated";
import { images } from "@/constants";

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-20 max-w-[1000px] mx-auto">
      <ImageAnimated
        src={images[0]?.src}
        alt={images[0]?.alt}
        ImageProps="w-[full] aspect-square object-cover"
      ></ImageAnimated>

      <ImageAnimated
        src={images[1]?.src}
        alt={images[1]?.alt}
        ImageProps="w-[full] aspect-square object-cover"
      ></ImageAnimated>

      <ImageAnimated
        src={images[2]?.src}
        alt={images[2]?.alt}
        ImageProps="w-[full] aspect-square object-cover"
      ></ImageAnimated>

      <ImageAnimated
        src={images[3]?.src}
        alt={images[3]?.alt}
        ImageProps="w-[full] aspect-square object-cover"
      ></ImageAnimated>
    </div>
  );
};

export default ImageGallery;
