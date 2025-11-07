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
            {navLinks.map(({ link, name }) => {
              // Si c'est un lien externe (commence par #), utiliser <a>, sinon utiliser <Link>
              const isExternalLink = link.startsWith("#");
              return (
                <li key={name} className="group">
                  {isExternalLink ? (
                    <a href={location.pathname === "/" ? link : `/${link}`}>
                      <span>{name}</span>
                      <span className="underline" />
                    </a>
                  ) : (
                    <Link to={link}>
                      <span>{name}</span>
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
          {navLinks.map(({ link, name }) => {
            const isExternalLink = link.startsWith("#");
            return (
              <li key={name}>
                {isExternalLink ? (
                  <a 
                    href={location.pathname === "/" ? link : `/${link}`}
                    onClick={closeMenu}
                  >
                    {name}
                  </a>
                ) : (
                  <Link to={link} onClick={closeMenu}>
                    {name}
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
