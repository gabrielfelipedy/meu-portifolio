"use client";

import React from "react";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import { themes } from "@/constants";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const ThemeToggler = ({ className = "" }) => {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className={`relative
     border-none bg-transparent shadow-none ${className}`}>
      <MenubarMenu>

        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-100 dark:data-[state=open]:bg-dark-200">
            {mode === 'light' ? (
                <Image src="assets/icons/sun.svg" alt="sun" width={20} height={20} className="active-theme" />
            ) : (
                <Image src="assets/icons/moon.svg" alt="moon" width={20} height={20} className="active-theme" />
            )}
        </MenubarTrigger>
        <MenubarContent className="absolute -right-12 mt-3 min-w-[120px] rounded border bg-light-900 py-2 dark:border-dark-200 dark:bg-dark-200">
          {themes.map((theme) => (
            <MenubarItem key={theme.value} onClick={() => {
                setMode(theme.value)

                if(theme.value !== 'system')
                {
                    localStorage.theme = theme.value
                }
                else
                {
                    localStorage.removeItem('theme')
                }
            }}
            className="flex items-center gap-4 p-2">
                <Image 
                src={theme.svg}
                alt={theme.value}
                width={16}
                height={16}
                className={`${mode === theme.value && 'active-theme'}`}
                />

                <p className={`body-semibold text-light-500 ${mode === theme.value ? 'text-black dark:text-white' : 'text-dark100_light900'}`}>{theme.label}</p>

            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default ThemeToggler;
