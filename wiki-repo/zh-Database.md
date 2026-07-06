> [← README](https://github.com/HaradaKashiwa/ternssh/blob/main/README.md) · [Wiki](Home) · [English](en-Home)
>
> [简介](zh-Home) · [功能特性](zh-Features) · [技术栈](zh-Tech-Stack) · [快速开始](zh-Getting-Started) · [部署](zh-Deployment) · [Docker](zh-Docker) · [项目结构](zh-Project-Structure) · [系统架构](zh-Architecture) · [小部件](zh-Widgets) · [API](zh-API) · **数据库** · [设置](zh-Settings) · [安全](zh-Security) · [配置](zh-Configuration) · [路线](zh-Roadmap) · [License](zh-License)

## 数据库（D1）

迁移文件位于 `server/migrations/`：

| 迁移 | 内容 |
|------|------|
| `0001_init.sql` | users、servers、credentials、dashboards、widgets、sessions |
| `0002_server_groups.sql` | server_groups，servers 增加 group_id / sort_order |
| `0003_saved_passwords.sql` | saved_passwords 凭据 vault |
| `0004_saved_private_keys.sql` | saved_private_keys 凭据 vault |

```bash
npm run db:migrate:local   # 本地
npm run db:migrate         # 远程（deploy 已包含）
```
