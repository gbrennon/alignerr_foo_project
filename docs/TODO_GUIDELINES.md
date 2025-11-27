# Todo Guidelines

This document contains guidelines for working with the Todo entity.

## Creating a Todo

To create a new Todo item, use the `create_new` factory method:

```python
todo = Todo.create_new(title="Buy milk", description="Need to buy milk from the store")
```

## Attributes

- `id`: A unique UUID identifier (auto-generated)
- `title`: Short description of the todo
- `description`: Detailed information about the todo
- `done`: Boolean indicating completion status (default: False)
