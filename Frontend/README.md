# TaskFlow - Todo Application Frontend

A modern, responsive todo application frontend built with React and Vite. Manage your tasks efficiently with a clean and intuitive user interface.

## Features

- ✅ **Create Todos** - Add new tasks with descriptions
- 📝 **Edit Todos** - Update existing todos with ease
- 🗑️ **Delete Todos** - Remove completed or unwanted tasks
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** - Built with Tailwind CSS for a polished look
- ⚡ **Fast Performance** - Powered by Vite for instant development and builds
- 🔄 **Real-time Updates** - Instant synchronization with backend API

## Tech Stack

- **React** (v19.2.0) - UI library
- **Vite** (v7.3.1) - Build tool and dev server
- **Tailwind CSS** (v4.1.18) - Utility-first CSS framework
- **Axios** (v1.13.5) - HTTP client for API requests
- **ESLint** - Code linting and quality assurance

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Top navigation bar with "Create Todo" button
│   ├── TodoCard.jsx      # Individual todo card component
│   └── TodoModal.jsx     # Modal for creating/editing todos
├── pages/
│   └── Home.jsx          # Main home page with todo list
├── services/
│   └── api.js            # API service with axios client
├── App.jsx               # Root application component
├── main.jsx              # Application entry point
└── index.css             # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Todo-Application/Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with your API URL:
```env
VITE_API_URL=http://localhost:5000/api/todos
```

### Development

Start the development server with hot module reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or your configured port).

### Build

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## API Integration

The application communicates with a backend API for CRUD operations. The API service is configured in [src/services/api.js](src/services/api.js):

**Base URL**: `http://localhost:5000/api/todos`

### Supported Endpoints

- `GET /` - Fetch all todos
- `POST /` - Create a new todo
- `PUT /:id` - Update a todo by ID
- `DELETE /:id` - Delete a todo by ID

## Components

### Navbar
Navigation bar with the TaskFlow logo and a "Create Todo" button to open the modal.

### TodoCard
Displays individual todo items with options to edit and delete.

### TodoModal
Modal form for creating new todos or editing existing ones. Handles form submission and validation.

### Home
Main page that fetches and displays all todos, manages state, and handles CRUD operations.

## Configuration

- **Vite Config**: [vite.config.js](vite.config.js)
- **ESLint Config**: [eslint.config.js](eslint.config.js)
- **PostCSS Config**: [postcss.config.mjs](postcss.config.mjs)
- **Tailwind Config**: Configured in postcss setup

## Environment Variables

Create a `.env.local` file in the root directory to configure your application:

```env
VITE_API_URL=http://localhost:5000/api/todos
```


## Performance Optimization

- Fast Refresh enabled for instant updates during development
- Optimized production build with code splitting
- Tailwind CSS purging for minimal CSS output


