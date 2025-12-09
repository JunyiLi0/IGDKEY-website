import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import Button from "../components/Button";

gsap.registerPlugin(ScrollTrigger);

const SiteWebIntelligent = () => {
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const featuresRef = useRef(null);
  const chatbotRef = useRef(null);
  const automationRef = useRef(null);
  const seoRef = useRef(null);
  const useCasesRef = useRef(null);
  const ctaRef = useRef(null);
  const parallaxRef = useRef(null);

  useGSAP(() => {
    // Hero section - Split text animation with stagger
    const heroTitle = heroTitleRef.current;
    const heroSubtitle = heroSubtitleRef.current;

    if (heroTitle) {
      const words = heroTitle.querySelectorAll('.word');
      gsap.fromTo(words,
        {
          y: 100,
          opacity: 0,
          rotationX: -90
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3
        }
      );
    }

    if (heroSubtitle) {
      gsap.fromTo(heroSubtitle,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, delay: 1, ease: "power2.out" }
      );
    }

    // Parallax effect for hero background elements
    if (parallaxRef.current) {
      const parallaxElements = parallaxRef.current.querySelectorAll('.parallax-element');
      parallaxElements.forEach((el, index) => {
        gsap.to(el, {
          y: -100 * (index + 1),
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }

    // Features cards - 3D tilt and reveal animation
    gsap.from(".feature-card", {
      opacity: 0,
      scale: 0.8,
      rotationY: -15,
      duration: 1,
      stagger: {
        amount: 0.6,
        from: "start"
      },
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      ease: "back.out(1.7)"
    });

    // Chatbot section - Slide in from different directions
    gsap.from(".chatbot-feature", {
      x: (index) => index % 2 === 0 ? -100 : 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: chatbotRef.current,
        start: "top 75%"
      },
      ease: "power3.out"
    });

    // Automation section - Slide in from different directions with rotation
    if (automationRef.current) {
      const automationItems = automationRef.current.querySelectorAll('.automation-item');
      automationItems.forEach((item, index) => {
        const positions = [-80, 0, 80];
        const rotations = [-8, 0, 8];

        gsap.fromTo(item,
          {
            opacity: 0,
            x: positions[index % 3],
            y: 60,
            rotation: rotations[index % 3],
            scale: 0.7
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 0.5,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none"
            },
            ease: "back.out(1.4)"
          }
        );
      });
    }

    // SEO section - Number counter animation
    const seoNumbers = document.querySelectorAll('.seo-number');
    seoNumbers.forEach((number) => {
      const targetValue = parseInt(number.getAttribute('data-target')) || 0;
      const suffix = number.getAttribute('data-suffix') || '';
      const obj = { value: 0 };

      gsap.to(obj, {
        value: targetValue,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: number,
          start: "top 80%"
        },
        onUpdate: function () {
          number.textContent = Math.round(obj.value) + suffix;
        }
      });
    });

    // Use cases - Simple fade in animation
    // Set initial state
    gsap.set(".use-case-card", { opacity: 0 });

    // Animate on scroll
    gsap.to(".use-case-card", {
      opacity: 1,
      duration: 0.6,
      stagger: {
        amount: 0.5,
        from: "start"
      },
      scrollTrigger: {
        trigger: useCasesRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      ease: "power2.out"
    });

    // CTA section - Pulse and glow animation
    gsap.from(ctaRef.current, {
      opacity: 0,
      scale: 0.95,
      y: 40,
      duration: 1,
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%"
      },
      ease: "power2.out"
    });

    // Continuous glow pulse on CTA
    gsap.to(".cta-glow", {
      opacity: 0.6,
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  // Split text into words for animation
  const splitText = (text) => {
    return text.split(' ').map((word, i) => (
      <span key={i} className="word inline-block mr-2">{word}</span>
    ));
  };

  return (
    <>
      <NavBar />

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <div ref={parallaxRef} className="absolute inset-0 overflow-hidden">
          <div className="parallax-element absolute top-20 left-10 w-72 h-72 bg-dusty-grape/20 rounded-full blur-3xl"></div>
          <div className="parallax-element absolute bottom-20 right-10 w-96 h-96 bg-pale-sky/20 rounded-full blur-3xl"></div>
          <div className="parallax-element absolute top-1/2 left-1/2 w-64 h-64 bg-slate-grey/20 rounded-full blur-3xl"></div>
        </div>

        <div ref={heroRef} className="hero-container relative z-10">
          <div className="hero-content-wrapper text-center">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-dusty-grape/30 to-pale-sky/30 border border-pale-sky/20 text-pale-sky text-sm md:text-base font-medium backdrop-blur-sm">
                🌐 Site Web Intelligent
              </span>
            </div>

            <h1
              ref={heroTitleRef}
              className="hero-title mb-8"
            >
              {splitText("Créez un Site Web Intelligent")}
              <br />
              <span className="bg-gradient-to-r from-pale-sky via-dusty-grape to-pale-sky bg-clip-text text-transparent">
                {splitText("qui Convertit et Engage")}
              </span>
            </h1>

            <p
              ref={heroSubtitleRef}
              className="hero-subtitle max-w-3xl mx-auto mb-12"
            >
              Des sites web modernes avec IA intégrée, design sur mesure et optimisation SEO avancée.
              Transformez votre présence digitale en véritable moteur de croissance.
            </p>

            <div className="flex justify-center max-w-3xl mx-auto">
              <Button
                text="Découvrir nos solutions"
                className="sm:w-auto w-full h-14 px-8"
                id="features"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="section-padding padding-x-lg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white font-bold md:text-5xl text-4xl mb-6">
              Des Fonctionnalités <span className="bg-gradient-to-r from-pale-sky to-dusty-grape bg-clip-text text-transparent">Intelligentes</span>
            </h2>
            <p className="text-pale-sky md:text-xl text-lg max-w-3xl mx-auto">
              Chaque site web que nous créons est équipé des dernières technologies pour maximiser vos résultats
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 - UI/UX Design */}
            <div className="feature-card group relative card-border rounded-2xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-dusty-grape/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-white text-xl font-semibold mb-4">Design UI/UX Moderne</h3>
                <p className="text-pale-sky text-base leading-relaxed">
                  Interfaces intuitives et esthétiques adaptées à votre secteur d'activité, optimisées pour la conversion
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pale-sky to-dusty-grape transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            {/* Feature 2 - Chatbot IA */}
            <div className="feature-card group relative card-border rounded-2xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pale-sky/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-white text-xl font-semibold mb-4">Chatbot IA Avancé</h3>
                <p className="text-pale-sky text-base leading-relaxed">
                  Assistant intelligent qui retrouve les informations du site, navigue sur le web et répond instantanément aux visiteurs
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-dusty-grape to-pale-sky transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            {/* Feature 3 - Automation */}
            <div className="feature-card group relative card-border rounded-2xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-grey/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">⚙️</div>
                <h3 className="text-white text-xl font-semibold mb-4">Automatisation Complète</h3>
                <p className="text-pale-sky text-base leading-relaxed">
                  Traitement automatique des emails, réponses aux avis clients et gestion intelligente des processus métier
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pale-sky to-slate-grey transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            {/* Feature 4 - SEO */}
            <div className="feature-card group relative card-border rounded-2xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-mint-cream/10 to-dusty-grape/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-white text-xl font-semibold mb-4">Optimisation SEO</h3>
                <p className="text-pale-sky text-base leading-relaxed">
                  Référencement naturel avancé, contenu optimisé et structure technique pour dominer les résultats de recherche
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-dusty-grape to-mint-cream/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot IA Detailed Section */}
      <section ref={chatbotRef} className="section-padding padding-x-lg bg-gradient-to-b from-transparent to-dusty-grape/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white font-bold md:text-5xl text-4xl mb-6">
              Chatbot IA <span className="bg-gradient-to-r from-pale-sky to-dusty-grape bg-clip-text text-transparent">Intelligent</span>
            </h2>
            <p className="text-pale-sky md:text-xl text-lg max-w-3xl mx-auto">
              Un assistant conversationnel qui comprend le contexte, accède à vos données et répond avec précision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="chatbot-feature card-border rounded-2xl p-8 bg-gradient-to-br from-onyx to-dusty-grape/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🔍</div>
                <div>
                  <h3 className="text-white text-2xl font-semibold mb-3">Recherche Intelligente</h3>
                  <p className="text-pale-sky leading-relaxed">
                    Le chatbot analyse votre site web en profondeur, indexe toutes les pages et retrouve instantanément les informations pertinentes pour répondre aux questions des visiteurs.
                  </p>
                </div>
              </div>
            </div>

            <div className="chatbot-feature card-border rounded-2xl p-8 bg-gradient-to-br from-onyx to-pale-sky/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🌐</div>
                <div>
                  <h3 className="text-white text-2xl font-semibold mb-3">Navigation Web</h3>
                  <p className="text-pale-sky leading-relaxed">
                    Accès à internet pour rechercher des informations en temps réel, vérifier des données et fournir des réponses toujours à jour à vos clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="chatbot-feature card-border rounded-2xl p-8 bg-gradient-to-br from-onyx to-slate-grey/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">💬</div>
                <div>
                  <h3 className="text-white text-2xl font-semibold mb-3">Conversations Naturelles</h3>
                  <p className="text-pale-sky leading-relaxed">
                    Compréhension du langage naturel, gestion du contexte conversationnel et personnalisation des réponses selon le profil du visiteur.
                  </p>
                </div>
              </div>
            </div>

            <div className="chatbot-feature card-border rounded-2xl p-8 bg-gradient-to-br from-onyx to-dusty-grape/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">📊</div>
                <div>
                  <h3 className="text-white text-2xl font-semibold mb-3">Analytics Intégrés</h3>
                  <p className="text-pale-sky leading-relaxed">
                    Suivi des interactions, analyse des questions fréquentes et insights pour améliorer continuellement l'expérience utilisateur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section ref={automationRef} className="section-padding padding-x-lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white font-bold md:text-5xl text-4xl mb-6">
              Automatisation <span className="bg-gradient-to-r from-pale-sky to-dusty-grape bg-clip-text text-transparent">Intelligente</span>
            </h2>
            <p className="text-pale-sky md:text-xl text-lg max-w-3xl mx-auto">
              Libérez votre équipe des tâches répétitives et concentrez-vous sur ce qui compte vraiment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="automation-item card-border rounded-2xl p-8 bg-gradient-to-br from-onyx to-dusty-grape/20 hover:from-dusty-grape/30 transition-all duration-300">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-white text-xl font-semibold mb-4">Gestion Automatique des Emails</h3>
              <p className="text-pale-sky leading-relaxed mb-4">
                Tri, catégorisation et réponses automatiques aux emails selon leur contenu et leur urgence.
              </p>
              <ul className="text-pale-sky/80 text-sm space-y-2">
                <li>• Classification intelligente</li>
                <li>• Réponses contextuelles</li>
                <li>• Escalade automatique</li>
              </ul>
            </div>

            <div className="automation-item card-border rounded-2xl p-8 bg-gradient-to-br from-onyx to-pale-sky/20 hover:from-pale-sky/30 transition-all duration-300">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-white text-xl font-semibold mb-4">Réponses aux Avis Clients</h3>
              <p className="text-pale-sky leading-relaxed mb-4">
                Analyse et réponse automatique aux avis Google, TripAdvisor et autres plateformes avec ton adapté.
              </p>
              <ul className="text-pale-sky/80 text-sm space-y-2">
                <li>• Détection du sentiment</li>
                <li>• Réponses personnalisées</li>
                <li>• Suivi multi-plateformes</li>
              </ul>
            </div>

            <div className="automation-item card-border rounded-2xl p-8 bg-gradient-to-br from-onyx to-slate-grey/20 hover:from-slate-grey/30 transition-all duration-300">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-white text-xl font-semibold mb-4">Processus Métier Automatisés</h3>
              <p className="text-pale-sky leading-relaxed mb-4">
                Automatisation complète des workflows : commandes, facturation, rapports et bien plus.
              </p>
              <ul className="text-pale-sky/80 text-sm space-y-2">
                <li>• Workflows personnalisés</li>
                <li>• Intégrations API</li>
                <li>• Monitoring en temps réel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section with Stats */}
      <section ref={seoRef} className="section-padding padding-x-lg bg-gradient-to-b from-transparent to-dusty-grape/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white font-bold md:text-5xl text-4xl mb-6">
              Optimisation SEO <span className="bg-gradient-to-r from-pale-sky to-dusty-grape bg-clip-text text-transparent">Avancée</span>
            </h2>
            <p className="text-pale-sky md:text-xl text-lg max-w-3xl mx-auto mb-12">
              Dominez les résultats de recherche avec une stratégie SEO complète et des performances techniques optimales
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card-border rounded-2xl p-8 bg-gradient-to-br from-onyx to-dusty-grape/30">
              <h3 className="text-white text-2xl font-semibold mb-6">Stratégie SEO Complète</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Recherche de Mots-Clés</h4>
                    <p className="text-pale-sky text-sm">Analyse approfondie pour identifier les opportunités de référencement</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">✍️</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Contenu Optimisé</h4>
                    <p className="text-pale-sky text-sm">Rédaction de contenus pertinents et optimisés pour les moteurs de recherche</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🔗</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Netlinking Stratégique</h4>
                    <p className="text-pale-sky text-sm">Construction de liens de qualité pour améliorer votre autorité</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-border rounded-2xl p-8 bg-gradient-to-br from-onyx to-pale-sky/20">
              <h3 className="text-white text-2xl font-semibold mb-6">Performance Technique</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Vitesse de Chargement</h4>
                    <p className="text-pale-sky text-sm">Optimisation pour des temps de chargement ultra-rapides</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Mobile-First</h4>
                    <p className="text-pale-sky text-sm">Design responsive optimisé pour tous les appareils</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🔍</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Structure Technique</h4>
                    <p className="text-pale-sky text-sm">Balises HTML, sitemap XML et schémas structurés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card-border rounded-xl p-6 text-center bg-gradient-to-br from-onyx to-dusty-grape/20">
              <div className="seo-number text-4xl md:text-5xl font-bold text-pale-sky mb-2" data-target="95" data-suffix="%">0%</div>
              <p className="text-pale-sky/80 text-sm">Taux de Conversion</p>
            </div>
            <div className="card-border rounded-xl p-6 text-center bg-gradient-to-br from-onyx to-pale-sky/20">
              <div className="seo-number text-4xl md:text-5xl font-bold text-pale-sky mb-2" data-target="300" data-suffix="%">0%</div>
              <p className="text-pale-sky/80 text-sm">Augmentation Trafic</p>
            </div>
            <div className="card-border rounded-xl p-6 text-center bg-gradient-to-br from-onyx to-slate-grey/20">
              <div className="seo-number text-4xl md:text-5xl font-bold text-pale-sky mb-2" data-target="2" data-suffix="s">0s</div>
              <p className="text-pale-sky/80 text-sm">Temps de Chargement</p>
            </div>
            <div className="card-border rounded-xl p-6 text-center bg-gradient-to-br from-onyx to-dusty-grape/20">
              <div className="seo-number text-4xl md:text-5xl font-bold text-pale-sky mb-2" data-target="100" data-suffix="+">0+</div>
              <p className="text-pale-sky/80 text-sm">Mots-Clés Classés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section ref={useCasesRef} className="section-padding padding-x-lg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white font-bold md:text-5xl text-4xl mb-6">
              Cas d'Utilisation <span className="bg-gradient-to-r from-pale-sky to-dusty-grape bg-clip-text text-transparent">Variés</span>
            </h2>
            <p className="text-pale-sky md:text-xl text-lg max-w-3xl mx-auto">
              Nos sites web intelligents s'adaptent à tous les secteurs d'activité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="use-case-card card-border rounded-2xl p-8 bg-gradient-to-br from-onyx to-dusty-grape/20 hover:to-dusty-grape/40 transition-all duration-300 cursor-pointer">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-white text-xl font-semibold mb-4">E-commerce Intelligent</h3>
              <p className="text-pale-sky leading-relaxed mb-4">
                Boutiques en ligne avec recommandations IA, chatbot d'assistance et optimisation du parcours d'achat
              </p>
              <ul className="text-pale-sky/80 text-sm space-y-1">
                <li>✓ Catalogue dynamique</li>
                <li>✓ Panier intelligent</li>
                <li>✓ Checkout optimisé</li>
              </ul>
            </div>

            <div className="use-case-card card-border rounded-2xl p-8 bg-gradient-to-br from-onyx to-pale-sky/20 hover:to-pale-sky/40 transition-all duration-300 cursor-pointer">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-white text-xl font-semibold mb-4">Présentation de Produit</h3>
              <p className="text-pale-sky leading-relaxed mb-4">
                Pages produits interactives avec visualisation 3D, configurateur et démonstrations virtuelles
              </p>
              <ul className="text-pale-sky/80 text-sm space-y-1">
                <li>✓ Galeries interactives</li>
                <li>✓ Configurateurs IA</li>
                <li>✓ AR/VR intégré</li>
              </ul>
            </div>

            <div className="use-case-card card-border rounded-2xl p-8 bg-gradient-to-br from-onyx to-slate-grey/20 hover:to-slate-grey/40 transition-all duration-300 cursor-pointer">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-white text-xl font-semibold mb-4">Site Vitrine Premium</h3>
              <p className="text-pale-sky leading-relaxed mb-4">
                Sites institutionnels avec design premium, animations fluides et expérience utilisateur exceptionnelle
              </p>
              <ul className="text-pale-sky/80 text-sm space-y-1">
                <li>✓ Design sur mesure</li>
                <li>✓ Animations GSAP</li>
                <li>✓ Portfolio interactif</li>
              </ul>
            </div>

            <div className="use-case-card card-border rounded-2xl p-8 bg-gradient-to-br from-onyx to-dusty-grape/20 hover:to-dusty-grape/40 transition-all duration-300 cursor-pointer">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-white text-xl font-semibold mb-4">Plateforme Éducative</h3>
              <p className="text-pale-sky leading-relaxed mb-4">
                Sites de formation avec contenu adaptatif, quiz interactifs et suivi de progression intelligent
              </p>
              <ul className="text-pale-sky/80 text-sm space-y-1">
                <li>✓ Contenu adaptatif</li>
                <li>✓ Gamification</li>
                <li>✓ Analytics avancés</li>
              </ul>
            </div>

            <div className="use-case-card card-border rounded-2xl p-8 bg-gradient-to-br from-onyx to-pale-sky/20 hover:to-pale-sky/40 transition-all duration-300 cursor-pointer">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-white text-xl font-semibold mb-4">Secteur Santé</h3>
              <p className="text-pale-sky leading-relaxed mb-4">
                Sites médicaux avec prise de rendez-vous automatisée, chatbot santé et gestion de dossiers sécurisée
              </p>
              <ul className="text-pale-sky/80 text-sm space-y-1">
                <li>✓ Conformité RGPD</li>
                <li>✓ Prise de RDV IA</li>
                <li>✓ Sécurité renforcée</li>
              </ul>
            </div>

            <div className="use-case-card card-border rounded-2xl p-8 bg-gradient-to-br from-onyx to-slate-grey/20 hover:to-slate-grey/40 transition-all duration-300 cursor-pointer">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-white text-xl font-semibold mb-4">Restauration & Hôtellerie</h3>
              <p className="text-pale-sky leading-relaxed mb-4">
                Sites avec réservation en ligne, menus interactifs et gestion automatique des avis clients
              </p>
              <ul className="text-pale-sky/80 text-sm space-y-1">
                <li>✓ Réservation automatique</li>
                <li>✓ Menus digitaux</li>
                <li>✓ Gestion avis IA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="section-padding padding-x-lg">
        <div className="max-w-4xl mx-auto">
          <div className="card-border rounded-3xl p-10 md:p-16 bg-gradient-to-br from-dusty-grape/30 via-onyx to-pale-sky/20 text-center relative overflow-hidden">
            <div className="cta-glow absolute inset-0 bg-gradient-to-r from-pale-sky/20 via-dusty-grape/20 to-pale-sky/20 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-white font-bold md:text-5xl text-3xl mb-6 leading-tight">
                Prêt à Transformer Votre Présence Digitale ?
              </h2>
              <p className="text-pale-sky md:text-xl text-lg mb-8 leading-relaxed">
                Obtenez un site web intelligent qui convertit, engage et fait croître votre entreprise
              </p>
              <p className="text-pale-sky/80 md:text-lg text-base mb-10 max-w-2xl mx-auto">
                Réservez une consultation gratuite et découvrez comment nos solutions peuvent révolutionner votre activité en ligne
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="md:w-80 w-full h-16 cta-wrapper group"
                >
                  <div className="cta-button">
                    <p className="button-text">Consultation gratuite</p>
                  </div>
                </a>
                <a
                  href="/agents"
                  className="md:w-80 w-full h-16 flex items-center justify-center rounded-2xl border-2 border-pale-sky/50 text-pale-sky hover:bg-pale-sky/10 transition-all duration-300 font-semibold"
                >
                  Découvrir nos agents IA
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
