export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  badge: string;
  summary: string;
  description: string;
  icon: string;
  details: string[];
  tags: string[];
}

export interface ModelProvider {
  id: string;
  name: string;
  category: "international" | "domestic" | "local" | "opensource";
  iconName: string;
  popularModels: string[];
  toolCallingVerified: boolean;
  notes: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  detail: string;
  type: "input" | "decompose" | "confirm" | "deliver";
}

export interface ScenarioDemo {
  id: string;
  title: string;
  prompt: string;
  category: string;
  status: string;
  steps: {
    title: string;
    tool: string;
    detail: string;
    requiresApproval?: boolean;
    approvalDetails?: {
      action: string;
      target: string;
      payload: string;
    };
  }[];
  finalOutput: {
    filename: string;
    filetype: string;
    summary: string;
    previewLines: string[];
  };
}

export const NAV_ITEMS: NavItem[] = [
  { label: "核心特性", href: "#features" },
  { label: "工作原理", href: "#how-it-works" },
  { label: "实战演示", href: "#simulator" },
  { label: "模型生态", href: "#models" },
  { label: "本地隐私", href: "#privacy" },
  { label: "源码开发", href: "#developers" },
  { label: "下载客户端", href: "#download" },
];

export const HERO_DATA = {
  title: "能帮你完成日常任务的",
  titleHighlight: "开源 AI 同事",
  tagline:
    "OpenWorker 驻留在你的桌面，交付的是**已完成的成果**而非仅仅对话。本地优先、自带模型、无缝连接 25+ 款日常工具。",
  betaNotice: "公开测试版（Beta）现已发布：功能完整可用、支持自我更新与本地离线运行",
  stats: [
    { label: "支持工具集成", value: "25+" },
    { label: "适配模型提供商", value: "14+" },
    { label: "数据出境率", value: "0% 本地优先" },
    { label: "开源许可", value: "MIT 协议" },
  ],
  downloads: {
    mac: {
      url: "https://download.openworker.com/mac",
      version: "Apple 芯片 (macOS 12+)",
      note: "已签名并公证 · 自动更新",
      arch: "macOS (Apple Silicon)",
    },
    windows: {
      url: "https://download.openworker.com/windows",
      version: "Windows 10 / 11 (x64)",
      note: "代码签名进行中 · SmartScreen 提示时点击“仍要运行”",
      arch: "Windows 10/11 x64",
    },
  },
  githubUrl: "https://github.com/andrewyng/openworker",
  issuesUrl: "https://github.com/andrewyng/openworker/issues",
};

