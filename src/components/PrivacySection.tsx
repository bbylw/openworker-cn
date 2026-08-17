import React from "react";
import { ShieldCheck, KeyRound, UserX, Lock } from "lucide-react";
import { PRIVACY_HIGHLIGHTS } from "../data/content";

export const PrivacySection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case "ShieldCheck": return <ShieldCheck size={26} color="var(--amber-bright)" />;
      case "KeyRound": return <KeyRound size={26} color="var(--teal-bright)" />;
      case "UserX": return <UserX size={26} color="var(--steel)" />;
      case "Lock": return <Lock size={26} color="var(--amber)" />;
      default: return <ShieldCheck size={26} color="var(--amber)" />;
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

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
          {PRIVACY_HIGHLIGHTS.map((item, idx) => (
            <div key={idx} className="card card-glow" style={{ padding: "24px", display: "flex", gap: "18px", alignItems: "flex-start", animation: `reveal-up var(--dur-slow) var(--ease-smooth) both`, animationDelay: `${idx * 0.08}s` }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "var(--r-sm)",
                  background: "var(--amber-bg)",
                  border: "1px solid var(--amber-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "transform var(--dur-base) var(--ease-smooth)",
                }}
              >
                {getIcon(item.icon)}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", marginBottom: "6px", color: "var(--text-primary)" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div
          className="card"
          style={{
            marginTop: "36px",
            padding: "28px",
            background: "var(--bg-elevated)",
          }}
        >
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", marginBottom: "18px", textAlign: "center", color: "var(--text-primary)" }}>
            传统云端 SaaS AI 助手 vs OpenWorker 本地优先架构
          </h4>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div style={{ padding: "18px", background: "var(--coral-bg)", borderRadius: "var(--r-sm)", border: "1px solid var(--coral-border)" }}>
              <div style={{ fontWeight: 700, color: "var(--coral)", marginBottom: "6px", fontSize: "0.92rem" }}>
                ✕ 传统云端 SaaS 助手
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.55" }}>
                所有文件、工具授权 Token 与对话记录均同步上传至第三方服务器，受制于厂商隐私策略，存在数据留存、泄露与被用于模型再训练的隐患。
              </p>
            </div>

            <div style={{ padding: "18px", background: "var(--amber-bg)", borderRadius: "var(--r-sm)", border: "1px solid var(--amber-border)" }}>
              <div style={{ fontWeight: 700, color: "var(--amber-bright)", marginBottom: "6px", fontSize: "0.92rem" }}>
                ✓ OpenWorker 本地优先
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.55" }}>
                智能体执行循环 100% 在本机运行，数据仅在向你配置的大模型提供商发起单次推理时离开机器；搭配本地 Ollama 更可实现 100% 物理级离线闭环。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
