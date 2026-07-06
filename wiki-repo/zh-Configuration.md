> [← README](https://github.com/HaradaKashiwa/ternssh/blob/main/README.md) · [Wiki](Home) · [English](en-Home)
>
> [简介](zh-Home) · [功能特性](zh-Features) · [技术栈](zh-Tech-Stack) · [快速开始](zh-Getting-Started) · [部署](zh-Deployment) · [Docker](zh-Docker) · [项目结构](zh-Project-Structure) · [系统架构](zh-Architecture) · [小部件](zh-Widgets) · [API](zh-API) · [数据库](zh-Database) · [设置](zh-Settings) · [安全](zh-Security) · **配置** · [路线](zh-Roadmap) · [License](zh-License)

## 配置参考

- **`wrangler.jsonc`** — 本地开发（`wrangler dev`）；**不含 `vars`**，Access 变量仅在控制台配置
- **`wrangler.production.jsonc.example`** — 生产配置模板
- **`wrangler.production.jsonc`** — 你的生产配置（gitignore，从模板复制或脚本生成）；**不含 `vars`/密钥**，避免部署覆盖控制台配置

根目录 `wrangler.jsonc` 示例：

```jsonc
{
  "name": "ternssh",
  "main": "server/src/index.ts",
  "assets": {
    "directory": "./server/public",
    "not_found_handling": "single-page-application",
    "run_worker_first": ["/api/*"]
  },
  "d1_databases": [{
    "binding": "DB",
    "database_name": "ternssh",
    "database_id": "local-ternssh-db",
    "migrations_dir": "server/migrations"
  }],
  "durable_objects": {
    "bindings": [{ "name": "SSH_SESSION", "class_name": "SshSession" }]
  },
  "migrations": [{ "tag": "v1", "new_sqlite_classes": ["SshSession"] }]
}
```

前端构建产物输出到 `server/public/`（`web/vite.config.ts` 的 `build.outDir`）。
