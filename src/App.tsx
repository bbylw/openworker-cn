import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Architecture } from "./components/Architecture";
import { WorkflowSimulator } from "./components/WorkflowSimulator";
import { ModelEcosystem } from "./components/ModelEcosystem";
import { PrivacySection } from "./components/PrivacySection";
import { DeveloperGuide } from "./components/DeveloperGuide";
import { DownloadSection } from "./components/DownloadSection";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem("openworker-theme");
    return (saved as "dark" | "light") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("openworker-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app-root">
      {/* Dynamic Ambient Atmosphere Lights */}
      <div className="ambient-glow-mesh">
        <div className="ambient-orb-top" />
        <div className="ambient-orb-mid" />
        <div className="ambient-grid" />
      </div>

      {/* Floating Pill Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Features />
        <Architecture />
        <WorkflowSimulator />
        <ModelEcosystem />
        <PrivacySection />
        <DeveloperGuide />
        <DownloadSection />
      </main>

      {/* Footer & FAQs */}
      <Footer />
    </div>
  );
};

export default App;
