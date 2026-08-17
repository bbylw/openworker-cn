# OpenWorker

**[openworker.com](https://openworker.com)** · [下载](#下载) · [问题反馈](https://github.com/andrewyng/openworker/issues)

<a href="https://trendshift.io/repositories/91434?utm_source=trendshift-badge&amp;utm_medium=badge&amp;utm_campaign=badge-trendshift-91434" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/trendshift/repositories/91434/daily?language=Python" alt="andrewyng%2Fopenworker | Trendshift" width="250" height="55"/></a>

> **Beta 版** - OpenWorker 目前处于公开测试阶段：功能完整可用、可自我更新，我们正在积极打磨尚不完美的地方。欢迎提交[问题反馈](https://github.com/andrewyng/openworker/issues)。

**能帮你完成日常任务的 AI。** OpenWorker 是一款开源的 AI 同事，它驻留在你的桌面，交付的是**已完成的工作**而非仅仅聊天：一份打磨好的文档、一条附带数据的 Slack 回复、一份更新后的日历、一个整理过的收件箱。

它运行在你的机器上，不会把你锁定在任何一个模型上：你可以自带 OpenAI、Anthropic、Google 或开源权重提供商的 API Key，也可以用 Ollama 完全本地运行。你的数据只通过**你**所选择的模型和集成离开你的机器。

[![OpenWorker 是如何工作的](https://raw.githubusercontent.com/andrewyng/openworker/main/docs/assets/how-it-works.png)](https://openworker.com)

## 下载

[**⬇ macOS（Apple 芯片）**](https://download.openworker.com/mac)
<sub>macOS 12+ · 已签名并公证 · 自动更新</sub>

[**⬇ Windows 10/11（x64）**](https://download.openworker.com/windows)
<sub>安装包尚未进行代码签名，因此 SmartScreen 会发出警告；签名工作正在进行中</sub>

打开应用，添加一个模型 Key（或指向 Ollama），然后提出一个真实的需求。

## 它是如何工作的

1. 告诉 OpenWorker 你想要的结果 —— “准备一份客户简报”“理顺我的日历”“起草一份报告”“查一下这次发布在 Jira 和 GitHub 上的进展”。
2. 它会把任务拆解为若干步骤，并在你的桌面、文件和已连接的应用之间协同工作。
3. 在任何重要操作之前 —— 发送消息、更改日历、运行命令 —— 它会先与你确认，由你决定批准或调整。
4. 你拿到的是已完成的交付物，而不是一份待办清单。

底层架构：

```text
┌────────────────────────────────────────────────┐
│              OpenWorker 桌面应用               │  原生外壳 + GUI
├────────────────────────────────────────────────┤
│           本地智能体服务端（Python）           │  引擎 · 工具 · 连接器 —— 基于 aisuite 构建
├───────────────┬────────────────┬───────────────┤
│   你的文件    │   你的工具     │   你的模型    │  一切都在你的机器上，
│   与终端      │ 25+ 个连接器   │  任意提供商   │  使用你的密钥运行
└───────────────┴────────────────┴───────────────┘
```

## 它能做什么

- **产出真实交付物** - 文档、电子表格、报告和网页都会以文件形式落地，你可以直接打开和分享。
- **从 Slack 中工作** - 在频道里 @OpenWorker；你的桌面上会开启一个会话，工作借助你的工具完成，答案以线程回复的形式返回。
- **使用你的日常工具** - 25+ 个集成，包括 GitHub、Slack、Jira、Notion、Linear、HubSpot、Outlook、monday.com、Gmail 与 Google 日历，以及你的**终端和本地文件**。任何可通过 [MCP](https://modelcontextprotocol.io/) 访问的工具也能接入，且支持按工具进行权限控制。
- **按计划运行** - 适用于周期性工作的自动化：一份晨间简报、一份周报、对一个频道的持续监控。运行结果会带着完整记录落在应用里。
- **行动前先询问** - 写入、发送和 shell 命令都需要经你批准。无人值守运行会将其请求暂存到收件箱，而不是自行采取行动。

## 自带模型

模型的使用权归你所有：选择提供商、粘贴你的 Key，随时切换。开箱即用的支持包括：

**OpenAI · Anthropic · Google Gemini · Inkling（Thinking Machines）· GLM（Z.ai）· DeepSeek · Kimi（Moonshot）· Qwen · MiniMax · Mistral · Grok（xAI）** —— 此外还支持通过 **Together** 和 **Fireworks** 使用开源权重模型，以及通过 **Ollama** 完全本地运行模型。

我们提供一份精选的模型清单，标注了经我们验证可用于工具调用的模型。添加任意模型字符串均可，但风险需自行承担。

## 隐私

OpenWorker 优先本地（local-first）。一切都在你的机器上：智能体循环、你的对话、连接器令牌以及模型 Key —— 全部存放在应用的本地密钥库中。唯一的云端部分是用于为连接器代理 OAuth 握手的一个小型服务。你始终可以不登录直接使用应用 —— 通过手动创建的凭据 / API Key 来使用连接器。

## 从源码运行

前置条件：Python 3.10+、Node 20+，以及（用于桌面外壳）通过 [rustup](https://rustup.rs/) 安装的 Rust 工具链。

```shell
git clone https://github.com/andrewyng/openworker
cd openworker

# 1. 一次性引导 - 在 .venv 创建 Python 虚拟环境
#    （在 Windows 上，从 Git Bash 或 WSL 运行）
bash packaging/setup_dev_env.sh

# 2. 启动本地智能体服务端
.venv/bin/openworker-server --cwd ~/some/project --port 8765
#    （Windows：.venv\Scripts\openworker-server.exe）

# 3. 在另一个终端中启动 UI
cd surfaces/gui
npm install
npm run dev        # 浏览器 UI 运行在 Vite 开发端口
```

独立服务端会在 `<state-dir>/sidecar-8765.token` 处生成一个每次启动的令牌；Vite 启动时会读取这个仅用户可访问的文件。对于直接的 API 调用，请将该值放在 `X-OpenWorker-Token` 请求头中发送。桌面应用则使用内存中的启动令牌，从不将其写入磁盘。

若要运行完整的桌面应用而非浏览器 UI，请将第 3 步替换为 `npm run tauri dev`（在 `surfaces/gui/` 目录下执行）—— Tauri 外壳会启动窗口并自行监管服务端。

测试：`.venv/bin/pytest`（服务端），`surfaces/gui` 目录下的 `npm test` 与 `npm run e2e`（GUI 单元测试 + 封闭端到端测试）。桌面安装包通过 `packaging/build_dmg.sh` / `packaging/build_windows.ps1` 构建。

## 仓库结构

| 目录 | 内容 |
|---|---|
| `coworker/` | Python 后端 —— 智能体引擎、模型提供商、连接器、MCP 客户端、记忆、自动化 |
| `surfaces/gui/` | 桌面应用 —— 监管服务端的 React UI + Tauri 外壳 |
| `stt/` | 用于语音输入的语音转文字侧车程序（Rust） |
| `packaging/` | 安装包构建（macOS DMG、Windows）、自动更新清单、开发引导 |
| `docs/` | 设计规范与决策日志 |
| `tests/` | 后端测试套件 |

## 基于 aisuite 构建

OpenWorker 的引擎基于 [**aisuite**](https://github.com/andrewyng/aisuite) 构建。aisuite 是一个轻量级 Python 库，提供了跨 LLM 提供商统一的聊天补全 API，以及一个带有工具、工具集和 MCP 支持的智能体层。如果你想构建自己的智能体框架而非使用我们的，可以从那里入手；本仓库也是 aisuite 能力的一个可运行参考实例。

OpenWorker 最初是在 aisuite 仓库内部开发的，之后才迁移到如今独立的家；感谢 aisuite 的贡献者们，OpenWorker 构建在他们的成果之上。

## 贡献

欢迎提交贡献和 bug 报告 —— 请提交[问题](https://github.com/andrewyng/openworker/issues)或拉取请求。应用会自我更新，因此修复能快速触达已安装的用户。
对于任何 PR，请附上「之前出了什么问题」以及「现在如何修复」的截图。我们很快会加入可供你贡献的功能。
请注意，我们正基于一份内部清单和目标积极开发中，因此可能无法批准那些添加了已在开发中的功能、或偏离我们愿景的 PR。

## 许可证

MIT —— 详见 [LICENSE](https://github.com/andrewyng/openworker/blob/main/LICENSE)。
