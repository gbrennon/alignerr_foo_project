from uuid import UUID
from src.domain.entities import Todo


def test_todo_create_new():
    title = "Test Todo"
    description = "This is a test todo"
    todo = Todo.create_new(title=title, description=description)

    assert isinstance(todo.id, UUID)
    assert todo.title == title
    assert todo.description == description
    assert todo.done is False
