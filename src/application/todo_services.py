from src.domain.ports import (
    CreateTodoPort, 
    CreateTodoDTO, 
    TodoCreatedDTO, 
    TodoRepositoryPort,
    GetTodoPort,
    GetTodoDTO,
    TodoDetailsDTO,
    UpdateTodoPort,
    UpdateTodoDTO,
    TodoUpdatedDTO,
    DeleteTodoPort,
    DeleteTodoDTO,
    TodoDeletedDTO
)
from src.domain.entities import Todo


class CreateTodoService(CreateTodoPort):
    def __init__(self, repository: TodoRepositoryPort):
        self.repository = repository

    def execute(self, dto: CreateTodoDTO) -> TodoCreatedDTO:
        todo = Todo.create_new(title=dto.title, description=dto.description)
        self.repository.save(todo)
        return TodoCreatedDTO(
            id=str(todo.id),
            title=todo.title,
            description=todo.description
        )


class GetTodoService(GetTodoPort):
    def __init__(self, repository: TodoRepositoryPort):
        self.repository = repository

    def execute(self, dto: GetTodoDTO) -> TodoDetailsDTO:
        todo = self.repository.get(todo_id=dto.id)
        if todo is None:
            raise ValueError("Todo not found")
        
        return TodoDetailsDTO(
            id=str(todo.id),
            title=todo.title,
            description=todo.description,
            done=todo.done
        )


class UpdateTodoService(UpdateTodoPort):
    def __init__(self, repository: TodoRepositoryPort):
        self.repository = repository

    def execute(self, dto: UpdateTodoDTO) -> TodoUpdatedDTO:
        todo = self.repository.get(todo_id=dto.id)
        if todo is None:
            raise ValueError("Todo not found")
            
        if dto.title is not None:
            todo.title = dto.title
        if dto.description is not None:
            todo.description = dto.description
            
        self.repository.save(todo)
        
        return TodoUpdatedDTO(
            id=str(todo.id),
            title=todo.title,
            description=todo.description,
            done=todo.done
        )


class DeleteTodoService(DeleteTodoPort):
    def __init__(self, repository: TodoRepositoryPort):
        self.repository = repository

    def execute(self, dto: DeleteTodoDTO) -> TodoDeletedDTO:
        todo = self.repository.get(todo_id=dto.id)
        if todo is None:
            raise ValueError("Todo not found")
            
        self.repository.delete(todo_id=dto.id)
        
        return TodoDeletedDTO(
            id=dto.id
        )
