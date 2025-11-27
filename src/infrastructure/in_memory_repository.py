from src.domain.ports import TodoRepositoryPort
from src.domain.entities import Todo


class InMemoryTodoRepository(TodoRepositoryPort):
    def __init__(self, data_source: dict):
        self.todos = data_source

    def save(self, todo: Todo) -> None:
        self.todos[str(todo.id)] = todo

    def find_all(self) -> list[Todo]:
        return list(self.todos.values())

    def get(self, todo_id: str) -> Todo | None:
        return self.todos.get(todo_id)

    def delete(self, todo_id: str) -> None:
        if todo_id in self.todos:
            del self.todos[todo_id]
