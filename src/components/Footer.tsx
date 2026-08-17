import React, { useState } from "react";
import { Bot, MessageSquare, GitPullRequest, ExternalLink, ChevronDown } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { FAQS, HERO_DATA } from "../data/content";

export const Footer: React.FC = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <>
      {/* FAQ */}
      <section className="section" style={{ paddingBottom: "40px" }}>
        <div className="container">
          <div className="section-head center">
            <div className="section-eyebrow">
              <MessageSquare size={14} />
              <span>常见解答</span>
            </div>
            <h2 className="section-headline">常见问题 (FAQ)</h2>
            <p className="section-subline">
              快速了解 OpenWorker 的技术原理、安全性与使用场景。
            </p>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "10px" }}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="card faq-item"
                  data-open={isOpen}
                  style={{
                    padding: "16px 20px",
                    cursor: "pointer",
                    borderColor: isOpen ? "var(--amber-border)" : "var(--border-hair)",
                  }}
                  onClick={() => toggleFaq(idx)}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text-primary)" }}>
                      {faq.q}
                    </div>
                    <ChevronDown
                      size={16}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform var(--dur-base) var(--ease-smooth)",
                        color: isOpen ? "var(--amber)" : "var(--text-muted)",
                        flexShrink: 0,
                      }}
                    />
                  </div>
                  {isOpen && (
                    <div className="faq-answer" style={{ marginTop: "10px", fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.65", borderTop: "1px solid var(--border-hair)", paddingTop: "10px" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Banner */}
      <div className="container" style={{ marginBottom: "48px" }}>
        <div
          className="card"
          style={{
            padding: "36px",
            background: "linear-gradient(135deg, var(--amber-bg) 0%, var(--teal-bg) 100%)",
            border: "1px solid var(--amber-border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", marginBottom: "6px", display: "flex", alignItems: "center", gap: "10px" }}>
              <GitPullRequest size={22} color="var(--amber)" />
              <span>参与开源社区共建</span>
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", maxWidth: "640px", lineHeight: "1.6" }}>
              欢迎提交代码与 Bug 报告！提交 PR 时请附带「之前出了什么问题」与「现在如何修复」的截图说明。应用支持自动更新，修复将极速送达所有用户。
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href={HERO_DATA.issuesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <MessageSquare size={15} />
              <span>提交反馈 Issue</span>
            </a>
            <a
              href={HERO_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-amber"
            >
              <GithubIcon size={15} />
              <span>在 GitHub 上 Star</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div className="nav-logo-mark">
                  <Bot size={16} />
                </div>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.2rem" }}>
                  OpenWorker
                </span>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", maxWidth: "320px", lineHeight: "1.6" }}>
                开源的本地优先 AI 同事，驻留在你的桌面，交付真正已完成的真实成果而非聊天。
              </p>
              <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", padding: "3px 8px", borderRadius: "var(--r-xs)", background: "var(--bg-elevated)", border: "1px solid var(--border-hair)" }}>
                  MIT License
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", padding: "3px 8px", borderRadius: "var(--r-xs)", background: "var(--amber-bg)", color: "var(--amber-bright)", border: "1px solid var(--amber-border)" }}>
                  Beta Release
                </span>
              </div>
            </div>

            {/* Links 1 */}
            <div>
              <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "14px" }}>
                功能特性
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem" }}>
                <li><a href="#features" className="footer-link">真实交付物</a></li>
                <li><a href="#features" className="footer-link">Slack 协作</a></li>
                <li><a href="#features" className="footer-link">25+ 工具集成 & MCP</a></li>
                <li><a href="#features" className="footer-link">计划任务与自动化</a></li>
                <li><a href="#simulator" className="footer-link">实战工作流演练</a></li>
              </ul>
            </div>

            {/* Links 2 */}
            <div>
              <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "14px" }}>
                架构与生态
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem" }}>
                <li><a href="#how-it-works" className="footer-link">分层架构图解</a></li>
                <li><a href="#models" className="footer-link">BYOM 模型生态</a></li>
                <li><a href="#models" className="footer-link">Ollama 本地离线部署</a></li>
                <li><a href="#privacy" className="footer-link">本地隐私安全体系</a></li>
                <li>
                  <a href="https://github.com/andrewyng/aisuite" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <span>aisuite 项目</span>
                    <ExternalLink size={11} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Links 3 */}
            <div>
              <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "14px" }}>
                开发与下载
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem" }}>
                <li><a href="#developers" className="footer-link">从源码运行</a></li>
                <li><a href="#download" className="footer-link">客户端安装包</a></li>
                <li><a href={HERO_DATA.githubUrl} target="_blank" rel="noopener noreferrer" className="footer-link">GitHub 仓库</a></li>
                <li><a href={HERO_DATA.issuesUrl} target="_blank" rel="noopener noreferrer" className="footer-link">问题与反馈</a></li>
              </ul>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid var(--border-hair)",
              paddingTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <div>
              © {new Date().getFullYear()} OpenWorker Contributors. 基于 MIT 协议开源。
            </div>
            <div style={{ fontFamily: "var(--font-mono)", color: "var(--amber)" }}>
              ⚡ Powered by React 19 & Bun
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
