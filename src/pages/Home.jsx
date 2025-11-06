import Footer from "../sections/Footer";
// import TechStack from "../sections/TechStack";
import Hero from "../sections/Hero";
import ShowcaseSection from "../sections/ShowcaseSection";
import FeatureCards from "../sections/FeatureCards";
import Chat from "../components/Chat";

const Home = () => (
  <>
    <Hero />
    <ShowcaseSection />
    <FeatureCards />
    {/* <TechStack /> */}
    <Chat />
    <Footer />
  </>
);

export default Home;

