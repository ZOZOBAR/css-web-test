import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import EventsSection from "./components/EventsSection";
import CommunitySection from "./components/CommunitySection";
import StudentsSection from "./components/StudentsSection";
import PartnersSection from "./components/PartnersSection";
import Footer from "./components/Footer";
import { GlobalStyles } from "./styles/GlobalStyles";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <EventsSection />
        <CommunitySection />
        <StudentsSection />
        <PartnersSection />
      </main>
      <Footer />
    </>
  );
}
