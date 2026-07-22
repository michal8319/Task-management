# Project & Task Management

A React single-page application for organizing projects and tracking their tasks through a Kanban-style workflow (Backlog → In Progress → In Review → Done). Built with Redux Toolkit for state management and MUI Joy for the UI.

## Features

- **Authentication** — simple login screen with an optional "remember me" session
- **Projects** — create, update, and delete projects
- **Tasks** — create, update, delete, and move tasks between statuses within a project
- **Task metadata** — priority (low / medium / high) and deadline per task
- **Client-side state** — all data lives in a Redux store, seeded with sample projects and tasks so the app is fully usable out of the box

## Tech Stack

- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/) / [React Redux](https://react-redux.js.org/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [MUI Joy UI](https://mui.com/joy-ui/getting-started/)
- ESLint

## Project Structure

```
src/
├── components/       # Reusable UI pieces (project/task cards, create/update/delete forms)
├── pages/            # Route-level views (Home, Login, ProjectMain, ProjectDetails)
├── store/            # Redux slices: projects, tasks, user
├── App.jsx           # Route definitions
└── main.jsx          # App entry point
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm

### Installation

```bash
git clone https://github.com/michal8319/Task-management.git
cd Task-management/Project-and-task-management
npm install
```

### Run in development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Demo Login

The app ships with a mock user for demo purposes — no backend required:

| Username | Password |
|---|---|
| `michal and nechami` | `1234` |

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build |