export const CORE_FEATURES: FeatureItem[] = [
  {
    id: "deliverables",
    title: "产出真实交付物",
    badge: "真实结果",
    summary: "拒绝空泛聊天，直接落地文档、表格、报告与代码文件。",
    description:
      "不仅仅是在聊天窗口中回复文字，OpenWorker 会在你的本地磁盘中直接生成经过格式打磨的 Markdown、PDF、Excel 或网页文件，你可以随时打开、编辑和直接向团队分享。",
    icon: "FileCheck2",
    details: [
      "自动创建与格式化 Word/Markdown/PDF 简报",
      "自动分析并导出结构化 Excel/CSV 数据表格",
      "生成可直接在浏览器中预览的高保真 HTML 交互页面",
    ],
    tags: ["文件落地", "数据清洗", "报表输出"],
  },
  {
    id: "slack-collab",
    title: "从 Slack 中无缝工作",
    badge: "团队协作",
    summary: "在 Slack 频道随时 @ 你的 AI 同事，在桌面静默执行并返回结果。",
    description:
      "团队成员在 Slack 频道中 @OpenWorker 提出需求，它将在你的本地桌面静默启动任务会话，借助你电脑上的工具完成深度调研与数据整合，并以清晰的线程回复直接在 Slack 中交付。",
    icon: "MessageSquareCode",
    details: [
      "频道 @ 触发桌面后台异步执行",
      "使用你本机的工具集与凭据安全查询",
      "以结构化线程回复方式输出高密度数据简报",
    ],
    tags: ["Slack Bot", "异步执行", "免打扰协同"],
  },
  {
    id: "tools-mcp",
    title: "连接 25+ 常用工具 & MCP",
    badge: "广泛集成",
    summary: "打通 GitHub, Jira, Notion, Linear, Gmail, 日历与本地终端。",
    description:
      "预置了主流研发与办公工具连接器，更全面支持 Model Context Protocol (MCP)。无论是读取本地代码库、拉取 Jira Issue、管理 Google 日历，还是运行 Shell 脚本，全部轻松搞定。",
    icon: "Boxes",
    details: [
      "深度集成：GitHub, Slack, Jira, Notion, Linear, HubSpot, Outlook, Gmail 等",
      "支持 Model Context Protocol (MCP) 开放标准扩展",
      "细粒度工具权限控制，随时开启或禁用特定连接器",
    ],
    tags: ["25+ 集成", "MCP 开放协议", "本地终端权限"],
  },
  {
    id: "automation",
    title: "按计划周期自动化",
    badge: "无人值守",
    summary: "配置晨间简报、周报汇总、频道持续监控等周期性任务。",
    description:
      "针对日常高频且重复的工作流，OpenWorker 支持定时调度自动化。每项运行都会附带详细的执行轨迹与审计日志，完整沉淀在本地应用中，让你随时回溯追溯。",
    icon: "Clock8",
    details: [
      "每日晨间自动整合 GitHub PR / Jira 进度简报",
      "周五下班前一键汇总日历与邮件起草周报草稿",
      "实时监控指定频道并提炼紧急告警事项",
    ],
    tags: ["定时任务", "周期运行", "全链路审计"],
  },
  {
    id: "human-in-loop",
    title: "行动前先询问 · 人机共驾",
    badge: "绝对可控",
    summary: "写文件、发消息与终端命令必须经你确认，绝不越权妄为。",
    description:
      "对于任何可能产生副作用的操作（如发送外发邮件、修改日历日程、执行 Shell 命令、覆盖文件），OpenWorker 会主动弹出明确的审批界面，由你一键批准或修改参数。无人值守运行时则会将请求暂存至收件箱。",
    icon: "ShieldAlert",
    details: [
      "破坏性/外部写操作强制审批（Approve / Reject / Edit）",
      "Shell 终端命令展示完整参数与工作目录",
      "无人值守模式任务暂存待办收件箱，杜绝意外行为",
    ],
    tags: ["权限审批", "安全兜底", "防误触设计"],
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    title: "明确目标",
    subtitle: "自然语言输入真实需求",
    description: "例如：“准备一份客户简报”“理顺我的日历并起草周报”“查一下这次发布在 Jira 和 GitHub 上的进展”。",
    detail: "无需复杂的 Prompt 工程，直接像对真人同事说话一样表达你想要的结果。",
    type: "input",
  },
  {
    step: 2,
    title: "任务拆解",
    subtitle: "智能编排与多工具协同",
    description: "OpenWorker 将宏观任务拆解为执行链条，并在你的桌面、文件和 25+ 已连接应用之间穿梭执行。",
    detail: "通过 aisuite 智能体调度内核，精准调用 MCP 与原生连接器读取上下文。",
    type: "decompose",
  },
  {
    step: 3,
    title: "授权确认",
    subtitle: "关键操作人机确认",
    description: "在执行发送消息、更改日历、运行命令或覆写文件前，主动向你出具确认卡片，由你批准或调整。",
    detail: "你可以审查命令入参、目标地址和预览内容，掌控 100% 决策权。",
    type: "confirm",
  },
  {
    step: 4,
    title: "成果交付",
    subtitle: "交付真正完成的文件与结果",
    description: "你拿到的是格式打磨好的最终交付物，而不是一份还需要你自己动手的待办清单。",
    detail: "生成的文件直接落在你的本地文件系统中，立即可用可分享。",
    type: "deliver",
  },
];

