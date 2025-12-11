import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import TitleHeader from "../components/TitleHeader";
import AnimatedCounter from "../components/AnimatedCounter";
import { words, abilities } from "../constants";
import { getAssetPath } from "../config";
import IGDKeyLogo from "../components/AnimatedLetters";
import Chat from "../components/Chat";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const heroRef = useRef(null);
  const transformRef = useRef(null);
  const whyChooseRef = useRef(null);
  const valuesRef = useRef(null);
  const servicesRef = useRef(null);
  const targetAudienceRef = useRef(null);
  const investmentRef = useRef(null);
  const urgencyRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    // Hero Animation
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
    });

    // Transform section animation
    gsap.from(transformRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: transformRef.current,
        start: "top 80%",
      },
    });

    // Why choose us cards - alternating from sides
    const whyChooseCards = gsap.utils.toArray(".why-choose-card");
    whyChooseCards.forEach((card, i) => {
      gsap.from(card, {
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });

    // Services cards - scale animation
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
      }
    );

    // Target audience cards - scale animation
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
          start: "top 85%",
        },
      }
    );

    // Investment section - scale animation
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
          start: "top 85%",
        },
      }
    );

    // Values cards - alternating from sides
    const valueCards = gsap.utils.toArray(".value-card");
    valueCards.forEach((card, i) => {
      gsap.from(card, {
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });

    // Urgency section animation
    gsap.from(urgencyRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      scrollTrigger: {
        trigger: urgencyRef.current,
        start: "top 85%",
      },
    });

    // CTA section animation with scale
    gsap.from(ctaRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 85%",
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

        {/* Blurred Gradient Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dusty-grape/20 rounded-full blur-[100px] -z-10"></div>

        {/* Hero Container with Proper Spacing */}
        <div ref={heroRef} className="hero-container">
          <div className="hero-content-wrapper">
            <header className="hero-header">
              {/* Badge */}
              <div className="inline-block px-4 py-1.5 rounded-full border border-dusty-grape bg-onyx/50 backdrop-blur-md mb-4">
                <span className="bg-gradient-to-r from-pale-sky to-mint-cream bg-clip-text text-transparent font-medium">
                  ✨ Agence IA & Automatisation
                </span>
              </div>

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
                <a href="#services" className="px-8 py-4 bg-mint-cream text-onyx font-bold rounded-xl hover:scale-105 transition-transform duration-300">
                  Découvrir nos services
                </a>
                <a href="/contact" className="px-8 py-4 border border-dusty-grape text-pale-sky font-bold rounded-xl hover:bg-dusty-grape/20 transition-all duration-300">
                  Démarrer votre projet
                </a>
              </div>
            </header>
          </div>
        </div>

        <AnimatedCounter />
      </section>

      <section className="section-padding padding-x-lg overflow-hidden">
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
              L'IA n'est plus une option. C'est l'avantage concurrentiel qui sépare les leaders du reste.
              Nous déployons des solutions intelligentes qui travaillent pour vous 24/7.
            </p>
            <div className="w-full p-1 rounded-2xl bg-gradient-to-r from-dusty-grape via-pale-sky to-dusty-grape">
              <div className="bg-onyx rounded-xl px-6 py-8 md:px-12">
                <p className="text-mint-cream md:text-2xl text-xl font-semibold">
                  🔥 Notre mission : gagner du temps, réduire vos coûts, augmenter vos revenus.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div ref={whyChooseRef} className="w-full mb-32">
          <TitleHeader
            title="Pourquoi Nous Choisir ?"
            sub="🧠 Notre expertise"
          />
          <div className="mt-16 space-y-12">
            {/* Card 1 */}
            <div className="why-choose-card relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-dusty-grape to-pale-sky opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-onyx border border-dusty-grape rounded-2xl p-8">
                <h3 className="text-white text-2xl font-bold mb-4">Expertise IA Complète</h3>
                <p className="text-slate-grey text-lg leading-relaxed">
                  Technologies de pointe : agents autonomes, modèles prédictifs, automatisation intelligente. 
                  Solutions sur mesure pour chaque entreprise.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="why-choose-card relative group">
              <div className="absolute inset-0 bg-gradient-to-l from-dusty-grape to-pale-sky opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-onyx border border-dusty-grape rounded-2xl p-8">
                <h3 className="text-white text-2xl font-bold mb-4">Approche 100% Personnalisée</h3>
                <p className="text-slate-grey text-lg leading-relaxed">
                  Chaque entreprise est unique. Nos solutions s'adaptent à votre secteur, vos objectifs et votre budget.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="why-choose-card relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pale-sky to-white opacity-10 blur-xl rounded-2xl group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-onyx border border-dusty-grape rounded-2xl p-8">
                <h3 className="text-white text-2xl font-bold mb-4">Accompagnement de A à Z</h3>
                <p className="text-slate-grey text-lg leading-relaxed">
                  De l'audit initial à la mise en production, nous vous guidons à chaque étape.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div ref={servicesRef} className="w-full mb-32" id="services">
          <TitleHeader
            title="Nos Solutions IA"
            sub="🤖 Services"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
            {/* Service 1 - AI Agents */}
            <div className="service-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 hover:from-pale-sky/50 transition-all duration-300">
              <div className="bg-onyx h-full rounded-xl p-6 flex flex-col">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🤖</div>
                <h3 className="text-white text-xl font-bold mb-3">AI Agents Autonomes</h3>
                <ul className="text-slate-grey text-sm space-y-2 group-hover:text-white-50 transition-colors">
                  <li className="flex items-start gap-2"><span className="text-mint-cream">✓</span>Gestion de données</li>
                  <li className="flex items-start gap-2"><span className="text-mint-cream">✓</span>Traitement de demandes</li>
                  <li className="flex items-start gap-2"><span className="text-mint-cream">✓</span>Suivi client 24/7</li>
                  <li className="flex items-start gap-2"><span className="text-mint-cream">✓</span>Veille automatisée</li>
                </ul>
              </div>
            </div>

            {/* Service 2 - Chatbots */}
            <div className="service-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 hover:from-pale-sky/50 transition-all duration-300">
              <div className="bg-onyx h-full rounded-xl p-6 flex flex-col">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">💬</div>
                <h3 className="text-white text-xl font-bold mb-3">Chatbots Avancés</h3>
                <ul className="text-slate-grey text-sm space-y-2 group-hover:text-white-50 transition-colors">
                  <li className="flex items-start gap-2"><span className="text-mint-cream">✓</span>Réponses instantanées</li>
                  <li className="flex items-start gap-2"><span className="text-mint-cream">✓</span>Qualification prospects</li>
                  <li className="flex items-start gap-2"><span className="text-mint-cream">✓</span>Prise de rendez-vous</li>
                  <li className="flex items-start gap-2"><span className="text-mint-cream">✓</span>Langage naturel</li>
                </ul>
              </div>
            </div>

            {/* Service 3 - Automation */}
            <div className="service-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 hover:from-pale-sky/50 transition-all duration-300">
              <div className="bg-onyx h-full rounded-xl p-6 flex flex-col">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">⚙️</div>
                <h3 className="text-white text-xl font-bold mb-3">Automatisation IA</h3>
                <ul className="text-slate-grey text-sm space-y-2 group-hover:text-white-50 transition-colors">
                  <li className="flex items-start gap-2"><span className="text-mint-cream">✓</span>Saisie & analyse données</li>
                  <li className="flex items-start gap-2"><span className="text-mint-cream">✓</span>Reporting automatique</li>
                  <li className="flex items-start gap-2"><span className="text-mint-cream">✓</span>Gestion des emails</li>
                  <li className="flex items-start gap-2"><span className="text-mint-cream">✓</span>Facturation</li>
                </ul>
              </div>
            </div>

            {/* Service 4 - Machine Learning */}
            <div className="service-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 hover:from-pale-sky/50 transition-all duration-300">
              <div className="bg-onyx h-full rounded-xl p-6 flex flex-col">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📊</div>
                <h3 className="text-white text-xl font-bold mb-3">Machine Learning</h3>
                <ul className="text-slate-grey text-sm space-y-2 group-hover:text-white-50 transition-colors">
                  <li className="flex items-start gap-2"><span className="text-mint-cream">✓</span>Prédiction de ventes</li>
                  <li className="flex items-start gap-2"><span className="text-mint-cream">✓</span>Segmentation clients</li>
                  <li className="flex items-start gap-2"><span className="text-mint-cream">✓</span>Détection opportunités</li>
                  <li className="flex items-start gap-2"><span className="text-mint-cream">✓</span>Forecasting avancé</li>
                </ul>
              </div>
            </div>

            {/* Service 5 - Web Development */}
            <div className="service-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 hover:from-pale-sky/50 transition-all duration-300 md:col-span-2 xl:col-span-2">
              <div className="bg-onyx h-full rounded-xl p-6 flex flex-col">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🌐</div>
                <h3 className="text-white text-xl font-bold mb-3">Sites Web Intelligents</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-slate-grey text-sm space-y-2 group-hover:text-white-50 transition-colors">
                    <li className="flex items-start gap-2"><span className="text-mint-cream">✓</span>Analyse comportementale</li>
                    <li className="flex items-start gap-2"><span className="text-mint-cream">✓</span>Optimisation automatique</li>
                  </ul>
                  <ul className="text-slate-grey text-sm space-y-2 group-hover:text-white-50 transition-colors">
                    <li className="flex items-start gap-2"><span className="text-mint-cream">✓</span>Intégration agents IA</li>
                    <li className="flex items-start gap-2"><span className="text-mint-cream">✓</span>Expériences personnalisées</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Target Audience Section */}
        <div ref={targetAudienceRef} className="w-full mb-32">
          <TitleHeader
            title="Pour Qui ?"
            sub="💼 Nos clients"
          />
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
                <div key={index} className="audience-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 hover:from-pale-sky/50 transition-all duration-300">
                  <div className="bg-onyx h-full rounded-xl p-4 flex flex-col items-center text-center">
                    <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <p className="text-white text-sm font-semibold group-hover:text-mint-cream transition-colors">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white md:text-xl text-lg text-center mt-10 leading-relaxed font-semibold">
              Processus, données ou site web ? L'IA peut vous faire gagner de l'argent.
            </p>
          </div>
        </div>

        {/* Investment ROI Section */}
        <div ref={investmentRef} className="w-full mb-32">
          <TitleHeader
            title="ROI Immédiat"
            sub="📈 Investissement rentable"
          />
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="investment-item group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 hover:from-pale-sky/50 transition-all duration-300">
                <div className="bg-onyx h-full rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">💪</div>
                  <p className="text-white text-xl font-bold mb-2">Productivité x10</p>
                  <p className="text-slate-grey group-hover:text-white-50 transition-colors">
                    Plus de résultats en moins de temps
                  </p>
                </div>
              </div>
              <div className="investment-item group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 hover:from-pale-sky/50 transition-all duration-300">
                <div className="bg-onyx h-full rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">💰</div>
                  <p className="text-white text-xl font-bold mb-2">Revenus Boostés</p>
                  <p className="text-slate-grey group-hover:text-white-50 transition-colors">
                    Convertissez plus, vendez mieux
                  </p>
                </div>
              </div>
              <div className="investment-item group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 hover:from-pale-sky/50 transition-all duration-300">
                <div className="bg-onyx h-full rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🎯</div>
                  <p className="text-white text-xl font-bold mb-2">Avantage Décisif</p>
                  <p className="text-slate-grey group-hover:text-white-50 transition-colors">
                    Dépassez vos concurrents
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-1 rounded-2xl bg-gradient-to-r from-dusty-grape via-pale-sky to-dusty-grape mt-10">
              <div className="bg-onyx rounded-xl px-6 py-8 md:px-12 text-center">
                <p className="text-mint-cream md:text-2xl text-xl font-semibold">
                  ROI en quelques semaines. Garanti.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div ref={valuesRef} className="w-full mb-32">
          <TitleHeader
            title="Nos Valeurs"
            sub="💎 Ce qui nous guide"
          />
          <div className="mt-16 space-y-12 max-w-4xl mx-auto">
            {abilities.map(({ imgPath, title, desc }, i) => (
              <div
                key={title}
                className="value-card relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-${i % 2 === 0 ? 'r' : 'l'} from-dusty-grape to-pale-sky opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                <div className="relative bg-onyx border border-dusty-grape rounded-2xl p-8 flex items-center gap-6">
                  <div className="size-16 flex-shrink-0 flex items-center justify-center rounded-full bg-dusty-grape/30">
                    <img src={imgPath} alt={title} className="size-10" />
                  </div>
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
                    <p className="text-slate-grey text-lg">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency Section */}
        <div ref={urgencyRef} className="w-full mb-20">
          <div className="w-full p-1 rounded-3xl bg-gradient-to-r from-dusty-grape via-pale-sky to-dusty-grape max-w-3xl mx-auto">
            <div className="bg-onyx rounded-[22px] px-6 py-16 md:px-20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="text-5xl mb-6 relative z-10">⚡</div>
              <h2 className="text-white font-bold md:text-4xl text-3xl mb-6 relative z-10">
                Pourquoi Maintenant ?
              </h2>
              <p className="text-pale-sky text-lg max-w-2xl mx-auto relative z-10 mb-4">
                L'IA évolue vite. Les entreprises qui l'adoptent aujourd'hui dominent demain.
              </p>
              <p className="text-white text-xl font-bold relative z-10">
                Ne laissez pas vos concurrents prendre de l'avance.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
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
                  className="md:w-96 w-full h-14 cta-wrapper group"
                >
                  <div className="cta-button bg-pale-sky hover:bg-dusty-grape">
                    <p className="button-text text-onyx group-hover:text-white">Réserver une consultation gratuite</p>
                  </div>
                </a>
              </div>
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
