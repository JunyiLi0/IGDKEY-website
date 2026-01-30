const partnerLogos = [
  { src: "/images/partenaires-igdkey/bpi-logo.png", alt: "BPI France" },
  { src: "/images/partenaires-igdkey/efrei-logo.webp", alt: "Efrei" },
  {
    src: "/images/partenaires-igdkey/france-2030-logo.png",
    alt: "France 2030",
  },
  {
    src: "/images/partenaires-igdkey/logo-french-tech.png",
    alt: "French Tech",
  },
  {
    src: "/images/partenaires-igdkey/logo-neorecoovre-scaled.png",
    alt: "Neorecoovre",
  },
  { src: "/images/partenaires-igdkey/logo-veoma-1.webp", alt: "Veoma" },
  {
    src: "/images/partenaires-igdkey/logo_panthéon_assas.png",
    alt: "Panthéon Assas",
  },
  { src: "/images/partenaires-igdkey/logo_v2-1.png", alt: "Partenaire" },
  {
    src: "/images/partenaires-igdkey/universite-paris-cite-logo.png",
    alt: "Université Paris Cité",
  },
];

const TrustCarousel = () => {
  return (
    <div className="trust-band md:mt-20 mt-10">
      <div className="trust-carousel">
        <div className="trust-carousel-track">
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div key={index} className="trust-logo-item">
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustCarousel;
