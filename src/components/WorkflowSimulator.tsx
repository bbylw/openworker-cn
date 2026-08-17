import React, { useState } from "react";
import {
  Sparkles,
  Bot,
  Play,
  CheckCircle2,
  Clock,
  AlertTriangle,
  FileCheck,
  Download,
  Check,
  X,
  RotateCcw,
  Layers,
  ArrowRight,
} from "lucide-react";
import { SCENARIO_DEMOS } from "../data/content";

export const WorkflowSimulator: React.FC = () => {
  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState(0);
  const [approvedSteps, setApprovedSteps] = useState<Record<string, boolean>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const scenario = SCENARIO_DEMOS[selectedScenarioIdx];

  const handleApprove = (stepIdx: number) => {
    const key = `${selectedScenarioIdx}-${stepIdx}`;
    setApprovedSteps((prev) => ({ ...prev, [key]: true }));
    showToast("已批准该步骤操作，智能体继续执行");
  };

  const handleReset = () => {
    setApprovedSteps({});
    showToast("已重置演示流程");
  };

  const handleDownload = () => {
    showToast(`✅ 已下载 ${scenario.finalOutput.filename} 到本地路径`);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <section id="simulator" className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">
            <Layers size={14} />
            <span>实战演练台</span>
          </div>
          <h2 className="section-headline">亲手体验 AI 同事的协同交付全流程</h2>
          <p className="section-subline">
            选择下方实际业务场景，体验 OpenWorker 从理解自然语言需求、跨工具调度到弹出审批并在本地生成交付文件的完整体验。
          </p>
        </div>

        {/* Toast Notification */}
        {toastMessage && (
          <div
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
              background: "var(--bg-surface-elevated)",
              border: "1px solid var(--accent-mint-border)",
              color: "var(--text-primary)",
              padding: "12px 20px",
              borderRadius: "var(--radius-md)",
              boxShadow: "var(--shadow-card-hover)",
              zIndex: 9999,
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Sparkles size={16} color="var(--accent-mint)" />
            <span>{toastMessage}</span>
          </div>
        )}

        <div className="simulator-container">
          {/* Left: Scenarios Switcher */}
          <div className="scenario-list">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                选择业务场景
              </span>
              <button
                onClick={handleReset}
                className="btn btn-glass"
                style={{ padding: "4px 10px", fontSize: "0.75rem" }}
                title="重置当前审批状态"
              >
                <RotateCcw size={12} />
                <span>重置状态</span>
              </button>
            </div>

            {SCENARIO_DEMOS.map((sc, idx) => (
              <div
                key={sc.id}
                className={`scenario-tab ${selectedScenarioIdx === idx ? "active" : ""}`}
                onClick={() => setSelectedScenarioIdx(idx)}
              >
                <div className="scenario-tab-cat">{sc.category}</div>
                <div className="scenario-tab-title">{sc.title}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "6px", lineHeight: "1.45" }}>
                  {sc.prompt.slice(0, 46)}...
                </div>
              </div>
            ))}
          </div>

          {/* Right: Live Interactive Workflow Board */}
          <div className="atelier-card simulator-board">
            {/* Prompt Banner */}
            <div className="prompt-box">
              <Bot size={22} className="prompt-icon" />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                  目标需求指令 (User Intent)
                </div>
                <div className="prompt-text">“{scenario.prompt}”</div>
              </div>
            </div>

            {/* Execution Pipeline */}
            <div className="execution-steps-chain">
              <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)" }}>
                <span>智能体工具调用编排</span>
                <span style={{ color: "var(--accent-mint)" }}>状态: {scenario.status}</span>
              </div>

              {scenario.steps.map((st, sIdx) => {
                const approvalKey = `${selectedScenarioIdx}-${sIdx}`;
                const isApproved = approvedSteps[approvalKey];

                return (
                  <div
                    key={sIdx}
                    className={`step-card ${isApproved ? "approved" : ""}`}
                  >
                    <div className="step-header">
                      <div className="step-title-area">
                        {st.requiresApproval && !isApproved ? (
                          <AlertTriangle size={18} color="var(--accent-amber)" />
                        ) : (
                          <CheckCircle2 size={18} color="var(--accent-mint)" />
                        )}
                        <span>{st.title}</span>
                      </div>
                      <span className="step-tool-badge">Tool: {st.tool}</span>
                    </div>

                    <div className="step-desc">{st.detail}</div>

                    {/* Interactive Approval Box */}
                    {st.requiresApproval && !isApproved && (
                      <div className="approval-box">
                        <div className="approval-alert-title">
                          <AlertTriangle size={16} />
                          <span>行动前先询问 (Human-in-the-Loop) —— 需要你的手动授权</span>
                        </div>
                        <div className="approval-payload">
                          <div style={{ fontWeight: 700, color: "var(--accent-cyan)", marginBottom: "4px" }}>
                            {st.approvalDetails?.action}
                          </div>
                          <div>{st.approvalDetails?.target}</div>
                          <div style={{ marginTop: "4px", opacity: 0.9 }}>
                            {st.approvalDetails?.payload}
                          </div>
                        </div>
                        <div className="approval-actions">
                          <button
                            className="btn btn-mint"
                            style={{ padding: "6px 14px", fontSize: "0.82rem" }}
                            onClick={() => handleApprove(sIdx)}
                          >
                            <Check size={15} />
                            <span>批准执行 (Approve)</span>
                          </button>
                          <button
                            className="btn btn-glass"
                            style={{ padding: "6px 14px", fontSize: "0.82rem" }}
                            onClick={() => handleApprove(sIdx)}
                          >
                            <span>调整参数并执行</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {st.requiresApproval && isApproved && (
                      <div style={{ fontSize: "0.75rem", color: "var(--accent-mint)", display: "flex", alignItems: "center", gap: "6px", fontWeight: 600, fontFamily: "var(--font-mono)" }}>
                        <Check size={14} />
                        <span>已获得授权批准 · 操作已执行</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Deliverable Result */}
            <div className="deliverable-result">
              <div className="deliverable-header">
                <div className="deliverable-file-badge">
                  <FileCheck size={20} />
                  <span>最终成果落地: {scenario.finalOutput.filename}</span>
                  <span style={{ fontSize: "0.72rem", background: "var(--accent-mint-bg)", color: "var(--accent-mint)", padding: "2px 8px", borderRadius: "4px", fontFamily: "var(--font-mono)", border: "1px solid var(--accent-mint-border)" }}>
                    {scenario.finalOutput.filetype}
                  </span>
                </div>

                <button
                  onClick={handleDownload}
                  className="btn btn-mint"
                  style={{ padding: "6px 14px", fontSize: "0.82rem" }}
                >
                  <Download size={14} />
                  <span>保存至本地</span>
                </button>
              </div>

              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "14px" }}>
                {scenario.finalOutput.summary}
              </p>

              {/* Code Preview */}
              <div className="preview-code-block">
                {scenario.finalOutput.previewLines.map((line, lIdx) => (
                  <div key={lIdx}>{line}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
