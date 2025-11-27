# Task 2: Repository Port

This document describes the `TodoRepositoryPort` protocol and its methods.

## Protocol Methods

### save

Saves a Todo item to the storage.

```python
def save(self, todo: Todo) -> None:
    ...
```

### find_all

Retrieves all Todo items from the storage.

```python
def find_all(self) -> List[Todo]:
    ...
```

### get

Retrieves a single Todo item by its ID.

```python
def get(self, todo_id: str) -> Optional[Todo]:
    ...
```

### delete

Deletes a Todo item by its ID.

```python
def delete(self, todo_id: str) -> None:
    ...
