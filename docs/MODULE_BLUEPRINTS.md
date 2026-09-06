# Puku Learning World — module production blueprint

This document specifies all 19 seed modules using the 23 requested production fields. The four milestone titles and first module follow the supplied brief; other titles and placements are seed content. These are deterministic learning simulations, not real infrastructure operations.

## Milestone 1 · Your First Agentic Workflow

**Hierarchy:** course: Agentic Software Engineering → careerTrack: Forward Deployed Engineering Career Track → milestone: Agentic Software Engineering → module: Your First Agentic Workflow → lesson: From conversation to execution → lab: Agent Workshop → liveSession: Instructor workshop: Your First Agentic Workflow (seed placeholder; not connected) → challenge: Bring the workshop online. Observe the files, plan a fix, edit the project, then verify the result. → assessment: Demonstrate the terminal success condition through the stateful simulation. → project: Project: Activate the Workshop

### 01 Learning objective

Distinguish a response from an agentic loop by inspecting, changing and verifying a project.

### 02 Story premise

The workshop sign-in service is broken. Puku can describe the problem, but the machine only starts when the project is repaired and verified.

### 03 Environment concept

Agent Workshop, inside The Agent Workshop. The environment visualizes its actual training state.

### 04 Puku role

Learner and operator: approaches the selected machine, handles context artifacts, inspects, performs the action, and reacts to the result.

### 05 Interactive objects

- Project filesystem
- Planning console
- Code terminal
- Verification machine

### 06 Core mechanic

Project evidence unlocks a plan, an edit changes the file stack, and verification activates the facility.

### 07 Teaching mechanic

Observe a cause, make an intentional decision, experience its consequence, recover from a non-punitive failure, then verify the result.

### 08 Simulation

```json
{
  "kind": "workflow",
  "actions": [
    "Inspect project",
    "Ask for a description",
    "Plan the repair",
    "Edit project files",
    "Verify the repair"
  ],
  "model": "Deterministic browser-local state machine. No real shell, deployment, Claude Code session or production service is operated."
}
```

### 09 Failure states

Actions in the wrong order are rejected; a description never changes files.

### 10 Recovery flow

Observe → plan → edit → verify.

### 11 Challenge

Bring the workshop online. Observe the files, plan a fix, edit the project, then verify the result.

### 12 Assessment

Completion requires the module-specific success branch in transition(). Merely opening, watching or spending time in a module does not earn completion.

### 13 Puku dialogue

```json
{
  "opening": "The workshop sign-in service is broken. Puku can describe the problem, but the machine only starts when the project is repaired and verified.",
  "hints": [
    "Look at the project before changing it.",
    "A plan needs evidence. Inspect the files first.",
    "Observe → plan → edit → verify."
  ],
  "reflection": "A chatbot response describes an answer. An agentic workflow changes state through tools and checks the result."
}
```

### 14 Camera direction

Elevated third-person framing follows Puku’s movement. Close view centers the active machine; the map reveals district connections. Reduced motion uses instant travel.

### 15 Animation requirements

- Idle
- Walk
- Run
- Inspect
- Type
- Grab
- Think
- Confused
- Success
- Celebrate

### 16 VFX requirements

Project file stack, active route, verified green check.

### 17 Sound requirements

Soft localized action, failure and success tones. Muted by default. Every outcome has an equivalent caption.

### 18 UI requirements

A short mission premise, contextual machine controls, labeled system state and optional journey navigation. The visible 3D installation remains central.

### 19 Accessibility requirements

- Keyboard-operable actions
- Text interaction mode
- Reduced motion
- Pause and replay
- 0.25×–1.5× simulation speed
- Persistent captions
- Semantic state labels beyond color
- No time-limited reflex tasks

### 20 Analytics events

- module_entered
- action_performed (action, outcome, timestamp)
- hint_used
- module_left_incomplete
- mission_replayed
- competency_demonstrated

### 21 Required 3D assets

- Project filesystem
- Planning console
- Code terminal
- Verification machine
- Puku articulated character
- District shell
- Learning installation

### 22 Required reusable assets

- Puku low/medium/high GLB
- Character animation clips
- Terminal station
- Physical gate
- Context blocks
- Memory vault
- Server rack
- Assembly conveyor
- Label texture generator
- Semantic materials

### 23 Technical implementation notes

```json
{
  "content": "app/puku/curriculum.ts",
  "learning": "app/puku/engine.ts",
  "environment": "app/puku/scene.tsx",
  "character": "app/puku/character.ts",
  "interface": "app/puku/app.tsx",
  "tests": "scripts/test-learning.mjs",
  "persistence": "Versioned localStorage. Replace with authenticated storage for cross-device accounts.",
  "limits": "Seed training simulation; procedural rigid-part character rig; no live instructor, external AI, real command execution or backend analytics."
}
```

## Milestone 1 · Permission Modes & Autonomy

**Hierarchy:** course: Agentic Software Engineering → careerTrack: Forward Deployed Engineering Career Track → milestone: Agentic Software Engineering → module: Permission Modes & Autonomy → lesson: Capability, scope and approval → lab: Permission Checkpoint → liveSession: Instructor workshop: Permission Modes & Autonomy (seed placeholder; not connected) → challenge: Inspect the policy, attempt the restricted write, request approval, and complete an authorized write. → assessment: Demonstrate the terminal success condition through the stateful simulation. → project: Project: Activate the Workshop

### 01 Learning objective

Match an operation to its permitted scope and request approval before a write.

### 02 Story premise

A security gate separates Puku from the project. Reading is allowed; modifying files requires a deliberate decision.

### 03 Environment concept

Permission Checkpoint, inside The Agent Workshop. The environment visualizes its actual training state.

### 04 Puku role

Learner and operator: approaches the selected machine, handles context artifacts, inspects, performs the action, and reacts to the result.

### 05 Interactive objects

- Policy reader
- Access gate
- Approval checkpoint
- Project file

### 06 Core mechanic

A scoped approval opens a physical gate for a write.

### 07 Teaching mechanic

Observe a cause, make an intentional decision, experience its consequence, recover from a non-punitive failure, then verify the result.

### 08 Simulation

```json
{
  "kind": "permissions",
  "actions": [
    "Read access policy",
    "Attempt file write",
    "Request scoped approval"
  ],
  "model": "Deterministic browser-local state machine. No real shell, deployment, Claude Code session or production service is operated."
}
```

### 09 Failure states

An attempted write without authorization leaves the gate closed.

### 10 Recovery flow

Request approval before retrying the write.

### 11 Challenge

Inspect the policy, attempt the restricted write, request approval, and complete an authorized write.

### 12 Assessment

Completion requires the module-specific success branch in transition(). Merely opening, watching or spending time in a module does not earn completion.

### 13 Puku dialogue

```json
{
  "opening": "A security gate separates Puku from the project. Reading is allowed; modifying files requires a deliberate decision.",
  "hints": [
    "Try the read operation first.",
    "A blocked write is evidence of a boundary, not a broken tool.",
    "Request approval before retrying the write."
  ],
  "reflection": "Autonomy changes how actions are authorized. Capability does not imply permission."
}
```

### 14 Camera direction

Elevated third-person framing follows Puku’s movement. Close view centers the active machine; the map reveals district connections. Reduced motion uses instant travel.

### 15 Animation requirements

- Idle
- Walk
- Run
- Inspect
- Type
- Grab
- Think
- Confused
- Success
- Celebrate

### 16 VFX requirements

Gate stays down on blocked operations and rises after approval.

### 17 Sound requirements

Soft localized action, failure and success tones. Muted by default. Every outcome has an equivalent caption.

### 18 UI requirements

A short mission premise, contextual machine controls, labeled system state and optional journey navigation. The visible 3D installation remains central.

### 19 Accessibility requirements

- Keyboard-operable actions
- Text interaction mode
- Reduced motion
- Pause and replay
- 0.25×–1.5× simulation speed
- Persistent captions
- Semantic state labels beyond color
- No time-limited reflex tasks

### 20 Analytics events

- module_entered
- action_performed (action, outcome, timestamp)
- hint_used
- module_left_incomplete
- mission_replayed
- competency_demonstrated

### 21 Required 3D assets

- Policy reader
- Access gate
- Approval checkpoint
- Project file
- Puku articulated character
- District shell
- Learning installation

### 22 Required reusable assets

- Puku low/medium/high GLB
- Character animation clips
- Terminal station
- Physical gate
- Context blocks
- Memory vault
- Server rack
- Assembly conveyor
- Label texture generator
- Semantic materials

### 23 Technical implementation notes

```json
{
  "content": "app/puku/curriculum.ts",
  "learning": "app/puku/engine.ts",
  "environment": "app/puku/scene.tsx",
  "character": "app/puku/character.ts",
  "interface": "app/puku/app.tsx",
  "tests": "scripts/test-learning.mjs",
  "persistence": "Versioned localStorage. Replace with authenticated storage for cross-device accounts.",
  "limits": "Seed training simulation; procedural rigid-part character rig; no live instructor, external AI, real command execution or backend analytics."
}
```

## Milestone 1 · Project Instructions with CLAUDE.md

**Hierarchy:** course: Agentic Software Engineering → careerTrack: Forward Deployed Engineering Career Track → milestone: Agentic Software Engineering → module: Project Instructions with CLAUDE.md → lesson: Conventions become constraints → lab: Engineering Constitution → liveSession: Instructor workshop: Project Instructions with CLAUDE.md (seed placeholder; not connected) → challenge: Read CLAUDE.md, try a conflicting file type, and then create a compliant TypeScript file. → assessment: Demonstrate the terminal success condition through the stateful simulation. → project: Project: Activate the Workshop

### 01 Learning objective

Apply persistent project conventions and recognize a conflicting change.

### 02 Story premise

The workshop has a TypeScript convention. Puku must inspect its engineering constitution before building.

### 03 Environment concept

Engineering Constitution, inside The Agent Workshop. The environment visualizes its actual training state.

### 04 Puku role

Learner and operator: approaches the selected machine, handles context artifacts, inspects, performs the action, and reacts to the result.

### 05 Interactive objects

- CLAUDE.md console
- JavaScript builder
- TypeScript builder
- Validation gate

### 06 Core mechanic

A project convention accepts TypeScript and rejects a conflicting file type.

### 07 Teaching mechanic

Observe a cause, make an intentional decision, experience its consequence, recover from a non-punitive failure, then verify the result.

