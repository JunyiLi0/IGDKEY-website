import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import TitleHeader from "../components/TitleHeader";
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words, abilities } from "../constants";
import { getAssetPath } from "../config";
import IGDKeyLogo from "../components/AnimatedLetters";
import Chat from "../components/Chat";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const transformRef = useRef(null);
  const whyChooseRef = useRef(null);
  const valuesRef = useRef(null);
  const servicesRef = useRef(null);
  const targetAudienceRef = useRef(null);
  const investmentRef = useRef(null);
  const urgencyRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    // Hero text animation
    gsap.fromTo(
      ".hero-text-animated",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
    );

    // Values cards animation
    gsap.from(".value-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: valuesRef.current,
        start: "top 75%",
      },
    });

    // Transform section animation
    gsap.from(transformRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: transformRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Why choose us cards staggered animation
    gsap.from(".why-choose-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: whyChooseRef.current,
        start: "top 70%",
      },
    });

    // Services cards staggered animation
    gsap.from(".service-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top 70%",
      },
    });

    // Target audience animation
    gsap.from(".audience-card", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      scrollTrigger: {
        trigger: targetAudienceRef.current,
        start: "top 75%",
      },
    });

    // Investment section animation
    gsap.from(".investment-item", {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: investmentRef.current,
        start: "top 75%",
      },
    });

    // Urgency section animation
    gsap.from(urgencyRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      scrollTrigger: {
        trigger: urgencyRef.current,
        start: "top 80%",
      },
    });

    // CTA section animation with scale
    gsap.from(ctaRef.current, {
      opacity: 0,
      scale: 0.95,
      y: 30,
      duration: 1,
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <>
      <NavBar />
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-30">
          <img src={getAssetPath("/images/bg.png")} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Hero Container with Proper Spacing */}
        <div className="hero-container">
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
                              className="bg-gradient-to-r from-pale-sky via-dusty-grape to-dusty-grape bg-clip-text text-transparent"
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

              {/* CTA Button */}
              <div className="hero-cta-wrapper">
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

      <section>
        {/* Transform Your Business Section */}
        <div ref={transformRef} className="w-full mb-20 padding-x-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white font-bold md:text-5xl text-4xl mb-8 text-center leading-tight">
              Transformez Votre Entreprise Avec <br />
              <span className="bg-gradient-to-r from-pale-sky to-dusty-grape bg-clip-text text-transparent">
                l'Intelligence Artificielle
              </span>
            </h2>
            <div className="space-y-6 text-white-50 md:text-xl text-lg">
              <p className="leading-relaxed">
                Votre entreprise mérite mieux que des processus lents, des tâches répétitives et des outils dépassés.
              </p>
              <p className="leading-relaxed">
                Aujourd'hui, l'Intelligence Artificielle n'est plus une option. C'est l'avantage concurrentiel qui différencie les leaders du marché.
              </p>
              <p className="leading-relaxed">
                Nous aidons les entreprises de tous secteurs à adopter des solutions intelligentes : AI agents, chatbots avancés, automatisation IA, optimisation de sites web, et stratégies machine learning.
              </p>
              <div className="card-border rounded-xl p-8 mt-8 bg-gradient-to-br from-onyx to-dusty-grape">
                <p className="text-mint-cream md:text-2xl text-xl font-semibold text-center">
                  🔥 Notre mission : vous faire gagner du temps, réduire vos coûts et augmenter vos revenus grâce à l'IA.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div ref={whyChooseRef} className="w-full mb-20 padding-x-lg">
          <TitleHeader
            title="Pourquoi Choisir Notre Groupe de Consulting IA & Web ?"
            sub="🧠 Notre expertise"
          />
          <div className="grid-3-cols mt-12">
            <div className="why-choose-card card-border rounded-xl p-8 flex flex-col gap-4">
              <h3 className="text-white text-2xl font-semibold">Une expertise complète en intelligence artificielle</h3>
              <p className="text-white-50 text-lg leading-relaxed">
                Nous combinons l'expertise humaine avec la puissance de l'IA pour créer des solutions sur mesure pour chaque entreprise.
              </p>
              <p className="text-white-50 text-lg leading-relaxed">
                Nos consultants travaillent avec les technologies les plus avancées : systèmes d'IA autonomes, modèles prédictifs, optimisation de données, agents automatisés et plus encore.
              </p>
            </div>

            <div className="why-choose-card card-border rounded-xl p-8 flex flex-col gap-4">
              <h3 className="text-white text-2xl font-semibold">Approche 100 % personnalisée</h3>
              <p className="text-white-50 text-lg leading-relaxed">
                Chaque entreprise a des besoins uniques. C'est pourquoi nous créons des solutions entièrement adaptées à votre secteur, à vos objectifs et à votre budget.
              </p>
            </div>

            <div className="why-choose-card card-border rounded-xl p-8 flex flex-col gap-4">
              <h3 className="text-white text-2xl font-semibold">Accompagnement de A à Z</h3>
              <p className="text-white-50 text-lg leading-relaxed">
                De l'audit initial à la mise en production des solutions IA, nous vous accompagnons à chaque étape.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div ref={servicesRef} className="w-full mb-20 padding-x-lg" id="services">
          <TitleHeader
            title="Nos Services en Intelligence Artificielle & Automatisation"
            sub="🤖 Nos solutions"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Service 1 - AI Agents */}
            <div className="service-card card-border rounded-xl p-8 flex flex-col gap-4">
              <div className="text-4xl mb-2">🤖</div>
              <h3 className="text-white text-2xl font-semibold">
                1. Développement d'AI Agents Autonomes
              </h3>
              <p className="text-white-50 text-lg leading-relaxed">
                Nos agents IA exécutent des tâches humaines de manière autonome :
              </p>
              <ul className="text-white-50 text-lg space-y-2 list-disc list-inside">
                <li>Gestion de données</li>
                <li>Traitement de demandes</li>
                <li>Suivi client</li>
                <li>Veille de marché</li>
                <li>Analyses automatisées</li>
              </ul>
              <p className="text-white-50 text-lg leading-relaxed mt-4">
                Ils travaillent 24/7 pour optimiser vos opérations.
              </p>
            </div>

            {/* Service 2 - Chatbots */}
            <div className="service-card card-border rounded-xl p-8 flex flex-col gap-4">
              <div className="text-4xl mb-2">💬</div>
              <h3 className="text-white text-2xl font-semibold">
                2. Chatbots Avancés & Assistants Conversationnels
              </h3>
              <p className="text-white-50 text-lg leading-relaxed">
                Boostez votre service client grâce à des chatbots intelligents capables de :
              </p>
              <ul className="text-white-50 text-lg space-y-2 list-disc list-inside">
                <li>Répondre instantanément</li>
                <li>Qualifier des prospects</li>
                <li>Prendre des rendez-vous</li>
                <li>Effectuer des actions automatisées</li>
              </ul>
              <p className="text-white-50 text-lg leading-relaxed mt-4">
                Ces chatbots s'adaptent au langage naturel et évoluent en fonction des interactions.
              </p>
            </div>

            {/* Service 3 - Automation */}
            <div className="service-card card-border rounded-xl p-8 flex flex-col gap-4">
              <div className="text-4xl mb-2">⚙️</div>
              <h3 className="text-white text-2xl font-semibold">
                3. Automatisation IA & Optimisation Opérationnelle
              </h3>
              <p className="text-white-50 text-lg leading-relaxed">
                Nous automatisons vos tâches chronophages :
              </p>
              <ul className="text-white-50 text-lg space-y-2 list-disc list-inside">
                <li>Saisie et analyse de données</li>
                <li>Reporting</li>
                <li>Facturation</li>
                <li>Gestion des emails</li>
                <li>Onboarding interne</li>
              </ul>
              <p className="text-white font-semibold text-lg mt-4">
                Résultat : moins d'erreurs, plus de productivité, et une équipe concentrée sur l'essentiel.
              </p>
            </div>

            {/* Service 4 - Machine Learning */}
            <div className="service-card card-border rounded-xl p-8 flex flex-col gap-4">
              <div className="text-4xl mb-2">📊</div>
              <h3 className="text-white text-2xl font-semibold">
                4. Machine Learning & Analyse Prédictive
              </h3>
              <p className="text-white-50 text-lg leading-relaxed">
                Nos solutions ML transforment vos données en puissance décisionnelle :
              </p>
              <ul className="text-white-50 text-lg space-y-2 list-disc list-inside">
                <li>Prédiction de ventes</li>
                <li>Segmentation clients</li>
                <li>Détection d'opportunités</li>
                <li>Analyse comportementale</li>
                <li>Forecasting avancé</li>
              </ul>
              <p className="text-white font-semibold text-lg mt-4">
                Le futur de votre entreprise se construit aujourd'hui.
              </p>
            </div>

            {/* Service 5 - Web Development */}
            <div className="service-card card-border rounded-xl p-8 flex flex-col gap-4 md:col-span-2">
              <div className="text-4xl mb-2">🌐</div>
              <h3 className="text-white text-2xl font-semibold">
                5. Création & Optimisation de Sites Web Intelligents
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white-50 text-lg leading-relaxed mb-4">
                    Nous développons des sites web modernes, rapides et connectés aux outils IA :
                  </p>
                  <ul className="text-white-50 text-lg space-y-2 list-disc list-inside">
                    <li>Analyse du comportement visiteur</li>
                    <li>Optimisation automatique</li>
                    <li>Intégration d'agents IA</li>
                    <li>Expériences personnalisées pour chaque utilisateur</li>
                  </ul>
                </div>
                <div className="flex items-center">
                  <p className="text-white text-xl font-semibold">
                    Votre site ne sera plus une simple vitrine, mais un véritable moteur de conversion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Target Audience Section */}
        <div ref={targetAudienceRef} className="w-full mb-20">
          <TitleHeader
            title="À Qui S'adressent Nos Solutions ?"
            sub="💼 Nos clients"
          />
          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-white-50 md:text-xl text-lg text-center mb-10 leading-relaxed">
              Nos technologies s'adaptent à tous types d'organisations :
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "PME & startups",
                "Cabinets professionnels",
                "E-commerce",
                "Immobilier",
                "Santé",
                "Industrie",
                "Finance",
                "Éducation",
                "Services B2B",
                "Services B2C",
              ].map((industry, index) => (
                <div key={index} className="audience-card card-border rounded-lg p-4 text-center">
                  <p className="text-white text-lg font-semibold">{industry}</p>
                </div>
              ))}
            </div>
            <p className="text-white md:text-xl text-lg text-center mt-10 leading-relaxed font-semibold">
              Si votre entreprise utilise des processus, des données ou un site web… l'IA peut vous faire gagner de l'argent.
            </p>
          </div>
        </div>

        {/* Investment ROI Section */}
        <div ref={investmentRef} className="w-full mb-20">
          <TitleHeader
            title="Un Investissement qui Rapporte Immédiatement"
            sub="📈 ROI garanti"
          />
          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-white-50 md:text-xl text-lg text-center mb-10 leading-relaxed">
              Intégrer l'IA dans votre entreprise n'est pas une dépense :
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="investment-item card-border rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">💪</div>
                <p className="text-white text-xl font-semibold mb-2">Un multiplicateur de productivité</p>
                <p className="text-white-50 text-lg">
                  Vos équipes accomplissent plus en moins de temps
                </p>
              </div>
              <div className="investment-item card-border rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">💰</div>
                <p className="text-white text-xl font-semibold mb-2">Un générateur de revenus</p>
                <p className="text-white-50 text-lg">
                  Convertissez plus de prospects et optimisez vos ventes
                </p>
              </div>
              <div className="investment-item card-border rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">🎯</div>
                <p className="text-white text-xl font-semibold mb-2">Un avantage stratégique décisif</p>
                <p className="text-white-50 text-lg">
                  Dépassez vos concurrents avec la technologie
                </p>
              </div>
            </div>
            <div className="card-border rounded-xl p-8 mt-10 bg-gradient-to-br from-onyx to-dusty-grape text-center">
              <p className="text-mint-cream md:text-2xl text-xl font-semibold">
                Avec nous, vos solutions IA sont rentabilisées en quelques semaines seulement.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div ref={valuesRef} className="w-full mb-20 padding-x-lg">
          <TitleHeader
            title="Les Valeurs qui Guident Notre Accompagnement"
            sub="💎 Nos valeurs"
          />
          <div className="grid-3-cols mt-12">
            {abilities.map(({ imgPath, title, desc }) => (
              <div
                key={title}
                className="value-card card-border rounded-xl p-8 flex flex-col gap-4"
              >
                <div className="size-14 flex items-center justify-center rounded-full">
                  <img src={imgPath} alt={title} />
                </div>
                <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
                <p className="text-white-50 text-lg">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency Section */}
        <div ref={urgencyRef} className="w-full mb-20">
          <div className="max-w-3xl mx-auto card-border rounded-2xl p-10 md:p-16 bg-gradient-to-br from-dusty-grape/20 to-pale-sky/20">
            <div className="text-center space-y-6">
              <div className="text-5xl mb-4">⚡</div>
              <h2 className="text-white font-bold md:text-4xl text-3xl">
                Pourquoi Passer à l'Action Maintenant ?
              </h2>
              <p className="text-white-50 md:text-2xl text-xl leading-relaxed">
                L'IA évolue vite. Très vite.
              </p>
              <p className="text-white md:text-2xl text-xl font-semibold leading-relaxed">
                Les entreprises qui l'adoptent aujourd'hui dominent le marché demain.
              </p>
              <p className="text-white-50 md:text-2xl text-xl leading-relaxed">
                Ne laissez pas vos concurrents prendre de l'avance.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div ref={ctaRef} className="w-full mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white font-bold md:text-5xl text-3xl mb-6 leading-tight">
              Prêt à Transformer Votre Entreprise Grâce à l'IA ?
            </h2>
            <p className="text-white-50 md:text-xl text-lg mb-8 leading-relaxed">
              Réservez une consultation gratuite dès maintenant
            </p>
            <p className="text-white-50 md:text-lg text-base mb-10 max-w-2xl mx-auto leading-relaxed">
              Nous analyserons vos besoins, vos objectifs et vous proposerons une stratégie IA complète adaptée à votre activité.
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="md:w-[500px] w-full h-16 cta-wrapper group"
              >
                <div className="cta-button">
                  <p className="button-text">Réserver une consultation gratuite</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Chat />
      <Footer />
    </>
  );
};

export default LandingPage;

