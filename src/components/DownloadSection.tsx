import React from "react";
import { Download, AlertCircle } from "lucide-react";
import { AppleIcon, WindowsIcon } from "./BrandIcons";
import { HERO_DATA } from "../data/content";

export const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="section">
      <div className="container">
        <div className="section-head center">
          <div className="section-eyebrow">
            <Download size={14} />
            <span>下载客户端</span>
          </div>
          <h2 className="section-headline">下载 OpenWorker 桌面客户端</h2>
          <p className="section-subline">
            支持 macOS Apple 芯片与 Windows 10/11 x64。打开应用，添加一个大模型 API Key（或直接指向本地 Ollama），即刻开启专属 AI 同事协助。
          </p>
        </div>

        <div className="download-grid">
          {/* macOS */}
          <div className="card download-card">
            <div className="download-icon">
              <AppleIcon size={32} />
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem" }}>
              macOS 客户端
            </h3>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              <strong>{HERO_DATA.downloads.mac.version}</strong>
              <div style={{ color: "var(--amber-bright)", fontSize: "0.78rem", marginTop: "4px", fontFamily: "var(--font-mono)" }}>
                ✓ {HERO_DATA.downloads.mac.note}
              </div>
            </div>

            <a
              href={HERO_DATA.downloads.mac.url}
              className="btn btn-amber"
              style={{ width: "100%", padding: "12px", fontSize: "0.9rem" }}
            >
              <Download size={16} />
              <span>下载 macOS (DMG)</span>
            </a>

            <div style={{ fontSize: "0.76rem", color: "var(--text-muted)", textAlign: "center" }}>
              适用 M1 / M2 / M3 / M4 系列 Apple 芯片 Mac 设备，支持静默自动升级。
            </div>
          </div>

          {/* Windows */}
          <div className="card download-card">
            <div className="download-icon" style={{ color: "var(--teal-bright)", borderColor: "var(--teal-border)", background: "var(--teal-bg)" }}>
              <WindowsIcon size={32} />
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem" }}>
              Windows 客户端
            </h3>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              <strong>{HERO_DATA.downloads.windows.version}</strong>
              <div style={{ color: "var(--coral)", fontSize: "0.78rem", marginTop: "4px", fontFamily: "var(--font-mono)" }}>
                ⚠ 安装包代码签名进行中
              </div>
            </div>

            <a
              href={HERO_DATA.downloads.windows.url}
              className="btn btn-ghost"
              style={{ width: "100%", padding: "12px", fontSize: "0.9rem", borderColor: "var(--amber-border)" }}
            >
              <Download size={16} />
              <span>下载 Windows (x64)</span>
            </a>

            <div
              style={{
                background: "var(--coral-bg)",
                border: "1px solid var(--coral-border)",
                borderRadius: "var(--r-xs)",
                padding: "10px 14px",
                fontSize: "0.78rem",
                color: "var(--text-secondary)",
                textAlign: "left",
                lineHeight: "1.5",
              }}
            >
              <div style={{ fontWeight: 600, color: "var(--coral)", display: "flex", alignItems: "center", gap: "5px", marginBottom: "3px" }}>
                <AlertCircle size={13} />
                <span>Windows Defender 提示</span>
              </div>
              <div>
                由于安装包代码签名正在申请中，初次运行若 SmartScreen 拦截，请点击<strong>“更多信息”</strong>并选择<strong>“仍要运行”</strong>。
              </div>
            </div>
          </div>
        </div>

        {/* 3 Steps */}
        <div
          className="card"
          style={{
            marginTop: "40px",
            padding: "28px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {[
            { num: "01", color: "var(--amber-bright)", bg: "var(--amber-bg)", title: "安装并打开应用", desc: "双击运行安装包，无需复杂依赖，应用自动完成本地环境初始化。" },
            { num: "02", color: "var(--teal-bright)", bg: "var(--teal-bg)", title: "接入你信任的大模型", desc: "填入 DeepSeek, OpenAI, Claude Key 或直接一键连接本机 Ollama 离线运行。" },
            { num: "03", color: "var(--steel)", bg: "var(--steel-bg)", title: "提出真实业务需求", desc: "“准备客户简报”“理顺日历”“起草周报”，享受真正的成果交付。" },
          ].map((step, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "var(--r-xs)",
                  background: step.bg,
                  color: step.color,
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "0.82rem",
                }}
              >
                {step.num}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.92rem" }}>{step.title}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "3px" }}>
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
