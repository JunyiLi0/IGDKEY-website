import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
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

  const handleContactClick = (e) => {
    if (location.pathname !== "/") {
      e.preventDefault();
      window.location.href = "/#contact";
    }
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

        <a href={location.pathname === "/" ? "#contact" : "/#contact"} onClick={handleContactClick} className="contact-btn group">
          <div className="inner">
            <span>Nous contacter</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
