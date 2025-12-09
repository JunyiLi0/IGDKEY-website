import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const featureHighlights = [
  {
    title: "Design UI/UX taillé pour votre business",
    desc: "Design system modulaire, micro-interactions GSAP et parcours adaptés à la conversion, qu'il s'agisse d'une boutique en ligne ou d'une landing B2B.",
    chips: ["Design system", "Micro-interactions", "Protos rapides"],
    icon: "🎨",
  },
  {
    title: "Chatbot IA augmenté",
    desc: "L'agent retrouve le contexte de votre site, navigue sur le web pour vérifier des infos, escalade vers l'humain et trace chaque réponse.",
    chips: ["RAG web + site", "Sécurité & garde-fous", "Multi-canal"],
    icon: "🤖",
  },
  {
    title: "Automatisation & réponses clients",
    desc: "Tri automatique des mails, réponses aux avis, relances paniers abandonnés et notifications internes orchestrées par workflows.",
    chips: ["Inbox IA", "Avis & SAV", "Relances auto"],
    icon: "⚡",
  },
  {
    title: "Optimisation SEO & vitesse",
    desc: "Balises, schémas, maillage interne, score Core Web Vitals et contenus vérifiés pour garder vos positions stables.",
    chips: ["Core Web Vitals", "Schemas", "Contenu vérifié"],
    icon: "🚀",
  },
];

const useCases = [
  {
    title: "E-commerce piloté par l'IA",
    desc: "Guidage produit, recommandations, relances personnalisées et support 24/7.",
    tags: ["Retail", "D2C", "Marketplace"],
  },
  {
    title: "Présentation produit & SaaS",
    desc: "Démos interactives, onboarding assisté, qualification des leads et rendez-vous automatiques.",
    tags: ["SaaS", "B2B", "Éditeurs"],
  },
  {
    title: "Sites de services & commerces",
    desc: "Prise de rendez-vous, devis instantané, gestion de disponibilité et réponses aux avis.",
    tags: ["Services locaux", "Health", "Hospitality"],
  },
  {
    title: "Communautés & contenus",
    desc: "Moteur de recherche augmenté, génération contrôlée de résumés et alertes sur les tendances.",
    tags: ["Média", "Éducation", "Communautés"],
  },
];

const deliveryTracks = [
  {
    title: "Fondations UI/UX",
    items: [
      "Audit rapide, storyboards et prototypes cliquables",
      "Design system harmonisé aux couleurs onyx / dusty-grape / pale-sky",
      "Guidelines mobiles first, breakpoints et gestures prévues",
    ],
  },
  {
    title: "Agent IA + données",
    items: [
      "Connecteurs site + web pour récupérer les infos manquantes",
      "Mémoire courte/longue durée et traçabilité des réponses",
      "Handover humain et monitoring qualité",
    ],
  },
  {
    title: "Automation & diffusion",
    items: [
      "Workflows mails, avis, CRM et relances paniers",
      "Routing des tickets critiques, alerts et dashboards",
      "Contenus SEO vérifiés avant publication",
    ],
  },
];

