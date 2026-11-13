# BUCSSA Website 2.0

Development environment: `local-test`

Source: uploaded `设计转开发/local-demo` (HTML/CSS/JS). This is a **local migration copy**, not a GitHub push.

## Technology

- React 19, TypeScript, Vite, and styled-components
- Local image and logo assets in `public/assets/`

## Local development
```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Homepage structure

- `Navigation.tsx`: protected navigation, scroll detection, brand morph, mobile menu, and language demo.
- `Hero.tsx`: Boston aerial Hero.
- `AboutSection.tsx`, `EventsSection.tsx`, `CommunitySection.tsx`, `StudentsSection.tsx`, `PartnersSection.tsx`: Homepage Sections 01–05.
- `Footer.tsx`: approved V2B Footer.
- `styles/legacy.css`: protected legacy navigation styles and global rules.

## Content and assets

- Replace Homepage images in `public/assets/home/`, then keep the existing filename or update the matching component path.
- Edit section text in its corresponding component file.
- Do not change Navigation markup, its layout, or its morph timings without visual review. Its measured brand width must only be captured in the expanded Hero state.

No backend, deployment, or automatic GitHub push is configured.
