import React from "react";
import { Sparkles, Terminal, Cpu, Plug, ShieldCheck } from "lucide-react";
import { AppleIcon, WindowsIcon } from "./BrandIcons";
import { HERO_DATA } from "../data/content";

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* === Left: Copy === */}
          <div className="hero-content">
            <div className="hero-badge reveal">
              <span className="hero-badge-dot"></span>
              <span>{HERO_DATA.betaNotice}</span>
            </div>

            <h1 className="hero-title reveal" style={{ animationDelay: "0.08s" }}>
              能帮你完成日常任务的
              <br />
              <span className="hero-title-accent shimmer-text">{HERO_DATA.titleHighlight}</span>
            </h1>

            <p className="hero-lead reveal" style={{ animationDelay: "0.16s" }}>
              OpenWorker 驻留在你的本地桌面，交付的是<strong>已完成的真实成果</strong>而非仅仅聊天。
              本地优先，自带任意大模型或 <strong>Ollama 离线运行</strong>，无缝连接 25+ 款日常生产力工具。
            </p>

            <div className="hero-cta reveal" style={{ animationDelay: "0.24s" }}>
              <a href={HERO_DATA.downloads.mac.url} className="btn btn-amber">
                <AppleIcon size={18} />
                <span>下载 macOS</span>
              </a>

              <a href={HERO_DATA.downloads.windows.url} className="btn btn-ghost">
                <WindowsIcon size={18} />
                <span>下载 Windows</span>
              </a>

              <a href="#simulator" className="btn btn-outline">
                <Sparkles size={16} />
                <span>实战演练</span>
              </a>
            </div>

            <div className="hero-stats reveal" style={{ animationDelay: "0.32s" }}>
              {HERO_DATA.stats.map((st, i) => (
                <div key={i} className="hero-stat">
                  <div className="hero-stat-num">{st.value}</div>
                  <div className="hero-stat-label">{st.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* === Right: Capability Card === */}
          <div className="hero-aside reveal" style={{ animationDelay: "0.28s" }}>
            <div className="hero-card">
              {/* Card header — mini terminal chrome */}
              <div className="hero-card-bar">
                <div className="hero-card-dots">
                  <span /><span /><span />
                </div>
                <div className="hero-card-title">
                  <Terminal size={12} color="var(--amber)" />
                  <span>openworker — status</span>
                </div>
                <span className="hero-card-live">● live</span>
              </div>

              {/* Card body */}
              <div className="hero-card-body">
                {/* Capability rows */}
                <div className="hero-card-row">
                  <Cpu size={15} color="var(--teal-bright)" />
                  <span className="hero-card-label">Active Model</span>
                  <span className="hero-card-value">DeepSeek-R1</span>
                </div>
                <div className="hero-card-row">
                  <Plug size={15} color="var(--amber-bright)" />
                  <span className="hero-card-label">Tool Protocol</span>
                  <span className="hero-card-value">MCP 1.2</span>
                </div>
                <div className="hero-card-row">
                  <ShieldCheck size={15} color="var(--teal-bright)" />
                  <span className="hero-card-label">Storage Mode</span>
                  <span className="hero-card-value">Local-First</span>
                </div>

                {/* Divider */}
                <div className="hero-card-divider" />

                {/* Mini code preview */}
                <div className="hero-card-code">
                  <div className="hero-card-code-line"><span className="hero-card-prompt">$</span> openworker-agent --task</div>
                  <div className="hero-card-code-line hero-card-dim">  <span className="hero-card-tag">JIRA</span> 18 issues fetched</div>
                  <div className="hero-card-code-line hero-card-dim">  <span className="hero-card-tag">GITHUB</span> 12 PRs merged</div>
                  <div className="hero-card-code-line hero-card-dim">  <span className="hero-card-tag">LOCAL</span> ./report.pdf saved</div>
                  <div className="hero-card-code-line hero-card-ok">  ✓ task completed in 4.2s</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
