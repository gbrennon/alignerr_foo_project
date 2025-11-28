## Task 4: Refactor Issue Entity

- Defined `IssueStatus` enum with Open and Closed statuses
- Constructor now requires `status` parameter
- Added validation for `title` length (10-25 characters) and `description` length (0-256 characters)
- Implemented static `open` factory method that generates UUID for `id`
- Made `id` readonly property
- Refactored tests to use new `open` method signature and validate all behaviors
