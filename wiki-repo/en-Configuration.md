> [← README](https://github.com/HaradaKashiwa/ternssh/blob/main/README.en.md) · [Wiki](Home) · [中文](zh-Home)
>
> [Overview](en-Home) · [Features](en-Features) · [Tech Stack](en-Tech-Stack) · [Quick Start](en-Getting-Started) · [Deployment](en-Deployment) · [Docker](en-Docker) · [Project Structure](en-Project-Structure) · [Architecture](en-Architecture) · [Widgets](en-Widgets) · [API](en-API) · [Database](en-Database) · [Settings](en-Settings) · [Security](en-Security) · **Configuration** · [Roadmap](en-Roadmap) · [License](en-License)

## Configuration Reference

- **`wrangler.jsonc`** — local development (`wrangler dev`); **no `vars`** — configure Access only in the dashboard
- **`wrangler.production.jsonc.example`** — production config template
- **`wrangler.production.jsonc`** — your production config (gitignored; copy from template or generate via script); **no `vars`/secrets** so deploys do not overwrite dashboard settings

Example root `wrangler.jsonc`:

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

Frontend build output goes to `server/public/` (`build.outDir` in `web/vite.config.ts`).
