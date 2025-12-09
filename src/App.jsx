import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import AgentsIA from "./pages/AgentsIA";
import NosExpertises from "./pages/NosExpertises";
import Contact from "./pages/Contact";
import TermsConditions from "./pages/TermsConditions";

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

// Component to scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const App = () => (
  <>
    <RedirectHandler />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<NosExpertises />} />
      <Route path="/expertises" element={<NosExpertises />} />
      <Route path="/agents" element={<AgentsIA />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/conditions" element={<TermsConditions />} />
    </Routes>
  </>
);

export default App;