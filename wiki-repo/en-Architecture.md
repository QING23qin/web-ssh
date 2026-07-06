> [← README](https://github.com/HaradaKashiwa/ternssh/blob/main/README.en.md) · [Wiki](Home) · [中文](zh-Home)
>
> [Overview](en-Home) · [Features](en-Features) · [Tech Stack](en-Tech-Stack) · [Quick Start](en-Getting-Started) · [Deployment](en-Deployment) · [Docker](en-Docker) · [Project Structure](en-Project-Structure) · **Architecture** · [Widgets](en-Widgets) · [API](en-API) · [Database](en-Database) · [Settings](en-Settings) · [Security](en-Security) · [Configuration](en-Configuration) · [Roadmap](en-Roadmap) · [License](en-License)

## Architecture

```mermaid
flowchart TB
    subgraph Client["Browser"]
        UI[React Dashboard]
        Widgets[Widgets<br/>Terminal / Files / Monitoring / Server list]
        UI --> Widgets
    end

    subgraph Edge["Cloudflare Edge"]
        Access[Cloudflare Access<br/>optional]
        Worker[Workers<br/>REST API]
        DO[Durable Objects<br/>SSH Session + WebSocket]
        D1[(D1 SQLite)]
    end

    subgraph Remote["Remote host"]
        SSH[SSH Server]
    end

    Widgets -->|HTTPS| Access
    Access --> Worker
    Widgets -->|WSS| DO
    Worker --> D1
    Worker -->|route sessionId| DO
    DO -->|SSH| SSH
```
