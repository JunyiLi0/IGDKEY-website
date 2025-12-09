import { Link } from "react-router-dom";
import Footer from "../sections/Footer";

const TermsConditions = () => {
  return (
    <>
      {/* Header avec logo */}
      <header className="w-full bg-black py-5 px-5 md:px-20">
        <Link 
          to="/" 
          className="inline-block transition-transform duration-300 hover:scale-105"
        >
          <img
            src={import.meta.env.BASE_URL + "images/igdkey-nobg.png"}
            alt="IGDKEY logo"
            className="h-10 w-auto"
          />
        </Link>
      </header>

      <section className="min-h-screen bg-mint-cream py-20 px-5 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-onyx font-bold text-4xl md:text-5xl mb-8 text-center">
            Conditions Générales d'Utilisation
          </h1>
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
            <p className="text-onyx text-lg text-center">
              Contenu à venir...
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsConditions;

