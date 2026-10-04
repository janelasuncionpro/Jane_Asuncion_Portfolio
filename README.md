# Jane Asuncion - Angular Portfolio

Complete Angular portfolio source, technology logos, and production build.

## Run locally

1. Install Node.js compatible with Angular 21 (Node 22.12 or newer in the 22.x series).
2. Extract this ZIP and open the `Jane_Asuncion_Angular_Portfolio` folder in VS Code.
3. Open a terminal in that folder and run:

```sh
npm ci
npm start
```

4. Open http://localhost:4200 in your browser.

## Create a production build

```sh
npm run build
```

The generated website is in `dist/`. The included build can also be served using a static web server; do not open index.html directly with file://.

## Edit the portfolio

- `src/app.html`: layout and portfolio text.
- `src/main.ts`: Angular interactions and technology descriptions.
- `src/styles.css`: responsive layout, themes, and transitions.
- `public/tech/`: bundled technology logos from Devicon (https://devicon.dev/).

Features include project filters, expandable project contributions, a career timeline, selectable technology cards, light/dark themes, and reduced-motion support.

The source contains the portfolio's existing professional contact details. Hosting credentials, repository history, caches, and installed dependencies are excluded. Hosting this ZIP elsewhere does not inherit the private access controls of the hosted ChatGPT Site.
