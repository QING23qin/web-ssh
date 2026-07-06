> [← README](https://github.com/HaradaKashiwa/ternssh/blob/main/README.md) · [Wiki](Home) · [English](en-Home)
>
> [简介](zh-Home) · [功能特性](zh-Features) · [技术栈](zh-Tech-Stack) · [快速开始](zh-Getting-Started) · [部署](zh-Deployment) · [Docker](zh-Docker) · [项目结构](zh-Project-Structure) · [系统架构](zh-Architecture) · [小部件](zh-Widgets) · [API](zh-API) · [数据库](zh-Database) · [设置](zh-Settings) · **安全** · [配置](zh-Configuration) · [路线](zh-Roadmap) · [License](zh-License)

## 安全说明

- **开放模式**无应用层认证，请勿在公网暴露敏感环境
- Access 模式仅作登录门禁，所有通过校验的请求使用内置用户 `default` 的数据
- SSH 密码/私钥存于 D1 `credentials` 表（按服务器引用）；vault 条目存于 `saved_passwords` / `saved_private_keys`
- 全站 HTTPS / WSS；DO 实例按 session 隔离
