# Front-End Layout Specification (CardCrafter, Tailwind CSS)

This document describes the responsive layout and sizing for the **CardCrafter** Dynamic Business Card Builder with AI front end.

---

## Layout Description

### Main Screen Structure

- **Header:**  
  - Top bar with the project name (“CardCrafter”) and navigation (if needed).
  - Actions like “New Card”, “Open Card”, and “Export” are located here.

- **Primary Workspace:**  
  Split into **three main panels**:
  - **Left Panel (“Component Toolbox”):**
    - Sidebar listing available business card components: Heading, Text, Link, Image, Column, Row, Divider, Background/Shape.
    - Each item is a button or draggable card, styled with Tailwind.
    - Option to filter/search components at the top.
  - **Central Panel (“Canvas/Editor”):**
    - Large area for building the card layout.
    - The card is rendered here based on the current JSON.
    - Drag-and-drop interface for adding, rearranging, and nesting components.
    - Each component visually outlined and editable.
    - Clicking a component opens inline or sidebar editing for content and styles.
  - **Right Panel (“Properties & AI Suggestions”):**
    - Displays properties and settings for the selected component.
    - Fields for editing content, style, and responsive options.
    - AI suggestion buttons (e.g., “Generate tagline”) with results shown instantly.

- **Footer:**  
  Simple footer with copyright, version, and links.

---

## Color Palette

