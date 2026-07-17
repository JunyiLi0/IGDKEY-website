import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import TitleHeader from "../components/TitleHeader";
import AnimatedCounter from "../components/AnimatedCounter";
import { words, engagements } from "../constants";
import { getAssetPath } from "../config";
import IGDKeyLogo from "../components/AnimatedLetters";
import Button from "../components/Button";
import TiltCard from "../components/TiltCard";
import TrustCarousel from "../components/TrustCarousel";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Smartphone } from "lucide-react";
import { PiggyBank } from "lucide-react";


import {
  BrainCircuit,
  MessagesSquare,
  Workflow,
  TrendingUp,
  MonitorSmartphone,
  Check,
  Flame,
  Landmark,
  ShoppingBag,
  Building2,
  HeartPulse,
  Factory,
  Wallet,
  GraduationCap,
  Handshake,
  UserCircle,
  Gauge,
  ArrowUpRight,
  Crosshair,
  Zap,
  ShieldCheck,
  LockKeyhole,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    Icon: BrainCircuit,
    title: "AI Agents Autonomes",
    tagline: "Vos employés numériques infatigables",
    metric: "24/7",
    metricLabel: "disponibilité",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-400/10",
    iconBorder: "border-violet-400/20",
    glowFrom: "from-violet-500/20",
    glowTo: "to-violet-900/10",
    hoverBorder: "group-hover:border-violet-400/40",
    accentLine: "via-violet-400/60",
    hoverGlow: "from-violet-400/[0.03]",
    checkColor: "text-violet-400/70",
    features: [
      "Gestion de données",
      "Traitement de demandes",
      "Suivi client 24/7",
      "Traitement de demandes",
    ],
  },
  {
    Icon: MessagesSquare,
    title: "Chatbots Avancés",
    tagline: "Convertissez chaque visiteur en client",
    metric: "x3",
    metricLabel: "taux de conversion",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-400/10",
    iconBorder: "border-cyan-400/20",
    glowFrom: "from-cyan-500/20",
    glowTo: "to-cyan-900/10",
    hoverBorder: "group-hover:border-cyan-400/40",
    accentLine: "via-cyan-400/60",
    hoverGlow: "from-cyan-400/[0.03]",
    checkColor: "text-cyan-400/70",
    features: [
      "Réponses instantanées",
      "Qualification prospects",
      "Prise de rendez-vous",
      "Langage naturel",
    ],
  },
  {
    Icon: Workflow,
    title: "Automatisation IA",
    tagline: "Libérez votre équipe des tâches répétitives",
    metric: "-70%",
    metricLabel: "temps administratif",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-400/10",
    iconBorder: "border-amber-400/20",
    glowFrom: "from-amber-500/20",
    glowTo: "to-amber-900/10",
    hoverBorder: "group-hover:border-amber-400/40",
    accentLine: "via-amber-400/60",
    hoverGlow: "from-amber-400/[0.03]",
    checkColor: "text-amber-400/70",
    features: [
      "Saisie & analyse données",
      "Reporting automatique",
      "Gestion des emails",
      "Facturation",
    ],
  },
  {
    Icon: TrendingUp,
    title: "Machine Learning",
    tagline: "Anticipez, prédisez, optimisez",
    metric: "+40%",
    metricLabel: "précision décisions",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/10",
    iconBorder: "border-emerald-400/20",
    glowFrom: "from-emerald-500/20",
    glowTo: "to-emerald-900/10",
    hoverBorder: "group-hover:border-emerald-400/40",
    accentLine: "via-emerald-400/60",
    hoverGlow: "from-emerald-400/[0.03]",
    checkColor: "text-emerald-400/70",
    features: [
      "Prédiction de ventes",
      "Segmentation clients",
      "Détection opportunités",
      "Forecasting avancé",
    ],
  },
  {
    Icon: MonitorSmartphone,
    title: "Sites Web Intelligents",
    tagline: "Un site qui s'adapte à chaque visiteur",
    metric: "x2",
    metricLabel: "engagement utilisateur",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-400/10",
    iconBorder: "border-rose-400/20",
    glowFrom: "from-rose-500/20",
    glowTo: "to-rose-900/10",
    hoverBorder: "group-hover:border-rose-400/40",
    accentLine: "via-rose-400/60",
    hoverGlow: "from-rose-400/[0.03]",
    checkColor: "text-rose-400/70",
    features: [
      "Analyse comportementale",
      "Optimisation automatique",
      "Intégration agents IA",
      "Expériences personnalisées",
    ],
  },
  //Bloc Ajouter
  {
    Icon: Smartphone,
    title: "Application Mobile Intelligente",
    tagline: "L’IA au cœur de l’expérience mobile",
    metric: "75%",
    metricLabel: "des apps intégreront l’IA d’ici 2026 (Gartner)",
    iconColor: "text-sky-400",
    iconBg: "bg-sky-400/10",
    iconBorder: "border-sky-400/20",
    glowFrom: "from-sky-500/20",
    glowTo: "to-sky-900/10",
    hoverBorder: "group-hover:border-sky-400/40",
    accentLine: "via-sky-400/60",
    hoverGlow: "from-sky-400/[0.03]",
    checkColor: "text-sky-400/70",
    features: [
      "Expérience utilisateur personnalisée",
      "Recommandations IA en temps réel",
      "Automatisation intelligente",
      "Performance optimisée on-device",
    ],
  },

  {
    Icon: LockKeyhole,
    title: "IA privée auto-hébergée",
    tagline: "Votre intelligence artificielle sécurisée et souveraine",
    metric: "100%",
    metricLabel: "contrôle des données",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-400/10",
    iconBorder: "border-cyan-400/20",
    glowFrom: "from-cyan-500/20",
    glowTo: "to-cyan-900/10",
    hoverBorder: "group-hover:border-cyan-400/40",
    accentLine: "via-cyan-400/60",
    hoverGlow: "from-cyan-400/[0.03]",
    checkColor: "text-cyan-400/70",
    features: [
      "Développement d'IA privée auto-hébergée",
      "LLM auto-hébergé sécurisé",
      "LLM Privé",
      "Auto-hébergé",
      "Conforme RGPD",
      "Souverain",
      "Made in France",
    ],
  },
];


