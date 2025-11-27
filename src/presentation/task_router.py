from fastapi import APIRouter
from src.application.todo_services import CreateTodoService
from src.domain.ports import CreateTodoDTO, TodoCreatedDTO, GetTodoDTO, TodoDetailsDTO
from src.infrastructure import InMemoryTodoRepository

router = APIRouter(prefix="/tasks", tags=["tasks"])


def create_task_router(service: CreateTodoService):
    @router.post("/", response_model=TodoCreatedDTO)
    async def create_task(dto: CreateTodoDTO) -> TodoCreatedDTO:
        return service.execute(dto)
    
    return router
