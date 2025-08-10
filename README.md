# Flappy House (PWA) — Update

**What changed**
1. **Transparent character**: an automatic chroma-key pass removes the background so the sprite isn't a square. If your image background isn't uniform, we can fine-tune the tolerance or I can deliver a hand-cut PNG.
2. **Slower gameplay**: gravity reduced, flap strength eased, pipes move slower, and the gap is larger.
3. **No viewport movement**: page is fixed (`overflow:hidden` + `position:fixed`) and taps are `preventDefault()` so the frame won't nudge.

## Update your GitHub repo (web UI)

1) Download the ZIP attached with this message and unzip it.
2) Go to https://github.com/remusofmars/flappy-house → **Code** tab.
3) Click **Add file → Upload files**.
4) Drag these files to the upload area (replace the old ones):
   - `index.html`
   - `manifest.webmanifest`
   - `service-worker.js`
   - `icon-192.png`
   - `icon-512.png`
   - `apple-touch-icon.png`
5) Scroll down → **Commit changes**.
6) Wait ~30–90s, then open https://remusofmars.github.io/flappy-house/
   - If you still see the old version, hard refresh or clear cached site data (service workers cache aggressively).

## Update via command line

```bash
# In the folder with the unzipped files from this package:
git add .
git commit -m "Update: slower play + transparent character + fixed viewport"
git push
```

> Want a precise background removal (beyond chroma-key)? I can export a clean transparent PNG for you; just say the word.
