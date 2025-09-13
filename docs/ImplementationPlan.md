# Implementation Plan: CardCrafter (Dynamic Business Card Builder with AI, Tailwind CSS)

> **Note:** All tasks are implementation steps. Testing tasks are intentionally omitted.

## Checklist

- [x] **Create Angular Project**

  - [x] Initialize new Angular workspace using Angular CLI
  - [x] Set up Tailwind CSS for styling

- [x] **Set Up Project Structure**

  - [x] Create core modules: components, services, models
  - [x] Organize folder structure for scalability

- [-] **Implement Component Library (with Tailwind CSS)**

  - [x] Create Heading component styled with Tailwind
  - [x] Create Text component styled with Tailwind
  - [x] Create Link component styled with Tailwind
  - [x] Create Image component styled with Tailwind
  - [x] Create Column container component styled with Tailwind
  - [-] Create Row container component (optional), styled with Tailwind
  - [-] Create Divider component (optional), styled with Tailwind
  - [-] Create Background/Shape component (optional), styled with Tailwind
  - [x] Create Card (root) container component styled with Tailwind

- [ ] **Layout Management**

  - [x] Define JSON schema for card layout
  - [x] Implement service for managing layout JSON
  - [x] Implement functionality for adding/removing components to the layout
  - [x] Implement support for nested components (e.g., columns containing text, images, etc.)
  - [ ] Implement drag-and-drop for components (using Angular CDK)

- [ ] **Styling and Responsiveness**

  - [ ] Implement dynamic style controls for components (font, color, etc.) using Tailwind classes
  - [ ] Add responsive style options (Tailwind’s responsive utilities)
  - [ ] Ensure live preview adapts to device size using Tailwind

- [ ] **Live Preview**

  - [ ] Render card layout dynamically from JSON object
  - [ ] Update preview in real-time as user edits layout/components

- [ ] **AI Content Suggestions**

  - [ ] Integrate with OpenAI API or similar for text generation
  - [ ] Add UI elements for requesting AI suggestions (tagline, job title, bio, etc.)
  - [ ] Populate relevant fields with AI-generated content

- [ ] **Export Functionality**

  - [ ] Implement export to image using HTML2Canvas
  - [ ] Implement export to PDF using jsPDF
  - [ ] Add export controls to UI

- [ ] **Backend Integration**

  - [ ] Set up ASP.NET Core Web API project
  - [ ] Implement endpoints for saving/loading card layouts
  - [ ] Implement endpoints for AI text generation (proxy to OpenAI API)
  - [ ] Add authentication if required (basic setup only)
  - [ ] Connect Angular frontend to backend APIs

- [ ] **Polish UI/UX**
  - [ ] Add helpful tooltips and labels to UI controls styled with Tailwind
  - [ ] Refine drag-and-drop experience (visual cues/hints) styled with Tailwind
  - [ ] Improve layout controls for accessibility and clarity using Tailwind
