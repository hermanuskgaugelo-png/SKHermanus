# SK Hermanus Website

A responsive personal-brand website for Stephanus Kgaugelo Hermanus, built with React, TypeScript and Vite. The profile copy, contact information and experience shown here reflect the supplied brief; details without confirmed dates or titles remain approximate or general.

## Project structure

- `src/App.tsx` — homepage sections, profile content, navigation and email-based enquiry forms
- `src/gallery.tsx` and `gallery.html` — standalone, responsive photo gallery page with a photo viewer
- `src/styles.css` — responsive visual system and page styling
- `src/privacy.tsx` and `privacy.html` — privacy information page
- `public/favicon.svg` — SKH text monogram
- `public/images/` — supplied personal, sports and community gallery photographs
- `render.yaml` — Render Static Site build and publishing configuration

## Requirements

- Node.js 20 or later
- npm

## Run locally

From the project directory:

```sh
npm install
npm run dev
```

If `npm` is not recognized in an existing VS Code terminal after installing Node.js, restart VS Code or open a new terminal so it loads the updated Windows `PATH`. You can also run **Terminal → Run Task → Start SK Hermanus Website**; the workspace task refreshes `PATH` from Windows before starting Vite.

```sh
npm run dev -- --host 0.0.0.0
```

Open the local URL printed by Vite. To check the production build:

```sh
npm run build
npm run preview
```

The forms use `mailto:` links: submitting a form opens the visitor's email application with a prepared message. This site does not transmit or store form submissions. A working mail application is required to send the message.

## Save changes to GitHub

To save and publish your local changes to the connected GitHub repository, run these commands from the project directory:

```sh
git add .
git commit -m "Build SK Hermanus website"
git push origin main
```

These commands save and publish changes to GitHub; they do not deploy the site by themselves. If Git asks you to identify yourself, configure the name and email associated with your GitHub account first. Do not include credentials or access tokens in repository files.

## Deploy and run on Render

1. Sign in to Render and choose **New → Static Site**.
2. Connect your GitHub account and select the `SKHermanus` repository.
3. Use the project root (`.`), build command `npm ci && npm run build`, and publish directory `dist`. These settings are also recorded in `render.yaml`.
4. Create the Static Site. Render builds and publishes the site and provides a public `onrender.com` URL.
5. Keep automatic deploys enabled. After connecting the repository, each push to the configured branch triggers a new build and deployment.

The separate photo gallery is available at `/gallery.html` and is linked from the homepage navigation and footer. It displays all 12 submitted image files unchanged, with their full photographs visible.
The privacy page is available at `/privacy.html`. The included `render.yaml` lets you create a Render Blueprint with the same build and publish settings.

For the local development server, run:

```sh
npm run dev
```

## Content and images

Profile and contact details are configured together near the top of `src/App.tsx`. All 12 supplied photo files are stored with their original filenames and original image bytes in `public/images/`. Photos are not edited; thumbnails and the photo viewer display each entire image without cropping. Gallery image captions and alternative text are configured in `src/gallery.tsx`.

- `IMG_20241123_165304_121635.jpg`
- `IMG_20241207_155925.jpg`
- `Screenshot_20250106_181945_com_android_keyguard_.jpg`
- `FB_IMG_1769711657021.jpg`
- `IMG-20240811-WA0015_084513.jpg`
- `FB_IMG_1673541653628.jpg`
- `Screenshot_20250213_150033_com_android_keyguard_.jpg`
- `FB_IMG_1769711579958.jpg`
- `IMG_20241015_102628_122019.jpg`
- `IMG-20240811-WA0016_084517.jpg`
- `Collage_20250127_200215.jpg`
- `20240618130348_IMG_8474_125800.JPG`

No WhatsApp link is shown because a preferred WhatsApp number has not been confirmed. No social accounts, testimonials, awards, completed qualifications or business projects have been invented.