### 08 Simulation

```json
{
  "kind": "rules",
  "actions": [
    "Read CLAUDE.md",
    "Build JavaScript file",
    "Build TypeScript file"
  ],
  "model": "Deterministic browser-local state machine. No real shell, deployment, Claude Code session or production service is operated."
}
```

### 09 Failure states

Unread instructions or a JavaScript output trigger a visible conflict.

### 10 Recovery flow

Use the TypeScript builder after inspecting the rule.

### 11 Challenge

Read CLAUDE.md, try a conflicting file type, and then create a compliant TypeScript file.

### 12 Assessment

Completion requires the module-specific success branch in transition(). Merely opening, watching or spending time in a module does not earn completion.

### 13 Puku dialogue

```json
{
  "opening": "The workshop has a TypeScript convention. Puku must inspect its engineering constitution before building.",
  "hints": [
    "Read the constitution on the center console.",
    "The rule names a language. Compare it with your output.",
    "Use the TypeScript builder after inspecting the rule."
  ],
  "reflection": "Project instructions influence work across tasks, but real enforcement also needs validation and tests."
}
```

### 14 Camera direction

Elevated third-person framing follows Puku’s movement. Close view centers the active machine; the map reveals district connections. Reduced motion uses instant travel.

### 15 Animation requirements

- Idle
- Walk
- Run
- Inspect
- Type
- Grab
- Think
- Confused
- Success
- Celebrate

### 16 VFX requirements

Validator gate changes from violet to red or green.

### 17 Sound requirements

Soft localized action, failure and success tones. Muted by default. Every outcome has an equivalent caption.

### 18 UI requirements

A short mission premise, contextual machine controls, labeled system state and optional journey navigation. The visible 3D installation remains central.

### 19 Accessibility requirements

- Keyboard-operable actions
- Text interaction mode
- Reduced motion
- Pause and replay
- 0.25×–1.5× simulation speed
- Persistent captions
- Semantic state labels beyond color
- No time-limited reflex tasks

### 20 Analytics events

- module_entered
- action_performed (action, outcome, timestamp)
- hint_used
- module_left_incomplete
- mission_replayed
- competency_demonstrated

### 21 Required 3D assets

- CLAUDE.md console
- JavaScript builder
- TypeScript builder
- Validation gate
- Puku articulated character
- District shell
- Learning installation

### 22 Required reusable assets

- Puku low/medium/high GLB
- Character animation clips
- Terminal station
- Physical gate
- Context blocks
- Memory vault
- Server rack
- Assembly conveyor
- Label texture generator
- Semantic materials

### 23 Technical implementation notes

```json
{
  "content": "app/puku/curriculum.ts",
  "learning": "app/puku/engine.ts",
  "environment": "app/puku/scene.tsx",
  "character": "app/puku/character.ts",
  "interface": "app/puku/app.tsx",
  "tests": "scripts/test-learning.mjs",
  "persistence": "Versioned localStorage. Replace with authenticated storage for cross-device accounts.",
  "limits": "Seed training simulation; procedural rigid-part character rig; no live instructor, external AI, real command execution or backend analytics."
}
```

## Milestone 1 · Context Windows & Token Budgets

**Hierarchy:** course: Agentic Software Engineering → careerTrack: Forward Deployed Engineering Career Track → milestone: Agentic Software Engineering → module: Context Windows & Token Budgets → lesson: Finite working context → lab: Context Laboratory → liveSession: Instructor workshop: Context Windows & Token Budgets (seed placeholder; not connected) → challenge: Add information until the chamber overflows, summarize it, then verify that working context fits. → assessment: Demonstrate the terminal success condition through the stateful simulation. → project: Project: Activate the Workshop

### 01 Learning objective

Manage finite working context without discarding the information needed for a task.

### 02 Story premise

Puku has a room full of files and messages. Its capacity is finite; adding more is not always helpful.

### 03 Environment concept

Context Laboratory, inside The Agent Workshop. The environment visualizes its actual training state.

### 04 Puku role

Learner and operator: approaches the selected machine, handles context artifacts, inspects, performs the action, and reacts to the result.

### 05 Interactive objects

- Transparent context chamber
- File dispenser
- Summary compressor
- Budget meter

### 06 Core mechanic

Each action adds 25 units to a 100-unit chamber. Compression retains 40% of occupied context.

### 07 Teaching mechanic

Observe a cause, make an intentional decision, experience its consequence, recover from a non-punitive failure, then verify the result.

### 08 Simulation

```json
{
  "kind": "context",
  "actions": [
    "Add a document · 25 units",
    "Summarize context",
    "Remove a document",
    "Verify working context"
  ],
  "model": "Deterministic browser-local state machine. No real shell, deployment, Claude Code session or production service is operated."
}
```

### 09 Failure states

Context above 100 overflows; empty or still-overfull context cannot pass verification.

### 10 Recovery flow

Summarize the overloaded chamber, then verify.

### 11 Challenge

Add information until the chamber overflows, summarize it, then verify that working context fits.

### 12 Assessment

Completion requires the module-specific success branch in transition(). Merely opening, watching or spending time in a module does not earn completion.

### 13 Puku dialogue

```json
{
  "opening": "Puku has a room full of files and messages. Its capacity is finite; adding more is not always helpful.",
  "hints": [
    "Each document consumes 25 training units. The chamber holds 100.",
    "Observe what happens after the fifth document.",
    "Summarize the overloaded chamber, then verify."
  ],
  "reflection": "Context is a finite working set. Summarization reduces size but can lose detail, so retain what the task needs."
}
```

### 14 Camera direction

Elevated third-person framing follows Puku’s movement. Close view centers the active machine; the map reveals district connections. Reduced motion uses instant travel.

### 15 Animation requirements

- Idle
- Walk
- Run
- Inspect
- Type
- Grab
- Think
- Confused
- Success
- Celebrate

### 16 VFX requirements

Physical blocks extend above the chamber ceiling; the last block represents fractional occupancy.

### 17 Sound requirements

Soft localized action, failure and success tones. Muted by default. Every outcome has an equivalent caption.

### 18 UI requirements

A short mission premise, contextual machine controls, labeled system state and optional journey navigation. The visible 3D installation remains central.

### 19 Accessibility requirements

- Keyboard-operable actions
- Text interaction mode
- Reduced motion
- Pause and replay
- 0.25×–1.5× simulation speed
- Persistent captions
- Semantic state labels beyond color
- No time-limited reflex tasks

### 20 Analytics events

- module_entered
- action_performed (action, outcome, timestamp)
- hint_used
- module_left_incomplete
- mission_replayed
- competency_demonstrated

### 21 Required 3D assets

- Transparent context chamber
- File dispenser
- Summary compressor
- Budget meter
- Puku articulated character
- District shell
- Learning installation

### 22 Required reusable assets

- Puku low/medium/high GLB
- Character animation clips
- Terminal station
- Physical gate
- Context blocks
- Memory vault
- Server rack
- Assembly conveyor
- Label texture generator
- Semantic materials

### 23 Technical implementation notes

```json
{
  "content": "app/puku/curriculum.ts",
  "learning": "app/puku/engine.ts",
  "environment": "app/puku/scene.tsx",
  "character": "app/puku/character.ts",
  "interface": "app/puku/app.tsx",
  "tests": "scripts/test-learning.mjs",
  "persistence": "Versioned localStorage. Replace with authenticated storage for cross-device accounts.",
  "limits": "Seed training simulation; procedural rigid-part character rig; no live instructor, external AI, real command execution or backend analytics."
}
```

## Milestone 1 · Persistent Memory & Sessions

**Hierarchy:** course: Agentic Software Engineering → careerTrack: Forward Deployed Engineering Career Track → milestone: Agentic Software Engineering → module: Persistent Memory & Sessions → lesson: Short-term versus durable knowledge → lab: Memory Archive → liveSession: Instructor workshop: Persistent Memory & Sessions (seed placeholder; not connected) → challenge: Create a finding, save it to memory, end the session, retrieve the finding, and verify it. → assessment: Demonstrate the terminal success condition through the stateful simulation. → project: Project: Activate the Workshop

### 01 Learning objective

Preserve project knowledge across a session boundary and retrieve it when needed.

### 02 Story premise

The session is ending. Puku must decide what deserves a place in the archive.

### 03 Environment concept

Memory Archive, inside The Agent Workshop. The environment visualizes its actual training state.

### 04 Puku role

Learner and operator: approaches the selected machine, handles context artifacts, inspects, performs the action, and reacts to the result.

### 05 Interactive objects

- Working memory desk
- Archive vault
- Session door
- Retrieval arm

### 06 Core mechanic

A finding moves from session context into an archive, then returns after a session reset.

### 07 Teaching mechanic

Observe a cause, make an intentional decision, experience its consequence, recover from a non-punitive failure, then verify the result.

### 08 Simulation

```json
{
  "kind": "memory",
  "actions": [
    "Create a finding",
    "Store in archive",
    "End this session",
    "Retrieve memory",
    "Verify recall"
  ],
  "model": "Deterministic browser-local state machine. No real shell, deployment, Claude Code session or production service is operated."
}
```

### 09 Failure states

Ending a session without archiving loses the finding. Empty archives cannot be retrieved.

### 10 Recovery flow

Archive → end session → retrieve → verify.

### 11 Challenge

Create a finding, save it to memory, end the session, retrieve the finding, and verify it.

### 12 Assessment

Completion requires the module-specific success branch in transition(). Merely opening, watching or spending time in a module does not earn completion.

### 13 Puku dialogue

```json
{
  "opening": "The session is ending. Puku must decide what deserves a place in the archive.",
  "hints": [
    "Create a finding before archiving it.",
    "Ending a session clears short-term context.",
    "Archive → end session → retrieve → verify."
  ],
  "reflection": "Persistent memory survives a session, but must be retrieved into working context to be useful."
}
```

### 14 Camera direction

Elevated third-person framing follows Puku’s movement. Close view centers the active machine; the map reveals district connections. Reduced motion uses instant travel.

### 15 Animation requirements

- Idle
- Walk
- Run
- Inspect
- Type
- Grab
- Think
- Confused
- Success
- Celebrate

### 16 VFX requirements

Working blocks disappear at session end; archived block remains visible.

### 17 Sound requirements

Soft localized action, failure and success tones. Muted by default. Every outcome has an equivalent caption.

### 18 UI requirements

