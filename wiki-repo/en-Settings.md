> [← README](https://github.com/HaradaKashiwa/ternssh/blob/main/README.en.md) · [Wiki](Home) · [中文](zh-Home)
>
> [Overview](en-Home) · [Features](en-Features) · [Tech Stack](en-Tech-Stack) · [Quick Start](en-Getting-Started) · [Deployment](en-Deployment) · [Docker](en-Docker) · [Project Structure](en-Project-Structure) · [Architecture](en-Architecture) · [Widgets](en-Widgets) · [API](en-API) · [Database](en-Database) · **Settings** · [Security](en-Security) · [Configuration](en-Configuration) · [Roadmap](en-Roadmap) · [License](en-License)

## Settings & Personalization

Configure in the header **Settings**:

- **General**: Site name, language, reset all settings (double confirmation)
- **Personalization**: Theme, background image, widget opacity, layout spacing, terminal colors

Reset all clears localStorage preferences and calls `POST /api/v1/me/reset` to wipe the user's servers, credentials, sessions, and layout in D1, restoring the initial state.
