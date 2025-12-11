import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import TitleHeader from "../components/TitleHeader";
import IGDKeyLogo from "../components/AnimatedLetters";
import Chat from "../components/Chat";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const heroRef = useRef(null);
  const transformRef = useRef(null);
  const whyChooseRef = useRef(null);
  const servicesRef = useRef(null);
  const audienceRef = useRef(null);
  const investmentRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    // Hero Animation
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
    });

    // Features Animation (Staggered from sides)
    const features = gsap.utils.toArray(".feature-row");
    features.forEach((feature, i) => {
      gsap.from(feature, {
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: feature,
          start: "top 80%",
        },
      });
    });

    // Cards Animation (Scale up for all card grids)
    const grids = [whyChooseRef.current, servicesRef.current, audienceRef.current, investmentRef.current];
    grids.forEach(grid => {
      if (!grid) return;
      const cards = grid.querySelectorAll(".animate-card");
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: grid,
              start: "top 95%",
            },
          }
        );
      }
    });

    // CTA Animation
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
      <section className="section-padding padding-x-lg overflow-hidden">
        {/* Hero Section */}
        <div ref={heroRef} className="w-full mb-32 mt-10 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-dusty-grape/20 rounded-full blur-[100px] -z-10"></div>
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 rounded-full border border-dusty-grape bg-onyx/50 backdrop-blur-md mb-8">
              <span className="bg-gradient-to-r from-pale-sky to-mint-cream bg-clip-text text-transparent font-medium">
                ✨ Agence IA & Web
              </span>
            </div>
            
            <div className="mb-8 flex justify-center">
              <div className="w-full max-w-[400px]">
                <IGDKeyLogo />
              </div>
            </div>

            <h1 className="text-white font-bold md:text-7xl text-5xl mb-8 leading-tight tracking-tight">
              Votre Entreprise <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pale-sky via-white to-dusty-grape">Propulsée par l'IA</span>
            </h1>
            <p className="text-slate-grey md:text-xl text-lg leading-relaxed max-w-3xl mx-auto mb-10">
              Fusionnez vos technologies avec celles de demain. Nous transformons vos processus pour un avantage concurrentiel décisif.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="#services" className="px-8 py-4 bg-mint-cream text-onyx font-bold rounded-xl hover:scale-105 transition-transform duration-300">
                Découvrir nos services
              </a>
              <a href="/contact" className="px-8 py-4 border border-dusty-grape text-pale-sky font-bold rounded-xl hover:bg-dusty-grape/20 transition-all duration-300">
                Parler à un expert
              </a>
            </div>
          </div>
        </div>

        {/* Transform Section */}
        <div ref={transformRef} className="w-full mb-32">
          <div className="feature-row grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-dusty-grape to-pale-sky opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-onyx border border-dusty-grape rounded-2xl p-8 h-full flex flex-col justify-center min-h-[300px]">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-white text-3xl font-bold mb-4">L'IA comme Moteur de Croissance</h3>
                <p className="text-slate-grey text-lg">
                  L'intelligence artificielle n'est plus une option, c'est la norme. Ne laissez pas les tâches répétitives ralentir votre équipe.
                  Automatisez, optimisez et innovez pour rester en tête de votre marché.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <TitleHeader
                title="Transformez Votre Entreprise"
                sub="💡 Innovation"
              />
              <p className="text-slate-grey text-lg mt-6 leading-relaxed">
                Nous aidons les entreprises à intégrer des solutions intelligentes : agents IA, chatbots, automatisation et sites web nouvelle génération.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div ref={whyChooseRef} className="w-full mb-32">
          <TitleHeader
            title="Pourquoi Nous Choisir ?"
            sub="🧠 Notre Expertise"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: "⚡", title: "Expertise IA & Web", desc: "La combinaison parfaite entre développement web moderne et intelligence artificielle avancée." },
              { icon: "🎯", title: "Approche Sur-Mesure", desc: "Des solutions adaptées précisément à votre secteur, vos objectifs et vos contraintes." },
              { icon: "🤝", title: "Accompagnement 360°", desc: "De l'audit initial à la mise en production, nous sommes partenaires de votre réussite." }
            ].map((item, idx) => (
              <div key={idx} className="animate-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 hover:from-pale-sky/50 transition-all duration-300">
                <div className="bg-onyx h-full rounded-xl p-6 flex flex-col items-center text-center relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-grey text-sm leading-relaxed group-hover:text-white-50 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div ref={servicesRef} className="w-full mb-32" id="services">
          <TitleHeader
            title="Nos Solutions Intelligentes"
            sub="🛠️ Services"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { icon: "🤖", title: "Agents IA Autonomes", desc: "Déléguez la gestion de données, le suivi client et la veille à des agents infatigables." },
              { icon: "💬", title: "Chatbots Contextuels", desc: "Support client 24/7, qualification de leads et prise de RDV automatique." },
              { icon: "⚙️", title: "Automatisation", desc: "Éliminez les tâches manuelles : reporting, facturation, emails et workflows complexes." },
              { icon: "📊", title: "Machine Learning", desc: "Exploitez vos données pour prédire les ventes et segmenter vos clients." },
              { icon: "🌐", title: "Sites Web Intelligents", desc: "Des interfaces modernes qui s'adaptent et convertissent vos visiteurs." },
            ].map((item, idx) => (
              <div key={idx} className="animate-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 hover:from-pale-sky/50 transition-all duration-300">
                <div className="bg-onyx h-full rounded-xl p-6 flex flex-col items-start relative z-10">
                  <div className="text-4xl mb-4 p-3 bg-dusty-grape/20 rounded-lg">{item.icon}</div>
                  <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-grey text-sm leading-relaxed group-hover:text-white-50 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audience Section */}
        <div ref={audienceRef} className="w-full mb-32">
          <TitleHeader
            title="Pour Qui ?"
            sub="💼 Secteurs"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12">
            {[
              "Startups", "PME", "E-commerce", "Immobilier", "Santé",
              "Finance", "Juridique", "Industrie", "Services B2B", "Consulting"
            ].map((sector, idx) => (
               <div key={idx} className="animate-card p-4 rounded-xl border border-dusty-grape/30 bg-onyx/50 backdrop-blur-sm text-center hover:bg-dusty-grape/20 transition-colors">
                 <span className="text-white font-medium">{sector}</span>
               </div>
            ))}
          </div>
        </div>

        {/* Investment ROI */}
        <div ref={investmentRef} className="w-full mb-20">
          <div className="w-full p-1 rounded-3xl bg-gradient-to-r from-dusty-grape via-pale-sky to-dusty-grape">
            <div className="bg-onyx rounded-[22px] px-6 py-16 md:px-20 text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 relative z-10">
                 Un Retour sur Investissement Rapide
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                  <div className="animate-card flex flex-col items-center">
                    <span className="text-5xl mb-4">💪</span>
                    <h3 className="text-white font-bold text-xl mb-2">Productivité</h3>
                    <p className="text-slate-grey">Faites plus avec moins de ressources.</p>
                  </div>
                  <div className="animate-card flex flex-col items-center">
                    <span className="text-5xl mb-4">💰</span>
                    <h3 className="text-white font-bold text-xl mb-2">Revenus</h3>
                    <p className="text-slate-grey">Augmentez vos conversions et ventes.</p>
                  </div>
                  <div className="animate-card flex flex-col items-center">
                    <span className="text-5xl mb-4">🛡️</span>
                    <h3 className="text-white font-bold text-xl mb-2">Pérennité</h3>
                    <p className="text-slate-grey">Sécurisez l'avenir de votre activité.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="w-full mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="card-border rounded-2xl p-10 md:p-16 bg-gradient-to-br from-dusty-grape/10 to-pale-sky/10 text-center backdrop-blur-sm">
              <h2 className="text-white font-bold md:text-5xl text-3xl mb-6 leading-tight">
                Prêt à Transformer votre Business ?
              </h2>
              <p className="text-slate-grey md:text-xl text-lg mb-8 leading-relaxed">
                Réservez votre consultation gratuite. Nous analyserons vos besoins et établirons une stratégie IA sur mesure.
              </p>
              <div className="flex justify-center">
                <a
                  href="/contact"
                  className="md:w-96 w-full h-14 cta-wrapper group"
                >
                  <div className="cta-button bg-pale-sky hover:bg-dusty-grape">
                    <p className="button-text text-onyx group-hover:text-white">Réserver un appel découverte</p>
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