export const SCENARIO_DEMOS: ScenarioDemo[] = [
  {
    id: "release-briefing",
    title: "发布进展与客户简报",
    prompt: "整理这次 v2.4 发布的进展，整合 Jira 的燃尽情况与 GitHub 已合并的 PR，生成一份客户简报并起草邮件。",
    category: "研发管理与汇报",
    status: "执行中 (2/4 步骤需确认)",
    steps: [
      {
        title: "查询 Jira v2.4 Sprint 看板",
        tool: "Jira Connector",
        detail: "已拉取 18 个完成任务、2 个正在验证任务，计算交付率 90%",
      },
      {
        title: "获取 GitHub 仓库 Release 分支提交记录",
        tool: "GitHub MCP",
        detail: "已关联 12 个 Merged PR，提取 Changelog 核心功能亮点与修复列表",
      },
      {
        title: "生成格式化 Markdown 客户简报文档",
        tool: "Local File Writer",
        detail: "已生成文件 ./reports/v2.4_Client_Briefing.md",
      },
      {
        title: "起草邮件并等待发送批准",
        tool: "Gmail Connector",
        detail: "准备发送给 release-notice@company.com",
        requiresApproval: true,
        approvalDetails: {
          action: "发送邮件 (Send Email)",
          target: "收件人: release-notice@company.com",
          payload: "主题: 【发布通知】OpenWorker v2.4 核心进展与更新简报\n附件: v2.4_Client_Briefing.pdf",
        },
      },
    ],
    finalOutput: {
      filename: "v2.4_Client_Briefing.pdf",
      filetype: "PDF Document (已排版)",
      summary: "已完成 Jira + GitHub 多源数据整合，生成包含燃尽图与更新要点的客户级简报文档，邮件草稿已入箱等待最终确认。",
      previewLines: [
        "# OpenWorker v2.4 客户交付简报",
        "📊 核心指标：Sprint 目标达成率 90%，共解决 18 个用户反馈事项",
        "✨ 主要新特性：新增 DeepSeek-R1 本地推理加速支持、MCP 协议 1.2 规范",
        "🛡 安全补丁：修复了侧车端口认证的边缘 Case",
        "📁 附件报告已生成至本地: /Users/admin/reports/v2.4_Client_Briefing.pdf",
      ],
    },
  },
  {
    id: "calendar-weekly",
    title: "周历整理与工作周报",
    prompt: "理顺我这周 Google 日历的会议记录与发出的重点邮件，起草本周工作周报，并将下周重叠会议标记出来。",
    category: "行政效能与日常",
    status: "准备就绪",
    steps: [
      {
        title: "扫描 Google Calendar 本周 24 场会议日程",
        tool: "Google Calendar",
        detail: "分类整理研发评审、客户沟通与内部 1on1，提取关键议题与时长统计",
      },
      {
        title: "检索已发送邮件的关键汇报与交付确认",
        tool: "Gmail Connector",
        detail: "提取 7 封对外关键答复，关联至对应项目里程碑",
      },
      {
        title: "检测下周日程冲突",
        tool: "Smart Schedule",
        detail: "发现下周二下午 14:00-15:00 存在 2 场会议时间重叠",
      },
      {
        title: "写入本地周报并保存日程建议",
        tool: "Notion / Local Markdown",
        detail: "已生成 ~/Documents/Weekly_Reports/2026-W34_Summary.md",
      },
    ],
    finalOutput: {
      filename: "2026-W34_Weekly_Summary.md",
      filetype: "Markdown / Notion Page",
      summary: "自动整合 24 场会议与重要外发邮件，完成周报初稿，并在冲突日程处给出了最优调整建议方案。",
      previewLines: [
        "## 2026 年第 34 周工作成果总结",
        "- [研发进展] 完成本地智能体服务端 (Python) 内存优化与 Token 鉴权升级",
        "- [会议复盘] 本周合计参会 16.5 小时，重点推动 3 项企业客户接入 PoC",
        "- [日程预警] 下周二 14:00《架构评审》与《客户签约会》冲突，建议将评审延期至周三 10:00",
      ],
    },
  },
  {
    id: "slack-monitor",
    title: "Slack 突发事件监控与响应",
    prompt: "持续监控 #dev-alerts 频道，当出现 P0/P1 异常时，自动分析日志原因并准备回复草稿。",
    category: "运维与应急协同",
    status: "自动化运行中",
    steps: [
      {
        title: "实时监听 Slack #dev-alerts 频道消息",
        tool: "Slack Streaming",
        detail: "收到告警：[P0] 支付网关响应延迟突增 (5400ms)",
      },
      {
        title: "通过本地终端读取 Prometheus 与应用日志",
        tool: "Terminal / Bash",
        detail: "执行 kubectl logs 获取最近 500 行日志，发现连接池耗尽异常",
      },
      {
        title: "生成故障排查结论与修复建议",
        tool: "DeepSeek-R1 / aisuite",
        detail: "定位为连接池泄漏，给出临时扩容命令与修复 PR 指引",
      },
      {
        title: "在 Slack 告警线程准备回复",
        tool: "Slack Thread Reply",
        detail: "准备在线程发布排查诊断分析，等待管理员一键批准",
        requiresApproval: true,
        approvalDetails: {
          action: "发布 Slack 线程回复 (Post Thread Reply)",
          target: "频道: #dev-alerts (Thread ID: 1723948123.001)",
          payload: "🤖 OpenWorker 自动排查诊断结论：\n- 根本原因: Redis 连接池在并发激增时未正确释放\n- 临时缓解命令: kubectl scale deployment payment-api --replicas=8\n- 相关 Issue: #492 已创建",
        },
      },
    ],
    finalOutput: {
      filename: "Incident_P0_Payment_Report.md",
      filetype: "应急响应报告",
      summary: "从 Slack 接收告警、本地终端抓取日志、AI 快速诊断定位，在 90 秒内完成根因定位与修复命令草稿生成。",
      previewLines: [
        "### 突发事故响应纪要 (Incident Report)",
        "⏰ 告警发生时间: 2026-08-18 02:15:30",
        "🎯 故障等级: P0 (支付延迟异常)",
        "🔍 诊断结论: 线程连接池耗尽，排查用时 48 秒",
        "⚡ 建议处理方案已发布至 Slack 应急线程，待值班工程师确认执行",
      ],
    },
  },
];

