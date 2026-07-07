> [← README](../../README.md) · [Wiki](../README.md) · [English](../en/Home.md)
>
> [简介](../zh/Home.md) · [功能特性](../zh/Features.md) · [技术栈](../zh/Tech-Stack.md) · [快速开始](../zh/Getting-Started.md) · **部署** · [项目结构](../zh/Project-Structure.md) · [系统架构](../zh/Architecture.md) · [小部件](../zh/Widgets.md) · [API](../zh/API.md) · [数据库](../zh/Database.md) · [设置](../zh/Settings.md) · [安全](../zh/Security.md) · [配置](../zh/Configuration.md) · [路线](../zh/Roadmap.md) · [License](../zh/License.md)

## 部署

### Cloudflare Workers

<a href="https://deploy.workers.cloudflare.com/?url=https://github.com/haradakashiwa/ternssh-cloudflare-workers-template">
  <img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare" />
</a>

点击按钮连接 GitHub 仓库并部署到 Cloudflare Workers。平台会自动检测 `npm run build` 与 `npm run deploy` 作为构建与发布命令。

#### 更新

新版本发布后，再次点击上方按钮，或在已 fork 的模板仓库中通过 **Workers Builds** 触发重新部署即可升级。

配置 D1 数据库时，**选择已有的 `ternssh` 数据库**，不要新建。这样会保留服务器、凭据、仪表盘等数据；`npm run deploy` 会自动执行数据库迁移。

若已在 Workers Builds 中配置过构建，通常只需推送新版本或手动触发一次构建，无需重复绑定数据库。

#### 通过 GitHub 合并仓库自动更新

一键部署会在你的 GitHub 账号下 **fork** [模板仓库](https://github.com/haradakashiwa/ternssh-cloudflare-workers-template)，并将 **Workers Builds** 绑定到该 fork。官方每次发布新版本时，模板仓库的 `main` 分支会同步更新；你只需把上游变更合并进自己的 fork 并 **push**，Cloudflare 就会自动触发构建与部署。

**前提**：已完成一键部署，Workers Builds 已连接到你的 fork（Cloudflare Dashboard → **Workers & Pages** → 你的 Worker → **Settings** → **Builds** 可查看）。

##### 方式一：GitHub 网页同步（推荐）

1. 打开你的 fork（例如 `https://github.com/<你的用户名>/ternssh-cloudflare-workers-template`）。
2. 若 fork 落后于上游，页面会显示 **Sync fork**；点击 **Update branch** 将上游 `main` 合并进来。
3. 同步完成后，Workers Builds 会检测到 `main` 的新提交并自动运行 `npm run build` 与 `npm run deploy`。
4. 在 Cloudflare Dashboard 的 **Builds** 页查看构建日志，确认部署成功。

若未出现 **Sync fork**，说明本地 fork 已是最新，或上游尚未发布新版本。可对比 fork 与上游仓库根目录 `VERSION` 文件中的版本号。

##### 方式二：命令行合并

一次性添加上游远程仓库：

```bash
git clone https://github.com/<你的用户名>/ternssh-cloudflare-workers-template.git
cd ternssh-cloudflare-workers-template
git remote add upstream https://github.com/haradakashiwa/ternssh-cloudflare-workers-template.git
```

每次升级时：

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

`git push` 后 Workers Builds 会自动触发部署，无需在 Dashboard 中重新绑定 D1 或环境变量。

##### 注意事项

- 模板仓库由 CI 自动生成，**请勿在 fork 中手动修改代码**；若曾改过文件，合并时可能产生冲突，建议以 `upstream/main` 为准解决。
- `wrangler.production.jsonc` 已在 `.gitignore` 中，不会随合并覆盖；构建时由 `scripts/generate-production-config.mjs` 根据账号下的 D1 或 Workers Builds 环境变量 `D1_DATABASE_ID` 自动生成。
- `npm run deploy` 会自动执行 D1 迁移，服务器与凭据等数据保留在原有数据库中。
- 若 push 后未触发构建，可在 Dashboard → **Builds** 中手动 **Retry deployment**；或再次点击文首的 Deploy 按钮（需选择已有 Worker，勿新建）。

生产环境鉴权（Cloudflare Access / Basic Auth）见 [安全说明 · 鉴权](../zh/Security.md#鉴权)。

### Docker（自托管）

Docker 镜像通过 Wrangler 本地模式运行完整应用，适合内网自托管或快速体验。官方镜像：`ghcr.io/haradakashiwa/ternssh`。

**docker run**（推荐预构建镜像）：

```bash
docker run -d \
  --name ternssh \
  -p 8787:8787 \
  -v ternssh-data:/app/.wrangler \
  --restart unless-stopped \
  ghcr.io/haradakashiwa/ternssh:latest
```

**docker compose**：

```bash
docker compose -f docker-compose.ghcr.yml up -d
```

指定版本：`TERNSSH_TAG=1.0.0 docker compose -f docker-compose.ghcr.yml up -d`

自定义端口：`PORT=8080 docker compose -f docker-compose.ghcr.yml up -d`

从源码构建：`docker compose up -d --build`

访问 `http://localhost:8787`（或你映射的端口）。数据持久化于卷 `/app/.wrangler`。

Basic Auth 与 onboarding 说明见 [安全说明 · HTTP Basic Auth（数据库凭据）](../zh/Security.md#http-basic-auth数据库凭据)。
