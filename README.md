# Portfolio – Nandakumar S

This is a single-page React + Vite portfolio scaffold pre-filled with Nandakumar's basic info, skills, and project links. It includes a dark-mode toggle, a simple contact form (mailto fallback), and a resume download link.

## Quick start

1. Install dependencies

```bash
npm install
```

2. Run locally

```bash
npm run dev
```

3. Build

```bash
npm run build
```

## What I added

- Updated hero, about, skills, projects and footer with provided details.
- Dark / light theme toggle (stored in `localStorage`).
- Contact form uses `mailto:` fallback. Replace with Formspree or your preferred endpoint if needed.
- `Download Resume` links to `/resume.pdf` — add your `resume.pdf` to the `public/` folder before deploying.
- Projects link to your GitHub repos (RentEase-Server, CyberCrate, Chat-App-Backend).

## Styling and color reveal

The site is intentionally minimal (black & white base). Use the `.color-reveal` helper class and hover over cards to reveal accent colors. Theme variables live in `src/index.css`.

## Deployment (Vercel)

1. Push your repo to GitHub.
2. Log in to Vercel and import the GitHub repository.
3. Set the build command to `npm run build` and the output directory to `dist`.
4. Add environment variables later if you enable a server or third-party services.

## Next steps for you

- Add `public/resume.pdf` to enable the resume download button.
- Add your photos to `public/images/` (use names `avatar1.jpg` and `avatar2.jpg`). The site will automatically show `avatar1.jpg` in the hero and `avatar2.jpg` in the about section when present.
- Replace or add project screenshots in `src/assets/` and update project cards in `src/components/Projects.jsx`.
- If you want a server-backed contact form, let me know and I can wire an API or a serverless function.

If you want, I can deploy this to Vercel for you (you'll need to authorize access), or I can finish polishing responsiveness and add screenshots next.
