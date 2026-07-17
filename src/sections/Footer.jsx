import { Link } from "react-router-dom";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full bg-onyx border-t border-white/10 mt-20">

      {/* TOP: 3 colonnes */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Colonne 1 */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">IGDKEY</h3>
          <p className="text-slate-grey text-sm leading-relaxed">
            Serveur IA local et auto-hébergé pour professionnels français.
            Intelligence artificielle souveraine, données hébergées chez 
            vous ou selon votre choix.
          </p>
        </div>

        {/* Colonne 2 */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Pages</h3>
          <ul className="text-slate-grey text-sm space-y-2">
            <li>Fonctionnalités</li>
            <li>Sécurité & Données</li>
            <li>Cas d'usage</li>
          </ul>
        </div>

        {/* Colonne 3 */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
          <p className="text-slate-grey text-sm leading-relaxed">
            Pour toute question sur notre serveur IA local,
            contactez-nous via le formulaire de contact
          </p>
        </div>

      </div>

      {/* BOTTOM BAR (remplacement de ton © simple) */}
      <div className="border-t border-white/10 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-grey text-sm">

          {/* Conditions Générales */}
          <Link
            to="/conditions"
            className="hover:text-mint-cream transition-colors"
          >
            Conditions Générales
          </Link>

          {/* Socials */}
          <div className="flex gap-4 items-center">
            {socialImgs.map((socialImg, index) => (
              <a
                key={index}
                href={socialImg.url}
                target="_blank"
                rel="noopener noreferrer"
                className="icon hover:opacity-80 transition"
              >
                <img src={socialImg.imgPath} alt={socialImg.name} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-right">
            © {new Date().getFullYear()} IGDKEY. Tous droits réservés.
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
