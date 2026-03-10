---
name: scenery-project-context
description: "Essential project context for Scenery.ai. You MUST read this before ANY code change, feature work, or architecture decision. Contains the app's vision, architecture, design system, domain glossary, and key files."
---

# Scenery.ai — Project Context

## What Is This

**Scenery.ai** is a SaaS platform for **style-first AI video creation**. Users choose an artistic style (cinematographic directors, visual aesthetics), describe their vision, and the platform generates professional video content — images, animations, voiceovers, music — assembled into exportable films.

**North Star:** Create video content defined by artistic style, not technical skill. Kubrick precision or Malick poetry — one click away.

**Target users:** Content creators, marketing agencies, e-commerce brands, social media managers.

## Tech Stack

- **Frontend:** React 18 + Vite 5 + TailwindCSS 3 (SPA)
- **Backend:** Supabase (PostgreSQL + 25 Edge Functions in Deno)
- **Auth:** Supabase Auth (JWT)
- **Storage:** Supabase Storage (project-images, project-audio, project-videos)
- **Payments:** Stripe (credit-based system)
- **AI providers:** KieAI (images + video), OpenRouter (LLM), ElevenLabs (TTS/voice), RunPod (ComfyUI serverless)
- **Icons:** Lucide React
- **Fonts:** Inter (UI), JetBrains Mono (code/technical)
- **i18n:** i18next (English + Polish)

## Project Structure

```
src/
├── components/        # Shared UI (Header, Modals, CostTracker, etc.)
│   └── ui/            # Primitives (Button, Input, Select, Toast)
├── contexts/          # AuthContext, GuidedTutorialContext
├── data/              # Static data (directorPresets, genrePresets, showcaseVideos)
├── hooks/             # Shared hooks (useGenerationState, useCreditCheck, useUserPreferences)
├── lib/               # Core logic (48 modules — see Key Files below)
├── locales/           # i18n translations (en, pl)
├── pages/
│   ├── forge/         # THE CORE — workspace studio (see below)
│   ├── landing/       # Public marketing page
│   ├── login/         # Auth (login + register)
│   ├── pricing/       # Subscription tiers
│   ├── settings/      # User settings, API keys, branding
│   ├── teams/         # Team collaboration
│   ├── admin/         # Cost analytics dashboard
│   └── docs/          # API documentation
├── styles/
│   └── tailwind.css   # Design system tokens + component classes
└── Routes.jsx         # All routes (lazy-loaded)
```

## The Forge (Core Workspace)

The Forge (`/forge/:projectId`) is the main workspace. Everything happens here.

**3 Views** (switchable tabs):

- **Lightbox** — gallery wall of all generated images/videos
- **Kosmic View** — node graph (ReactFlow) showing asset connections and relationships
- **History** — chronological generation log with markdown export

**Key Panels** (slide-out or modal):

- **Prompt Workshop** (`ForgePromptWorkshop`) — main prompt editor with style injection
- **Artist Library** (`ArtistLibraryPanel`) — browse/favorite visual styles for images
- **Composer Library** (`ComposerLibraryPanel`) — browse/favorite styles for music/audio
- **Style Explorer** (`ForgeStyleExplorer`) — explore and apply artistic styles
- **Storyboard** (`ForgeStoryboard`) — scene sequencing with drag-and-drop
- **Timeline** (`ForgeTimeline`) — video timeline with duration, transitions
- **Director** (`directorScriptSystem`) — AI agent that plans entire video productions

**Key Forge hooks:**

- `useForgeState` — central state (scenes, images, project data)
- `useForgeStoryboard` — storyboard logic
- `useForgeTimeline` — timeline logic
- `useStyleLibrary` — style browsing and favorites
- `useComposerLibrary` — music style browsing

## AI Pipeline

**Image generation** → `lib/kieai.js` + `lib/kieai-models.js`

