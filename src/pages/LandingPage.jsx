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
      "Veille automatisée",
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
                <h1 className="hero-title">
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
                    <span className="mt-2">Votre Entreprise avec l'IA</span>
                  </div>
                </h1>

                <p className="hero-subtitle">
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
                  text="Découvrir nos services"
                  className="md:w-80 w-full h-14"
                  id="services"
                />
              </div>
            </header>
          </div>
        </div>

        <AnimatedCounter />
      </section>

      <section className="md:mt-20 mt-10 padding-x-lg overflow-hidden">
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
                className={`engagement-card ${
                  featured
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

        {/* Services Section */}
        <div ref={servicesRef} className="w-full mb-32" id="services">
          <TitleHeader title="Nos Solutions IA" />
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
          <TitleHeader title="Pour Qui ?" />
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {audiences.map((item, index) => (
                <div
                  key={index}
                  className="audience-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 hover:from-pale-sky/50 transition-all duration-300"
                >
                  <div className="bg-onyx h-full rounded-xl p-4 flex flex-col items-center text-center">
                    <div className={`w-10 h-10 mb-3 rounded-lg ${item.bg} ${item.hoverBg} flex items-center justify-center transition-all duration-300`}>
                      <item.Icon className={`w-5 h-5 ${item.color} transition-colors duration-300`} strokeWidth={1.5} />
                    </div>
                    <p className="text-white text-sm font-semibold group-hover:text-mint-cream transition-colors">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white md:text-xl text-lg text-center mt-10 leading-relaxed font-semibold">
              Processus, données ou site web ? L'IA peut vous faire gagner de
              l'argent.
            </p>
          </div>
        </div>

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
              <p className="text-pale-sky text-lg max-w-2xl mx-auto relative z-10 mb-4">
                L'IA évolue vite. Les entreprises qui l'adoptent aujourd'hui
                dominent demain.
              </p>
              <p className="text-white text-xl font-bold relative z-10 mb-8">
                Prenez de l'avance sur vos concurrents.
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
