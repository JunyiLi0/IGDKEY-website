import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useLayoutEffect, lazy, Suspense, useState } from "react";
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const LandingPage = lazy(() => import("./pages/LandingPage"));
const SiteWebIntelligent = lazy(() => import("./pages/SiteWebIntelligent"));
const ENOR_IA = lazy(() => import("./pages/ENOR_IA"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Consulting = lazy(() => import("./pages/Consulting"));
const Cas_dusage = lazy(() => import("./pages/Cas_dusage"));
const SelfHostedAI = lazy(() => import("./pages/SelfHostedAI"));
const AgentsIA = lazy(() => import("./pages/AgentsIA"));
const LaFondatrice = lazy(() => import("./pages/LaFondatrice"));
const Contact = lazy(() => import("./pages/Contact"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const Chat = lazy(() => import("./components/chat/Chat"));

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
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

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
          <Route path="/ENOR_IA" element={<ENOR_IA />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Consulting" element={<Consulting />} />
          <Route path="/Cas_dusage" element={<Cas_dusage />} />
          <Route path="/ia-privee" element={<SelfHostedAI />} />
          <Route path="/agents" element={<AgentsIA />} />
          <Route path="/equipe" element={<LaFondatrice />} />
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