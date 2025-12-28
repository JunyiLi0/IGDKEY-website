import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useLayoutEffect, lazy, Suspense, useState } from "react";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const SiteWebIntelligent = lazy(() => import("./pages/SiteWebIntelligent"));
const SelfHostedAI = lazy(() => import("./pages/SelfHostedAI"));
const AgentsIA = lazy(() => import("./pages/AgentsIA"));
const Contact = lazy(() => import("./pages/Contact"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const Chat = lazy(() => import("./components/Chat"));

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

      // IMPORTANT: don't dynamically import ScrollTrigger here.
      // Doing it async can race with the next route and kill *new* triggers.
      // If GSAP is already loaded by the current/previous route, it exposes ScrollTrigger on window.
      const ScrollTrigger = window.__ScrollTrigger;
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        ScrollTrigger.clearScrollMemory();
      }

      // Scroll to top instantly without any animation
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      requestAnimationFrame(() => {
        window.__ScrollTrigger?.refresh?.();
      });
    }
  }, [location.pathname]);

  return null;
};

const App = () => {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    // Load the chat widget when the browser is idle (keeps initial bundle smaller)
    const schedule = window.requestIdleCallback ?? ((cb) => window.setTimeout(cb, 1500));
    const cancel = window.cancelIdleCallback ?? ((id) => window.clearTimeout(id));
    const id = schedule(() => setShowChat(true), { timeout: 3000 });
    return () => cancel(id);
  }, []);

  return (
    <>
      <RedirectHandler />
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/site-intelligent" element={<SiteWebIntelligent />} />
          <Route path="/ia-privee" element={<SelfHostedAI />} />
          <Route path="/agents" element={<AgentsIA />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/conditions" element={<TermsConditions />} />
        </Routes>
      </Suspense>
      {showChat && (
        <Suspense fallback={null}>
          <Chat />
        </Suspense>
      )}
    </>
  );
};

export default App;