import React from "react";
import Image from "next/image";

import model_img from "/public/assets/img/model.jpg";

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
      <Image src={model_img} alt="model_img" className="rounded-[0.75rem]" />

      <Image src={model_img} alt="model_img" className="rounded-[0.75rem]" />

      <Image src={model_img} alt="model_img" className="rounded-[0.75rem]" />

      <Image src={model_img} alt="model_img" className="rounded-[0.75rem]" />
    </div>
  );
};

export default ImageGallery;
