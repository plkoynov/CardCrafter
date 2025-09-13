# Frontend Structure

This document consolidates the README information generated across the frontend scaffolding to describe the recommended folder structure and key files for the CardCrafter frontend (Angular + Tailwind).

## High-level layout

frontend/src/app

- core/ // singletons, app-wide providers (only imported by AppModule)
  - services/
  - guards/
  - interceptors/
  - core.module.ts
- shared/ // reusable presentational pieces (no singletons)
  - ui/ // primitive UI components (Heading, Text, Image, Card, Column)
  - components/ // small composed controls (style-controls, export-controls)
  - pipes/
  - directives/
  - shared.module.ts
- features/ // feature modules (lazy-loaded when appropriate)
  - editor/ // Editor feature
    - pages/
      - editor-page.component.ts
    - components/
      - layout-tree/
      - property-panel/
    - services/
      - preview-sync.service.ts
  - preview/ // Live preview feature
    - preview.module.ts
    - components/
      - card-preview/
    - services/
      - preview-renderer.service.ts
  - export/
    - export.module.ts
    - components/
      - export-controls/
    - services/
      - export.service.ts
- models/ // interfaces and JSON schemas used across the app
  - layout.model.ts
  - layout.schema.json

## Core Module

The CoreModule should contain app-wide singletons such as services, guards and HTTP interceptors. Import CoreModule only in AppModule. Example services:

- layout-storage.service.ts
- api.interceptor.ts
- ai-proxy.service.ts

## Shared Module

SharedModule hosts stateless presentational components and utilities, intended for reuse. Keep no singletons here. Examples of UI primitives:

- heading
- text
- image
- card
- column

## Features

Each major feature is implemented as a feature module. Features should be lazy-loaded where appropriate to improve initial bundle size. Example features:

- editor: editor UI, layout tree, property panel, services to manage drag/drop and preview sync
- preview: renders the card layout from JSON
- export: export controls and services for image/pdf export

## Models

Use a centralized models folder for TypeScript interfaces and JSON Schemas. The JSON schema for the card layout is placed at `models/layout.schema.json` and interfaces at `models/layout.model.ts`.

## Naming conventions and rules (recommended)

- Group by feature first, then by type inside the feature.
- One component per folder containing .ts/.html/.scss and a small `index.ts` barrel when useful.
- Kebab-case file and folder names.
- Use SharedModule for presentational components; CoreModule for singletons.
- Keep UI primitives pure and stateless; container components live in feature modules and orchestrate state and services.
- Avoid circular dependencies; keep a unidirectional dependency graph: features -> shared -> core.
