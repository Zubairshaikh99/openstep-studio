# OpenStep Studio 📸

**A free, privacy-first screenshot-to-tutorial maker.**

Create clear how-to guides without signup, upload servers, API keys or watermarks. Screenshot editing and file exports work entirely in a modern browser.

> **Early prototype — v0.1.0.** Functional MVP, not a production-ready v1.0.

## Features

- Upload PNG, JPEG or WebP screenshots.
- Add step titles and instructions, and move steps up/down.
- Numbered markers, arrows, rectangles, circles and highlights.
- Change mark colors and line thickness, undo and redo.
- Preview the full tutorial.
- Export a current annotated screenshot as PNG.
- Download a standalone HTML tutorial.
- Print / Save as PDF using the browser print dialog.
- Save the current editable draft locally and export/import a JSON project backup.
- Responsive interface suitable for mobile and desktop use.

## Try it

Open `index.html` through a local web server or the GitHub Pages demo (once Pages has been enabled). No build step or npm dependencies are needed for the single-file edition.

1. Click **Add screenshots** and choose your images.
2. Add your step titles and instructions.
3. Choose a drawing tool and tap/drag on the image.
4. Press **Preview guide** or choose an export option.
5. **Download project backup** frequently to protect editable work.

### Limitations

- PDF export uses the print dialog. Choose **Save as PDF**, and allow popups if required.
- Images larger than 2,200 pixels are resized to keep the editor practical on phones.
- Clearing browser storage may delete the autosaved project; keep manual backups.
- No automatic AI descriptions, screenshot cropping, or collaborative editing in this prototype.
- Future versions will add stronger accessibility support, QA across browsers, and more editing tools.

## Deploy on GitHub Pages

In the repository's **Settings → Pages**, under **Build and deployment → Source**, select **GitHub Actions**. The committed [deployment workflow](.github/workflows/deploy.yml) checks the app and publishes its static `index.html`. After enabling Pages, use **Actions → Deploy OpenStep Studio to GitHub Pages → Run workflow** (or push a subsequent commit). The site will be at `https://zubairshaikh99.github.io/openstep-studio/` once GitHub reports a successful deployment. No server backend is required.

## Privacy

Your image files are processed inside your browser. The app has no analytics, tracking, authentication or remote image-upload logic.

## Open source

Licensed under [MIT](LICENSE). Issues, suggestions and contributions are welcome. Please do not post private screenshots publicly.

Created by **[Zubair Shaikh](https://github.com/Zubairshaikh99)** · Creator of **[Zubware](https://www.zubware.com/)**.