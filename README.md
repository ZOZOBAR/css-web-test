# BUCSSA Website Test

## Overview

BUCSSA Website Test is an independent frontend development and testing repository for the BUCSSA website.

It is used for:

- Figma design implementation
- New feature development and experimentation
- UI/UX visual refinement
- Responsive layout testing
- Interaction prototype validation

This is an independent development and testing repository. It is not the official production website of BUCSSA.

## Current Features

- Hero section
- Responsive navigation
- Floating navigation on scroll
- Mobile hamburger menu
- Language switch UI (demo only)
- Global footer with social media icons
- Glass-style UI controls

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure

```text
.
├── assets/          # Images, logo, and social media SVG icons
├── index.html       # Page structure
├── styles.css       # Visual styles and responsive layouts
├── script.js        # Navigation and demo interactions
├── README.md        # Project documentation
└── CHANGELOG.md     # Development changelog
```

## Local Development

No dependencies or build step are required.

1. Clone or download this repository.
2. Open `index.html` in a modern browser, or serve the project directory with a local static server.
3. For example, run `python3 -m http.server 5500` in the project directory and visit `http://localhost:5500`.

## Deployment

This static site can be deployed with GitHub Pages. In the repository settings, open **Pages**, select **Deploy from a branch**, and choose the branch and folder containing `index.html` (typically the repository root on `main`).

Verify the generated GitHub Pages URL after saving the settings. This repository does not assume that a Pages deployment is already live.

## Development Status

Current version: **v0.1.0** (initial testing release).

## Changelog

See the [CHANGELOG.md](CHANGELOG.md) for completed changes and planned follow-up work.
