import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WorkspaceShowcase } from "./components/WorkspaceShowcase";
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
      {/* Atmospheric Background */}
      <div className="atmosphere-layer">
        <div className="atm-orb atm-orb-1" />
        <div className="atm-orb atm-orb-2" />
        <div className="atm-orb atm-orb-3" />
        <div className="atm-grid" />
      </div>

      {/* Floating Pill Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <WorkspaceShowcase />
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
