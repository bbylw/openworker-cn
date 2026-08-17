import React, { useState } from "react";
import {
  FileCheck2,
  MessageSquareCode,
  Boxes,
  Clock8,
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Terminal,
  FileSpreadsheet,
  FileCode,
  Lock,
  Calendar,
  Send,
} from "lucide-react";
import { CORE_FEATURES } from "../data/content";

export const Features: React.FC = () => {
  const [activeToolCategory, setActiveToolCategory] = useState<"all" | "dev" | "office" | "comm">("all");

  const tools = [
    { name: "GitHub", cat: "dev", desc: "PR/Issue/Codebase" },
    { name: "Jira", cat: "dev", desc: "Sprint/Backlog" },
    { name: "Linear", cat: "dev", desc: "Issue Tracking" },
    { name: "Local Files & Terminal", cat: "dev", desc: "Bash/Read/Write" },
    { name: "MCP Protocol", cat: "dev", desc: "Model Context Protocol" },
    { name: "Slack", cat: "comm", desc: "Channels/Threads" },
    { name: "Gmail", cat: "comm", desc: "Mail Drafts/Search" },
    { name: "Outlook", cat: "comm", desc: "Enterprise Email" },
    { name: "Google Calendar", cat: "office", desc: "Events/Conflicts" },
    { name: "Notion", cat: "office", desc: "Workspace/Docs" },
    { name: "HubSpot", cat: "office", desc: "CRM Records" },
    { name: "monday.com", cat: "office", desc: "Work OS Projects" },
  ];

  const filteredTools = tools.filter((t) => activeToolCategory === "all" || t.cat === activeToolCategory);

  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>核心超能力</span>
          </div>
          <h2 className="section-headline">不仅是聊天，而是替你交付最终成果</h2>
          <p className="section-subline">
            传统 AI 助手只在网页中输出建议，之后还需要你亲自去复制粘贴、查工具、写命令。
            OpenWorker 深入你的桌面生态，交付可直接分享的实体文件与操作结果。
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="bento-grid">
          {/* Bento Card 1: Real Deliverables (Large 8-col) */}
          <div className="atelier-card bento-card bento-col-8">
            <div>
              <div className="bento-icon-wrapper">
                <FileCheck2 size={26} />
              </div>
              <h3 className="bento-title">产出真实交付物 (Real Deliverables)</h3>
              <p className="bento-desc">
                生成的 Markdown 报告、结构化 Excel 电子表格、PDF 简报和网页代码都会直接以文件形式落盘至你的本地目录，即刻可用可分享。
              </p>
            </div>

            {/* Interactive File Showcase Pill Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
                background: "var(--bg-surface-elevated)",
                padding: "16px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-hairline)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <FileCode size={20} color="var(--accent-mint)" />
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)" }}>Markdown / PDF</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>打磨好的排版报告</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <FileSpreadsheet size={20} color="var(--accent-cyan)" />
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)" }}>Excel / CSV</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>多源数据透视表</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Terminal size={20} color="var(--accent-indigo)" />
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)" }}>Shell / 代码补丁</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>可复现脚本指令</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Slack Integration (4-col) */}
          <div className="atelier-card bento-card bento-col-4">
            <div>
              <div className="bento-icon-wrapper" style={{ color: "var(--accent-cyan)", background: "var(--accent-cyan-bg)", borderColor: "var(--accent-cyan-border)" }}>
                <MessageSquareCode size={26} />
              </div>
              <h3 className="bento-title">从 Slack 异步召唤</h3>
              <p className="bento-desc">
                在频道里 @OpenWorker；你的桌面上会开启一个会话，借助你电脑上的工具完成深度调研，并将答案以线程回复返回。
              </p>
            </div>

            {/* Slack Mockup Snippet */}
            <div
              style={{
                background: "var(--bg-code-box)",
                border: "1px solid var(--border-hairline)",
                borderRadius: "var(--radius-sm)",
                padding: "12px 14px",
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                <div style={{ width: "22px", height: "22px", borderRadius: "4px", background: "var(--accent-mint)", color: "var(--btn-mint-text)", fontWeight: 800, fontSize: "0.7rem", display: "flex", alignItems: "center", justifyContent: "center" }}>OW</div>
                <span style={{ fontWeight: 700, color: "var(--text-code)" }}>OpenWorker Bot</span>
                <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>APP · 刚刚</span>
              </div>
              <p style={{ color: "var(--text-code)", opacity: 0.9, lineHeight: "1.45" }}>
                已为您完成 Jira + GitHub 数据聚合，客户简报已同步生成。
              </p>
            </div>
          </div>

          {/* Bento Card 3: Human in the Loop (4-col) */}
          <div className="atelier-card bento-card bento-col-4">
            <div>
              <div className="bento-icon-wrapper" style={{ color: "var(--accent-amber)", background: "var(--accent-amber-bg)", borderColor: "var(--accent-amber-border)" }}>
                <ShieldAlert size={26} />
              </div>
              <h3 className="bento-title">行动前先询问 · 绝对可控</h3>
              <p className="bento-desc">
                写入文件、外发消息与 Shell 命令必须经你批准。无人值守运行时会自动将敏感请求暂存至待办收件箱。
              </p>
            </div>

            <div
              style={{
                background: "var(--accent-amber-bg)",
                border: "1px solid var(--accent-amber-border)",
                padding: "12px 14px",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.82rem",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Lock size={16} color="var(--accent-amber)" style={{ flexShrink: 0 }} />
              <span style={{ color: "var(--text-secondary)" }}>
                关键操作弹窗把关，杜绝 AI 自主越权。
              </span>
            </div>
          </div>

          {/* Bento Card 4: 25+ Tools & MCP (8-col) */}
          <div className="atelier-card bento-card bento-col-8">
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
                <div>
                  <div className="bento-icon-wrapper" style={{ color: "var(--accent-electric)", background: "var(--accent-electric-bg)", borderColor: "var(--accent-electric-border)" }}>
                    <Boxes size={26} />
                  </div>
                  <h3 className="bento-title">使用你的日常工具 (25+ 连接器 & MCP)</h3>
                </div>

                {/* Category filters */}
                <div style={{ display: "flex", gap: "6px" }}>
                  <button
                    className={`btn ${activeToolCategory === "all" ? "btn-mint" : "btn-glass"}`}
                    style={{ padding: "4px 10px", fontSize: "0.75rem" }}
                    onClick={() => setActiveToolCategory("all")}
                  >
                    全部
                  </button>
                  <button
                    className={`btn ${activeToolCategory === "dev" ? "btn-mint" : "btn-glass"}`}
                    style={{ padding: "4px 10px", fontSize: "0.75rem" }}
                    onClick={() => setActiveToolCategory("dev")}
                  >
                    研发与终端
                  </button>
                  <button
                    className={`btn ${activeToolCategory === "office" ? "btn-mint" : "btn-glass"}`}
                    style={{ padding: "4px 10px", fontSize: "0.75rem" }}
                    onClick={() => setActiveToolCategory("office")}
                  >
                    办公与日程
                  </button>
                  <button
                    className={`btn ${activeToolCategory === "comm" ? "btn-mint" : "btn-glass"}`}
                    style={{ padding: "4px 10px", fontSize: "0.75rem" }}
                    onClick={() => setActiveToolCategory("comm")}
                  >
                    即时通讯
                  </button>
                </div>
              </div>

              <p className="bento-desc">
                预置 GitHub、Slack、Jira、Notion、Linear、HubSpot、Outlook、Gmail、日历与本地终端连接器；任何遵循 MCP 标准的工具均可无缝接入，支持按工具细粒度授权。
              </p>
            </div>

            {/* Tools Grid Pill Matrix */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "10px",
              }}
            >
              {filteredTools.map((t, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "var(--bg-surface-elevated)",
                    border: "1px solid var(--border-hairline)",
                    padding: "10px 12px",
                    borderRadius: "var(--radius-sm)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--text-primary)" }}>
                    {t.name}
                  </span>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                    {t.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Card 5: Scheduled Runs (12-col Full) */}
          <div className="atelier-card bento-card bento-col-12" style={{ minHeight: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <div className="bento-icon-wrapper" style={{ color: "var(--accent-purple)", background: "var(--accent-purple-bg)", margin: 0 }}>
                  <Clock8 size={26} />
                </div>
                <div>
                  <h3 className="bento-title" style={{ marginBottom: "4px" }}>按计划周期自动化 (Scheduled Workflows)</h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", margin: 0 }}>
                    每日晨间简报、每周五周报自动汇总、指定 Slack 频道的持续监控 —— 运行结果带着完整操作记录沉淀在本地应用中。
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", background: "var(--accent-mint-bg)", color: "var(--accent-mint)", border: "1px solid var(--accent-mint-border)", padding: "6px 12px", borderRadius: "var(--radius-sm)" }}>
                  Cron 调度引擎
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", background: "var(--accent-cyan-bg)", color: "var(--accent-cyan)", border: "1px solid var(--accent-cyan-border)", padding: "6px 12px", borderRadius: "var(--radius-sm)" }}>
                  全链路审计日志
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
