import React, { useState } from "react";
import {
  Terminal,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Check,
} from "lucide-react";

export const WorkspaceShowcase: React.FC = () => {
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
        { tool: "Smart Scheduler", action: "向组织人发送会议改期提议 (周二 14:00 → 周三 10:00)", done: false },
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
    <section className="workspace-section">
      <div className="container">
        <div className="workspace reveal" style={{ animationDelay: "0.2s" }}>
          {/* Window Chrome */}
          <div className="ws-topbar">
            <div className="ws-dots">
              <span className="ws-dot ws-dot-r" />
              <span className="ws-dot ws-dot-y" />
              <span className="ws-dot ws-dot-g" />
            </div>
            <div className="ws-title">
              <Terminal size={13} color="var(--amber)" />
              <span>OpenWorker Desktop</span>
              <span style={{ color: 'var(--text-dim)' }}>— 本地智能体核心 (:8765)</span>
            </div>
            <div className="ws-status">
              <span className="ws-status-dot" />
              <span>aisuite · ready</span>
            </div>
          </div>

          {/* Body */}
          <div className="ws-body">
            {/* Sidebar */}
            <div className="ws-sidebar">
              <div>
                <div className="ws-sidebar-label">协同任务队列</div>
                {demoTasks.map((task, idx) => (
                  <div
                    key={task.id}
                    className={`ws-task ${activeTaskTab === idx ? "active" : ""}`}
                    onClick={() => setActiveTaskTab(idx)}
                  >
                    <div className="ws-task-name">{task.name}</div>
                    <div className="ws-task-meta">
                      {task.time} · {approvedState[idx] ? "已授权" : task.badge}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div className="ws-sidebar-label">本地运行环境</div>
                <div className="ws-env">
                  <div className="ws-env-row">
                    <span>Active Model</span>
                    <span style={{ color: "var(--teal-bright)" }}>DeepSeek-R1</span>
                  </div>
                  <div className="ws-env-row">
                    <span>Tool Protocol</span>
                    <span style={{ color: "var(--amber-bright)" }}>MCP 1.2</span>
                  </div>
                  <div className="ws-env-row">
                    <span>Storage Mode</span>
                    <span style={{ color: "var(--text-primary)" }}>Local-First</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Canvas */}
            <div className="ws-canvas">
              {/* Prompt */}
              <div className="ws-prompt">
                <Sparkles size={18} color="var(--amber)" style={{ marginTop: 2, flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="ws-prompt-label">自然语言需求</div>
                  <div className="ws-prompt-text">"{currentTask.prompt}"</div>
                </div>
              </div>

              {/* Steps */}
              <div className="ws-steps">
                <div className="ws-steps-header">
                  <span>智能体调度链条</span>
                  <span style={{ color: "var(--teal-bright)" }}>3/3 工具调用已就绪</span>
                </div>
                {currentTask.steps.map((st, i) => (
                  <div key={i} className="ws-step">
                    <div className="ws-step-left">
                      <CheckCircle2 size={15} color="var(--teal-bright)" style={{ flexShrink: 0 }} />
                      <span className="ws-chip">{st.tool}</span>
                      <span style={{ color: "var(--text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{st.action}</span>
                    </div>
                    <span style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", flexShrink: 0 }}>24ms</span>
                  </div>
                ))}
              </div>

              {/* Approval Gate */}
              {currentTask.requiresApproval && !isApproved && (
                <div className="ws-auth">
                  <div className="ws-auth-header">
                    <AlertTriangle size={16} />
                    <span>行动前先询问 — 关键写操作需授权</span>
                  </div>
                  <div className="ws-auth-code">
                    <strong>{currentTask.approvalDetails?.action}</strong>
                    {"\n"}{currentTask.approvalDetails?.target}
                    {"\n"}{currentTask.approvalDetails?.payload}
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button
                      onClick={handleApprove}
                      className="btn btn-amber"
                      style={{ padding: "6px 14px", fontSize: "0.78rem" }}
                    >
                      <Check size={13} />
                      <span>批准执行</span>
                    </button>
                    <button
                      onClick={handleApprove}
                      className="btn btn-ghost"
                      style={{ padding: "6px 14px", fontSize: "0.78rem" }}
                    >
                      <span>调整参数</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Artifact Viewer */}
              <div className="ws-artifact">
                <div className="ws-artifact-bar">
                  <div className="ws-artifact-name">
                    <FileText size={15} />
                    <span>{currentTask.artifact.filename}</span>
                  </div>
                  <div style={{ display: "flex", gap: "4px" }}>
                    <button
                      className={`btn ${activeArtifactTab === "doc" ? "btn-amber" : "btn-ghost"}`}
                      style={{ padding: "3px 9px", fontSize: "0.7rem" }}
                      onClick={() => setActiveArtifactTab("doc")}
                    >
                      文档
                    </button>
                    <button
                      className={`btn ${activeArtifactTab === "diff" ? "btn-amber" : "btn-ghost"}`}
                      style={{ padding: "3px 9px", fontSize: "0.7rem" }}
                      onClick={() => setActiveArtifactTab("diff")}
                    >
                      Diff
                    </button>
                    <button
                      className={`btn ${activeArtifactTab === "shell" ? "btn-amber" : "btn-ghost"}`}
                      style={{ padding: "3px 9px", fontSize: "0.7rem" }}
                      onClick={() => setActiveArtifactTab("shell")}
                    >
                      终端
                    </button>
                  </div>
                </div>

                <div className="ws-artifact-view">
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
                            ? "var(--teal-bright)"
                            : line.startsWith("-")
                            ? "var(--coral)"
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