A short mission premise, contextual machine controls, labeled system state and optional journey navigation. The visible 3D installation remains central.

### 19 Accessibility requirements

- Keyboard-operable actions
- Text interaction mode
- Reduced motion
- Pause and replay
- 0.25×–1.5× simulation speed
- Persistent captions
- Semantic state labels beyond color
- No time-limited reflex tasks

### 20 Analytics events

- module_entered
- action_performed (action, outcome, timestamp)
- hint_used
- module_left_incomplete
- mission_replayed
- competency_demonstrated

### 21 Required 3D assets

- Working memory desk
- Archive vault
- Session door
- Retrieval arm
- Puku articulated character
- District shell
- Learning installation

### 22 Required reusable assets

- Puku low/medium/high GLB
- Character animation clips
- Terminal station
- Physical gate
- Context blocks
- Memory vault
- Server rack
- Assembly conveyor
- Label texture generator
- Semantic materials

### 23 Technical implementation notes

```json
{
  "content": "app/puku/curriculum.ts",
  "learning": "app/puku/engine.ts",
  "environment": "app/puku/scene.tsx",
  "character": "app/puku/character.ts",
  "interface": "app/puku/app.tsx",
  "tests": "scripts/test-learning.mjs",
  "persistence": "Versioned localStorage. Replace with authenticated storage for cross-device accounts.",
  "limits": "Seed training simulation; procedural rigid-part character rig; no live instructor, external AI, real command execution or backend analytics."
}
```

## Milestone 1 · Tools, Inputs & Outputs

**Hierarchy:** course: Agentic Software Engineering → careerTrack: Forward Deployed Engineering Career Track → milestone: Agentic Software Engineering → module: Tools, Inputs & Outputs → lesson: Choose the right capability → lab: Agent Tool Lab → liveSession: Instructor workshop: Tools, Inputs & Outputs (seed placeholder; not connected) → challenge: Inspect the task, choose the filesystem tool, read the log, and verify the diagnosis. → assessment: Demonstrate the terminal success condition through the stateful simulation. → project: Project: Activate the Workshop

### 01 Learning objective

Choose a tool whose capability fits a task and use its output as evidence.

### 02 Story premise

Puku needs to discover why a build failed. A browser cannot inspect a local build log in this training setup.

### 03 Environment concept

Agent Tool Lab, inside The Agent Workshop. The environment visualizes its actual training state.

### 04 Puku role

Learner and operator: approaches the selected machine, handles context artifacts, inspects, performs the action, and reacts to the result.

### 05 Interactive objects

- Task brief
- Browser port
- Filesystem port
- Build log terminal

### 06 Core mechanic

A task is matched to the filesystem capability; its log output supplies diagnosis evidence.

### 07 Teaching mechanic

Observe a cause, make an intentional decision, experience its consequence, recover from a non-punitive failure, then verify the result.

### 08 Simulation

```json
{
  "kind": "tools",
  "actions": [
    "Inspect the task",
    "Connect browser tool",
    "Connect filesystem tool",
    "Read build.log",
    "Verify diagnosis"
  ],
  "model": "Deterministic browser-local state machine. No real shell, deployment, Claude Code session or production service is operated."
}
```

### 09 Failure states

Browser selection cannot read the local log in this training scenario.

### 10 Recovery flow

Inspect task → filesystem → read log → verify.

### 11 Challenge

Inspect the task, choose the filesystem tool, read the log, and verify the diagnosis.

### 12 Assessment

Completion requires the module-specific success branch in transition(). Merely opening, watching or spending time in a module does not earn completion.

### 13 Puku dialogue

```json
{
  "opening": "Puku needs to discover why a build failed. A browser cannot inspect a local build log in this training setup.",
  "hints": [
    "The evidence is in a local build log.",
    "Choose the tool that can read project files.",
    "Inspect task → filesystem → read log → verify."
  ],
  "reflection": "Tools have specific inputs, outputs and scopes. Use a tool because its capability matches the task."
}
```

### 14 Camera direction

Elevated third-person framing follows Puku’s movement. Close view centers the active machine; the map reveals district connections. Reduced motion uses instant travel.

### 15 Animation requirements

- Idle
- Walk
- Run
- Inspect
- Type
- Grab
- Think
- Confused
- Success
- Celebrate

### 16 VFX requirements

Project evidence stack changes after a successful read.

### 17 Sound requirements

Soft localized action, failure and success tones. Muted by default. Every outcome has an equivalent caption.

### 18 UI requirements

A short mission premise, contextual machine controls, labeled system state and optional journey navigation. The visible 3D installation remains central.

### 19 Accessibility requirements

- Keyboard-operable actions
- Text interaction mode
- Reduced motion
- Pause and replay
- 0.25×–1.5× simulation speed
- Persistent captions
- Semantic state labels beyond color
- No time-limited reflex tasks

### 20 Analytics events

- module_entered
- action_performed (action, outcome, timestamp)
- hint_used
- module_left_incomplete
- mission_replayed
- competency_demonstrated

### 21 Required 3D assets

- Task brief
- Browser port
- Filesystem port
- Build log terminal
- Puku articulated character
- District shell
- Learning installation

### 22 Required reusable assets

- Puku low/medium/high GLB
- Character animation clips
- Terminal station
- Physical gate
- Context blocks
- Memory vault
- Server rack
- Assembly conveyor
- Label texture generator
- Semantic materials

### 23 Technical implementation notes

```json
{
  "content": "app/puku/curriculum.ts",
  "learning": "app/puku/engine.ts",
  "environment": "app/puku/scene.tsx",
  "character": "app/puku/character.ts",
  "interface": "app/puku/app.tsx",
  "tests": "scripts/test-learning.mjs",
  "persistence": "Versioned localStorage. Replace with authenticated storage for cross-device accounts.",
  "limits": "Seed training simulation; procedural rigid-part character rig; no live instructor, external AI, real command execution or backend analytics."
}
```

## Milestone 1 · Project: Activate the Workshop

**Hierarchy:** course: Agentic Software Engineering → careerTrack: Forward Deployed Engineering Career Track → milestone: Agentic Software Engineering → module: Project: Activate the Workshop → lesson: From guided work to an independent repair → lab: Workshop Control Room → liveSession: Instructor workshop: Project: Activate the Workshop (seed placeholder; not connected) → challenge: Inspect the failure, repair configuration, run tests, and activate the workshop. → assessment: Demonstrate the terminal success condition through the stateful simulation. → project: Project: Activate the Workshop

### 01 Learning objective

Combine inspection, a bounded change and validation in one independent mission.

### 02 Story premise

A missing configuration keeps the workshop dormant. Puku is responsible for returning it to service.

### 03 Environment concept

Workshop Control Room, inside The Agent Workshop. The environment visualizes its actual training state.

### 04 Puku role

Learner and operator: approaches the selected machine, handles context artifacts, inspects, performs the action, and reacts to the result.

### 05 Interactive objects

- Incident logs
- Configuration console
- Test bench
- Workshop power switch

### 06 Core mechanic

Inspection, repair, test and activation are dependent stages of one repair.

### 07 Teaching mechanic

Observe a cause, make an intentional decision, experience its consequence, recover from a non-punitive failure, then verify the result.

### 08 Simulation

```json
{
  "kind": "project",
  "actions": [
    "Inspect failure logs",
    "Repair configuration",
    "Run project tests",
    "Activate workshop"
  ],
  "model": "Deterministic browser-local state machine. No real shell, deployment, Claude Code session or production service is operated."
}
```

### 09 Failure states

Out-of-order actions fail without advancing the system.

### 10 Recovery flow

Inspect → repair → test → activate.

### 11 Challenge

Inspect the failure, repair configuration, run tests, and activate the workshop.

### 12 Assessment

Completion requires the module-specific success branch in transition(). Merely opening, watching or spending time in a module does not earn completion.

### 13 Puku dialogue

```json
{
  "opening": "A missing configuration keeps the workshop dormant. Puku is responsible for returning it to service.",
  "hints": [
    "A log contains the first useful clue.",
    "Repair the configuration before running tests.",
    "Inspect → repair → test → activate."
  ],
  "reflection": "A working change is supported by evidence. Activation should follow validation rather than confidence alone."
}
```

### 14 Camera direction

Elevated third-person framing follows Puku’s movement. Close view centers the active machine; the map reveals district connections. Reduced motion uses instant travel.

### 15 Animation requirements

- Idle
- Walk
- Run
- Inspect
- Type
- Grab
- Think
- Confused
- Success
- Celebrate

### 16 VFX requirements

File stack grows with evidence; activation changes the district state.

### 17 Sound requirements

Soft localized action, failure and success tones. Muted by default. Every outcome has an equivalent caption.

### 18 UI requirements

A short mission premise, contextual machine controls, labeled system state and optional journey navigation. The visible 3D installation remains central.

### 19 Accessibility requirements

- Keyboard-operable actions
- Text interaction mode
- Reduced motion
- Pause and replay
- 0.25×–1.5× simulation speed
- Persistent captions
- Semantic state labels beyond color
- No time-limited reflex tasks

### 20 Analytics events

- module_entered
- action_performed (action, outcome, timestamp)
- hint_used
- module_left_incomplete
- mission_replayed
- competency_demonstrated

### 21 Required 3D assets

- Incident logs
- Configuration console
- Test bench
- Workshop power switch
- Puku articulated character
- District shell
- Learning installation

### 22 Required reusable assets

- Puku low/medium/high GLB
- Character animation clips
- Terminal station
- Physical gate
- Context blocks
- Memory vault
- Server rack
- Assembly conveyor
- Label texture generator
- Semantic materials

### 23 Technical implementation notes

```json
{
  "content": "app/puku/curriculum.ts",
  "learning": "app/puku/engine.ts",
  "environment": "app/puku/scene.tsx",
  "character": "app/puku/character.ts",
  "interface": "app/puku/app.tsx",
  "tests": "scripts/test-learning.mjs",
  "persistence": "Versioned localStorage. Replace with authenticated storage for cross-device accounts.",
  "limits": "Seed training simulation; procedural rigid-part character rig; no live instructor, external AI, real command execution or backend analytics."
}
```

## Milestone 2 · Build the Agentic Loop