const audiences = [
  { Icon: Flame, label: "PME & Startups", color: "text-orange-400", bg: "bg-orange-400/10", hoverBg: "group-hover:bg-orange-400/20" },
  { Icon: Landmark, label: "Cabinets pro", color: "text-indigo-400", bg: "bg-indigo-400/10", hoverBg: "group-hover:bg-indigo-400/20" },
  { Icon: ShoppingBag, label: "E-commerce", color: "text-pink-400", bg: "bg-pink-400/10", hoverBg: "group-hover:bg-pink-400/20" },
  { Icon: Building2, label: "Immobilier", color: "text-sky-400", bg: "bg-sky-400/10", hoverBg: "group-hover:bg-sky-400/20" },
  { Icon: HeartPulse, label: "Santé", color: "text-red-400", bg: "bg-red-400/10", hoverBg: "group-hover:bg-red-400/20" },
  { Icon: Factory, label: "Industrie", color: "text-slate-400", bg: "bg-slate-400/10", hoverBg: "group-hover:bg-slate-400/20" },
  { Icon: Wallet, label: "Finance", color: "text-emerald-400", bg: "bg-emerald-400/10", hoverBg: "group-hover:bg-emerald-400/20" },
  { Icon: GraduationCap, label: "Éducation", color: "text-yellow-400", bg: "bg-yellow-400/10", hoverBg: "group-hover:bg-yellow-400/20" },
  { Icon: Handshake, label: "B2B", color: "text-teal-400", bg: "bg-teal-400/10", hoverBg: "group-hover:bg-teal-400/20" },
  { Icon: UserCircle, label: "B2C", color: "text-purple-400", bg: "bg-purple-400/10", hoverBg: "group-hover:bg-purple-400/20" },
];

const roiItems = [
  {
    Icon: Gauge,
    title: "Productivité accrue",
    desc: "Plus de résultats en moins de temps",
    iconColor: "text-cyan-400",
    glowFrom: "from-cyan-400/15",
    glowTo: "to-cyan-900/25",
    border: "border-cyan-400/40",
    hoverBorder: "group-hover:border-cyan-400/50",
  },
  {
    Icon: ArrowUpRight,
    title: "Revenus Boostés",
    desc: "Convertissez plus, vendez mieux",
    iconColor: "text-emerald-400",
    glowFrom: "from-emerald-400/15",
    glowTo: "to-emerald-900/25",
    border: "border-emerald-400/40",
    hoverBorder: "group-hover:border-emerald-400/50",
  },
  {
    Icon: Crosshair,
    title: "Avantage Décisif",
    desc: "Dépassez vos concurrents",
    iconColor: "text-amber-400",
    glowFrom: "from-amber-400/15",
    glowTo: "to-amber-900/25",
    border: "border-amber-400/40",
    hoverBorder: "group-hover:border-amber-400/50",
  },
];

