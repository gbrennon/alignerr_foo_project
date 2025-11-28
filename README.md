# Employee Manager

A TypeScript project following Domain-Driven Design (DDD) architecture with Express.js for API, SQLite for storage, and Drizzle ORM for database operations.

## Project Structure

```
.
├── src/
│   ├── core/              # Shared utility classes and error handling
│   ├── domain/            # Domain layer with entities, value objects and business logic
│   │   └── models/        # Contains all domain models (Entities and Value Objects)
│   ├── adapters/          # Implementation of ports (e.g., repositories)
│   └── ports/             # Interfaces and abstractions
├── tests/                 # Unit and integration tests
├── docs/                  # Documentation and setup rules
└── README.md
```

## Setup and Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gbrennon/alignerr_foo_project.git
   cd alignerr_foo_project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup Database**
   ```bash
   npm run db:migrate   # Run Drizzle migrations to setup database schema
   ```

## Development

### Running the Application
```bash
npm run dev
```

### Testing

Run tests with:
```bash
npm test
```

## Dependencies

- **Express**: Web framework for creating REST APIs
- **SQLite**: Lightweight database for development and testing
- **Drizzle ORM**: Type-safe ORM for SQLite with migrations
- **Drizzle Kit**: CLI for managing database schema and migrations
- **Jest**: Testing framework
- **Babel**: For transpiling TypeScript to JavaScript

## Documentation

For detailed setup rules and project conventions, see the [docs directory](docs/).
