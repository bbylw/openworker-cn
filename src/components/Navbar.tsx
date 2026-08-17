import React, { useState, useEffect } from "react";
import { Bot, Sun, Moon, Download, Menu, X } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { NAV_ITEMS } from "../data/content";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on link click
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="nav-shell">
      <div className={`nav-bar ${scrolled ? "scrolled" : ""}`}>
        {/* Brand */}
        <a href="#" className="nav-logo">
          <div className="nav-logo-mark">
            <Bot size={16} />
          </div>
          <span>OpenWorker</span>
          <span className="nav-beta-tag">BETA</span>
        </a>

        {/* Desktop Links */}
        <nav className="nav-links">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="nav-controls">
          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label="切换明暗主题"
            title={`切换为${theme === "dark" ? "亮色" : "暗色"}模式`}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <a
            href="https://github.com/andrewyng/openworker"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost nav-github-btn"
            style={{ padding: "7px 12px", fontSize: "0.82rem" }}
            title="GitHub 仓库"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>

          <a
            href="#download"
            className="btn btn-amber nav-download-btn"
            style={{ padding: "7px 14px", fontSize: "0.82rem" }}
          >
            <Download size={14} />
            <span>下载</span>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="theme-btn nav-mobile-toggle"
            aria-label="菜单"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="nav-mobile-menu" onClick={closeMobile}>
          <div className="nav-mobile-content" onClick={(e) => e.stopPropagation()}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-mobile-link"
                onClick={closeMobile}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