export const MODEL_PROVIDERS: ModelProvider[] = [
  {
    id: "deepseek",
    name: "DeepSeek",
    category: "domestic",
    iconName: "BrainCircuit",
    popularModels: ["DeepSeek-V3", "DeepSeek-R1 (推理模型)"],
    toolCallingVerified: true,
    notes: "极高性价比与出色代码能力，经深度测试支持复杂的 Function Calling 链条。",
  },
  {
    id: "openai",
    name: "OpenAI",
    category: "international",
    iconName: "Sparkles",
    popularModels: ["GPT-4o", "GPT-4o-mini", "o1", "o3-mini"],
    toolCallingVerified: true,
    notes: "全面支持结构化输出与工具调用，原生生态成熟。",
  },
  {
    id: "anthropic",
    name: "Anthropic Claude",
    category: "international",
    iconName: "Cpu",
    popularModels: ["Claude 3.7 Sonnet (Hybrid)", "Claude 3.5 Sonnet", "Claude 3.5 Haiku"],
    toolCallingVerified: true,
    notes: "顶尖的编码与长文本理解能力，在多工具编排与复杂指令遵循中表现极佳。",
  },
  {
    id: "gemini",
    name: "Google Gemini",
    category: "international",
    iconName: "Globe",
    popularModels: ["Gemini 2.0 Flash", "Gemini 2.0 Pro Exp", "Gemini 1.5 Pro"],
    toolCallingVerified: true,
    notes: "超长上下文窗口支持，多模态与极速推理响应。",
  },
  {
    id: "ollama",
    name: "Ollama (完全本地离线)",
    category: "local",
    iconName: "HardDrive",
    popularModels: ["qwen2.5-coder:32b", "deepseek-r1:14b", "llama3.3:70b"],
    toolCallingVerified: true,
    notes: "100% 本地运算，无需外网，隐私与敏感数据隔离的终极方案。",
  },
  {
    id: "kimi",
    name: "Moonshot Kimi",
    category: "domestic",
    iconName: "Compass",
    popularModels: ["moonshot-v1-128k", "moonshot-v1-32k"],
    toolCallingVerified: true,
    notes: "强大的长文本阅读与中文语义解析能力。",
  },
  {
    id: "qwen",
    name: "阿里通义千问 (Qwen)",
    category: "domestic",
    iconName: "Zap",
    popularModels: ["qwen-plus", "qwen-max", "qwen-coder-turbo"],
    toolCallingVerified: true,
    notes: "优秀的中文理解与工具调用适配度，云端与开源权重双重支持。",
  },
  {
    id: "glm",
    name: "智谱 GLM (Z.ai)",
    category: "domestic",
    iconName: "Layers",
    popularModels: ["GLM-4-Plus", "GLM-4-Air", "GLM-4-Flash"],
    toolCallingVerified: true,
    notes: "国内主流大模型之一，支持标准 OpenAI 兼容协议接入。",
  },
  {
    id: "minimax",
    name: "MiniMax",
    category: "domestic",
    iconName: "Flame",
    popularModels: ["MiniMax-Text-01", "abab6.5s"],
    toolCallingVerified: true,
    notes: "高并发响应与超长上下文处理能力。",
  },
  {
    id: "grok",
    name: "xAI Grok",
    category: "international",
    iconName: "Terminal",
    popularModels: ["grok-2-1212", "grok-beta"],
    toolCallingVerified: true,
    notes: "强劲的实时推理与逻辑推演能力。",
  },
  {
    id: "opensource",
    name: "Together / Fireworks",
    category: "opensource",
    iconName: "Server",
    popularModels: ["Llama-3.3-70B-Instruct", "Mistral-Large-2407", "Qwen-2.5-72B"],
    toolCallingVerified: true,
    notes: "灵活使用全球开源权重，按量计费，无厂商生态绑定。",
  },
];