- Models: Nano Banana 2, Flux 2 Pro, GPT Image 1.5, Z-Image, Grok Imagine
- Default: `nano-banana-2`
- Supports: text-to-image, image-to-image (edit), upscale

**Video generation** → `lib/kieai.js` + `lib/kieai-models.js`

- Models: Kling 3.0, Sora 2, Veo 3.1, Seedance, RunPod/WAN 2.2
- Default: `runpod/wan2.2-i2v`
- Supports: start+end frame interpolation for some models

**Voiceover** → `lib/elevenlabs.js` via `generate-voice` edge function
**Music** → `lib/kieai.js` via `generate-music` edge function
**LLM (Director/prompts)** → `lib/openrouter.js` via `chat-director` edge function

**Prompt engineering** → `lib/promptEngineering.js`, `lib/rewriteWithStyle.js`, `lib/buildAnimationPrompt.js`

- Style injection rewrites user prompts with chosen artistic style
- Director presets encode 12 cinematographic styles (Kubrick, Spielberg, Fincher, etc.)

## Design System — Cinema Theme

Dark, cinematic palette. Everything should feel like a professional film editing suite.

```
Primary:     #D4A853 (warm gold)
Accent:      #E07A5F (rich terracotta)
Secondary:   #B08968 (warm bronze)
Background:  #0F0F0F (cinema black)
Surfaces:    #161616 (card), #1C1C1C (elevated)
Text:        #ECEAE5 (foreground), #8A8580 (muted)
Gradient:    linear-gradient(135deg, #D4A853, #E07A5F)
```

**CSS patterns** — use existing classes from `tailwind.css`:

- Cards: `cinema-card`, `scene-card`, `project-card`
- Buttons: `btn-primary` (gradient), `btn-outline`, `btn-ghost`
- Inputs: `input-cinema`
- Borders: `var(--color-border)`, `var(--color-border-strong)`

**Radius tokens:** `--radius-sm` (4px) → `--radius-2xl` (16px)

## Domain Glossary

| Term | Meaning |
|------|---------|
| **Forge** | The core workspace (`/forge/:projectId`) |
| **Scene** | One visual unit — has prompt, image, optional video |
| **Director** | AI agent that plans video productions (scripts, scenes) |
| **Kosmic View** | Node graph showing asset connections |
| **Lightbox** | Gallery wall view |
| **Storyboard** | Drag-and-drop scene sequencing |
| **Timeline** | Video timeline with transitions and durations |
| **Style** | An artistic/cinematographic style applied to prompts |
| **Prompt Workshop** | Main editor for creating AI image/video prompts |
| **Artist Library** | Collection of visual styles to browse and apply |
| **Composer Library** | Collection of music/audio styles |
| **Edge Function** | Supabase serverless function (Deno) for backend logic |
| **Credits** | In-app currency for AI generations |

## Key Files — Where Things Live

| What | File |
|------|------|
| All routes | `src/Routes.jsx` |
| Forge workspace | `src/pages/forge/index.jsx` |
| Central forge state | `src/pages/forge/hooks/useForgeState.js` |
| AI image/video calls | `src/lib/kieai.js` |
| AI model configs + pricing | `src/lib/kieai-models.js` |
| LLM calls | `src/lib/openrouter.js` |
| Prompt engineering | `src/lib/promptEngineering.js` |
| Style rewriting | `src/lib/rewriteWithStyle.js` |
| Animation prompt building | `src/lib/buildAnimationPrompt.js` |
| Director AI system | `src/lib/directorScriptSystem.js` |
| Director presets (12 styles) | `src/data/directorPresets.js` |
| Edge function wrappers | `src/lib/edgeFunctions.js` |
| Design tokens + components | `src/styles/tailwind.css` |
| Constants (timeouts, limits) | `src/lib/constants.js` |
| Forge CSS | `src/pages/forge/forge.css` |
| Supabase edge functions | `supabase/functions/` |
