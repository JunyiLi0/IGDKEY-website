import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import emailjs from "@emailjs/browser";
import { getAssetPath } from "../config";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const headerRef = useRef(null);
  const contactCardsRef = useRef(null);
  const formContainerRef = useRef(null);
  const whyContactRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Auto-dismiss message after 5 seconds
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ text: "", type: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message.text]);

  useGSAP(() => {
    // Header animation
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
    });

    // Contact info cards staggered animation
    gsap.from(".contact-info-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: contactCardsRef.current,
        start: "top 80%",
      },
    });

    // Form fade in
    gsap.from(formContainerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: formContainerRef.current,
        start: "top 75%",
      },
    });

    // Why contact cards animation
    gsap.from(".why-contact-card", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      scrollTrigger: {
        trigger: whyContactRef.current,
        start: "top 75%",
      },
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and show success
      setForm({ name: "", email: "", message: "" });
      setMessage({ text: "Message envoyé avec succès ! Nous vous répondrons sous 24h.", type: "success" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setMessage({ text: "Erreur lors de l'envoi. Veuillez réessayer ou nous contacter directement.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <section id="contact" className="section-padding padding-x-lg">
        {/* Header Section */}
        <div ref={headerRef} className="w-full mb-16">
          <div className="text-center mb-12">
            <h1 className="text-white font-bold md:text-5xl text-4xl mb-6 leading-tight">
              Prêt à{" "}
              <span className="bg-gradient-to-r from-pale-sky to-dusty-grape bg-clip-text text-transparent">
                Transformer
              </span>{" "}
              Votre Entreprise ?
            </h1>
            <p className="text-white-50 md:text-xl text-lg max-w-3xl mx-auto leading-relaxed">
              Contactez notre équipe d'experts en IA pour une consultation gratuite et découvrez comment nous pouvons vous aider.
            </p>
          </div>
          <TitleHeader
            title="Parlons de Votre Projet"
            sub="💬 Nous répondons sous 24h"
          />
        </div>

        {/* Contact Info Cards */}
        <div ref={contactCardsRef} className="grid md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
          <div className="contact-info-card card-border rounded-xl p-6 text-center bg-gradient-to-br from-onyx to-dusty-grape">
            <div className="text-4xl mb-3">✉️</div>
            <h3 className="text-mint-cream font-semibold text-lg mb-2">Email</h3>
            <p className="text-pale-sky">contact@igdkey.com</p>
          </div>
          <div className="contact-info-card card-border rounded-xl p-6 text-center bg-gradient-to-br from-onyx to-dusty-grape">
            <div className="text-4xl mb-3">⏱️</div>
            <h3 className="text-mint-cream font-semibold text-lg mb-2">Réponse rapide</h3>
            <p className="text-pale-sky">Sous 24h</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="mb-20">
          <div ref={formContainerRef} className="max-w-3xl mx-auto">
            <div className="card-border rounded-xl p-8 md:p-10 bg-gradient-to-br from-onyx to-dusty-grape">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-6"
              >
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 mb-3">
                    <span className="text-xl">👤</span>
                    <span className="text-white text-lg">Nom / Entreprise</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Votre nom ou nom de votre entreprise"
                    className="focus:ring-2 focus:ring-slate-grey/50 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="flex items-center gap-2 mb-3">
                    <span className="text-xl">✉️</span>
                    <span className="text-white text-lg">Email professionnel</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="contact@votreentreprise.com"
                    className="focus:ring-2 focus:ring-slate-grey/50 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="flex items-center gap-2 mb-3">
                    <span className="text-xl">💭</span>
                    <span className="text-white text-lg">Votre message</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez-nous votre projet, vos besoins en IA, ou posez-nous vos questions..."
                    rows="5"
                    className="focus:ring-2 focus:ring-slate-grey/50 transition-all duration-300"
                    required
                  />
                </div>

                <button type="submit" className="w-full cta-wrapper group" disabled={loading}>
                  <div className="cta-button">
                    <p className="button-text">
                      {loading ? "Envoi en cours..." : "Envoyer le message"}
                    </p>
                  </div>
                </button>

                {message.text && (
                  <div className={`
                    p-6 rounded-xl text-center flex items-center justify-center gap-3
                    transition-all duration-300
                    ${message.type === "success"
                      ? "bg-gradient-to-r from-mint-cream/20 to-mint-cream/30 text-mint-cream border-2 border-mint-cream/50"
                      : "bg-gradient-to-r from-slate-grey/20 to-slate-grey/30 text-slate-grey border-2 border-slate-grey/50"
                    }
                  `}>
                    <span className="text-2xl">
                      {message.type === "success" ? "✓" : "✕"}
                    </span>
                    <span className="font-semibold">{message.text}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Why Contact Us Section */}
        <div ref={whyContactRef} className="w-full">
          <TitleHeader
            title="Pourquoi Nous Contacter ?"
            sub="✨ Nos engagements"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="why-contact-card card-border rounded-xl p-8 bg-gradient-to-br from-onyx to-dusty-grape">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-mint-cream text-xl font-semibold mb-3">
                Consultation Gratuite
              </h3>
              <p className="text-pale-sky text-lg leading-relaxed">
                Discutons de vos besoins sans engagement. Une première consultation pour comprendre vos objectifs.
              </p>
            </div>
            <div className="why-contact-card card-border rounded-xl p-8 bg-gradient-to-br from-onyx to-dusty-grape">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-mint-cream text-xl font-semibold mb-3">
                Devis Personnalisé
              </h3>
              <p className="text-pale-sky text-lg leading-relaxed">
                Recevez une proposition détaillée et adaptée à votre budget rapidement.
              </p>
            </div>
            <div className="why-contact-card card-border rounded-xl p-8 bg-gradient-to-br from-onyx to-dusty-grape">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-mint-cream text-xl font-semibold mb-3">
                Accompagnement de A à Z
              </h3>
              <p className="text-pale-sky text-lg leading-relaxed">
                De l'analyse de vos besoins jusqu'au déploiement, nous sommes à vos côtés.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