**Hierarchy:** course: Agentic Software Engineering → careerTrack: Forward Deployed Engineering Career Track → milestone: Building Claude Code from Scratch → module: Build the Agentic Loop → lesson: Reasoning meets the environment → lab: Loop Assembly Line → liveSession: Instructor workshop: Build the Agentic Loop (seed placeholder; not connected) → challenge: Observe, plan, invoke the tool, observe its result, then verify. → assessment: Demonstrate the terminal success condition through the stateful simulation. → project: Integrate this module into the milestone mission.

### 01 Learning objective

Construct an observe-plan-act-verify feedback loop.

### 02 Story premise

The foundry has motors and tools, but no control loop. Puku must connect reasoning to feedback.

### 03 Environment concept

Loop Assembly Line, inside The Agent Foundry. The environment visualizes its actual training state.

### 04 Puku role

Learner and operator: approaches the selected machine, handles context artifacts, inspects, performs the action, and reacts to the result.

### 05 Interactive objects

- Observation sensor
- Plan station
- Tool arm
- Feedback mirror

### 06 Core mechanic

Observation, planning, execution, result inspection and verification advance a finite-state loop.

### 07 Teaching mechanic

Observe a cause, make an intentional decision, experience its consequence, recover from a non-punitive failure, then verify the result.

### 08 Simulation

```json
{
  "kind": "loop",
  "actions": [
    "Observe the project",
    "Create a plan",
    "Invoke the edit tool",
    "Inspect tool result",
    "Verify the change"
  ],
  "model": "Deterministic browser-local state machine. No real shell, deployment, Claude Code session or production service is operated."
}
```

### 09 Failure states

Skipping a dependency is rejected.

### 10 Recovery flow

Observe → plan → tool → result → verify.

### 11 Challenge

Observe, plan, invoke the tool, observe its result, then verify.

### 12 Assessment

Completion requires the module-specific success branch in transition(). Merely opening, watching or spending time in a module does not earn completion.

### 13 Puku dialogue

```json
{
  "opening": "The foundry has motors and tools, but no control loop. Puku must connect reasoning to feedback.",
  "hints": [
    "Start with an observation.",
    "After using a tool, inspect its actual result.",
    "Observe → plan → tool → result → verify."
  ],
  "reflection": "Tool execution is not completion. Observing results closes the feedback loop."
}
```

### 14 Camera direction

Elevated third-person framing follows Puku’s movement. Close view centers the active machine; the map reveals district connections. Reduced motion uses instant travel.

### 15 Animation requirements

- Idle
- Walk
- Run
- Inspect
- Type
- Grab
- Think
- Confused
- Success
- Celebrate

### 16 VFX requirements

Station connections activate in sequence.

### 17 Sound requirements

Soft localized action, failure and success tones. Muted by default. Every outcome has an equivalent caption.

### 18 UI requirements

A short mission premise, contextual machine controls, labeled system state and optional journey navigation. The visible 3D installation remains central.

### 19 Accessibility requirements

- Keyboard-operable actions
- Text interaction mode
- Reduced motion
- Pause and replay
- 0.25×–1.5× simulation speed
- Persistent captions
- Semantic state labels beyond color
- No time-limited reflex tasks

### 20 Analytics events

- module_entered
- action_performed (action, outcome, timestamp)
- hint_used
- module_left_incomplete
- mission_replayed
- competency_demonstrated

### 21 Required 3D assets

- Observation sensor
- Plan station
- Tool arm
- Feedback mirror
- Puku articulated character
- District shell
- Learning installation

### 22 Required reusable assets

- Puku low/medium/high GLB
- Character animation clips
- Terminal station
- Physical gate
- Context blocks
- Memory vault
- Server rack
- Assembly conveyor
- Label texture generator
- Semantic materials

### 23 Technical implementation notes

```json
{
  "content": "app/puku/curriculum.ts",
  "learning": "app/puku/engine.ts",
  "environment": "app/puku/scene.tsx",
  "character": "app/puku/character.ts",
  "interface": "app/puku/app.tsx",
  "tests": "scripts/test-learning.mjs",
  "persistence": "Versioned localStorage. Replace with authenticated storage for cross-device accounts.",
  "limits": "Seed training simulation; procedural rigid-part character rig; no live instructor, external AI, real command execution or backend analytics."
}
```

## Milestone 2 · MCP: Connect the Tool Layer

**Hierarchy:** course: Agentic Software Engineering → careerTrack: Forward Deployed Engineering Career Track → milestone: Building Claude Code from Scratch → module: MCP: Connect the Tool Layer → lesson: A standard connection, explicit boundaries → lab: MCP Hub → liveSession: Instructor workshop: MCP: Connect the Tool Layer (seed placeholder; not connected) → challenge: Connect the filesystem server, discover its read tool, authorize scope, then invoke it. → assessment: Demonstrate the terminal success condition through the stateful simulation. → project: Integrate this module into the milestone mission.

### 01 Learning objective

Separate discovery, authorization and invocation when connecting a tool.

### 02 Story premise

A standard tool port is visible, but an unconnected or unauthorized tool cannot serve Puku.

### 03 Environment concept

MCP Hub, inside The Agent Foundry. The environment visualizes its actual training state.

### 04 Puku role

Learner and operator: approaches the selected machine, handles context artifacts, inspects, performs the action, and reacts to the result.

### 05 Interactive objects

- MCP port
- Filesystem server
- Discovery scanner
- Scope gate

### 06 Core mechanic

Connecting, discovering, authorizing and invoking are separate operations.

### 07 Teaching mechanic

Observe a cause, make an intentional decision, experience its consequence, recover from a non-punitive failure, then verify the result.

### 08 Simulation

```json
{
  "kind": "mcp",
  "actions": [
    "Connect filesystem server",
    "Discover read_file tool",
    "Authorize read scope",
    "Invoke read_file"
  ],
  "model": "Deterministic browser-local state machine. No real shell, deployment, Claude Code session or production service is operated."
}
```

### 09 Failure states

Invocation without prior discovery and authorization is rejected.

### 10 Recovery flow

Connect → discover → authorize → invoke.

### 11 Challenge

Connect the filesystem server, discover its read tool, authorize scope, then invoke it.

### 12 Assessment

Completion requires the module-specific success branch in transition(). Merely opening, watching or spending time in a module does not earn completion.

### 13 Puku dialogue

```json
{
  "opening": "A standard tool port is visible, but an unconnected or unauthorized tool cannot serve Puku.",
  "hints": [
    "First connect a server to the hub.",
    "Discovery tells you what the tool supports.",
    "Connect → discover → authorize → invoke."
  ],
  "reflection": "A standard connection makes capabilities discoverable. Authorization and correct inputs still matter."
}
```

### 14 Camera direction

Elevated third-person framing follows Puku’s movement. Close view centers the active machine; the map reveals district connections. Reduced motion uses instant travel.

### 15 Animation requirements

- Idle
- Walk
- Run
- Inspect
- Type
- Grab
- Think
- Confused
- Success
- Celebrate

### 16 VFX requirements

MCP gate opens after scope is established.

### 17 Sound requirements

Soft localized action, failure and success tones. Muted by default. Every outcome has an equivalent caption.

### 18 UI requirements

A short mission premise, contextual machine controls, labeled system state and optional journey navigation. The visible 3D installation remains central.

### 19 Accessibility requirements

- Keyboard-operable actions
- Text interaction mode
- Reduced motion
- Pause and replay
- 0.25×–1.5× simulation speed
- Persistent captions
- Semantic state labels beyond color
- No time-limited reflex tasks

### 20 Analytics events

- module_entered
- action_performed (action, outcome, timestamp)
- hint_used
- module_left_incomplete
- mission_replayed
- competency_demonstrated

### 21 Required 3D assets

- MCP port
- Filesystem server
- Discovery scanner
- Scope gate
- Puku articulated character
- District shell
- Learning installation

### 22 Required reusable assets

- Puku low/medium/high GLB
- Character animation clips
- Terminal station
- Physical gate
- Context blocks
- Memory vault
- Server rack
- Assembly conveyor
- Label texture generator
- Semantic materials

### 23 Technical implementation notes

```json
{
  "content": "app/puku/curriculum.ts",
  "learning": "app/puku/engine.ts",
  "environment": "app/puku/scene.tsx",
  "character": "app/puku/character.ts",
  "interface": "app/puku/app.tsx",
  "tests": "scripts/test-learning.mjs",
  "persistence": "Versioned localStorage. Replace with authenticated storage for cross-device accounts.",
  "limits": "Seed training simulation; procedural rigid-part character rig; no live instructor, external AI, real command execution or backend analytics."
}
```

## Milestone 2 · Subagents & Result Synthesis

**Hierarchy:** course: Agentic Software Engineering → careerTrack: Forward Deployed Engineering Career Track → milestone: Building Claude Code from Scratch → module: Subagents & Result Synthesis → lesson: Delegate, collect, synthesize → lab: Subagent Command Center → liveSession: Instructor workshop: Subagents & Result Synthesis (seed placeholder; not connected) → challenge: Delegate research, coding and testing, run the specialists, and synthesize their results. → assessment: Demonstrate the terminal success condition through the stateful simulation. → project: Integrate this module into the milestone mission.

### 01 Learning objective

Delegate bounded responsibilities and combine their evidence into one result.

### 02 Story premise

Puku must research, implement and test a repair. Three specialist units can help.

### 03 Environment concept

Subagent Command Center, inside The Agent Foundry. The environment visualizes its actual training state.

### 04 Puku role

Learner and operator: approaches the selected machine, handles context artifacts, inspects, performs the action, and reacts to the result.

### 05 Interactive objects

- Main Puku console
- Research unit
- Coding unit
- Testing unit

### 06 Core mechanic

Three named responsibilities are assigned, executed and synthesized.

### 07 Teaching mechanic

Observe a cause, make an intentional decision, experience its consequence, recover from a non-punitive failure, then verify the result.

### 08 Simulation

```json
{
  "kind": "delegation",
  "actions": [
    "Assign research",
    "Assign implementation",
    "Assign verification",
    "Run the specialists",
    "Synthesize evidence"
  ],
  "model": "Deterministic browser-local state machine. No real shell, deployment, Claude Code session or production service is operated."
}
```

### 09 Failure states

Running unassigned specialists or synthesizing absent results fails.

### 10 Recovery flow

Assign all roles → run specialists → synthesize.

### 11 Challenge

Delegate research, coding and testing, run the specialists, and synthesize their results.

### 12 Assessment

Completion requires the module-specific success branch in transition(). Merely opening, watching or spending time in a module does not earn completion.

### 13 Puku dialogue

