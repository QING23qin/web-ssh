> [← README](https://github.com/HaradaKashiwa/ternssh/blob/main/README.en.md) · [Wiki](Home) · [中文](zh-Home)
>
> [Overview](en-Home) · [Features](en-Features) · [Tech Stack](en-Tech-Stack) · **Quick Start** · [Deployment](en-Deployment) · [Docker](en-Docker) · [Project Structure](en-Project-Structure) · [Architecture](en-Architecture) · [Widgets](en-Widgets) · [API](en-API) · [Database](en-Database) · [Settings](en-Settings) · [Security](en-Security) · [Configuration](en-Configuration) · [Roadmap](en-Roadmap) · [License](en-License)

## Quick Start

### Requirements

- Node.js 20+
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

### Local development

```bash
git clone https://github.com/HaradaKashiwa/ternssh.git
cd ternssh
npm install

# Apply D1 migrations (required on first run)
npm run db:migrate:local

# Option A: Split frontend/backend (hot reload)
npm run dev:server   # Workers + static assets, default http://localhost:8787
npm run dev:web      # Vite dev server, proxies /api

# Option B: Integrated preview closer to production
npm run build
npm run dev:server
```
