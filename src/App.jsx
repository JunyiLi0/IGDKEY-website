import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AgentsIA from "./pages/AgentsIA";
import LandingPage from "./pages/LandingPage";
import SiteWebIntelligent from "./pages/SiteWebIntelligent";
import Contact from "./pages/Contact";
import TermsConditions from "./pages/TermsConditions";

gsap.registerPlugin(ScrollTrigger);

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

// Component to scroll to top on route change - disables animations during scroll
const ScrollToTop = () => {
  const location = useLocation();
  const previousPath = useRef(location.pathname);

  // Use useLayoutEffect to scroll BEFORE paint (synchronously)
  useLayoutEffect(() => {
    // Only act if the route actually changed
    if (previousPath.current !== location.pathname) {
      previousPath.current = location.pathname;

      // Kill all existing ScrollTrigger instances to prevent stale triggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // Scroll to top instantly without any animation
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      // Clear any inline GSAP styles that might persist from killed animations
      ScrollTrigger.clearScrollMemory();

      // Refresh ScrollTrigger after a microtask to let the new page render
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }
  }, [location.pathname]);

  return null;
};

const App = () => (
  <>
    <RedirectHandler />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/site-intelligent" element={<SiteWebIntelligent />} />
      <Route path="/agents" element={<AgentsIA />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/conditions" element={<TermsConditions />} />
    </Routes>
  </>
);

export default App;