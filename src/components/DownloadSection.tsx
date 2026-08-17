import React from "react";
import { Download, AlertCircle, CheckCircle, ArrowRight, ShieldCheck, Sparkles, Terminal } from "lucide-react";
import { AppleIcon, WindowsIcon } from "./BrandIcons";
import { HERO_DATA } from "../data/content";

export const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">
            <Download size={14} />
            <span>下载客户端</span>
          </div>
          <h2 className="section-headline">下载 OpenWorker 桌面客户端</h2>
          <p className="section-subline">
            支持 macOS Apple 芯片与 Windows 10/11 x64。打开应用，添加一个大模型 API Key（或直接指向本地 Ollama），即刻开启专属 AI 同事协助。
          </p>
        </div>

        <div className="download-deck-grid">
          {/* macOS Card */}
          <div className="atelier-card download-spotlight-card">
            <div className="download-spotlight-icon">
              <AppleIcon size={36} />
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.65rem" }}>
              macOS 客户端
            </h3>
            <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              <strong>{HERO_DATA.downloads.mac.version}</strong>
              <div style={{ color: "var(--accent-mint)", fontSize: "0.82rem", marginTop: "4px", fontFamily: "var(--font-mono)" }}>
                ✓ {HERO_DATA.downloads.mac.note}
              </div>
            </div>

            <a
              href={HERO_DATA.downloads.mac.url}
              className="btn btn-mint"
              style={{ width: "100%", padding: "14px", fontSize: "1rem" }}
            >
              <Download size={18} />
              <span>下载 macOS (DMG) 安装包</span>
            </a>

            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textAlign: "center" }}>
              适用 M1 / M2 / M3 / M4 系列 Apple 芯片 Mac 设备，支持静默自动升级。
            </div>
          </div>

          {/* Windows Card */}
          <div className="atelier-card download-spotlight-card">
            <div className="download-spotlight-icon" style={{ color: "var(--accent-cyan)", borderColor: "rgba(0,229,255,0.3)" }}>
              <WindowsIcon size={36} />
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.65rem" }}>
              Windows 客户端
            </h3>
            <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              <strong>{HERO_DATA.downloads.windows.version}</strong>
              <div style={{ color: "var(--accent-amber)", fontSize: "0.82rem", marginTop: "4px", fontFamily: "var(--font-mono)" }}>
                ⚠️ 安装包代码签名进行中
              </div>
            </div>

            <a
              href={HERO_DATA.downloads.windows.url}
              className="btn btn-glass"
              style={{ width: "100%", padding: "14px", fontSize: "1rem", borderColor: "var(--accent-mint)" }}
            >
              <Download size={18} />
              <span>下载 Windows (x64) 安装包</span>
            </a>

            {/* SmartScreen Box */}
            <div
              style={{
                background: "rgba(251, 191, 36, 0.08)",
                border: "1px solid rgba(251, 191, 36, 0.3)",
                borderRadius: "var(--radius-sm)",
                padding: "12px 16px",
                fontSize: "0.82rem",
                color: "var(--text-secondary)",
                textAlign: "left",
                lineHeight: "1.5",
              }}
            >
              <div style={{ fontWeight: 700, color: "var(--accent-amber)", display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                <AlertCircle size={15} />
                <span>Windows Defender 提示说明：</span>
              </div>
              <div>
                由于安装包代码签名正在申请中，初次运行若 SmartScreen 拦截，请点击<strong>“更多信息”</strong>并选择<strong>“仍要运行”</strong>。
              </div>
            </div>
          </div>
        </div>

        {/* 3 Steps to start */}
        <div
          className="atelier-card"
          style={{
            marginTop: "48px",
            padding: "32px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(0, 245, 160, 0.15)",
                color: "var(--accent-mint)",
                fontFamily: "var(--font-mono)",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              01
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "1rem" }}>安装并打开应用</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                双击运行安装包，无需复杂依赖，应用自动完成本地环境初始化。
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(0, 229, 255, 0.15)",
                color: "var(--accent-cyan)",
                fontFamily: "var(--font-mono)",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              02
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "1rem" }}>接入你信任的大模型</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                填入 DeepSeek, OpenAI, Claude Key 或直接一键连接本机 Ollama 离线运行。
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(99, 102, 241, 0.15)",
                color: "var(--accent-indigo)",
                fontFamily: "var(--font-mono)",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              03
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "1rem" }}>提出真实业务需求</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                “准备客户简报”“理顺日历”“起草周报”，享受真正的成果交付。
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
