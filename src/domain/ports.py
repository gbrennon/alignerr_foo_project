from typing import Protocol, List, Optional
from src.domain.entities import Todo


class TodoRepositoryPort(Protocol):
    def save(self, todo: Todo) -> None:
        ...

    
    def find_all(self) -> List[Todo]:
        ...

    
    def get(self, todo_id: str) -> Optional[Todo]:
        ...

    
    def delete(self, todo_id: str) -> None:
        ...
