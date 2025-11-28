# Employee Manager

A TypeScript project following DDD architecture with Express, SQLite and Drizzle ORM.

## Project Structure

- `src/` - Main source code following DDD layers:
  - `domain/` - Business logic
  - `adapters/` - Implementation of ports
  - `ports/` - Interfaces and base classes

- `docs/` - Documentation files with setup rules and guidelines

## Setup

1. Install dependencies with NPM:
   ```bash
   npm install
   ```

2. Follow the rules documented in `docs/0_SETUP_RULES.md`

## Development

This project uses Express.js as the web framework and SQLite with Drizzle ORM for data persistence.
