### Presentation Layer Summary

The presentation layer of our application is designed to handle HTTP requests and serve responses, acting as the interface between the outer world and our business logic. It leverages FastAPI to define RESTful endpoints that interact with the core application services.

A key component of this layer is the task router, which manages all operations related to tasks. Defined in `src/presentation/task_router.py`, it uses FastAPI's `APIRouter` to group endpoints under the `/tasks` path. Currently, it supports creating new tasks through a POST request, converting incoming data into business logic via DTOs and invoking the appropriate service.

The composition root located in `src/presentation/composition_root.py` is where dependencies are wired together. It instantiates an in-memory repository, injects it into the `CreateTodoService`, and attaches the configured router to the FastAPI app instance. This setup ensures that each request is processed by properly initialized components, maintaining clean separation of concerns and facilitating easy testing and scalability. The application can be run locally using `poetry run python src/main.py`, which starts a Uvicorn server accessible at http://0.0.0.0:8000.
