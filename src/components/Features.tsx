import React, { useState } from "react";
import {
  FileCheck2,
  MessageSquareCode,
  Boxes,
  Clock8,
  ShieldAlert,
  CheckCircle2,
  Sparkles,
  Terminal,
  FileSpreadsheet,
  FileCode,
  Lock,
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
            <span>核心能力</span>
          </div>
          <h2 className="section-headline">不仅是聊天，而是替你交付最终成果</h2>
          <p className="section-subline">
            传统 AI 助手只在网页中输出建议，之后还需要你亲自去复制粘贴、查工具、写命令。
            OpenWorker 深入你的桌面生态，交付可直接分享的实体文件与操作结果。
          </p>
        </div>

        <div className="bento reveal-stagger">
          {/* Card 1: Real Deliverables (8-col) */}
          <div className="card bento-card bento-col-8">
            <div>
              <div className="bento-icon">
                <FileCheck2 size={24} />
              </div>
              <h3 className="bento-title">产出真实交付物</h3>
              <p className="bento-desc">
                生成的 Markdown 报告、结构化 Excel 电子表格、PDF 简报和网页代码都会直接以文件形式落盘至你的本地目录，即刻可用可分享。
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
                background: "var(--bg-elevated)",
                padding: "14px",
                borderRadius: "var(--r-sm)",
                border: "1px solid var(--border-hair)",
              }}
            >
              <div className="tool-chip" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "4px 6px", borderRadius: "var(--r-xs)" }}>
                <FileCode size={18} color="var(--amber)" style={{ flexShrink: 0 }} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-primary)" }}>Markdown / PDF</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>打磨好的排版报告</div>
                </div>
              </div>
              <div className="tool-chip" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "4px 6px", borderRadius: "var(--r-xs)" }}>
                <FileSpreadsheet size={18} color="var(--teal-bright)" style={{ flexShrink: 0 }} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-primary)" }}>Excel / CSV</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>多源数据透视表</div>
                </div>
              </div>
              <div className="tool-chip" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "4px 6px", borderRadius: "var(--r-xs)" }}>
                <Terminal size={18} color="var(--steel)" style={{ flexShrink: 0 }} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-primary)" }}>Shell / 代码补丁</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>可复现脚本指令</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Slack (4-col) */}
          <div className="card bento-card bento-col-4">
            <div>
              <div className="bento-icon" style={{ color: "var(--teal-bright)", background: "var(--teal-bg)", borderColor: "var(--teal-border)" }}>
                <MessageSquareCode size={24} />
              </div>
              <h3 className="bento-title">从 Slack 异步召唤</h3>
              <p className="bento-desc">
                在频道里 @OpenWorker；你的桌面上会开启一个会话，借助你电脑上的工具完成深度调研，并将答案以线程回复返回。
              </p>
            </div>

            <div
              style={{
                background: "var(--bg-code)",
                border: "1px solid var(--border-hair)",
                borderRadius: "var(--r-xs)",
                padding: "10px 12px",
                fontSize: "0.78rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                <div style={{ width: "20px", height: "20px", borderRadius: "3px", background: "var(--amber)", color: "var(--text-inverse)", fontWeight: 700, fontSize: "0.65rem", display: "flex", alignItems: "center", justifyContent: "center" }}>OW</div>
                <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>OpenWorker Bot</span>
                <span style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>· 刚刚</span>
              </div>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.45" }}>
                已为您完成 Jira + GitHub 数据聚合，客户简报已同步生成。
              </p>
            </div>
          </div>

          {/* Card 3: Human-in-the-Loop (4-col) */}
          <div className="card bento-card bento-col-4">
            <div>
              <div className="bento-icon" style={{ color: "var(--coral)", background: "var(--coral-bg)", borderColor: "var(--coral-border)" }}>
                <ShieldAlert size={24} />
              </div>
              <h3 className="bento-title">行动前先询问</h3>
              <p className="bento-desc">
                写入文件、外发消息与 Shell 命令必须经你批准。无人值守运行时会自动将敏感请求暂存至待办收件箱。
              </p>
            </div>

            <div
              style={{
                background: "var(--coral-bg)",
                border: "1px solid var(--coral-border)",
                padding: "10px 12px",
                borderRadius: "var(--r-xs)",
                fontSize: "0.78rem",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Lock size={14} color="var(--coral)" style={{ flexShrink: 0 }} />
              <span style={{ color: "var(--text-secondary)" }}>
                关键操作弹窗把关，杜绝 AI 自主越权。
              </span>
            </div>
          </div>

          {/* Card 4: 25+ Tools & MCP (8-col) */}
          <div className="card bento-card bento-col-8">
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
                <div>
                  <div className="bento-icon" style={{ color: "var(--steel)", background: "var(--steel-bg)", borderColor: "var(--steel-border)" }}>
                    <Boxes size={24} />
                  </div>
                  <h3 className="bento-title">使用你的日常工具 (25+ & MCP)</h3>
                </div>

                <div style={{ display: "flex", gap: "4px" }}>
                  {[
                    { v: "all" as const, l: "全部" },
                    { v: "dev" as const, l: "研发" },
                    { v: "office" as const, l: "办公" },
                    { v: "comm" as const, l: "通讯" },
                  ].map((f) => (
                    <button
                      key={f.v}
                      className={`btn ${activeToolCategory === f.v ? "btn-amber" : "btn-ghost"}`}
                      style={{ padding: "3px 8px", fontSize: "0.7rem" }}
                      onClick={() => setActiveToolCategory(f.v)}
                    >
                      {f.l}
                    </button>
                  ))}
                </div>
              </div>

              <p className="bento-desc">
                预置 GitHub、Slack、Jira、Notion、Linear、HubSpot、Outlook、Gmail、日历与本地终端连接器；任何遵循 MCP 标准的工具均可无缝接入。
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
              {filteredTools.map((t, idx) => (
                <div
                  key={idx}
                  className="tool-chip"
                  style={{
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border-hair)",
                    padding: "8px 10px",
                    borderRadius: "var(--r-xs)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: "0.8rem", color: "var(--text-primary)" }}>{t.name}</span>
                  <span style={{ fontSize: "0.68rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{t.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 5: Scheduled (12-col Full) */}
          <div className="card bento-card bento-col-12" style={{ minHeight: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <div className="bento-icon" style={{ color: "var(--amber-bright)", margin: 0 }}>
                  <Clock8 size={24} />
                </div>
                <div>
                  <h3 className="bento-title" style={{ marginBottom: "4px" }}>按计划周期自动化</h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", margin: 0 }}>
                    每日晨间简报、每周五周报自动汇总、指定 Slack 频道的持续监控 —— 运行结果带着完整操作记录沉淀在本地应用中。
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "8px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", background: "var(--amber-bg)", color: "var(--amber-bright)", border: "1px solid var(--amber-border)", padding: "5px 10px", borderRadius: "var(--r-xs)" }}>
                  Cron 调度
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", background: "var(--teal-bg)", color: "var(--teal-bright)", border: "1px solid var(--teal-border)", padding: "5px 10px", borderRadius: "var(--r-xs)" }}>
                  全链路审计
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
