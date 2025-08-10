# Flappy House (PWA) — v3 Update

**Fixes**
- Pre-cutout sprite (no in-game chroma-key): much cleaner edges; no missing body parts.
- Much slower game speed by default.
- Viewport locked; no frame movement on tap.

## Replace your GitHub Pages files

1) Download and unzip `flappy-house-v3.zip` from this chat.
2) Open https://github.com/remusofmars/flappy-house (Code tab).
3) Click **Add file → Upload files**.
4) Drag these files to upload (replace existing ones):
   - `index.html`
   - `manifest.webmanifest`
   - `service-worker.js`
   - `icon-192.png`
   - `icon-512.png`
   - `apple-touch-icon.png`
5) **Commit changes**.
6) Wait ~30–90s, then open https://remusofmars.github.io/flappy-house/.
   - If cached, hard refresh or clear Website Data for `github.io` on iPhone.

## Tune difficulty (inside index.html)
```
const GRAVITY = 0.22;
const FLAP = -5.6;
const PIPE_GAP = 230;
const PIPE_SPEED = 0.9;
const SPAWN_EVERY = 2300;
```
Increase `PIPE_GAP` or lower `PIPE_SPEED` to make it easier.