```json
{
  "opening": "Puku must research, implement and test a repair. Three specialist units can help.",
  "hints": [
    "Each specialist needs an assigned responsibility.",
    "Run the team only after all three roles have work.",
    "Assign all roles → run specialists → synthesize."
  ],
  "reflection": "Parallel work helps when responsibilities are bounded. The coordinator still owns synthesis and verification."
}
```

### 14 Camera direction

Elevated third-person framing follows Puku’s movement. Close view centers the active machine; the map reveals district connections. Reduced motion uses instant travel.

### 15 Animation requirements

- Idle
- Walk
- Run
- Inspect
- Type
- Grab
- Think
- Confused
- Success
- Celebrate

### 16 VFX requirements

Three Puku units operate and celebrate when evidence is synthesized.

### 17 Sound requirements

Soft localized action, failure and success tones. Muted by default. Every outcome has an equivalent caption.

### 18 UI requirements

A short mission premise, contextual machine controls, labeled system state and optional journey navigation. The visible 3D installation remains central.

### 19 Accessibility requirements

- Keyboard-operable actions
- Text interaction mode
- Reduced motion
- Pause and replay
- 0.25×–1.5× simulation speed
- Persistent captions
- Semantic state labels beyond color
- No time-limited reflex tasks

### 20 Analytics events

- module_entered
- action_performed (action, outcome, timestamp)
- hint_used
- module_left_incomplete
- mission_replayed
- competency_demonstrated

### 21 Required 3D assets

- Main Puku console
- Research unit
- Coding unit
- Testing unit
- Puku articulated character
- District shell
- Learning installation

### 22 Required reusable assets

- Puku low/medium/high GLB
- Character animation clips
- Terminal station
- Physical gate
- Context blocks
- Memory vault
- Server rack
- Assembly conveyor
- Label texture generator
- Semantic materials

### 23 Technical implementation notes

```json
{
  "content": "app/puku/curriculum.ts",
  "learning": "app/puku/engine.ts",
  "environment": "app/puku/scene.tsx",
  "character": "app/puku/character.ts",
  "interface": "app/puku/app.tsx",
  "tests": "scripts/test-learning.mjs",
  "persistence": "Versioned localStorage. Replace with authenticated storage for cross-device accounts.",
  "limits": "Seed training simulation; procedural rigid-part character rig; no live instructor, external AI, real command execution or backend analytics."
}
```

## Milestone 2 · Guardrails, Hooks & Safe Execution

**Hierarchy:** course: Agentic Software Engineering → careerTrack: Forward Deployed Engineering Career Track → milestone: Building Claude Code from Scratch → module: Guardrails, Hooks & Safe Execution → lesson: Policy as visible system behavior → lab: Agent Security Facility → liveSession: Instructor workshop: Guardrails, Hooks & Safe Execution (seed placeholder; not connected) → challenge: Allow the read, deny the destructive command, and route deployment to approval. → assessment: Demonstrate the terminal success condition through the stateful simulation. → project: Integrate this module into the milestone mission.

### 01 Learning objective

Apply different decisions to read, destructive and deployment operations.

### 02 Story premise

Three operations arrive at the gate. Puku must keep a useful read moving while controlling higher-impact actions.

### 03 Environment concept

Agent Security Facility, inside The Agent Foundry. The environment visualizes its actual training state.

### 04 Puku role

Learner and operator: approaches the selected machine, handles context artifacts, inspects, performs the action, and reacts to the result.

### 05 Interactive objects

- Read gate
- Destructive-operation gate
- Human approval station
- Policy lights

### 06 Core mechanic

Three operations require three different policy decisions: allow, deny and ask.

### 07 Teaching mechanic

Observe a cause, make an intentional decision, experience its consequence, recover from a non-punitive failure, then verify the result.

### 08 Simulation

```json
{
  "kind": "guardrails",
  "actions": [
    "Allow documentation read",
    "Deny irreversible delete",
    "Request deployment approval",
    "Try bypassing policy"
  ],
  "model": "Deterministic browser-local state machine. No real shell, deployment, Claude Code session or production service is operated."
}
```

### 09 Failure states

Bypassing the policy fails. No destructive operation executes.

### 10 Recovery flow

Allow read → deny delete → request deployment approval.

### 11 Challenge

Allow the read, deny the destructive command, and route deployment to approval.

### 12 Assessment

Completion requires the module-specific success branch in transition(). Merely opening, watching or spending time in a module does not earn completion.

### 13 Puku dialogue

```json
{
  "opening": "Three operations arrive at the gate. Puku must keep a useful read moving while controlling higher-impact actions.",
  "hints": [
    "Reading public project documentation is low impact here.",
    "The delete operation has no recovery path in this scenario.",
    "Allow read → deny delete → request deployment approval."
  ],
  "reflection": "Guardrails should be proportional to the action. A useful policy distinguishes allow, deny and ask."
}
```

### 14 Camera direction

Elevated third-person framing follows Puku’s movement. Close view centers the active machine; the map reveals district connections. Reduced motion uses instant travel.

### 15 Animation requirements

- Idle
- Walk
- Run
- Inspect
- Type
- Grab
- Think
- Confused
- Success
- Celebrate

### 16 VFX requirements

Gate state and captions distinguish decisions.

### 17 Sound requirements

Soft localized action, failure and success tones. Muted by default. Every outcome has an equivalent caption.

### 18 UI requirements

A short mission premise, contextual machine controls, labeled system state and optional journey navigation. The visible 3D installation remains central.

### 19 Accessibility requirements

- Keyboard-operable actions
- Text interaction mode
- Reduced motion
- Pause and replay
- 0.25×–1.5× simulation speed
- Persistent captions
- Semantic state labels beyond color
- No time-limited reflex tasks

### 20 Analytics events

- module_entered
- action_performed (action, outcome, timestamp)
- hint_used
- module_left_incomplete
- mission_replayed
- competency_demonstrated

### 21 Required 3D assets

- Read gate
- Destructive-operation gate
- Human approval station
- Policy lights
- Puku articulated character
- District shell
- Learning installation

### 22 Required reusable assets

- Puku low/medium/high GLB
- Character animation clips
- Terminal station
- Physical gate
- Context blocks
- Memory vault
- Server rack
- Assembly conveyor
- Label texture generator
- Semantic materials

### 23 Technical implementation notes

```json
{
  "content": "app/puku/curriculum.ts",
  "learning": "app/puku/engine.ts",
  "environment": "app/puku/scene.tsx",
  "character": "app/puku/character.ts",
  "interface": "app/puku/app.tsx",
  "tests": "scripts/test-learning.mjs",
  "persistence": "Versioned localStorage. Replace with authenticated storage for cross-device accounts.",
  "limits": "Seed training simulation; procedural rigid-part character rig; no live instructor, external AI, real command execution or backend analytics."
}
```

## Milestone 3 · Design for Partial Failure

**Hierarchy:** course: Agentic Software Engineering → careerTrack: Forward Deployed Engineering Career Track → milestone: Agentic System Design → module: Design for Partial Failure → lesson: Capacity under failure → lab: System Design Laboratory → liveSession: Instructor workshop: Design for Partial Failure (seed placeholder; not connected) → challenge: Create sufficient capacity, fail a node, and verify at least 240 requests per second remain available. → assessment: Demonstrate the terminal success condition through the stateful simulation. → project: Project: Build an Agent Platform

### 01 Learning objective

Provision enough capacity to tolerate losing one node.

### 02 Story premise

The service gets 240 requests per second. One of its nodes will fail.

### 03 Environment concept

System Design Laboratory, inside The Orchestration District. The environment visualizes its actual training state.

### 04 Puku role

Learner and operator: approaches the selected machine, handles context artifacts, inspects, performs the action, and reacts to the result.

### 05 Interactive objects

- Traffic source
- Compute nodes
- Failure injector
- Capacity verifier

### 06 Core mechanic

Each healthy node serves 100 req/s. Capacity must remain above 240 with at least one node failed.

### 07 Teaching mechanic

Observe a cause, make an intentional decision, experience its consequence, recover from a non-punitive failure, then verify the result.

### 08 Simulation

```json
{
  "kind": "design",
  "actions": [
    "Provision a node",
    "Remove a healthy node",
    "Fail one node",
    "Restore failed node",
    "Verify resilient capacity"
  ],
  "model": "Deterministic browser-local state machine. No real shell, deployment, Claude Code session or production service is operated."
}
```

### 09 Failure states

An underprovisioned design fails capacity verification.

### 10 Recovery flow

Four nodes leave three healthy nodes after one failure.

### 11 Challenge

Create sufficient capacity, fail a node, and verify at least 240 requests per second remain available.

### 12 Assessment

Completion requires the module-specific success branch in transition(). Merely opening, watching or spending time in a module does not earn completion.

### 13 Puku dialogue

```json
{
  "opening": "The service gets 240 requests per second. One of its nodes will fail.",
  "hints": [
    "Each training node serves 100 requests per second.",
    "Calculate capacity after removing one node.",
    "Four nodes leave three healthy nodes after one failure."
  ],
  "reflection": "Redundancy is a property of the remaining system after failure, not just the healthy system before it."
}
```

### 14 Camera direction

Elevated third-person framing follows Puku’s movement. Close view centers the active machine; the map reveals district connections. Reduced motion uses instant travel.

### 15 Animation requirements

- Idle
- Walk
- Run
- Inspect
- Type
- Grab
- Think
- Confused
- Success
- Celebrate

### 16 VFX requirements

Failed rack lamps turn red; healthy racks remain green.

### 17 Sound requirements

Soft localized action, failure and success tones. Muted by default. Every outcome has an equivalent caption.

### 18 UI requirements

A short mission premise, contextual machine controls, labeled system state and optional journey navigation. The visible 3D installation remains central.

### 19 Accessibility requirements

- Keyboard-operable actions
- Text interaction mode
- Reduced motion
- Pause and replay
- 0.25×–1.5× simulation speed
- Persistent captions
- Semantic state labels beyond color
- No time-limited reflex tasks

### 20 Analytics events

- module_entered
- action_performed (action, outcome, timestamp)
- hint_used
- module_left_incomplete
- mission_replayed
- competency_demonstrated

### 21 Required 3D assets

- Traffic source
- Compute nodes
- Failure injector
- Capacity verifier
- Puku articulated character
- District shell
- Learning installation

### 22 Required reusable assets

