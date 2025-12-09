import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getAssetPath } from "../config";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {<div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src={getAssetPath("/images/project1.png")} alt="Interface de l'application Ryde" />
            </div>
            <div className="text-content">
              <h2>
                Une Application de Transport à la Demande, utilisant les dernières technologies d'IA
              </h2>
              <p className="text-pale-sky md:text-xl">
                Une application construite sur mesure répondant à vos besoins spécifiques.
              </p>
            </div>
          </div>}

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src={getAssetPath("/images/project2.png")}
                  alt="Plateforme de Gestion de Bibliothèque"
                />
              </div>
              <h2>Plateforme de Gestion de Bibliothèque</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src={getAssetPath("/images/project3.png")} alt="Application YC Directory" />
              </div>
              <h2>Application de Vitrine pour Startups</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;