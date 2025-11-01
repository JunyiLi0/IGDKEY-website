import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { getAssetPath } from "../config";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

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
      setMessage({ text: "Message envoyé avec succès !", type: "success" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setMessage({ text: "Erreur lors de l'envoi. Veuillez réessayer.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Contactez-nous"
          sub="💬 Discutons de vos projets d'IA 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Votre nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nom de votre entreprise"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Votre email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email professionnel"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Votre message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet et vos besoins en IA"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Envoi en cours..." : "Envoyer le message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src={getAssetPath("/images/arrow-down.svg")} alt="arrow" />
                    </div>
                  </div>
                </button>
                
                {message.text && (
                  <div className={`p-4 rounded-lg text-center ${
                    message.type === "success" 
                      ? "bg-green-500/20 text-green-400 border border-green-500/50" 
                      : "bg-red-500/20 text-red-400 border border-red-500/50"
                  }`}>
                    {message.text}
                  </div>
                )}
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
