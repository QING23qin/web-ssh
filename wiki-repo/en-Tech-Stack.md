> [← README](https://github.com/HaradaKashiwa/ternssh/blob/main/README.en.md) · [Wiki](Home) · [中文](zh-Home)
>
> [Overview](en-Home) · [Features](en-Features) · **Tech Stack** · [Quick Start](en-Getting-Started) · [Deployment](en-Deployment) · [Docker](en-Docker) · [Project Structure](en-Project-Structure) · [Architecture](en-Architecture) · [Widgets](en-Widgets) · [API](en-API) · [Database](en-Database) · [Settings](en-Settings) · [Security](en-Security) · [Configuration](en-Configuration) · [Roadmap](en-Roadmap) · [License](en-License)

## Tech Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Frontend | React + Vite + Tailwind + CodeMirror | Static assets served same-origin by Workers; file editing uses CodeMirror 6 |
| Backend | Cloudflare Workers | REST API, routing, identity resolution |
| Real-time | Durable Objects | One DO instance per SSH session; WebSocket long connections |
| SSH protocol | Custom TypeScript stack | Handshake, shell, SFTP, remote command execution |
| Database | Cloudflare D1 | Users, servers, layout, credentials, sessions, etc. |
| Auth (optional) | Cloudflare Access | Edge JWT validation; shared workspace after login |
| DNS | Cloudflare 1.1.1.1 DoH | Hostname resolution (skipped for direct IP) |
