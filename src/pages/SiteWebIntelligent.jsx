import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);
// Allow central route-change logic to synchronously cleanup/refresh without racing dynamic imports
if (typeof window !== "undefined") {
  window.__gsap = gsap;
  window.__ScrollTrigger = ScrollTrigger;
}

const SiteWebIntelligent = () => {
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

    // Use Cases Cards (Scale up)
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
                ✨ Nouvelle Génération de Sites Web
              </span>
            </div>
            <h1 className="text-white font-bold md:text-7xl text-5xl mb-8 leading-tight tracking-tight">
              Site Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-pale-sky via-white to-dusty-grape">Intelligent</span>
              <br /> & Autonome
            </h1>
            <p className="text-slate-grey md:text-xl text-lg leading-relaxed max-w-3xl mx-auto mb-10">
              Transformez votre présence en ligne avec une interface ultra-moderne propulsée par l'IA.
              Un site qui ne se contente pas d'afficher des informations, mais qui interagit, vend et travaille pour vous 24/7.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="#features" className="px-8 py-4 bg-mint-cream text-onyx font-bold rounded-xl hover:scale-105 transition-transform duration-300">
                Découvrir les fonctionnalités
              </a>
              <a href="/contact" className="px-8 py-4 border border-dusty-grape text-pale-sky font-bold rounded-xl hover:bg-dusty-grape/20 transition-all duration-300">
                Démarrer votre projet
              </a>
            </div>
          </div>
        </div>

        {/* Features Section - Alternating Layout */}
        <div ref={featuresRef} className="w-full mb-32" id="features">
          <TitleHeader
            title="L'intelligence artificielle au cœur de votre site"
            sub="🚀 Fonctionnalités Avancées"
          />

          <div className="mt-20 space-y-24">
            {/* Feature 1: Chatbot IA */}
            <div className="feature-row grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-dusty-grape to-pale-sky opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-onyx border border-dusty-grape rounded-2xl p-8 h-full flex flex-col justify-center min-h-[300px]">
                  <div className="text-6xl mb-6">🤖</div>
                  <h3 className="text-white text-3xl font-bold mb-4">Chatbot IA Contextuel</h3>
                  <p className="text-slate-grey text-lg">
                    Plus qu'un simple bot. Notre IA analyse tout votre site, comprend votre business et répond précisément aux visiteurs.
                    Elle peut naviguer sur le web pour enrichir ses réponses et guider l'utilisateur vers le bon produit ou service.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex flex-col gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-onyx to-dusty-grape/20 border border-white/5 backdrop-blur-sm">
                  <span className="text-pale-sky font-mono text-sm block mb-2">{`> User Query`}</span>
                  <p className="text-white">"Quel produit est le mieux pour l'extérieur ?"</p>
                </div>
                <div className="p-6 rounded-xl bg-mint-cream/5 border border-mint-cream/10 backdrop-blur-sm ml-8">
                  <span className="text-mint-cream font-mono text-sm block mb-2">{`> AI Response`}</span>
                  <p className="text-white-50">"Basé sur notre catalogue, le modèle X200 est idéal grâce à sa résistance IP68. Je vous dirige vers la page produit..."</p>
                </div>
              </div>
            </div>

            {/* Feature 2: Automation */}
            <div className="feature-row grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 lg:order-1 flex justify-center">
                <div className="relative w-full rounded-2xl overflow-hidden border border-dusty-grape/30 flex items-center justify-center">
                  <img
                    src={import.meta.env.BASE_URL + "ai-workflow-automationA--1-.png"}
                    alt="AI Automation Workflow"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="order-2 lg:order-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-l from-dusty-grape to-pale-sky opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-onyx border border-dusty-grape rounded-2xl p-8 h-full flex flex-col justify-center min-h-[300px]">
                  <h3 className="text-white text-3xl font-bold mb-4">Automatisation Totale</h3>
                  <ul className="space-y-4 text-slate-grey text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-mint-cream mt-1">✓</span>
                      Réponses automatiques et personnalisées aux emails entrants.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-mint-cream mt-1">✓</span>
                      Gestion et réponse aux avis clients (Google, Trustpilot).
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-mint-cream mt-1">✓</span>
                      Prise de rendez-vous et synchronisation agenda sans intervention humaine.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature 3: SEO & Design */}
            <div className="feature-row grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-pale-sky to-white opacity-10 blur-xl rounded-2xl group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-onyx border border-dusty-grape rounded-2xl p-8 h-full flex flex-col justify-center min-h-[300px]">
                  <div className="flex gap-4 mb-6">
                    <span className="text-4xl">🎨</span>
                    <span className="text-4xl">📈</span>
                  </div>
                  <h3 className="text-white text-3xl font-bold mb-4">Design UI/UX & SEO Natif</h3>
                  <p className="text-slate-grey text-lg">
                    Une architecture pensée pour maximiser la conversion et la visibilité sur les moteurs de recherche. Un design adaptatif qui valorise votre image de marque, allié à une structure technique optimisée pour le référencement naturel dès le premier jour.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 h-full">
                <div className="bg-dusty-grape/20 p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center hover:bg-dusty-grape/30 transition-colors">
                  <span className="text-pale-sky font-bold text-lg">Ultra Rapide</span>
                </div>
                <div className="bg-dusty-grape/20 p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center hover:bg-dusty-grape/30 transition-colors">
                  <span className="text-pale-sky font-bold text-lg">Mobile First</span>
                </div>
                <div className="bg-dusty-grape/20 p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center hover:bg-dusty-grape/30 transition-colors">
                  <span className="text-pale-sky font-bold text-lg">SEO Ready</span>
                </div>
                <div className="bg-dusty-grape/20 p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center hover:bg-dusty-grape/30 transition-colors">
                  <span className="text-pale-sky font-bold text-lg">Accessible</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div ref={useCasesRef} className="w-full mb-32">
          <TitleHeader
            title="Applications Concrètes"
            sub="💼 Pour votre activité"
          />
          <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
            {[
              { icon: "🛍️", title: "E-Commerce", desc: "Assistant shopping personnel, recommandation produits dynamique, support commande 24/7." },
              { icon: "🏢", title: "Site Vitrine", desc: "Présentation interactive de votre entreprise, qualification de leads automatique." },
              { icon: "📦", title: "Présentation Produit", desc: "Démos interactives, réponses aux spécifications techniques, comparateur intelligent." },
              { icon: "🏥", title: "Services & Pro", desc: "Professions libérales, agences : gestion de planning et pré-diagnostic client." }
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

        {/* Tech/Harmony Check Section (Implicit) */}
        <div ref={techRef} className="w-full mb-20">
          <div className="w-full p-1 rounded-3xl bg-gradient-to-r from-dusty-grape via-pale-sky to-dusty-grape">
            <div className="bg-onyx rounded-[22px] px-6 py-16 md:px-20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.svg')] opacity-20"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
                Harmonie Visuelle & Performance
              </h2>
              <p className="text-pale-sky text-lg max-w-2xl mx-auto relative z-10">
                Nos designs respectent votre charte graphique tout en y ajoutant une touche de modernité (gradients, glassmorphism, animations fluides).
                Compatible mobile, tablette et desktop pour une expérience utilisateur sans faille.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="w-full mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="card-border rounded-2xl p-10 md:p-16 bg-gradient-to-br from-dusty-grape/10 to-pale-sky/10 text-center backdrop-blur-sm">
              <h2 className="text-white font-bold md:text-5xl text-3xl mb-6 leading-tight">
                Prêt à futuriser votre web ?
              </h2>
              <p className="text-slate-grey md:text-xl text-lg mb-8 leading-relaxed">
                Ne vous contentez plus d'un site statique. Adoptez un site web intelligent qui travaille pour vous.
              </p>
              <div className="flex justify-center">
                <a
                  href="/contact"
                  className="md:w-96 w-full h-14 cta-wrapper group"
                >
                  <div className="cta-button bg-pale-sky hover:bg-dusty-grape">
                    <p className="button-text text-onyx group-hover:text-white">Demander un devis gratuit</p>
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

export default SiteWebIntelligent;

