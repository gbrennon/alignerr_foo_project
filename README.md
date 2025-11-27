# Foo Alignerr Project

## Project Approach

This project demonstrates object-oriented design principles using Python. It includes:

- **`Band` Class**: Implemented as a dataclass with required fields (`id` as UUID, `name` as string, `genres` as list of strings). Includes validation to ensure genres list has at least one element.
- **`BandRepository` Class**: Provides an in-memory repository pattern using a dictionary to store `Band` instances, allowing addition and retrieval operations.

## Setup

This project uses Poetry for dependency management. To set up the project, run:

```bash
poetry install
```

## Running Tests

After installing dependencies, you can run all unit tests using:

```bash
poetry run pytest
```

Tests cover both the `Band` creation logic and `BandRepository` operations.
