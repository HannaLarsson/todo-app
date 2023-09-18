# node-react-monorepo-template

### What is this?

This repository is a minimalistic template for developing, building and testing:

* Mono repo that supports several apps and shared packages (pnpm + turbo)
* A minimalistic Express REST API backend
* A minimalistic React frontend that calls REST endpoints using proxy
* Everything using Typescript
* Tests using vitest
* Shared packages between frontend and backend including shared linting and tsconfig
* Basic github action for build and test

The template does not include:

* Authentication/authorization
* Cloud deployment
* React best practices
* Express best practices
* Opionions on styling

### Structure

```bash
.
├── apps
│   ├── client                 # React + Vite
│   └── server                 # Node + Express
└── packages
    ├── api                    # Shared validators, types and constants
    ├── eslint-config-custom   # Shared eslint config
    └── tsconfig               # Shared tsconfig for Node and React
```

### Prerequisites

Before you begin, make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) v18 LTS
- [pnpm](https://pnpm.io/) v8

### Getting Started

1. Install prerequisites.

2. Install dependencies. Run:

   ```sh
   pnpm i
   ```

3. Start local development servers for server and client:

   ```sh
   pnpm dev
   ```

#### Root level commands

| Command          | Description                                           |
| ---------------- | ----------------------------------------------------- |
| `pnpm dev`       | Start local development servers for server and client |
| `pnpm lint`      | Lint the project                                      |
| `pnpm test`      | Run tests for the project                             |
| `pnpm typecheck` | Typecheck the project                                 |
| `pnpm format`    | Format the project with prettier                      |
| `pnpm clean`     | Clean temporary files (e.g node_modules and dist)     |
