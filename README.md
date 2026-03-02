# 🚀 Lovable Project

> A modern, full-featured web application built with React, TypeScript, and Tailwind CSS — scaffolded and managed via [Lovable](https://lovable.dev).

**Live Project URL:** [https://lovable.dev/projects/b42c70b2-b2bd-4453-b6fa-19970a51a363](https://lovable.dev/projects/b42c70b2-b2bd-4453-b6fa-19970a51a363)

---

## 📸 Preview

![App Preview](https://github.com/user-attachments/assets/8b66aed3-8e22-49df-8e21-5429603a168c)

---

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| [Vite](https://vitejs.dev/) | Lightning-fast build tool and dev server |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript for robust development |
| [React](https://react.dev/) | Component-based UI library |
| [shadcn/ui](https://ui.shadcn.com/) | Accessible, customizable UI component library |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework for rapid styling |

---

## 📁 File Structure

```
├── public/                    # Static assets served as-is
│   └── favicon.ico
│
├── src/                       # Main application source code
│   ├── assets/                # Images, fonts, and other static assets
│   │
│   ├── components/            # Reusable UI components
│   │   └── ui/                # shadcn/ui base components (Button, Card, etc.)
│   │
│   ├── hooks/                 # Custom React hooks
│   │
│   ├── lib/                   # Utility functions and helpers
│   │   └── utils.ts           # Common utility functions (e.g., cn() for classnames)
│   │
│   ├── pages/                 # Page-level components (route views)
│   │   └── Index.tsx          # Default landing page
│   │
│   ├── App.tsx                # Root application component with routing setup
│   ├── main.tsx               # Application entry point (mounts React to DOM)
│   └── index.css              # Global styles and Tailwind CSS directives
│
├── .gitignore                 # Files and folders excluded from Git
├── components.json            # shadcn/ui configuration
├── eslint.config.js           # ESLint linting rules
├── index.html                 # HTML entry point loaded by Vite
├── package.json               # Project dependencies and npm scripts
├── postcss.config.js          # PostCSS configuration (used by Tailwind)
├── tailwind.config.ts         # Tailwind CSS theme and plugin configuration
├── tsconfig.json              # TypeScript compiler configuration
├── tsconfig.app.json          # TypeScript config specific to the app source
├── tsconfig.node.json         # TypeScript config for Node/build tooling
└── vite.config.ts             # Vite bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

> **Tip:** Use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to manage Node.js versions easily.

### Installation & Local Development

```bash
# 1. Clone the repository
git clone <YOUR_GIT_URL>

# 2. Navigate into the project directory
cd <YOUR_PROJECT_NAME>

# 3. Install dependencies
npm install

# 4. Start the development server (with hot module reloading)
npm run dev
```

The app will be available at `http://localhost:8080` by default.

### Build for Production

```bash
# Build the optimized production bundle
npm run build

# Preview the production build locally
npm run preview
```

---

## ✏️ Ways to Edit This Project

### 1. Using Lovable (Recommended for AI-assisted development)
Visit the [Lovable Project Dashboard](https://lovable.dev/projects/b42c70b2-b2bd-4453-b6fa-19970a51a363) and use the AI prompt interface. Changes are automatically committed to this repository.

### 2. Using Your Local IDE
Clone the repo, make changes locally, and push — updates reflect in Lovable automatically.

### 3. Editing Directly on GitHub
Navigate to any file in the repository, click the pencil (✏️) icon, edit, and commit.

### 4. Using GitHub Codespaces
- Go to the repository on GitHub
- Click **Code** → **Codespaces** → **New codespace**
- Edit files in the browser-based VS Code environment and push when done

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server with HMR |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

---


---

## 📄 License

This project is open source. Feel free to use and modify it as needed.
