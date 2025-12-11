import { getAssetPath } from "../config";

const navLinks = [
  {
    name: "Accueil",
    link: "/",
  },
  {
    name: "Agents IA",
    link: "/agents",
  },
  {
    name: "Site Web Intelligent",
    link: "/site-intelligent",
  },
];

const words = [
  { text: "Automatiser", imgPath: getAssetPath("/images/ideas.svg") },
  { text: "Optimiser", imgPath: getAssetPath("/images/concepts.svg") },
  { text: "Innover", imgPath: getAssetPath("/images/designs.svg") },
  { text: "Transformer", imgPath: getAssetPath("/images/code.svg") },
  { text: "Automatiser", imgPath: getAssetPath("/images/ideas.svg") },
  { text: "Optimiser", imgPath: getAssetPath("/images/concepts.svg") },
  { text: "Innover", imgPath: getAssetPath("/images/designs.svg") },
  { text: "Transformer", imgPath: getAssetPath("/images/code.svg") },
];

const abilities = [
  {
    imgPath: getAssetPath("/images/seo.png"),
    title: "Excellence",
    desc: "Livrer des résultats de haute qualité tout en maintenant une attention particulière aux détails.",
  },
  {
    imgPath: getAssetPath("/images/chat.png"),
    title: "Communication fiable",
    desc: "Vous tenir informé à chaque étape pour assurer transparence et clarté.",
  },
  {
    imgPath: getAssetPath("/images/time.png"),
    title: "Respect des délais",
    desc: "Garantir que les projets sont livrés dans les délais, avec qualité et attention aux détails.",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: getAssetPath("/images/linkedin.png"),
    url: "https://www.linkedin.com/company/igdkey",
  },
];

export {
  words,
  abilities,
  socialImgs,
  navLinks,
};
