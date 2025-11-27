from fastapi import FastAPI
from src.application.todo_services import CreateTodoService
from src.infrastructure import InMemoryTodoRepository
from src.presentation.task_router import create_task_router

# Create repository and service instances
data_source = {}
repository = InMemoryTodoRepository(data_source)
service = CreateTodoService(repository)

# Create FastAPI app and include routers
app = FastAPI()
app.include_router(create_task_router(service))
