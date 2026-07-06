> [← README](https://github.com/HaradaKashiwa/ternssh/blob/main/README.md) · [Wiki](Home) · [English](en-Home)
>
> [简介](zh-Home) · [功能特性](zh-Features) · [技术栈](zh-Tech-Stack) · **快速开始** · [部署](zh-Deployment) · [Docker](zh-Docker) · [项目结构](zh-Project-Structure) · [系统架构](zh-Architecture) · [小部件](zh-Widgets) · [API](zh-API) · [数据库](zh-Database) · [设置](zh-Settings) · [安全](zh-Security) · [配置](zh-Configuration) · [路线](zh-Roadmap) · [License](zh-License)

## 快速开始

### 环境要求

- Node.js 20+
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

### 本地开发

```bash
git clone https://github.com/HaradaKashiwa/ternssh.git
cd ternssh
npm install

# 应用 D1 迁移（首次必须）
npm run db:migrate:local

# 方式 A：前后端分离（热更新）
npm run dev:server   # Workers + 静态资源，默认 http://localhost:8787
npm run dev:web      # Vite 开发服务器，代理 /api

# 方式 B：接近生产的集成预览
npm run build
npm run dev:server
```
