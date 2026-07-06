> [← README](https://github.com/HaradaKashiwa/ternssh/blob/main/README.en.md) · [Wiki](Home) · [中文](zh-Home)
>
> [Overview](en-Home) · [Features](en-Features) · [Tech Stack](en-Tech-Stack) · [Quick Start](en-Getting-Started) · [Deployment](en-Deployment) · [Docker](en-Docker) · **Project Structure** · [Architecture](en-Architecture) · [Widgets](en-Widgets) · [API](en-API) · [Database](en-Database) · [Settings](en-Settings) · [Security](en-Security) · [Configuration](en-Configuration) · [Roadmap](en-Roadmap) · [License](en-License)

## Project Structure

```
ternssh/
├── web/                    # Frontend (React + Vite)
│   ├── public/logo-light.png     # Logo (light)
│   ├── public/logo-dark.png      # Logo (dark)
│   ├── public/logo.png           # Logo source
│   ├── public/favicon-light.png  # Favicon (light)
│   ├── public/favicon-dark.png   # Favicon (dark)
│   └── src/
│       ├── components/     # UI, settings, credential fields, CodeEditor
│       ├── dashboard/      # Grid layout, dialogs
│       ├── widgets/        # Terminal, file manager, monitoring widgets
│       ├── i18n/           # Chinese / English
│       ├── lib/            # API client, sessions, SFTP
│       └── theme/          # Theme and personalization
├── server/                 # Cloudflare Workers backend
│   ├── src/
│   │   ├── routes/         # HTTP routes
│   │   ├── do/             # Durable Objects (SSH sessions)
│   │   ├── db/             # D1 queries
│   │   ├── ssh/            # SSH / SFTP protocol implementation
│   │   └── auth/           # Access JWT / default user
│   └── migrations/         # D1 database migrations
└── wrangler.jsonc          # Workers / D1 / DO config
```
