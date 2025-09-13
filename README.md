# CardCrafter

**CardCrafter** is a dynamic, AI-powered business card builder built with Angular and Tailwind CSS. It enables users to design, customize, and export professional business cards with ease, leveraging AI to suggest impactful content.

---

## Features

- **Drag-and-drop card builder:**  
  Easily add, arrange, and nest components (text, headings, images, links, columns, dividers, backgrounds) on your card.

- **Live preview:**  
  See card updates instantly as you edit.

- **AI-powered content suggestions:**  
  Get recommended taglines, job titles, bios, and more using integrated AI.

- **Responsive design:**  
  Works seamlessly across desktop, tablet, and mobile devices.

- **Accessible color palette:**  
  All colors are chosen for compliance with WCAG AA standards, ensuring readability and usability for all users.

- **Export options:**  
  Save your card as an image or PDF for sharing and printing.

- **Backend integration:**  
  Save/load layouts and use secure API endpoints for AI features.

---

## Technology Stack

- **Frontend:** Angular, Tailwind CSS
- **Backend:** ASP.NET Core Web API (for persistence and AI proxy)
- **AI:** OpenAI API (or compatible service)
- **Export:** HTML2Canvas, jsPDF

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [.NET SDK](https://dotnet.microsoft.com/download) (for backend)
- [OpenAI API key](https://platform.openai.com/signup) (for AI features)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/plkoynov/CardCrafter.git
   cd CardCrafter
   ```

2. **Frontend setup:**

   ```bash
   cd frontend
   npm install
   npm run start
   ```

3. **Backend setup:**

   ```bash
   cd backend
   dotnet restore
   dotnet run
   ```

4. **Configuration:**
   - Add your OpenAI API key and other environment variables to the backend config.

### Usage

- Open [http://localhost:4200](http://localhost:4200) in your browser.
- Drag components from the toolbox onto the card canvas.
- Select card elements to edit content, style, and request AI suggestions.
- Export your card as image or PDF via the controls.

---

## Project Structure

```
CardCrafter/
├── frontend/   # Angular + Tailwind UI
│   ├── src/
│   └── ...
├── backend/    # ASP.NET Core API
│   └── ...
├── docs/    # PRD, Layout and Implementation plan
├── README.md
└── ...
```

---

## Accessibility & Compliance

- All UI colors selected for sufficient contrast and readability.
- Keyboard navigation and focus states are enabled.
- Responsive layout adapts for mobile, tablet, and desktop.

---
