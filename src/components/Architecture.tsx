import React from "react";
import { WORKFLOW_STEPS } from "../data/content";
import { Layers, Server, Laptop, Cpu, ShieldCheck, Database, HardDrive, Lock } from "lucide-react";

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

        <div className="arch-grid">
          {/* Left: 4-Step Process */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", marginBottom: "4px", display: "flex", alignItems: "center", gap: "10px" }}>
              <Layers size={20} color="var(--amber)" />
              <span>4 步协同交付闭环</span>
            </h3>
            {WORKFLOW_STEPS.map((step) => (
              <div key={step.step} className="card arch-step" style={{ padding: "16px 20px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div
                  className="arch-step-num"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "var(--r-xs)",
                    background: "var(--amber-bg)",
                    color: "var(--amber-bright)",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    border: "1px solid var(--amber-border)",
                  }}
                >
                  0{step.step}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <span style={{ fontWeight: 600, fontSize: "1rem" }}>{step.title}</span>
                    <span style={{ color: "var(--teal-bright)", fontSize: "0.78rem", fontFamily: "var(--font-mono)" }}>
                      // {step.subtitle}
                    </span>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "4px", lineHeight: "1.5" }}>
                    {step.description}
                  </p>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    ↳ {step.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Blueprint Diagram */}
          <div className="arch-diagram">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--teal-bright)" }}>
                <Server size={15} />
                <span>ARCH_BLUEPRINT // LOCAL_FIRST</span>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--amber-bright)", background: "var(--amber-bg)", padding: "2px 7px", borderRadius: "var(--r-xs)", border: "1px solid var(--amber-border)" }}>
                100% On-Premise
              </span>
            </div>

            {/* Layer 1: GUI */}
            <div className="arch-layer arch-layer-top">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontWeight: 700, fontSize: "1.05rem", color: "var(--teal-bright)" }}>
                <Laptop size={18} />
                <span>OpenWorker 桌面客户端 (surfaces/gui)</span>
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                React 19 UI + Tauri 原生外壳 · 监管本地 Python 智能体服务
              </div>
            </div>

            <div style={{ textAlign: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.72rem" }}>
              ↕ 本地 IPC 通信 (X-OpenWorker-Token 鉴权)
            </div>

            {/* Layer 2: Python Server */}
            <div className="arch-layer arch-layer-mid">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontWeight: 700, fontSize: "1.05rem", color: "var(--amber-bright)" }}>
                <Cpu size={18} />
                <span>本地智能体服务端 (coworker / Python)</span>
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                基于 <strong>aisuite</strong> 内核 · 智能体引擎 · 工具调度 · MCP 客户端 · 本地记忆
              </div>
            </div>

            <div style={{ textAlign: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.72rem" }}>
              ⬇ 外部能力与本地系统调度
            </div>

            {/* Layer 3: Subnodes */}
            <div className="arch-subnodes">
              <div className="arch-node">
                <HardDrive size={20} color="var(--amber-bright)" style={{ marginBottom: "4px" }} />
                <div style={{ fontWeight: 600, fontSize: "0.82rem" }}>本地文件与终端</div>
                <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>FS / Bash</div>
              </div>
              <div className="arch-node">
                <Database size={20} color="var(--teal-bright)" style={{ marginBottom: "4px" }} />
                <div style={{ fontWeight: 600, fontSize: "0.82rem" }}>25+ 工具连接器</div>
                <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>GitHub / Slack / MCP</div>
              </div>
              <div className="arch-node">
                <Cpu size={20} color="var(--steel)" style={{ marginBottom: "4px" }} />
                <div style={{ fontWeight: 600, fontSize: "0.82rem" }}>任意大模型</div>
                <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>DeepSeek/Claude/Ollama</div>
              </div>
            </div>

            {/* Security Boundary */}
            <div
              style={{
                padding: "12px 14px",
                background: "var(--amber-bg)",
                border: "1px solid var(--amber-border)",
                borderRadius: "var(--r-xs)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "0.8rem",
                color: "var(--text-secondary)",
              }}
            >
              <Lock size={15} color="var(--amber)" style={{ flexShrink: 0 }} />
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
