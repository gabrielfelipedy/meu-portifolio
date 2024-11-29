"use client"

import React from "react";
import { useState } from "react";
import menu from '/public/assets/icons/menu.svg'
import Image from "next/image";

const Navbar = () => {

    const [isClicked, setClicked] = useState(false)

  const toggleNavBar = () => {
    setClicked(!isClicked)
  };

  return (
    <nav className="bg-black global-padding-x">
      <div className="max-container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-white">
                Gabriel Felipe
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a
                href="/"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Início
              </a>
              <a
                href="/"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Projetos
              </a>
              <a
                href="/"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Orçamentos
              </a>
              <a
                href="/"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Fale comigo
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavBar}
            >
                <Image 
                
                    src={menu}
                    alt="menu_button"
                    width={30}
                    height={30}
                />
            </button>
          </div>
        </div>
      </div>

      {isClicked && (
        <div className="md:hidden ">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                    href="/"
                    className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                >
                    Início
                </a>
                <a
                    href="/"
                    className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                >
                    Projetos
                </a>
                <a
                    href="/"
                    className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                >
                    Orçamentos
                </a>
                <a
                    href="/"
                    className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                >
                    Fale comigo
                </a>
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
