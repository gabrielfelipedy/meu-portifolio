"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeProvider";

import symbol_light from "/public/assets/logos/symbol-light.png";
import symbol_dark from "/public/assets/logos/symbol-dark.png";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggler from "./ThemeToggler";
import Image from "next/image";

import * as motion from "motion/react-client";

const navItems = [
  { name: "Início", href: "#home" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState(navItems[0]);
  const { mode, setMode } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full bg-white supports-[backdrop-filter]:bg-background/60 dark:bg-dark-100 dark:supports-[backdrop-filter]:bg-dark-100/60 backdrop-blur">
      <div className="global-padding-x global-padding-y">
        <div className="max-container flex h-8 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="#home"
              className="font-semibold monoglyphic text-lg dark:text-white"
            >
              <Image
                src={mode === "light" ? symbol_light : symbol_dark}
                alt="Logo light"
                width={30}
                height={30}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                initial={false}
                className="relative list-none"
                onClick={() => setSelectedTab(item)}
              >
                <div className="relative">
                  {item.name === selectedTab.name && (
                    <motion.div
                      layoutId="background-highlight"
                      className="absolute inset-0 bg-slate-200 dark:bg-dark-500 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  <Link
                    href={item.href}
                    className="relative z-10 block text-sm text-light-500 dark:text-white font-medium transition-colors rounded-lg p-3"
                  >
                    {item.name}
                  </Link>
                </div>
              </motion.li>
            ))}
          </nav>

          <div className="flex items-center ml-auto md:ml-0">
            <ThemeToggler />
            {/* <p>language</p> */}
          </div>

          {/* Menu Icon to open sidebar */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="default"
                size="icon"
                className="h-9 w-9 bg-transparent hover:bg-light-800 dark:hover:bg-dark-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 fill-black dark:fill-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </SheetTrigger>

            {/* SideBar */}
            <SheetContent
              side="left"
              className="w-[250px] sm:w-[300px] dark:bg-dark-100 dark:text-light-900"
            >
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="font-semibold monoglyphic text-lg mb-4 px-5 py-3"
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    src={mode === "light" ? symbol_light : symbol_dark}
                    alt="Logo light"
                    width={30}
                    height={30}
                  />
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-small rounded-lg transition-colors hover:bg-light-500 px-5 py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
