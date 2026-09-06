# Poridhi City & Puku Learning World

An interactive Three.js learning city using Poridhi’s violet and indigo brand system. The main scene keeps only the logo and icon navigation visible. Instructional text appears only when a learner opens a room or mission control.

## Run locally

Use Node.js 24 LTS and npm.

```sh
npm ci
npm run dev
```

Open the local address printed by the server. The default is `http://localhost:3000`.

```sh
npm run build
npm run test:learning
npm run typecheck
```

The application uses React 19, TypeScript, Three.js, Vinext/Vite, and the included Base UI/Shadcn primitives. The generated Sites/Cloudflare configuration is retained. `npm run build` produces `dist/client` and a Worker entry in `dist/server`.

## City navigation

Select a destination icon to focus its building. Select the door icon to let Puku enter. The accessibility icon enables instant travel. WASD or arrow keys move Puku; dragging orbits the camera. Icon controls have accessible names and hover titles.

| Destination | Route | Purpose |
| --- | --- | --- |
| Poridhi City | `/` | Larger connected outer world, original rooms and Course Academy |
| Course Academy | `/course` | Four milestones and 19 seed interactive curriculum modules |
| Infrastructure Lab | `/lab` | Preserved infrastructure map and four lab simulations |
| Knowledge Library | `/library` | Original research shelves, chapters and knowledge graph |
| Puku AI Hub | `/ai-hub` | Original local topic guide; no live AI service |
| Challenge Arena | `/arena` | Original capacity challenge |
| Knowledge Locker | `/locker` | Local bookmarks, notes and learning history |
| Experience Center | `/center` | Original connected interior campus map |

Inside the Course Academy, the book icon opens mission controls, the map icon opens the curriculum, and the compass returns to the city. Machine interactions move Puku and change the corresponding training installation. The four station icons also open contextual controls. In other rooms, the arrow icon opens the selected room’s original interface.

## Curriculum and state

The four milestone names and `Your First Agentic Workflow` follow the supplied brief. All remaining module names, lessons, challenges, values and placements are explicitly seed content. Milestone 1 has seven modules; the other three have four each.

The hierarchy is recorded as Course → Career Track → Milestone → Module → Lesson → Lab → Live Session → Challenge → Assessment → Project in `docs/module-blueprints.json`. Live-session fields are curriculum placeholders, not connected video or collaborative sessions.

- `app/puku/curriculum.ts`: brand tokens, milestones, seed modules, objectives, dialogue and hints.
- `app/puku/engine.ts`: deterministic, immutable learning state transitions and completion criteria.
- `app/puku/scene.tsx`: reusable machines, Puku travel, state-driven materials and camera behavior.
- `app/puku/character.ts`: articulated procedural Puku character and real-time animation.
- `app/puku/app.tsx`: icon navigation, optional contextual controls, accessibility and browser-local persistence.
- `app/city.tsx` and `app/world.tsx`: outer city, buildings and original room environments.
- `app/experience-center.tsx` and `app/panels.tsx`: preserved original room interactions.

No lesson is completed merely by opening it. Completion is granted only by a successful simulation state. All 19 module success paths, plus representative failure/recovery and state invariants, are checked by `scripts/test-learning.mjs`.

## Brand system

Colors were read from rendered controls on `https://poridhi.io/` on September 6, 2026:

- Primary violet: `#8940F8` (login control).
- Brand blue: `#484FA3` (course control).
- CTA gradient: `262deg, #5100B3 2.2%, #10187A 93.83%` (Start Lab).
- Primary white: `#FDFDFD`.
- Supporting dark ink: `#0F172A`.

The world adds labeled semantic colors for success, warning and failure. They do not replace the primary brand palette.

## Progress and data

All simulations are browser-local educational models. They do not execute real shell commands, manipulate real project files, invoke Claude Code, operate infrastructure, or deploy learner services. Approval actions simulate permission boundaries and never grant real access.

Progress is stored under `poridhi-puku-world-v1`; the original rooms retain `poridhi-locker-v1`. Records include actions, recoverable failures, hints, incomplete module exits, replays and competency events. No analytics leave the browser. A learning-record export is available in the journey panel. Cross-device progress, accounts, instructor collaboration and live Puku AI require backend integration.

## Character assets and Blender

`assets/puku-low.glb`, `puku-medium.glb`, and `puku-high.glb` are reusable exports with 19 named animation clips. They use a rigid-part hierarchy, PBR materials and geometry UVs. Clips are prototype motion and gesture bases, not final hand-authored cinematic animation or a skinned facial blendshape rig.

Regenerate assets:

```sh
npm run assets:export
```

Build an editable Blender scene (requires a separately installed Blender):

```sh
blender --background --python scripts/blender-import.py -- assets/puku-medium.glb assets/puku-studio.blend
```

The included Blender script has not been executed in this environment. The delivered GLB files are generated and structurally checked. The live app uses the procedural character for fast iteration, while GLB files are available for an art pipeline.

## Production notes

See `docs/MODULE_BLUEPRINTS.md` for 23 specification fields per module and `docs/PRODUCTION.md` for implementation boundaries and next production work. This is a functional architectural and learning prototype, not a photorealistic final production environment.

The source download excludes dependencies, local build products, Git history and credentials. Its hosting manifest is sanitized for portability; retain the original project manifest only when updating the same hosted Site.
