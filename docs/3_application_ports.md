# Task 3: Application Ports

This document describes the application layer ports and their implementation.

## Ports Implemented

### CreateTodoPort

Creates a new Todo item.

**Input DTO**: `CreateTodoDTO`
- `title`: str
- `description`: str

**Output DTO**: `TodoCreatedDTO`
- `id`: str
- `title`: str
- `description`: str

### GetTodoPort

Retrieves a Todo item by its ID.

**Input DTO**: `GetTodoDTO`
- `id`: str

**Output DTO**: `TodoDetailsDTO`
- `id`: str
- `title`: str
- `description`: str
- `done`: bool

### UpdateTodoPort

Updates a Todo item by its ID.

**Input DTO**: `UpdateTodoDTO`
- `id`: str
- `title`: Optional[str]
- `description`: Optional[str]

**Output DTO**: `TodoUpdatedDTO`
- `id`: str
- `title`: str
- `description`: str
- `done`: bool

### DeleteTodoPort

Deletes a Todo item by its ID.

**Input DTO**: `DeleteTodoDTO`
- `id`: str

**Output DTO**: `TodoDeletedDTO`
- `id`: str
