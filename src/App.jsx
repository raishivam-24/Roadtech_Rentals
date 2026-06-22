import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Machines from "./components/Machines";
import Services from "./components/Services";
import Keywords from "./components/Keywords";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./css/variables.css";
import "./css/global.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="stripe-divider" />
      <Ticker />

      <Machines />

      <div className="stripe-divider" />
      <Services />

      <Keywords />

      <div className="stripe-divider" />
      <Contact />

      <Footer />
    </>
  );
}
