import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import { getAssetPath } from "../config";
import IGDKeyLogo from "../components/AnimatedLetters";

const Hero = () => {

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text-animated h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background Image Removed */}

      {/* Hero Container with Proper Spacing */}
      <div className="hero-container">
        <div className="hero-content-wrapper">
          <header className="hero-header">
            {/* Main Heading with Animated Word Slider */}
            <div className="space-y-6">
              <h1 className="hero-title">
                <div className="hero-text-animated">
                  <div className="flex items-center justify-center gap-3">
                    <span className="slide">
                      <span className="wrapper">
                        {words.map((word, index) => (
                          <span
                            key={index}
                            className="flex items-center justify-center gap-2 md:gap-3"
                          >
                            <img
                              src={word.imgPath}
                              alt="icon"
                              className="size-8 md:size-12 rounded-full bg-pale-sky p-1 md:p-2"
                            />
                            <span>{word.text}</span>
                          </span>
                        ))}
                      </span>
                    </span>
                  </div>
                  <span className="mt-2">votre entreprise</span>
                  <span className="mt-2">boostée par l'IA</span>
                </div>
              </h1>

              <p className="hero-subtitle">
                L'agence qui fusionne vos technologies avec celles de demain
              </p>
            </div>

            {/* Logo */}
            <div className="hero-logo-wrapper">
              <IGDKeyLogo />
            </div>

            {/* CTA Button */}
            <div className="hero-cta-wrapper">
              <Button
                text="Découvrir nos services"
                className="md:w-80 w-full h-12"
                id="counter"
              />
            </div>
          </header>
        </div>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;