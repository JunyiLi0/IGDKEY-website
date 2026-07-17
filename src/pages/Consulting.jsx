import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Check } from "lucide-react";

import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import TitleHeader from "../components/TitleHeader";

const consultingOffers = [
  {
    id: "starter",
    name: "STARTER",
    price: "À partir de 1 500 €",
    badge: null,
    target: "Entreprises qui découvrent l'IA",
    objective:
      "Obtenir une vision claire des opportunités IA et identifier les premiers leviers de création de valeur.",
    included: [
      "Audit initial (30 à 60 min)",
      "Analyse des processus clés",
      "Identification des opportunités IA",
      "Détection des Quick Wins",
      "Recommandations stratégiques",
    ],
    deliverables: [
      "Synthèse des opportunités",
      "Plan d'action priorisé",
      "Recommandation des outils",
    ],
  },

  {
    id: "expand",
    name: "EXPAND",
    price: "À partir de 3 500 €",
    badge: "Le plus demandé",
    target: "PME en croissance",
    objective:
      "Construire une feuille de route IA cohérente et directement reliée aux objectifs business.",
    included: [
      "Audit approfondi",
      "Analyse des flux automatisables",
      "Identification des cas d'usage",
      "Architecture cible",
      "Recommandation Agents IA",
      "Automatisations",
    ],
    deliverables: [
      "Roadmap IA détaillée",
      "Priorisation des projets",
      "Estimation des gains",
      "Préconisations techniques",
    ],
  },

  {
    id: "elite",
    name: "ELITE",
    price: "À partir de 7 000 €",
    badge: null,
    target: "ETI & Grandes entreprises",
    objective:
      "Définir une stratégie IA globale avec un impact durable sur la performance de l'entreprise.",
    included: [
      "Audit Business + Technique",
      "Cartographie des opportunités",
      "Architecture globale",
      "Alignement stratégique",
      "Gouvernance IA",
    ],
    deliverables: [
      "Plan stratégique complet",
      "Roadmap multi-phase",
      "Pré-chiffrage",
      "Recommandations organisationnelles",
    ],
  },
];

