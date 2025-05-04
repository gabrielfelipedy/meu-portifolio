import manancial from "/public/assets/img/design/MANANCIAL-03-05-FEED.png";
import delicia_chopp from "/public/assets/img/design/delicia_chopp/Cardápio - Frente.png";
import banner_pai from "/public/assets/img/design/banner_pai.jpg";
import churrascaria from "/public/assets/img/design/flyer_churrascaria.png";

export const themes = [
  { value: "light", label: "Light", svg: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", svg: "/assets/icons/moon.svg" },
  { value: "system", label: "System", svg: "/assets/icons/computer.svg" },
];

export const navItems = [
  { name: "Início", href: "#home" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

export const images = [
  {
    src: manancial,
    alt: "manancial",
  },
  {
    src: delicia_chopp,
    alt: "delicia_chopp",
  },
  {
    src: banner_pai,
    alt: "banner_pai",
  },
  {
    src: churrascaria,
    alt: "churrascaria",
  },
];
