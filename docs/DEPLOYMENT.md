# Deployment

OpenStep Studio v0.1 is a static single-page application. It does not need a backend or API key.

## GitHub Pages — one-time admin setup

This repository already includes `.github/workflows/deploy.yml`, which builds, checks, uploads, and deploys the static site.

1. Open **Settings → Pages** for this repository.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Open **Actions → Deploy OpenStep Studio to GitHub Pages** and select **Run workflow** (or push a new commit to `main`).
4. Open the deployed URL listed on the successful workflow run.

Expected URL after a successful deployment: https://zubairshaikh99.github.io/openstep-studio/

**Important:** Until Pages is enabled by a repository admin, `actions/configure-pages@v5` reports `Get Pages site failed ... Not Found`. This is a hosting setup issue, not an application build failure.

## Local preview

Serve the repository root through any static HTTP server, then open `index.html`. The single-file edition has no npm build step.

## Automated tests

Run `npm test` with a supported Node.js runtime. CI is defined in `.github/workflows/ci.yml` and runs on pushes and pull requests.

## Production readiness

This is an early v0.1 prototype. Users should check exports on their device and save project backups. A successful CI run is not equivalent to comprehensive browser or accessibility testing.
