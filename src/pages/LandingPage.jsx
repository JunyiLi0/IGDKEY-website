import { useEffect, useRef } from "react";
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
} from "lucide-react";
import { motion } from "framer-motion";

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

const aiPacks = [
  {
    name: "STARTER",
    audience: "TPE · PME · Startup",
    subtitle:
      "Solutions adaptées pour le lancement de votre entreprise",
    price: "À partir de 3 000 €",
    maintenance: "À partir de 500 €/mois",
    color: "cyan",
    features: [
      "Cadrage rapide du besoin",
      "Définition d'un cas d'usage principal",
      "Déploiement initial",
      "Documentation + prise en main",
    ],
    modules: [
      "LLM / IA Générative",
      "Chatbot",
      "Site Web Intelligent",
      "Application Intelligente",
      "Automatisation (flux simple)",
    ],
    unavailable: [
      "Agent IA non disponible",
      "Auto-hébergement non disponible",
    ],
  },

  {
    name: "SCALE",
    audience: "PME structurée · ETI",
    subtitle:
      "Systèmes connectés aux opérations et automatisations avancées",
    price: "À partir de 8 000 €",
    maintenance: "À partir de 1000 €/mois",
    featured: true,
    color: "violet",
    features: [
      "Cadrage approfondi",
      "Conception de l'architecture technique",
      "1 à 2 cas d'usage intégrés",
      "Intégration aux outils existants",
      "Mise en production",
    ],
    modules: [
      "LLM / IA Générative avancée",
      "Chatbot connecté",
      "Site Web Intelligent",
      "Application métier IA",
      "Automatisation flux complexes",
      "Agent IA (1 à 3 agents)",
      "Auto-hébergement (option)",
    ],
  },

  {
    name: "CORE",
    audience: "ETI · Grand Compte",
    subtitle:
      "Systèmes critiques orientés performance et ROI",
    price: "À partir de 20 000 €",
    maintenance: "À partir de 2000 €/mois",
    color: "emerald",
    features: [
      "Audit complet (technique + business)",
      "Conception sur mesure",
      "Architecture scalable",
      "Déploiement multi-cas d'usage",
      "Pilotage projet",
    ],
    modules: [
      "LLM / IA sur mesure",
      "Chatbot avancé omnicanal",
      "Applications métier critiques",
      "Automatisation complète",
      "Agents IA multi-agents",
      "Auto-hébergement sécurisé",
      "Fine-tuning & optimisation continue",
    ],
  },
];

