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

const teamMembers = [
  {
    name: "Myriam IGDEM",
    title: "Founder & CEO",
    photo: "/images/team/Myriam.jpeg",
  },
  {
    name: "Slohane IGDEM",
    title: "COO — Chief Operating Officer",
    photo: "/images/team/Slohane.jpg",
  },
  {
    name: "Junyi Li",
    title: "AI Engineer",
    photo: "/images/team/Junyi.jpg",
  },
  {
    name: "Franck DOM",
    title: "Security & Data Lead",
    photo: "/images/team/Franck.jpg",
  },
  {
    name: "Haytham Tannouch",
    title: "Full Stack & AI Engineer",
    photo: "/images/team/Haytham.jpeg",
  },
  {
    name: "Yanis Kedyem",
    title: "Business Developer",
    photo: "/images/team/Yanis.jpg",
  },
];

const LaFondatrice = () => {
  const heroRef = useRef(null);
  const teamRef = useRef(null);
  const igdkeyRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(".team-card", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: teamRef.current,
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
        {/* Hero — Page title */}
        <div ref={heroRef} className="w-full mb-20 mt-10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-dusty-grape/20 rounded-full blur-[100px] -z-10"></div>
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <p className="text-pale-sky font-semibold md:text-lg text-base uppercase tracking-widest mb-4">
              À propos de nous
            </p>
            <h1 className="font-bold md:text-6xl text-4xl mb-6 tracking-tight bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent">
              Notre Équipe
            </h1>
            <p className="text-slate-grey md:text-lg text-base max-w-2xl leading-relaxed">
              Une équipe pluridisciplinaire unie autour d'une conviction : l'IA
              doit être au service de votre stratégie, pas l'inverse.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div ref={teamRef} className="w-full mb-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="team-card group relative rounded-2xl overflow-hidden cursor-default"
                style={{ aspectRatio: "3/4" }}
              >
                {/* Photo fills entire card */}
                <img
                  src={getAssetPath(member.photo)}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Permanent gradient overlay — ensures text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a0b] via-[#0d0a0b]/30 to-transparent" />

                {/* Hover border glow */}
                <div
                  className="absolute inset-0 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"
                  style={{ boxShadow: "inset 0 0 0 1px #bfd1e5aa" }}
                />

                {/* Monospace index — top left */}
                <span className="absolute top-5 left-5 font-mono text-xs tracking-[0.25em] select-none transition-colors duration-300 text-[#484a6e] group-hover:text-[#bfd1e5]/50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Name & title — bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-7 pt-20 bg-gradient-to-t from-[#0d0a0b] to-transparent">
                  <h3 className="text-white font-bold text-xl leading-tight mb-1 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-[#bfd1e5] text-sm font-medium leading-snug">
                    {member.title}
                  </p>
                  {/* Sweep line on hover */}
                  <div className="mt-4 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#bfd1e5] to-[#484a6e] transition-all duration-500 ease-out" />
                </div>
              </div>
            ))}
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
                      bloquées au sein des entreprises, perçues comme des
                      risques potentiels. La crainte des fuites de données, du
                      manque de contrôle et de la dépendance aux plateformes
                      externes empêche les dirigeants de franchir le cap
                      technologique.
                    </p>
                    <p className="text-white font-semibold text-xl md:text-2xl text-center py-4">
                      IGDKEY a été créée pour répondre précisément à cette
                      problématique.
                    </p>
                    <p>
                      Le cabinet développe des solutions d'intelligence
                      artificielle sur mesure, privées et auto-hébergées,
                      conçues pour protéger les données internes tout en
                      libérant le potentiel technologique des organisations.
                      L'objectif n'est pas simplement d'implémenter un outil,
                      mais de construire une infrastructure stratégique robuste,
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
