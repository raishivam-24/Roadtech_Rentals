import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import CategoryStory from "../components/CategoryStory";
import StatsBand from "../components/StatsBand";
import SupportTabs from "../components/SupportTabs";
import ProjectShowcase from "../components/ProjectShowcase";
import Testimonials from "../components/Testimonials";
import CtaBand from "../components/CtaBand";
import Services from "../components/Services";
import Keywords from "../components/Keywords";
import "../css/home-page.css";

/**
 * Home page — structured after ajax-engg.com's flow:
 * Hero (video) -> Ticker -> Category story (Milling/Stabilizing/Paving/Other)
 * -> Stats band -> Support tabs -> Project showcase -> Testimonials
 * -> Services/Keywords (SEO) -> Multi-CTA band -> Footer (in App.jsx)
 */
export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="stripe-divider" />
      <Ticker />

      <CategoryStory />

      <StatsBand />

      <SupportTabs />

      <div className="stripe-divider" />
      <ProjectShowcase />

      <Testimonials />

      <div className="stripe-divider" />
      <Services />

      <Keywords />

      <CtaBand />
    </>
  );
}
