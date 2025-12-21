import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);
if (typeof window !== "undefined") {
  window.__gsap = gsap;
  window.__ScrollTrigger = ScrollTrigger;
}

const SelfHostedAI = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const useCasesRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const techRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    // Hero Animation
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
    });

    // Features Animation
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

    // Use Cases Cards
    gsap.fromTo(
      ".use-case-card",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 95%",
        },
      }
    );

    // Tech Section
    gsap.from(techRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      scrollTrigger: {
        trigger: techRef.current,
        start: "top 80%",
      },
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
                🛡️ Sécurité & Performance
              </span>
            </div>
            <h1 className="text-white font-bold md:text-7xl text-5xl mb-8 leading-tight tracking-tight">
              IA Souveraine & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pale-sky via-white to-dusty-grape">Auto-hébergée</span>
            </h1>
            <p className="text-slate-grey md:text-xl text-lg leading-relaxed max-w-3xl mx-auto mb-10">
              Reprenez le contrôle de vos données. Déployez des modèles d'IA de pointe (Llama 3, Mistral) directement sur votre infrastructure pour une sécurité maximale et des coûts maîtrisés.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="#features" className="px-8 py-4 bg-mint-cream text-onyx font-bold rounded-xl hover:scale-105 transition-transform duration-300">
                Pourquoi l'auto-hébergement ?
              </a>
              <a href="/contact" className="px-8 py-4 border border-dusty-grape text-pale-sky font-bold rounded-xl hover:bg-dusty-grape/20 transition-all duration-300">
                Étudier votre projet
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div ref={featuresRef} className="w-full mb-32 mt-50" id="features">
          <TitleHeader
            title="Vos données, votre IA, vos règles"
            sub="🔒 Sécurité & Contrôle"
          />

          <div className="mt-20 space-y-24">
            {/* Feature 1: Confidentialité */}
            <div className="feature-row grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-dusty-grape to-pale-sky opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-onyx border border-dusty-grape rounded-2xl p-8 h-full flex flex-col justify-center min-h-[300px]">
                  <div className="text-6xl mb-6">🔒</div>
                  <h3 className="text-white text-3xl font-bold mb-4">Confidentialité Totale</h3>
                  <p className="text-slate-grey text-lg">
                    Vos données sensibles ne quittent jamais votre serveur. Contrairement aux API publiques, tout est traité localement. Idéal pour les données médicales, juridiques ou stratégiques (RGPD Friendly).
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex flex-col gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-onyx to-dusty-grape/20 border border-white/5 backdrop-blur-sm">
                  <span className="text-pale-sky font-mono text-sm block mb-2">{`> Serveur Local`}</span>
                  <p className="text-white">Traitement des données en interne...</p>
                  <div className="w-full bg-white/10 rounded-full h-2 mt-4">
                    <div className="bg-mint-cream h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Économies */}
            <div className="feature-row grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 lg:order-1 flex justify-center">
                <div className="relative w-full rounded-2xl overflow-hidden border border-dusty-grape/30 flex items-center justify-center p-10 bg-onyx">
                  <div className="text-center">
                    <div className="text-5xl mb-4">💸</div>
                    <h4 className="text-2xl text-white font-bold">Zéro Coût par Token</h4>
                    <p className="text-slate-grey mt-2">Investissement fixe matériel vs abonnement mensuel</p>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:order-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-l from-dusty-grape to-pale-sky opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-onyx border border-dusty-grape rounded-2xl p-8 h-full flex flex-col justify-center min-h-[300px]">
                  <h3 className="text-white text-3xl font-bold mb-4">Économies & Prévisibilité</h3>
                  <p className="text-slate-grey text-lg">
                    Ne payez plus à chaque requête. Avec l'IA auto-hébergée, votre coût est fixe, quel que soit le volume d'utilisation.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3: Performance */}
            <div className="feature-row grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-pale-sky to-white opacity-10 blur-xl rounded-2xl group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-onyx border border-dusty-grape rounded-2xl p-8 h-full flex flex-col justify-center min-h-[300px]">
                  <div className="text-6xl mb-6">⚡</div>
                  <h3 className="text-white text-3xl font-bold mb-4">Performance & Latence</h3>
                  <p className="text-slate-grey text-lg">
                    Une réactivité instantanée grâce au réseau local. Pas de dépendance à la connexion internet ou aux serveurs surchargés d'OpenAI. Votre IA est toujours disponible et rapide.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 grid grid-cols-1 gap-4 h-full">
                <div className="bg-dusty-grape/20 p-6 rounded-xl border border-white/5 flex items-center justify-between hover:bg-dusty-grape/30 transition-colors">
                  <span className="text-pale-sky font-bold">Latence Réseau</span>
                  <span className="text-mint-cream font-mono">&lt; 10ms</span>
                </div>
                <div className="bg-dusty-grape/20 p-6 rounded-xl border border-white/5 flex items-center justify-between hover:bg-dusty-grape/30 transition-colors">
                  <span className="text-pale-sky font-bold">Disponibilité</span>
                  <span className="text-mint-cream font-mono">100% Hors-ligne</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div ref={useCasesRef} className="w-full mb-32">
          <TitleHeader
            title="Cas d'Usage"
            sub="🛠️ Solutions Concrètes"
          />
          <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
            {[
              { icon: "📚", title: "Base de Connaissance", desc: "RAG (Retrieval Augmented Generation) sur vos documents internes sans fuite de données." },
              { icon: "📊", title: "Analyse de Données", desc: "Traitement automatique de rapports financiers ou juridiques confidentiels." },
              { icon: "🏥", title: "Santé & Légal", desc: "Assistants IA conformes aux normes strictes de confidentialité (HDS, RGPD)." },
              { icon: "🏭", title: "Industrie 4.0", desc: "IA embarquée sur site pour le contrôle qualité et la maintenance prédictive." }
            ].map((item, idx) => (
              <div key={idx} className="use-case-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 hover:from-pale-sky/50 transition-all duration-300">
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

        {/* Tech Stack */}
        <div ref={techRef} className="w-full mb-20">
          <div className="w-full p-1 rounded-3xl bg-gradient-to-r from-dusty-grape via-pale-sky to-dusty-grape">
            <div className="bg-onyx rounded-[22px] px-6 py-16 md:px-20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.svg')] opacity-20"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
                Technologies de Pointe
              </h2>
              <p className="text-pale-sky text-lg max-w-2xl mx-auto relative z-10">
                Nous déployons les meilleurs modèles Open Source (Llama 3, Mistral, GPT-OSS) optimisés pour votre matériel, avec des solutions de vectorisation locales.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="w-full mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="card-border rounded-2xl p-10 md:p-16 bg-gradient-to-br from-dusty-grape/10 to-pale-sky/10 text-center backdrop-blur-sm">
              <h2 className="text-white font-bold md:text-5xl text-3xl mb-6 leading-tight">
                Prêt à sécuriser votre IA ?
              </h2>
              <p className="text-slate-grey md:text-xl text-lg mb-8 leading-relaxed">
                Discutons de votre infrastructure et de vos besoins en indépendance numérique.
              </p>
              <div className="flex justify-center">
                <a
                  href="/contact"
                  className="md:w-96 w-full h-14 cta-wrapper group"
                >
                  <div className="cta-button bg-pale-sky hover:bg-dusty-grape">
                    <p className="button-text text-onyx group-hover:text-white">Demander un audit</p>
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

export default SelfHostedAI;

