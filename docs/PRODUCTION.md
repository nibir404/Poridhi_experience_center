# Production architecture and boundaries

## Navigation layers

The outer city is an enlarged 172 × 177 unit paved area with roads, surrounding buildings, seven destinations and an embodied Puku character. Course Academy opens the curriculum world. Infrastructure Lab opens the preserved lab map. Library, AI Hub, Arena and Locker remain separate destinations with their original functionality. Returning to the city preserves learning progress on the same browser origin.

The visible default interface is deliberately limited to the Poridhi wordmark and icon navigation. Visible instructional text is opt-in through mission or room controls. Programmatic labels remain available to assistive technology. World-space textual signage is hidden as requested.

## Separation of concerns

Content and canonical hierarchy are independent from deterministic learning logic. React dispatches a typed action; the character travels to a station; arrival applies the same state transition used by text-mode controls and WebMCP. Scene objects visualize the result through capacity, gate positions, file artifacts, node health, specialist behavior and conveyor state. State changes are not dependent on frame rate.

The city uses simple kinematic travel via road waypoints. Free movement has bounds but no general-purpose mesh collision or pathfinding. The curriculum workshop uses bounded movement and station targets. Future production should add a navigation mesh, capsule collision and route persistence without changing learning reducers.

## Learning progression

19 seed module state machines provide meaningful recoverable failure. Completion requires each module’s explicit competency condition. Visually, modules activate machine state and completion of all modules in a milestone changes its district lighting. The sample allows all modules to be explored in any order; a production prerequisite graph can restrict progression using the same completion IDs.

Hints are learner-requested and progress from a nudge to a stronger scaffold. They do not immediately execute the solution. Analytics prioritize demonstrated competency, actions, failures and recovery over session length. Richer time-to-solve and repeated-error analyses can be derived from timestamps after the backend event schema is agreed.

## 3D asset strategy

Puku has an articulated head, torso, arms, hands, legs, feet, a face plate, eyes and brows. Runtime behaviors include idle, walk, run, typing/operating, carrying context, curiosity, confusion and celebration. Low, medium and high GLB exports include 19 named reusable clips. Face expressions are runtime transforms rather than facial blendshapes. Rigid-part articulation is suitable for this robot-like silhouette; final deformation and cinematic acting require a dedicated art pass.

Geometry uses UV-bearing primitives, real-world-inspired scale and shared PBR materials. The app offers low/medium/high rendering quality; these adjust pixel ratio and shadows. They are not automatic mesh LOD swapping. Exported GLBs provide distinct mesh densities for a future LOD loader.

The included Blender script imports a GLB, creates a studio floor, area lights and a 35 mm camera, and saves an editable `.blend`. It is source for an art-production handoff, not a claim that Blender production has been completed.

## Audio and accessibility

Sounds are synthesized locally, muted by default, with restrained stereo positions and short action/failure/success cues. All results have text equivalents. No downloaded audio or microphone permissions are required. The production extension is spatial panning tied to scene coordinates and an authored Puku sound vocabulary.

The curriculum supports reduced motion, paused simulation, slower action speed, icon controls with programmatic names, keyboard navigation and a text interaction alternative. There are no reaction-time assessments. Course text-mode controls run the same reducer immediately without requiring WebGL.

## Services not connected

- Real Poridhi curriculum and account data.
- Live Puku language-model conversation or adaptive tutoring model.
- Real Claude Code or sandbox command execution.
- Cross-device memory and enrollment-aware progress.
- Instructor avatars, live sessions and collaborative experiments.
- Backend analytics or actual production incident systems.

These are intentionally identified in the product and source documentation. Seed simulations must remain labeled as training when real services are added. A future API should preserve the distinction between staging an operation, requesting authorization and executing it.

## Source integrity

The private Site is built from a committed source snapshot. The downloadable archive excludes Git, dependency directories, compiler caches, local runtime folders and credentials. It includes reproducible tests, asset exporters, source, lockfile and this production plan. The portable archive’s `.openai/hosting.json` omits the original Site project ID.
