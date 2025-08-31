import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
// import TechStack from "./sections/TechStack";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import Chat from "./components/Chat";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <FeatureCards />
    {/* <TechStack /> */}
    <div style={{ marginTop: 180 }}>
      <Chat />
    </div>
    <Contact />
    <Footer />
  </>
);

export default App;