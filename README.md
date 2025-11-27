# Foo Alignerr Project

This is a TypeScript project following the setup rules defined in `docs/0_SETUP_RULES.md`.

## Project Structure

- `src/` - Contains all source code
- `tests/` - Contains test files
- `docs/` - Contains project documentation and rules

## Setup

1. Install dependencies:
```bash
npm install
```

## Development

This project uses NPM for dependency management and TypeScript for type-safe code.

### Building

```bash
npx tsc
```

## Development

This project uses NPM for dependency management and TypeScript for type-safe code.

### Building

```bash
npx tsc
```

### Result Type

The project includes a `Result<T>` interface with:
- `Ok<T>` class for successful outcomes
- `Err<E>` class for error handling where `unwrap()` returns the error value

## Documentation

For detailed setup rules and guidelines, see [`docs/0_SETUP_RULES.md`](docs/0_SETUP_RULES.md)
