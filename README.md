# Greenfield Project

This is a Greenfield project scaffold using Python with Poetry for dependency management.

## Setup

Follow the rules described in `docs/0_SETUP_RULES.md`.

## Features

- Todo entity with validation
- Unit tests for Todo entity
- TodoRepositoryPort for data storage operations
- Application layer ports for Todo services
- Presentation layer with FastAPI routing

## Running Tests

Use the following command to run tests:

```bash
poetry run pytest
```

## API

The application exposes a FastAPI endpoint for managing tasks:

- POST `/tasks/` to create a new task

## Documentation

For detailed documentation, see the `docs/` directory:
- [Setup Rules](docs/0_SETUP_RULES.md)
- [Todo Guidelines](docs/TODO_GUIDELINES.md)
- [Todo Improvements](docs/1_todo_improvements.md)
- [Repository Port](docs/2_repository_port.md)
- [Application Ports](docs/3_application_ports.md)
- [Presentation Layer](docs/4_presentation_layer.md)
