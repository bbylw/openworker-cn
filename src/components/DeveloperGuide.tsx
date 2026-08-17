import React, { useState } from "react";
import {
  Terminal,
  Copy,
  Check,
  FolderTree,
  ExternalLink,
  Cpu,
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
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "20px" }}>
          <button
            className={`btn ${platform === "mac" ? "btn-amber" : "btn-ghost"}`}
            style={{ padding: "7px 16px", fontSize: "0.82rem" }}
            onClick={() => setPlatform("mac")}
          >
            macOS / Linux
          </button>
          <button
            className={`btn ${platform === "windows" ? "btn-amber" : "btn-ghost"}`}
            style={{ padding: "7px 16px", fontSize: "0.82rem" }}
            onClick={() => setPlatform("windows")}
          >
            Windows (10/11)
          </button>
        </div>

        {/* Terminal */}
        <div className="terminal">
          <div className="terminal-top">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Terminal size={13} color="var(--amber)" />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                terminal // dev-quickstart.sh
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="btn btn-ghost"
              style={{ padding: "3px 10px", fontSize: "0.72rem" }}
            >
              {copied ? (
                <>
                  <Check size={13} color="var(--teal-bright)" />
                  <span style={{ color: "var(--teal-bright)" }}>已复制</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>复制脚本</span>
                </>
              )}
            </button>
          </div>

          <pre className="terminal-body">
            <code>{getFullScript()}<span className="term-cursor" /></code>
          </pre>
        </div>

        {/* Token Auth */}
        <div
          className="card"
          style={{
            marginTop: "20px",
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.1rem", color: "var(--amber)" }}>
            🔑
          </span>
          <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
            <strong>本地侧车通信鉴权机制：</strong> 独立服务端启动时会在 <code style={{ color: "var(--amber-bright)", fontFamily: "var(--font-mono)" }}>&lt;state-dir&gt;/sidecar-8765.token</code> 自动生成一次性启动令牌。API 直接调用需在请求头携带 <code style={{ color: "var(--amber-bright)", fontFamily: "var(--font-mono)" }}>X-OpenWorker-Token</code>。桌面应用则使用内存临时令牌，绝不落盘。
          </div>
        </div>

        {/* Directory Tree */}
        <div style={{ marginTop: "40px" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
            <FolderTree size={20} color="var(--amber)" />
            <span>仓库目录剖析</span>
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "14px" }}>
            {/* Tabs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              {DEV_GUIDE.repoStructure.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedDirIdx(idx)}
                  className={`ws-task ${selectedDirIdx === idx ? "active" : ""}`}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    transition: "all var(--dur-base) var(--ease-smooth)",
                  }}
                >
                  <span>{item.dir}</span>
                  <ChevronRight size={13} style={{ transition: "transform var(--dur-base) ease", transform: selectedDirIdx === idx ? "translateX(3px)" : "none" }} />
                </div>
              ))}
            </div>

            {/* Detail */}
            <div className="card" style={{ padding: "20px", animation: "reveal-fade var(--dur-base) ease both" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", fontWeight: 700, color: "var(--amber-bright)", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                <span>📁</span>
                <span>{DEV_GUIDE.repoStructure[selectedDirIdx].dir}</span>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                {DEV_GUIDE.repoStructure[selectedDirIdx].desc}
              </p>
            </div>
          </div>
        </div>

        {/* aisuite */}
        <div
          className="card"
          style={{
            marginTop: "28px",
            padding: "24px",
            background: "linear-gradient(135deg, var(--amber-bg) 0%, var(--teal-bg) 100%)",
            border: "1px solid var(--amber-border)",
            display: "flex",
            alignItems: "flex-start",
            gap: "18px",
          }}
        >
          <Cpu size={28} color="var(--amber)" style={{ flexShrink: 0, marginTop: "2px" }} />
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem" }}>
                基于 aisuite 深度构建
              </h4>
              <a
                href="https://github.com/andrewyng/aisuite"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.75rem",
                  color: "var(--amber-bright)",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span>查看 aisuite 项目</span>
                <ExternalLink size={12} />
              </a>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
              OpenWorker 的引擎基于 Andrew Ng 团队开发的 <strong>aisuite</strong> 构建。aisuite 是一个轻量级 Python 框架，提供了跨 LLM 提供商统一的补全调用标准，并内置工具集与 MCP 智能体调度。OpenWorker 最初在 aisuite 仓库内孵化，现在作为完整的开源 AI 同事桌面应用独立发展。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