- Puku low/medium/high GLB
- Character animation clips
- Terminal station
- Physical gate
- Context blocks
- Memory vault
- Server rack
- Assembly conveyor
- Label texture generator
- Semantic materials

### 23 Technical implementation notes

```json
{
  "content": "app/puku/curriculum.ts",
  "learning": "app/puku/engine.ts",
  "environment": "app/puku/scene.tsx",
  "character": "app/puku/character.ts",
  "interface": "app/puku/app.tsx",
  "tests": "scripts/test-learning.mjs",
  "persistence": "Versioned localStorage. Replace with authenticated storage for cross-device accounts.",
  "limits": "Seed training simulation; procedural rigid-part character rig; no live instructor, external AI, real command execution or backend analytics."
}
```

## Milestone 3 · Multi-Agent Orchestration

**Hierarchy:** course: Agentic Software Engineering → careerTrack: Forward Deployed Engineering Career Track → milestone: Agentic System Design → module: Multi-Agent Orchestration → lesson: Messages, responsibilities and dependencies → lab: Agent City → liveSession: Instructor workshop: Multi-Agent Orchestration (seed placeholder; not connected) → challenge: Send work through research, implementation and testing in dependency order, then release the result. → assessment: Demonstrate the terminal success condition through the stateful simulation. → project: Project: Build an Agent Platform

### 01 Learning objective

Route work to the right role and preserve ordering between dependent tasks.

### 02 Story premise

A repair request arrives at the city. Coding depends on research, and testing depends on a change.

### 03 Environment concept

Agent City, inside The Orchestration District. The environment visualizes its actual training state.

### 04 Puku role

Learner and operator: approaches the selected machine, handles context artifacts, inspects, performs the action, and reacts to the result.

### 05 Interactive objects

- Research building
- Coding building
- Test building
- Result bridge

### 06 Core mechanic

Research, implementation and testing pass artifacts through dependency-ordered roles.

### 07 Teaching mechanic

Observe a cause, make an intentional decision, experience its consequence, recover from a non-punitive failure, then verify the result.

### 08 Simulation

```json
{
  "kind": "orchestration",
  "actions": [
    "Route to research",
    "Route to coding",
    "Route to testing",
    "Release verified result"
  ],
  "model": "Deterministic browser-local state machine. No real shell, deployment, Claude Code session or production service is operated."
}
```

### 09 Failure states

Routing work before its dependency is satisfied fails.

### 10 Recovery flow

Research → implement → test → release.

### 11 Challenge

Send work through research, implementation and testing in dependency order, then release the result.

### 12 Assessment

Completion requires the module-specific success branch in transition(). Merely opening, watching or spending time in a module does not earn completion.

### 13 Puku dialogue

```json
{
  "opening": "A repair request arrives at the city. Coding depends on research, and testing depends on a change.",
  "hints": [
    "Research creates the evidence needed by the coding unit.",
    "A test needs an implementation to evaluate.",
    "Research → implement → test → release."
  ],
  "reflection": "Concurrency does not remove dependencies. Orchestration coordinates responsibilities and handoffs."
}
```

### 14 Camera direction

Elevated third-person framing follows Puku’s movement. Close view centers the active machine; the map reveals district connections. Reduced motion uses instant travel.

### 15 Animation requirements

- Idle
- Walk
- Run
- Inspect
- Type
- Grab
- Think
- Confused
- Success
- Celebrate

### 16 VFX requirements

Specialist units and routes activate as evidence becomes available.

### 17 Sound requirements

Soft localized action, failure and success tones. Muted by default. Every outcome has an equivalent caption.

### 18 UI requirements

A short mission premise, contextual machine controls, labeled system state and optional journey navigation. The visible 3D installation remains central.

### 19 Accessibility requirements

- Keyboard-operable actions
- Text interaction mode
- Reduced motion
- Pause and replay
- 0.25×–1.5× simulation speed
- Persistent captions
- Semantic state labels beyond color
- No time-limited reflex tasks

### 20 Analytics events

- module_entered
- action_performed (action, outcome, timestamp)
- hint_used
- module_left_incomplete
- mission_replayed
- competency_demonstrated

### 21 Required 3D assets

- Research building
- Coding building
- Test building
- Result bridge
- Puku articulated character
- District shell
- Learning installation

### 22 Required reusable assets

- Puku low/medium/high GLB
- Character animation clips
- Terminal station
- Physical gate
- Context blocks
- Memory vault
- Server rack
- Assembly conveyor
- Label texture generator
- Semantic materials

### 23 Technical implementation notes

```json
{
  "content": "app/puku/curriculum.ts",
  "learning": "app/puku/engine.ts",
  "environment": "app/puku/scene.tsx",
  "character": "app/puku/character.ts",
  "interface": "app/puku/app.tsx",
  "tests": "scripts/test-learning.mjs",
  "persistence": "Versioned localStorage. Replace with authenticated storage for cross-device accounts.",
  "limits": "Seed training simulation; procedural rigid-part character rig; no live instructor, external AI, real command execution or backend analytics."
}
```

## Milestone 3 · Designing Useful Agent Memory

**Hierarchy:** course: Agentic Software Engineering → careerTrack: Forward Deployed Engineering Career Track → milestone: Agentic System Design → module: Designing Useful Agent Memory → lesson: Relevance over volume → lab: Retrieval Observatory → liveSession: Instructor workshop: Designing Useful Agent Memory (seed placeholder; not connected) → challenge: Retrieve the port record, remove irrelevant notes if present, and verify the selected memory. → assessment: Demonstrate the terminal success condition through the stateful simulation. → project: Project: Build an Agent Platform

### 01 Learning objective

Select relevant memory rather than filling context with everything available.

### 02 Story premise

Puku needs the deployment port. The archive also contains unrelated meeting notes.

### 03 Environment concept

Retrieval Observatory, inside The Orchestration District. The environment visualizes its actual training state.

### 04 Puku role

Learner and operator: approaches the selected machine, handles context artifacts, inspects, performs the action, and reacts to the result.

### 05 Interactive objects

- Port record
- Meeting-note archive
- Context desk
- Relevance verifier

### 06 Core mechanic

Relevant port memory and unrelated notes compete for working context.

### 07 Teaching mechanic

Observe a cause, make an intentional decision, experience its consequence, recover from a non-punitive failure, then verify the result.

### 08 Simulation

```json
{
  "kind": "retrieval",
  "actions": [
    "Retrieve deployment port",
    "Retrieve meeting notes",
    "Prune irrelevant notes",
    "Verify relevance"
  ],
  "model": "Deterministic browser-local state machine. No real shell, deployment, Claude Code session or production service is operated."
}
```

### 09 Failure states

Verification fails if the port record is absent or irrelevant notes remain.

### 10 Recovery flow

Retrieve port record, prune unrelated notes, then verify.

### 11 Challenge

Retrieve the port record, remove irrelevant notes if present, and verify the selected memory.

### 12 Assessment

Completion requires the module-specific success branch in transition(). Merely opening, watching or spending time in a module does not earn completion.

### 13 Puku dialogue

```json
{
  "opening": "Puku needs the deployment port. The archive also contains unrelated meeting notes.",
  "hints": [
    "The question is specifically about the deployment port.",
    "Unrelated notes consume attention without helping.",
    "Retrieve port record, prune unrelated notes, then verify."
  ],
  "reflection": "Retrieval should improve task relevance. More memory is not automatically more useful context."
}
```

### 14 Camera direction

Elevated third-person framing follows Puku’s movement. Close view centers the active machine; the map reveals district connections. Reduced motion uses instant travel.

### 15 Animation requirements

- Idle
- Walk
- Run
- Inspect
- Type
- Grab
- Think
- Confused
- Success
- Celebrate

### 16 VFX requirements

Working-context blocks respond to retrieval and pruning.

### 17 Sound requirements

Soft localized action, failure and success tones. Muted by default. Every outcome has an equivalent caption.

### 18 UI requirements

A short mission premise, contextual machine controls, labeled system state and optional journey navigation. The visible 3D installation remains central.

### 19 Accessibility requirements

- Keyboard-operable actions
- Text interaction mode
- Reduced motion
- Pause and replay
- 0.25×–1.5× simulation speed
- Persistent captions
- Semantic state labels beyond color
- No time-limited reflex tasks

### 20 Analytics events

- module_entered
- action_performed (action, outcome, timestamp)
- hint_used
- module_left_incomplete
- mission_replayed
- competency_demonstrated

### 21 Required 3D assets

- Port record
- Meeting-note archive
- Context desk
- Relevance verifier
- Puku articulated character
- District shell
- Learning installation

### 22 Required reusable assets

- Puku low/medium/high GLB
- Character animation clips
- Terminal station
- Physical gate
- Context blocks
- Memory vault
- Server rack
- Assembly conveyor
- Label texture generator
- Semantic materials

### 23 Technical implementation notes

```json
{
  "content": "app/puku/curriculum.ts",
  "learning": "app/puku/engine.ts",
  "environment": "app/puku/scene.tsx",
  "character": "app/puku/character.ts",
  "interface": "app/puku/app.tsx",
  "tests": "scripts/test-learning.mjs",
  "persistence": "Versioned localStorage. Replace with authenticated storage for cross-device accounts.",
  "limits": "Seed training simulation; procedural rigid-part character rig; no live instructor, external AI, real command execution or backend analytics."
}
```

## Milestone 3 · Project: Build an Agent Platform

**Hierarchy:** course: Agentic Software Engineering → careerTrack: Forward Deployed Engineering Career Track → milestone: Agentic System Design → module: Project: Build an Agent Platform → lesson: Integrating the agent system → lab: Platform Assembly Hall → liveSession: Instructor workshop: Project: Build an Agent Platform (seed placeholder; not connected) → challenge: Connect tools, establish memory, install guardrails, test the platform, and deploy it. → assessment: Demonstrate the terminal success condition through the stateful simulation. → project: Project: Build an Agent Platform

### 01 Learning objective

Integrate authorized tools, persistent context and verification before deployment.

### 02 Story premise

The districts need a shared agent platform. Puku must assemble the platform’s essential boundaries.

### 03 Environment concept

Platform Assembly Hall, inside The Orchestration District. The environment visualizes its actual training state.

### 04 Puku role

Learner and operator: approaches the selected machine, handles context artifacts, inspects, performs the action, and reacts to the result.

### 05 Interactive objects

- Tool connector
- Memory vault
- Guardrail gate
- Platform test station

