> [← README](https://github.com/HaradaKashiwa/ternssh/blob/main/README.md) · [Wiki](Home) · [English](en-Home)
>
> [简介](zh-Home) · [功能特性](zh-Features) · [技术栈](zh-Tech-Stack) · [快速开始](zh-Getting-Started) · [部署](zh-Deployment) · [Docker](zh-Docker) · **项目结构** · [系统架构](zh-Architecture) · [小部件](zh-Widgets) · [API](zh-API) · [数据库](zh-Database) · [设置](zh-Settings) · [安全](zh-Security) · [配置](zh-Configuration) · [路线](zh-Roadmap) · [License](zh-License)

## 项目结构

```
ternssh/
├── web/                    # 前端（React + Vite）
│   ├── public/logo-light.png     # Logo（亮色）
│   ├── public/logo-dark.png      # Logo（暗色）
│   ├── public/logo.png           # Logo 源文件
│   ├── public/favicon-light.png  # Favicon（亮色）
│   ├── public/favicon-dark.png   # Favicon（暗色）
│   └── src/
│       ├── components/     # UI、设置、凭据字段、CodeEditor
│       ├── dashboard/      # 网格布局、对话框
│       ├── widgets/        # 终端、文件、监控等小部件
│       ├── i18n/           # 中英文
│       ├── lib/            # API 客户端、会话、SFTP
│       └── theme/          # 主题与个性化
├── server/                 # Cloudflare Workers 后端
│   ├── src/
│   │   ├── routes/         # HTTP 路由
│   │   ├── do/             # Durable Objects（SSH 会话）
│   │   ├── db/             # D1 查询
│   │   ├── ssh/            # SSH / SFTP 协议实现
│   │   └── auth/           # Access JWT / 默认用户
│   └── migrations/         # D1 数据库迁移
└── wrangler.jsonc          # Workers / D1 / DO 配置
```
