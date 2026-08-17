import React, { useState } from "react";
import {
  Sparkles,
  Bot,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  Download,
  Check,
  RotateCcw,
  Layers,
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
    showToast(`已下载 ${scenario.finalOutput.filename} 到本地路径`);
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

        {/* Toast */}
        {toastMessage && (
          <div className="toast">
            <Sparkles size={15} color="var(--amber)" />
            <span>{toastMessage}</span>
          </div>
        )}

        <div className="sim-container">
          {/* Left: Scenarios */}
          <div className="sim-list">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                选择业务场景
              </span>
              <button
                onClick={handleReset}
                className="btn btn-ghost"
                style={{ padding: "3px 8px", fontSize: "0.7rem" }}
                title="重置当前审批状态"
              >
                <RotateCcw size={11} />
                <span>重置</span>
              </button>
            </div>

            {SCENARIO_DEMOS.map((sc, idx) => (
              <div
                key={sc.id}
                className={`sim-tab ${selectedScenarioIdx === idx ? "active" : ""}`}
                onClick={() => setSelectedScenarioIdx(idx)}
              >
                <div className="sim-tab-cat">{sc.category}</div>
                <div className="sim-tab-title">{sc.title}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "4px", lineHeight: "1.4" }}>
                  {sc.prompt.slice(0, 42)}...
                </div>
              </div>
            ))}
          </div>

          {/* Right: Board */}
          <div className="card sim-board">
            {/* Prompt */}
            <div className="sim-prompt">
              <Bot size={20} className="sim-prompt-icon" />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                  目标需求指令
                </div>
                <div className="sim-prompt-text">"{scenario.prompt}"</div>
              </div>
            </div>

            {/* Steps */}
            <div className="sim-chain">
              <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)" }}>
                <span>智能体工具调用编排</span>
                <span style={{ color: "var(--amber-bright)" }}>状态: {scenario.status}</span>
              </div>

              {scenario.steps.map((st, sIdx) => {
                const approvalKey = `${selectedScenarioIdx}-${sIdx}`;
                const isApproved = approvedSteps[approvalKey];

                return (
                  <div key={sIdx} className={`sim-step ${isApproved ? "approved" : ""}`} style={{ animation: `reveal-up var(--dur-base) var(--ease-smooth) both`, animationDelay: `${sIdx * 0.06}s` }}>
                    <div className="sim-step-head">
                      <div className="sim-step-title">
                        {st.requiresApproval && !isApproved ? (
                          <AlertTriangle size={16} color="var(--coral)" />
                        ) : (
                          <CheckCircle2 size={16} color="var(--teal-bright)" />
                        )}
                        <span>{st.title}</span>
                      </div>
                      <span className="sim-step-badge">{st.tool}</span>
                    </div>

                    <div className="sim-step-desc">{st.detail}</div>

                    {/* Approval */}
                    {st.requiresApproval && !isApproved && (
                      <div className="sim-approval">
                        <div className="sim-approval-title">
                          <AlertTriangle size={14} />
                          <span>行动前先询问 — 需要你的手动授权</span>
                        </div>
                        <div className="sim-approval-payload">
                          <div style={{ fontWeight: 600, color: "var(--teal-bright)", marginBottom: "4px" }}>
                            {st.approvalDetails?.action}
                          </div>
                          <div>{st.approvalDetails?.target}</div>
                          <div style={{ marginTop: "4px", opacity: 0.85 }}>
                            {st.approvalDetails?.payload}
                          </div>
                        </div>
                        <div className="sim-approval-actions">
                          <button
                            className="btn btn-amber"
                            style={{ padding: "5px 12px", fontSize: "0.78rem" }}
                            onClick={() => handleApprove(sIdx)}
                          >
                            <Check size={13} />
                            <span>批准执行</span>
                          </button>
                          <button
                            className="btn btn-ghost"
                            style={{ padding: "5px 12px", fontSize: "0.78rem" }}
                            onClick={() => handleApprove(sIdx)}
                          >
                            <span>调整参数</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {st.requiresApproval && isApproved && (
                      <div style={{ fontSize: "0.72rem", color: "var(--teal-bright)", display: "flex", alignItems: "center", gap: "5px", fontWeight: 600, fontFamily: "var(--font-mono)" }}>
                        <Check size={13} />
                        <span>已获得授权 · 操作已执行</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

                {/* Deliverable */}
            <div className="sim-deliverable" style={{ animation: "reveal-fade var(--dur-base) ease both" }}>
              <div className="sim-deliverable-head">
                <div className="sim-deliverable-badge">
                  <FileCheck size={18} />
                  <span>最终成果: {scenario.finalOutput.filename}</span>
                  <span style={{ fontSize: "0.68rem", background: "var(--amber-bg)", color: "var(--amber-bright)", padding: "2px 7px", borderRadius: "var(--r-xs)", fontFamily: "var(--font-mono)", border: "1px solid var(--amber-border)" }}>
                    {scenario.finalOutput.filetype}
                  </span>
                </div>

                <button
                  onClick={handleDownload}
                  className="btn btn-amber"
                  style={{ padding: "5px 12px", fontSize: "0.78rem" }}
                >
                  <Download size={13} />
                  <span>保存至本地</span>
                </button>
              </div>

              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "12px" }}>
                {scenario.finalOutput.summary}
              </p>

              <div className="sim-preview">
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
