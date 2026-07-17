import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import TitleHeader from "../components/TitleHeader";

import {
  ArrowRight,
  Sparkles,
  Globe,
  Bot,
  BrainCircuit,
  TrendingUp,
  Check,
  PiggyBank,
  ShieldCheck,
  Brain,
  BarChart3,
} from "lucide-react";



const pillars = [
  {
    icon: Globe,
    title: "Expérience client",
    description:
      "Offrez un service disponible 24h/24 grâce à des assistants intelligents.",
  },
  {
    icon: Bot,
    title: "Automatisation",
    description:
      "Supprimez les tâches répétitives et libérez du temps à vos équipes.",
  },
  {
    icon: BrainCircuit,
    title: "Intelligence décisionnelle",
    description:
      "Exploitez vos données pour prendre des décisions plus rapides et plus fiables.",
  },
  {
    icon: TrendingUp,
    title: "Rentabilité",
    description:
      "Chaque projet est conçu pour produire un retour sur investissement mesurable.",
  },
];

const Cas_dusage = () => {
  return (
    <>
      <NavBar />

      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden pt-44 pb-32">

        {/* Glow */}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-dusty-grape/20 blur-[140px] -z-10" />

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="text-center"
          >

            <div className="inline-flex items-center gap-3 rounded-full border border-pale-sky/20 bg-pale-sky/10 px-5 py-2 mb-8">

              <Sparkles className="w-4 h-4 text-pale-sky" />

              <span className="text-pale-sky text-sm font-medium tracking-wide">

                CAS D'USAGE

              </span>

            </div>

            <h1 className="text-white font-bold text-5xl lg:text-7xl leading-tight">

              Exemples de cas d'usage

              <span className="block bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent">

                pour PME, ETI et Grands Comptes

              </span>

            </h1>

            <p className="text-slate-grey text-xl leading-9 max-w-4xl mx-auto mt-10">

              Découvrez comment nos solutions d'intelligence artificielle
              améliorent concrètement les performances des entreprises :
              automatisation, agents IA, sites intelligents et Machine Learning.

            </p>

            <div className="flex justify-center mt-14">

              <a
                href="#cas"
                className="
                inline-flex
                items-center
                gap-3
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

                Découvrir les cas d'usage

                <ArrowRight className="w-5 h-5" />

              </a>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* INTRODUCTION */}
      {/* ====================================================== */}

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

           <div
          className="
        absolute
        inset-0

        bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.08),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.08),transparent_40%)]

        "
        />
            <div className="relative z-10 p-10 md:p-14">

              <TitleHeader
                title="L'IA au service de vos métiers"
              />

              <p className="text-slate-grey text-lg leading-9 max-w-5xl mt-8">

                Chaque entreprise possède ses propres processus, ses contraintes
                et ses objectifs.

                Chez

                <span className="text-white font-semibold">
                  {" "}IGDKEY
                </span>

                , nous développons des solutions d'intelligence artificielle
                entièrement adaptées à votre activité.

                Notre objectif n'est pas simplement d'intégrer de la technologie,
                mais de créer un véritable levier de croissance capable
                d'augmenter votre productivité, d'améliorer votre relation client
                et de réduire vos coûts opérationnels.

              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

                {pillars.map((item) => (

                  <div
                    key={item.title}
                    className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-7
                    hover:border-pale-sky/30
                    transition-all
                    "
                  >

                    <div className="w-14 h-14 rounded-xl bg-pale-sky/10 flex items-center justify-center mb-6">

                      <item.icon
                        className="w-7 h-7 text-pale-sky"
                      />

                    </div>

                    <h3 className="text-white text-xl font-bold mb-4">

                      {item.title}

                    </h3>

                    <p className="text-slate-grey leading-7">

                      {item.description}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* CAS D'USAGE */}
      {/* ====================================================== */}

      <section
        id="cas"
        className="padding-x-lg mb-32"
      >

        <div className="max-w-7xl mx-auto">

          <TitleHeader
            title="Nos principaux cas d'usage"
          />

          <p className="text-center text-slate-grey text-lg mt-6 max-w-4xl mx-auto leading-8">

            Ces exemples illustrent la manière dont nos solutions IA
            transforment les processus métiers des entreprises,
            quel que soit leur secteur d'activité.

          </p>

        </div>

        {/* ====================================================== */}
        {/* 7.1 SITE WEB INTELLIGENT */}
        {/* ====================================================== */}

        <div className="mt-20">

        <div className="inline-flex items-center gap-3 rounded-full border border-pale-sky/20 bg-pale-sky/10 px-5 py-2 mb-8">
            <Globe className="w-5 h-5 text-pale-sky" />
            <span className="text-pale-sky font-medium tracking-wide">
            SITE WEB INTELLIGENT
            </span>
        </div>

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

            <div
                    className="
                    absolute
                    inset-0

                    bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.08),transparent_35%),
                    radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.08),transparent_40%)]

                    blur-xl
                    "
                />
            <div className="relative z-10 p-10 lg:p-14">

            <div className="grid lg:grid-cols-2 gap-14 items-center">

                {/* Texte */}

                <div>

                <h2 className="text-white text-4xl font-bold leading-tight">

                    Augmentez votre chiffre d'affaires de

                    <span className="block bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent">

                    +20 % grâce à un site intelligent

                    </span>

                </h2>

                <p className="text-slate-grey text-lg leading-9 mt-8">

                    Votre site internet devient un véritable commercial disponible
                    24h/24 et 7j/7.

                    Chaque visiteur est accueilli automatiquement,
                    orienté selon son besoin puis accompagné jusqu'à la prise de
                    rendez-vous avec vos équipes.

                </p>

                <p className="text-slate-grey text-lg leading-9 mt-6">

                    L'assistant IA répond instantanément aux questions,
                    qualifie les prospects, planifie les rendez-vous,
                    envoie des rappels automatiques et garantit
                    qu'aucune opportunité commerciale ne soit perdue.

                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                    {[
                    "Disponible 24h/24",
                    "Prise de rendez-vous",
                    "Qualification automatique",
                    "Rappels clients",
                    "Conversion optimisée",
                    ].map((item) => (

                    <span
                        key={item}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm"
                    >
                        {item}
                    </span>

                    ))}

                </div>

                <a
                    href="/contact"
                    className="
                    inline-flex
                    items-center
                    gap-2
                    mt-10
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
                    Demander une démonstration
                    <ArrowRight className="w-5 h-5" />
                </a>

                </div>

                {/* Bloc visuel */}

                <div 
                  className="
                        group
                        relative
                        overflow-hidden
                        rounded-xl

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

                <h3 className="text-white text-2xl font-bold mb-8">

                    Fonctionnalités principales

                </h3>

                <div className="space-y-5">

                    {[
                    "Accueil automatique des visiteurs",
                    "Réponses instantanées aux questions",
                    "Prise de rendez-vous dans votre agenda",
                    "Qualification des prospects",
                    "Notifications à vos commerciaux",
                    "Relances automatiques",
                    ].map((item) => (

                    <div
                        key={item}
                        className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                    >

                        <Check className="w-5 h-5 text-emerald-400" />

                        <span className="text-white">

                        {item}

                        </span>

                    </div>

                    ))}

                </div>

                </div>

            </div>

            </div>

        </div>

        </div>

        {/* ====================================================== */}
        {/* 7.2 AUTOMATISATION & AGENTS IA */}
        {/* ====================================================== */}

        <div className="mt-32">

        <div className="inline-flex items-center gap-3 rounded-full border border-violet-400/20 bg-violet-400/10 px-5 py-2 mb-8">

            <Bot className="w-5 h-5 text-violet-300" />

            <span className="text-violet-300 font-medium tracking-wide">
            AUTOMATISATION & AGENTS IA
            </span>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

            {/* ============================= */}
            {/* CAS 1 */}
            {/* ============================= */}

             <div 
                  className="
                        group
                        relative
                        overflow-hidden
                        rounded-xl

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

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,.08),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,.08),transparent_40%)]" />

            <div className="relative z-10 p-8">

                <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-400/20 flex items-center justify-center mb-8">

                <Bot className="w-8 h-8 text-violet-300" />

                </div>

                <p className="text-pale-sky uppercase tracking-[0.25em] text-sm font-semibold mb-4">
                Cas d'usage 01
                </p>

                <h3 className="text-white text-3xl font-bold leading-tight">

                Agent IA pour le

                <span className="block bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent">

                    support client

                </span>

                </h3>

                <p className="text-slate-grey leading-8 mt-8">

                Les équipes support consacrent une grande partie de leur
                journée à répondre aux mêmes questions.

                Notre agent IA analyse automatiquement les e-mails,
                comprend la demande du client,
                rédige une réponse adaptée
                et transfère uniquement les dossiers complexes
                vers le bon collaborateur.

                </p>

                <div className="space-y-4 mt-10">

                {[
                    "Lecture automatique des e-mails",
                    "Réponses IA personnalisées",
                    "Classement des demandes",
                    "Transmission aux bons services",
                    "Historique centralisé",
                    "Disponible 24h/24",
                ].map((item) => (

                    <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                    >

                    <Check className="w-5 h-5 text-emerald-400" />

                    <span className="text-white">

                        {item}

                    </span>

                    </div>

                ))}

                </div>

                <div className="mt-10 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-6">

                <p className="text-emerald-300 font-semibold mb-2">

                    Résultat attendu

                </p>

                <p className="text-white">

                    Jusqu'à 60 % d'e-mails répétitifs automatisés,
                    permettant aux équipes de se concentrer
                    sur les clients à forte valeur ajoutée.

                </p>

                </div>

            </div>

            </div>

            {/* ============================= */}
            {/* CAS 2 */}
            {/* ============================= */}

             <div 
                  className="
                        group
                        relative
                        overflow-hidden
                        rounded-xl

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

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,.08),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,.08),transparent_40%)]" />

            <div className="relative z-10 p-8">

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-8">

                <Brain className="w-8 h-8 text-cyan-300" />

                </div>

                <p className="text-pale-sky uppercase tracking-[0.25em] text-sm font-semibold mb-4">
                Cas d'usage 02
                </p>

                <h3 className="text-white text-3xl font-bold leading-tight">

                Agent IA de

                <span className="block bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent">

                    synchronisation CRM

                </span>

                </h3>

                <p className="text-slate-grey leading-8 mt-8">

                L'agent IA analyse automatiquement les e-mails,
                extrait les informations présentes dans les pièces jointes,
                vérifie leur cohérence avec votre CRM,
                détecte les anomalies
                puis met à jour vos données commerciales
                sans intervention humaine.

                </p>

                <div className="space-y-4 mt-10">

                {[
                    "Lecture des pièces jointes",
                    "Extraction des références",
                    "Contrôle des tarifs",
                    "Détection des incohérences",
                    "Mise à jour du CRM",
                    "Synchronisation quotidienne",
                ].map((item) => (

                    <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                    >

                    <Check className="w-5 h-5 text-emerald-400" />

                    <span className="text-white">

                        {item}

                    </span>

                    </div>

                ))}

                </div>

                <div className="mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-6">

                <p className="text-cyan-300 font-semibold mb-2">

                    Résultat attendu

                </p>

                <p className="text-white">

                    Des données CRM toujours fiables,
                    une réduction importante des erreurs humaines
                    et un gain de temps quotidien
                    pour les équipes commerciales.

                </p>

                </div>

            </div>

            </div>

        </div>

        </div>

        {/* ====================================================== */}
        {/* 7.3 MACHINE LEARNING & IA GENERATIVE */}
        {/* ====================================================== */}

        <div className="mt-32">

        {/* Header section */}

        <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 mb-8">

            <BrainCircuit className="w-5 h-5 text-emerald-300" />

            <span className="text-emerald-300 font-medium tracking-wide">
            MACHINE LEARNING & IA GÉNÉRATIVE
            </span>

        </div>


                <div 
                  className="
                        group
                        relative
                        overflow-hidden
                        rounded-xl

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

            <div className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(125,211,252,.10),transparent_40%)]
            " />


            <div className="
            relative
            z-10
            p-10
            md:p-14
            ">


            <div className="
                grid
                lg:grid-cols-2
                gap-14
                items-center
            ">


                {/* ===================== */}
                {/* TEXTE */}
                {/* ===================== */}

                <div>


                <p className="
                    text-pale-sky
                    uppercase
                    tracking-[0.25em]
                    text-sm
                    font-semibold
                    mb-5
                ">

                    Cas d'usage IA prédictive

                </p>


                <h2 className="
                    text-white
                    text-4xl
                    lg:text-5xl
                    font-bold
                    leading-tight
                ">

                    Optimisez votre

                    <span className="
                    block
                    bg-gradient-to-r
                    from-pale-sky
                    via-white
                    to-dusty-grape
                    bg-clip-text
                    text-transparent
                    ">

                    recouvrement client grâce à l'IA

                    </span>

                </h2>


                <p className="
                    text-slate-grey
                    text-lg
                    leading-9
                    mt-8
                ">

                    Notre modèle de Machine Learning analyse
                    l'historique de paiement de vos clients afin
                    d'identifier les risques de retard et
                    d'anticiper les impayés avant qu'ils ne surviennent.

                </p>


                <p className="
                    text-slate-grey
                    text-lg
                    leading-9
                    mt-6
                ">

                    L'intelligence artificielle génère ensuite
                    des scénarios de relance personnalisés
                    selon le profil du client,
                    son comportement de paiement
                    et son historique d'échanges.

                </p>



                {/* Tags */}

                <div className="
                    flex
                    flex-wrap
                    gap-3
                    mt-10
                ">

                    {[
                    "Analyse prédictive",
                    "Détection des risques",
                    "Scoring client",
                    "Relances intelligentes",
                    "Optimisation trésorerie",
                    ].map((item)=>(

                    <span
                        key={item}
                        className="
                        px-4
                        py-2
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        text-white
                        text-sm
                        "
                    >

                        {item}

                    </span>

                    ))}


                </div>


                </div>



                {/* ===================== */}
                {/* CARTE DATA */}
                {/* ===================== */}

                <div className="
                rounded-3xl
                border
                border-emerald-400/20
                order
                border-white/10

                bg-white/[0.04]
                backdrop-blur-xl
                p-8
                ">


                <div className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-emerald-400/10
                    border
                    border-emerald-400/20
                    flex
                    items-center
                    justify-center
                    mb-8
                ">

                    <BarChart3
                    className="
                        w-8
                        h-8
                        text-emerald-300
                    "
                    />

                </div>



                <h3 className="
                    text-white
                    text-2xl
                    font-bold
                    mb-8
                ">

                    Intelligence prédictive

                </h3>



                <div className="space-y-5">


                    {[
                    {
                        title:"Analyse historique",
                        desc:"Étude des comportements de paiement"
                    },
                    {
                        title:"Détection anticipée",
                        desc:"Identification des risques d'impayés"
                    },
                    {
                        title:"IA générative",
                        desc:"Création automatique des scénarios de relance"
                    },
                    {
                        title:"Amélioration continue",
                        desc:"Le modèle apprend avec vos nouvelles données"
                    }

                    ].map((item)=>(


                    <div
                        key={item.title}
                        className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-5
                        
                        "
                    >

                        <p className="
                        text-white
                        font-semibold
                        mb-2
                        ">

                        {item.title}

                        </p>


                        <p className="
                        text-slate-grey
                        text-sm
                        ">

                        {item.desc}

                        </p>


                    </div>


                    ))}


                </div>


                </div>


            </div>



            {/* ROI */}

            <div className="
                mt-14
                rounded-2xl
                border
                border-pale-sky/20
                bg-pale-sky/10
                p-8
            ">


                <div className="
                flex
                flex-col
                md:flex-row
                items-center
                gap-6
                ">


                <TrendingUp
                    className="
                    w-12
                    h-12
                    text-pale-sky
                    shrink-0
                    "
                />


                <div>


                    <h3 className="
                    text-white
                    text-2xl
                    font-bold
                    mb-3
                    ">

                    Impact business

                    </h3>


                    <p className="
                    text-slate-grey
                    text-lg
                    leading-8
                    ">

                    Réduisez vos délais de paiement,
                    améliorez votre visibilité financière
                    et optimisez votre trésorerie grâce
                    à une approche basée sur la donnée.

                    </p>


                </div>


                </div>


            </div>


            </div>


        </div>


        </div>

      </section>

      {/* La partie 2 commencera ici */}

      <Footer />
    </>
  );
};

export default Cas_dusage;