import React, { useState } from "react";
import {
  Terminal,
  Copy,
  Check,
  FolderTree,
  Code2,
  ExternalLink,
  Cpu,
  Layers,
  ChevronRight,
} from "lucide-react";
import { DEV_GUIDE } from "../data/content";

export const DeveloperGuide: React.FC = () => {
  const [platform, setPlatform] = useState<"mac" | "windows">("mac");
  const [copied, setCopied] = useState(false);
  const [selectedDirIdx, setSelectedDirIdx] = useState(0);

  const getFullScript = () => {
    if (platform === "mac") {
      return `# 1. 克隆代码仓库
git clone https://github.com/andrewyng/openworker
cd openworker

# 2. 一次性环境引导 (创建 Python 虚拟环境与依赖)
bash packaging/setup_dev_env.sh

# 3. 启动本地智能体服务端 (Python)
.venv/bin/openworker-server --cwd ~/some/project --port 8765

# 4. 在新终端启动 GUI (React 前端)
cd surfaces/gui
npm install
npm run dev

# (可选) 若启动完整 Tauri 原生桌面应用：
npm run tauri dev`;
    } else {
      return `# 1. 克隆代码仓库
git clone https://github.com/andrewyng/openworker
cd openworker

# 2. 一次性环境引导 (推荐在 Git Bash 或 WSL 中执行)
bash packaging/setup_dev_env.sh

# 3. 启动本地智能体服务端 (Windows PowerShell / CMD)
.venv\\Scripts\\openworker-server.exe --cwd C:\\some\\project --port 8765

# 4. 在新终端启动 GUI 界面
cd surfaces/gui
npm install
npm run dev

# (可选) 启动完整 Tauri 原生桌面窗口：
npm run tauri dev`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getFullScript());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developers" className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">
            <Terminal size={14} />
            <span>开发者与源码指南</span>
          </div>
          <h2 className="section-headline">从源码运行与二次开发</h2>
          <p className="section-subline">
            OpenWorker 拥有清晰解耦的模块化结构。前置依赖：Python 3.10+、Node 20+ 以及（用于桌面外壳）通过 rustup 安装的 Rust 工具链。
          </p>
        </div>

        {/* Platform Selector */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "24px" }}>
          <button
            className={`btn ${platform === "mac" ? "btn-mint" : "btn-glass"}`}
            style={{ padding: "8px 18px", fontSize: "0.85rem" }}
            onClick={() => setPlatform("mac")}
          >
            macOS / Linux 启动指南
          </button>
          <button
            className={`btn ${platform === "windows" ? "btn-mint" : "btn-glass"}`}
            style={{ padding: "8px 18px", fontSize: "0.85rem" }}
            onClick={() => setPlatform("windows")}
          >
            Windows (10/11) 启动指南
          </button>
        </div>

        {/* Terminal Shell Container */}
        <div className="dev-terminal-shell">
          <div className="terminal-top-bar">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Terminal size={14} color="var(--accent-mint)" />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                terminal // dev-quickstart.sh
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="btn btn-glass"
              style={{ padding: "4px 12px", fontSize: "0.75rem" }}
            >
              {copied ? (
                <>
                  <Check size={14} color="var(--accent-mint)" />
                  <span style={{ color: "var(--accent-mint)" }}>已复制脚本</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>一键复制代码</span>
                </>
              )}
            </button>
          </div>

          <pre className="terminal-code-body">
            <code>{getFullScript()}</code>
          </pre>
        </div>

        {/* Token Authentication Mechanism Notice */}
        <div
          className="atelier-card"
          style={{
            marginTop: "24px",
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", color: "var(--accent-cyan)" }}>
            🔑
          </span>
          <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
            <strong>本地侧车通信鉴权机制：</strong> 独立服务端启动时会在 <code style={{ color: "var(--accent-mint)", fontFamily: "var(--font-mono)" }}>&lt;state-dir&gt;/sidecar-8765.token</code> 自动生成一次性启动令牌。API 直接调用需在请求头携带 <code style={{ color: "var(--accent-mint)", fontFamily: "var(--font-mono)" }}>X-OpenWorker-Token</code>。桌面应用则使用内存临时令牌，绝不落盘。
          </div>
        </div>

        {/* Interactive Repository Directory Tree Inspector */}
        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.45rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
            <FolderTree size={22} color="var(--accent-mint)" />
            <span>仓库目录剖析 (Repository Architecture)</span>
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "16px" }}>
            {/* Directory tabs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {DEV_GUIDE.repoStructure.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedDirIdx(idx)}
                  className={`task-tab-item ${selectedDirIdx === idx ? "active" : ""}`}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>{item.dir}</span>
                  <ChevronRight size={14} />
                </div>
              ))}
            </div>

            {/* Selected directory details */}
            <div className="atelier-card" style={{ padding: "24px" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.1rem", fontWeight: 700, color: "var(--accent-mint)", marginBottom: "10px" }}>
                📁 {DEV_GUIDE.repoStructure[selectedDirIdx].dir}
              </div>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                {DEV_GUIDE.repoStructure[selectedDirIdx].desc}
              </p>
            </div>
          </div>
        </div>

        {/* aisuite Ecosystem Box */}
        <div
          className="atelier-card"
          style={{
            marginTop: "32px",
            padding: "28px",
            background: "linear-gradient(135deg, rgba(0, 245, 160, 0.05) 0%, rgba(0, 229, 255, 0.05) 100%)",
            border: "1px solid rgba(0, 245, 160, 0.25)",
            display: "flex",
            alignItems: "flex-start",
            gap: "20px",
          }}
        >
          <Cpu size={32} color="var(--accent-mint)" style={{ flexShrink: 0, marginTop: "2px" }} />
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem" }}>
                基于 aisuite 深度构建
              </h4>
              <a
                href="https://github.com/andrewyng/aisuite"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.8rem",
                  color: "var(--accent-mint)",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span>查看 aisuite 项目</span>
                <ExternalLink size={13} />
              </a>
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.65" }}>
              OpenWorker 的引擎基于 Andrew Ng 团队开发的 <strong>aisuite</strong> 构建。aisuite 是一个轻量级 Python 框架，提供了跨 LLM 提供商统一的补全调用标准，并内置工具集与 MCP 智能体调度。OpenWorker 最初在 aisuite 仓库内孵化，现在作为完整的开源 AI 同事桌面应用独立发展。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
