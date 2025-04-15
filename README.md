# Svelte 5 Todo App with Cursor Composers

This project demonstrates using Cursor's multi-agent composer feature to build a Todo application using Svelte 5.

## Purpose

The primary goal is to showcase how multiple AI agents, defined using Cursor Rules, can collaborate on a software development task. Each agent has a specific role and interacts through shared documentation and coordination files.

## Agents

This project utilizes three distinct agents defined in the `.cursor/rules/` directory:

1.  **`agent-1` (Frontend Developer):**
    *   Specializes in pure Svelte 5 UI and native web capabilities.
    *   Responsible for building UI components (`/src/components/`) based on specifications.
    *   Focuses on accessibility and responsive design.
    *   Documents UI plans in `ui_components.mdc`.

2.  **`agent-2` (Full Stack Developer):**
    *   Specializes in pure Svelte 5 state management using runes and TypeScript.
    *   Handles data structures, persistence (localStorage), and store APIs (`/src/stores/`).
    *   Documents API specifications in `api_spec.mdc`.

3.  **`agent-3` (Technical Advisor):**
    *   Focuses on Svelte 5 best practices, web standards, and overall project coordination.
    *   Provides technical guidance and performs code reviews.
    *   Oversees coordination via `coordination.mdc`.

## Coordination

Agents coordinate their work primarily through:

*   `coordination.mdc`: A central file for tracking project status, tasks, blockers, and inter-agent communication.
*   Agent-specific scratchpads (`agent_1.txt`, `agent_2.txt`, `agent_3.txt`): For individual planning and notes.
*   Artifact files (`api_spec.mdc`, `ui_components.mdc`): For sharing specific design documents.

## Technology Stack

*   Svelte 5 (with Runes)
*   TypeScript
*   Vite (Assumed, standard for SvelteKit)
*   Native Web APIs (localStorage)

## Cursor Rules

The core of the multi-agent setup lies in the `.cursor/rules/` directory. These files define the roles, responsibilities, workflow, and interaction points for each agent, enabling Cursor to orchestrate their collaboration.

## Running the Project (Example)

In Cursor Composer: @agent-3.mds GO!

*(Note: Add specific setup and run instructions based on your project initialization)*
