# Flappy House (PWA) — v4

**Fixes in v4**
- Robust **circle-vs-rectangle** collision (no more glitchy gates).
- Physics in **design pixels per second** (frame-rate independent).
- **Slower** default speed and larger gaps.
- Optional **debug overlay** (press **D**) shows the circular hitbox.

## Update your GitHub repo (web UI)
1) Download and unzip `flappy-house-v4.zip`.
2) Open https://github.com/remusofmars/flappy-house → **Code** tab.
3) **Add file → Upload files**.
4) Upload/replace:
   - `index.html`
   - `manifest.webmanifest`
   - `service-worker.js`
   - `icon-192.png`
   - `icon-512.png`
   - `apple-touch-icon.png`
5) **Commit changes**.
6) After ~30–90s, open https://remusofmars.github.io/flappy-house/ (hard refresh if cached).

## Tweakables (inside index.html)
```js
// speed/feel
const GRAVITY_PPS2 = 240;    // px/s^2
const FLAP_VY = -380;        // px/s
const PIPE_SPEED_PPS = 55;   // px/s
const PIPE_GAP = 240;        // px
const SPAWN_EVERY = 2600;    // ms

// hitbox radius (smaller = more forgiving)
player.r = 30;
```

## Debug view
Press **D** at any time to toggle the red circular hitbox.
