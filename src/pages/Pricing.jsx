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
      "Qui veulent avancer vite, éliminer les tâches chronophages et capter leurs premiers gains de productivité, jusqu'à 30 % dès les premiers mois.",
    price: "À partir de 3 000 €",
    maintenance: "À partir de 150 €/mois",
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
      "Qui souhaitent booster leurs indicateurs de performance en connectant l'IA directement à leurs outils du quotidien (CRM, ERP, bases de données).",
    price: "À partir de 8 000 €",
    maintenance: "À partir de 400 €/mois",
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
      "Pour qui la sécurité des données, la maîtrise de la propriété intellectuelle et le retour sur investissement à grande échelle sont essentiels.",
    price: "À partir de 20 000 €",
    maintenance: "À partir de 900 €/mois",
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



const Pricing = () => {

    const servicesRef = useRef(null);

  return (
    <>
      <NavBar />

      {/* Hero */}
     <section className="relative overflow-hidden pt-40 pb-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-dusty-grape/20 rounded-full blur-[120px] -z-10" />

       <motion.div
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8 }}
                   className="relative z-10 max-w-5xl mx-auto text-center px-6"
               >
                   <div className="inline-flex items-center gap-3 rounded-full border border-pale-sky/20 bg-pale-sky/10 px-5 py-2 mb-8">
       
                     <Sparkles className="w-4 h-4 text-pale-sky" />
       
                     <span className="text-pale-sky text-sm font-medium tracking-wide">
       
                       PROGRAMME ENOR.IA
       
                     </span>
       
                   </div>
       </motion.div>

      </section>
    

      
      {/* Les sections viendront ici */}


        {/* PROGRAMME ENOR IA */}
        <section
          ref={servicesRef}
          className="w-full mb-0 relative z-10"
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

          <p className="max-w-4xl mx-auto text-center text-slate-grey text-lg leading-8 mt-5 mb-14">
                Avec{" "}
                <span className="font-semibold text-white">ENOR.IA</span>, nous ne déployons
                pas l'intelligence artificielle pour la technologie elle-même, mais pour
                créer un{" "}
                <span className="text-pale-sky font-semibold">
                    impact concret sur votre activité
                </span>
                . Nous automatisons vos processus, optimisons vos opérations, protégeons vos
                données et permettons à vos équipes de se concentrer sur les tâches à forte
                valeur ajoutée.
         </p>

         <div className="max-w-5xl mx-auto mt-24 mb-20 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
                Une IA qui s'adapte à votre entreprise,
                <span className="block bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent">
                jamais l'inverse.
                </span>
            </h3>

            <p className="text-slate-grey text-lg leading-8 max-w-4xl mx-auto">
                L'intelligence artificielle ne remplace pas vos équipes : elle leur redonne du temps. Avec notre programme ENOR.IA,
                c'est vous qui configurez votre IA, et nous sommes là pour la développer avec vous : un outil IA sur mesure,
                adapté à chaque processus et à chaque métier de votre entreprise
            </p>
        </div>

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
                        ? "border-pale-sky/40"
                        : "border-white/[0.08]"
                    }
                    bg-onyx
                    p-8
                    min-h-[760px]
                    shadow-2xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-pale-sky/40
                    `}
              >
                <div className="
                    absolute
                    inset-0
                    rounded-3xl
                    bg-gradient-to-br
                    from-pale-sky/5
                    via-transparent
                    to-dusty-grape/10
                    opacity-0
                    hover:opacity-100
                    transition-opacity
                    duration-500
                    pointer-events-none
                    "/>

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

                 {/* <p className="text-white text-xl font-bold mb-4">
                    {pack.advisory}
                  </p>*/}

                

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
                    Je souhaite ce pack
                  </a>

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
                    Devis
                  </a>

                </div>

              </div>

            ))}

            

          </div>

        </section>

      <Footer />
    </>
  );
};

export default Pricing;