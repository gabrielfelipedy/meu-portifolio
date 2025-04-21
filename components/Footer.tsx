import React from "react";
import Image from "next/image";
import Link from "next/link";

import facebook from "/public/assets/icons/facebook.svg";
import github from "/public/assets/icons/github.svg";
import instagram from "/public/assets/icons/instagram.svg";
import linkedin from "/public/assets/icons/linkedin.svg";
import ContactForm from "./ContactForm";

interface props
{
  className?: string;
}

const Footer = (props: props) => {
  return (
    <footer id="contact" className={`global-padding-x global-padding-y bg-white dark:bg-dark-400 h-auto min-h-[100vh] ${props.className}`}>
      <div className="max-container">
        <div className="flex flex-col items-center">

          <div className="mt-36 w-full flex flex-col md:flex-row md:justify-evenly md:items-center">

            <div className="text-wrap break-words text-center md:text-left leading-none md:basis-6/12">
              <p className="font-title font-extrabold dark:text-white">VAMOS INOVAR</p>
              <p className="font-title text-slate-400 font-extrabold">
                JUNTOS!
              </p>
            </div>

            <div className="md:basis-6/12 mt-12 md:mt-0">
              <ContactForm />
            </div>
          </div>

          <p className="font-subtitle font-bold text-center mt-64 text-gray-600 dark:text-slate-300">
            Me siga nas minhas redes
          </p>

          <div className="flex gap-x-8 mt-20 mb-20">
            <span className="relative w-[50px] h-[50px]">
              <Link
                href={"https://www.facebook.com/gabrielfelipedev"}
                target="_blank"
              >
                <Image
                  src={facebook}
                  alt="facebook"
                  layout="fill"
                  className="object-cover object-center opacity-50"
                />
              </Link>
            </span>

            <span className="relative w-[50px] h-[50px]">
              <Link
                href={"http://instagram.com/gabrielfelipedev"}
                target="_blank"
              >
                <Image
                  src={instagram}
                  alt="instagram"
                  layout="fill"
                  className="object-cover object-center opacity-50"
                />
              </Link>
            </span>
            <span className="relative w-[50px] h-[50px]">
              <Link href={"http://github.com/gabrielfelipedy"} target="_blank">
                <Image
                  src={github}
                  alt="github"
                  layout="fill"
                  className="object-cover object-center opacity-50"
                />
              </Link>
            </span>
            <span className="relative w-[50px] h-[50px]">
              <Link
                href={"http://linkedin.com/in/gabrielfelipedy"}
                target="_blank"
              >
                <Image
                  src={linkedin}
                  alt="linkedin"
                  layout="fill"
                  className="object-cover object-center opacity-50"
                />
              </Link>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