const ENOR_IA = () => {

    const servicesRef = useRef(null);

  return (
    <>
      <NavBar />

        {/* Hero */}
        <section className="relative overflow-hidden pt-40 pb-32">

        {/* Background */}
        <div className="absolute inset-0 -z-20 bg-[#06070a]" />

        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px]
                        rounded-full bg-dusty-grape/20 blur-[180px]" />

        <div className="absolute top-32 -left-48 w-[500px] h-[500px]
                        rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute bottom-0 -right-48 w-[500px] h-[500px]
                        rounded-full bg-violet-500/10 blur-[160px]" />

        {/* HERO */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-5xl mx-auto text-center px-6"
        >
            <div className="inline-flex items-center gap-3 rounded-full border border-pale-sky/20 bg-pale-sky/10 px-5 py-2 mb-8">

              <Sparkles className="w-4 h-4 text-pale-sky" />

              <span className="text-pale-sky text-sm font-medium tracking-wide">

                ENOR.IA

              </span>

            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Construisez
            <span className="bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent">
                {" "}
                votre intelligence artificielle
            </span>
            </h1>

            <p className="mt-8 text-slate-grey text-lg md:text-xl max-w-3xl mx-auto">
            Des solutions IA pensées pour votre entreprise.
            Vous imaginez. Nous développons.
            </p>

            <div className="mt-5">
<a
                    href="/Contact"
                    className="
                      mt-6
                      block
                      text-center
                      rounded-xl
                      bg-pale-sky
                      hover:bg-dusty-grape
                      text-onyx
                      hover:text-white
                      py-4
                      font-semibold
                      transition-all
                    "
                  >
                    Discuter de mon projet
                  </a>          
            </div>
        </motion.div>

        </section>
    

      
      {/* Les sections viendront ici */}

      <div ref={servicesRef} className="w-full mb-25" id="services">
                <TitleHeader
                    title="ENOR.IA"
                    titleClassName="bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent"
                    />

                    <p className="text-slate-grey text-lg md:text-xl text-center mt-6 mb-8 max-w-4xl mx-auto leading-relaxed">
                    Chez <span className="text-white font-semibold">IGDKEY</span>, nous ne vendons pas une IA générique.
                    Nous développons une intelligence artificielle qui s'adapte à votre activité, à vos données et à vos objectifs afin de créer un véritable avantage concurrentiel.
                    </p>
                                    <div className="mt-12 max-w-6xl mx-auto">
                  <div className="flex flex-wrap justify-center gap-6">
                    {services.map((s) => (
                      <motion.div
                        key={s.title}
                        className="service-card w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                        whileHover={{
                          y: -8,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          },
                        }}
                      >
                        <div
                          className={`group relative h-full p-6 md:p-8 rounded-2xl bg-onyx border border-white/[0.08] ${s.hoverBorder} transition-colors duration-300`}
                        >
                          {/* Accent line at top */}
                          <div
                            className={`absolute top-0 inset-x-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent ${s.accentLine} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                          />
                          {/* Subtle background glow */}
                          <div
                            className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${s.hoverGlow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                          />
      
                          {/* Icon with colored glow */}
                          <div className="relative w-14 h-14 mb-5">
                            <div
                              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.glowFrom} ${s.glowTo} blur-lg group-hover:blur-xl transition-all duration-300`}
                            />
                            <div
                              className={`relative w-14 h-14 rounded-2xl ${s.iconBg} border ${s.iconBorder} flex items-center justify-center`}
                            >
                              <s.Icon
                                className={`w-7 h-7 ${s.iconColor}`}
                                strokeWidth={1.5}
                              />
                            </div>
                          </div>
      
                          {/* Title */}
                          <h3 className="text-white text-xl font-bold mb-1">
                            {s.title}
                          </h3>
                          {/* Tagline */}
                          <p className={`${s.iconColor} opacity-80 text-sm font-medium mb-4`}>
                            {s.tagline}
                          </p>
                          {/* Metric */}
                          <div className="flex items-baseline gap-2 mb-5">
                            <span className="text-2xl font-bold text-white">
                              {s.metric}
                            </span>
                            <span className="text-slate-grey text-sm">
                              {s.metricLabel}
                            </span>
                          </div>
                          {/* Features */}
                          <ul className="text-slate-grey text-sm space-y-2.5">
                            {s.features.map((f) => (
                              <li key={f} className="flex items-center gap-2.5">
                                <Check
                                  className={`w-4 h-4 ${s.checkColor} flex-shrink-0`}
                                  strokeWidth={2.5}
                                />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

      <Footer />
    </>
  );
};

export default ENOR_IA;