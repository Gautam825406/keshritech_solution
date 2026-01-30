<!-- Auto-generated guidance for AI coding agents working on KeshriTech frontend -->
# KeshriTech — AI Coding Assistant Instructions

Purpose: concise, actionable guidance to get an AI coding agent productive in this repo.

- **Project type:** Vite + React single-page app. Entry: `src/main.jsx` (app root) and main UI in `src/App.jsx`.
- **Run locally:**
  - Install and run inside the workspace folder:
    - `cd keshritech-solution`
    - `npm install`
    - `npm run dev` (starts Vite dev server)
  - Build: `npm run build`. Preview build: `npm run preview`.

- **Key files to inspect:**
  - App entry: [keshritech-solution/src/main.jsx](keshritech-solution/src/main.jsx#L1)
  - Main component + inline styles: [keshritech-solution/src/App.jsx](keshritech-solution/src/App.jsx#L1)
  - Project scripts & lint rules: [keshritech-solution/package.json](keshritech-solution/package.json)

- **Patterns & conventions (specific to this codebase):**
  - `src/App.jsx` contains the bulk of the UI and large inline CSS inside a `<style>{...}</style>` block — edits to layout/visuals usually happen here rather than many small component CSS files.
  - Icons use `lucide-react` (dependency in repo root). Prefer using imported lucide icons as shown in `App.jsx`.
  - The project uses ESM modules (`type: "module"`) and React 19; use `createRoot` and functional components.

- **Secrets & integrations to handle carefully:**
  - Gemini API key: placeholder appears at [keshritech-solution/src/App.jsx](keshritech-solution/src/App.jsx#L16). Do not commit real keys. Prefer `VITE_` env vars and `import.meta.env` for local/dev usage.
  - WhatsApp contact number placeholders are at [keshritech-solution/src/App.jsx](keshritech-solution/src/App.jsx#L70) and [keshritech-solution/src/App.jsx](keshritech-solution/src/App.jsx#L76). Replace with real numbers in deploy configuration, not in public commits.

- **Developer workflows & commands:**
  - Lint: `npm run lint` (ESLint configured in the workspace). Run before commits.
  - Typical dev session: open `keshritech-solution` in editor, run `npm install`, then `npm run dev`.

- **When modifying code:**
  - Preserve the single-file approach for small UI changes (App.jsx). For larger features, create `src/components/*` and import them from `App.jsx`.
  - Keep styles consistent with existing inline theming variables (CSS variables defined in `App.jsx`).
  - Follow existing icon and component import patterns (see top of `App.jsx`).

- **Testing & safety notes for AI edits:**
  - Do not add or expose API keys; provide a code comment and instructions to load keys from `import.meta.env.VITE_GEMINI_API_KEY` instead.
  - If adding network requests, preserve the existing fetch pattern and catch blocks used in `App.jsx` to gracefully degrade the chat UI.

If anything above is unclear or you want the agent to perform specific edits (move inline styles to `src/index.css`, externalize Gemini key, or add a components folder), say which task to perform next.
