## Task 5: Domain Events and EventHandler Port

- Created abstract `Event` class in domain layer
- Implemented `IssueOpenedEvent` with id, title, and description
- Implemented `IssueClosedEvent` with id
- Defined generic `EventHandler` application port interface bounded to `Event`
