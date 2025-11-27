# Task 1: Todo Improvements

This document summarizes the improvements made to the Todo entity.

## Changes Made

1. **Validation Added**:
   - Ensured `id` is always an UUID.
   - `title` now has a minimum length of 3 and a maximum length of 42 characters.
   - `description` now has a maximum length of 512 characters.

## Tests Updated

- Added tests to cover scenarios where validation fails:
  - Title too short
  - Title too long
  - Description too long
