from src.infrastructure.in_memory_repository import InMemoryTodoRepository
from src.domain.entities import Todo


def test_in_memory_todo_repository():
    data_source = {}
    repository = InMemoryTodoRepository(data_source)

    # Test save and get
    todo = Todo.create_new(title="Test Todo", description="Test Description")
    repository.save(todo)
    retrieved_todo = repository.get(str(todo.id))
    
    assert retrieved_todo == todo
    assert str(todo.id) in data_source

    # Test find_all
    todos = repository.find_all()
    assert len(todos) == 1
    assert todos[0] == todo

    # Test delete
    repository.delete(str(todo.id))
    assert repository.get(str(todo.id)) is None
    assert str(todo.id) not in data_source
