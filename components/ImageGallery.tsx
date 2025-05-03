import React from "react";
import Image from "next/image";

import delicia_chopp from "/public/assets/img/design/delicia_chopp/Cardápio - Frente.png";
import banner_pai from "/public/assets/img/design/banner_pai.jpg";
import churrascaria from "/public/assets/img/design/flyer_churrascaria.png";
import manancial from "/public/assets/img/design/MANANCIAL-03-05-FEED.png";
import ImageAnimated from "./shared/ImageAnimated";

const ImageGallery = () => {
  
  return (
    <div className="flex gap-4 mt-20 max-w-[1000px] mx-auto">

      <div className="w-full">
        
        <ImageAnimated></ImageAnimated>

        <div className="relative aspect-square w-full mt-4">
          <Image
            src={delicia_chopp}
            alt="delicia_chopp"
            className="object-contain object-center rounded-[0.75rem]"
            layout="fill"
          />
        </div>
      </div>

      <div className="w-full">
        <div className="relative aspect-video w-full">
          <Image
            src={banner_pai}
            alt="banner_pai"
            className="object-cover object-center rounded-[0.75rem]"
            layout="fill"
          />
        </div>

        <div className="relative aspect-[4/5] w-full mt-4">
          <Image
            src={churrascaria}
            alt="churrascaria"
            className="object-cover object-center rounded-[0.75rem]"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
