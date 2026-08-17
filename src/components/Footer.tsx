import React, { useState } from "react";
import { Bot, Heart, MessageSquare, ShieldCheck, GitPullRequest, ExternalLink, ChevronDown } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { FAQS, HERO_DATA } from "../data/content";

export const Footer: React.FC = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <>
      {/* FAQ Accordion Section */}
      <section className="section" style={{ paddingBottom: "40px" }}>
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow">
              <MessageSquare size={14} />
              <span>常见解答</span>
            </div>
            <h2 className="section-headline">常见问题 (FAQ)</h2>
            <p className="section-subline">
              快速了解 OpenWorker 的技术原理、安全性与使用场景。
            </p>
          </div>

          <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="atelier-card"
                  style={{
                    padding: "18px 24px",
                    cursor: "pointer",
                    borderColor: isOpen ? "rgba(0, 245, 160, 0.4)" : "var(--border-hairline)",
                  }}
                  onClick={() => toggleFaq(idx)}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)" }}>
                      {faq.q}
                    </div>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                        color: isOpen ? "var(--accent-mint)" : "var(--text-muted)",
                      }}
                    />
                  </div>
                  {isOpen && (
                    <div style={{ marginTop: "12px", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.65", borderTop: "1px solid var(--border-hairline)", paddingTop: "12px" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community & Contribution Banner */}
      <div className="container" style={{ marginBottom: "60px" }}>
        <div
          className="atelier-card"
          style={{
            padding: "40px",
            background: "linear-gradient(135deg, rgba(0, 245, 160, 0.08) 0%, rgba(0, 229, 255, 0.06) 100%)",
            border: "1px solid rgba(0, 245, 160, 0.3)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "28px",
          }}
        >
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.65rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "12px" }}>
              <GitPullRequest size={24} color="var(--accent-mint)" />
              <span>参与开源社区共建</span>
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", maxWidth: "700px", lineHeight: "1.65" }}>
              欢迎提交代码与 Bug 报告！提交 PR 时请附带「之前出了什么问题」与「现在如何修复」的截图说明。应用支持自动更新，修复将极速送达所有用户。
            </p>
          </div>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href={HERO_DATA.issuesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glass"
            >
              <MessageSquare size={16} />
              <span>提交反馈 Issue</span>
            </a>
            <a
              href={HERO_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-mint"
            >
              <GithubIcon size={16} />
              <span>在 GitHub 上 Star</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <div className="nav-logo-icon">
                  <Bot size={18} />
                </div>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.3rem" }}>
                  OpenWorker
                </span>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", maxWidth: "340px", lineHeight: "1.6" }}>
                开源的本地优先 AI 同事，驻留在你的桌面，交付真正已完成的真实成果而非聊天。
              </p>
              <div style={{ marginTop: "18px", display: "flex", gap: "10px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", padding: "4px 10px", borderRadius: "var(--radius-xs)", background: "var(--bg-surface-elevated)", border: "1px solid var(--border-hairline)" }}>
                  MIT License
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", padding: "4px 10px", borderRadius: "var(--radius-xs)", background: "rgba(0,245,160,0.1)", color: "var(--accent-mint)", border: "1px solid rgba(0,245,160,0.25)" }}>
                  Beta Release
                </span>
              </div>
            </div>

            {/* Links 1 */}
            <div>
              <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
                功能特性
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem" }}>
                <li><a href="#features" style={{ color: "var(--text-secondary)" }}>真实交付物</a></li>
                <li><a href="#features" style={{ color: "var(--text-secondary)" }}>Slack 协作</a></li>
                <li><a href="#features" style={{ color: "var(--text-secondary)" }}>25+ 工具集成 & MCP</a></li>
                <li><a href="#features" style={{ color: "var(--text-secondary)" }}>计划任务与自动化</a></li>
                <li><a href="#simulator" style={{ color: "var(--text-secondary)" }}>实战工作流演练</a></li>
              </ul>
            </div>

            {/* Links 2 */}
            <div>
              <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
                架构与生态
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem" }}>
                <li><a href="#how-it-works" style={{ color: "var(--text-secondary)" }}>分层架构图解</a></li>
                <li><a href="#models" style={{ color: "var(--text-secondary)" }}>BYOM 模型生态</a></li>
                <li><a href="#models" style={{ color: "var(--text-secondary)" }}>Ollama 本地离线部署</a></li>
                <li><a href="#privacy" style={{ color: "var(--text-secondary)" }}>本地隐私安全体系</a></li>
                <li>
                  <a href="https://github.com/andrewyng/aisuite" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <span>aisuite 项目</span>
                    <ExternalLink size={12} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Links 3 */}
            <div>
              <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
                开发与下载
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem" }}>
                <li><a href="#developers" style={{ color: "var(--text-secondary)" }}>从源码运行</a></li>
                <li><a href="#download" style={{ color: "var(--text-secondary)" }}>客户端安装包</a></li>
                <li><a href={HERO_DATA.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}>GitHub 仓库</a></li>
                <li><a href={HERO_DATA.issuesUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}>问题与反馈</a></li>
              </ul>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid var(--border-hairline)",
              paddingTop: "24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div>
              © {new Date().getFullYear()} OpenWorker Contributors. 基于 MIT 协议开源。
            </div>
            <div style={{ fontFamily: "var(--font-mono)", color: "var(--accent-mint)" }}>
              ⚡ Powered by React 19 & Native Bun 1.3+
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