const SiteWebIntelligent = () => {
  const heroRef = useRef(null);
  const glowRef = useRef(null);
  const featureRef = useRef(null);
  const useCaseRef = useRef(null);
  const stackRef = useRef(null);
  const closingRef = useRef(null);

  useGSAP(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.1,
      ease: "power3.out",
    });

    gsap.to(glowRef.current, {
      rotate: 360,
      duration: 55,
      repeat: -1,
      ease: "none",
    });

    [
      { selector: ".sw-card", trigger: featureRef.current, start: "top 80%" },
      { selector: ".sw-usage-card", trigger: useCaseRef.current, start: "top 85%" },
      { selector: ".sw-stack-item", trigger: stackRef.current, start: "top 85%" },
    ].forEach(({ selector, trigger, start }) => {
      gsap.from(selector, {
        y: 36,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger,
          start,
        },
      });
    });

    gsap.from(".sw-tag", {
      opacity: 0,
      y: 12,
      stagger: 0.08,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: featureRef.current,
        start: "top 85%",
      },
    });

    gsap.from(closingRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: closingRef.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <>
      <NavBar />
      <section className="section-padding padding-x-lg pt-32 md:pt-36 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <div
            ref={glowRef}
            className="absolute -top-40 -right-20 w-[38rem] h-[38rem] rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle at 30% 30%, rgba(191,209,229,0.28), rgba(72,74,110,0.05))",
            }}
          />
          <div
            className="absolute -bottom-52 -left-10 w-[34rem] h-[34rem] rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle at 70% 70%, rgba(72,74,110,0.35), rgba(13,10,11,0.1))",
            }}
          />
        </div>

        {/* Hero */}
        <div ref={heroRef} className="relative card-border rounded-[28px] overflow-hidden bg-gradient-to-br from-onyx via-onyx to-dusty-grape/40">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-dusty-grape/20 mix-blend-screen" />
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14 p-8 md:p-12 lg:p-16 relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur">
                <span className="text-lg">✨</span>
                <p className="text-white/80">Nouveau : Site web intelligent</p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Un site qui conçoit, répond et optimise
                <span className="block bg-gradient-to-r from-pale-sky to-dusty-grape bg-clip-text text-transparent">
                  en continu pour votre business
                </span>
              </h1>
              <p className="text-white-50 text-lg md:text-xl leading-relaxed">
                UI/UX moderne, chatbot IA qui connaît vos contenus, automations sur vos emails et avis, SEO robuste : nous assemblons un site vivant, fluide et mesurable.
              </p>
              <div className="flex flex-wrap gap-3">
                {["UI/UX sur-mesure", "Agent IA augmenté", "Automations mails & avis", "SEO & vitesse"].map((item) => (
                  <span key={item} className="sw-tag px-4 py-2 rounded-full bg-dusty-grape/30 text-pale-sky text-sm border border-white/10 backdrop-blur">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="/contact" className="sm:w-60 w-full cta-wrapper group">
                  <div className="cta-button">
                    <p className="button-text">Parler d'un projet</p>
                  </div>
                </a>
                <div className="sm:flex-1 card-border rounded-2xl p-4 bg-white/5 backdrop-blur flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-dusty-grape/30 flex items-center justify-center">📱</div>
                  <div>
                    <p className="text-white font-semibold">Mobile ready</p>
                    <p className="text-white-50 text-sm">Gestures, vitesses, CTA optimisés dès la maquette.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 opacity-50 blur-3xl bg-gradient-to-br from-dusty-grape/40 via-onyx to-pale-sky/20" />
              <div className="relative card-border rounded-3xl p-6 md:p-8 bg-black/60 backdrop-blur space-y-4 shadow-2xl">
                <div className="flex items-center justify-between">
                  <p className="text-white/80 text-sm">Blueprint intelligent</p>
                  <span className="text-lg">🧭</span>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { title: "UI/UX live", desc: "Animations GSAP fluides + micro feedbacks" },
                    { title: "Chatbot IA", desc: "Connaît vos pages + recherche web encadrée" },
                    { title: "Automations", desc: "Inbox mails, avis, CRM et relances" },
                    { title: "SEO & perf", desc: "Schemas, Core Web Vitals, monitoring" },
                  ].map((block) => (
                    <div key={block.title} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <p className="text-pale-sky font-semibold">{block.title}</p>
                      <p className="text-white-50 text-sm">{block.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-xl bg-dusty-grape/30 border border-white/10 p-4">
                    <p className="text-sm text-white/70">Connecteurs</p>
                    <p className="text-lg font-semibold text-pale-sky">CMS, CRM, Emails</p>
                  </div>
                  <div className="rounded-xl bg-pale-sky/20 border border-white/10 p-4">
                    <p className="text-sm text-white/70">Observabilité</p>
                    <p className="text-lg font-semibold text-pale-sky">Logs & scores</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div ref={featureRef} className="w-full mt-24 space-y-12">
          <TitleHeader title="Les briques d'un site web intelligent" sub="🧩 Design, IA, automation, SEO" />
          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
            {featureHighlights.map(({ title, desc, chips, icon }) => (
              <div key={title} className="sw-card card-border rounded-3xl p-6 md:p-8 bg-gradient-to-br from-onyx to-dusty-grape/30 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl">{icon}</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
                    <p className="text-white-50 leading-relaxed">{desc}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {chips.map((chip) => (
                    <span key={chip} className="sw-tag px-3 py-1 rounded-full border border-white/10 bg-white/5 text-pale-sky text-xs">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use cases */}
        <div ref={useCaseRef} className="w-full mt-24 space-y-12">
          <TitleHeader title="Utilisations" sub="🚀 E-commerce, produit, service et plus" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="sw-usage-card card-border rounded-2xl p-6 bg-black/60 backdrop-blur">
                <p className="text-pale-sky text-sm mb-3 uppercase tracking-wide">Cas d'usage</p>
                <h3 className="text-white text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-white-50 text-sm leading-relaxed mb-4">{useCase.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-dusty-grape/25 text-pale-sky border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery tracks */}
        <div ref={stackRef} className="w-full mt-24 space-y-12">
          <TitleHeader title="Parcours de livraison" sub="🛠️ Design + IA + Ops" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {deliveryTracks.map((track) => (
              <div key={track.title} className="sw-stack-item card-border rounded-2xl p-6 bg-gradient-to-b from-onyx to-black/70 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-xl font-semibold">{track.title}</h3>
                  <span className="text-lg text-pale-sky">•</span>
                </div>
                <ul className="space-y-3 list-disc list-inside text-white-50">
                  {track.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="card-border rounded-2xl p-6 bg-white/5 backdrop-blur flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-xl bg-dusty-grape/30 flex items-center justify-center">🎯</div>
              <p className="text-white font-semibold">Palette et cohérence</p>
            </div>
            <p className="text-white-50 md:text-base text-sm">
              Nous restons sur la palette onyx / dusty-grape / pale-sky / mint-cream pour des dégradés harmonieux, même avec les blur et effets glassmorphiques. Chaque bloc possède ses breakpoints pour rester lisible sur mobile.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div ref={closingRef} className="w-full mt-24 mb-12">
          <div className="card-border rounded-3xl p-10 md:p-14 bg-gradient-to-br from-dusty-grape/30 via-onyx to-pale-sky/15 text-center space-y-6">
            <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight">
              Lancez un site web intelligent
              <span className="block text-pale-sky font-medium text-xl mt-2">
                UI/UX moderne, agent IA, automatisations et SEO alignés à votre marque.
              </span>
            </h2>
            <p className="text-white-50 md:text-lg max-w-3xl mx-auto">
              Nous concevons, intégrons et mesurons. Vous gardez la maîtrise, nous automatisons ce qui peut l'être et nous gardons l'humain pour ce qui compte.
            </p>
            <div className="flex justify-center">
              <a href="/contact" className="md:w-80 w-full cta-wrapper group">
                <div className="cta-button">
                  <p className="button-text">Démarrer avec IGDKEY</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SiteWebIntelligent;

