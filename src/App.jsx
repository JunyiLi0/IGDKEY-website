import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import NosServices from "./pages/NosServices";

// Component to handle 404.html redirects for GitHub Pages
const RedirectHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we have a redirect from 404.html
    if (location.search.includes('?/')) {
      const path = location.search
        .replace(/^\?\/?/, '')
        .replace(/~and~/g, '&')
        .split('&')[0];
      if (path) {
        window.history.replaceState(null, '', path);
        window.location.reload();
      }
    }
  }, [location]);

  return null;
};

const App = () => (
  <>
    <RedirectHandler />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<NosServices />} />
    </Routes>
  </>
);

export default App;