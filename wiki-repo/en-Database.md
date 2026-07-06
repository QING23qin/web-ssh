> [← README](https://github.com/HaradaKashiwa/ternssh/blob/main/README.en.md) · [Wiki](Home) · [中文](zh-Home)
>
> [Overview](en-Home) · [Features](en-Features) · [Tech Stack](en-Tech-Stack) · [Quick Start](en-Getting-Started) · [Deployment](en-Deployment) · [Docker](en-Docker) · [Project Structure](en-Project-Structure) · [Architecture](en-Architecture) · [Widgets](en-Widgets) · [API](en-API) · **Database** · [Settings](en-Settings) · [Security](en-Security) · [Configuration](en-Configuration) · [Roadmap](en-Roadmap) · [License](en-License)

## Database (D1)

Migrations live in `server/migrations/`:

| Migration | Contents |
|-----------|----------|
| `0001_init.sql` | users, servers, credentials, dashboards, widgets, sessions |
| `0002_server_groups.sql` | server_groups; servers add group_id / sort_order |
| `0003_saved_passwords.sql` | saved_passwords credential vault |
| `0004_saved_private_keys.sql` | saved_private_keys credential vault |

```bash
npm run db:migrate:local   # Local
npm run db:migrate         # Remote (included in deploy)
```