To ensure accessibility and a professional, modern look, use the following color palette.  
All colors meet [WCAG AA](https://www.w3.org/WAI/WCAG21/Techniques/general/G18.html) contrast requirements for text and UI elements.

| Purpose                    | Color Name         | HEX        | Tailwind Class             | Notes                                |
|----------------------------|-------------------|------------|----------------------------|--------------------------------------|
| Background (main)          | Gray 50           | #F9FAFB    | `bg-gray-50`               | Soft, neutral base                   |
| Panel Background           | White             | #FFFFFF    | `bg-white`                 | Card, panel, editor backgrounds      |
| Primary Accent             | Blue 700          | #1D4ED8    | `bg-blue-700` / `text-blue-700` | Buttons, active state, links         |
| Primary Hover/Focus        | Blue 800          | #1E40AF    | `bg-blue-800` / `text-blue-800` | Button hover, focus outline          |
| Secondary Accent           | Cyan 500          | #06B6D4    | `bg-cyan-500` / `text-cyan-500` | Highlights, secondary buttons        |
| Divider/Border             | Gray 300          | #D1D5DB    | `border-gray-300` / `bg-gray-300` | Dividers, lines                      |
| Text (primary)             | Gray 900          | #111827    | `text-gray-900`             | Main text                            |
| Text (secondary)           | Gray 600          | #4B5563    | `text-gray-600`             | Subtext, hints                       |
| Error/Alert                | Red 600           | #DC2626    | `text-red-600` / `bg-red-100` | Error messages, alerts               |
| Success                    | Emerald 600       | #059669    | `text-emerald-600` / `bg-emerald-100` | Success, confirmation                |
| Card shadow                | Transparent Black | rgba(0,0,0,0.04) | `shadow-md` / custom         | Subtle elevation                     |

**Contrast Compliance:**
- All text colors have at least 4.5:1 contrast ratio against their backgrounds.
- Primary buttons use white text (`text-white`) on blue backgrounds (`bg-blue-700`), ensuring >7:1 contrast.
- Secondary buttons and accents use dark text on light backgrounds, or vice versa.
- Use `focus:ring-blue-800` for focus outlines.

**Usage Tips:**
- Avoid using gray text on gray backgrounds below `gray-700` for text.
- For visually impaired users, ensure all interactive elements (e.g., buttons, links) have strong color contrast and visible focus outlines.
- Use Tailwind’s `dark:` variants for optional dark mode support.

---

## Sizing & Responsiveness

### 1. Header

- Height: `h-16` (`4rem`) desktop/tablet, `h-12` (`3rem`) mobile
- Padding: `px-6` desktop/tablet, `px-2` mobile
- Layout: `w-full flex items-center justify-between`
- Responsive: On mobile, reduced height/padding

---

### 2. Main Workspace (`flex` container)

- Layout:  
  - Desktop/tablet: `flex flex-row w-full h-[calc(100vh-4rem)]`
  - Mobile: `flex-col h-auto`
- Padding: `p-6` desktop/tablet, `p-2` mobile

#### 2.1 Left Panel ("Component Toolbox")

- Width: `w-64` (`16rem`) desktop/tablet, `w-full` mobile
- Min-Width: `min-w-[12rem]`
- Height: `h-full`
- Overflow: `overflow-y-auto`
- Responsive:  
  - Hidden/collapsible on small screens (`md:block sm:hidden`)
  - Vertical scroll for long lists

#### 2.2 Central Panel ("Canvas/Editor")

- Width: `flex-1`
- Min-Height: `min-h-[24rem]`
- Max-Width: `max-w-3xl mx-auto` desktop/tablet, `w-full max-w-full` mobile
- Padding: `p-4` desktop/tablet, `p-2` mobile
- Background: `bg-white rounded-lg shadow-md`
- Responsive: Canvas fills available width and stacks vertically on mobile

##### Card (Business Card Preview)

- Max Width: `max-w-[400px]` desktop/tablet
- Width: `w-full` (never exceeds `400px`)
- Height: `h-[220px]` (`13.75rem`) desktop/tablet, `h-[160px]` mobile
- Padding: `p-6` desktop/tablet, `p-2` mobile
- Background: `bg-gradient-to-r from-gray-50 to-gray-200 shadow-lg rounded-xl`
- Responsive:  
  - On mobile: `max-w-full h-[160px] p-2`
  - Font sizes and spacing shrink via Tailwind responsive classes (`sm:text-sm`, `md:text-base`, etc.)
  - Layout switches from multi-column to single column for small screens

##### Card Components (Example)

- Heading: `text-2xl font-bold mb-2` desktop, `sm:text-lg mb-1` mobile
- Text: `text-base mb-1` desktop, `sm:text-sm` mobile
- Link: `text-blue-600 underline text-sm` desktop, `sm:text-xs` mobile
- Image: `w-20 h-20 rounded-full` desktop, `sm:w-12 sm:h-12` mobile
- Column: `flex flex-col gap-2` desktop, `gap-1` mobile
- Divider: `h-px bg-gray-300 my-3` desktop, `my-2` mobile

#### 2.3 Right Panel ("Properties & AI Suggestions")

- Width: `w-72` (`18rem`) desktop/tablet
- Min-Width: `min-w-[14rem]`
- Height: `h-full`
- Padding: `p-4` desktop/tablet, `p-2` mobile
- Responsive:  
  - Collapsible/hidden on small screens (`md:block sm:hidden`)
  - Pops up as a modal or drawer on mobile

---

### 3. Footer

- Height: `h-10` (`2.5rem`) desktop/tablet, `h-8` mobile
- Padding: `px-6` desktop/tablet, `px-2` mobile
- Text Size: `text-xs` desktop/tablet, `text-[10px]` mobile

---

### 4. Responsive Breakpoints (Tailwind)

- Desktop: `md:` and up
- Tablet: `sm:` to `md:`
- Mobile: `sm:` and below

---

### 5. Responsive Behavior Summary

- Sidebar panels collapse or stack vertically on mobile.
- Card layout switches from multi-column to single column for small screens.
- Paddings, font sizes, and gaps shrink on mobile.
- Properties panel becomes a modal/drawer on small screens.
- Drag-and-drop is touch-friendly and accessible.

---

### 6. All Styling and Layout

All sizes, spacing, colors, borders, and responsive behaviors are controlled with Tailwind CSS utility classes.

---