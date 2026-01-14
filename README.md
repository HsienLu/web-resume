# Web Resume

A modern, responsive, and customizable web-based resume application built with React, TypeScript, and TailwindCSS. This project allows you to easily maintain and update your professional portfolio and resume in a clean, web-accessible format.

## Features

- **Responsive Design**: Looks great on mobile, tablet, and desktop devices.
- **Dynamic Content**: Resume data is separated from the UI, making it easy to update.
- **Modern UI**: Clean and professional aesthetic using Shadcn UI and TailwindCSS.
- **Print Friendly**: Optimized for printing to PDF.

## Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/web-resume.git
   cd web-resume
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

## Customization

To customize the resume with your own information:

1. Open `src/data/resume.ts` (or the relevant data file).
2. Update the JSON/Object structure with your personal details, experience, and projects.
3. Save the file to see the changes reflect immediately.

## Building for Production

To create a production-ready build:

```bash
npm run build
```

The output will be in the `dist` directory.

## License

MIT
