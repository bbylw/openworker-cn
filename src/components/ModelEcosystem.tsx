import React, { useState } from "react";
import {
  Sparkles,
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
    { label: "全部模型", value: "all" },
    { label: "国内前沿", value: "domestic" },
    { label: "国际顶尖", value: "international" },
    { label: "本地离线", value: "local" },
    { label: "开源权重", value: "opensource" },
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
      case "BrainCircuit": return <BrainCircuit size={20} color="var(--amber-bright)" />;
      case "Sparkles": return <Sparkles size={20} color="var(--teal-bright)" />;
      case "Cpu": return <Cpu size={20} color="var(--steel)" />;
      case "Globe": return <Globe size={20} color="var(--steel)" />;
      case "HardDrive": return <HardDrive size={20} color="var(--amber-bright)" />;
      case "Compass": return <Compass size={20} color="var(--teal-bright)" />;
      case "Zap": return <Zap size={20} color="var(--amber)" />;
      case "Layers": return <Layers size={20} color="var(--steel)" />;
      case "Flame": return <Flame size={20} color="var(--coral)" />;
      case "Terminal": return <Terminal size={20} color="var(--teal-bright)" />;
      case "Server": return <Server size={20} color="var(--steel)" />;
      default: return <Sparkles size={20} color="var(--amber-bright)" />;
    }
  };

  return (
    <section id="models" className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">
            <BrainCircuit size={14} />
            <span>自带模型 · 零绑定</span>
          </div>
          <h2 className="section-headline">BYOM 自带模型生态</h2>
          <p className="section-subline">
            模型的使用权 100% 归你所有：选择你喜欢的提供商、粘贴 API Key，随时随地自由切换。
            支持闭源前沿模型、国内大模型、开源权重平台，以及通过 Ollama 在你的电脑上完全离线运行。
          </p>
        </div>

        {/* Filter & Search */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", marginBottom: "36px" }}>
          <div className="model-filter">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                className={`model-btn ${filter === opt.value ? "active" : ""}`}
                onClick={() => setFilter(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div style={{ position: "relative", width: "100%", maxWidth: "380px" }}>
            <Search
              size={15}
              color="var(--text-muted)"
              style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }}
            />
            <input
              type="text"
              className="model-search-input"
              placeholder="搜索提供商或模型名称..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "9px 14px 9px 38px",
                background: "var(--bg-surface)",
                border: "1px solid var(--border-hair)",
                borderRadius: "var(--r-full)",
                color: "var(--text-primary)",
                fontSize: "0.82rem",
                outline: "none",
                fontFamily: "var(--font-body)",
              }}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="model-grid">
          {filteredProviders.map((provider) => (
            <div key={provider.id} className="card model-card">
              <div className="model-top">
                <div className="model-name">
                  {getProviderIcon(provider.iconName)}
                  <span>{provider.name}</span>
                </div>
                {provider.toolCallingVerified && (
                  <span className="model-verified" title="经实测通过复杂工具调用验证">
                    ✓ 已验证
                  </span>
                )}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "12px" }}>
                {provider.popularModels.map((m, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      padding: "2px 7px",
                      borderRadius: "var(--r-xs)",
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--border-hair)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>

              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: "1.55" }}>
                {provider.notes}
              </p>
            </div>
          ))}
        </div>

        {/* Security Callout */}
        <div
          className="card"
          style={{
            marginTop: "32px",
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <Key size={24} color="var(--amber)" style={{ flexShrink: 0 }} />
          <div>
            <div style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: "3px" }}>
              API Key 安全直连机制
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
              你所输入的 API Key 直接加密保存在你的本地操作系统 Keychain / 密钥管理器中。每次调用直接向对应大模型服务商 API 发送请求，绝不经过任何代理服务器留存。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
