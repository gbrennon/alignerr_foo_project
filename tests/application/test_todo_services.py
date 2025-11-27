import pytest
from src.application.todo_services import CreateTodoService, GetTodoService, UpdateTodoService, DeleteTodoService
from src.domain.ports import CreateTodoDTO, GetTodoDTO, UpdateTodoDTO, DeleteTodoDTO
from src.domain.entities import Todo
from uuid import uuid4


class FakeRepository:
    def __init__(self):
        self.todos = {}

    def save(self, todo: Todo) -> None:
        self.todos[str(todo.id)] = todo

    def find_all(self) -> list[Todo]:
        return list(self.todos.values())

    def get(self, todo_id: str) -> Todo | None:
        return self.todos.get(todo_id)

    def delete(self, todo_id: str) -> None:
        if todo_id in self.todos:
            del self.todos[todo_id]


def test_create_todo_service():
    repository = FakeRepository()
    service = CreateTodoService(repository=repository)

    dto = CreateTodoDTO(title="New Todo", description="Description")
    result = service.execute(dto=dto)

    assert result.title == dto.title
    assert result.description == dto.description
    assert len(result.id) > 0


def test_get_todo_service():
    repository = FakeRepository()
    service = GetTodoService(repository=repository)

    todo = Todo.create_new(title="Test", description="Test description")
    repository.save(todo)

    dto = GetTodoDTO(id=str(todo.id))
    result = service.execute(dto=dto)

    assert result.id == str(todo.id)
    assert result.title == todo.title
    assert result.description == todo.description
    assert result.done == todo.done


def test_update_todo_service():
    repository = FakeRepository()
    service = UpdateTodoService(repository=repository)

    todo = Todo.create_new(title="Old Title", description="Old Description")
    repository.save(todo)

    dto = UpdateTodoDTO(id=str(todo.id), title="New Title")
    result = service.execute(dto=dto)

    assert result.id == str(todo.id)
    assert result.title == dto.title
    assert result.description == todo.description


def test_delete_todo_service():
    repository = FakeRepository()
    service = DeleteTodoService(repository=repository)

    todo = Todo.create_new(title="Delete Me", description="To delete")
    repository.save(todo)

    dto = DeleteTodoDTO(id=str(todo.id))
    result = service.execute(dto=dto)

    assert result.id == str(todo.id)
    assert str(todo.id) not in repository.todos
