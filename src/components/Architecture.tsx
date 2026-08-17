import React from "react";
import { WORKFLOW_STEPS } from "../data/content";
import { Layers, Server, Laptop, Cpu, ShieldCheck, Database, HardDrive, Sparkles, ArrowDown, Lock } from "lucide-react";

export const Architecture: React.FC = () => {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">
            <Cpu size={14} />
            <span>运作机制与架构</span>
          </div>
          <h2 className="section-headline">极简优雅的分层架构与闭环流程</h2>
          <p className="section-subline">
            基于 Andrew Ng 团队开源的 aisuite 智能体内核构建。从本地 GUI 外壳到本地 Python 引擎，所有数据流均受控于你的机器。
          </p>
        </div>

        <div className="arch-blueprint-grid">
          {/* Left Column: 4-Step Process */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.45rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
              <Layers size={22} color="var(--accent-mint)" />
              <span>4 步协同交付闭环</span>
            </h3>
            {WORKFLOW_STEPS.map((step) => (
              <div key={step.step} className="atelier-card" style={{ padding: "18px 22px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(0, 245, 160, 0.12)",
                    color: "var(--accent-mint)",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    border: "1px solid rgba(0, 245, 160, 0.3)",
                  }}
                >
                  0{step.step}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <span style={{ fontWeight: 700, fontSize: "1.05rem" }}>{step.title}</span>
                    <span style={{ color: "var(--accent-cyan)", fontSize: "0.82rem", fontFamily: "var(--font-mono)" }}>
                      // {step.subtitle}
                    </span>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginBottom: "6px", lineHeight: "1.5" }}>
                    {step.description}
                  </p>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    ↳ {step.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Blueprint Visual */}
          <div className="blueprint-diagram">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--accent-cyan)" }}>
                <Server size={16} />
                <span>ARCH_BLUEPRINT // LOCAL_FIRST</span>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--accent-mint)", background: "rgba(0,245,160,0.1)", padding: "2px 8px", borderRadius: "4px" }}>
                100% On-Premise
              </span>
            </div>

            {/* Layer 1: GUI */}
            <div className="blueprint-layer blueprint-layer-top">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontWeight: 800, fontSize: "1.1rem", color: "var(--accent-cyan)" }}>
                <Laptop size={20} />
                <span>OpenWorker 桌面客户端 (surfaces/gui)</span>
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                React 19 UI + Tauri 原生外壳 · 监管本地 Python 智能体服务
              </div>
            </div>

            {/* Down Connector */}
            <div style={{ textAlign: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}>
              ↕️ 本地 IPC 通信 (X-OpenWorker-Token 鉴权)
            </div>

            {/* Layer 2: Python Server */}
            <div className="blueprint-layer blueprint-layer-mid">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontWeight: 800, fontSize: "1.1rem", color: "var(--accent-mint)" }}>
                <Cpu size={20} />
                <span>本地智能体服务端 (coworker / Python)</span>
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                基于 <strong>aisuite</strong> 内核 · 智能体引擎 · 工具调度 · MCP 客户端 · 本地记忆
              </div>
            </div>

            {/* Down Connector */}
            <div style={{ textAlign: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}>
              ⬇️ 外部能力与本地系统调度
            </div>

            {/* Layer 3: Subnodes */}
            <div className="blueprint-subnodes">
              <div className="blueprint-node">
                <HardDrive size={22} color="var(--accent-mint)" style={{ marginBottom: "6px" }} />
                <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>本地文件与终端</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>FS / Bash</div>
              </div>

              <div className="blueprint-node">
                <Database size={22} color="var(--accent-cyan)" style={{ marginBottom: "6px" }} />
                <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>25+ 工具连接器</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>GitHub / Slack / MCP</div>
              </div>

              <div className="blueprint-node">
                <Cpu size={22} color="var(--accent-indigo)" style={{ marginBottom: "6px" }} />
                <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>任意大模型</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>DeepSeek/Claude/Ollama</div>
              </div>
            </div>

            {/* Security Boundary Tag */}
            <div
              style={{
                padding: "12px 16px",
                background: "var(--accent-mint-bg)",
                border: "1px solid var(--accent-mint-border)",
                borderRadius: "var(--radius-sm)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "0.82rem",
                color: "var(--text-secondary)",
              }}
            >
              <Lock size={16} color="var(--accent-mint)" style={{ flexShrink: 0 }} />
              <span>
                <strong>数据安全边界：</strong> 对话历史、连接器令牌与大模型 API Key 均存放于系统本地安全密钥库，零中间商截留。
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
