import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import { getAssetPath } from "../config";

gsap.registerPlugin(ScrollTrigger);
if (typeof window !== "undefined") {
  window.__gsap = gsap;
  window.__ScrollTrigger = ScrollTrigger;
}

const LaFondatrice = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const igdkeyRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(".story-block", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: storyRef.current,
        start: "top 80%",
      },
    });

    gsap.from(igdkeyRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: igdkeyRef.current,
        start: "top 85%",
      },
    });

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
        {/* Hero - Photo + Name */}
        <div ref={heroRef} className="w-full mb-24 mt-10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-dusty-grape/20 rounded-full blur-[100px] -z-10"></div>
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-br from-pale-sky to-dusty-grape mb-8">
              <img
                src={getAssetPath("/images/Myriam.jpeg")}
                alt="Myriam IGDEM"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h1 className="text-white font-bold md:text-6xl text-4xl mb-3 tracking-tight">
              Myriam IGDEM
            </h1>
            <p className="text-pale-sky font-semibold md:text-2xl text-xl mb-6">
              PDG & Fondatrice d'IGDKEY
            </p>
            <p className="text-slate-grey md:text-lg text-base max-w-2xl leading-relaxed">
              Une vision entrepreneuriale forgée par la finance, le trading et
              une passion profonde pour la technologie.
            </p>
          </div>
        </div>

        {/* Story Sections */}
        <div ref={storyRef} className="w-full mb-24">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Block 1 - Le Choix */}
            <div className="story-block">
              <div className="w-full p-px rounded-2xl bg-gradient-to-r from-dusty-grape via-pale-sky/30 to-dusty-grape">
                <div className="bg-onyx rounded-2xl px-6 py-10 md:px-12 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.svg')] opacity-20"></div>
                  <div className="relative z-10">
                    <h2 className="text-white font-bold text-2xl md:text-3xl mb-6">
                      Le Choix de l'Entrepreneuriat
                    </h2>
                    <p className="text-slate-grey leading-relaxed md:text-lg">
                      À seulement 20 ans, Myriam IGDEM prend une décision que
                      peu osent faire : quitter un parcours académique tracé
                      pour se consacrer entièrement à sa vision
                      entrepreneuriale. Diplômée de l'Université Paris
                      Cité/Descartes en finance, pilotage de performance et
                      contrôle de gestion, elle comprend rapidement que sa place
                      ne se limite pas à analyser la performance des entreprises
                      — elle veut la transformer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2 - Trading */}
            <div className="story-block">
              <div className="w-full p-px rounded-2xl bg-gradient-to-r from-dusty-grape via-pale-sky/30 to-dusty-grape">
                <div className="bg-onyx rounded-2xl px-6 py-10 md:px-12 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.svg')] opacity-20"></div>
                  <div className="relative z-10">
                    <h2 className="text-white font-bold text-2xl md:text-3xl mb-6">
                      L'Esprit Stratégique
                    </h2>
                    <p className="text-slate-grey leading-relaxed md:text-lg">
                      Son expérience de plus de cinq ans en trading forge son
                      esprit stratégique. Les marchés lui apprennent la rigueur,
                      la lecture fine des indicateurs, l'importance des KPI et la
                      prise de décision rapide. Elle développe une compréhension
                      approfondie des dynamiques de performance, de gestion du
                      risque et d'optimisation financière. Mais au-delà des
                      chiffres, elle observe une réalité frappante : les
                      entreprises évoluent dans un environnement où la
                      technologie progresse plus vite que leur capacité à
                      l'adopter avec confiance et maîtrise.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 3 - Innovation */}
            <div className="story-block">
              <div className="w-full p-px rounded-2xl bg-gradient-to-r from-dusty-grape via-pale-sky/30 to-dusty-grape">
                <div className="bg-onyx rounded-2xl px-6 py-10 md:px-12 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.svg')] opacity-20"></div>
                  <div className="relative z-10">
                    <h2 className="text-white font-bold text-2xl md:text-3xl mb-6">
                      La Passion de l'Innovation
                    </h2>
                    <p className="text-slate-grey leading-relaxed md:text-lg mb-4">
                      Passionnée par l'informatique et l'innovation depuis son
                      plus jeune âge, Myriam imagine et conçoit déjà, dans sa
                      chambre, ses propres projets novateurs. Cette curiosité l'a
                      naturellement conduite à participer à un concours
                      d'innovation chez Salesforce, axé sur la conception 3D.
                    </p>
                    <p className="text-slate-grey leading-relaxed md:text-lg">
                      Animée par cette même passion, elle s'est ensuite formée à
                      l'intelligence artificielle afin de mieux en comprendre les
                      enjeux et d'explorer son potentiel pour les innovations de
                      demain. Au fil de ses études et de ses stages au sein de
                      grandes entreprises, elle a pris conscience des défis et
                      des tensions existant entre le marché économique et le
                      marché technologique.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IGDKEY Section */}
        <div ref={igdkeyRef} className="w-full mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="w-full p-1 rounded-3xl bg-gradient-to-r from-dusty-grape via-pale-sky to-dusty-grape">
              <div className="bg-onyx rounded-[22px] px-6 py-14 md:px-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.svg')] opacity-20"></div>
                <div className="relative z-10">
                  <h2 className="text-white font-bold text-3xl md:text-4xl mb-8 text-center">
                    La Naissance d'IGDKEY
                  </h2>
                  <div className="space-y-6 text-slate-grey leading-relaxed md:text-lg">
                    <p>
                      Myriam constate que de nombreuses organisations souhaitent
                      se moderniser et intégrer l'intelligence artificielle dans
                      leurs processus internes. Pourtant, la peur freine
                      l'innovation. Les IA génératives publiques sont souvent
                      bloquées au sein des entreprises, perçues comme des risques
                      potentiels. La crainte des fuites de données, du manque de
                      contrôle et de la dépendance aux plateformes externes
                      empêche les dirigeants de franchir le cap technologique.
                    </p>
                    <p className="text-white font-semibold text-xl md:text-2xl text-center py-4">
                      IGDKEY a été créée pour répondre précisément à cette
                      problématique.
                    </p>
                    <p>
                      Le cabinet développe des solutions d'intelligence
                      artificielle sur mesure, privées et auto-hébergées,
                      conçues pour protéger les données internes tout en libérant
                      le potentiel technologique des organisations. L'objectif
                      n'est pas simplement d'implémenter un outil, mais de
                      construire une infrastructure stratégique robuste,
                      sécurisée et alignée avec les enjeux métiers.
                    </p>
                    <p>
                      Autour de cette vision, une équipe de neuf experts s'est
                      constituée. Ingénieurs data, spécialistes en intelligence
                      artificielle, experts en cybersécurité, profils en
                      stratégie, finance et marketing unissent leurs compétences
                      pour proposer une approche complète et cohérente.
                    </p>
                    <p className="text-pale-sky font-medium text-center italic">
                      IGDKEY n'a pas été fondée pour suivre une mode. Elle est
                      née d'une conviction forte : il est possible d'exploiter
                      toute la puissance de l'intelligence artificielle tout en
                      conservant un contrôle total sur ses données stratégiques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="w-full mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="card-border rounded-2xl p-10 md:p-16 bg-gradient-to-br from-dusty-grape/10 to-pale-sky/10 text-center backdrop-blur-sm">
              <h2 className="text-white font-bold md:text-5xl text-3xl mb-6 leading-tight">
                Envie d'en savoir plus ?
              </h2>
              <p className="text-slate-grey md:text-xl text-lg mb-8 leading-relaxed">
                Discutons de votre projet et de la manière dont IGDKEY peut
                transformer votre entreprise.
              </p>
              <div className="flex justify-center">
                <a
                  href="/contact"
                  className="md:w-auto w-full h-14 cta-wrapper group"
                >
                  <div className="cta-button bg-pale-sky hover:bg-dusty-grape px-8">
                    <p className="button-text text-onyx group-hover:text-white whitespace-nowrap">
                      Nous contacter
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

export default LaFondatrice;
