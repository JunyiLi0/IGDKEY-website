import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  // track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    if (location.pathname !== "/") {
      e.preventDefault();
      window.location.href = "/";
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <Link to="/" onClick={handleLogoClick} className="logo">
          <img
            src={import.meta.env.BASE_URL + "images/igdkey-nobg.png"}
            alt="IGDKEY logo"
            style={{ height: 40, width: 'auto', display: 'inline-block', verticalAlign: 'middle' }}
          />
        </Link>

        {/* Hamburger menu button - visible only on mobile */}
        <button
          className="hamburger-btn lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <nav className="desktop">
          <ul>
            {navLinks.map((item) => {
              // Si c'est un lien externe (commence par #), utiliser <a>, sinon utiliser <Link>
              const isExternalLink = item.Link?.startsWith("#");
              // Si c'est le lien Accueil "/", on applique la même logique que le logo pour forcer le scroll top via reload si besoin
              const isHomeLink = item.link === "/";

              const handleHomeClick = (e) => {
                if (isHomeLink && location.pathname !== "/") {
                  // Si on clique sur Accueil depuis une autre page, comportement "Logo" (reload pour être sûr d'être en haut)
                  e.preventDefault();
                  window.location.href = "/";
                } else if (isHomeLink && location.pathname === "/") {
                  // Si on est déjà sur l'accueil et qu'on clique sur Accueil, scroll top doux
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              };

              return (
                <li
                    key={item.name}
                    className="group relative"
                  >
                    {item.children ? (
                      <>
                        <button 
                        className="
                           flex
                          items-center
                          gap-2
                          text-white
                          hover:text-pale-sky
                          transition-colors

                        ">
                          <span>{item.name}</span>
                          <svg
                            className="w-4 h-4 transition-transform group-hover:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>

                          <span className="underline" />
                        </button>

                        <div
                          className="
                            absolute
                            top-full
                            left-0
                            mt-4
                            w-60
                            rounded-2xl
                            border
                            border-white/10
                            bg-[#0B1220]
                            backdrop-blur-xl
                            opacity-0
                            invisible
                            translate-y-3
                            group-hover:opacity-100
                            group-hover:visible
                            group-hover:translate-y-0
                            transition-all
                            duration-300
                            shadow-2xl
                            z-50
                          "
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.link}
                              onClick={() => {
                                closeMenu();
                              }}
                              className="
                                block
                                px-6
                                py-4
                                text-white
                                hover:bg-pale-sky/10
                                hover:text-pale-sky
                                transition
                              "
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link 
                      to={item.link}
                      onClick={handleHomeClick}
                      >
                        <span>{item.name}</span>
                        <span className="underline" />
                      </Link>
                    )}
                  </li>
              );
            })}
          </ul>
        </nav>

        <Link to="/contact" className="contact-btn group hidden lg:flex">
          <div className="inner">
            <span>Nous contacter</span>
          </div>
        </Link>
      </div>

      {/* Mobile menu */}
      <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((item) => {
            const isExternalLink = item.link?.startsWith("#");
            const isHomeLink = item.link === "/";

            const handleHomeClick = (e) => {
              closeMenu();
              if (isHomeLink && location.pathname !== "/") {
                e.preventDefault();
                window.location.href = "/";
              } else if (isHomeLink && location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            };

            return (
              <li key={item.name}>
                  {item.children ? (
                    <>
                      <p className="text-pale-sky font-semibold px-4 py-2">
                        {item.name}
                      </p>

                      <ul className="pl-4">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <Link
                              to={child.link}
                              onClick={closeMenu}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={item.link}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
            );
          })}
          <li>
            <Link to="/contact" onClick={closeMenu} className="mobile-contact-btn">
              Nous contacter
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
