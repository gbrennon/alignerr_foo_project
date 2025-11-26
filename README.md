# User Registration CLI

This project is a Command Line Interface (CLI) that simulates the User registration workflow.

## Libraries Used

- **typer**: Used as the main library to build the CLI application.

## Features

- Provides a menu to register users.
- Validates user input to ensure fields are not empty.
- Uses a `UserRegistrationService` to handle registration logic.

## Usage

To run the application, use the following command:

```bash
python main.py
```

### Registering a User

1. Run the application using the command above.
2. Select option `1` to register a user.
3. You will be prompted to enter the following information:
   - Name
   - Email
   - Password (input will be hidden)

All fields are required and cannot be empty.

## Future Enhancements

- Integrate with `UserFactory` and `UserRepository` for actual user persistence.
</final_file_content>