### 06 Core mechanic

Tools, memory and guardrails must exist before tests pass and deployment is allowed.

### 07 Teaching mechanic

Observe a cause, make an intentional decision, experience its consequence, recover from a non-punitive failure, then verify the result.

### 08 Simulation

```json
{
  "kind": "capstone",
  "actions": [
    "Connect tool layer",
    "Establish memory",
    "Install guardrails",
    "Test integrated platform",
    "Deploy the platform"
  ],
  "model": "Deterministic browser-local state machine. No real shell, deployment, Claude Code session or production service is operated."
}
```

### 09 Failure states

Incomplete integration or deployment before verification fails.

### 10 Recovery flow

Connect tools + memory + guardrails → test → deploy.

### 11 Challenge

Connect tools, establish memory, install guardrails, test the platform, and deploy it.

### 12 Assessment

Completion requires the module-specific success branch in transition(). Merely opening, watching or spending time in a module does not earn completion.

### 13 Puku dialogue

```json
{
  "opening": "The districts need a shared agent platform. Puku must assemble the platform’s essential boundaries.",
  "hints": [
    "Tools, memory and guardrails are prerequisites.",
    "Deployment should follow passing tests.",
    "Connect tools + memory + guardrails → test → deploy."
  ],
  "reflection": "An agent platform is a coordinated system of capabilities, state and boundaries, not just a model call."
}
```

### 14 Camera direction

Elevated third-person framing follows Puku’s movement. Close view centers the active machine; the map reveals district connections. Reduced motion uses instant travel.

### 15 Animation requirements

- Idle
- Walk
- Run
- Inspect
- Type
- Grab
- Think
- Confused
- Success
- Celebrate

### 16 VFX requirements

Assembly-line artifacts and completion lamps show readiness.

### 17 Sound requirements

Soft localized action, failure and success tones. Muted by default. Every outcome has an equivalent caption.

### 18 UI requirements

A short mission premise, contextual machine controls, labeled system state and optional journey navigation. The visible 3D installation remains central.

### 19 Accessibility requirements

- Keyboard-operable actions
- Text interaction mode
- Reduced motion
- Pause and replay
- 0.25×–1.5× simulation speed
- Persistent captions
- Semantic state labels beyond color
- No time-limited reflex tasks

### 20 Analytics events

- module_entered
- action_performed (action, outcome, timestamp)
- hint_used
- module_left_incomplete
- mission_replayed
- competency_demonstrated

### 21 Required 3D assets

- Tool connector
- Memory vault
- Guardrail gate
- Platform test station
- Puku articulated character
- District shell
- Learning installation

### 22 Required reusable assets

- Puku low/medium/high GLB
- Character animation clips
- Terminal station
- Physical gate
- Context blocks
- Memory vault
- Server rack
- Assembly conveyor
- Label texture generator
- Semantic materials

### 23 Technical implementation notes

```json
{
  "content": "app/puku/curriculum.ts",
  "learning": "app/puku/engine.ts",
  "environment": "app/puku/scene.tsx",
  "character": "app/puku/character.ts",
  "interface": "app/puku/app.tsx",
  "tests": "scripts/test-learning.mjs",
  "persistence": "Versioned localStorage. Replace with authenticated storage for cross-device accounts.",
  "limits": "Seed training simulation; procedural rigid-part character rig; no live instructor, external AI, real command execution or backend analytics."
}
```

## Milestone 4 · Docker: Package a Reproducible Service

**Hierarchy:** course: Agentic Software Engineering → careerTrack: Forward Deployed Engineering Career Track → milestone: Platform Engineering → module: Docker: Package a Reproducible Service → lesson: Source, image, registry, running container → lab: Container Factory → liveSession: Instructor workshop: Docker: Package a Reproducible Service (seed placeholder; not connected) → challenge: Load source and dependencies, build an image, publish it to the registry, and run a container. → assessment: Demonstrate the terminal success condition through the stateful simulation. → project: Production: Diagnose & Recover

### 01 Learning objective

Build an image from application inputs and run a container from the published image.

### 02 Story premise

Puku’s app works in the workshop. The factory must package its application and dependencies together.

### 03 Environment concept

Container Factory, inside The Production Yard. The environment visualizes its actual training state.

### 04 Puku role

Learner and operator: approaches the selected machine, handles context artifacts, inspects, performs the action, and reacts to the result.

### 05 Interactive objects

- Source crate
- Dependency crate
- Image press
- Registry lift

### 06 Core mechanic

Source and dependencies build an image, which is published and used to run a container.

### 07 Teaching mechanic

Observe a cause, make an intentional decision, experience its consequence, recover from a non-punitive failure, then verify the result.

### 08 Simulation

```json
{
  "kind": "container",
  "actions": [
    "Load application source",
    "Load dependencies",
    "Build the image",
    "Publish to registry",
    "Run a container"
  ],
  "model": "Deterministic browser-local state machine. No real shell, deployment, Claude Code session or production service is operated."
}
```

### 09 Failure states

Building without inputs or running without a published image fails.

### 10 Recovery flow

Load both inputs → build image → publish → run.

### 11 Challenge

Load source and dependencies, build an image, publish it to the registry, and run a container.

### 12 Assessment

Completion requires the module-specific success branch in transition(). Merely opening, watching or spending time in a module does not earn completion.

### 13 Puku dialogue

```json
{
  "opening": "Puku’s app works in the workshop. The factory must package its application and dependencies together.",
  "hints": [
    "A reproducible image needs application source and dependencies.",
    "The registry receives a built image.",
    "Load both inputs → build image → publish → run."
  ],
  "reflection": "An image is a packaged template. A container is a running process created from an image."
}
```

### 14 Camera direction

Elevated third-person framing follows Puku’s movement. Close view centers the active machine; the map reveals district connections. Reduced motion uses instant travel.

### 15 Animation requirements

- Idle
- Walk
- Run
- Inspect
- Type
- Grab
- Think
- Confused
- Success
- Celebrate

### 16 VFX requirements

Source crates move through the conceptual factory stages.

### 17 Sound requirements

Soft localized action, failure and success tones. Muted by default. Every outcome has an equivalent caption.

### 18 UI requirements

A short mission premise, contextual machine controls, labeled system state and optional journey navigation. The visible 3D installation remains central.

### 19 Accessibility requirements

- Keyboard-operable actions
- Text interaction mode
- Reduced motion
- Pause and replay
- 0.25×–1.5× simulation speed
- Persistent captions
- Semantic state labels beyond color
- No time-limited reflex tasks

### 20 Analytics events

- module_entered
- action_performed (action, outcome, timestamp)
- hint_used
- module_left_incomplete
- mission_replayed
- competency_demonstrated

### 21 Required 3D assets

- Source crate
- Dependency crate
- Image press
- Registry lift
- Puku articulated character
- District shell
- Learning installation

### 22 Required reusable assets

- Puku low/medium/high GLB
- Character animation clips
- Terminal station
- Physical gate
- Context blocks
- Memory vault
- Server rack
- Assembly conveyor
- Label texture generator
- Semantic materials

### 23 Technical implementation notes

```json
{
  "content": "app/puku/curriculum.ts",
  "learning": "app/puku/engine.ts",
  "environment": "app/puku/scene.tsx",
  "character": "app/puku/character.ts",
  "interface": "app/puku/app.tsx",
  "tests": "scripts/test-learning.mjs",
  "persistence": "Versioned localStorage. Replace with authenticated storage for cross-device accounts.",
  "limits": "Seed training simulation; procedural rigid-part character rig; no live instructor, external AI, real command execution or backend analytics."
}
```

## Milestone 4 · Kubernetes: Scale, Fail, Recover

**Hierarchy:** course: Agentic Software Engineering → careerTrack: Forward Deployed Engineering Career Track → milestone: Platform Engineering → module: Kubernetes: Scale, Fail, Recover → lesson: Desired state meets actual capacity → lab: Cluster Control Center → liveSession: Instructor workshop: Kubernetes: Scale, Fail, Recover (seed placeholder; not connected) → challenge: Inject a node failure, restore enough compute capacity, and verify recovery. → assessment: Demonstrate the terminal success condition through the stateful simulation. → project: Production: Diagnose & Recover

### 01 Learning objective

Recover service capacity after a compute-node failure.

### 02 Story premise

The cluster is serving 240 requests per second. Puku must observe what happens when a node fails.

### 03 Environment concept

Cluster Control Center, inside The Production Yard. The environment visualizes its actual training state.

### 04 Puku role

Learner and operator: approaches the selected machine, handles context artifacts, inspects, performs the action, and reacts to the result.

### 05 Interactive objects

- Control plane
- Worker nodes
- Failure switch
- Health-check console

### 06 Core mechanic

Inject failure, restore or add healthy capacity, then verify 240 req/s can be served.

### 07 Teaching mechanic

Observe a cause, make an intentional decision, experience its consequence, recover from a non-punitive failure, then verify the result.

### 08 Simulation

```json
{
  "kind": "cluster",
  "actions": [
    "Inject node failure",
    "Provision a node",
    "Restore failed node",
    "Verify service recovery"
  ],
  "model": "Deterministic browser-local state machine. No real shell, deployment, Claude Code session or production service is operated."
}
```

### 09 Failure states

Insufficient healthy capacity or no demonstrated failure prevents completion.

### 10 Recovery flow

Bring healthy capacity to at least 240 req/s, then verify.

### 11 Challenge

Inject a node failure, restore enough compute capacity, and verify recovery.

### 12 Assessment

Completion requires the module-specific success branch in transition(). Merely opening, watching or spending time in a module does not earn completion.

### 13 Puku dialogue

```json
{
  "opening": "The cluster is serving 240 requests per second. Puku must observe what happens when a node fails.",
  "hints": [
    "Failure reduces the number of healthy nodes.",
    "Restore the failed node or provision enough replacement capacity.",
    "Bring healthy capacity to at least 240 req/s, then verify."
  ],
  "reflection": "Recovery requires healthy capacity and working workloads. Desired state must be reconciled with actual state."
}
```

### 14 Camera direction

Elevated third-person framing follows Puku’s movement. Close view centers the active machine; the map reveals district connections. Reduced motion uses instant travel.

### 15 Animation requirements

- Idle
- Walk
- Run
- Inspect
- Type
- Grab
- Think
- Confused
- Success
- Celebrate

### 16 VFX requirements

Physical nodes and their status lamps show loss and recovery.