const LandingPage = () => {
  const heroRef = useRef(null);
  const transformRef = useRef(null);
  const engagementsRef = useRef(null);
  const servicesRef = useRef(null);
  const targetAudienceRef = useRef(null);
  const investmentRef = useRef(null);
  const urgencyRef = useRef(null);

  useEffect(() => {
    // Defer GSAP + ScrollTrigger to idle time to reduce render-blocking JS on first load
    let cancelled = false;
    const schedule =
      window.requestIdleCallback ?? ((cb) => window.setTimeout(cb, 500));
    const cancel =
      window.cancelIdleCallback ?? ((id) => window.clearTimeout(id));

    const id = schedule(
      async () => {
        try {
          const gsapMod = await import("gsap");
          const stMod = await import("gsap/ScrollTrigger");
          if (cancelled) return;

          const gsap = gsapMod.gsap ?? gsapMod.default ?? gsapMod;
          const ScrollTrigger = stMod.ScrollTrigger;
          gsap.registerPlugin(ScrollTrigger);
          window.__gsap = gsap;
          window.__ScrollTrigger = ScrollTrigger;

          // Hero Animation
          if (heroRef.current) {
            gsap.from(heroRef.current, {
              opacity: 0,
              y: 50,
              duration: 1.5,
              ease: "power3.out",
            });
          }

          // Transform section animation
          if (transformRef.current) {
            gsap.from(transformRef.current, {
              opacity: 0,
              y: 50,
              duration: 1,
              scrollTrigger: {
                trigger: transformRef.current,
                start: "top 80%",
              },
            });
          }

          // Nos Engagements - bento grid stagger
          if (engagementsRef.current) {
            const engagementCards = gsap.utils.toArray(".engagement-card");
            gsap.fromTo(
              engagementCards,
              { y: 40, opacity: 0, scale: 0.95 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.7,
                stagger: 0.12,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: engagementsRef.current,
                  start: "top 80%",
                },
              },
            );
          }

          // Services cards - scale animation
          if (servicesRef.current) {
            gsap.fromTo(
              ".service-card",
              { scale: 0.8, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                  trigger: servicesRef.current,
                  start: "top 85%",
                },
              },
            );
          }

          // Target audience cards - scale animation
          if (targetAudienceRef.current) {
            gsap.fromTo(
              ".audience-card",
              { scale: 0.8, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                stagger: 0.05,
                scrollTrigger: {
                  trigger: targetAudienceRef.current,
                  start: "top 95%",
                },
              },
            );
          }

          // Investment section - scale animation
          if (investmentRef.current) {
            gsap.fromTo(
              ".investment-item",
              { scale: 0.8, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                  trigger: investmentRef.current,
                  start: "top 95%",
                },
              },
            );
          }

          // Urgency section animation
          if (urgencyRef.current) {
            gsap.from(urgencyRef.current, {
              opacity: 0,
              scale: 0.9,
              duration: 0.8,
              scrollTrigger: {
                trigger: urgencyRef.current,
                start: "top 85%",
              },
            });
          }
        } catch (e) {
          // If GSAP fails to load, keep the page functional without animations
          console.warn("GSAP deferred load failed:", e);
        }
      },
      { timeout: 2500 },
    );

    return () => {
      cancelled = true;
      cancel(id);
    };
  }, []);

  return (
    <>
      <NavBar />
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden">
        {/* Blurred Gradient Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dusty-grape/20 rounded-full blur-[100px] -z-10"></div>

        {/* Hero Container with Proper Spacing */}
        <div ref={heroRef} className="hero-container">
          <div className="hero-content-wrapper">
            <header className="hero-header">
              {/* Main Heading with Animated Word Slider */}
              <div className="space-y-6">
                <h1 className="hero-title text-1xl">
                  <div className="hero-text-animated">
                    <div className="flex items-center justify-center gap-3">
                      <span className="slide">
                        <span className="wrapper">
                          {words.map((word, index) => (
                            <span
                              key={index}
                              className="bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent"
                            >
                              {word.text}
                            </span>
                          ))}
                        </span>
                      </span>
                    </div>
                    <div className="mt-2 text-center ">
                      <span className="text-[55px]">
                        Votre Entreprise avec votre
                      </span>
                      <br />
                      <span className="text-[45px] bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent font-semibold">
                        IA auto hébergé et sécurisé
                      </span>
                    </div>
                  </div>
                </h1>

                <p className="hero-subtitle font-bold">
                  L'agence qui fusionne vos technologies avec celles de demain
                </p>
              </div>

              {/* Logo */}
              <div className="hero-logo-wrapper">
                <IGDKeyLogo />
              </div>

              {/* CTA Buttons */}
              <div className="hero-cta-wrapper flex flex-col md:flex-row gap-4">
                <Button
                  text="Découvrir notre programme ENOR.IA"
                  className="md:w-auto w-full h-14"
                  id="services"
                />
              </div>
            </header>
          </div>
        </div>

        <AnimatedCounter />
      </section>

      <section className="padding-x-lg overflow-hidden">
        {/* Transform Your Business Section */}
        <div ref={transformRef} className="w-full mb-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pale-sky/10 rounded-full blur-[80px] -z-10"></div>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white font-bold md:text-5xl text-4xl mb-8 leading-tight">
              Transformez Votre Entreprise Avec{" "}
              <span className="bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent">
                l'Intelligence Artificielle
              </span>
            </h2>
            <p className="text-slate-grey md:text-xl text-lg leading-relaxed max-w-3xl mx-auto mb-10">
              L'IA n'est plus une option. C'est l'avantage concurrentiel qui
              sépare les leaders du reste. Nous déployons des solutions
              intelligentes qui travaillent pour vous 24/7.
            </p>
            <div className="w-full p-1 rounded-2xl bg-gradient-to-r from-dusty-grape via-pale-sky to-dusty-grape">
              <div className="bg-onyx rounded-xl px-6 py-8 md:px-12">
                <p className="text-mint-cream md:text-2xl text-xl font-semibold">
                  Notre mission : gagner du temps, réduire vos coûts, augmenter
                  vos revenus.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="w-full mb-32">
          <TitleHeader title="Ils Nous Font Confiance" />
          <TrustCarousel />
        </div>

        {/* Nos Engagements Section — Bento Grid */}
        <div ref={engagementsRef} className="w-full mb-32">
          <TitleHeader title="Nos Engagements" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mt-16">
            {engagements.map(({ imgPath, title, desc, featured, wide }) => (
              <TiltCard
                key={title}
                className={`engagement-card ${featured
                  ? "md:row-span-2"
                  : wide
                    ? "md:col-span-2 lg:col-span-3"
                    : ""
                  }`}
              >
                {featured ? (
                  /* Hero card — spans 2 rows */
                  <div className="relative p-8 h-full flex flex-col">
                    <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-[0.03] pointer-events-none rounded-2xl" />
                    <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-dusty-grape/30 to-pale-sky/10 flex items-center justify-center">
                      <img src={imgPath} alt={title} className="w-10 h-10" />
                    </div>
                    <h3 className="text-white text-2xl lg:text-3xl font-bold mb-4">
                      {title}
                    </h3>
                    <p className="text-slate-grey text-lg leading-relaxed flex-grow">
                      {desc}
                    </p>
                    <div className="mt-6 w-16 h-1 rounded-full bg-gradient-to-r from-pale-sky to-dusty-grape group-hover:w-24 transition-all duration-500" />
                  </div>
                ) : wide ? (
                  /* Wide bottom card — horizontal layout */
                  <div className="p-6 h-full flex items-center gap-6">
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-dusty-grape/20 flex items-center justify-center group-hover:bg-dusty-grape/40 transition-colors duration-300">
                      <img src={imgPath} alt={title} className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-bold mb-1">
                        {title}
                      </h3>
                      <p className="text-slate-grey text-base leading-relaxed group-hover:text-pale-sky transition-colors duration-300">
                        {desc}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Standard card */
                  <div className="p-6 h-full flex flex-col">
                    <div className="w-12 h-12 mb-5 rounded-xl bg-dusty-grape/20 flex items-center justify-center group-hover:bg-dusty-grape/40 transition-colors duration-300">
                      <img src={imgPath} alt={title} className="w-7 h-7" />
                    </div>
                    <h3 className="text-white text-xl font-bold mb-3">
                      {title}
                    </h3>
                    <p className="text-slate-grey text-base leading-relaxed group-hover:text-pale-sky transition-colors duration-300">
                      {desc}
                    </p>
                  </div>
                )}
              </TiltCard>
            ))}
          </div>
        </div>

        {/* PROGRAMME ENOR IA */}
        <section
          ref={servicesRef}
          className="w-full mb-32 relative z-20"
          id="services"
        >

          <TitleHeader
            title={
              <>
                Programme{" "}
                <span className="bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent">
                  ENOR.IA
                </span>
              </>
            }
          />

          <p className="text-center text-slate-grey mt-5 mb-14">
            Des solutions IA adaptées à votre maturité et vos ambitions.
          </p>

          {/* PACKS IA */}

          <div
            className="
             grid
             grid-cols-1
             md:grid-cols-2
             lg:grid-cols-3
             gap-8
             max-w-7xl
             mx-auto
             relative
             z-20
            "
          >

            {aiPacks.map((pack) => (

              <div
                key={pack.name}
                className={`
                  relative
                  flex
                  flex-col
                  rounded-3xl
                  border
                 ${pack.featured
                    ? "border-pale-sky scale-[1.02]"
                    : "border-white/10"
                  }
                 bg-[#101827]
                 p-8
                 min-h-[760px]
                 shadow-xl
                 transition-all
                 duration-300
                 hover:-translate-y-2
                 hover:border-pale-sky/40
                `}
              >

                {pack.featured && (

                  <div className="absolute top-5 right-5">

                    <span
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-pale-sky
                        text-onyx
                        text-sm
                        font-semibold
                      "
                    >
                      Recommandé
                    </span>

                  </div>

                )}

                {/* TITRE */}

                <h3 className="text-white text-4xl font-bold">
                  {pack.name}
                </h3>

                <p className="text-pale-sky mt-3">
                  {pack.audience}
                </p>

                <p className="text-slate-grey mt-3 leading-relaxed">
                  {pack.subtitle}
                </p>

                {/* PRIX */}

                <div className="mt-8">

                  <p className="text-white text-3xl font-bold">
                    {pack.price}
                  </p>

                  <p className="text-slate-grey">
                    sur devis
                  </p>

                </div>

                {/* FONCTIONNALITÉS */}

                <div className="mt-8">

                  <p className="font-semibold text-white mb-4">
                    Inclus :
                  </p>

                  <ul className="space-y-3">

                    {pack.features.map((item) => (

                      <li
                        key={item}
                        className="
                          flex
                          items-start
                          gap-3
                          text-white
                        "
                      >

                        <Check
                          className="
                            w-5
                            h-5
                            text-emerald-400
                            shrink-0
                            mt-[2px]
                          "
                        />

                        <span>
                          {item}
                        </span>

                      </li>

                    ))}

                  </ul>

                </div>

                {/* MODULES */}

                <div className="mt-8">

                  <p className="font-semibold text-pale-sky mb-4">
                    Modules disponibles
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {pack.modules.map((module) => (

                      <span
                        key={module}
                        className="
                          px-3
                          py-2
                          rounded-full
                          border
                          border-white/10
                          bg-white/5
                          text-sm
                          text-white
                        "
                      >
                        {module}
                      </span>

                    ))}

                  </div>

                </div>

                {/* NON DISPONIBLE */}

                {pack.unavailable && (

                  <div className="mt-6 space-y-2">

                    {pack.unavailable.map((item) => (

                      <p
                        key={item}
                        className="text-red-300 text-sm"
                      >
                        ❌ {item}
                      </p>

                    ))}

                  </div>

                )}

                {/* MAINTENANCE */}

                <div className="mt-auto pt-8 border-t border-white/10">
                  <p className="text-pale-sky font-semibold mb-2">
                    Accompagnement continu
                  </p>

                  <p className="text-white text-xl font-bold mb-4">
                    {pack.advisory}
                  </p>

                

                  <p className="text-slate-grey">
                    Maintenance
                  </p>

                    <ul className="space-y-2 text-sm text-slate-grey">
                      <li>✓ Points stratégiques réguliers</li>
                      <li>✓ Ajustement de la roadmap</li>
                      <li>✓ Suivi des performances</li>
                      <li>✓ Recommandations continues</li>
                      <li>✓ Support décisionnel</li>

                    </ul>

                    <p className="text-white font-medium">
                      {pack.maintenance}
                    </p>

                  

                  <a
                    href="/contact"
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
                    Demander un devis
                  </a>

                </div>

              </div>

            ))}

          </div>

          {/* CONSULTING IA */}

          <div className="mt-32">

            <div
              className="
                max-w-6xl
                mx-auto
                rounded-3xl
                border
                border-white/10
                bg-gradient-to-br
                from-[#0D1320]
                to-[#141C2E]
                p-12
              "
            >

              <p
                className="
                  text-pale-sky
                  uppercase
                  tracking-[0.25em]
                  font-semibold
                  mb-5
                "
              >
                CONSULTING IA
              </p>

              <h2
                className="
                  text-white
                  text-5xl
                  font-bold
                  leading-tight
                  max-w-4xl
                "
              >

                Transformer vos idées en

                <span
                  className="
                    bg-gradient-to-r
                    from-pale-sky
                    via-white
                    to-dusty-grape
                    bg-clip-text
                    text-transparent
                  "
                >
                  {" "}
                  stratégie IA actionnable
                </span>

              </h2>

              <p
                className="
                  text-slate-grey
                  mt-8
                  text-lg
                  max-w-3xl
                "
              >
                Nous accompagnons PME, ETI
                et grands comptes dans la
                construction d'une stratégie
                IA rentable et directement
                connectée à vos objectifs.
              </p>

              <div
                className="
                  grid
                  md:grid-cols-4
                  gap-4
                  mt-10
                "
              >

                {[
                  "Audit IA",
                  "Roadmap stratégique",
                  "Priorisation ROI",
                  "Pilotage transformation",
                ].map((item) => (

                  <div
                    key={item}
                    className="
                      bg-white/[0.04]
                      border
                      border-white/10
                      rounded-xl
                      p-5
                      text-center
                      text-white
                    "
                  >
                    {item}
                  </div>

                ))}

              </div>

              <a
                href="/contact"
                className="
                  inline-block
                  mt-10
                  bg-pale-sky
                  px-8
                  py-4
                  rounded-xl
                  text-onyx
                  hover:bg-dusty-grape
                  hover:text-white
                  transition
                  font-semibold
                "
              >
                Parler à un consultant IA
              </a>

            </div>

          </div>

        {/* Services Section */}
        <div ref={servicesRef} className="w-full mb-32" id="services">
          <TitleHeader title="ENOR.IA" titleClassName="bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent" />
          <p className="text-slate-grey md:text-xl text-lg text-center mt-4 mb-8 max-w-3xl mx-auto leading-relaxed">
            C'est vous qui construisez votre IA, nous sommes là pour la développer ensemble.
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

        {/* Target Audience Section */}
        <div ref={targetAudienceRef} className="w-full mb-32">
          <TitleHeader
            title="Pour les PME, ETI et Grands comptes"
            titleClassName="mt-2 text-[clamp(1.2rem,2.5vw,2rem)] leading-tight"
          />

          <p className="text-white md:text-xl text-lg text-center mt-10 leading-relaxed font-semibold">
            Processus, données ou site web ? L'IA peut vous faire gagner de
            l'argent.
          </p>
        </div>


        {/*Bloc Ajouter*/}

        {/* Security / Sovereignty Section */}
        <div className="w-full mb-32">
          <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B0F19]">

            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_35%)]" />

            {/* Noise texture */}
            <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-10 pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center px-8 py-12 md:px-14 md:py-16">

              {/* Left content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 mb-6">
                  <ShieldCheck className="w-4 h-4 text-cyan-300" />
                  <span className="text-cyan-200 text-sm font-medium tracking-wide">
                    Sécurité & souveraineté
                  </span>
                </div>

                <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6">
                  Adapté à votre métier,
                  <span className="block bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
                    tout en restant sécurisé.
                  </span>
                </h2>

                <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                  Vos données restent vos données : chiffrées, souveraines et protégées
                  par une infrastructure pensée pour les entreprises exigeantes.
                  Nous intégrons l’IA sans compromis sur la confidentialité.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03]">
                    <LockKeyhole className="w-5 h-5 text-violet-300" />
                    <span className="text-white text-sm font-medium">
                      Chiffrement des données
                    </span>
                  </div>

                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03]">
                    <ShieldCheck className="w-5 h-5 text-cyan-300" />
                    <span className="text-white text-sm font-medium">
                      IA auto-hébergée
                    </span>
                  </div>
                </div>
              </div>

              {/* Right visual card */}
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/10 blur-3xl rounded-full" />

                <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-8 overflow-hidden">

                  {/* Grid effect */}
                  <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />

                  <div className="relative z-10">

                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-white/10 flex items-center justify-center mb-8">
                      <LockKeyhole
                        className="w-10 h-10 text-cyan-200"
                        strokeWidth={1.5}
                      />
                    </div>

                    <div className="space-y-5">
                      <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <span className="text-slate-400 text-sm">
                          Hébergement
                        </span>
                        <span className="text-white font-medium">
                          Sécurisé & souverain
                        </span>
                      </div>

                      <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <span className="text-slate-400 text-sm">
                          Protection
                        </span>
                        <span className="text-white font-medium">
                          Chiffrement avancé
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">
                          Confidentialité
                        </span>
                        <span className="text-emerald-300 font-medium">
                          100% maîtrisée
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        </section>
        


        {/* Investment ROI Section */}
        <div ref={investmentRef} className="w-full mb-32">
          <TitleHeader title="ROI Immédiat" />
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {roiItems.map(({ Icon, title, desc, iconColor, glowFrom, glowTo, border, hoverBorder }) => (
                <div key={title} className="investment-item group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 hover:from-pale-sky/50 transition-all duration-300">
                  <div className="bg-onyx h-full rounded-xl p-8 text-center">
                    <div className="relative w-14 h-14 mx-auto mb-5">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${glowFrom} ${glowTo} blur-lg group-hover:blur-xl transition-all duration-300`} />
                      <div className={`relative w-14 h-14 rounded-2xl bg-onyx ${border} flex items-center justify-center ${hoverBorder} transition-all duration-300`}>
                        <Icon className={`w-7 h-7 ${iconColor} transition-colors duration-300`} strokeWidth={1.5} />
                      </div>
                    </div>
                    <p className="text-white text-xl font-bold mb-2">
                      {title}
                    </p>
                    <p className="text-slate-grey group-hover:text-white/50 transition-colors">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full p-1 rounded-2xl bg-gradient-to-r from-dusty-grape via-pale-sky to-dusty-grape mt-10">
              <div className="bg-onyx rounded-xl px-6 py-8 md:px-12 text-center">
                <p className="text-mint-cream md:text-2xl text-xl font-semibold">
                  Augmentez durablement votre revenu en exploitant tout le
                  potentiel de l’IA.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Aide financière */}
        <div className="w-full mb-32">
          <div className="max-w-5xl mx-auto relative p-1 rounded-3xl bg-gradient-to-r from-dusty-grape via-pale-sky to-dusty-grape">

            <div className="bg-onyx rounded-[22px] px-8 py-14 md:px-16 text-center relative overflow-hidden">

              {/* Glow background */}
              <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-20 pointer-events-none" />

              {/* Icon */}
              <div className="relative w-16 h-16 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-xl" />
                <div className="relative w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center">
                  <PiggyBank className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-white font-bold md:text-4xl text-3xl mb-4">
                Aides financières & subventions
              </h2>

              {/* Text */}
              <p className="text-slate-grey text-lg max-w-2xl mx-auto mb-8">
                De nombreuses entreprises peuvent bénéficier de dispositifs de financement
                pour intégrer l’intelligence artificielle et digitaliser leurs processus.
                Nous vous accompagnons dans ces démarches.
              </p>

              <p className="text-white font-semibold mb-10">
                Vérifiez votre éligibilité dès maintenant.
              </p>

              {/* CTA Button */}
              <a href="/contact" className="inline-block">
                <div className="bg-pale-sky hover:bg-dusty-grape transition px-8 py-4 rounded-xl">
                  <p className="text-onyx font-semibold hover:text-white transition">
                    Parler à un expert
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Urgency + CTA Section */}
        <div ref={urgencyRef} className="w-full mb-20">
          <div className="w-full p-1 rounded-3xl bg-gradient-to-r from-dusty-grape via-pale-sky to-dusty-grape max-w-3xl mx-auto">
            <div className="bg-onyx rounded-[22px] px-6 py-16 md:px-20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.svg')] opacity-20"></div>
              <div className="relative w-16 h-16 mx-auto mb-6 z-10">
                <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl animate-pulse" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400/20 to-amber-900/30 border border-yellow-400/30 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-yellow-400" strokeWidth={1.5} />
                </div>
              </div>
              <h2 className="text-white font-bold md:text-4xl text-3xl mb-6 relative z-10">
                Pourquoi Maintenant ?
              </h2>
              <p className="text-pale-sky text-lg max-w-2xl mx-auto relative z-10 mb-4 space-y-2">
                <span className="block">L’intelligence artificielle redéfinit les règles du jeu.</span>
                <span className="block">Les entreprises qui l’intègrent aujourd’hui construisent l’avantage de demain.</span>
              </p>
              <p className="text-white text-xl font-bold relative z-10 mb-8">
                Prenez une longueur d’avance dès aujourd’hui.
              </p>
              <div className="flex justify-center relative z-10">
                <a
                  href="/contact"
                  className="md:w-auto w-full h-14 cta-wrapper group"
                >
                  <div className="cta-button bg-pale-sky hover:bg-dusty-grape px-8">
                    <p className="button-text text-onyx group-hover:text-white whitespace-nowrap">
                      Consultation gratuite
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </>
  );
};

export default LandingPage;
