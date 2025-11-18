import { getAssetPath } from "../config";

const navLinks = [
  {
    name: "À propos",
    link: "#hero",
  },
  {
    name: "Nos expertises",
    link: "/expertises",
  },
  {
    name: "Agents IA",
    link: "/agents",
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

const counterItems = [

];

const logoIconsList = [
  {
    imgPath: getAssetPath("/images/logos/company-logo-1.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-2.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-3.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-4.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-5.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-6.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-7.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-8.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-9.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-10.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-11.png"),
  },
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

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: getAssetPath("/images/logos/react.png"),
  },
  {
    name: "Python Developer",
    imgPath: getAssetPath("/images/logos/python.svg"),
  },
  {
    name: "Backend Developer",
    imgPath: getAssetPath("/images/logos/node.png"),
  },
  {
    name: "Interactive Developer",
    imgPath: getAssetPath("/images/logos/three.png"),
  },
  {
    name: "Project Manager",
    imgPath: getAssetPath("/images/logos/git.svg"),
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: getAssetPath("/models/react_logo-transformed.glb"),
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: getAssetPath("/models/python-transformed.glb"),
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: getAssetPath("/models/node-transformed.glb"),
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: getAssetPath("/models/three.js-transformed.glb"),
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: getAssetPath("/models/git-svg-transformed.glb"),
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can't say enough good things about IGDKEY. They were able to take our complex project requirements and turn them into a seamless, functional solution. Their problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with IGDKEY was a fantastic experience. They transformed our outdated systems into modern, user-friendly platforms. Their attention to detail and commitment to quality are unmatched. Highly recommend them for any AI integration projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with IGDKEY was an absolute pleasure. Their professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. IGDKEY's enthusiasm for every facet of AI integration truly stands out. If you're seeking to elevate your business with AI, IGDKEY is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "IGDKEY was a pleasure to work with. They turned our outdated systems into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "IGDKEY's expertise in AI integration is truly impressive. They delivered a robust and scalable solution for our business, and our efficiency has significantly increased since the implementation. They're true professionals!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "IGDKEY was a pleasure to work with. They understood our requirements perfectly and delivered a solution that exceeded our expectations. Their skills in both AI integration and business consulting are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: getAssetPath("/images/insta.png"),
  },
  {
    name: "fb",
    imgPath: getAssetPath("/images/fb.png"),
  },
  {
    name: "x",
    imgPath: getAssetPath("/images/x.png"),
  },
  {
    name: "linkedin",
    imgPath: getAssetPath("/images/linkedin.png"),
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
