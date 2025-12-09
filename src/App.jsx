import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import AgentsIA from "./pages/AgentsIA";
import NosExpertises from "./pages/NosExpertises";
import Contact from "./pages/Contact";
import TermsConditions from "./pages/TermsConditions";
import SiteWebIntelligent from "./pages/SiteWebIntelligent";

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

// Component to scroll to top on route change and page refresh (instant, no animation)
const ScrollToTop = () => {
  const location = useLocation();
  const hasScrolled = useRef(false);

  const scrollToTopInstant = () => {
    // Force instant scroll by directly setting scrollTop
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
    // Also use window.scrollTo with auto behavior as fallback
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // Scroll to top on initial mount (page refresh) - instant, no animation
    if (!hasScrolled.current) {
      // Use requestAnimationFrame to ensure it happens before render
      requestAnimationFrame(() => {
        scrollToTopInstant();
      });
      hasScrolled.current = true;
    }
  }, []);

  useEffect(() => {
    // Scroll to top when the route changes - instant, no animation
    // Use requestAnimationFrame to ensure it happens synchronously
    requestAnimationFrame(() => {
      scrollToTopInstant();
    });
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
      <Route path="/site-web-intelligent" element={<SiteWebIntelligent />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/conditions" element={<TermsConditions />} />
    </Routes>
  </>
);

export default App;