# Jerlin G George: Portfolio

A responsive portfolio for a network engineer moving into network security development. It leads with production network operations experience and two security projects (a network intrusion detection system and a suspicious-login detector). Content comes only from the candidate's resume and LinkedIn profile.

Suggested repository name: `jerlin-network-security-portfolio`

## Stack

- Next.js 14 (App Router) and React 18
- Tailwind CSS 3
- No API keys, no environment variables, no external fonts or services

## Run locally

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production check, run `npm run build` then `npm start`.

## Customize

All text lives in `src/data/portfolio.js`: profile, about, projects, experience, skills, education and certifications. Edit that file and the site updates.

- Resume button: copy a PDF into `public/` and set `resume: "/your-file.pdf"` in `profile`.
- Colors: `tailwind.config.js` (`signal` is the accent, `ink` and `paper` are dark and light backgrounds).
- Theme: dark by default, with a toggle in the header. The choice is saved in the browser.
- Hero diagram: `src/components/PacketPath.jsx` (stage names are in the `stages` array).

## Data notes to confirm

- Extranet Supports end date: the resume says Feb 2026, LinkedIn says Mar 2026. The site uses the resume date.
- LinkedIn URL: the profile PDF and resume spell it differently. The site uses the profile PDF version.
- Location: the resume says Bengaluru, LinkedIn says Kerala. The site says Kerala, India.
- The "DCNE" certification is listed as written on LinkedIn. Add an issuer if you have one.

## Structure

```
src/
  app/        layout, page, global styles
  components/ Header, Hero, PacketPath, Projects, Experience, About, Skills, Education, Contact, Footer
  data/       portfolio.js (all content)
```
