# SvelteSquad: Svelte 5 Todo App

A collaborative Todo application built with Svelte 5 utilizing the new runes system and native web APIs.

## Project Overview

This project is a Todo application that demonstrates modern web development practices with Svelte 5. It leverages:

- Svelte 5 runes for state management
- TypeScript for type safety
- LocalStorage for data persistence
- No external state management libraries

## Project Structure

```
/src/
  /components/  - UI components (TodoApp, TodoList, TodoItem, etc.)
  /stores/      - State management with Svelte 5 runes
  /lib/         - Shared utilities and helpers
  /types/       - TypeScript interfaces and type definitions
  App.svelte    - Main application component
  main.js       - Application entry point
```

## Features

- Create, read, update, and delete todos
- Filter todos by status (all/active/completed)
- Persistence using browser localStorage
- Responsive design and accessibility features

## Development Status

The project is currently in the initial setup phase. The coordination between different aspects of development is managed through documentation files:

- `coordination.mdc` - Project coordination and team communication
- `api_spec.mdc` - API specifications for state management
- `ui_components.mdc` - UI component design and documentation

## Development Team

The project is developed by three specialized agents:
- Agent-1: Frontend Developer (Svelte 5 UI and native web capabilities)
- Agent-2: Full Stack Developer (Svelte 5 and state management)
- Agent-3: Technical Advisor (Svelte 5 best practices and web standards)

## Getting Started

To use this project with Cursor AI:

1. Open the project in Cursor
2. Type "agent-3.mdc GO!" in the Cursor Composer (must use agent mode)
3. The Technical Advisor agent will be activated to help guide development
4. Use "@agent-1" or "agent-2" to activate other specialized agents as needed 