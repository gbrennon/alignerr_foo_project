from typing import Protocol, List, Optional
from src.domain.entities import Todo
from dataclasses import dataclass


@dataclass
class CreateTodoDTO:
    title: str
    description: str


@dataclass
class TodoCreatedDTO:
    id: str
    title: str
    description: str


@dataclass
class GetTodoDTO:
    id: str


@dataclass
class TodoDetailsDTO:
    id: str
    title: str
    description: str
    done: bool


@dataclass
class UpdateTodoDTO:
    id: str
    title: Optional[str] = None
    description: Optional[str] = None


@dataclass
class TodoUpdatedDTO:
    id: str
    title: str
    description: str
    done: bool


@dataclass
class DeleteTodoDTO:
    id: str


@dataclass
class TodoDeletedDTO:
    id: str


class TodoRepositoryPort(Protocol):
    def save(self, todo: Todo) -> None:
        ...

    
    def find_all(self) -> List[Todo]:
        ...

    
    def get(self, todo_id: str) -> Optional[Todo]:
        ...

    
    def delete(self, todo_id: str) -> None:
        ...


class CreateTodoPort(Protocol):
    def execute(self, dto: CreateTodoDTO) -> TodoCreatedDTO:
        ...


class GetTodoPort(Protocol):
    def execute(self, dto: GetTodoDTO) -> TodoDetailsDTO:
        ...


class UpdateTodoPort(Protocol):
    def execute(self, dto: UpdateTodoDTO) -> TodoUpdatedDTO:
        ...


class DeleteTodoPort(Protocol):
    def execute(self, dto: DeleteTodoDTO) -> TodoDeletedDTO:
        ...
