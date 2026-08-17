import React from "react";
import { ShieldCheck, KeyRound, UserX, Lock, Check, Sparkles } from "lucide-react";
import { PRIVACY_HIGHLIGHTS } from "../data/content";

export const PrivacySection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case "ShieldCheck":
        return <ShieldCheck size={28} color="var(--accent-mint)" />;
      case "KeyRound":
        return <KeyRound size={28} color="var(--accent-cyan)" />;
      case "UserX":
        return <UserX size={28} color="var(--accent-indigo)" />;
      case "Lock":
        return <Lock size={28} color="var(--accent-mint)" />;
      default:
        return <ShieldCheck size={28} color="var(--accent-mint)" />;
    }
  };

  return (
    <section id="privacy" className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">
            <ShieldCheck size={14} />
            <span>本地优先 · 绝对隐私</span>
          </div>
          <h2 className="section-headline">你的数据只留存在你的机器上</h2>
          <p className="section-subline">
            在企业与日常工作中，你的代码、邮件、日历和内部文档是最高商业机密。OpenWorker 秉承本地优先 (Local-First) 架构，绝不建立中心化用户数据池。
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
          {PRIVACY_HIGHLIGHTS.map((item, idx) => (
            <div key={idx} className="atelier-card" style={{ padding: "28px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--accent-mint-bg)",
                  border: "1px solid var(--accent-mint-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {getIcon(item.icon)}
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", marginBottom: "8px", color: "var(--text-primary)" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Security Architecture Comparison */}
        <div
          className="atelier-card"
          style={{
            marginTop: "40px",
            padding: "32px",
            background: "var(--bg-surface-elevated)",
          }}
        >
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", marginBottom: "20px", textAlign: "center", color: "var(--text-primary)" }}>
            传统云端 SaaS AI 助手 vs OpenWorker 本地优先架构
          </h4>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div style={{ padding: "20px", background: "var(--accent-rose-bg)", borderRadius: "var(--radius-md)", border: "1px solid var(--accent-rose-border)" }}>
              <div style={{ fontWeight: 800, color: "var(--accent-rose)", marginBottom: "8px", fontSize: "1rem" }}>
                ❌ 传统云端 SaaS 助手
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                所有文件、工具授权 Token 与对话记录均同步上传至第三方服务器，受制于厂商隐私策略，存在数据留存、泄露与被用于模型再训练的隐患。
              </p>
            </div>

            <div style={{ padding: "20px", background: "var(--accent-mint-bg)", borderRadius: "var(--radius-md)", border: "1px solid var(--accent-mint-border)" }}>
              <div style={{ fontWeight: 800, color: "var(--accent-mint)", marginBottom: "8px", fontSize: "1rem" }}>
                ✅ OpenWorker 本地优先
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                智能体执行循环 100% 在本机运行，数据仅在向你配置的大模型提供商发起单次推理时离开机器；搭配本地 Ollama 更可实现 100% 物理级离线闭环。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
