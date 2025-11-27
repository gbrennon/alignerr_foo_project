Task 4: Refactor Err.unwrap Method

- Modified `Err<E>.unwrap()` to return the error value instead of throwing
- Kept strict generics usage for type safety
- Updated implementation to let consumers handle errors as needed