const Consulting = () => {
  return (
    <>
      <NavBar />

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative overflow-hidden pt-44 pb-28">

        {/* Glow */}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-dusty-grape/20 blur-[130px] -z-10" />

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-pale-sky/20 bg-pale-sky/10 px-5 py-2 mb-8">

              <Sparkles
                className="w-4 h-4 text-pale-sky"
              />

              <span className="text-pale-sky font-medium text-sm tracking-wide">

                IGDKEY CONSULTING

              </span>

            </div>

            <h1 className="text-white font-bold leading-tight text-5xl lg:text-7xl">

              Conseil &
              <span className="block bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent">

                Stratégie IA

              </span>

            </h1>

            <p className="text-slate-grey text-xl leading-8 max-w-4xl mx-auto mt-10">

              Avant de développer une intelligence artificielle,
              il faut comprendre votre entreprise.

              Nous vous accompagnons dans l'identification des
              opportunités, la définition d'une stratégie et
              la construction d'une feuille de route rentable.

            </p>

            <div className="flex flex-col md:flex-row justify-center gap-5 mt-14">

              <a
                href="#offres"
                className="
                bg-pale-sky
                hover:bg-dusty-grape
                hover:text-white
                text-onyx
                px-8
                py-4
                rounded-xl
                font-semibold
                transition-all
                flex
                items-center
                justify-center
                gap-2
                "
              >

                Découvrir nos offres

                <ArrowRight
                  className="w-5 h-5"
                />

              </a>

              <a
                href="/contact"
                className="
                border
                border-pale-sky
                text-pale-sky
                hover:bg-pale-sky
                hover:text-onyx
                px-8
                py-4
                rounded-xl
                font-semibold
                transition-all
                "
              >

                Prendre rendez-vous

              </a>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================================================= */}
        {/* POURQUOI COMMENCER PAR UN AUDIT */}
        {/* ================================================= */}

        <section className="padding-x-lg mb-32 relative overflow-hidden">

        {/* Glow background */}
        <div
            className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[900px]
            h-[900px]
            rounded-full
            bg-pale-sky/10
            blur-[160px]
            -z-10
            "
        />

        <div className="max-w-6xl mx-auto">

            <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                p-10
                md:p-14
                shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-pale-sky/40
            "
            >

            {/* Gradient overlay */}
            <div
                className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_top_right,rgba(125, 211, 252, 0.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(168, 85, 247, 0.08),transparent_35%)]
                "
            />
            <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-[0.03] pointer-events-none" />


            <div className="relative z-10">


                {/* Badge */}
                <div
                className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-pale-sky/20
                    bg-pale-sky/10
                    px-5
                    py-2
                    mb-8
                "
                >

                <ShieldCheck className="w-5 h-5 text-pale-sky" />

                <span className="text-pale-sky font-medium">
                    Une approche IA orientée business
                </span>

                </div>



                <h2
                className="
                    text-white
                    text-4xl
                    md:text-5xl
                    font-bold
                    leading-tight
                "
                >

                Pourquoi commencer par{" "}

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
                    un audit IA ?
                </span>

                </h2>



                <p
                className="
                    text-slate-grey
                    text-lg
                    leading-9
                    mt-8
                    max-w-5xl
                "
                >

                Une intelligence artificielle performante commence toujours
                par une compréhension profonde de votre entreprise.

                <br /><br />

                Avant de développer une solution, nous analysons vos processus,
                vos données et vos objectifs afin d'identifier les véritables
                opportunités d'automatisation et de création de valeur.

                <br /><br />

                Avec{" "}
                <span className="text-white font-semibold">
                    IGDKEY Consulting
                </span>
                , chaque projet IA repose sur une stratégie claire,
                mesurable et alignée avec vos enjeux métiers.

                </p>



                {/* Benefits cards */}

                <div className="grid md:grid-cols-3 gap-6 mt-14">


                {[
                    {
                    title: "Vision stratégique",
                    text:
                        "Identifier les cas d’usage IA réellement pertinents pour votre activité."
                    },
                    {
                    title: "ROI mesurable",
                    text:
                        "Prioriser les projets capables de générer rapidement de la valeur."
                    },
                    {
                    title: "Déploiement sécurisé",
                    text:
                        "Construire une architecture IA adaptée à vos contraintes métiers."
                    }

                ].map((item) => (

                    <motion.div

                    key={item.title}

                    whileHover={{
                        y: -8
                    }}

                    transition={{
                        duration: .3
                    }}

                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        p-6
                        hover:border-pale-sky/40
                        transition-all
                    "

                    >

                    <h3
                        className="
                        text-white
                        font-bold
                        text-xl
                        mb-3
                        "
                    >
                        {item.title}
                    </h3>


                    <p className="text-slate-grey leading-relaxed">

                        {item.text}

                    </p>


                    </motion.div>

                ))}


                </div>


            </div>


            </motion.div>


        </div>


        </section>

        {/* ================================================= */}
            {/* NOS OFFRES DE CONSULTING */}
            {/* ================================================= */}

            <section
            id="offres"
            className="padding-x-lg mb-32 relative overflow-hidden"
            >

                {/* Glow background IGDKEY */}

                <div
                className="
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[900px]
                h-[900px]
                rounded-full
                bg-pale-sky/10
                blur-[160px]
                -z-10
                "
                />

            <TitleHeader
                title={
                <>
                    Nos offres de{" "}
                    <span className="bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent">
                    Consulting IA
                    </span>
                </>
                }
            />

            <p className="text-center text-slate-grey text-lg mt-5 mb-16 max-w-3xl mx-auto leanding-relaxed">
                Trois niveaux d'accompagnement pour transformer vos idées en
                projets IA rentables, de l'audit initial jusqu'à la stratégie
                globale de transformation.
            </p>

            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {consultingOffers.map((offer) => (

                    <motion.div
                    key={offer.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className={`
                        group
                        relative
                        isolate
                        flex
                        flex-col
                        overflow-hidden
                        rounded-3xl

                        border
                        ${
                        offer.badge
                            ? "border-pale-sky"
                            : "border-white/10"
                        }

                        bg-white/[0.04]
                        backdrop-blur-xl

                        p-8

                        shadow-2xl

                        transition-all
                        duration-500

                        hover:-translate-y-2
                        hover:border-pale-sky/40

                        ${
                        offer.badge
                            ? "shadow-[0_0_50px_rgba(125,211,252,0.20)] scale-[1.03]"
                            : ""
                        }
                    `}
                    >
                        {/* Halo */}
                        <div
                        className="
                            absolute
                            inset-0
                            rounded-3xl
                            opacity-0
                            group-hover:opacity-100
                            transition-all
                            duration-500
                            bg-gradient-to-br
                            from-pale-sky/10
                            via-transparent
                            to-dusty-grape/10
                            pointer-events-none
                        "
                        />

                    {/* Badge */}

                    {offer.badge && (

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
                            {offer.badge}
                        </span>

                        </div>

                    )}

                    {/* Nom */}

                    <h2 className="text-white text-4xl font-bold">

                        {offer.name}

                    </h2>

                    <p className="text-pale-sky mt-3">

                        {offer.target}

                    </p>

                    {/* Objectif */}

                    <div className="mt-8">

                        <p className="text-pale-sky font-semibold mb-3">

                        Objectif

                        </p>

                        <p className="text-white leading-relaxed">

                        {offer.objective}

                        </p>

                    </div>

                    {/* Prix */}

                    <div className="mt-8">

                        <p className="text-3xl font-bold text-white">

                        {offer.price}

                        </p>

                        <p className="text-slate-grey">

                        prestation forfaitaire

                        </p>

                    </div>

                    {/* Inclus */}

                    <div className="mt-8">

                        <p className="text-white font-semibold mb-5">

                        Inclus

                        </p>

                        <ul className="space-y-3">

                        {offer.included.map((item) => (

                            <li
                            key={item}
                            className="flex items-start gap-3 text-white"
                            >

                            <Check
                                className="w-5 h-5 text-emerald-400 mt-[2px] shrink-0"
                            />

                            <span>

                                {item}

                            </span>

                            </li>

                        ))}

                        </ul>

                    </div>

                    {/* Livrables */}

                    <div className="mt-8">

                        <p className="text-pale-sky font-semibold mb-4">

                        Livrables

                        </p>

                        <div className="flex flex-wrap gap-2">

                        {offer.deliverables.map((item) => (

                            <span
                            key={item}
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

                            {item}

                            </span>

                        ))}

                        </div>

                    </div>

                    {/* CTA */}

                    <div className="mt-auto pt-8 border-t border-white/10">

                        <a
                        href="/contact"
                        className="
                            block
                            w-full
                            text-center
                            rounded-xl
                            bg-pale-sky
                            hover:bg-dusty-grape
                            hover:text-white
                            text-onyx
                            py-4
                            font-semibold
                            transition-all
                        "
                        >
                        Demander un devis
                        </a>

                    </div>

                    </motion.div>

                ))}

                </div>

            </div>

            </section>

            {/* ================================================= */}
            {/* ADVISORY MENSUEL */}
            {/* ================================================= */}

            <section className="padding-x-lg mb-32">

            <div className="max-w-7xl mx-auto">

                <div
                    className="
                        group
                        relative
                        overflow-hidden
                        rounded-3xl

                        border
                        border-white/10

                        bg-white/[0.04]
                        backdrop-blur-xl

                        shadow-2xl

                        transition-all
                        duration-500

                        hover:-translate-y-2
                        hover:border-pale-sky/40
                        "
                    >

                {/* Glow */}
                <div
                    className="
                    absolute
                    inset-0

                    bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.08),transparent_35%),
                    radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.08),transparent_40%)]

                    blur-xl
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        rounded-3xl
                        opacity-0
                        group-hover:opacity-100
                        transition-all
                        duration-500
                        bg-gradient-to-br
                        from-pale-sky/10
                        via-transparent
                        to-dusty-grape/10
                        pointer-events-none
                    "
                    />


                <div className="relative z-10 p-10 md:p-14">

                    <div className="text-center">

                    <p className="text-pale-sky uppercase tracking-[0.3em] font-semibold mb-5">
                        Advisory Mensuel
                    </p>

                    <h2 className="text-white text-5xl font-bold leading-tight">

                        Votre
                        <span className="bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent">
                        {" "}Directeur IA{" "}
                        </span>

                        à temps partagé

                    </h2>

                    <p className="text-slate-grey text-lg max-w-4xl mx-auto mt-8 leading-relaxed">

                        Les technologies d'intelligence artificielle évoluent chaque
                        semaine. Notre rôle est de vous accompagner durablement afin de
                        piloter votre stratégie IA, suivre vos projets, identifier de
                        nouvelles opportunités et garantir un retour sur investissement
                        continu.

                    </p>

                    </div>

                    {/* Offres */}

                    <div className="grid md:grid-cols-3 gap-8 mt-16">

                    {/* STARTER */}

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center hover:border-pale-sky/40 transition">

                        <h3 className="text-white text-2xl font-bold">
                        STARTER
                        </h3>

                        <p className="text-pale-sky text-4xl font-bold mt-6">
                        500€
                        </p>

                        <p className="text-slate-grey">
                        / mois
                        </p>

                        <div className="w-full h-px bg-white/10 my-8" />

                        <ul className="space-y-3 text-slate-grey text-sm">

                        <li>✓ Point stratégique mensuel</li>
                        <li>✓ Support décisionnel</li>
                        <li>✓ Veille technologique</li>
                        <li>✓ Recommandations IA</li>

                        </ul>

                    </div>

                    {/* EXPAND */}

                    <div className="rounded-2xl border border-pale-sky bg-white/[0.03] p-8 text-center scale-[1.03] relative">

                        <div className="absolute top-4 right-4">

                        <span className="bg-pale-sky text-onyx text-xs font-semibold px-3 py-1 rounded-full">
                            Recommandé
                        </span>

                        </div>

                        <h3 className="text-white text-2xl font-bold">
                        EXPAND
                        </h3>

                        <p className="text-pale-sky text-4xl font-bold mt-6">
                        1 000€
                        </p>

                        <p className="text-slate-grey">
                        / mois
                        </p>

                        <div className="w-full h-px bg-white/10 my-8" />

                        <ul className="space-y-3 text-slate-grey text-sm">

                        <li>✓ Pilotage de la roadmap IA</li>
                        <li>✓ Priorisation des projets</li>
                        <li>✓ Suivi des KPI</li>
                        <li>✓ Réunions stratégiques</li>
                        <li>✓ Assistance aux équipes</li>

                        </ul>

                    </div>

                    {/* CORE */}

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center hover:border-pale-sky/40 transition">

                        <h3 className="text-white text-2xl font-bold">
                        CORE
                        </h3>

                        <p className="text-pale-sky text-4xl font-bold mt-6">
                        2 000€
                        </p>

                        <p className="text-slate-grey">
                        / mois
                        </p>

                        <div className="w-full h-px bg-white/10 my-8" />

                        <ul className="space-y-3 text-slate-grey text-sm">

                        <li>✓ Directeur IA externalisé</li>
                        <li>✓ Accompagnement exécutif</li>
                        <li>✓ Gouvernance IA</li>
                        <li>✓ Optimisation continue</li>
                        <li>✓ Support prioritaire</li>
                        <li>✓ Veille stratégique</li>

                        </ul>

                    </div>

                    </div>

                    {/* CTA */}

                    <div className="mt-16 text-center">

                    <a
                        href="/contact"
                        className="
                        inline-flex
                        items-center
                        gap-2
                        bg-pale-sky
                        hover:bg-dusty-grape
                        hover:text-white
                        text-onyx
                        px-8
                        py-4
                        rounded-xl
                        font-semibold
                        transition-all
                        "
                    >
                        Demander un devis
                        <ArrowRight className="w-5 h-5" />
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

export default Consulting;