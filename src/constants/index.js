import { getAssetPath } from "../config";

const navLinks = [
  {
    name: "Accueil",
    link: "/",
  },
  // {
  //   name: "Agents IA",
  //   link: "/agents",
  // },
  {
    name: "Site Web Intelligent",
    link: "/site-intelligent",
  },
  {
    name: "IA Auto-hébergée",
    link: "/ia-privee",
  },
  {
    name: "La Fondatrice",
    link: "/fondatrice",
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
    desc: "Livrer des résultats de haute qualité avec une attention particulière aux détails.",
  },
  {
    imgPath: getAssetPath("/images/chat.png"),
    title: "Communication fiable",
    desc: "Vous tenir informé à chaque étape pour assurer transparence et clarté.",
  },
  {
    imgPath: getAssetPath("/images/time.png"),
    title: "Respect des délais",
    desc: "Garantir que les projets sont livrés dans les délais",
  },
];

const engagements = [
  {
    imgPath: getAssetPath("/images/engagements/expertise.svg"),
    title: "Expertise IA Complète",
    desc: "Technologies de pointe : agents autonomes, modèles prédictifs, automatisation intelligente. Solutions sur mesure pour chaque entreprise.",
    featured: true,
  },
  {
    imgPath: getAssetPath("/images/engagements/personnalisee.svg"),
    title: "Approche 100% Personnalisée",
    desc: "Chaque entreprise est unique. Nos solutions s'adaptent à votre secteur, vos objectifs et votre budget.",
  },
  {
    imgPath: getAssetPath("/images/engagements/accompagnement.svg"),
    title: "Accompagnement de A à Z",
    desc: "De l'audit initial à la mise en production, nous vous guidons à chaque étape.",
  },
  {
    imgPath: getAssetPath("/images/engagements/excellence.png"),
    title: "Excellence",
    desc: "Livrer des résultats de haute qualité avec une attention particulière aux détails.",
  },
  {
    imgPath: getAssetPath("/images/engagements/communication.png"),
    title: "Communication fiable",
    desc: "Vous tenir informé à chaque étape pour assurer transparence et clarté.",
  },
  {
    imgPath: getAssetPath("/images/engagements/delais.png"),
    title: "Respect des délais",
    desc: "Garantir que les projets sont livrés dans les délais.",
    wide: true,
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
  engagements,
  socialImgs,
  navLinks,
};
