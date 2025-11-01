import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import { getAssetPath } from "../config";
import IGDKeyLogo from "../components/AnimatedLetters";

const Hero = () => {

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src={getAssetPath("/images/bg.png")} alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <div className="flex flex-col md:flex-row w-full gap-8">
          <header className="flex flex-col justify-center md:w-1/2 w-full md:px-20 px-5 text-center md:text-left">
            <div className="hero-text flex flex-col items-center md:items-start">
              <h1 className="flex flex-col items-center md:items-start">
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center justify-center md:justify-start md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="icon"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
                <span className="mx-2"></span>
              </h1>
              <h1 className="text-center md:text-left">votre entreprise</h1>
              <h1 className="text-center md:text-left">boostée par l'IA</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none mb-6">
              L'agence qui fusionne vos technologies avec celles de demain.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Button
                text="Découvrir nos services"
                className="md:w-80 w-full h-12"
                id="counter"
              />
            </div>
          </header>

          <div className="md:w-1/2 w-full">
            <IGDKeyLogo />
          </div>
        </div>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;