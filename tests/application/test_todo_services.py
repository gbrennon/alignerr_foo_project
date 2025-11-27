from unittest.mock import Mock
from src.application.todo_services import CreateTodoService, GetTodoService, UpdateTodoService, DeleteTodoService
from src.domain.ports import CreateTodoDTO, GetTodoDTO, UpdateTodoDTO, DeleteTodoDTO
from src.domain.entities import Todo


def test_create_todo_service(mocker):
    mock_repository = Mock()
    service = CreateTodoService(repository=mock_repository)

    dto = CreateTodoDTO(title="New Todo", description="Description")
    result = service.execute(dto=dto)

    mock_repository.save.assert_called_once()
    assert result.title == dto.title
    assert result.description == dto.description
    assert len(result.id) > 0


def test_get_todo_service(mocker):
    mock_repository = Mock()
    service = GetTodoService(repository=mock_repository)

    todo = Todo.create_new(title="Test", description="Test description")
    mock_repository.get.return_value = todo

    dto = GetTodoDTO(id=str(todo.id))
    result = service.execute(dto=dto)

    mock_repository.get.assert_called_once_with(todo_id=dto.id)
    assert result.id == str(todo.id)
    assert result.title == todo.title
    assert result.description == todo.description
    assert result.done == todo.done


def test_update_todo_service(mocker):
    mock_repository = Mock()
    service = UpdateTodoService(repository=mock_repository)

    todo = Todo.create_new(title="Old Title", description="Old Description")
    mock_repository.get.return_value = todo

    dto = UpdateTodoDTO(id=str(todo.id), title="New Title")
    result = service.execute(dto=dto)

    mock_repository.get.assert_called_once_with(todo_id=dto.id)
    mock_repository.save.assert_called_once()
    assert result.id == str(todo.id)
    assert result.title == dto.title


def test_delete_todo_service(mocker):
    mock_repository = Mock()
    service = DeleteTodoService(repository=mock_repository)

    todo = Todo.create_new(title="Delete Me", description="To delete")
    mock_repository.get.return_value = todo

    dto = DeleteTodoDTO(id=str(todo.id))
    result = service.execute(dto=dto)

    mock_repository.get.assert_called_once_with(todo_id=dto.id)
    mock_repository.delete.assert_called_once_with(todo_id=dto.id)
    assert result.id == dto.id
