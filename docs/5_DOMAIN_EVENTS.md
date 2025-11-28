## Task 5: Domain Events and EventHandler Port

- Created abstract `Event` class in domain layer
- Implemented `IssueOpenedEvent` with id, title, and description
- Implemented `IssueClosedEvent` with id
- Defined `EventHandler` application port interface with handle methods for both event types
