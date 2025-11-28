## Task 3: Application Ports

- Created `src/application/ports/` directory
- Defined interfaces in ports:
  - `IssueRepository` with methods: save, getById, listAll, delete
  - `EventBus` with methods: publish, subscribe
  - `OpenIssueUseCase` with execute method and DTOs
  - `ListIssuesUseCase` with execute method and DTOs
  - `CloseIssueUseCase` with execute method and DTOs