export const PRIVACY_HIGHLIGHTS = [
  {
    title: "Local-First 架构设计",
    desc: "智能体循环、你的聊天历史、配置策略全部保存在本地，不上传中心化服务器。",
    icon: "ShieldCheck",
  },
  {
    title: "本地密钥库存储",
    desc: "你的 API Key 和连接器 Token 存储在操作系统的安全密钥库中，绝不离开机器。",
    icon: "KeyRound",
  },
  {
    title: "零强制云端账号依赖",
    desc: "你可以完全不注册云端账号直接使用，通过手动配置凭据或指向本地 Ollama 服务。",
    icon: "UserX",
  },
  {
    title: "极小化 OAuth 代理微服务",
    desc: "唯一涉及外部网络通信的仅为第三方应用授权握手代理，且支持纯手动 Token 模式替代。",
    icon: "Lock",
  },
];

export const DEV_GUIDE = {
  requirements: [
    { name: "Python", version: "3.10+" },
    { name: "Node.js", version: "20+" },
    { name: "Rust 工具链", version: "通过 rustup 安装（用于 Tauri 桌面外壳）" },
  ],
  commands: {
    clone: "git clone https://github.com/andrewyng/openworker\ncd openworker",
    setupDev: {
      mac: "bash packaging/setup_dev_env.sh",
      windows: "bash packaging/setup_dev_env.sh  # 推荐在 Git Bash / WSL 中运行",
    },
    runServer: {
      mac: ".venv/bin/openworker-server --cwd ~/some/project --port 8765",
      windows: ".venv\\Scripts\\openworker-server.exe --cwd C:\\some\\project --port 8765",
    },
    runGui: {
      browser: "cd surfaces/gui\nnpm install\nnpm run dev        # 浏览器模式 (基于本地服务端)",
      tauri: "cd surfaces/gui\nnpm run tauri dev # 启动完整 Tauri 桌面窗口（自带服务端监管）",
    },
    tests: {
      server: ".venv/bin/pytest",
      gui: "cd surfaces/gui && npm test && npm run e2e",
    },
  },
  repoStructure: [
    {
      dir: "coworker/",
      desc: "Python 后端 —— 智能体引擎、模型提供商适配、25+ 连接器、MCP 客户端、长期记忆与定时自动化",
    },
    {
      dir: "surfaces/gui/",
      desc: "桌面客户端 —— 负责监管服务端的 React UI 前端 + Tauri 原生外壳",
    },
    {
      dir: "stt/",
      desc: "语音输入侧车程序 (Rust) —— 负责极低延迟的高精度语音转文字处理",
    },
    {
      dir: "packaging/",
      desc: "跨平台安装包构建脚本 (macOS DMG、Windows 安装包)、自动更新清单与开发环境引导",
    },
    {
      dir: "docs/",
      desc: "设计规范、架构决策记录 (ADR) 与 API 文档",
    },
    {
      dir: "tests/",
      desc: "后端集成测试、智能体行为验证与端到端测试套件",
    },
  ],
};

export const FAQS = [
  {
    q: "OpenWorker 与传统的 AI 对话助手（如 ChatGPT、Claude Web）有什么本质区别？",
    a: "传统 AI 对话工具停留在浏览器窗口中，只能以文字建议回答，之后依然需要你自己动手复制、排版、查工具、写命令。OpenWorker 驻留在你的本地桌面，深度连接你电脑上的文件、终端和 25+ 工具，它交付的是最终落实的文件（如生成的报告、已更新的日历、排查完毕的 Slack 线程回复）。",
  },
  {
    q: "它会未经我同意在电脑上随意执行危险命令或发消息吗？",
    a: "绝不会。OpenWorker 遵循严格的“行动前先询问 (Human-in-the-Loop)”安全准则。任何写操作（修改文件、发邮件、更改日程）或 Shell 终端指令，都会弹出审批对话框，清晰展示将要执行的参数和目标，由你批准或调整后方可执行。",
  },
  {
    q: "完全没有网络连接时，我可以使用它吗？",
    a: "可以！你可以将 OpenWorker 指向本地运行的 Ollama（例如运行 deepseek-r1 或 qwen2.5-coder 模型），所有智能体思考推理、本地文件读取和脚本执行均在 100% 离线状态下完成，真正做到零数据出境。",
  },
  {
    q: "什么是 aisuite？OpenWorker 和 aisuite 是什么关系？",
    a: "aisuite 是由 Andrew Ng 团队开源的轻量级 Python 智能体框架，提供了统一的跨 LLM 调用标准与 MCP 工具层。OpenWorker 最初在 aisuite 仓库内部孵化，现在作为独立完整的开源 AI 同事桌面应用，其核心后端引擎深度构建在 aisuite 之上。",
  },
];
