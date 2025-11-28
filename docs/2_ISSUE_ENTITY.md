## Task 2: Issue Entity

- Created `src/domain/entities/Issue` class with attributes:
  - `id` (immutable)
  - `title`
  - `description`
  - `status` (can be 'open' or 'closed')
- Added `close()` method to change status to 'closed'
- Wrote unit tests for the Issue entity in `src/domain/entities/Issue.spec.ts`
- Verified tests pass with `npm test`
