import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import NosServices from "./pages/NosServices";

// Component to handle 404.html redirects for GitHub Pages
const RedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hasRedirected = useRef(false);

  useEffect(() => {
    // Check if we have a redirect parameter from 404.html (only once)
    const urlParams = new URLSearchParams(location.search);
    const redirectPath = urlParams.get('redirect');
    
    if (!hasRedirected.current && redirectPath) {
      hasRedirected.current = true;
      
      // Decode and navigate to the correct path
      const decodedPath = decodeURIComponent(redirectPath);
      
      if (decodedPath && decodedPath !== location.pathname) {
        // Clean the URL by removing the redirect parameter
        window.history.replaceState(null, '', decodedPath + location.hash);
        // Use navigate to update React Router's state
        navigate(decodedPath, { replace: true });
      }
    }
  }, [location, navigate]);

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