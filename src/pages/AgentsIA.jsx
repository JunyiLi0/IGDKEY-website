import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AgentsIA = () => {
  const heroRef = useRef(null);
  const whyChooseRef = useRef(null);
  const servicesRef = useRef(null);
  const benefitsRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    // Hero section fade in on load
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: "power2.out",
    });

    // Why choose us cards staggered animation
    gsap.from(".why-choose-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: whyChooseRef.current,
        start: "top 75%",
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
        start: "top 75%",
      },
    });

    // Benefits cards staggered animation
    gsap.from(".benefit-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: benefitsRef.current,
        start: "top 75%",
      },
    });

    // Process steps staggered animation
    gsap.from(".process-step", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      scrollTrigger: {
        trigger: processRef.current,
        start: "top 75%",
      },
    });

    // FAQ items staggered animation
    gsap.from(".faq-item", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: faqRef.current,
        start: "top 75%",
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
      <section className="section-padding padding-x-lg">
        {/* Hero Section */}
        <div ref={heroRef} className="w-full mb-20 mt-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="hero-badge mx-auto mb-8">
              <p>🤖 Intégration d'Agents IA</p>
            </div>
            <h1 className="text-white font-bold md:text-6xl text-4xl mb-8 leading-tight">
              Services d'intégration d'
              <span className="bg-gradient-to-r from-pale-sky-400 to-dusty-grape-500 bg-clip-text text-transparent">
                agents IA
              </span>
              {" "}pour entreprises
            </h1>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-white-50 md:text-xl text-lg leading-relaxed">
                Chez IGDKEY, nous croyons que l'intelligence artificielle est désormais accessible à toutes les entreprises.
                Nos services d'intégration d'agents IA sont conçus pour aider les entreprises de toutes tailles à tirer parti de la
                puissance de l'automatisation, de la personnalisation et des données pour se développer plus rapidement et plus efficacement.
              </p>
              <p className="text-white-50 md:text-xl text-lg leading-relaxed">
                Grâce à notre expertise, nous transformons vos processus internes et vos interactions clients à l'aide de
                solutions d'IA sur mesure qui s'intègrent parfaitement à vos outils existants.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose IGDKEY Section */}
        <div ref={whyChooseRef} className="w-full mb-20">
          <TitleHeader
            title="Pourquoi choisir IGDKEY pour l'intégration d'agents IA ?"
            sub="💡 Notre valeur ajoutée"
          />
          <div className="grid-2-cols mt-12">
            <div className="why-choose-card card-border rounded-xl p-8 flex flex-col gap-4">
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="text-white text-2xl font-semibold">Une expertise adaptée à toutes les entreprises</h3>
              <p className="text-white-50 text-lg leading-relaxed">
                IGDKEY comprend les défis spécifiques auxquels font face les entreprises modernes : optimisation des ressources,
                besoin d'efficacité, et volonté d'innover avec des solutions performantes. Nous développons des agents IA simples
                à utiliser, puissants, et adaptés à votre échelle.
              </p>
            </div>
            <div className="why-choose-card card-border rounded-xl p-8 flex flex-col gap-4">
              <div className="text-4xl mb-2">🔧</div>
              <h3 className="text-white text-2xl font-semibold">Des solutions IA sur mesure et évolutives</h3>
              <p className="text-white-50 text-lg leading-relaxed">
                Chaque entreprise est unique. Nos agents IA s'adaptent à vos systèmes (CRM, ERP, outils de support client, etc.)
                et évoluent avec votre croissance. Notre objectif : une intégration fluide, rapide et sans interruption de vos activités.
              </p>
            </div>
          </div>
        </div>

        {/* Main Services Section */}
        <div ref={servicesRef} className="w-full mb-20" id="services">
          <TitleHeader
            title="Nos principaux services d'agents IA"
            sub="🚀 Nos offres"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Service 1 - Featured Large Card */}
            <div className="service-card card-border rounded-xl p-8 flex flex-col gap-4 md:col-span-2">
              <div className="text-4xl mb-2">🤖</div>
              <h3 className="text-white text-2xl font-semibold">
                1. Développement et intégration d'agents IA
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white-50 text-lg leading-relaxed mb-4">
                    Nos développeurs conçoivent et intègrent des agents IA intelligents capables de gérer vos tâches répétitives,
                    d'automatiser vos processus internes, et de soutenir vos équipes dans la prise de décision.
                  </p>
                  <p className="text-white-50 text-lg leading-relaxed">
                    Les agents peuvent être intégrés à vos plateformes existantes : chat en ligne, gestion client, planification, et plus encore.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="card-border rounded-lg p-6 bg-gradient-to-br from-onyx-950 to-dusty-grape-800">
                    <h4 className="text-mint-cream-50 text-xl font-semibold mb-2">Automatisation des processus métiers</h4>
                    <p className="text-pale-sky-100 leading-relaxed">
                      Nos solutions permettent de réduire les tâches manuelles et d'augmenter la productivité, tout en minimisant les erreurs humaines.
                    </p>
                  </div>
                  <div className="card-border rounded-lg p-6 bg-gradient-to-br from-onyx-950 to-dusty-grape-800">
                    <h4 className="text-mint-cream-50 text-xl font-semibold mb-2">Personnalisation selon vos outils existants</h4>
                    <p className="text-pale-sky-100 leading-relaxed">
                      Nous connectons vos agents IA à vos systèmes actuels (CRM, ERP, CMS, etc.) pour une intégration harmonieuse sans perturber votre workflow.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 - Training */}
            <div className="service-card card-border rounded-xl p-8 flex flex-col gap-4">
              <div className="text-4xl mb-2">📚</div>
              <h3 className="text-white text-2xl font-semibold">
                2. Formation et accompagnement à l'usage de l'IA
              </h3>
              <p className="text-white-50 text-lg leading-relaxed">
                Nous accompagnons vos équipes dans la compréhension et la maîtrise de leurs nouveaux outils d'IA.
                IGDKEY propose des sessions de formation, des tutoriels et un support continu.
              </p>
            </div>

            {/* Service 3 - Maintenance */}
            <div className="service-card card-border rounded-xl p-8 flex flex-col gap-4">
              <div className="text-4xl mb-2">⚙️</div>
              <h3 className="text-white text-2xl font-semibold">
                3. Maintenance et optimisation continue des agents IA
              </h3>
              <p className="text-white-50 text-lg leading-relaxed">
                L'IA évolue constamment. IGDKEY assure la maintenance, les mises à jour et l'optimisation de vos agents
                afin de garantir des performances durables.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div ref={benefitsRef} className="w-full mb-20">
          <TitleHeader
            title="Les bénéfices de l'intégration d'agents IA avec IGDKEY"
            sub="✨ Vos avantages"
          />
          <div className="grid-3-cols mt-12">
            <div className="benefit-card card-border rounded-xl p-8 flex flex-col gap-4">
              <div className="text-5xl mb-2">⚡</div>
              <h3 className="text-white text-2xl font-semibold">Gain de temps et réduction des coûts</h3>
              <p className="text-white-50 text-lg leading-relaxed">
                L'automatisation permet de libérer du temps pour vos équipes, réduire les coûts opérationnels et concentrer
                vos efforts sur des tâches à forte valeur ajoutée.
              </p>
            </div>
            <div className="benefit-card card-border rounded-xl p-8 flex flex-col gap-4">
              <div className="text-5xl mb-2">😊</div>
              <h3 className="text-white text-2xl font-semibold">Expérience client améliorée</h3>
              <p className="text-white-50 text-lg leading-relaxed">
                Des agents IA réactifs et personnalisés garantissent une meilleure expérience utilisateur, une assistance 24/7
                et une satisfaction accrue.
              </p>
            </div>
            <div className="benefit-card card-border rounded-xl p-8 flex flex-col gap-4">
              <div className="text-5xl mb-2">📊</div>
              <h3 className="text-white text-2xl font-semibold">Décisions plus intelligentes grâce aux données</h3>
              <p className="text-white-50 text-lg leading-relaxed">
                Nos agents collectent et analysent vos données en temps réel, vous aidant à prendre des décisions plus stratégiques
                et basées sur des faits concrets.
              </p>
            </div>
          </div>
        </div>

        {/* Integration Process Section */}
        <div ref={processRef} className="w-full mb-20">
          <TitleHeader
            title="Notre processus d'intégration IA"
            sub="📋 Comment ça marche"
          />
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="grid-2-cols gap-8">
              <div className="process-step card-border rounded-xl p-8 flex flex-col gap-4 bg-gradient-to-br from-onyx-950 to-dusty-grape-800">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-4xl">1️⃣</span>
                  <h3 className="text-mint-cream-50 text-2xl font-semibold">Audit et analyse de vos besoins</h3>
                </div>
                <p className="text-pale-sky-100 text-lg leading-relaxed">
                  Nous évaluons vos objectifs et vos défis internes pour comprendre parfaitement vos besoins spécifiques.
                </p>
              </div>
              <div className="process-step card-border rounded-xl p-8 flex flex-col gap-4 bg-gradient-to-br from-onyx-950 to-dusty-grape-800">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-4xl">2️⃣</span>
                  <h3 className="text-mint-cream-50 text-2xl font-semibold">Conception et développement personnalisé</h3>
                </div>
                <p className="text-pale-sky-100 text-lg leading-relaxed">
                  Nous créons un agent IA sur mesure adapté à votre activité et à vos processus métiers.
                </p>
              </div>
              <div className="process-step card-border rounded-xl p-8 flex flex-col gap-4 bg-gradient-to-br from-onyx-950 to-dusty-grape-800">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-4xl">3️⃣</span>
                  <h3 className="text-mint-cream-50 text-2xl font-semibold">Intégration et tests</h3>
                </div>
                <p className="text-pale-sky-100 text-lg leading-relaxed">
                  Nous assurons une mise en œuvre fluide et testée dans vos environnements réels avant le déploiement complet.
                </p>
              </div>
              <div className="process-step card-border rounded-xl p-8 flex flex-col gap-4 bg-gradient-to-br from-onyx-950 to-dusty-grape-800">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-4xl">4️⃣</span>
                  <h3 className="text-mint-cream-50 text-2xl font-semibold">Formation et support continu</h3>
                </div>
                <p className="text-pale-sky-100 text-lg leading-relaxed">
                  Nous vous accompagnons à chaque étape, même après le déploiement, pour garantir votre succès.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div ref={faqRef} className="w-full mb-20">
          <TitleHeader
            title="Foire aux questions (FAQ)"
            sub="❓ Questions fréquentes"
          />
          <div className="mt-12 max-w-4xl mx-auto space-y-6">
            <div className="faq-item card-border rounded-xl p-8 flex flex-col gap-4 hover:bg-dusty-grape-800/30 transition-colors duration-300">
              <h3 className="text-white text-2xl font-semibold">1. Qu'est-ce qu'un agent IA ?</h3>
              <p className="text-white-50 text-lg leading-relaxed">
                Un agent IA est un programme intelligent capable d'automatiser des tâches, d'interagir avec les clients et
                d'analyser les données pour prendre des décisions.
              </p>
            </div>
            <div className="faq-item card-border rounded-xl p-8 flex flex-col gap-4 hover:bg-dusty-grape-800/30 transition-colors duration-300">
              <h3 className="text-white text-2xl font-semibold">2. IGDKEY peut-il adapter un agent IA à mon système actuel ?</h3>
              <p className="text-white-50 text-lg leading-relaxed">
                Oui ! Nos intégrations sont 100 % personnalisées selon vos outils et besoins.
              </p>
            </div>
            <div className="faq-item card-border rounded-xl p-8 flex flex-col gap-4 hover:bg-dusty-grape-800/30 transition-colors duration-300">
              <h3 className="text-white text-2xl font-semibold">3. L'IA est-elle adaptée à toutes les entreprises ?</h3>
              <p className="text-white-50 text-lg leading-relaxed">
                Absolument. Quelle que soit la taille de votre entreprise, l'IA offre un avantage compétitif majeur pour gagner du temps,
                réduire les coûts et améliorer vos services.
              </p>
            </div>
            <div className="faq-item card-border rounded-xl p-8 flex flex-col gap-4 hover:bg-dusty-grape-800/30 transition-colors duration-300">
              <h3 className="text-white text-2xl font-semibold">4. Quels types de tâches un agent IA peut-il gérer ?</h3>
              <p className="text-white-50 text-lg leading-relaxed">
                Support client, gestion des ventes, planification, analyse de données, et bien plus encore.
              </p>
            </div>
            <div className="faq-item card-border rounded-xl p-8 flex flex-col gap-4 hover:bg-dusty-grape-800/30 transition-colors duration-300">
              <h3 className="text-white text-2xl font-semibold">5. IGDKEY propose-t-il un support après l'installation ?</h3>
              <p className="text-white-50 text-lg leading-relaxed">
                Oui, nous offrons un accompagnement complet, incluant maintenance et mise à jour continue.
              </p>
            </div>
            <div className="faq-item card-border rounded-xl p-8 flex flex-col gap-4 hover:bg-dusty-grape-800/30 transition-colors duration-300">
              <h3 className="text-white text-2xl font-semibold">6. Combien de temps faut-il pour déployer un agent IA ?</h3>
              <p className="text-white-50 text-lg leading-relaxed">
                Cela dépend du projet, mais en moyenne entre 2 et 6 semaines selon la complexité.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div ref={ctaRef} className="w-full mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="card-border rounded-2xl p-10 md:p-16 bg-gradient-to-br from-dusty-grape-900/20 to-pale-sky-900/20 text-center">
              <h2 className="text-white font-bold md:text-5xl text-3xl mb-6 leading-tight">
                Passez à l'intelligence automatisée avec IGDKEY
              </h2>
              <p className="text-white-50 md:text-xl text-lg mb-8 leading-relaxed">
                Ne laissez pas la technologie vous dépasser. IGDKEY vous aide à franchir le pas vers l'avenir en intégrant
                des agents IA puissants, fiables et évolutifs. Ensemble, rendons votre entreprise plus intelligente, plus rapide et plus performante.
              </p>
              <div className="flex justify-center">
                <a
                  href="/contact"
                  className="md:w-96 w-full h-14 cta-wrapper group"
                >
                  <div className="cta-button">
                    <p className="button-text">Contactez-nous pour en savoir plus</p>
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

export default AgentsIA;

