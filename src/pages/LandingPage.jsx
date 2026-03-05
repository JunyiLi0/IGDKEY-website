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

const LandingPage = () => {
  const heroRef = useRef(null);
  const transformRef = useRef(null);
  const engagementsRef = useRef(null);
  const servicesRef = useRef(null);
  const targetAudienceRef = useRef(null);
  const investmentRef = useRef(null);
  const urgencyRef = useRef(null);
  const founderRef = useRef(null);
  const ctaRef = useRef(null);

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

          // Founder section animation
          if (founderRef.current) {
            gsap.from(founderRef.current, {
              opacity: 0,
              y: 50,
              duration: 1,
              scrollTrigger: {
                trigger: founderRef.current,
                start: "top 85%",
              },
            });
          }

          // CTA section animation with scale
          if (ctaRef.current) {
            gsap.from(ctaRef.current, {
              opacity: 0,
              scale: 0.9,
              duration: 0.8,
              scrollTrigger: {
                trigger: ctaRef.current,
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
                  🔥 Notre mission : gagner du temps, réduire vos coûts,
                  augmenter vos revenus.
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
          <div className="mt-12">
            {/* Top Row: 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {/* Service 1 - AI Agents */}
              <TiltCard className="service-card rounded-2xl h-full">
                <div className="p-6 flex flex-col h-full text-center items-center">
                  <div className="text-5xl mb-4">🤖</div>
                  <h3 className="text-white text-2xl font-bold mb-3">
                    AI Agents Autonomes
                  </h3>
                  <ul className="text-slate-grey text-base space-y-2 text-left w-full">
                    <li className="flex items-start gap-2">
                      <span className="text-mint-cream">✓</span>Gestion de
                      données
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mint-cream">✓</span>Traitement de
                      demandes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mint-cream">✓</span>Suivi client
                      24/7
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mint-cream">✓</span>Veille
                      automatisée
                    </li>
                  </ul>
                </div>
              </TiltCard>

              {/* Service 2 - Chatbots */}
              <TiltCard className="service-card rounded-2xl h-full">
                <div className="p-6 flex flex-col h-full text-center items-center">
                  <div className="text-5xl mb-4">💬</div>
                  <h3 className="text-white text-2xl font-bold mb-3">
                    Chatbots Avancés
                  </h3>
                  <ul className="text-slate-grey text-base space-y-2 text-left w-full">
                    <li className="flex items-start gap-2">
                      <span className="text-mint-cream">✓</span>Réponses
                      instantanées
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mint-cream">✓</span>Qualification
                      prospects
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mint-cream">✓</span>Prise de
                      rendez-vous
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mint-cream">✓</span>Langage naturel
                    </li>
                  </ul>
                </div>
              </TiltCard>

              {/* Service 3 - Automation */}
              <TiltCard className="service-card rounded-2xl h-full">
                <div className="p-6 flex flex-col h-full text-center items-center">
                  <div className="text-5xl mb-4">⚙️</div>
                  <h3 className="text-white text-2xl font-bold mb-3">
                    Automatisation IA
                  </h3>
                  <ul className="text-slate-grey text-base space-y-2 text-left w-full">
                    <li className="flex items-start gap-2">
                      <span className="text-mint-cream">✓</span>Saisie & analyse
                      données
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mint-cream">✓</span>Reporting
                      automatique
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mint-cream">✓</span>Gestion des
                      emails
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mint-cream">✓</span>Facturation
                    </li>
                  </ul>
                </div>
              </TiltCard>
            </div>

            {/* Bottom Row: 2 Columns centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:w-4/5 lg:mx-auto gap-6">
              {/* Service 4 - Machine Learning */}
              <TiltCard className="service-card rounded-2xl h-full">
                <div className="p-6 flex flex-col h-full text-center items-center">
                  <div className="text-5xl mb-4">📊</div>
                  <h3 className="text-white text-2xl font-bold mb-3">
                    Machine Learning
                  </h3>
                  <ul className="text-slate-grey text-base space-y-2 text-left w-full">
                    <li className="flex items-start gap-2">
                      <span className="text-mint-cream">✓</span>Prédiction de
                      ventes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mint-cream">✓</span>Segmentation
                      clients
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mint-cream">✓</span>Détection
                      opportunités
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mint-cream">✓</span>Forecasting
                      avancé
                    </li>
                  </ul>
                </div>
              </TiltCard>

              {/* Service 5 - Web Development */}
              <TiltCard className="service-card rounded-2xl h-full">
                <div className="p-6 flex flex-col h-full text-center items-center">
                  <div className="text-5xl mb-4">🌐</div>
                  <h3 className="text-white text-2xl font-bold mb-3">
                    Sites Web Intelligents
                  </h3>
                  <ul className="text-slate-grey text-base space-y-2 text-left w-full">
                    <li className="flex items-start gap-2">
                      <span className="text-mint-cream">✓</span>Analyse
                      comportementale
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mint-cream">✓</span>Optimisation
                      automatique
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mint-cream">✓</span>Intégration
                      agents IA
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mint-cream">✓</span>Expériences
                      personnalisées
                    </li>
                  </ul>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>

        {/* Target Audience Section */}
        <div ref={targetAudienceRef} className="w-full mb-32">
          <TitleHeader title="Pour Qui ?" />
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { icon: "🚀", label: "PME & Startups" },
                { icon: "🏢", label: "Cabinets pro" },
                { icon: "🛒", label: "E-commerce" },
                { icon: "🏠", label: "Immobilier" },
                { icon: "🏥", label: "Santé" },
                { icon: "🏭", label: "Industrie" },
                { icon: "💳", label: "Finance" },
                { icon: "📚", label: "Éducation" },
                { icon: "🤝", label: "B2B" },
                { icon: "🛍️", label: "B2C" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="audience-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 hover:from-pale-sky/50 transition-all duration-300"
                >
                  <div className="bg-onyx h-full rounded-xl p-4 flex flex-col items-center text-center">
                    <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
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
              <div className="investment-item group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 hover:from-pale-sky/50 transition-all duration-300">
                <div className="bg-onyx h-full rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    💪
                  </div>
                  <p className="text-white text-xl font-bold mb-2">
                    Productivité accrue
                  </p>
                  <p className="text-slate-grey group-hover:text-white-50 transition-colors">
                    Plus de résultats en moins de temps
                  </p>
                </div>
              </div>
              <div className="investment-item group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 hover:from-pale-sky/50 transition-all duration-300">
                <div className="bg-onyx h-full rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    💰
                  </div>
                  <p className="text-white text-xl font-bold mb-2">
                    Revenus Boostés
                  </p>
                  <p className="text-slate-grey group-hover:text-white-50 transition-colors">
                    Convertissez plus, vendez mieux
                  </p>
                </div>
              </div>
              <div className="investment-item group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 hover:from-pale-sky/50 transition-all duration-300">
                <div className="bg-onyx h-full rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    🎯
                  </div>
                  <p className="text-white text-xl font-bold mb-2">
                    Avantage Décisif
                  </p>
                  <p className="text-slate-grey group-hover:text-white-50 transition-colors">
                    Dépassez vos concurrents
                  </p>
                </div>
              </div>
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



        {/* Urgency Section */}
        <div ref={urgencyRef} className="w-full mb-20">
          <div className="w-full p-1 rounded-3xl bg-gradient-to-r from-dusty-grape via-pale-sky to-dusty-grape max-w-3xl mx-auto">
            <div className="bg-onyx rounded-[22px] px-6 py-16 md:px-20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.svg')] opacity-20"></div>
              <div className="text-5xl mb-6 relative z-10">⚡</div>
              <h2 className="text-white font-bold md:text-4xl text-3xl mb-6 relative z-10">
                Pourquoi Maintenant ?
              </h2>
              <p className="text-pale-sky text-lg max-w-2xl mx-auto relative z-10 mb-4">
                L'IA évolue vite. Les entreprises qui l'adoptent aujourd'hui
                dominent demain.
              </p>
              <p className="text-white text-xl font-bold relative z-10">
                Prenez de l'avance sur vos concurrents.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div ref={founderRef} className="w-full mb-20">
          <TitleHeader title="La Fondatrice" />
          <div className="max-w-5xl mx-auto mt-10">
            <div className="w-full p-1 rounded-3xl bg-gradient-to-r from-dusty-grape via-pale-sky to-dusty-grape">
              <div className="bg-onyx rounded-[22px] px-6 py-12 md:px-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.svg')] opacity-20"></div>
                <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-br from-pale-sky to-dusty-grape">
                      <img
                        src={getAssetPath("/images/Myriam.jpeg")}
                        alt="Myriam IGDEM"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Bio */}
                  <div className="text-center md:text-left">
                    <h3 className="text-white font-bold text-2xl md:text-3xl mb-2">
                      Myriam IGDEM
                    </h3>
                    <p className="text-pale-sky font-semibold text-lg mb-4">
                      PDG & Fondatrice d'IGDKEY
                    </p>
                    <p className="text-slate-grey leading-relaxed mb-3">
                      Diplômée de l'Université Paris Cité en finance et contrôle
                      de gestion, Myriam quitte le parcours académique à 20 ans
                      pour se consacrer à sa vision entrepreneuriale. Forte de
                      plus de cinq ans en trading, elle développe un esprit
                      stratégique aiguisé et une maîtrise des KPI et de la
                      gestion du risque.
                    </p>
                    <p className="text-slate-grey leading-relaxed">
                      Passionnée d'informatique et d'innovation, formée à l'IA
                      et lauréate d'un concours d'innovation chez Salesforce en
                      conception 3D, elle fonde IGDKEY avec une conviction :
                      exploiter toute la puissance de l'intelligence artificielle
                      tout en conservant un contrôle total sur ses données
                      stratégiques. Aujourd'hui, une équipe de 9 experts
                      l'accompagne dans cette mission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="mt-10 md:mt-16 padding-x-lg overflow-hidden">
        <div ref={ctaRef} className="w-full mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="card-border rounded-2xl p-10 md:p-16 bg-gradient-to-br from-dusty-grape/10 to-pale-sky/10 text-center backdrop-blur-sm">
              <h2 className="text-white font-bold md:text-5xl text-3xl mb-6 leading-tight">
                Prêt à Transformer Votre Entreprise ?
              </h2>
              <p className="text-slate-grey md:text-xl text-lg mb-8 leading-relaxed">
                Consultation gratuite. Stratégie IA sur mesure.
              </p>
              <div className="flex justify-center">
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