### 17 Sound requirements

Soft localized action, failure and success tones. Muted by default. Every outcome has an equivalent caption.

### 18 UI requirements

A short mission premise, contextual machine controls, labeled system state and optional journey navigation. The visible 3D installation remains central.

### 19 Accessibility requirements

- Keyboard-operable actions
- Text interaction mode
- Reduced motion
- Pause and replay
- 0.25×–1.5× simulation speed
- Persistent captions
- Semantic state labels beyond color
- No time-limited reflex tasks

### 20 Analytics events

- module_entered
- action_performed (action, outcome, timestamp)
- hint_used
- module_left_incomplete
- mission_replayed
- competency_demonstrated

### 21 Required 3D assets

- Control plane
- Worker nodes
- Failure switch
- Health-check console
- Puku articulated character
- District shell
- Learning installation

### 22 Required reusable assets

- Puku low/medium/high GLB
- Character animation clips
- Terminal station
- Physical gate
- Context blocks
- Memory vault
- Server rack
- Assembly conveyor
- Label texture generator
- Semantic materials

### 23 Technical implementation notes

```json
{
  "content": "app/puku/curriculum.ts",
  "learning": "app/puku/engine.ts",
  "environment": "app/puku/scene.tsx",
  "character": "app/puku/character.ts",
  "interface": "app/puku/app.tsx",
  "tests": "scripts/test-learning.mjs",
  "persistence": "Versioned localStorage. Replace with authenticated storage for cross-device accounts.",
  "limits": "Seed training simulation; procedural rigid-part character rig; no live instructor, external AI, real command execution or backend analytics."
}
```

## Milestone 4 · CI/CD: From Commit to Production

**Hierarchy:** course: Agentic Software Engineering → careerTrack: Forward Deployed Engineering Career Track → milestone: Platform Engineering → module: CI/CD: From Commit to Production → lesson: Build, test, security, deploy → lab: Deployment Pipeline → liveSession: Instructor workshop: CI/CD: From Commit to Production (seed placeholder; not connected) → challenge: Run the pipeline, inspect the failure, fix tests and the dependency, then rerun it. → assessment: Demonstrate the terminal success condition through the stateful simulation. → project: Production: Diagnose & Recover

### 01 Learning objective

Stop a release at failed checks and repair the cause before retrying.

### 02 Story premise

The production line stops on a failing test and a vulnerable dependency.

### 03 Environment concept

Deployment Pipeline, inside The Production Yard. The environment visualizes its actual training state.

### 04 Puku role

Learner and operator: approaches the selected machine, handles context artifacts, inspects, performs the action, and reacts to the result.

### 05 Interactive objects

- Code station
- Build press
- Test gate
- Security scanner
- Deployment dock

### 06 Core mechanic

Build, test, security and deployment form gates. Both test and dependency failures need repair.

### 07 Teaching mechanic

Observe a cause, make an intentional decision, experience its consequence, recover from a non-punitive failure, then verify the result.

### 08 Simulation

```json
{
  "kind": "pipeline",
  "actions": [
    "Run deployment pipeline",
    "Inspect failed checks",
    "Repair failing tests",
    "Update vulnerable dependency"
  ],
  "model": "Deterministic browser-local state machine. No real shell, deployment, Claude Code session or production service is operated."
}
```

### 09 Failure states

Pipeline stops at tests or security and never deploys a failed release.

### 10 Recovery flow

Inspect → fix tests + dependency → rerun.

### 11 Challenge

Run the pipeline, inspect the failure, fix tests and the dependency, then rerun it.

### 12 Assessment

Completion requires the module-specific success branch in transition(). Merely opening, watching or spending time in a module does not earn completion.

### 13 Puku dialogue

```json
{
  "opening": "The production line stops on a failing test and a vulnerable dependency.",
  "hints": [
    "Run the line once to see where it stops.",
    "Both tests and the dependency scan must pass.",
    "Inspect → fix tests + dependency → rerun."
  ],
  "reflection": "A pipeline is a sequence of evidence-producing gates. A failed gate should stop propagation."
}
```

### 14 Camera direction

Elevated third-person framing follows Puku’s movement. Close view centers the active machine; the map reveals district connections. Reduced motion uses instant travel.

### 15 Animation requirements

- Idle
- Walk
- Run
- Inspect
- Type
- Grab
- Think
- Confused
- Success
- Celebrate

### 16 VFX requirements

Conveyor stage lamps identify the stop and final success.

### 17 Sound requirements

Soft localized action, failure and success tones. Muted by default. Every outcome has an equivalent caption.

### 18 UI requirements

A short mission premise, contextual machine controls, labeled system state and optional journey navigation. The visible 3D installation remains central.

### 19 Accessibility requirements

- Keyboard-operable actions
- Text interaction mode
- Reduced motion
- Pause and replay
- 0.25×–1.5× simulation speed
- Persistent captions
- Semantic state labels beyond color
- No time-limited reflex tasks

### 20 Analytics events

- module_entered
- action_performed (action, outcome, timestamp)
- hint_used
- module_left_incomplete
- mission_replayed
- competency_demonstrated

### 21 Required 3D assets

- Code station
- Build press
- Test gate
- Security scanner
- Deployment dock
- Puku articulated character
- District shell
- Learning installation

### 22 Required reusable assets

- Puku low/medium/high GLB
- Character animation clips
- Terminal station
- Physical gate
- Context blocks
- Memory vault
- Server rack
- Assembly conveyor
- Label texture generator
- Semantic materials

### 23 Technical implementation notes

```json
{
  "content": "app/puku/curriculum.ts",
  "learning": "app/puku/engine.ts",
  "environment": "app/puku/scene.tsx",
  "character": "app/puku/character.ts",
  "interface": "app/puku/app.tsx",
  "tests": "scripts/test-learning.mjs",
  "persistence": "Versioned localStorage. Replace with authenticated storage for cross-device accounts.",
  "limits": "Seed training simulation; procedural rigid-part character rig; no live instructor, external AI, real command execution or backend analytics."
}
```

## Milestone 4 · Production: Diagnose & Recover

**Hierarchy:** course: Agentic Software Engineering → careerTrack: Forward Deployed Engineering Career Track → milestone: Platform Engineering → module: Production: Diagnose & Recover → lesson: Evidence-driven incident response → lab: Production Control Room → liveSession: Instructor workshop: Production: Diagnose & Recover (seed placeholder; not connected) → challenge: Inspect the logs, diagnose the release regression, roll back, and verify recovery. → assessment: Demonstrate the terminal success condition through the stateful simulation. → project: Production: Diagnose & Recover

### 01 Learning objective

Use incident evidence to reverse a bad release and verify service recovery.

### 02 Story premise

After a deployment, error rate rises and latency spikes. Puku is the on-call engineer.

### 03 Environment concept

Production Control Room, inside The Production Yard. The environment visualizes its actual training state.

### 04 Puku role

Learner and operator: approaches the selected machine, handles context artifacts, inspects, performs the action, and reacts to the result.

### 05 Interactive objects

- Error monitor
- Release timeline
- Rollback switch
- Recovery verifier

### 06 Core mechanic

Release evidence identifies a regression; rollback restores error rate and latency.

### 07 Teaching mechanic

Observe a cause, make an intentional decision, experience its consequence, recover from a non-punitive failure, then verify the result.

### 08 Simulation

```json
{
  "kind": "production",
  "actions": [
    "Inspect logs & timeline",
    "Identify release regression",
    "Add compute capacity",
    "Roll back to v1",
    "Verify recovery"
  ],
  "model": "Deterministic browser-local state machine. No real shell, deployment, Claude Code session or production service is operated."
}
```

### 09 Failure states

Extra capacity does not resolve the application regression; actions without evidence are rejected.

### 10 Recovery flow

Inspect → diagnose → roll back → verify.

### 11 Challenge

Inspect the logs, diagnose the release regression, roll back, and verify recovery.

### 12 Assessment

Completion requires the module-specific success branch in transition(). Merely opening, watching or spending time in a module does not earn completion.

### 13 Puku dialogue

```json
{
  "opening": "After a deployment, error rate rises and latency spikes. Puku is the on-call engineer.",
  "hints": [
    "Start with the error log and release timeline.",
    "The incident started immediately after version 2 was released.",
    "Inspect → diagnose → roll back → verify."
  ],
  "reflection": "Recovery is demonstrated through system signals. Adding capacity cannot fix every application defect."
}
```

### 14 Camera direction

Elevated third-person framing follows Puku’s movement. Close view centers the active machine; the map reveals district connections. Reduced motion uses instant travel.

### 15 Animation requirements

- Idle
- Walk
- Run
- Inspect
- Type
- Grab
- Think
- Confused
- Success
- Celebrate

### 16 VFX requirements

Racks remain physical; labeled metrics show 24%→0.2% errors and 900ms→90ms latency.

### 17 Sound requirements

Soft localized action, failure and success tones. Muted by default. Every outcome has an equivalent caption.

### 18 UI requirements

A short mission premise, contextual machine controls, labeled system state and optional journey navigation. The visible 3D installation remains central.

### 19 Accessibility requirements

- Keyboard-operable actions
- Text interaction mode
- Reduced motion
- Pause and replay
- 0.25×–1.5× simulation speed
- Persistent captions
- Semantic state labels beyond color
- No time-limited reflex tasks

### 20 Analytics events

- module_entered
- action_performed (action, outcome, timestamp)
- hint_used
- module_left_incomplete
- mission_replayed
- competency_demonstrated

### 21 Required 3D assets

- Error monitor
- Release timeline
- Rollback switch
- Recovery verifier
- Puku articulated character
- District shell
- Learning installation

### 22 Required reusable assets

- Puku low/medium/high GLB
- Character animation clips
- Terminal station
- Physical gate
- Context blocks
- Memory vault
- Server rack
- Assembly conveyor
- Label texture generator
- Semantic materials

### 23 Technical implementation notes

```json
{
  "content": "app/puku/curriculum.ts",
  "learning": "app/puku/engine.ts",
  "environment": "app/puku/scene.tsx",
  "character": "app/puku/character.ts",
  "interface": "app/puku/app.tsx",
  "tests": "scripts/test-learning.mjs",
  "persistence": "Versioned localStorage. Replace with authenticated storage for cross-device accounts.",
  "limits": "Seed training simulation; procedural rigid-part character rig; no live instructor, external AI, real command execution or backend analytics."
}
```

