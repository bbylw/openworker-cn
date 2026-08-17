import React, { useState } from "react";
import {
  Sparkles,
  CheckCircle,
  Key,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  HardDrive,
  Flame,
  Globe,
  Layers,
  Terminal,
  Server,
  Compass,
  Zap,
  Search,
} from "lucide-react";
import { MODEL_PROVIDERS } from "../data/content";

export const ModelEcosystem: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filterOptions = [
    { label: "全部模型生态", value: "all" },
    { label: "国内前沿 (DeepSeek / Kimi / Qwen / GLM)", value: "domestic" },
    { label: "国际顶尖 (Claude / OpenAI / Gemini / Grok)", value: "international" },
    { label: "100% 本地离线 (Ollama)", value: "local" },
    { label: "开源权重云端 (Together / Fireworks)", value: "opensource" },
  ];

  const filteredProviders = MODEL_PROVIDERS.filter((p) => {
    const matchCategory = filter === "all" || p.category === filter;
    const matchSearch =
      searchTerm === "" ||
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.popularModels.some((m) => m.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchCategory && matchSearch;
  });

  const getProviderIcon = (name: string) => {
    switch (name) {
      case "BrainCircuit":
        return <BrainCircuit size={22} color="var(--accent-mint)" />;
      case "Sparkles":
        return <Sparkles size={22} color="var(--accent-cyan)" />;
      case "Cpu":
        return <Cpu size={22} color="var(--accent-indigo)" />;
      case "Globe":
        return <Globe size={22} color="var(--accent-electric)" />;
      case "HardDrive":
        return <HardDrive size={22} color="var(--accent-mint)" />;
      case "Compass":
        return <Compass size={22} color="var(--accent-cyan)" />;
      case "Zap":
        return <Zap size={22} color="var(--accent-amber)" />;
      case "Layers":
        return <Layers size={22} color="var(--accent-purple)" />;
      case "Flame":
        return <Flame size={22} color="var(--accent-rose)" />;
      case "Terminal":
        return <Terminal size={22} color="var(--accent-cyan)" />;
      case "Server":
        return <Server size={22} color="var(--accent-electric)" />;
      default:
        return <Sparkles size={22} color="var(--accent-mint)" />;
    }
  };

  return (
    <section id="models" className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">
            <BrainCircuit size={14} />
            <span>自带模型 · 零生态绑定</span>
          </div>
          <h2 className="section-headline">BYOM 自带模型生态</h2>
          <p className="section-subline">
            模型的使用权 100% 归你所有：选择你喜欢的提供商、粘贴 API Key，随时随地自由切换。
            支持闭源前沿模型、国内大模型、开源权重平台，以及通过 Ollama 在你的电脑上完全离线运行。
          </p>
        </div>

        {/* Filter Pills & Search Bar */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", marginBottom: "40px" }}>
          <div className="model-filter-nav">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                className={`model-nav-btn ${filter === opt.value ? "active" : ""}`}
                onClick={() => setFilter(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Quick Search Box */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <Search
              size={16}
              color="var(--text-muted)"
              style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }}
            />
            <input
              type="text"
              placeholder="搜索模型提供商或模型名称 (如 deepseek, gpt-4o)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 14px 10px 40px",
                background: "var(--bg-surface)",
                border: "1px solid var(--border-hairline)",
                borderRadius: "var(--radius-full)",
                color: "var(--text-primary)",
                fontSize: "0.85rem",
                outline: "none",
                fontFamily: "var(--font-body)",
              }}
            />
          </div>
        </div>

        {/* Models Grid */}
        <div className="model-matrix-grid">
          {filteredProviders.map((provider) => (
            <div key={provider.id} className="atelier-card model-item-card">
              <div className="model-item-top">
                <div className="model-item-name">
                  {getProviderIcon(provider.iconName)}
                  <span>{provider.name}</span>
                </div>
                {provider.toolCallingVerified && (
                  <span className="model-badge-verified" title="经官方实测通过复杂工具调用验证">
                    ✓ 工具调用验证
                  </span>
                )}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
                {provider.popularModels.map((m, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      padding: "3px 8px",
                      borderRadius: "var(--radius-xs)",
                      background: "var(--bg-surface-elevated)",
                      border: "1px solid var(--border-hairline)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>

              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: "1.55" }}>
                {provider.notes}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Key Security Callout */}
        <div
          className="atelier-card"
          style={{
            marginTop: "36px",
            padding: "22px 28px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Key size={26} color="var(--accent-amber)" style={{ flexShrink: 0 }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "4px" }}>
              API Key 安全直连机制
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              你所输入的 API Key 直接加密保存在你的本地操作系统 Keychain / 密钥管理器中。每次调用直接向对应大模型服务商 API 发送请求，绝不经过任何代理服务器留存。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
