from uuid import UUID
from src.domain.entities import Todo
import pytest


def test_todo_create_new():
    title = "Test Todo"
    description = "This is a test todo"
    todo = Todo.create_new(title=title, description=description)

    assert isinstance(todo.id, UUID)
    assert todo.title == title
    assert todo.description == description
    assert todo.done is False


def test_todo_title_too_short():
    with pytest.raises(ValueError):
        Todo.create_new(title="Hi", description="This is a test todo")


def test_todo_title_too_long():
    with pytest.raises(ValueError):
        Todo.create_new(title="a" * 43, description="This is a test todo")


def test_todo_description_too_long():
    with pytest.raises(ValueError):
        Todo.create_new(title="Test Todo", description="a" * 513)
