import React, { useState } from "react";
import {
  Download,
  Terminal,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Clock,
  Play,
  Check,
  Layers,
  ArrowRight,
  Database,
  Cpu,
} from "lucide-react";
import { AppleIcon, WindowsIcon } from "./BrandIcons";
import { HERO_DATA } from "../data/content";

export const Hero: React.FC = () => {
  const [activeTaskTab, setActiveTaskTab] = useState(0);
  const [approvedState, setApprovedState] = useState<Record<number, boolean>>({});
  const [activeArtifactTab, setActiveArtifactTab] = useState<"doc" | "diff" | "shell">("doc");

  const demoTasks = [
    {
      id: "briefing",
      name: "客户简报与发版报告",
      time: "刚刚",
      badge: "执行中",
      prompt: "整理这次 v2.4 发布的进展，提取 Jira 燃尽数据与 GitHub 已合并 PR，生成客户级简报并起草通知邮件。",
      steps: [
        { tool: "Jira API", action: "拉取 Sprint 2.4 已完成的 18 个 Issue 统计", done: true },
        { tool: "GitHub MCP", action: "关联 Release 分支 12 个 Merged PR 核心亮点", done: true },
        { tool: "Local File", action: "在本地生成 ./reports/v2.4_Client_Briefing.pdf", done: true },
      ],
      requiresApproval: true,
      approvalDetails: {
        action: "发送邮件 (Send Release Briefing Email)",
        target: "收件人: release-notice@company.com",
        payload: "主题: 【发布通知】OpenWorker v2.4 核心进展与更新要点\n附件: v2.4_Client_Briefing.pdf (3.4 MB)",
      },
      artifact: {
        filename: "v2.4_Client_Briefing.pdf",
        docPreview: [
          "# OpenWorker v2.4 客户交付简报",
          "📊 核心指标：Sprint 目标达成率 90%，共解决 18 个用户反馈事项",
          "✨ 主要新特性：新增 DeepSeek-R1 本地推理加速支持、MCP 协议 1.2 规范",
          "🛡 安全补丁：修复了侧车端口认证的边缘 Case",
          "📁 附件报告已落地至本地: ~/Reports/v2.4_Client_Briefing.pdf",
        ],
        diffPreview: [
          "+ feat(engine): add deepseek-r1 native reasoning token stream",
          "+ feat(mcp): support MCP 1.2 tools declaration schema",
          "- fix(auth): deprecated legacy plain-text token fallback",
          "+ fix(auth): use OS-native keyring for credential storage",
        ],
        shellPreview: [
          "$ openworker-agent --task 'release-briefing-v2.4'",
          "  [JIRA] Fetching issues status from sprint_id=492... OK (18 closed)",
          "  [GITHUB] Querying merged PRs since tag v2.3.9... OK (12 merged)",
          "  [RENDERER] Compiling PDF report via pandoc engine... OK",
          "  [HUMAN_GATE] Action 'send_email' requires user authorization.",
        ],
      },
    },
    {
      id: "calendar",
      name: "周历重叠理顺与周报",
      time: "3分钟前",
      badge: "待确认",
      prompt: "理顺我这周 Google 日历的会议，起草周报，并把下周重叠的会议标记出来与组织人沟通。",
      steps: [
        { tool: "Google Calendar", action: "扫描本周 24 场会议日程并统计耗时", done: true },
        { tool: "Gmail Connector", action: "检索 7 封对外关键答复提炼进展", done: true },
        { tool: "Smart Scheduler", action: "向组织人发送会议改期提议 (周二 14:00 -> 周三 10:00)", done: false },
      ],
      requiresApproval: true,
      approvalDetails: {
        action: "修改日程并通知参会人 (Update Calendar Event)",
        target: "会议: 《Q3 架构评审》 参会人: 8 人",
        payload: "提议将时间调整至 2026-08-20 10:00 - 11:00 (避开客户紧急签约会)",
      },
      artifact: {
        filename: "2026-W34_Weekly_Summary.md",
        docPreview: [
          "## 2026 年第 34 周工作成果总结",
          "- [研发进展] 完成本地智能体服务端 (Python) 内存优化与 Token 鉴权升级",
          "- [会议复盘] 本周合计参会 16.5 小时，重点推动 3 项企业客户接入 PoC",
          "- [日程预警] 下周二 14:00《架构评审》与《客户签约会》冲突，已起草改期建议",
        ],
        diffPreview: [
          "~ Calendar Event: Architecture Review",
          "- Start: 2026-08-19 14:00:00",
          "+ Start: 2026-08-20 10:00:00",
          "+ Status: Pending Human Confirmation",
        ],
        shellPreview: [
          "$ openworker-agent --task 'calendar-sync'",
          "  [GCAL] Fetching events for current_week... 24 events found",
          "  [ANALYZER] Conflict detected: Event A conflicts with Event B",
          "  [HUMAN_GATE] Action 'reschedule_event' requires user authorization.",
        ],
      },
    },
    {
      id: "slack",
      name: "Slack 突发告警自愈排查",
      time: "8分钟前",
      badge: "已排查",
      prompt: "监控 #dev-alerts 频道，捕获 P0 支付延迟告警并运行本地脚本排查原因。",
      steps: [
        { tool: "Slack Stream", action: "捕获告警：[P0] 支付网关响应延迟超过 5000ms", done: true },
        { tool: "Local Bash", action: "执行 kubectl logs 分析连接池状态", done: true },
        { tool: "Slack Thread", action: "在告警线程输出排查结论与临时扩容方案", done: true },
      ],
      requiresApproval: false,
      artifact: {
        filename: "Incident_P0_Payment_Report.md",
        docPreview: [
          "### 突发事故响应纪要 (Incident Report)",
          "⏰ 告警发生时间: 2026-08-18 02:15:30",
          "🎯 故障等级: P0 (支付延迟异常)",
          "🔍 诊断结论: 线程连接池耗尽，排查用时 48 秒",
          "⚡ 建议处理方案已发布至 Slack 应急线程，待值班工程师确认执行",
        ],
        diffPreview: [
          "+ [ALERT_RESOLVED] Diagnosis: Redis Pool Exhaustion",
          "+ Mitigation: kubectl scale deployment payment-api --replicas=8",
          "+ Related Issue: #492 created and assigned to on-call team",
        ],
        shellPreview: [
          "$ kubectl logs -n prod deployment/payment-api --tail=500",
          "  [ERROR] ConnectionPoolTimeoutException: Timeout waiting for connection",
          "  [AI_DIAGNOSIS] Root cause: Leak in Redis client handler at line 142",
          "  [SLACK] Posting diagnosis to thread 1723948123.001... SUCCESS",
        ],
      },
    },
  ];

  const currentTask = demoTasks[activeTaskTab];
  const isApproved = approvedState[activeTaskTab];

  const handleApprove = () => {
    setApprovedState((prev) => ({ ...prev, [activeTaskTab]: true }));
  };

  return (
    <section className="hero">
      <div className="container">
        {/* Beta Capsule Pill */}
        <div className="hero-badge-capsule">
          <span className="hero-badge-pulse"></span>
          <span>{HERO_DATA.betaNotice}</span>
        </div>

        {/* Hero Title */}
        <h1 className="hero-title-main">
          能帮你完成日常任务的 <br />
          <span className="hero-title-gradient">{HERO_DATA.titleHighlight}</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="hero-lead-text">
          OpenWorker 驻留在你的本地桌面，交付的是<strong>已完成的真实成果</strong>而非仅仅聊天。
          本地优先，自带任意大模型或 <strong>Ollama 离线运行</strong>，无缝连接 25+ 款日常生产力工具。
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta-deck">
          <a
            href={HERO_DATA.downloads.mac.url}
            className="btn btn-mint"
            style={{ padding: "14px 28px", fontSize: "1rem" }}
          >
            <AppleIcon size={20} />
            <span>下载 macOS 版 (Apple 芯片)</span>
          </a>

          <a
            href={HERO_DATA.downloads.windows.url}
            className="btn btn-glass"
            style={{ padding: "14px 28px", fontSize: "1rem" }}
          >
            <WindowsIcon size={20} />
            <span>下载 Windows 版 (x64)</span>
          </a>

          <a
            href="#simulator"
            className="btn btn-outline-cyan"
            style={{ padding: "14px 24px", fontSize: "1rem" }}
          >
            <Sparkles size={18} />
            <span>实战演练</span>
          </a>
        </div>

        {/* Metrics Strip */}
        <div className="metrics-strip">
          {HERO_DATA.stats.map((st, i) => (
            <div key={i} className="metric-box">
              <div className="metric-num">{st.value}</div>
              <div className="metric-label">{st.label}</div>
            </div>
          ))}
        </div>

        {/* Signature Interactive Workspace Deck */}
        <div className="workspace-frame">
          {/* Top Window Chrome */}
          <div className="workspace-window-bar">
            <div className="window-dots">
              <span className="window-dot dot-close"></span>
              <span className="window-dot dot-min"></span>
              <span className="window-dot dot-max"></span>
            </div>

            <div className="workspace-title-indicator">
              <Terminal size={14} color="var(--accent-mint)" />
              <span>OpenWorker Desktop —— 本地智能体核心 (:8765)</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent-mint)" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent-mint)", display: "inline-block" }}></span>
              <span>aisuite engine · ready</span>
            </div>
          </div>

          {/* Workspace Grid */}
          <div className="workspace-grid">
            {/* Sidebar with active tasks */}
            <div className="workspace-sidebar">
              <div>
                <div className="sidebar-label">协同任务队列</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {demoTasks.map((task, idx) => (
                    <div
                      key={task.id}
                      className={`task-tab-item ${activeTaskTab === idx ? "active" : ""}`}
                      onClick={() => setActiveTaskTab(idx)}
                    >
                      <div className="task-tab-name">{task.name}</div>
                      <div className="task-tab-meta">
                        {task.time} · {approvedState[idx] ? "已授权执行" : task.badge}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="sidebar-label">本地运行环境</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Active Model</span>
                    <span style={{ color: "var(--accent-cyan)" }}>DeepSeek-R1</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Tool Protocol</span>
                    <span style={{ color: "var(--accent-mint)" }}>MCP 1.2</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Storage Mode</span>
                    <span style={{ color: "var(--text-primary)" }}>Local-First</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Interactive Canvas */}
            <div className="workspace-canvas">
              {/* Prompt Box */}
              <div className="canvas-prompt-deck">
                <Sparkles size={20} className="canvas-prompt-icon" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "4px" }}>
                    自然语言需求
                  </div>
                  <div className="canvas-prompt-text">“{currentTask.prompt}”</div>
                </div>
              </div>

              {/* Execution Steps */}
              <div className="steps-pipeline">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700 }}>
                    智能体调度链条
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }}>
                    3/3 工具调用已就绪
                  </span>
                </div>

                {currentTask.steps.map((st, i) => (
                  <div key={i} className="step-row">
                    <div className="step-row-left">
                      <CheckCircle2 size={16} color="var(--accent-mint)" />
                      <span className="tool-chip">[{st.tool}]</span>
                      <span style={{ color: "var(--text-primary)" }}>{st.action}</span>
                    </div>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                      24ms
                    </span>
                  </div>
                ))}
              </div>

              {/* Human Authorization Gate */}
              {currentTask.requiresApproval && !isApproved && (
                <div className="auth-deck-banner">
                  <div className="auth-deck-header">
                    <AlertTriangle size={18} />
                    <span>行动前先询问 (Human-in-the-Loop) —— 关键外部写操作需授权</span>
                  </div>
                  <div className="auth-deck-code">
                    <strong>{currentTask.approvalDetails?.action}</strong>
                    {"\n"}{currentTask.approvalDetails?.target}
                    {"\n\n"}{currentTask.approvalDetails?.payload}
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <button
                      onClick={handleApprove}
                      className="btn btn-mint"
                      style={{ padding: "8px 18px", fontSize: "0.85rem" }}
                    >
                      <Check size={16} />
                      <span>批准并执行 (Approve)</span>
                    </button>
                    <button
                      onClick={handleApprove}
                      className="btn btn-glass"
                      style={{ padding: "8px 18px", fontSize: "0.85rem" }}
                    >
                      <span>调整参数</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Artifact Viewer Deck */}
              <div className="artifact-deck">
                <div className="artifact-bar">
                  <div className="artifact-name">
                    <FileText size={18} />
                    <span>落地成果物: {currentTask.artifact.filename}</span>
                  </div>

                  <div style={{ display: "flex", gap: "6px" }}>
                    <button
                      className={`btn ${activeArtifactTab === "doc" ? "btn-mint" : "btn-glass"}`}
                      style={{ padding: "4px 10px", fontSize: "0.75rem" }}
                      onClick={() => setActiveArtifactTab("doc")}
                    >
                      文档视图
                    </button>
                    <button
                      className={`btn ${activeArtifactTab === "diff" ? "btn-mint" : "btn-glass"}`}
                      style={{ padding: "4px 10px", fontSize: "0.75rem" }}
                      onClick={() => setActiveArtifactTab("diff")}
                    >
                      Diff 差异
                    </button>
                    <button
                      className={`btn ${activeArtifactTab === "shell" ? "btn-mint" : "btn-glass"}`}
                      style={{ padding: "4px 10px", fontSize: "0.75rem" }}
                      onClick={() => setActiveArtifactTab("shell")}
                    >
                      终端日志
                    </button>
                  </div>
                </div>

                <div className="artifact-viewer-pre">
                  {activeArtifactTab === "doc" &&
                    currentTask.artifact.docPreview.map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  {activeArtifactTab === "diff" &&
                    currentTask.artifact.diffPreview.map((line, idx) => (
                      <div
                        key={idx}
                        style={{
                          color: line.startsWith("+")
                            ? "var(--accent-mint)"
                            : line.startsWith("-")
                            ? "var(--accent-rose)"
                            : "var(--text-secondary)",
                        }}
                      >
                        {line}
                      </div>
                    ))}
                  {activeArtifactTab === "shell" &&
                    currentTask.artifact.shellPreview.map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
