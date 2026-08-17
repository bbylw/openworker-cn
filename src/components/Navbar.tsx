import React, { useState, useEffect } from "react";
import { Bot, Sun, Moon, Download, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { NAV_ITEMS, HERO_DATA } from "../data/content";

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

  return (
    <header className="nav-wrapper">
      <div className="nav-bar">
        {/* Brand */}
        <a href="#" className="nav-logo">
          <div className="nav-logo-icon">
            <Bot size={18} />
          </div>
          <span>OpenWorker</span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              padding: "2px 8px",
              borderRadius: "999px",
              background: "rgba(0, 245, 160, 0.12)",
              color: "var(--accent-mint)",
              border: "1px solid rgba(0, 245, 160, 0.3)",
              fontWeight: 700,
            }}
          >
            BETA
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="nav-links-deck">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="nav-controls">
          <button
            className="theme-pill-btn"
            onClick={toggleTheme}
            aria-label="切换明暗主题"
            title={`切换为${theme === "dark" ? "亮色" : "暗色"}模式`}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href={HERO_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-glass"
            style={{ padding: "8px 14px", fontSize: "0.85rem" }}
          >
            <GithubIcon size={15} />
            <span>GitHub</span>
          </a>

          <a
            href="#download"
            className="btn btn-mint"
            style={{ padding: "8px 16px", fontSize: "0.85rem" }}
          >
            <Download size={15} />
            <span>下载客户端</span>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="theme-pill-btn"
            style={{ display: "none" }}
            aria-label="菜单"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};
